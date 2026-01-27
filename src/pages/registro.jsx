import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

const Registro = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   // Manejo token Google
    const handleCredentialResponse = (response) => {
        console.log("JWT Token recibido de Google:", response.credential);
        
    };

    useEffect(() => {
        
        const renderGoogleButton = () => {
            if (window.google) {
                google.accounts.id.initialize({
                    client_id: "368384361305-n13o9etlmilbmac47ot9fiveuf7lkau4.apps.googleusercontent.com",
                    callback: handleCredentialResponse,
                    context: "signup" 
                });

                google.accounts.id.renderButton(
                    document.getElementById("botonGoogle"),
                    { 
                        type: "standard", 
                        shape: "rectangular", 
                        text: "signup_with",
                        theme: "filled_white", 
                        size: "large",
                        width: "384", 
                        logo_alignment: "left"
                    }
                );
            }
        };

        
        renderGoogleButton();
    }, []);

    return (
        <div className="bg-black min-h-screen font-sans text-gray-300 selection:bg-green-500/30 flex flex-col justify-center items-center px-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-2">
                        Crear <span className="text-green-500">Cuenta</span>
                    </h1>
                    
                </div>

                <form 
                    onSubmit={handleSubmit} 
                    className="bg-zinc-950 border border-white/5 p-8 rounded-sm shadow-2xl space-y-6"
                >
                    {/* Campos de Nombre, Email y Password  */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Nombre Completo</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ej. Iker Sánchez" className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500 transition-colors" required />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Correo Electrónico</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="atleta@thefitway.es" className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500 transition-colors" required />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Contraseña</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500 transition-colors" required />
                    </div>

                    <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black font-black py-4 uppercase tracking-tighter italic transition-all">
                        Comenzar Entrenamiento
                    </button>

                    {/* SEPARADOR */}
                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-white/10"></div>
                        <span className="flex-shrink mx-4 text-xs text-gray-500 uppercase">o</span>
                        <div className="flex-grow border-t border-white/10"></div>
                    </div>

                    {/* BOTÓN GOOGLE DENTRO DEL FORM O JUSTO DEBAJO */}
                    <div id="botonGoogle" className="flex justify-center"></div>
                </form>

                <div className="mt-8 text-center space-y-4">
                    <p className="text-xs text-gray-600">
                        Al registrarte confirmas que aceptas nuestros 
                        <Link to="/atletas" className="text-green-500 hover:underline"> Términos y Condiciones</Link>.
                    </p>
                    <Link to="/" className="text-xs font-bold text-white hover:text-green-500 transition-colors uppercase tracking-widest flex items-center justify-center gap-2">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Registro;