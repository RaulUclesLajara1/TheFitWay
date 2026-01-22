import React from 'react';
import { Link } from 'react-router-dom';

const Privacidad = () => {
    return (
        <div className="bg-black min-h-screen font-sans text-gray-300 selection:bg-green-500/30">
            {/* Cabecera de la página */}
            <div className="pt-32 pb-12 px-6 border-b border-white/5 bg-zinc-950">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 italic tracking-tighter uppercase">
                        Política de <span className="text-green-500">Privacidad</span>
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
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <ul className="space-y-2 text-sm md:text-base">
                                <li><span className="text-white font-semibold">Responsable del tratamiento:</span> Víctor Hernández Molina</li>
                                <li><span className="text-white font-semibold">Correo de contacto:</span> <a href="mailto:support@thefitway.es" className="text-green-500 hover:underline">support@thefitway.es</a></li>
                                <li><span className="text-white font-semibold">Sitio web:</span> www.thefitway.es</li>
                            </ul>
                        </div>
                    </section>

                    {/* 2. Datos que recopilamos */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">02.</span> DATOS QUE RECOPILAMOS
                        </h2>
                        <p className="mb-4">TheFitWay recopila los siguientes datos personales de sus usuarios:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-2xl border border-white/5 bg-zinc-900/50">
                                <h3 className="text-green-500 font-bold mb-2 uppercase text-xs tracking-widest">Atletas</h3>
                                <p className="text-sm">Nombre, apellidos, email, número de teléfono, peso, altura, edad, historial de entrenamientos, fotos y objetivos personales.</p>
                            </div>
                            <div className="p-5 rounded-2xl border border-white/5 bg-zinc-900/50">
                                <h3 className="text-green-500 font-bold mb-2 uppercase text-xs tracking-widest">Entrenadores</h3>
                                <p className="text-sm">Nombre, apellidos, email, número de teléfono.</p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm  text-red-400 p-4 rounded-xl border border-red-500/20">
                            <span className="font-bold">Datos sensibles:</span> Información sobre entrenamientos y alimentación.
                        </p>
                    </section>

                    {/* 3 & 4. Recopilación y Uso */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-green-500 italic">03.</span> COMO SE RECOPILAN LOS DATOS
                            </h2>
                            <p className="text-sm">Los datos se recopilan a través de un formulario
                            dentro de la aplicación y mediante el inicio de sesión con Google, Apple u otras redes
                            sociales.</p>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-green-500 italic">04.</span> USO DE DATOS
                            </h2>
                            <h3 className='text-sm text-white mb-2'>Los datos recopilados se usan para:</h3>
                            <ul className="text-sm list-disc list-inside space-y-1">
                                <li>Personalizar calculadora de macronutrientes y calorías</li>
                                <li>Permitir la comunicación entre entrenadores y atletas a través del chat</li>
                            </ul>
                        </section>
                    </div>

                    {/* 5 & 6. Compartición y Visibilidad */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">05.</span> COMPARTICIÓN CON TERCEROS
                        </h2>
                        <p className="text-sm">Actualmente, no compartimos datos con terceros. Si en el futuro lo hacemos, informaremos a los usuarios y solicitaremos
                        su consentimiento cuando sea necesario.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">06.</span> VISIBILIDAD ENTRE USUARIOS
                        </h2>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3">
                                <span className="text-green-500 text-xs">●</span>
                                <span><strong className="text-white">Entrenadores:</strong> Pueden ver datos de entrenamientos de sus atletas y los mensajes enviados a través del chat.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-green-500 text-xs">●</span>
                                <span><strong className="text-white">Atletas:</strong> NO pueden ver datos de otros atletas ni de los entrenadores,
                                salvo los que los entrenadores proporcionen en su descripción.</span>
                            </li>
                        </ul>
                    </section>

                    {/* 7. Almacenamiento */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">07.</span> ALMACENAMIENTO Y SEGURIDAD
                        </h2>
                        <div className="space-y-3 text-sm">
                            <p>Los datos se almacenan en un servidor propio.</p>
                            <p>Los datos se conservarán mientras el usuario mantenga su cuenta activa. Si
                            solicita su eliminación, se borrarán en un plazo máximo de 30 días</p>
                            <p>Actualmente, la app no implementa cifrado ni doble autenticación. Se
                            recomienda usar contraseñas seguras.</p>
                        </div>
                    </section>

                    {/* 8. Derechos del Usuario */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">08.</span> DERECHOS DEL USUARIO
                        </h2>
                        <p className="text-sm leading-relaxed">
                            Los usuarios pueden acceder, modificar o eliminar sus
                            datos a través de la aplicación y la página web. También pueden ejercer sus derechos
                            de acceso, rectificación, supresión y portabilidad escribiendo a
                            <a 
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=support@thefitway.es"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-500 underline ms-2"
                            >support@thefitway.es
                            </a>.
                        </p>
                    </section>
                    {/* 9. PUBLICIDAD*/}
                    <section>
                        <h2 className="text-xl font-bold text-white flex gap-3 mb-4">
                            <span className="text-green-500 italic">09.</span> PUBLICIDAD Y MARKETING
                        </h2>
                   
                        <p className="text-sm">
                            No utilizamos los datos de los usuarios para enviar
                            publicidad ni compartimos información con terceros con fines publicitarios.
                        </p>
                    </section>

                    {/* 10. SUSCRIPCIONES Y PAGOS*/}
                    <section>
                        <h2 className="text-xl font-bold text-white flex gap-3 mb-4">
                            <span className="text-green-500 italic">10.</span> SUSCRIPCIONES Y PAGOS
                        </h2>

                        <p className="text-sm">
                            TheFitWay ofrece planes de pago o suscripciones a
                            través de una pasarela de pago (pendiente de selección).
                        </p>
                    </section>
                

                    {/* 11. Integraciones */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-green-500 italic">11.</span> INTEGRACIONES EXTERNAS
                        </h2>
                        <h2 className = "text-sm mb-4">TheFitWay se conecta con: </h2>
                        <h2 className = "text-sm text-white mb-2"><span className="font-bold">Samsung Health, Apple Health y Google Fit</span> para recopilar datos de actividad.</h2>
                        <h2 className = "text-sm text-white mb-2"><span className="font-bold">Facebook</span> para facilitar el inicio de sesión</h2>

                    </section>

                    {/* 12. CONTACTO ENTRE USUARIOS*/}
                    <section>
                        <h2 className="text-xl font-bold text-white flex gap-3 mb-4">
                            <span className="text-green-500 italic">12.</span> CONTACTO ENTRE USUARIOS
                        </h2>

                        <p className="text-sm">
                            Los entrenadores pueden contactar a los atletas
                            mediante el <span className="">chat</span> de la aplicación y el correo electrónico si lo incluyen en su
                            descripción.
                        </p>
                    </section>

                    {/* 13. Modificaciones */}
                    <section>
                        <h2 className="text-xl font-bold text-white flex gap-3 mb-4">
                            <span className="text-green-500 italic">12.</span> MODIFICACIONES A LA POLÍTICA DE PRIVACIDAD
                        </h2>

                        <p className="text-sm">
                            TheFitWay podrá actualizar
                            esta política de privacidad en cualquier momento. Los usuarios serán notificados
                            sobre cambios relevantes mediante la aplicación o el correo electrónico registrado.
                        </p>
                        <p className="mt-6 font-black text-green-500 italic tracking-tighter text-center">
                        © 2024 THEFITWAY. Todos los derechos reservados.
                        </p>
                    </section>
                </div>
            </div>



            {/* Botón para volver */}
            <div className="pb-20 flex items-center">
                <Link to="/" className="text-sm font-bold text-white hover:text-green-500 transition-colors uppercase tracking-widest flex items-center gap-2 mx-auto">
                    ← Volver al inicio
                </Link>
            </div>
        </div>
    );
};

export default Privacidad;