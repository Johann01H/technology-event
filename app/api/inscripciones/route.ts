import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const inscripcion = await prisma.inscripcion.create({
      data: {
        nombres:           body.nombres,
        apellidos:         body.apellidos,
        email:             body.email,
        telefono:          body.telefono,
        direccion:         body.direccion,
        rangoEdad:         body.rangoEdad,
        horarioAsistencia: body.horarioAsistencia,
        dondeNosConociste: body.dondeNosConociste,
        nivelEscolaridad:  body.nivelEscolaridad,
        rol:               body.rol,
        rolOtro:           body.rolOtro ?? null,
      }
    })

    return NextResponse.json(inscripcion, { status: 201 })

  } catch (error: unknown) {
    console.error('ERROR INSCRIPCION:', error)
    if (error instanceof Error && (error as any).code === 'P2002') {
      return NextResponse.json(
        { error: 'Este email ya está registrado.' },
        { status: 409 }
      )
    }
    return NextResponse.json({ error: 'Error interno.' }, { status: 500 })
  }
}