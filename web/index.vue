<template>
    <div>
        <hearderSelf/>
        <navSelf/>
        <router-view></router-view>
        <footerSelf/>
    </div>
</template>

<script>
import hearderSelf from './header/header.vue';
import navSelf from './nav/nav.vue';
import footerSelf from './footer/footer.vue';
export default {
    components: {
        hearderSelf,
        navSelf,
        footerSelf,
    }
}
</script>

<style>

</style>