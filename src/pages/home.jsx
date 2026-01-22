import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
const Home = () => {
    return (
        <div className="bg-black min-h-screen font-sans selection:bg-green-500/30">
            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src={logo} className="w-18 h-18 ">
                            
                        </img>
                        <span className="text-xl font-extrabold tracking-tight italic uppercase text-white">
                            TheFitWay
                        </span>
                    </div>
                    <button className="bg-green-500 hover:bg-green-400 text-black px-6 py-2 rounded-full font-bold transition-all text-sm uppercase tracking-wider">
                        Descargar
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-48 pb-24 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-green-500/5 blur-[120px] rounded-full -z-10"></div>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white">
                        Tu cuerpo. Tu plan. <br/>
                        <span className="text-green-500 italic">Tu camino.</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        Con TheFitWay tienes en una sola app lo que de verdad funciona: contador de calorías, registro de alimentos, recetas por IA y entrenamientos para progresar de forma medible.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-5">
                        <button className="bg-white text-black px-10 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-lg">
                            Descargar App
                        </button>
                        
                    </div>
                </div>
            </header>

            {/* Sección: Por qué TheFitWay */}
            <section className="py-24 px-6 bg-zinc-950 border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">
                                Por qué <span className="text-green-500 underline decoration-green-500/30">TheFitWay</span>
                            </h2>
                            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                                En TheFitWay no se trata de motivación, sino de un sistema. Registra lo que comes, ajusta tus macros, descubre recetas que se adaptan a ti y entrena con estructura. 
                            </p>
                            <p className="text-green-500 font-bold text-xl italic leading-snug">
                                "La diferencia es simple: te lo ponemos fácil para que seas constante."
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* Sección: Funcionalidades */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-tighter text-white">
                            Lo que puedes hacer
                        </h2>
                        <div className="h-1 w-20 bg-green-500 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="group p-10 rounded-[2rem] border border-white/5 bg-zinc-900/40 hover:border-green-500/40 transition-all duration-300 hover:-translate-y-2">
                            <div className="text-green-500 text-4xl mb-6 font-black italic opacity-50 group-hover:opacity-100 transition-opacity">01</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Cuenta Calorías</h3>
                            <p className="text-gray-400 text-base leading-relaxed">Registro de alimentos sin líos. Controla tu ingesta diaria y revisa tus macros.</p>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="group p-10 rounded-[2rem] border border-white/5 bg-zinc-900/40 hover:border-green-500/40 transition-all duration-300 hover:-translate-y-2">
                            <div className="text-green-500 text-4xl mb-6 font-black italic opacity-50 group-hover:opacity-100 transition-opacity">02</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Recetas IA</h3>
                            <p className="text-gray-400 text-base leading-relaxed">Adaptadas a tus gustos, objetivos y lo que tengas en la nevera.</p>
                        </div>
                     
                        {/* Card 3 */}
                        <div className="group p-10 rounded-[2rem] border border-white/5 bg-zinc-900/40 hover:border-green-500/40 transition-all duration-300 hover:-translate-y-2">
                            <div className="text-green-500 text-4xl mb-6 font-black italic opacity-50 group-hover:opacity-100 transition-opacity">03</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Entrenamientos</h3>
                            <p className="text-gray-400 text-base leading-relaxed">Rutinas listas para usar o planes guiados por profesionales.</p>
                        </div>
                      
                        {/* Card 4 */}
                        <div className="group p-10 rounded-[2rem] border border-white/5 bg-zinc-900/40 hover:border-green-500/40 transition-all duration-300 hover:-translate-y-2">
                            <div className="text-green-500 text-4xl mb-6 font-black italic opacity-50 group-hover:opacity-100 transition-opacity">04</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Profesionales</h3>
                            <p className="text-gray-400 text-base leading-relaxed">Encuentra entrenadores y nutricionistas para un seguimiento real.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-white/10 text-center bg-black">
                <p className="text-gray-500 text-sm mb-6 uppercase tracking-[0.2em] font-medium">Tu mejor versión llega con estructura.</p>
                <div className="text-3xl font-black italic text-green-500 tracking-tighter">THEFITWAY</div>
                <div className="mt-10 text-gray-600 text-xs flex justify-center gap-6">
                    
                    <Link to="/privacidad" className="hover:text-gray-400 cursor-pointer transition-colors">Politicas de Privacidad</Link>
                </div>
            </footer>
        </div>
    );
};

export default Home;