document.addEventListener('alpine:init', () => {
    Alpine.data('historicalWidget', function () {
        return {
            // name: '',
            username: localStorage['username'],
            pizzas: [],
            userCartContent: '',
            // OpenUserHistory: false,

            init() {
                axios
                    .get('https://pizza-api.projectcodex.net/api/pizzas')
                    .then((result) => {
                        this.pizzas = result.data.pizzas;
                        this.UserHistory();
                    })
                    
            },
 
            UserHistory() {
                axios.get(`https://pizza-api.projectcodex.net/api/pizza-cart/username/${this.username}`)
                    .then((result) => {
                        this.userCartContent = result.data;
                        console.log(this.userCartContent);
                        console.log(result.data)
                    })
            },

        }

    })

})