import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      message: 'El envío por formulario se encuentra temporalmente inhabilitado. Por favor contáctanos en consultas@cxhiway.com.'
    },
    { status: 503 }
  );
}
