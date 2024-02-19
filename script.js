/*
RIPASSO JAVASCRIPT:

1 - IF/ELSE

- Sintassi di base

    if (condizione) {
    // codice da eseguire se la condizione è vera
    } else {
    // codice da eseguire se la condizione è falsa
    }

- Esempi Pratici

    Esempio 1: Controllo semplice
    Verifica se un numero è positivo o negativo.

    let numero = 5;
    if (numero > 0) {
        console.log("Il numero è positivo.");
    } else {
        console.log("Il numero è negativo.");
    }

    Esempio 2: Utilizzo di else if
    Classificare un punteggio come eccellente, buono o insufficiente.

    let punteggio = 85;
    if (punteggio >= 90) {
        console.log("Eccellente");
    } else if (punteggio >= 70) {
        console.log("Buono");
    } else {
    console.log("Insufficiente");
    }

- Utilizzo degli operatori logici (&&, ||, !) per rendere il codice più potente e flessibile

In JavaScript, gli operatori logici not(!), and(&&), or(||) sono utilizzati per combinare o invertire 
valori booleani, che sono fondamentali nelle istruzioni condizionali come il blocco if. 
Ecco una spiegazione di ciascuno:

    Not (!): L'operatore not viene utilizzato per invertire il valore booleano di un'espressione. 
    Se un'espressione è vera (true), l'applicazione dell'operatore not la rende falsa (false), e viceversa.

        if (!condizione) {
        // Il codice qui viene eseguito se "condizione" è false
        }

        ESEMPIO PRATICO:

        let userLoggedIn = false;
        if (!userLoggedIn) {
        console.log("L'utente non è loggato. Mostra il form di login.");
        }
        // Stampa: "L'utente non è loggato. Mostra il form di login." perché userLoggedIn è false.        

    And (&&): L'operatore and viene utilizzato per verificare se due o più condizioni sono vere simultaneamente. 
    Un'espressione che utilizza l'operatore and è vera solo se tutte le condizioni sono vere.

        if (condizione1 && condizione2) {
        // Il codice qui viene eseguito solo se sia "condizione1" che "condizione2" sono vere
        }

        ESEMPIO PRATICO:

        let age = 25;
        let hasLicense = true;

        if (age >= 18 && hasLicense) {
        console.log("Puoi guidare.");
        }
        // Stampa: "Puoi guidare." perché entrambe le condizioni sono vere.

    Or (||): L'operatore or viene utilizzato per verificare se almeno una tra due o più condizioni è vera. 
    Un'espressione che utilizza l'operatore or è vera se almeno una delle condizioni è vera.

        if (condizione1 || condizione2) {
        // Il codice qui viene eseguito se "condizione1" o "condizione2" (o entrambe) sono vere
        }

        ESEMPIO PRATICO:

        let isWeekend = true;
        let isHoliday = false;

        if (isWeekend || isHoliday) {
        console.log("È tempo di rilassarsi!");
        }
        // Stampa: "È tempo di rilassarsi!" perché almeno una delle condizioni (isWeekend) è vera.

2 - LOOP FOR

Il ciclo for in JavaScript è uno dei modi più comuni per eseguire un blocco di codice ripetutamente 
per un numero definito di volte. La sintassi del ciclo for è progettata per essere compatta e include 
tre parti principali: l'inizializzazione, la condizione e l'incremento, tutte racchiuse tra parentesi 
seguite da un blocco di codice da eseguire.

- Sintassi di base

    for (inizializzazione; condizione; incremento) {
    // Blocco di codice da eseguire
    }

- Esempi Pratici

    Esempio 1: Contare da 1 a 5

    for (let i = 1; i <= 5; i++) {
    console.log(i);
    }
    // Stampa: 1 2 3 4 5

    Esempio 2: Somma dei primi 5 numeri interi

    let somma = 0;
    for (let i = 1; i <= 5; i++) {
    somma += i;
    }
    console.log(somma);
    // Stampa: 15

    Esempio 3: Iterare su un Array

    let frutti = ["mela", "banana", "pera", "arancia"];
    for (let i = 0; i < frutti.length; i++) {
    console.log(frutti[i]);
    }
    // Stampa: mela banana pera arancia

    Esempio 4: Uso di break per terminare il ciclo

    for (let i = 1; i <= 5; i++) {
    if (i === 4) {
        break; // Esce dal ciclo quando i === 4
    }
    console.log(i);
    }
    // Stampa: 1 2 3

    Esempio 5: Uso di continue per saltare un'iterazione

    for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Salta il resto del codice nel ciclo per i === 3
    }
    console.log(i);
    }
    // Stampa: 1 2 4 5

3 - LOOP WHILE & DO... WHILE

I cicli while e do...while in JavaScript sono strutture di controllo che consentono di eseguire un blocco 
di codice ripetutamente, basandosi su una condizione booleana. 

La differenza principale tra i due cicli sta nel momento in cui la condizione viene valutata: nel ciclo while, 
la condizione è valutata prima dell'esecuzione del blocco di codice, mentre nel ciclo do...while, la condizione 
è valutata dopo l'esecuzione del blocco di codice, garantendo così che il blocco venga eseguito almeno una volta.

    Differenze Chiave e Quando Usarli

    while è utile quando non si sa quante volte sarà necessario eseguire il ciclo, ma si conosce la condizione di 
    terminazione. Il ciclo potrebbe non eseguirsi mai se la condizione iniziale è falsa.

    do...while è utile quando si vuole che il blocco di codice venga eseguito almeno una volta e poi si continua a 
    eseguirlo finché la condizione specificata è vera.

    CICLO WHILE

    - Sintassi di base

        while (condizione) {
        // Blocco di codice da eseguire
        }

    - Esempio pratico

        let i = 1; // Inizializzazione fuori dal ciclo
        while (i <= 5) {
        console.log(i);
        i++; // Incremento all'interno del ciclo
        }
        // Stampa: 1 2 3 4 5

    CICLO DO... WHILE

    - Sintassi di base

        do {
        // Blocco di codice da eseguire
        } while (condizione);

    - Esempio pratico

        let i = 1; // Inizializzazione fuori dal ciclo
        do {
        console.log(i);
        i++; // Incremento all'interno del ciclo
        } while (i <= 5);
        // Stampa: 1 2 3 4 5



*/

let voto = "A"

switch (voto) {
    case "A":
        console.log("Ottimo");
        break;
    case "B":
        console.log("Buono");
        break;
    case "C":
        console.log("Sufficiente");
        break;
    case "D":
        console.log("Scarso");
        break;
    case "E":
        console.log("Insufficiente");
        break;
    case "F":
        console.log("Gravemente Insufficiente");
        break;
    default: 
        console.log("Voto non valido");
    
}

let giorno = new Date().getDay()


console.log(giorno);

switch (giorno) {
    case 0:
        console.log("Domenica");
        break;
    case 1:
        console.log("Lunedi");
        break;
    case 2:
        console.log("Sufficiente");
        break;
    case 3:
        console.log("Scarso");
        break;
    case 4:
        console.log("Insufficiente");
        break;
    case 5:
        console.log("Gravemente Insufficiente");
        break;
    case 6:
        console.log("Sabato");
        break;
    default: 
        console.log("Giorno non valido");
    
}

let frase = "ciao Mondo, ciao"
let nome ="Mario "
let email = "test@gmail.com"

let x1 = 12
let x2 = 5

let fraseMaiuscola = frase.toUpperCase()

console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(fraseMaiuscola);
console.log(email.includes("@"));

console.log("Nome: "+nome.concat(", email: "+email));

console.log(nome.repeat(4));

console.log(frase.replace("ciao", "Arrivederci"));

console.log(frase.replaceAll("ciao", "Arrivederci"));


// FUNZIONI

function saluta(name) {
    console.log("Ciao " + name + "!");
    return name
}

function somma(n1,n2) {
    //return n1 + n2
    let risultato = n1 + n2
    return risultato
}

console.log(somma(x1,x2));

function upper(testo) {
    return testo.toUpperCase()
}

console.log(upper("giannandrea"));

function checkNumber(numero) {
    if (numero > 10) {
        console.log(numero +" è maggiore di 10");
    } else {
        console.log(numero + " è minore o uguale a 10");
    }
}

checkNumber(x1)
checkNumber(x2)

function stampa(n) {
    for (let i = 1; i <=n; i++) {
        console.log(i);
    }
}

stampa(x1)