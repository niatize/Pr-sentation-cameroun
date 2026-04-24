/*chow password */
    checkbox=document.addEventListener('change',()=>{
        let password=document.getElementById('password');
        let checkbox=document.getElementById('checkbox');
       if (checkbox.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
    });

    
     