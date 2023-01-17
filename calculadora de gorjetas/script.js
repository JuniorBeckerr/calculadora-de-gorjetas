var valorgorjeta = document.getElementById('parcialresult')
var valortotal = document.getElementById('totalresult')
var resetbtn = document.querySelector('.btnreset')
var pessoas = document.getElementById('pessoas')
var conta = document.getElementById('conta')
var cinco = document.getElementById('5')
var dez = document.getElementById('10')
var quinze = document.getElementById('15')
var vintecinco = document.getElementById('25')
var cinquenta = document.getElementById('50')
var custom = document.getElementById('custom')






// calcular 5
function calccinco(){
    valorgorjeta.innerHTML ='R$' + conta.value * 5 / 100 / pessoas.value 
    valortotal.innerHTML = 'R$' + conta.value / pessoas.value

}

cinco.addEventListener('click', calccinco)


// calcular 10
function calcdez(){
    valorgorjeta.innerHTML ='R$' + conta.value * 10 / 100 / pessoas.value 
    valortotal.innerHTML = 'R$' + conta.value / pessoas.value
}
dez.addEventListener('click', calcdez)


// calcular 15
function calcquinze(){
    valorgorjeta.innerHTML ='R$' + conta.value * 15 / 100 / pessoas.value 
    valortotal.innerHTML = 'R$' + conta.value / pessoas.value
}
quinze.addEventListener('click', calcquinze)


// calcular 25
function calcvintecinco(){
    valorgorjeta.innerHTML ='R$' + conta.value * 25 / 100 / pessoas.value 
    valortotal.innerHTML = 'R$' + conta.value / pessoas.value
}
vintecinco.addEventListener('click', calcvintecinco)



// calcular 50
function calccinquenta(){
    valorgorjeta.innerHTML ='R$' + conta.value * 50 / 100 / pessoas.value 
    valortotal.innerHTML = 'R$' + conta.value / pessoas.value
}
cinquenta.addEventListener('click', calccinquenta)


//calc custom
function calccustom(){
    valorgorjeta.innerHTML ='R$' + conta.value * custom.value / 100 / pessoas.value 
    valortotal.innerHTML = 'R$' + conta.value / pessoas.value
}
custom.addEventListener('click', calccustom)


function reset(){
    valorgorjeta.innerHTML = '$0.00'
    valortotal.innerHTML = '$0.00'
    conta.value = NaN
    pessoas.value = NaN
}
resetbtn.addEventListener('click', reset)