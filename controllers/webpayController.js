const Http = require('node-rest-client').Client;
require('dotenv').config();


let webpay_petition;
let webpay_response;


module.exports.home = (req,res)=>{
    return  res.render('webpay/index.html', {title: 'Webpay Plus'});
}

module.exports.webpay_pagar = (req,res)=>{
    const apiKeyId = process.env.WEBPAY_ID;
    const apiKeySecret = process.env.WEBPAY_KEY;

    var http = new Http();  
    var args = {
        data: JSON.stringify(req.body),
        headers: { 
            "Content-Type": "application/json",
            "Tbk-Api-Key-Id": apiKeyId,
            "Tbk-Api-Key-Secret": apiKeySecret
        }
    };

    http.post(process.env.WEBPAY_URL, args, (data,response)=>{
        console.log(data);
        console.log(response);
        return res.json(data)
    }) 
}

module.exports.webpay_respuesta = (req,res)=>{

    const token =  req.body.token_ws;

    if (!token) {
        return res.status(400).send('Token de transacción no proporcionado');
    }

    console.log("token",token);
    var http = new Http();
    args = {
        data: {},
        headers: {
            "Content-Type": "application/json",
            "Tbk-Api-Key-Id": process.env.WEBPAY_ID,
            "Tbk-Api-Key-Secret": process.env.WEBPAY_KEY
        }
    }

    http.put(process.env.WEBPAY_URL + "/" + token, args, (data,response)=>{
        return res.json({data})
    })


}
