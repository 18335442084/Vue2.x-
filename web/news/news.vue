<template>
  <div id="newsRoot">
    <Header />
    <Nav />
    <Position />
    <div id="newsRoot-con">
      <Title />
      <div class="clearfix">
        <Carousel class="fl jianju_right" />
        <NewsList class="fl" />
      </div>
      <div class="clearfix">
        <NewsList class="fl mg-r-10" />
        <NewsVedio class="fl jianju_top" :newsVedioTabs="newsVedioData.tabs" 
        :newsVedioItems="newsVedioData.items"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "../global.css";
import Header from "../header/header.vue";
import Nav from "../nav/nav.vue";
import Title from "./title.vue";
import Position from "../infomation/position.vue";
import Carousel from "./carousel.vue";
import NewsList from "./newsList.vue";
import NewsVedio from "./newsVedio.vue";
export default {
  components: {
    Header,
    Nav,
    Title,
    Position,
    Carousel,
    NewsList,
    NewsVedio,
  },
  data() {
    return {
      newsVedioData: {
        tabs: [{ text: "税务视频" }, { text: "操作视频" }],
        items: [
            [
                {text: '1'},
                {text: '2'},
            ],
            [
                {text: '11'},
                {text: '22'},
            ]
        ],
      },
    };
  },
};
</script>

<style>
#newsRoot-con {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
</style>