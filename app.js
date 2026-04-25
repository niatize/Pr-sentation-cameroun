const question=[
    "bonjour a vous comment allez-vou? ",
    "quelle est la superficie du cameroun ?",
    "qui est le président du cameroun(Paul bathélémie;Emanuel macromp) ?",
    "Quel sont les anciens constitutions de l'état Camerounais ?"

]
let tab=new Array(
    "475.650 km²",
    "Paul bathélémie",


);

let etape=0;

let ecriture=document.getElementById("reponse");
let envoie=document.getElementById('envoie');
let contenue=document.getElementById("contenue");

function add_message(texte,type){
    const div=document.createElement('div');
    div.classList.add("message",type);
    div.textContent=texte;
    contenue.appendChild(div);
    contenue.scrollTop=contenue.scrollHeight;
}
window.onload=()=>{
    add_message(question[etape],'recevoir');
}
function gestion_denvoie(){
    const reponse=ecriture.value.trim();
    if(reponse!=="" && etape < question.length-1){
        add_message(reponse,'send');
        ecriture.value="";
        
        setTimeout(()=>{
            etape++;
            add_message(question[etape],'recevoir')
        },700)
    }
}
envoie.addEventListener('click',gestion_denvoie);