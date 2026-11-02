import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      message: 'La solicitud de brochures por formulario se encuentra temporalmente inhabilitada. Por favor escríbenos a consultas@cxhiway.com.'
    },
    { status: 503 }
  );
}
