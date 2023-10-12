//dependencia: request
const request = require('request')

//direccion de la API: endpoint
const url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME'

//Hacer operacion asincrono
let r = request(url,
    {json:true},
    (error, respuesta, body)=>{
        let Gatos = body
        Gatos.forEach(Gato => {
            console.log(Gato.url)
            console.log("-------------------------------")
        });;
    })