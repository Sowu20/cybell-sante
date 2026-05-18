export async function POST(request) {
    const body = await request.json();

    console.log("Données reçues :", body);

    return Response.json({
        message: "Message reçu avec succès",
        data: body,
    });
}