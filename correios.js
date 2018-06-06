"use strict";
var page = require('webpage').create(),
    server = 'http://www2.correios.com.br/sistemas/rastreamento/resultado.cfm?',
    data = 'acao=track&objetos=ID_OBJETO&btnPesq=Buscar';
page.customHeaders = {
    "Referer" : "http://www2.correios.com.br/sistemas/rastreamento/"
}

page.open(server, 'post', data, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(page.content);
    }
    phantom.exit();
});

// curl -Ls 'http://www2.correios.com.br/sistemas/rastreamento/resultado.cfm?' -H 'Accept-Language: en-US,en;q=0.5' -H 'Content-Type: application/json; charset=utf-8' -H 'Referer: http://www2.correios.com.br/sistemas/rastreamento/' --data 'acao=track&objetos=SEUIDDOOBJETO&btnPesq=Buscar'
