import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();
        const { nom, email, objet } = body;

        const response = await resend.emails.send({
            from: "CYBELL-SANTE <onboarding@resend.dev>",
            to: ["sowukelly67@gmail.com"],
            subject: "Nouveau message",
            html: `
                <h2>Nouveau contact</h2>
                <p><strong>Nom :</strong> ${nom}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Message :</strong> ${objet}</p>
            `
        });

        return Response.json({
            success: true,
            response,
        });
    } catch (error) {
        return Response.json(
            {
                success: false,
                error,
            },
            { status: 500 }
        );
    }
}