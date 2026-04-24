/* connexion page */
    let check=document.getElementById('boxe_check');
    let pass=document.getElementById('mot_de_pass');
    checkbox=document.addEventListener('click',()=>{
    if(check.checked){
        pass.type="text";
    }
    else{
        pass.type="password";
    }
})




    function verif(){

    let nom=document.getElementById('username').value;
    let password=document.getElementById('password').value;

    let nom_pres = localStorage.getItem('non_utilisateur');
    let pasw_pre = localStorage.getItem('pw_utilisateur');
    alert(pasw_pre)
    if(nom === nom_pres && password === pasw_pre){
        window.location.href="index.html";
        confirm('Accès autorisé!');
    }else{
        alert('identification incorrecte');
    }

    }