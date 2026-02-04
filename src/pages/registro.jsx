import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../funciones/firebase';
import googleLogo from "../assets/google-icon.svg"
const Registro = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("")
    const [exito,setExito] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth,formData.email,formData.password)
        .then((userCredential)=>{
            const user = userCredential.user;
            setError("");
            setExito("Usuario creado con éxito");
            console.log(user.uid);
        })
        .catch((error) => {
            console.log(`error: ${error.code}: ${error.message}`);
            setExito("");
            setError(error.message);
        })
    }    
    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
  });

    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



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
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Correo Electrónico</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="atleta@thefitway.es" className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500 transition-colors" required />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Contraseña</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500 transition-colors" required />
                    </div>
                    { error? 
                    <p className="text-xs text-red-400 mb-2">{error}</p>: <></>}
                    { exito? 
                    <p className="text-xs text-green-400 mb-2">{exito}</p>: <></>}

                    <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black font-black py-4 uppercase tracking-tighter italic transition-all">
                        Comenzar Entrenamiento
                    </button>

                    {/* SEPARADOR */}
                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-white/10"></div>
                        <span className="flex-shrink mx-4 text-xs text-gray-500 uppercase">o</span>
                        <div className="flex-grow border-t border-white/10"></div>
                    </div>
                    <button 
                        type="button" 
                        className="w-full flex justify-center items-center bg-white text-black font-bold py-3 px-4 rounded-sm hover:bg-gray-200 transition-all"
                        onClick={handleGoogle}
                        >
                        <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2 object-contain" />
                        Registrarse con Google
                     </button>

                    
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