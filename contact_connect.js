   function ok(){
    /*sauvegarde de l'enregistrement*/
    let nom=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    let t=nom.split('');
    let pw=password.split('');
    let id_pers1=t[4]+t[1]+t[6]+pw[2]+pw[5]+pw[3];
    let  pass_pers1=t[1]+t[2]+t[3]+t[4]+t[5]+ pw[2]+pw[1]+pw[3]+pw[6];
    let non_utilisateur = id_pers1;
    let pw_utilisateur = pass_pers1;
       localStorage.setItem('mon_mot_de_pass',non_utilisateur);
       localStorage.setItem('mon_password',pw_utilisateur);
       alert("Notez bien vos identifiants : \nNom : " + non_utilisateur + "\nPass : " + pw_utilisateur);
    }


    /*reception de l'enregistrement*/
       function verif(){
      non_utilisateur = localStorage.getItem('mon_mot_de_pass',non_utilisateur);
        pw_utilisateur = localStorage.getItem('mon_password',pw_utilisateur)
    let nom2 = document.getElementById("name").value;
    let password2 = document.getElementById("mot_de_pass").value;
    if( nom2 === non_utilisateur && password2 ===  pw_utilisateur2 ){
        window.location.href = "index.html"
    }else{
        alert("vous n'êtes pas dans notre base de donnée")
    }


    }
