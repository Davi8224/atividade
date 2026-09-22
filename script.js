function coverter(){
    var valor = window.document.getElementById('numero')
    var num = Number(valor.value)
    var valorconvertido = num/5.15
    const numero = valorconvertido.toFixed(2);
    document.getElementById("resultado").innerHTML = "O valor convertido é de " + numero + " dólares"
}

let darkmode = localStorage.getItem('darkmode')
const mudar = document.getElementById('mudar')
const modoescuro = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');    
}

const modoclaro = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);    
}

if(darkmode === "active") modoescuro()

mudar.addEventListener("click", () =>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? modoescuro() : modoclaro()
})