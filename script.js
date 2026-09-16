function coverter(){
    var valor = window.document.getElementById('numero')
    var num = Number(valor.value)
    var valorconvertido = num/5.15
    var total = valorconvertido.toFixed(2)
    document.getElementById("resultado").innerHTML = "O valor convertido é de " + total + " dólares"
}
