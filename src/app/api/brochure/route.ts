import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, brochureSlug } = body;

    if (!name || !email || !brochureSlug) {
      return NextResponse.json(
        { success: false, message: 'Faltan campos obligatorios para generar la descarga.' },
        { status: 400 }
      );
    }

    const sanitizedDownload = {
      id: `BRC-${Date.now()}`,
      name: String(name).slice(0, 100),
      email: String(email).slice(0, 150),
      company: String(company || '').slice(0, 150),
      brochureSlug: String(brochureSlug).slice(0, 80),
      timestamp: new Date().toISOString()
    };

    console.log('[SECURITY LOG] Brochure Request Processed:', sanitizedDownload.id);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Brochure generado y listo para entrega.',
        referenceId: sanitizedDownload.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('[API ERROR] Failed to process brochure request:', error);
    return NextResponse.json(
      { success: false, message: 'Error interno en el servidor.' },
      { status: 500 }
    );
  }
}
