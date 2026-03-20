'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const CustomInscriptions = () => {
  const [rol, setRol] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const getValue = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement)?.value ?? ''

    const data = {
      nombres:           getValue('nombres'),
      apellidos:         getValue('apellidos'),
      email:             getValue('email'),
      telefono:          getValue('telefono'),
      direccion:         getValue('direccion'),
      rangoEdad:         getValue('rangoEdad'),
      horarioAsistencia: getValue('horarioAsistencia'),
      dondeNosConociste: getValue('dondeNosConociste'),
      nivelEscolaridad:  getValue('nivelEscolaridad'),
      rol:               getValue('rol'),
      rolOtro:           rol === 'otro' ? getValue('rolOtro') : null,
    }

    try {
      const res = await fetch('/api/inscripciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        toast.success('¡Inscripción enviada con éxito!', {
          description: 'Pronto recibirás más información en tu correo.',
        })
        form.reset()
        setRol('')
      } else {
        const json = await res.json()
        toast.error('No se pudo enviar la inscripción', {
          description: json.error ?? 'Ocurrió un error inesperado.',
        })
      }
    } catch {
      toast.error('Error de conexión', {
        description: 'No se pudo conectar con el servidor. Intenta de nuevo.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex justify-center px-4 py-10'>
      <Card className='w-full max-w-4xl px-6 md:px-10 py-10 shadow-2xl border-none rounded-3xl md:rounded-4xl'>
        <CardHeader>
          <CardTitle className='text-center text-orange-600 font-extrabold text-3xl md:text-5xl'>
            Participa en el evento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2'>

            <div className="flex flex-col gap-2 mb-4">
              <Label>Nombres <span className='text-red-500'>*</span></Label>
              <Input name="nombres" type='text' className='rounded-full bg-white p-5 focus-visible:border-orange-500 focus-visible:ring-0' required />
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <Label>Apellidos <span className='text-red-500'>*</span></Label>
              <Input name="apellidos" type='text' className='rounded-full bg-white p-5 focus-visible:border-orange-500 focus-visible:ring-0' required />
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <Label>Rango de edad <span className='text-red-500'>*</span></Label>
              <Select name="rangoEdad" required>
                <SelectTrigger className='w-full p-5 rounded-full bg-white'>
                  <SelectValue placeholder="Seleccione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="18-24">18 - 24 años</SelectItem>
                    <SelectItem value="25-34">25 - 34 años</SelectItem>
                    <SelectItem value="35-44">35 - 44 años</SelectItem>
                    <SelectItem value="45-54">45 - 54 años</SelectItem>
                    <SelectItem value="55-64">55 - 64 años</SelectItem>
                    <SelectItem value="65+">65 años o más</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <Label>Dirección <span className='text-red-500'>*</span></Label>
              <Input name="direccion" type="text" className='rounded-full bg-white p-5 focus-visible:border-orange-500 focus-visible:ring-0' required />
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <Label>Nivel de escolaridad <span className='text-red-500'>*</span></Label>
              <Select name="nivelEscolaridad" required>
                <SelectTrigger className='w-full p-5 rounded-full bg-white'>
                  <SelectValue placeholder="Seleccione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="basica-primaria">Básica primaria</SelectItem>
                    <SelectItem value="basica-secundaria">Básica secundaria</SelectItem>
                    <SelectItem value="media-academica-clasica">Media académica o clásica</SelectItem>
                    <SelectItem value="normalista">Normalista</SelectItem>
                    <SelectItem value="tecnico-laboral">Técnico laboral</SelectItem>
                    <SelectItem value="tecnico-profesional">Técnico profesional</SelectItem>
                    <SelectItem value="tecnologica">Tecnológica</SelectItem>
                    <SelectItem value="profesional">Profesional</SelectItem>
                    <SelectItem value="postgrado">Postgrado</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <Label>¿Qué rol desempeña? <span className='text-red-500'>*</span></Label>
              <Select name="rol" onValueChange={setRol} required>
                <SelectTrigger className='w-full p-5 rounded-full bg-white'>
                  <SelectValue placeholder="Seleccione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="representante_legal_propietario">Representante legal/propietario</SelectItem>
                    <SelectItem value="socio">Socio</SelectItem>
                    <SelectItem value="gerente">Gerente</SelectItem>
                    <SelectItem value="jefe_director">Jefe/Director</SelectItem>
                    <SelectItem value="colaborador">Colaborador</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {rol === 'otro' && (
              <div className="flex flex-col gap-2 mb-4 col-span-1 md:col-span-2">
                <Label>Especifica tu rol <span className='text-red-500'>*</span></Label>
                <Input name="rolOtro" type="text" className='rounded-full bg-white p-5 focus-visible:border-orange-500 focus-visible:ring-0' required />
              </div>
            )}

            <div className="flex flex-col gap-2 mb-4">
              <Label>Número de teléfono <span className='text-red-500'>*</span></Label>
              <Input name="telefono" type="tel" className='rounded-full bg-white p-5 focus-visible:border-orange-500 focus-visible:ring-0' required />
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <Label>Email <span className='text-red-500'>*</span></Label>
              <Input name="email" type="email" className='rounded-full bg-white p-5 focus-visible:border-orange-500 focus-visible:ring-0' required />
            </div>

            <div className="flex flex-col gap-2 col-span-1 md:col-span-2 mb-4">
              <Label>Horario de asistencia <span className='text-red-500'>*</span></Label>
              <Select name="horarioAsistencia" required>
                <SelectTrigger className='w-full p-5 rounded-full bg-white'>
                  <SelectValue placeholder="Seleccione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="manana">Mañana</SelectItem>
                    <SelectItem value="tarde">Tarde</SelectItem>
                    <SelectItem value="noche">Noche</SelectItem>
                    <SelectItem value="todo el dia">Todo el día</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2 col-span-1 md:col-span-2 mb-4">
              <Label>¿Dónde nos conociste? <span className='text-red-500'>*</span></Label>
              <Select name="dondeNosConociste" required>
                <SelectTrigger className='w-full p-5 rounded-full bg-white'>
                  <SelectValue placeholder="Seleccione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="redes_sociales">Redes sociales</SelectItem>
                    <SelectItem value="recomendacion">Recomendación</SelectItem>
                    <SelectItem value="publicidad">Publicidad</SelectItem>
                    <SelectItem value="sitio_web">Sitio web</SelectItem>
                    <SelectItem value="correo">Correo electrónico</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-start gap-3 px-1 col-span-1 md:col-span-2">
              <Input id="verify-policy" className='w-4 h-4 mt-1 cursor-pointer shrink-0' type="checkbox" required />
              <Label htmlFor="verify-policy" className='text-xs md:text-sm leading-tight cursor-pointer font-normal'>
                He leído y acepto la política de tratamiento de datos personales y autorizo el uso de mis datos para los fines descritos.
              </Label>
            </div>

            <div className="col-span-1 md:col-span-2 mt-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-full py-6 text-lg font-bold cursor-pointer transition-all hover:bg-orange-500 bg-orange-600"
              >
                {loading ? 'Enviando...' : 'Enviar inscripción'}
              </Button>
            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  )
}
