var app = new Vue({
    el: '#containerMain',
    data: {
      texTodo: "",
      todoList: []   
    },
    methods: {
      addTodo: function() {
        this.todoList.push({
          componente: this.texTodo,
          fatto: false,
          rimuovi: false
        });
        this.texTodo = "";
      },
      removeClass: function() {
        this.rimuovi = true;
      }
    }
  })