<template>
    <div class='real-app'>
        <input
         type="text"
         autofocus="autofocus"
         placeholder="接下来做什么？"
         @keyup.enter="addTodo"
        >
        <Item 
         :todo='todo'
         v-for= 'todo in todos'
         :key='todo.id'
         @del='deleTodo'
        ></Item>

        <Tabs
         :todos="todos"
         :filter="filter"
         @toggleFilter="toggleFilter"
         @clearAllCompleted="clearAllCompleted"
        ></Tabs>
    </div>
</template>

<script>
import Item from './it.vue';
import Tabs from './tabs.vue';

let id = 0;

export default {
    data () {
        return {
            todos: [],
            filter: 'All'
        }
    },
    components: {
        Item,
        Tabs
    },
    methods: {
        addTodo(e) {
            this.todos.unshift({
                id: id++,
                content: e.target.value.trim(),
                completed: false
            });
            e.target.value = '';
        },
        deleTodo(id) {
            this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
        },
        toggleFilter(state) {
            this.filter = state;
        },
        clearAllCompleted() {
            this.todos = this.todos.filter(todo => !todo.completed);
        }
    },
    computed: {
        filteredTodos() {
            if (this.filter === 'all') {
                return this.todos;
            }
            const completed = this.filter === 'completed';
            return thsi.todos.filter(todo => completed === todo.completed);
        }
    }
}

</script>
<style scoped>
 
</style>