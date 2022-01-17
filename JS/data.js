var app = new Vue({
    el: '#containerMain',
    data: {
      texTodo: "",
      todoList: [
        {
          componente: "carne",
          fatto: false
        }
      ]   
    },
    methods: {
      addTodo: function() {
        this.todoList.push({
          componente: this.texTodo,
          fatto: false
        });
        this.texTodo = "";
      },
      fatto: function(elemento){
        if(elemento.fatto == false){
          elemento.fatto = true;
        }
        else
        {
          elemento.fatto = false;
        }
      },
      removeClass: function (elem) {
        this.todoList.splice(elem, 1);
      }
    }
  })