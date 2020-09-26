<template>
    <div id="newsVedio">
        <ul class="component-tabs-ul clearfix">
            <li 
             v-for="(tab, tabIdx) of tabs"
             :key="tabIdx"
             class="fl"
             :class="{newsVedioTabActive: tabIdx === activeIdx}"
             @mouseover="tabsEnter(tabIdx)"
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
            itemsArr: this.newsVedioItems,
            items: this.newsVedioItems[0],
        }
    },
    methods: {
        tabsEnter(idx) {
            this.items = this.itemsArr[idx];
            this.activeIdx = idx;
        }
    }
}
</script>

<style>
.newsVedioTabActive {
    background-color: yellowgreen;
    border-bottom: 2px solid grey;
}
</style>