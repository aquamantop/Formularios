const btn = document.querySelector(".boton");
const btn2 = document.querySelectorAll(".boton2");

btn.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Listo!");

});

btn2.forEach(element => {
    element.addEventListener("submit", (e) =>{
        e.preventDefault();
        alert("Listo!");
    });
});
