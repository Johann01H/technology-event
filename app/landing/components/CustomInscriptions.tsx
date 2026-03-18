import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export const CustomInscriptions = () => {
return (
<div className='flex justify-center px-4 py-10'> {/* Padding lateral para mobile */}
    <Card className='w-full max-w-4xl px-6 md:px-10 py-10 shadow-2xl border-none rounded-3xl md:rounded-4xl'>
        <CardHeader>
            <CardTitle className='text-center text-orange-600 font-extrabold text-3xl md:text-5xl'>
                Participa en el evento
            </CardTitle>
        </CardHeader>
        <CardContent>
            {/* CORRECCIÓN: grid-cols-1 para mobile, md:grid-cols-2 para desktop */}
            <form className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2'>
                
                <div className="flex flex-col gap-2 mb-4 w-full"> {/* Eliminado w-120 que rompía el layout */}
                    <Label htmlFor="names">Nombres <span className='text-red-500'>*</span></Label>
                    <Input
                        id="name" 
                        type='text'
                        name='name-person'
                        className='rounded-full bg-white focus-visible:border-orange-500 focus-visible:ring-0 p-5'
                        required 
                    />
                </div>

                <div className="flex flex-col gap-2 mb-4 w-full">
                    <Label htmlFor="last-names">Apellidos <span className='text-red-500'>*</span></Label>
                    <Input 
                        type='text'
                        id="lastname" 
                        name='lastnmame-person'
                        className='rounded-full bg-white p-5 focus-visible:border-orange-500 focus-visible:ring-0' 
                        required 
                    />
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <Label htmlFor="age-rang">Rango de edad <span className='text-red-500'>*</span></Label>
                    <Input 
                        id="rango-edad" 
                        name='age-rang'
                        type="text"  
                        className='rounded-full bg-white p-5 focus-visible:border-orange-500 focus-visible:ring-0' 
                        required 
                    />
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <Label htmlFor="address">Dirección <span className='text-red-500'>*</span></Label>
                    <Input 
                        id="address"
                        type="text" 
                        className='rounded-full bg-white p-5 focus-visible:border-orange-500 focus-visible:ring-0' 
                        required
                    />
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <Label htmlFor="level-education">Nivel de escolaridad <span className='text-red-500'>*</span></Label>
                    <Select name='level-education'>
                        <SelectTrigger className='w-full p-5 rounded-full bg-white'>
                            <SelectValue placeholder="Seleccione..."/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Rol</SelectLabel>
                                <SelectItem value={'basica-primaria'}>Básica primaria</SelectItem>
                                <SelectItem value={'basica-secundaria'}>Básica secundaria</SelectItem>
                                <SelectItem value={'media-academica-clasica'}>Media académica o clásica</SelectItem>
                                <SelectItem value={'normalista'}>Normalista</SelectItem>
                                <SelectItem value={'tecnico-laboral'}>Técnico laboral</SelectItem>
                                <SelectItem value={'tecnico-profesional'}>Técnico profesional</SelectItem>
                                <SelectItem value={'tecnologica'}>Tecnológica</SelectItem>
                                <SelectItem value={'profesional'}>Profesional</SelectItem>
                                <SelectItem value={'postgrado'}>Postgrado</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <Label htmlFor="role">¿Qué rol desempeña? <span className='text-red-500'>*</span></Label>
                    <Select name='role'>
                        <SelectTrigger className='w-full p-5 rounded-full bg-white'>
                            <SelectValue placeholder="Seleccione..."/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Rol</SelectLabel>
                                <SelectItem value={'representante'}>Representante legal/propietario</SelectItem>
                                <SelectItem value={'socio'}>Socio</SelectItem>
                                <SelectItem value={'gerente'}>Gerente</SelectItem>
                                <SelectItem value={'jefe-director'}>Jefe/Director</SelectItem>
                                <SelectItem value={'administrador'}>Administrador</SelectItem>
                                <SelectItem value={'colaborador'}>Colaborador</SelectItem>
                                <SelectItem value={'otro'}>Otro</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div> 

                <div className="flex flex-col gap-2 mb-4">
                    <Label htmlFor="phone-number">Número de teléfono <span className='text-red-500'>*</span></Label>
                    <Input 
                        id="phone-num" 
                        type="number"
                        className='rounded-full bg-white p-5 focus-visible:border-orange-500 focus-visible:ring-0' 
                        required 
                    />
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <Label htmlFor="email">Email <span className='text-red-500'>*</span></Label>
                    <Input 
                        id="email"
                        type="email" 
                        className='rounded-full bg-white p-5 focus-visible:border-orange-500 focus-visible:ring-0'
                        required 
                    />
                </div>

                <div className="flex flex-col gap-2 col-span-1 md:col-span-2 mb-4">
                    <Label htmlFor="shedule">Horario de asistencia <span className='text-red-500'>*</span></Label>
                    <Input 
                        id="shedule"
                        name='shedule-asistence'
                        type="text" 
                        className='rounded-full bg-white p-5 focus-visible:border-orange-500 focus-visible:ring-0'
                        required 
                    />
                </div>

                <div className="flex flex-col gap-2 col-span-1 md:col-span-2 mb-6">
                    <Label htmlFor="where">¿Dónde nos conociste? <span className='text-red-500'>*</span></Label>
                    <Textarea 
                        id='where-meet'
                        className='bg-white p-5 md:p-10 rounded-2xl focus-visible:border-orange-500 focus-visible:ring-0'
                        name='where-meet-us'
                    />
                </div>
            </form>

            <div className="flex items-start gap-3 px-1">
                <Input id="verify-policy" className='w-4 h-4 mt-1 cursor-pointer shrink-0' type="checkbox" required />
                <Label htmlFor="verify-policy" className='text-xs md:text-sm leading-tight cursor-pointer font-normal'>
                    He leído y acepto la política de tratamiento de datos personales y autorizo el
                    uso de mis datos para los fines descritos.
                </Label>
            </div>
        </CardContent>

        <CardFooter className="mt-6">
            <Button type="submit" className="w-full rounded-full py-6 text-lg font-bold cursor-pointer transition-all hover:bg-orange-500 bg-orange-600">
                Enviar inscripción
            </Button>
        </CardFooter>
    </Card>
</div>
)
}