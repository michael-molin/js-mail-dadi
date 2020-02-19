var nomeUtente = prompt('Inserisci il tuo nome:');
var numeroTiri = parseInt(prompt('Ciao ' + nomeUtente + ' inserisci pure il numero di tiri che vuoi fare: '));
var punteggioUtente = 0;
var punteggioBot = 0;

document.getElementById('box-dadi').setAttribute('class' , 'visible-flex');
document.getElementById('box-giocatori').setAttribute('class' , 'visible-flex');

if (isNaN(numeroTiri)) {
    alert('Non hai inserito un numero corretto!');
} else {
    for (var i=1 ; i <= numeroTiri ; i++) {
        var risultatoDadoUtente = (Math.floor((Math.random()*6)+1));
        document.getElementById('lancio-utente').innerHTML = ('Hai tirato un ' + risultatoDadoUtente);
        punteggioUtente = parseInt(punteggioUtente) + parseInt(risultatoDadoUtente);
        document.getElementById('punteggio-utente').innerHTML = punteggioUtente;

        var risultatoDadoBot = (Math.floor((Math.random()*6)+1));
        document.getElementById('lancio-bot').innerHTML = ('Il bot ha tirato un ' + risultatoDadoBot);
        punteggioBot = parseInt(punteggioBot) + parseInt(risultatoDadoBot);
        document.getElementById('punteggio-bot').innerHTML = punteggioBot;

        console.log('player ' + risultatoDadoUtente);
        console.log('bot ' + risultatoDadoBot);
    }

    if (punteggioUtente > punteggioBot) {
        document.getElementById('vincitore').innerHTML = 'Hai vinto!';
    } else if (punteggioUtente < punteggioBot) {
        document.getElementById('vincitore').innerHTML =  'Hai perso!';
    } else {
        document.getElementById('vincitore').innerHTML = 'Pareggio!';
    }
}
