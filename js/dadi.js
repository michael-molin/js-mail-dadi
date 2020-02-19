var nomeUtente = prompt('Inserisci il tuo nome:');
var numeroTiri = parseInt(prompt('Ciao ' + nomeUtente + ' inserisci pure il numero di tiri che vuoi fare: '));
var punteggioUtente = 0;
var punteggioBot = 0;

if (isNaN(numeroTiri)) {
    alert('Non hai inserito un numero corretto!');
} else {
    for (var i=1 ; i <= numeroTiri ; i++) {
        var risultatoDado = ((Math.random()*6) +1).toFixed(0);
        console.log('Hai tirato un ' + risultatoDado);
        punteggioUtente = parseInt(punteggioUtente) + parseInt(risultatoDado);
    }
    console.log('Il tuo punteggio è di: ' + punteggioUtente);
    for (var i=1 ; i <= numeroTiri ; i++) {
        var risultatoDado = ((Math.random()*6) +1).toFixed(0);
        console.log('Il bot ha tirato un ' + risultatoDado);
        punteggioBot = parseInt(punteggioBot) + parseInt(risultatoDado);
    }
    console.log('Il punteggio del Bot è di: ' + punteggioBot);
    if (punteggioUtente > punteggioBot) {
        console.log('Hai vinto!');
    } else if (punteggioUtente < punteggioBot) {
        console.log('Hai perso!');
    } else {
        console.log('Pareggio!');
    }
}
