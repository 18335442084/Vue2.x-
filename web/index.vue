<template>
    <div>
        <!-- <router-link to="/">Index Page</router-link> -->
        <!-- <Main/>        -->
        <InfoMain></InfoMain>
    </div>
</template>

<script>
import Main from './main.vue';
import InfoMain from './infomation/infoMain.vue';
import HeaderNav from './main/main_nav.vue';
export default {
    components: {
        Main,
        InfoMain,
        HeaderNav,
    }
}
</script>

<style>

</style>