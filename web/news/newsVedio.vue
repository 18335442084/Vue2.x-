<template>
    <div id="newsVedio">
        <ul class="component-tabs-ul">
            <li 
             v-for="(tab, tabIdx) of tabs"
             :key="tabIdx"
             class="fl"
             :class="{tabActive: tabIdx === activeIdx}"
            >
                {{tab.text}}
            </li>
        </ul>
        <ul class="component-con-ul">
            <li
             v-for="(item, itemIdx) of items"
             :key="itemIdx"
             class="fl"
            >
                {{item.text}}
                <img src="" alt="">
            </li>
        </ul>
    </div>    
</template>

<script>
export default {
    props: {
        newsVedioTabs: {
            type: Array,
            required: true,
        },
        newsVedioItems: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            tabs: this.newsVedioTabs,
            activeIdx: 0,
            items: this.newsVedioItems[0],
        }
    },
    methods: {

    }
}
</script>

<style>

</style>