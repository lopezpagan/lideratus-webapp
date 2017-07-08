new Vue({
    el: '#app',
    data: {
        nuevaFrase: null,
        editandoFrase: null,
        frases: [
            {titulo: 'Empoderando tu conciencia!', completado: false},
            {titulo: 'Amplia tu mente!', completado: true},
            {titulo: 'Correr tras tus sueños!', completado: false},
            {titulo: 'Vivir en la libertad!', completado: false},
            {titulo: 'Extrayendo el potencial que hay en tí!', completado: false},
        ]
    },
    methods: {
        agregarFrase: function(frase) {
            console.info(frase);
            this.frases.unshift({
                titulo: frase,
                completado: false
            });
            this.nuevaFrase = '';
        },
        eliminarFrase: function(index) {
            this.frases.splice(index, 1);
        },
        editarFrase: function(frase) {
            console.info(frase);

        }
    }
})
