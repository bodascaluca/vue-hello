
// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


Vue.config.devtools = true;

const app = new Vue({
    el : `#root`,
    data:{
        title: `Oggi ti mando un link per aprezzare meglio la cultura di Brescia`,
        images:[`https://www.bresciaatavola.it/wp-content/uploads/bresciaatavola.it/2018/01/polenta-taragna-concia.jpg`]
    }
});