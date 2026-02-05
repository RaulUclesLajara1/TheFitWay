import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getToken } from 'firebase/messaging';
import { messaging } from '../funciones/firebase';
import { auth } from '../funciones/firebase';
import Registro_api from '../funciones/registro_api';

const Registro = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("")
    const [exito,setExito] = useState("");
    const permisoNotificacion = async () =>{
        let device_token = "";


        try{
        const permiso = await Notification.requestPermission(); //solicitar permiso para notificaciones
        if (permiso === 'granted'){ //si acepta
            device_token = await getToken(messaging, {vapidKey: "BG6icXd5PfFarKYcJTAtCd0c0gTtQ5HB_YkKV2NbLyiIE7FCxfhjPwpAMiyo1JQfit9wGthNyAo1rFPsWUjDhuc"});
        }
        else{
            setError("");
            setExito("");
            setError("Necesitas aceptar las notificaciones para el registro");
            return;
        }
        }
        catch(error){
            setError(error);
        }
        return device_token;

    }
    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setExito("");

    const device_token= await permisoNotificacion();
    if(!device_token) return;


    try {
        // 1. Intentar registro en Firebase
        const userCredential = await createUserWithEmailAndPassword(
            auth, 
            formData.email, 
            formData.password
        );
        const user = userCredential.user;
        // // 2. Intentar registro en la API de TheFitWay
        // const respuestaAPI = await Registro_api(user.uid, user.email, device_token);
        setExito("Cuenta creada con exito");
        
        // // Si todo sale bien
        // setExito("¡Registro completado con éxito en el sistema!");
        // console.log("Respuesta de la API:", respuestaAPI);

    } catch (error) {
       
        
        // Si el error viene de Firebase, tendrá un .code
        if (error.code) {
            switch (error.code) {
                case "auth/weak-password":
                    setError("Contraseña débil: mínimo 6 caracteres.");
                    break;
                case "auth/email-already-in-use":
                    setError("Este correo ya está registrado.");
                    break;
                case "auth/invalid-email":
                    setError("El formato del correo no es válido.");
                    break;
                default:
                    setError("Ocurrió un error en el registro. Inténtalo de nuevo.");
            }
        } else {
            // error en la API
            // setError(error.message || "Error al conectar con el servidor de TheFitWay.");
        }
    }
};
    const handleGoogle = async () => {
        setError("");
        setExito("");
        const device_token= await permisoNotificacion();
        if(!device_token) return;

        const provider = new GoogleAuthProvider();
        try{
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
        
            const isNewUser = result._tokenResponse.isNewUser;
            // const googleId = user.providerData[0].uid;
            // const respuestaAPI_G = await Registro_api(user.uid, user.email, device_token, null, googleId);
            if (!isNewUser){
                setError("Ya existe una cuenta asociada");
            }
            else{
                setExito("Cuenta creada con éxito");
            }

        }catch(error){
            setError(error.message);
            
        
        }};

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
                        <img src="/assets/google-icon.svg" alt="Google" className="w-5 h-5 mr-2 object-contain" />
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