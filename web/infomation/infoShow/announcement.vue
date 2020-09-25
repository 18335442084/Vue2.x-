<template>
    <div id="announcementShow">
        <ul id="infoTabs" class="clearfix">
            <li
             v-for='(item, idx) of items'
             :key="idx"
             class="fl"
             :class= "{tabsActive: idx === activeIdex}"
             @mouseover="enterTabs(idx, $event)"
             @mouseout="leaveTabs($event)"
            >
                {{item.text}}
            </li>
        </ul>
        <ul id="infoNews">
            <li
             v-for="(content, conIdx) of contents"
             :key='conIdx'
            >
                {{content.text}}
            </li>
        </ul>
    </div>
</template>

<script>
const content1 = [
    {text: '通知公告通知公告通知公告通知公告通知公告通知公告'},
    {text: '通知公告通知公告通知公告通知公告通知公告通知公告'},
    {text: '通知公告通知公告通知公告通知公告通知公告通知公告'},
    {text: '通知公告通知公告通知公告通知公告通知公告通知公告'},
    {text: '通知公告通知公告通知公告通知公告通知公告通知公告'},
    {text: '通知公告通知公告通知公告通知公告通知公告通知公告'},
    {text: '通知公告通知公告通知公告通知公告通知公告通知公告'},
],
      content2 = [
          {text: '税收统计税收统计税收统计税收统计税收统计税收统计'},
          {text: '税收统计税收统计税收统计税收统计税收统计税收统计'},
          {text: '税收统计税收统计税收统计税收统计税收统计税收统计'},
          {text: '税收统计税收统计税收统计税收统计税收统计税收统计'},
          {text: '税收统计税收统计税收统计税收统计税收统计税收统计'},
          {text: '税收统计税收统计税收统计税收统计税收统计税收统计'},
          {text: '税收统计税收统计税收统计税收统计税收统计税收统计'},
          {text: '税收统计税收统计税收统计税收统计税收统计税收统计'},
      ],
      contents = [content1, content2];
export default {
    data() {
        return {
            items: [
                {text: '通知公告'},
                {text: '税收统计'}
            ],
            contents,
            activeIdex: 0,
            contents: contents[0],
            provObj: null
        }
    },
    methods: {
        enterTabs(idx, e) {
            this.activeIdex = idx;
            this.contents = contents[idx];
        }
    }
}
</script>

<style>
#announcementShow {
    margin-right: 50px;
    margin-top: 20px;
    width: 760px;
    background-color: #fff;
    border-right: 1px solid grey;
}
#infoTabs {
    width: 710px;
    font-size: 20px;
    line-height: 50px;
    border-bottom: 1px solid grey;

}
#infoTabs li {
    height: 50px;
    margin: 0 20px;
    cursor: pointer;
}
#infoNews {
    height: 296px;
}
#infoNews li {
    margin: 10px 0 10px 10px;
}
.tabsActive {
    background-color: yellowgreen;
    border-bottom: 2px solid burlywood;
}
</style>