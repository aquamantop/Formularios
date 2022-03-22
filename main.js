const btn = document.querySelector(".boton");
const btn2 = document.querySelector(".boton2");

btn.addEventListener("submit", function(e){
    e.preventDefault();
});

btn2.forEach(element => {
    element.addEventListener("submit", (e) =>{
        e.preventDefault();
    });
});
