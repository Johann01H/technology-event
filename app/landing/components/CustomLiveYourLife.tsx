/* eslint-disable @next/next/no-img-element */
"use client"

import { Sparkles, Users, Lightbulb } from "lucide-react"

export function CustomLiveYourLife() {
return (
<section className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#0d0d1a]">
    {/* Efectos de fondo */}
    <div className="absolute inset-0">
        {/* Gradiente radial púrpura */}
        <div className="absolute top-0 left-1/4 w-150 h-150 bg-purple-600/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-fuchsia-600/20 rounded-full blur-[120px]" />

        {/* Líneas de luz cyan */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice">
            <defs>
                <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f5ff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00f5ff" stopOpacity="0" />
                    <stop offset="100%" stopColor="#00f5ff" stopOpacity="0" />
                </linearGradient>
            </defs>
            <line x1="0" y1="200" x2="1200" y2="400" stroke="url(#cyanGradient)"
                strokeWidth="1" />
            <line x1="200" y1="0" x2="600" y2="800" stroke="url(#cyanGradient)"
                strokeWidth="1" />
            <line x1="1000" y1="0" x2="700" y2="800" stroke="url(#cyanGradient)"
                strokeWidth="0.5" />
        </svg>

        {/* Partículas flotantes */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 left-20 w-1 h-1 bg-fuchsia-400 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-700" />
    </div>

    <div className="relative z-10 container mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Contenido izquierdo */}
            <div className="space-y-8">
                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-500/30 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium text-cyan-300">Vive tu vida</span>
                </div>

                {/* Subtítulo */}
                <p
                    className="text-lg md:text-xl font-medium bg-linear-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                    Aprendiendo, creciendo y transformándote digitalmente.
                </p>

                {/* Título principal */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                    Atrévete a ser parte del{" "}
                    <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        cambio digital
                    </span>
                </h2>

                {/* Descripción */}
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                    Reúnete con destacados expertos y conferencistas. Vive una experiencia incomparable de aprendizaje,
                    innovación y networking en la conferencia más relevante del 2026.
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <FeatureCard icon={<Users className="w-5 h-5" />}
                    title="Normatividad"
                    description="Aprende sobre las regulaciones digitales"
                    />
                    <FeatureCard icon={<Lightbulb className="w-5 h-5" />}
                    title="Transformación"
                    description="Impulsa tu crecimiento digital"
                    />
                </div>
            </div>

            {/* Galería de imágenes estilo tech */}
            <div className="relative">
                {/* Marco decorativo */}
                <div
                    className="absolute -inset-4 bg-linear-to-r from-cyan-500/20 via-fuchsia-500/20 to-purple-500/20 rounded-3xl blur-xl" />

                <div className="relative grid grid-cols-2 gap-4">
                    {/* Imagen principal grande */}
                    <div className="col-span-2 relative group">
                        <div
                            className="absolute inset-0 bg-linear-to-r from-cyan-500 to-fuchsia-500 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                        <div
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/0 backdrop-blur-sm p-1">
                            <div
                                className="aspect-video bg-linear-to-br from-purple-900/50 to-fuchsia-900/50 rounded-xl overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80"
                                    alt="Conferencia principal"
                                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            {/* Overlay tech */}
                            <div className="absolute top-3 left-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                <span className="text-xs text-cyan-300 font-mono">LIVE</span>
                            </div>
                        </div>
                    </div>

                    {/* Imágenes secundarias */}
                    <div className="relative group">
                        <div
                            className="absolute inset-0 bg-linear-to-r from-cyan-500 to-fuchsia-500 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                        <div
                            className="relative overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-white/5 to-white/0 backdrop-blur-sm p-1">
                            <div
                                className="aspect-square bg-linear-to-br from-purple-900/50 to-fuchsia-900/50 rounded-lg overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&auto=format&fit=crop&q=80"
                                    alt="Speaker en el evento"
                                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div
                            className="absolute inset-0 bg-linear-to-r from-cyan-500 to-fuchsia-500 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                        <div
                            className="relative overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-white/5 to-white/0 backdrop-blur-sm p-1">
                            <div
                                className="aspect-square bg-linear-to-br from-purple-900/50 to-fuchsia-900/50 rounded-lg overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80"
                                    alt="Networking en el evento"
                                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Elementos decorativos geométricos */}
                <div className="absolute -top-6 -right-6 w-24 h-24 border border-cyan-500/30 rotate-45 rounded-lg" />
                <div
                    className="absolute -bottom-4 -left-4 w-16 h-16 border border-fuchsia-500/30 rotate-12 rounded-lg" />
            </div>
        </div>

    </div>
</section>
)
}

function FeatureCard({
icon,
title,
description,
}: {
icon: React.ReactNode
title: string
description: string
}) {
return (
<div
    className="group p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-fuchsia-500/30 transition-all duration-300">
    <div className="flex items-start gap-3">
        <div
            className="p-2 rounded-lg bg-linear-to-br from-fuchsia-500/20 to-cyan-500/20 text-cyan-400 group-hover:from-fuchsia-500/30 group-hover:to-cyan-500/30 transition-colors">
            {icon}
        </div>
        <div>
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
    </div>
</div>
)
}

function StatCard({ value, label }: { value: string; label: string }) {
return (
<div
    className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
    <div
        className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
        {value}
    </div>
    <div className="text-sm text-gray-400 mt-1">{label}</div>
</div>
)
}
