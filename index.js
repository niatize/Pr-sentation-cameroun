
let hr_contain = document.getElementById("hr_contain");
let hr1=document.getElementById("hr1");
let hr2=document.getElementById("hr2");
let hr3=document.getElementById("hr3");
let main=document.getElementById("main");
let link_content=document.getElementById("link");


/*évènements du menu*/
hr_contain.addEventListener("click",()=>{
    hr1.classList.toggle("afficher");
    hr2.classList.toggle("observer1");
    hr3.classList.toggle("observer2");
    /*faire flouter la page*/
    main.classList.toggle("afficher");
    /*faire afficher la barre de navigation*/
    link_content.classList.toggle("aff");

});

/*code pour mes sections*/
let search=document.getElementById("search");
let submit=document.getElementById("submit");

search.addEventListener("input",()=>{
    let value=search.value.trim().toLowerCase();
    if(value!==""){
        submit.setAttribute('href',`#`+value);}
    else{
        submit.setAttribute('href',`#`);
    }
});