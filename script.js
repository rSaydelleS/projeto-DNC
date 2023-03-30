const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const min = document.getElementById('min')
const seg = document.getElementById('seg')
const release = '1 dec 2023'

function countDown(){
    const dataL = new Date(release)
    const hoje = new Date()

    const segTotal = (dataL - hoje)/1000;
    const finalD = Math.floor(segTotal / 60 / 60 / 24);
    const finalHrs = Math.floor(segTotal / 60 / 60)% 24;
    const finalMin = Math.floor(segTotal /60)% 60;
    const finalSeg = Math.floor(segTotal)% 60;

    dia.innerHTML = finalD
    hora.innerHTML = formatoTempo(finalHrs)
    min.innerHTML = formatoTempo(finalMin)
    seg.innerHTML = formatoTempo(finalSeg)
}
countDown();
setInterval(countDown, 1000)

function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo
}
function entrar(x){
    x.style.color = 'black'
}