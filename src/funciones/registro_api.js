
async function Registro_api(uid_firebase,email,device_token,password=null,googleId=null,){
    try{
    const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/auth/register`,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email: email,
            password: password,
            googleId: googleId,
            firebase_uid:uid_firebase,
            device_token:device_token
        })
    });
    const data = await respuesta.json();
    if(!respuesta.ok){
        throw new Error(data.message || 'Error en el registro');
    }
    return data.message;
    }
    catch(error){
        throw error;
    }
}

export default Registro_api;