<template>
    <div id="infoMain">
        <div id="infoMain-con">
            <Header/>
            <Nav/>
            <Position/>
            <div id="infoShow" class="clearfix">
                <Announcement class="fl"/>
                <InfoAside class="fr"/>
                <Announcement class="fl"/>
            </div>
            <Footer/>
        </div>
    </div>
</template>

<script>
import Header from '../header/header.vue';
import Nav from '../nav/nav.vue';
import Position from './position.vue';
import Announcement from './infoShow/announcement.vue';
import InfoAside from './infoShow/infoAside.vue';
import Footer from '../footer/footer.vue';
export default {
    components: {
        Header,
        Nav,
        Position,
        Announcement,
        InfoAside,
        Footer
    }
}
</script>

<style>
#infoShow {
    width: 1200px;
    margin: 0 auto;
}
</style>