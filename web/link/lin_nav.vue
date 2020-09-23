<template>
    <div id="link_nav">
        <ul class="clearfix">
            <li
             v-for="link in links"
             :key='link.id'
             class='fl'
            >
                <a href="#"></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {id:0},
                {id:1},
                {id:2},
                {id:3},
                {id:4},
                {id:5},
                {id:6},
                {id:7},
            ],
        }
    }
}
</script>

<style>
#link_nav {
    width: 100%;
    padding: 20px 5px 0 5px;
}
#link_nav a {
    display: inline-block;
    margin: 0 28px;
    width: 90px;
    height: 120px;
    background-color: lightseagreen;
}
</style>