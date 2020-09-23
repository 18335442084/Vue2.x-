<template>
    <div id="main">
        <div id="main-con" class="center-lr">
            <Main_nav></Main_nav>
            <Main_display></Main_display>
            <Main_show></Main_show>
        </div>
    </div>
</template>

<script>
import Main_nav from './main_nav.vue';
import Main_display from './main_disply.vue';
import Main_show from './main_show.vue';
export default {
    components: {
        Main_nav,
        Main_display,
        Main_show,
    }
}
</script>

<style>
#main {
    width: 100%;

}
#main-con {
    padding: 20px;
    width: 1200px;
    background-color: #fff;
}
</style>