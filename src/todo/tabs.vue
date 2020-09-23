<template>
    <div class="helper">
        <span class="left">{{unFinishTodoLength}} items left</span>
        <span class="tabs">
            <span
             v-for="state in states"
             :key="state"
             :class="[state, filter === state ? 'active' : '']"
             @click="toggleFilter(state)"
            >
                {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted">Clear completed</span>
    </div>
</template>

<script>
export default {
    props: {
        filter: {
            type: String,
            require: true
        },
        todos: {
            type: Array,
            require: true
        }
    },
    data() {
        return {
            states: ['all', 'active', 'completed']
        }
    },
    methods: {
        toggleFilter(state) {
            this.$emit('toggleFilter', state);
        },
        clearAllCompleted() {
            this.$emit('clearAllCompleted');
        }
    },
    computed: {
        unFinishTodoLength() {
            return this.todos.filter(todo => !todo.completed).length;
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>