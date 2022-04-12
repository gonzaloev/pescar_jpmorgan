let valor = document.getElementById("efecto")
let valor1 = document.getElementById("efecto1")
let valor2 = document.getElementById("efecto2")
let valor3 = document.getElementById("efecto3")
var contador = 22;
let boolean = true

valor.addEventListener("click", e => {

    if(boolean){
        document.querySelectorAll(".circulo").forEach( e => {
        
            e.style.setProperty("top",`${contador}%`)
            contador += 22
        })
        boolean = false
    }
    else{
        document.querySelectorAll(".circulo").forEach( e => {
        
            e.style.setProperty("top","0")
            contador = 22
        })
        boolean = true
    }

})

valor1.addEventListener("click", e => {

    if(boolean){
        document.querySelectorAll(".circulo1").forEach( e => {
        
            e.style.setProperty("top",`${contador}%`)
            contador += 22
        })
        boolean = false
    }
    else{
        document.querySelectorAll(".circulo1").forEach( e => {
        
            e.style.setProperty("top","0")
            contador = 22
        })
        boolean = true
    }

})

valor2.addEventListener("click", e => {

    if(boolean){
        document.querySelectorAll(".circulo2").forEach( e => {
        
            e.style.setProperty("top",`${contador}%`)
            contador += 22
        })
        boolean = false
    }
    else{
        document.querySelectorAll(".circulo2").forEach( e => {
        
            e.style.setProperty("top","0")
            contador = 22
        })
        boolean = true
    }

})

valor3.addEventListener("click", e => {

    if(boolean){
        document.querySelectorAll(".circulo3").forEach( e => {
        
            e.style.setProperty("top",`${contador}%`)
            contador += 22
        })
        boolean = false
    }
    else{
        document.querySelectorAll(".circulo3").forEach( e => {
        
            e.style.setProperty("top","0")
            contador = 22
        })
        boolean = true
    }
})