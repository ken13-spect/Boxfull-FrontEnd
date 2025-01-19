const axios = require('axios');

//login
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
    return true
}).catch(function(error){
    console.error("Error en el inicio de sesión:", error.response ? error.response.data : error.message);
    throw error
})
}

//register
export async function Register(name, email,password){
    axios.post('http://localhost:4000/api/auth/register',{
        name: name,
        email:email,
        password:password
    }).then(function(response){
        return response.data
    }).catch(function(error){
        console.error("Register fail:", error.response ? error.response.data : error.message);
    })
}