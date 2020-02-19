var arrayMail = ['pippo@gmail.com' , 'ziopaperone@gmail.com' , 'paperina@gmail.com' , 'paperino@gmail.com' , 'topolino@gmail.com']
var mailRichiesta = prompt('Inserisci l\'indirizzo mail che stai cercando: ');

for (var i=0 ; i <= arrayMail.length ; i++  ) {
    if (mailRichiesta == arrayMail[i]) {
        var mailPosizione = i;
    } else {}
}

if (!isNaN(mailPosizione)) {
    console.log(mailRichiesta + ' trovata! In posizione: ' + parseInt(mailPosizione + 1) );
} else {
    console.log(mailRichiesta + ' non presente nell\'Array');
}
