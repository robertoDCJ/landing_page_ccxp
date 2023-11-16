
const segundo = document.querySelector('#segundo')
const minuto = document.querySelector('#minuto')
const hora = document.querySelector('#hora')
const dias = document.querySelector('#dia')

setInterval( () => {
    const lancamento = '01 dec 2023'
    const dataLancamento = Number(new Date(lancamento))
    const hoje = Number(new Date())
    const tempoQueFalta = (dataLancamento - hoje) / 1000
    const seg = Math.floor(tempoQueFalta % 60)
    const min = Math.floor((tempoQueFalta / 60) % 60)
    const hor = Math.floor((tempoQueFalta / 60 / 60) % 24)
    const dia = Math.floor((tempoQueFalta / 60 / 60 / 24))
    
    segundo.innerHTML = `${seg}S`
    minuto.innerHTML = `${min}M`
    hora.innerHTML = `${hor}H`
    dias.innerHTML = `${dia}D`
}, 100)