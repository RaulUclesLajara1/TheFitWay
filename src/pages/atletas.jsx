import { Link } from "react-router-dom"

const Atletas = () => {
    return (
        <div className="bg-black min-h-screen font-sans text-gray-300 selection:bg-green-500/30">
            {/* Cabecera de la página */}
            <div className="pt-32 pb-12 px-6 border-b border-white/5 bg-zinc-950">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 italic tracking-tighter uppercase">
                        Terminos y Condiciones de <span className="text-green-500">Atletas</span>
                    </h1>
                </div>
            </div>

            {/* Contenido Legal */}
            <div className="max-w-4xl mx-auto px-6 py-16 leading-relaxed">
                <div className="space-y-12">
                    
                    {/* 1. Información General */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">01.</span> INFORMACIÓN GENERAL
                        </h2>
                        <p className="text-sm">
                            Bienvenido a TheFitWay. Estos Términos y Condiciones
                            regulan el uso de nuestra aplicación móvil por parte de los atletas registrados. Al
                            utilizar la app, aceptas estos términos en su totalidad.
                        </p>
                    </section>

                    {/* 2. Descripción de servicio*/}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">02.</span> DESCRIPCIÓN DEL SERVICIO
                        </h2>
                        <p className = "text-sm">
                            TheFitWay es una aplicación diseñada para ayudar a
                            los atletas a mejorar su rendimiento a través de entrenamientos y calculadoras de
                            macronutrientes. Los entrenamientos disponibles en la aplicación han sido revisados
                            por <span className="font-bold">Iker Sánchez Selfa.</span>
                        </p>
                    </section>

                    {/* 3 Requisitos de uso*/}
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-green-500 italic">03.</span> REQUISITOS DE USO
                            </h2>
                            <ul className="space-y-4">
                                <li className="text-sm">
                                <span className="text-green-500 text-xs">●</span>
                                <span className="text-sm ms-2">Debes tener al menos <span className="font-bold">14 años </span>
                                para registarte en la aplicación</span>
                                </li>
                                <li className="text-sm"> 
                                <span className="text-green-500 text-xs">●</span>
                                <span className ="text-sm ms-2">Es tu responsabilidad proporcionar información veraz y actualizada</span>
                                </li>
                            </ul>
                        </section>
           

                    {/* 4. USO DE LA INFORMACIÓN*/}
                    <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-green-500 italic">04.</span> USO DE LA INFORMACIÓN
                            </h2>
                            <ul className="space-y-4">
                                <li className="text-sm">
                                <span className="text-green-500 text-xs">●</span>
                                <span className="text-sm ms-2">Los datos proporcionados se utilizarán para personalizar la experiencia en la aplicación
                                , incluyendo entrenamientos y seguimiento de progresos
                                </span>
                                </li>
                                <li className="text-sm"> 
                                <span className="text-green-500 text-xs">●</span>
                                <span className ="text-sm ms-2">TheFitWay no compartirá tus datos con terceros sin tu consentimiento, salvo lo
                                indicado en la <Link to="/privacidad" className="font-bold">Política de Privacidad</Link></span>
                                </li>
                            </ul>
                        </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">05.</span> RESPONSABILIDAD Y EXENCIÓN DE GARANTÍA
                        </h2>
                        <div className="space-y-4 text-sm">
                            <p>
                                TheFitWay no se hace responsable de lesiones, accidentes o cualquier daño
                                derivado del uso de los entrenamientos o recomendaciones de la aplicación.
                            </p>
                            <p>
                                Antes de comenzar cualquier programa de entrenamiento o nutrición, se
                                recomienda consultar con un médico o profesional de la salud.
                            </p>
                            <p>
                                El usuario es el único responsable del uso que haga de la aplicación.
                            </p>
                            <p>
                                TheFitWay no se hace responsable de cualquier estafa o incongruencia por
                                parte de los entrenadores.
                            </p>
                        </div>
                    </section>

                    {/* 6. COMUNICACIÓN CON ENTRENADORES */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">06.</span> COMUNICACIÓN CON ENTRENADORES
                        </h2>
                        <ul className="space-y-4">
                            <li className="text-sm">
                                <span className="text-green-500 text-xs">●</span>
                                <span className="text-sm ms-2">La aplicación permite la comunicación con entrenadores a través de un chat interno.</span>
                            </li>
                            <li className="text-sm">
                                <span className="text-green-500 text-xs">●</span>
                                <span className="text-sm ms-2">TheFitWay no se responsabiliza del contenido de las conversaciones entre usuarios.</span>
                            </li>
                        </ul>
                    </section>

                    {/* 7. SUSCRIPCIONES Y PAGOS */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">07.</span> SUSCRIPCIONES Y PAGOS
                        </h2>
                        <ul className="space-y-4">
                            <li className="text-sm">
                                <span className="text-green-500 text-xs">●</span>
                                <span className="text-sm ms-2">Algunos servicios pueden requerir un pago o suscripción.</span>
                            </li>
                            <li className="text-sm">
                                <span className="text-green-500 text-xs">●</span>
                                <span className="text-sm ms-2">El pago se realizará a través de una pasarela segura.</span>
                            </li>
                            <li className="text-sm">
                                <span className="text-green-500 text-xs">●</span>
                                <span className="text-sm ms-2">No se realizarán reembolsos salvo que la ley lo exija.</span>
                            </li>
                        </ul>
                    </section>

                    {/* 8. MODIFICACIONES A LOS TÉRMINOS Y CONDICIONES */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">08.</span> MODIFICACIONES A LOS TÉRMINOS Y CONDICIONES
                        </h2>
                        <p className="text-sm">
                            TheFitWay podrá modificar estos términos en cualquier momento. Se notificará a los usuarios sobre cambios relevantes a través de la aplicación.
                        </p>
                    </section>

                    {/* 9. CONTACTO */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">09.</span> CONTACTO
                        </h2>
                        <p className="text-sm">
                            Para cualquier duda o consulta, puedes contactar con nosotros en <a 
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=support@thefitway.es"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-500 underline ms-2"
                            >support@thefitway.es
                            </a>.
                        </p>
                    </section>

                    {/* Footer legal del PDF */}
                    <p className="mt-12 font-black text-green-500 italic tracking-tighter text-center">
                        © 2024 THEFITWAY. TODOS LOS DERECHOS RESERVADOS.
                    </p>
                </div>
            </div>



            {/* Botón para volver */}
            <div className="pb-20 flex items-center">
                <Link to="/" className="text-sm font-bold text-white hover:text-green-500 transition-colors uppercase tracking-widest flex items-center gap-2 mx-auto">
                    ← Volver al inicio
                </Link>
            </div>
        </div>
    )
}

export default Atletas
