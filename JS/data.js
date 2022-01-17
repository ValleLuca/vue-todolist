var app = new Vue({
    el: '#containerMain',
    data: {
      texTodo: "",
      todoList: [
        {
          componente: "latte",
          fatto: false
        },
        {
          componente: "carne",
          fatto: false
        },
        {
          componente: "miele",
          fatto: false
        },
        {
          componente: "verdura",
          fatto: false
        }
      ]      
    },
    methods: {
      addTodo: function() {
        this.todoList.push(this.texTodo);
        this.texTodo = "";
      }
    }
  })