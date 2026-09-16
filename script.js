function coverter(){
    var valor = window.document.getElementById('numero')
    var num = Number(valor.value)
    var valorconvertido = num/5.15
    document.getElementById("resultado").innerHTML = "O valor convertido é de " + valorconvertido + " dólares"
}