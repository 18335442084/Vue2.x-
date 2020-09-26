<template>
    <div>
        <Main></Main>
        <Lin></Lin>
    </div>
</template>

<script>
import Header from './header/header.vue';
import Nav from './nav/nav.vue';
import Main from './main/main.vue';
import Lin from './link/link.vue';
import Footer from './footer/footer.vue';
export default {
    components: {
        Header,
        Nav,
        Main,
        Lin,
        Footer
    },
    
}
</script>

<style>

</style>