const dataInicial = new Date(2023, 9, 15, 0, 0, 0)

function atualizarContador() {
    const dataAtual = new Date()  
    let anos = dataAtual.getFullYear() - dataInicial.getFullYear()  
    let meses = dataAtual.getMonth() - dataInicial.getMonth();
    let dias = dataAtual.getDate() - dataInicial.getDate();
    let horas = dataAtual.getHours() - dataInicial.getHours();
    let minutos = dataAtual.getMinutes() - dataInicial.getMinutes();
    let segundos = dataAtual.getSeconds() - dataInicial.getSeconds();


    if (segundos < 0) {
        segundos += 60
        minutos -= 1
    }

    if (minutos < 0) {
        minutos += 60
        horas--
    }

    if (horas < 0) {
        horas += 24
        dias -= 1
    }

    if (dias < 0) {
        meses = meses - 1
        const ultimoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0); //é zero pq faz voltar para o mês passado
        dias = dias + ultimoMes.getDate();
    }

    if (meses < 0) {
        meses = meses + 12
        anos = anos - 1
    }


    document.querySelector('#anos').innerHTML = `${anos}`
    document.querySelector('#meses').innerHTML = `${meses} `
    document.querySelector('#dias').innerHTML = `${dias} `
    document.querySelector('#horas').innerHTML = `${horas} `
    document.querySelector('#minutos').innerHTML = `${minutos} `
    document.querySelector('#segundos').innerHTML = `${segundos} `
}

atualizarContador()
setInterval(atualizarContador, 1000)

// const musica = document.getElementById("musica");

// // Aguarda o primeiro clique em qualquer parte da página
// document.body.addEventListener("click", () => {musica.play();}, { once: true });

let player;

function onYouTubeIframeAPIReady() {
player = new YT.Player('ytplayer', {
    height: '0',
    width: '0',
    videoId: 'REiPtG1p3pQ',
    playerVars: {
    autoplay: 0,
    controls: 0,
    loop: 1,
    playlist: 'REiPtG1p3pQ',
    modestbranding: 1
    },
    events: {
    onReady: onPlayerReady
    }
});
}

function onPlayerReady(event) {
document.body.addEventListener('click', () => {
    event.target.unMute();
    event.target.playVideo();
}, { once: true });
}