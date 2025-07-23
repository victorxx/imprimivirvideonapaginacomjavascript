let indexe = 0;
const limiteporvez = 1;
const resultado = document.getElementById('video');
const botao = document.getElementById('btn');
let contador = 0;
const videos = [
    "https://www.youtube.com/embed/CFNyAnV5jt8",
    "https://www.youtube.com/embed/Yms7zefLIi4",
    "https://www.youtube.com/embed/tVvxmtOBcEY",
    "https://www.youtube.com/embed/TL1lhy7cZBo",
    "https://www.youtube.com/embed/_KjVHDMypCI",
    "https://www.youtube.com/embed/ghXks3M03Q4",
    "https://www.youtube.com/embed/9opuxtDKXVs",
    "https://www.youtube.com/embed/x3fRtsaJ0-I",
    "https://www.youtube.com/embed/MLqb3u-bcVU",
    "https://www.youtube.com/embed/8WVHmeHOqxc",
    "https://www.youtube.com/embed/FK2X06Vs7HM",
    "https://www.youtube.com/embed/tcmrhsNv-Fk",
    "https://www.youtube.com/embed/dtiZoKbwEKo",
    "https://www.youtube.com/embed/oxm13E0QmEk",
    "https://www.youtube.com/embed/bD6ifecX6rs",
    "https://www.youtube.com/embed/L2bINZ0G_yI",
    "https://www.youtube.com/embed/drrS_GWJlug",
    "https://www.youtube.com/embed/jTRZsu5xsA4",
    "https://www.youtube.com/embed/drrS_GWJlug",
    "https://www.youtube.com/embed/r5GwSblhghI"
];

function criaIframe(src, width = 300, height = 300) {
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.width = width;
    iframe.height = height;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    return iframe;
}

botao.onclick = function () {
    let final = indexe + limiteporvez;
    for (; indexe < final && indexe < videos.length; indexe++) {
        contador++;
        let iframe = criaIframe(videos[indexe]);
        resultado.appendChild(iframe);

        if (contador === 2) {
            const div = document.createElement('div');
            div.innerHTML = `
                <iframe src="https://modeloanuncio01.pages.dev/" width="350" height="250" frameborder="0" allowfullscreen></iframe>
                <iframe src="https://encurtadorko.pages.dev/" width="350" height="500" frameborder="0" allowfullscreen></iframe>
            `;
            resultado.appendChild(div);
            contador = 0;
        }
    }

    if (indexe >= videos.length) {
        botao.disabled = true;
        botao.textContent = 'Chegamos no limite já';
    }
}
