import { Link } from "react-router-dom"

const Entrenadores = () => {
    return (
        <div className="bg-black min-h-screen font-sans text-gray-300 selection:bg-green-500/30">
            {/* Cabecera de la página */}
            <div className="pt-32 pb-12 px-6 border-b border-white/5 bg-zinc-950">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 italic tracking-tighter uppercase">
                        Terminos y Condiciones de <span className="text-green-500">Entrenadores</span>
                    </h1>
                </div>
            </div>

            {/* Contenido Legal */}
            <div className="max-w-4xl mx-auto px-6 py-16 leading-relaxed">
                <div className="space-y-12">
                    
                    {/* 1. INFORMACIÓN GENERAL */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">01.</span> INFORMACIÓN GENERAL
                        </h2>
                        <p className="text-sm">
                            Bienvenido a TheFitWay. Estos Términos y Condiciones
                            regulan el uso de nuestra aplicación móvil por parte de los entrenadores registrados. Al
                            utilizar la app, aceptas estos términos en su totalidad.
                        </p>
                    </section>

                    {/* 2. DESCRIPCIÓN DEL SERVICIO */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">02.</span> DESCRIPCIÓN DEL SERVICIO
                        </h2>
                        <p className="text-sm">
                            TheFitWay es una plataforma que permite a
                            entrenadores gestionar a sus atletas, ofrecer entrenamientos personalizados y realizar
                            un seguimiento del progreso de sus clientes. Los entrenadores podrán comunicarse
                            con los atletas a través del chat interno de la aplicación.
                        </p>
                    </section>

                    {/* 3. REQUISITOS DE USO */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">03.</span> REQUISITOS DE USO
                        </h2>
                        <ul className="space-y-4">
                            <li className="text-sm">
                                <span className="text-green-500 text-xs">●</span>
                                <span className="text-sm ms-2">Debes ser mayor de <span className="font-bold">18 años</span> para registrarte como entrenador.</span>
                            </li>
                            <li className="text-sm">
                                <span className="text-green-500 text-xs">●</span>
                                <span className="text-sm ms-2">Es tu responsabilidad proporcionar información veraz y actualizada.</span>
                            </li>
                        </ul>
                    </section>

                    {/* 4. PAGO A LOS ENTRENADORES */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">04.</span> PAGO A LOS ENTRENADORES
                        </h2>
                        <div className="space-y-4 text-sm">
                            <p>
                                Los pagos de los atletas realizados a través de la aplicación se recibirán entre
                                los 10 primeros días del mes siguiente.
                            </p>
                            <p>
                                Si el pago del atleta se realizó después del día 21 de cada mes, el pago al
                                entrenador se efectuará en el mes posterior al siguiente.
                            </p>
                            <p>
                                TheFitWay actúa como intermediario de pago, pero no se hace responsable de
                                problemas derivados de la plataforma de pago utilizada.
                            </p>
                        </div>
                    </section>

                    {/* 5. LICENCIAS PARA ENTRENADORES */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">05.</span> LICENCIAS PARA ENTRENADORES
                        </h2>
                        <div className="space-y-4 text-sm">
                            <p>
                                Los entrenadores podrán acceder a un método de pago para obtener licencias
                                que les permitan gestionar a los atletas dentro de la aplicación.
                            </p>
                            <p>
                                Las tarifas de las licencias podrán variar según la cantidad de atletas gestionados.
                            </p>
                        </div>
                    </section>

                    {/* 6. RESPONSABILIDAD Y EXENCIÓN DE GARANTÍA */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">06.</span> RESPONSABILIDAD Y EXENCIÓN DE GARANTÍA
                        </h2>
                        <ul className="space-y-4">
                            <li className="text-sm">
                                <span className="text-green-500 text-xs">●</span>
                                <span className="text-sm ms-2">TheFitWay no se hace responsable de lesiones, accidentes o cualquier daño derivado del uso de los entrenamientos proporcionados a través de la plataforma.</span>
                            </li>
                            <li className="text-sm">
                                <span className="text-green-500 text-xs">●</span>
                                <span className="text-sm ms-2">Cada entrenador es responsable de la información, planes de entrenamiento y consejos proporcionados a los atletas.</span>
                            </li>
                            <li className="text-sm">
                                <span className="text-green-500 text-xs">●</span>
                                <span className="text-sm ms-2">Se recomienda a los entrenadores contar con certificaciones adecuadas en su
                                campo profesional.</span>
                            </li>
                        </ul>
                        
                          
                    </section>

                    {/* 7. COMUNICACIÓN CON ATLETAS */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">07.</span> COMUNICACIÓN CON ATLETAS
                        </h2>
                        <div className="space-y-4 text-sm">
                            <p>
                                <span className="text-green-500 text-xs">●</span>
                                <span className="ms-2">Los entrenadores pueden comunicarse con sus atletas a través del chat de la aplicación.</span>
                            </p>
                            <p>
                                <span className="text-green-500 text-xs">●</span>
                                <span className="ms-2">TheFitWay no supervisa ni se responsabiliza del contenido de las conversaciones.</span>
                            </p>
                        </div>
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
                            Para cualquier duda o consulta, puedes contactar con nosotros en <span className="font-bold text-green-500"><a 
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=support@thefitway.es"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-500 underline ms-2"
                            >support@thefitway.es
                            </a></span>.
                        </p>
                    </section>

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

export default Entrenadores