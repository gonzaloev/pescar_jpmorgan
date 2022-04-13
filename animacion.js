document.querySelector(".boton").addEventListener("click", e => {

    console.log("evento realizado")

    document.querySelector(".agradecimientos").classList.add("efecto")
    document.querySelector(".caja").classList.add("efecto1")
    document.querySelector(".boton").classList.add("efecto1")
    document.querySelector(".logo").classList.add("efecto1")
    document.querySelector(".logo1").classList.add("efecto1")
})