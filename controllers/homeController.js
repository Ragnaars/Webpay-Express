module.exports.home = (req,res)=>{
    res.send("Hola Mundo desde el controlador home");
}

module.exports.nosotros = (req,res)=>{
    res.json({message: "Hola desde nosotros"})
}

module.exports.parametros = (req,res)=>{

    //desestructuramos los parametros
    const {id,slug} = req.params;

    res.send("Hola desde el controlador parametros con id: "+id+" y slug: "+slug)
}

module.exports.query = (req,res)=>{
    const {id,slug} = req.query;
    res.send("Hola desde el controlador query con id: "+id+" y slug: "+slug)
}
