var arrayMail = ['pippo@gmail.com' , 'ziopaperone@gmail.com' , 'paperina@gmail.com' , 'paperino@gmail.com' , 'topolino@gmail.com']
var mailRichiesta = prompt('Inserisci l\'indirizzo mail che stai cercando: ');
document.getElementById('box-mail').setAttribute('class' , 'visible-flex');

for (var i=0 ; i <= arrayMail.length ; i++  ) {
    if (mailRichiesta == arrayMail[i]) {
        var mailPosizione = i;
    } else {}
}

if (!isNaN(mailPosizione)) {
    document.getElementById('email-riscontro').innerHTML = (mailRichiesta + ' trovato! In posizione: ' + parseInt(mailPosizione + 1) );
} else {
    document.getElementById('email-riscontro').innerHTML = (mailRichiesta + ' non presente nell\'Array');
}
