new Vue({
    el: '#app',
    data: {
        register: [
            {name: "AX", value: "c34b"},
            {name: "BX", value: "d536"},
            {name: "CX", value: "eee1"},
            {name: "DX", value: "5b6c"}
        ],
        from: "",
        to: "",
    },
    methods: {
        getRegisterIndexByName: function(name) {
            return this.register.findIndex((el) => el.name === name);
        },

        move: function (from, to) {
            const fromIndex = this.getRegisterIndexByName(from);
            const toIndex = this.getRegisterIndexByName(to);

            this.register[toIndex].value = this.register[fromIndex].value;
        },
        exchange: function (from, to) {
            const fromIndex = this.getRegisterIndexByName(from);
            const toIndex = this.getRegisterIndexByName(to);
            const temp = this.register[fromIndex].value;

            this.register[fromIndex].value = this.register[toIndex].value;
            this.register[toIndex].value = temp;
        },
        randomizeRegister: function(name) {
            const index = this.getRegisterIndexByName(name);
            this.register[index].value = (Math.floor(Math.random() * 65535) + 4096).toString(16);
        },
        reset: function() {
            this.register = this.register.map(el => ({name: el.name, value: ""}));
        }
    }
});