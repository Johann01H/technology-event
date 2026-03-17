import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export const CustomInscriptions = () => {
return (
<div className='flex justify-center'>
    <Card className='px-10 py-10 shadow-2xl border-none rounded-4xl'>
    *TODO: Is pending effect of cards and to input focus.
        <CardHeader>
            <CardTitle className='text-center text-orange-600 font-bold text-5xl'>Participa en el evento</CardTitle>
        </CardHeader>
        <CardContent>
            <form className='grid grid-cols-2 gap-3'>
                <div className="gap mb-5 w-120">
                    <Label htmlFor="names"  className='mb-2'>Nombres <span className='text-red-500'>*</span></Label>
                    <Input
                        id="name" 
                        type='text'
                        name='name-person'
                        className='rounded-full bg-white 20 p-5'
                        required 
                    />
                </div>
                <div className="gap-2 mb-5" >
                    <Label htmlFor="last-names" className='mb-2'>Apellidos <span className='text-red-500'>*</span></Label>
                    <Input 
                        type='text'
                        id="lastname" 
                        name='lastnmame-person'
                        className='rounded-full bg-white p-5 ' 
                        required 
                    />
                </div>
                <div className="gap-2 mb-5">
                    <Label htmlFor="age-rang"  className='mb-2'>Rango de edad <span className='text-red-500'>*</span></Label>
                    <Input 
                        id="rango-edad" 
                        name='age-rang'
                        type="text"  
                        className='rounded-full bg-white p-5' 
                        required 
                    />
                </div>
                <div className="gap-2 mb-5">
                    <Label htmlFor="address" className='mb-2'>Dirección <span className='text-red-500'>*</span></Label>
                    <Input 
                        id="address"
                        type="text" 
                        className='rounded-full bg-white p-5' 
                        required
                    />
                </div>
                <div className="gap-2 mb-5">
                    <Label htmlFor="level-education" className='mb-2'>Nivel de escolaridad <span className='text-red-500'>*</span></Label>
                    <Select name='level-education'>
                        <SelectTrigger className='w-full p-5 rounded-full bg-white'>
                            <SelectValue placeholder="Seleccione..."/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Rol</SelectLabel>
                                <SelectItem value={'basica-primaria'}>Básica primaria</SelectItem>
                                <SelectItem value={'basica-secundaria'}>Básica secundaria</SelectItem>
                                <SelectItem value={'media-academica-clasica'}>Média acádemica o clásica</SelectItem>
                                <SelectItem value={'normalista'}>Normalista</SelectItem>
                                <SelectItem value={'tecnico-laboral'}>Técnico laboral</SelectItem>
                                <SelectItem value={'tecnico-profesional'}>Técnico profesional</SelectItem>
                                <SelectItem value={'tegnológica'}>Tegnológica</SelectItem>
                                <SelectItem value={'profesional'}>Profesional</SelectItem>
                                <SelectItem value={'postgrado'}>Postgrado</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="gap-2 mb-5">
                    <Label htmlFor="email" className='mb-2'>¿Qué rol desempeña dentro del emprendimiento <span className='text-red-500'>*</span></Label>
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
                                <SelectItem value={'otro'}>otro</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div> 
                <div className="gap-2 mb-5">
                    <Label htmlFor="phone-number" className='mb-2'>Número de teléfono <span className='text-red-500'>*</span></Label>
                    <Input 
                        id="phone-num" 
                        type="number"
                        className='rounded-full bg-white p-5' 
                        required 
                    />
                </div>
                <div className="gap-2 mb-5">
                    <Label htmlFor="email"  className='mb-2'> Email <span className='text-red-500'>*</span></Label>
                    <Input 
                        id="email"
                        type="email" 
                        className='rounded-full bg-white p-5'
                        required 
                    />
                </div>
                <div className="gap-2 col-span-2 mb-2">
                    <Label htmlFor="shedule"  className='mb-2'> Horario de asistencia <span className='text-red-500'>*</span></Label>
                    <Input 
                        id="shedule"
                        name='shedule-asistence'
                        type="text" 
                        className='rounded-full bg-white p-5'
                        required 
                    />
                </div>
                <div className="gap-2 col-span-2 mb-5">
                    <Label htmlFor="where"  className='mb-2'> ¿Dónde nos conociste? <span className='text-red-500'>*</span></Label>
                    <Textarea 
                        id='where-meet'
                        className='bg-white p-10'
                        name='where-meet-us'
                    />
                </div>
            </form>
            <div className="flex items-center gap-2">
                <Input id="verify-policy" className='w-3 cursor-pointer' type="checkbox" required />
                <Label htmlFor="email" className='lowercase'> He leído y acepto la política de tratamiento de datos personales y autorizo el
                    uso de mis datos para los fines descritos.</Label>
            </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full rounded-full p-5 cursor-pointer hover:bg-orange-500 bg-orange-600">
                Envíar inscripción
            </Button>
        </CardFooter>
    </Card>
</div>
)
}
