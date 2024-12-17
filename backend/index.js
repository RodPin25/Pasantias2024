//Inicializamos las constantes de los scripts necesarios para el funcionaminto del programa.
const express=require("express");
const db=require("./db")

const app=express(); //Creamos la app que nos servira para poder hacer los requests al servidor.
const PORT=3000; //Creamos la constante que contendra el puerto del servidor

app.use(express.json()) //Fromatemos al tipo JSON

//Bienvenida a la app
app.get("/",(req,res)=>{
    res.send("Bienvenido a la app de las Pasantias");
})

//Pagina para los usuarios
app.get('/users', async (req, res) => { //Una funcion asincrona (async) sirve para no sobrecargar el servidor
    try { //Es para intentar sin romper nada
        const respuesta = await db.query('SELECT * from tblusers');
        res.json(respuesta)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al obtener los datos')
    }
});

//Pagina para las cuentas de los usuarios
app.get("/accounts", async (req,res)=>{
    try{
        const respuesta = await db.query('SELECT * from tblaccount');
        res.json(respuesta);
    } catch(error){
        console.log(error);
        res.status(500).send('Error al obtener los datos');
    }
});

//Pagina para las deudas de los usuarios.
app.get("/debts",(req,res)=>{
    try{
        const respuesta = db.query('SELECT * from tbldebts');
        res.json(respuesta);
    }catch(error){
        console.log(error);
        res.status(500).send('Error al obtener los datos');
    }
});

//Pagina para los prestamos de los usuarios.
app.get("/loans",(req,res)=>{
    try{
        const respuesta = db.query('SELECT * from tblloans');
        res.json(respuesta);
    } catch(error){
        console.log(error);
        res.status(500).send('Error al obtener los datos');
    }
});

//Pagina para los pagos hechos en el banco
app.get("/payments",(req,res)=>{
    try{
        const respuesta = db.query('SELECT * from tblpayments');
        res.json(respuesta);
    } catch(error){
        console.log(error);
        res.status(500).send('Error al obtener los datos');
    }
});

//Pagina para las empresas que pueden recibir pagos en el banco
app.get("/receptors",(req,res)=>{
    try{
        const respuesta = db.query('SELECT * from tblreceptors');
        res.json(respuesta);
    } catch(error){
        console.log(error);
        res.status(500).send('Error al obtener los datos');
    }
});


//Listener para que el servidor se quede siempre abierto a recibir peticiones.
app.listen(PORT,()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

