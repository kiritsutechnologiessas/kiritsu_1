/// <reference path="../pb_data/types.d.ts" />

const contactRecipient = "diliberto.negrete@kiritsutechnologies.com";
const cleanText = (value, maxLength) => String(value || "").trim().slice(0, maxLength);
const escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;");

routerAdd("POST", "/contact", (e) => {
    const body = e.requestInfo().body;
    const name = cleanText(body.name, 120);
    const email = cleanText(body.email, 254).toLowerCase();
    const subject = cleanText(body.subject, 180);
    const message = cleanText(body.message, 5000);

    if (!name || !email || !subject || message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return e.json(400, { message: "Completa todos los campos con información válida." });
    }

    const sender = $app.settings().meta.senderAddress;
    const senderName = $app.settings().meta.senderName || "KIRITSU TECHNOLOGIES";
    const mail = new MailerMessage({
        from: { address: sender, name: senderName },
        to: [{ address: contactRecipient }],
        headers: { "Reply-To": `${name} <${email}>` },
        subject: `[Contacto web] ${subject}`,
        html: `<h2>Nuevo mensaje desde el sitio web</h2><p><strong>Nombre:</strong> ${escapeHtml(name)}</p><p><strong>Correo:</strong> ${escapeHtml(email)}</p><p><strong>Asunto:</strong> ${escapeHtml(subject)}</p><p><strong>Mensaje:</strong><br>${escapeHtml(message).replace(/\r?\n/g, "<br>")}</p>`,
    });

    $app.newMailClient().send(mail);
    return e.json(200, { message: "Mensaje enviado correctamente." });
});
