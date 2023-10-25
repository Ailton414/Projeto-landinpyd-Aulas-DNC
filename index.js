var dia = window.document.getElementById('dia')
var hora = window.document.getElementById('hora')
var minuto = window.document.getElementById('minuto')
var segundo = window.document.getElementById('segundo')


const lancamento ="30 oct 2023"

function coutDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()


    const segTotal = (dataLanc - hoje)/1000

const finaldias = Math.floor(segTotal / 60 /60 /24);
const finalhoras = Math.floor(segTotal / 60 /60)%24;
const finalminutos = Math.floor(segTotal /60)%60;
const finalsegundos = Math.floor(segTotal)%60;

dia.innerHTML =` D${finaldias}`
hora.innerHTML = formatoTempo(`H${finalhoras}`)
minuto.innerHTML =formatoTempo(`M${finalminutos}`)
segundo.innerHTML =formatoTempo(` S${finalsegundos}`)

}

function formatoTempo(tempo){

    return tempo <10? `0${tempo}`:tempo;

}

coutDown();

setInterval(coutDown,'1000');
/***********************************/

function highlightCard(selector){
    var element =document.querySelector(selector);
    //toggle alterna entre classes do css
    element.classList.toggle("Card-highlight");
}

/*******************Desafio***********************/

/**EVENTOS DE TECLADO**/

function checarCodigoDasTeclas(){
document.addEventListener('keydown',(event)=>{
    var name = event.key;
    var code = event.code;
    alert(`tecla pressionada${name} \r\n valor do codigo:${code}` );
} , false);

}

function addKeyboaedEventListeners(){

    document.addEventListener('keydown',(event)=>{ 

    var ingresso1 = document.getElementById("quinta");
    var ingresso2 = document.getElementById("sexta");
    var ingresso3 = document.getElementById("sabado");
    var ingresso4 = document.getElementById("domingo");

        var code = event.code;
    if (code == 'Digit1') {
        ingresso1.classList.toggle("Card-highlight"); 
        ingresso2.classList.remove("Card-highlight");    
        ingresso3.classList.remove("Card-highlight");    
        ingresso4.classList.remove("Card-highlight");           
    }

    if (code == 'Digit2'){
        ingresso1.classList.remove("Card-highlight"); 
        ingresso2.classList.toggle("Card-highlight");    
        ingresso3.classList.remove("Card-highlight");    
        ingresso4.classList.remove("Card-highlight");           
    }

    if (code == 'Digit3') {
       
        ingresso1.classList.remove("Card-highlight"); 
        ingresso2.classList.remove("Card-highlight");    
        ingresso3.classList.toggle("Card-highlight");    
        ingresso4.classList.remove("Card-highlight");           
    }

    if (code == 'Digit4') {
       
        ingresso1.classList.remove("Card-highlight"); 
        ingresso2.classList.remove("Card-highlight");    
        ingresso3.classList.remove("Card-highlight");    
        ingresso4.classList.toggle("Card-highlight");           
    }

   

    },false); 
}

addKeyboaedEventListeners();