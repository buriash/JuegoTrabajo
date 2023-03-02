`use-strict`;

window.onload = inicio;

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getAnalytics, } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getFirestore, addDoc, collection, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { firebaseConfig } from './firebaseConf.js';
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

var personajes = 
{
    x: 0,
    y: 0
};

var eventListeners = [];

var tiradas = 0;
var esta = true;


function inicio() 
{

    alert("El juego tiene musica(Deberia saltar automaticamente)");
    alert("Si no salta puedes ir a la parte superior del HTML y dar al play para iniciar o pararla");
    alert("Si no quieres registrate puedes jugar con los siguientes datos");
    alert("Usuario: jugador@gmail.com");
    alert("contraseña: jugador1");

    if (document.getElementById("DivTotal") != null) {
        document.getElementById("DivTotal").remove();
    }

    document.getElementsByTagName("body")[0].background = "./img/fondo1.jpg";


    let DivTotal = document.createElement("div");
    DivTotal.setAttribute("id", "DivTotal");

    let DivLogin = document.createElement("div");
    DivLogin.setAttribute("id", "DivLogin");

    let DivBoton = document.createElement("div");
    DivBoton.setAttribute("id", "DivBoton");

    let h1 = document.createElement("h1");
    h1.setAttribute("id", "LoRe");
    h1.textContent = "Login/Register";

    let pEmail = document.createElement("label");
    pEmail.textContent = "Email";

    let pContra = document.createElement("label");
    pContra.textContent = "Password";

    let eMail = document.createElement("input");
    eMail.setAttribute("type", "text");
    eMail.setAttribute("id", "eMail");
    eMail.setAttribute("eMail", "eMail");
    eMail.setAttribute("placeholder", "Email");

    let contrasenaRegistro = document.createElement("input");
    contrasenaRegistro.setAttribute("type", "password");
    contrasenaRegistro.setAttribute("id", "contrasenaRegistro");
    contrasenaRegistro.setAttribute("eMail", "contrasenaRegistro");
    contrasenaRegistro.setAttribute("placeholder", "Contraseña");

    let jugar = document.createElement("button");
    jugar.setAttribute("id", "jugar");
    jugar.textContent = "Login";
    jugar.addEventListener("click", (evento) => 
    {
        inicioSesion();
    });

    let registrar = document.createElement("button");
    registrar.setAttribute("id", "registrar");
    registrar.textContent = "Registrarse";
    registrar.addEventListener("click", (evento) => 
    {

        registro();

        document.getElementById("jugar").addEventListener("click", (evento) => 
        {
            usuarioRegistro();
        });
    });
    
    document.body.appendChild(DivTotal);
    DivTotal.appendChild(DivLogin);
    DivLogin.appendChild(h1);
    DivLogin.appendChild(document.createElement("br"));
    DivLogin.appendChild(pEmail);
    DivLogin.appendChild(document.createElement("br"));
    DivLogin.appendChild(eMail);
    DivLogin.appendChild(document.createElement("br"));
    DivLogin.appendChild(pContra);
    DivLogin.appendChild(document.createElement("br"));
    DivLogin.appendChild(contrasenaRegistro);
    DivLogin.appendChild(document.createElement("br"));
    DivLogin.appendChild(DivBoton);
    DivBoton.appendChild(jugar);
    DivBoton.appendChild(registrar);

}


function registro() {

    if (document.getElementById("DivTotal") != null) {
        document.getElementById("DivTotal").remove();
    }

    document.getElementsByTagName("body")[0].background = "./img/fondo1.jpg";

    let DivTotal = document.createElement("div");
    DivTotal.setAttribute("id", "DivTotal");

    let DivRegister = document.createElement("div");
    DivRegister.setAttribute("id", "DivRegister");

    let DivBoton = document.createElement("div");
    DivBoton.setAttribute("id", "DivBoton");

    let h1 = document.createElement("h1");
    h1.setAttribute("id", "LoRe");
    h1.textContent = "Registro";

    let pEmail = document.createElement("label");
    pEmail.textContent = "Email";

    let pContra = document.createElement("label");
    pContra.textContent = "Password";

    let eMail = document.createElement("input");
    eMail.setAttribute("type", "text");
    eMail.setAttribute("id", "eMail");
    eMail.setAttribute("eMail", "eMail");
    eMail.setAttribute("placeholder", "Email");

    let contrasenaRegistro = document.createElement("input");
    contrasenaRegistro.setAttribute("type", "password");
    contrasenaRegistro.setAttribute("id", "contrasenaRegistro");
    contrasenaRegistro.setAttribute("eMail", "contrasenaRegistro");
    contrasenaRegistro.setAttribute("placeholder", "Contraseña");


    let jugar = document.createElement("button");
    jugar.setAttribute("id", "jugar");
    jugar.textContent = "Registrarse";

    let registrar = document.createElement("button");
    registrar.setAttribute("id", "logear");
    registrar.textContent = "Iniciar Sesion";


    if (document.getElementById("DivTotal") != null) {
        document.getElementById("DivTotal").remove();
    }

    document.body.appendChild(DivTotal);
    DivTotal.appendChild(DivRegister);
    DivRegister.appendChild(h1);
    DivRegister.appendChild(document.createElement("br"));
    DivRegister.appendChild(pEmail);
    DivRegister.appendChild(document.createElement("br"));
    DivRegister.appendChild(eMail);
    DivRegister.appendChild(document.createElement("br"));
    DivRegister.appendChild(pContra);
    DivRegister.appendChild(document.createElement("br"));
    DivRegister.appendChild(contrasenaRegistro);
    DivRegister.appendChild(document.createElement("br"));
    DivRegister.appendChild(DivBoton);
    DivBoton.appendChild(jugar);
    DivBoton.appendChild(registrar);
    registrar.addEventListener("click", inicio);

}


function tablero()
{

    if (document.getElementById("DivTotal") != null) {
        document.getElementById("DivTotal").remove();
    }

    esta = true;
    tiradas = 0;


    document.getElementsByTagName("body")[0].background = "./img/fondo2.jpg";



    let DivTotal = document.createElement("div");
    DivTotal.setAttribute("id", "DivTotal");

    let tablero1 = document.createElement("div");
    tablero1.setAttribute("id", "tablero1");

    let tablero2 = document.createElement("table");
    tablero2.setAttribute("id", "tablero2");

    let dado1 = document.createElement("div");
    dado1.setAttribute("id", "dado1");

    let dado2 = document.createElement("div");
    dado2.setAttribute("id", "dado2");

    let personaje = document.createElement("img");
    personaje.setAttribute("id", "hero");
    personaje.setAttribute("src", "./img/pj.png");

    var cofre1 = document.createElement("img");
    cofre1.setAttribute("src", "./img/cofre.png");
    cofre1.setAttribute("id", "cofre1");

    let boton = document.createElement("button");
    boton.setAttribute("id", "botonPlay")
    boton.setAttribute("type", "submit");
    boton.textContent = "Tirada";
    boton.addEventListener("click", activarDado);



    crearDado(dado2);



    document.body.appendChild(DivTotal);
    DivTotal.appendChild(tablero1);
    tablero1.appendChild(tablero2);
    DivTotal.appendChild(dado1);
    dado1.appendChild(dado2);
    DivTotal.appendChild(boton);

    var arrayT = new Array(10);
    for (var i = 0; i < 10; i++) {
        arrayT[i] = new Array(10);
    }
    for (var i = 0; i < arrayT.length; i++) {
        var tr = document.createElement("tr");
        tablero2.appendChild(tr);
        for (var j = 0; j < arrayT[i].length; j++) {
            var td = document.createElement("td");
            td.setAttribute("id", i + "" + j);
            tr.appendChild(td);
        }
    }


    personajes.x = 0;
    personajes.y = 0;
    let td1 = document.getElementById("00");
    td1.appendChild(personaje);

    let td2 = document.getElementById("99");
    td2.appendChild(cofre1);

}


function activarDado() 
{
    if (esta) 
    {


        var promesa = new Promise((respuesta, rechazo) => {
            esta = false;
            let num = Math.floor(Math.random() * 6) + 1;
            let position = "cubo" + num;
            document.querySelector(".cubo3D").id = position;

            document.querySelector(".cubo3D").classList.add("animacion1");
            setTimeout((evento) => {
                document.querySelector(".cubo3D").classList.remove("animacion1");
            }, 1000)

            respuesta(num);
            rechazo("Mala Tirada");
        }).then((resultado) => {
            var casilla1 = 
            {
                x: personajes.x + parseInt(resultado),
                y: personajes.y
            }
            var casilla2 = 
            {
                x: personajes.x - parseInt(resultado),
                y: personajes.y
            }
            var casilla3 = 
            {
                x: personajes.x,
                y: personajes.y + parseInt(resultado)
            }
            var casilla4 = 
            {
                x: personajes.x,
                y: personajes.y - parseInt(resultado)
            }

            var array = new Array();
            array.push(casilla1);
            array.push(casilla2);
            array.push(casilla3);
            array.push(casilla4);


            for (var i of array)
            {
                try {
                    var id = i.x + "" + i.y;
                    var casilla = document.getElementById(id);
                    casilla.setAttribute("style", "border: 4px solid red;");
                    casilla.addEventListener("click", mover);
                    eventListeners.push(casilla);
                } catch (err) { }
            }
            tiradas++;
        })
    }
}


function mover(evento) 
{
    var td = evento.srcElement;
    if (td.tagName.toLowerCase() == "img") td = td.parentNode;
    var personajeMover = document.querySelector("#hero");
    var temp = personajeMover.cloneNode(true);
    var padre = personajeMover.parentNode;

    td.appendChild(temp);
    padre.removeChild(personajeMover);
    for (var i of [...document.querySelectorAll("td")]) {
        i.setAttribute("style", "border: 1px solid black;");
    }
    for (var i of eventListeners) {
        i.removeEventListener("click", mover);
    }
    eventListeners = [];
    if (td.getAttribute("id") != "99") {

        personajes.x = parseInt(td.getAttribute("id").charAt(0));
        personajes.y = parseInt(td.getAttribute("id").charAt(1));
        esta = true;
    } else {

        td.removeChild(document.querySelector("#cofre1"));
        personajes.x = 9;
        personajes.y = 9;
        victoria(tiradas);
    }

}

function victoria(tiradas) 
{
    alert(`Felicidades! Encontraste el cofre en: ${tiradas} tiradas`);
    record(tiradas);
}

function guardarDatosPartida(tiradas) 
{

    let usuario = sessionStorage.getItem("user");

    try
    {
        alert("Acabas de hacer un record con: " + tiradas + " tiradas \n Pulsa el dado para jugar");
        addDoc(collection(db, "users"),
            {
                user: usuario,
                record: tiradas,
                ultimosMov: tiradas
            });
        let button = document.getElementById("botonPlay");
        button.addEventListener("click", tablero);
    }
    catch (err) {
        console.error("Error añadiendo los datos: ", err);
    }
}

async function record(tiradas) 
{

    let usuario = sessionStorage.getItem("user");

    const consulta = await getDocs(collection(db, "users"));
    let encontrado = false;
    consulta.forEach((result) => {
        if (result.data().user == usuario && encontrado == false) {
            if (result.data().record > tiradas) {
                alert("Acabas de hacer un record con: " + tiradas + " tiradas\n Pulsa el dado para jugar");     
                let actu = doc(db, "users", result.id);
                updateDoc(actu,
                    {
                        record: tiradas,
                        ultimosMov: tiradas,
                    });
                let button = document.getElementById("botonPlay");
                button.addEventListener("click", tablero);
            }
            else {
                alert("No has superado el record :( - El record es de: " + result.data().record + " tiradas\n Pulsa el dado para jugar");
                let actu = doc(db, "users", result.id);
                updateDoc(actu,
                    {
                        ultimosMov: tiradas
                    });
                let button = document.getElementById("botonPlay");
                button.addEventListener("click", tablero);
            }
            encontrado = true;
        }
    });
    if (encontrado == false) {
        guardarDatosPartida(tiradas);
    }

}

function usuarioRegistro() 
{

    let emailRegistro = document.getElementById("eMail");
    let contrasenaRegistro = document.getElementById("contrasenaRegistro");
    const auth = getAuth();

    if (eMail.value != "" && contrasenaRegistro.value != "") {
        createUserWithEmailAndPassword(auth, emailRegistro.value, contrasenaRegistro.value)
            .then(() => {
                alert("Registrado");
                inicio();
            })
            .catch((err) => {
                alert("Fallo en el registro");
            });
    }
}

function inicioSesion() 
{

    let emailInicio = document.getElementById("eMail");
    let contrasenaRegistro = document.getElementById("contrasenaRegistro");
    let splitN = emailInicio.value.split("@");
    splitN = splitN[0];
    const auth = getAuth();

    if (emailInicio.value != "" && contrasenaRegistro.value != "") {
        signInWithEmailAndPassword(auth, emailInicio.value, contrasenaRegistro.value)
            .then(() => {
                if (document.getElementById("jugar")) {
                    document.getElementById("jugar").remove();
                    document.getElementById("registrar").remove();
                    let jugar = document.createElement("button");
                    jugar.setAttribute("id", "play");
                    jugar.textContent = "Jugar";
                    document.getElementById("DivBoton").appendChild(jugar);
                    jugar.addEventListener("click", (evento) => {
                        alert("Login: " + splitN);
                        tablero();
                        sessionStorage.setItem("user", emailInicio.value);
                    });
                }
            })
            .catch((err) => {
                alert("Datos incorrectos");
            });
    }
}



function crearDado(contenedor) 
{


    let espacio3D = document.createElement("div");
    espacio3D.classList.add("espacio3D");

    let cubo3D = document.createElement("div");
    cubo3D.classList.add("cubo3D");

    let base = document.createElement("div");
    base.classList.add("base");



    cubo3D.id = "cubo1";

    let aside1 = document.createElement('aside');
    let aside2 = document.createElement('aside');
    let aside3 = document.createElement('aside');
    let aside4 = document.createElement('aside');
    let aside5 = document.createElement('aside');
    let aside6 = document.createElement('aside');

    aside1.classList.add("cara");
    aside2.classList.add("cara");
    aside3.classList.add("cara");
    aside4.classList.add("cara");
    aside5.classList.add("cara");
    aside6.classList.add("cara");

    aside1.classList.add("cara1");
    aside2.classList.add("cara2");
    aside3.classList.add("cara3");
    aside4.classList.add("cara4");
    aside5.classList.add("cara5");
    aside6.classList.add("cara6");

    let canvas1 = document.createElement('canvas');
    let canvas2 = document.createElement('canvas');
    let canvas3 = document.createElement('canvas');
    let canvas4 = document.createElement('canvas');
    let canvas5 = document.createElement('canvas');
    let canvas6 = document.createElement('canvas');


    canvas1.id = "dado1";
    canvas2.id = "dado2";
    canvas3.id = "dado3";
    canvas4.id = "dado4";
    canvas5.id = "dado5";
    canvas6.id = "dado6";


    canvas1.classList.add("dado");
    canvas2.classList.add("dado");
    canvas3.classList.add("dado");
    canvas4.classList.add("dado");
    canvas5.classList.add("dado");
    canvas6.classList.add("dado");

    canvas1.width = 300;
    canvas2.width = 300;
    canvas3.width = 300;
    canvas4.width = 300;
    canvas5.width = 300;
    canvas6.width = 300;


    canvas1.height = 300;
    canvas2.height = 300;
    canvas3.height = 300;
    canvas4.height = 300;
    canvas5.height = 300;
    canvas6.height = 300;


    if (canvas1.getContext)
    {
        var ctx = canvas1.getContext("2d");
        var X = canvas1.width * 0.5;
        var Y = canvas1.height * 0.5;
        var r = canvas1.height * 0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    if (canvas2.getContext) {
        var ctx = canvas2.getContext("2d");
        var X = canvas2.width * 0.25;
        var Y = canvas2.height / 2;
        var r = canvas2.height * 0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas2.width * 0.75;
        var Y = canvas2.height / 2;
        var r = canvas2.height / 8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    if (canvas3.getContext) {
        var ctx = canvas3.getContext("2d");
        var X = canvas3.width * 0.25;
        var Y = canvas3.height * 0.25;
        var r = canvas3.height * 0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas3.width * 0.5;
        var Y = canvas3.height / 2;
        var r = canvas3.height / 8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas3.width * 0.75;
        var Y = canvas3.height * 0.75;
        var r = canvas3.height / 8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    if (canvas4.getContext) {
        var ctx = canvas4.getContext("2d");
        var X = canvas4.width * 0.25;
        var Y = canvas4.height * 0.25;
        var r = canvas4.height * 0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas4.width * 0.75;
        var Y = canvas4.height * 0.25;
        var r = canvas4.height / 8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas4.width * 0.25;
        var Y = canvas4.height * 0.75;
        var r = canvas4.height / 8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas4.width * 0.75;
        var Y = canvas4.height * 0.75;
        var r = canvas4.height / 8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    if (canvas5.getContext) {
        var ctx = canvas5.getContext("2d");
        var X = canvas5.width * 0.25;
        var Y = canvas5.height * 0.25;
        var r = canvas5.height * 0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas5.width * 0.75;
        var Y = canvas5.height * 0.25;
        var r = canvas5.height / 8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas5.width * 0.25;
        var Y = canvas5.height * 0.75;
        var r = canvas5.height / 8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas5.width * 0.75;
        var Y = canvas5.height * 0.75;
        var r = canvas5.height / 8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas5.width * 0.5;
        var Y = canvas5.height * 0.5;
        var r = canvas5.height * 0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    if (canvas6.getContext) {
        var ctx = canvas6.getContext("2d");
        var X = canvas6.width * 0.25;
        var Y = canvas6.height * 0.25;
        var r = canvas6.height * 0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas6.width * 0.75;
        var Y = canvas6.height * 0.25;
        var r = canvas6.height / 8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas6.width * 0.25;
        var Y = canvas6.height * 0.75;
        var r = canvas6.height / 8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas6.width * 0.75;
        var Y = canvas6.height * 0.75;
        var r = canvas6.height / 8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas6.width * 0.5;
        var Y = canvas6.height * 0.25;
        var r = canvas6.height * 0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas6.width * 0.5;
        var Y = canvas6.height * 0.75;
        var r = canvas6.height * 0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    aside1.appendChild(canvas1);
    aside2.appendChild(canvas2);
    aside3.appendChild(canvas3);
    aside4.appendChild(canvas4);
    aside5.appendChild(canvas5);
    aside6.appendChild(canvas6);


    cubo3D.appendChild(base);
    cubo3D.appendChild(aside1);
    cubo3D.appendChild(aside2);
    cubo3D.appendChild(aside3);
    cubo3D.appendChild(aside4);
    cubo3D.appendChild(aside5);
    cubo3D.appendChild(aside6);


    espacio3D.appendChild(cubo3D);


    contenedor.appendChild(espacio3D);

}


