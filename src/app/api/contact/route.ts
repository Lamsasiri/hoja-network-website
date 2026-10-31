import { NextResponse } from "next/server";

export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
  organization?: string;
  type?: "contact" | "partner" | "general";
}

const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://wp.hojanetwork.org/wp-json/wp/v2";
// L'endpoint public de Contact Form 7 sous wp.hojanetwork.org
const WP_BASE_ORIGIN = WP_API_URL.replace(/\/wp-json\/wp\/v2\/?$/, "");
const WPCF7_ENDPOINT = `${WP_BASE_ORIGIN}/wp-json/contact-form-7/v1/contact-forms/315/feedback`;

function sanitizeInput(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    const name = sanitizeInput(body.name || "");
    const email = sanitizeInput(body.email || "");
    const organization = sanitizeInput(body.organization || "");
    const rawSubject = sanitizeInput(body.subject || "");
    const message = sanitizeInput(body.message || "");
    const formType = body.type || "contact";

    // 1. Validation stricte des données requises
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez renseigner tous les champs obligatoires (nom, email, message)." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Veuillez fournir une adresse email valide." },
        { status: 400 }
      );
    }

    // Construction du sujet complet avec mention de l'organisation si présente
    const fullSubject = organization
      ? `[${formType.toUpperCase()}] ${rawSubject || "Nouvelle demande"} — ${organization}`
      : `[${formType.toUpperCase()}] ${rawSubject || "Nouvelle demande"}`;

    const fullMessage = organization
      ? `Organisation : ${organization}\n\nMessage :\n${message}`
      : message;

    // 2. Préparation du payload pour Contact Form 7 officiel (Formulaire ID 315)
    const formData = new FormData();
    formData.append("_wpcf7", "315");
    formData.append("_wpcf7_unit_tag", "wpcf7-f315-o1");
    formData.append("your-name", name);
    formData.append("your-email", email);
    formData.append("your-subject", fullSubject);
    formData.append("your-message", fullMessage);

    // 3. Appel de l'API WordPress Contact Form 7
    const wpResponse = await fetch(WPCF7_ENDPOINT, {
      method: "POST",
      body: formData,
    });

    if (!wpResponse.ok) {
      console.error(`[WP CF7 API HTTP ERROR]: ${wpResponse.status} ${wpResponse.statusText}`);
      return NextResponse.json(
        { error: "Le serveur WordPress n'a pas pu traiter la demande. Veuillez réessayer ou utiliser l'email direct." },
        { status: 502 }
      );
    }

    const wpResult = await wpResponse.json();

    // 4. Vérification du statut réel renvoyé par Contact Form 7
    if (wpResult.status === "mail_sent") {
      return NextResponse.json({
        success: true,
        message: wpResult.message || "Votre message a été transmis avec succès à l'équipe HOJA Network.",
      });
    }

    // Si Contact Form 7 a refusé l'envoi (champs invalides, anti-spam, etc.)
    console.warn("[WP CF7 REJECTED]:", wpResult);
    return NextResponse.json(
      {
        error: wpResult.message || "Échec de l'envoi du message via WordPress. Veuillez vérifier vos informations.",
        invalid_fields: wpResult.invalid_fields || [],
      },
      { status: 422 }
    );
  } catch (error: any) {
    console.error("[CONTACT ROUTE FATAL ERROR]:", error);
    return NextResponse.json(
      { error: "Une erreur réseau interne est survenue lors de l'envoi. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}
