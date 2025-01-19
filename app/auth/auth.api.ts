const axios = require('axios');

export async function Login(password, email){
axios.post('http://localhost:4000/api/auth/login',
    {
        email:email,
        password:password
    }
).then(function(response){
    const {access_token} = response.data;
    localStorage.setItem("authToken", access_token)
    console.log('Bienvenido')
}).catch(function(error){
    console.error("Error en el inicio de sesión:", error.response ? error.response.data : error.message);
})

}