// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAWP-EyB0GcYwAbWiQRMwzxU4r5SxYGMuQ",
    authDomain: "acuatica-6d6b9.firebaseapp.com",
    projectId: "acuatica-6d6b9",
    storageBucket: "acuatica-6d6b9.appspot.com",
    messagingSenderId: "201876907523",
    appId: "1:201876907523:web:0a964dedc3bace59a65036"


};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db =  firebase.firestore();



var f = new Date();
var fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
var hora = f.getHours() + ':' +f.getMinutes();
const navegador = navigator.userAgent;
const pagina = filename();

function filename(){
    var rutaAbsoluta = self.location.href;   
    var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
    return rutaRelativa;  
}
function getIP(json) {
    
    var ip = json.ip;
    db.collection('vistas').doc().set({
        fecha,
        hora,
        navegador,
        pagina,
        ip
    });
    
}

