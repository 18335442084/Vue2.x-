<template>
    <div id="root">
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>

<script>
// 引入 -》 局部注册 -》 template插入
import Header from "./todo/header.vue";
import Footer from "./todo/footer.jsx";
import Todo from "./todo/todo.vue";
export default {
    components: {
        Header,
        Footer,
        Todo,
    }
}
</script>

<style>
    div {
        background-color: pink;
    }
</style>