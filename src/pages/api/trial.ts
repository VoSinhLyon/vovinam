import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { name, email, group, message } = req.body as {
    name?: string;
    email?: string;
    group?: string;
    message?: string;
  };

  if (!name || !email) {
    return res.status(400).json({ error: "Nom et email sont obligatoires." });
  }

  try {
    await resend.emails.send({
      from: "Vovinam Lyon <no-reply@vovinam-lyon.fr>", // à ajuster selon ton domaine Resend
      to: "contact@vovinam-lyon.fr",                   // là où TU veux recevoir le mail
      replyTo: email,
      subject: `[Cours d’essai] ${name} - ${group || "Groupe non précisé"}`,
      text: `
Nouvelle demande de cours d’essai depuis le site Vovinam Lyon

Nom : ${name}
Email : ${email}
Groupe souhaité : ${group || "Non précisé"}

Message :
${message || "(aucun message supplémentaire)"}
      `.trim(),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Erreur envoi email cours d’essai :", error);
    return res.status(500).json({ error: "Erreur lors de l’envoi du mail." });
  }
}
