<template>
    <div id="header_mid_left">
        <a href="#"><img id='logo' :src='logo' alt=""></a>
    </div>
</template>

<script>
import logo from '../../images/logo.png';

export default {
    data() {
        return {
            logo,
        }
    }
}
</script>
<style>
#logo {
    display: block;
    width: 662px;
    height: 145px;
}
</style>