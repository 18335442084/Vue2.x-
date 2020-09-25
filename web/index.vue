<template>
    <div>
        <!-- <router-link to="/">Index Page</router-link> -->
        <!-- <Main/>        -->
        <!-- <InfoMain></InfoMain> -->
        <News/>
    </div>
</template>

<script>
import Main from './main.vue';
import InfoMain from './infomation/infoMain.vue';
import HeaderNav from './main/main_nav.vue';
import News from './news/news.vue';
export default {
    components: {
        Main,
        InfoMain,
        HeaderNav,
        News,
    }
}
</script>

<style>

</style>