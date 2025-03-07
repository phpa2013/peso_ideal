const frm = document.querySelector('form')
const resp1 = document.querySelector('h2')
const resp2 = document.querySelector('h3')

const container = document.querySelector('.container')


frm.addEventListener('submit', function(e){

e.preventDefault()

if(!frm.masculinoSexo.checked && !frm.femininoSexo.checked){
    alert('Esolha um sexo')
    return
}


const nome = frm.name.value

const pesoAtual = Number(frm.peso.value)

const altura = Number(frm.altura.value)

const masculino = frm.masculinoSexo.checked

let pesoIdeal

if(masculino){
    pesoIdeal = 22 * Math.pow(altura, 2)

}else{
    pesoIdeal = 21 * Math.pow(altura, 2)
}

resp1.innerText = `${nome}: seu peso ideal é ${pesoIdeal.toFixed(3)}Kg.`




let variavelPeso 

if(pesoIdeal < pesoAtual){
    container.style.boxShadow = '0 0 30px red'
    variavelPeso = pesoAtual - pesoIdeal 
    resp2.innerText = `Você deve perder cerca de ${variavelPeso.toFixed(3)}Kg.`
}else{
    variavelPeso = pesoIdeal - pesoAtual
    resp2.innerText = `Você deve ganhar cerca de ${variavelPeso.toFixed(3)}Kg.` 
}
})

// limpar formulários e respostas

frm.addEventListener('reset', ()=>  {

resp1.innerText = ''
resp2.innerText = ''
container.style.boxShadow = 'initial'


})




