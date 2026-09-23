import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, lastname, email, company, interest, message } = body;

    // Strict input validation
    if (!name || !lastname || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Faltan campos requeridos en la solicitud.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'El correo electrónico no es válido.' },
        { status: 400 }
      );
    }

    // Sanitization & Security Headers log simulation
    const sanitizedSubmission = {
      id: `SUB-${Date.now()}`,
      name: String(name).slice(0, 100),
      lastname: String(lastname).slice(0, 100),
      email: String(email).slice(0, 150),
      company: String(company || '').slice(0, 150),
      interest: String(interest || 'Consultoría General').slice(0, 100),
      message: String(message).slice(0, 2000),
      timestamp: new Date().toISOString()
    };

    console.log('[SECURITY LOG] Contact Form Submission Sanitized Successfully:', sanitizedSubmission.id);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Solicitud de contacto recibida exitosamente en el servidor de HIWAY.',
        referenceId: sanitizedSubmission.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('[API ERROR] Failed to process contact request:', error);
    return NextResponse.json(
      { success: false, message: 'Error interno en el servidor.' },
      { status: 500 }
    );
  }
}
