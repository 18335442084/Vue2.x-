<template>
  <div id="newsListRoot">
    <ul id="newsTabs" class="clearfix">
      <li
        v-for="(tab, tabIdx) of tabs"
        :key="tabIdx"
        class="fl"
        :class="{newsActTab : tabIdx === activeIdx}"
        @mouseover="tabEnter(tabIdx)"
      >
        {{ tab.text }}
      </li>
    </ul>
    <ul id="newsContents">
      <li v-for="(content, conIdx) of contents" :key="conIdx">
        <span class="newsContentText">{{ content.text }}</span>
        <span class="newsContentDate">{{ content.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
const content1 = [
                {text: '强化理论武装，提升能力素质', date: '09-23'},
                {text: '强化理论武装，提升能力素质', date: '09-23'},
                {text: '强化理论武装，提升能力素质', date: '09-23'},
                {text: '强化理论武装，提升能力素质', date: '09-23'},
                {text: '强化理论武装，提升能力素质', date: '09-23'},
                {text: '强化理论武装，提升能力素质', date: '09-23'},
            ];
const content2 = [
                {text: '强化理论武装2，提升能力素质', date: '09-23'},
                {text: '强化理论武装2，提升能力素质', date: '09-23'},
                {text: '强化理论武装2，提升能力素质', date: '09-23'},
                {text: '强化理论武装2，提升能力素质', date: '09-23'},
                {text: '强化理论武装2，提升能力素质', date: '09-23'},
                {text: '强化理论武装2，提升能力素质', date: '09-23'},
            ];
const contentArr = [content1, content2];
export default {
    data() {
        return {
            tabs: [
                {text: '税务新闻'},
                {text: '税务新闻'},
            ],
            activeIdx: 0,
            contents: contentArr[0],

        }
    },
    methods: {
        tabEnter(idx) {
            this.activeIdx = idx;
            this.contents = contentArr[idx];
        }
    }
}
</script>

<style>
#newsListRoot {
    margin-top: 30px;
}
.newsActTab {
    background-color: lightgoldenrodyellow;
    border-bottom: 2px solid blueviolet;
}
#newsTabs {
    width: 580px;
    border-bottom: 1px solid grey;
}
#newsTabs li {
    width: 90px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-right: 15px;
}
.newsContentText {
    display: inline-block;
    width: 500px;
    margin-right: 30px;
}
#newsContents li {
    height: 50px;
    line-height: 50px;
}

</style>