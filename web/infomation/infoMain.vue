<template>
    <div id="infoMain">
        <div id="infoMain-con">
            <Position/>
            <div id="infoShow" class="clearfix">
                <Announcement class="fl"/>
                <InfoAside class="fr"/>
                <Announcement class="fl"/>
            </div>
        </div>
    </div>
</template>

<script>
import Position from './position.vue';
import Announcement from './infoShow/announcement.vue';
import InfoAside from './infoShow/infoAside.vue';
export default {
    components: {
        Position,
        Announcement,
        InfoAside,
    }
}
</script>

<style>
#infoShow {
    width: 1200px;
    margin: 0 auto;
}
</style>