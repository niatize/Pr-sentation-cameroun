const question = [
    "Bienvenue ! Prêt pour ce tour d'horizon de notre site ? (Tapez 'Prêt')",

    "1. Sur quel golfe le territoire s'ouvre-t-il au Sud-Ouest ?",
    "2. Nommez la capitale politique présentée en introduction.",
    "3. Quelle est la métropole économique du pays ?",
    "4. Quel est le chiffre de la superficie totale mentionné ?",
    "5. Quel voisin se situe à la frontière Nord-Ouest ?",

];

const tab = [
     "prêt", 
     "guinée",
     "yaoundé",
     "douala",
     "475442",
     "nigéria",
     "centrafrique",
     "congo",
     "402",
     "1", 
     "oui",
     "250",
     "français",
     "christianisme",
     "islam",
     "camerounais",
     "cfa", 
     "fernando",
     "jaune",
     "20",
     "oui",
     "agriculture", 
     "cacao",
     "pétrole", 
     "douala",
     "or",
     "miniature",
     "yaoundé",
     "parlementaire",
     "paul biya", 
     "oui",
     "10",
     "gouverneur",
     "58",
     "préfet",
     "arrondissement",
     "sous-préfet",
     "ngaoundéré",
     "yaoundé",
     "bertoua",
     "oui",
     "maroua",
     "douala",
     "garoua",
     "bafoussam",
     "bamenda",
     "buea",
     "ebolowa",
     "gabon",
     "cemac", 
    "mont cameroun"
];

let etape=0;
let result=0;

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
    const reponse=ecriture.value.trim().toLowerCase();
    if(reponse!=="" && etape < question.length-1){
        add_message(reponse,'send');
        ecriture.value="";
        
        setTimeout(()=>{
            etape++;
            result++;
            let max=0;
            let min=0;
            add_message(question[etape],'recevoir')
            if(reponse===tab[result]){
                max=max+etape;
            }else{
                min=min++;
            }
            if(etape===50){
                let max_new=parseFloat(max);
                max_new=max*100;
                max_new=max/50;
                alert("vous a vez reussis "+max +' sur les 50 questions du quiz.Votre tôt de connaissance du Cameroun est de '+max_new);
            }
        },700)
    }
}
envoie.addEventListener('click',gestion_denvoie);




    "6. Lequel se trouve sur le flanc Est ?",
    "7. Quel État borde la rive Sud-Est ?",
    "8. Combien de kilomètres mesure la façade maritime ?",
    "9. Quel est le fuseau horaire local (UTC+) ?",
    "10. Fin de l'aperçu général. On passe à la page CULTURE ?", 

    "11. Quel est le nombre approximatif d'ethnies recensées ?",
    "12. Citez l'une des deux langues officielles.",
    "13. Quelle est la religion majoritaire dans la zone Sud ?",
    "14. Laquelle domine dans la partie Septentrionale ?",
    "15. Comment désigne-t-on les ressortissants du territoire ?",
    "16. Quel est le nom de l'unité monétaire utilisée ?",
    "17. Quel explorateur a baptisé ces terres ?",
    "18. Quelle couleur de l'étoile symbolise l'unité sur le drapeau ?",
    "19. Quel jour de mai célèbre-t-on la fête nationale ?",
    "20. Passionnant, non ? Prêt pour la page TOURISME ?",


    "21. Quel secteur d'activité est le premier employeur ?",
    "22. Nommez une culture de rente majeure pour l'exportation.",
    "23. Quelle ressource énergétique est extraite de la zone offshore ?",
    "24. Quel est le point d'entrée maritime principal ?",
    "25. Quel métal précieux exploite-t-on à l'Est ?",
    "26. Le pays est surnommé l'Afrique en... ?",
    "27. Dans quelle ville siège l'Assemblée Nationale ?",
    "28. Quel est le régime politique en vigueur ?",
    "29. Nommez le Chef de l'État actuel.",
    "30. On continue vers la page des RÉGIONS ?", 

    "31. En combien de régions le découpage administratif est-il fait ?",
    "32. Quel titre porte l'autorité à la tête d'une Région ?",
    "33. En combien de départements le territoire est-il scindé ?",
    "34. Quel titre porte le dirigeant d'un département ?",
    "35. Quelle entité se trouve juste sous le département ?",
    "36. Qui dirige un Arrondissement ?",
    "37. Quel est le chef-lieu de l'Adamaoua ?",
    "38. Nommez celui du Centre.",
    "39. Quel est le siège administratif de l'Est ?",
    "40. On termine avec les derniers chefs-lieux ?", 


    "41. Quel est le chef-lieu de l'Extrême-Nord ?",
    "42. Nommez celui du Littoral.",
    "43. Lequel correspond au Nord ?",
    "44. Quel est le siège administratif de l'Ouest ?",
    "45. Nommez celui du Nord-Ouest.",
    "46. Quel est celui du Sud-Ouest ?",
    "47. Citez le chef-lieu de la région du Sud.",
    "48. Quel pays frontalier se situe au Sud-Centre ?",
    "49. Dans quelle zone monétaire se situe l'économie (sigle) ?",
    "50. Quel est le nom du point culminant du relief ?",

    "Félicitations ! Vous avez exploré toutes les pages du site avec succès."