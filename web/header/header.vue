<template>
    <div>
        <Top></Top>
        <Mid></Mid>
    </div>
</template>

<script>

import Top from './header_top.vue';
import Mid from './header_mid/header_mid.vue'
export default {
    components: {
        Top,
        Mid,
    }
}
</script>