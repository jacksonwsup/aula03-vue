const app = Vue.createApp( {
    data() {
        return {
            msg: "<p style='color: red'>teste</p>",
            count: 0,
            show:true,
            messages: [
                {
                title: "Boas Vindas",
                body: "Olá, Tudo bem?"
                },
                {
                title: "Resposta",
                body: "Tudo certo e por aí?"
                }
            ], 
            url: "https://static.vecteezy.com/system/resources/thumbnails/025/850/831/small_2x/lion-face-isolated-illustration-ai-generative-png.png"
        }
    },
    methods: {
        decrement() {
            this.count--;
            this.count++
        }
    }
});

app.mount("#app"); 