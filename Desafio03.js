
function iniciarSesion(){
    let opciones = Number(prompt(`1 Registrarse\n2 Ingresar\n3 Salir`))

    switch(opciones){
        case 1 : registro(); 
        break;

        case 2: logeo(); 
        break;

        case 3: alert("Saners Ticket te da la bienvenida. "); 
        break;

        default : alert("Vuelva a ingresar algún dato"); 
        break;
    }
}
iniciarSesion();

function registro(usuario, pass, passcheck, correo){
    alert("Te vamos a pedir unos datos.");

    usuario = prompt("Escribí tu nombre de usuario:");
    pass = prompt("Ingresá contraseña:");
    passcheck = prompt("Repetí tu constreña:");
    if( pass != passcheck){
        alert("Algo salió mal! no te preocupes tiene solución.");
        alert("¡A repetir la contraseña!");
       passcheck = prompt("Una vez más y ya terminamos.");
    }    
    correo = prompt("Ingresá tu correo:");
}

function logeo(usuario, _pass){
    alert("¡Vamos a ver que hay!")

    usuario = prompt("Escribí tu nombre de usuario");
    pass = prompt("Ingrese contraseña");

    alert(`${usuario} :) ¡llegaste bien! vamos a mirar algún plan para salir.`);
}


function evento(nombre, fecha, ubicacion, hora, descri, cantidad, dispo){
    this.nombre = nombre;
    this.fecha = fecha;
    this.ubicacion = ubicacion;
    this.hora = hora;
    this.descri = descri;
}

let cartNombres = ["SANA", "Geek Fest", "Puerto Piojo", "Maciel Tour"];
let cartFecha = ["17/09/2022", "30/10/2022", "15/08/2022", "18/11/2022"];
let cartUbi = ["Berzategui", "Palermo", "La Boca", "Isla Maciel"];
let cartHora = ["17:00 hs.", "19:00 hs.", "20:00 hs.", "10:00 hs."]
let cartDescri = ["Un recital unico para venir y bailar mucho.", "El evento del año para los fanaticos de la tecnologia retro.", "Un documentqal 360, para vivir una experiencia increible en Banchero", "Veni a recorrer la Isla Maciel y concoer los musrales de grandes artistas."]

function carteles(cartNombre, cartFecha, cartUbi, cartHora, cartDescri){
    alert(`EVENTO: \n${cartNombre}\n${cartFecha}\n${cartUbi}\n${cartHora}\n${cartDescri}`);
  
}

for (i = 0; i < cartNombres.length; i++){
    carteles(cartNombres[i], cartFecha[i], cartUbi[i], cartHora[i], cartDescri[i] )
}

