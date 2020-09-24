<template>
  <div id="link_friend" class="jianju_top">
    <div id="link_friend_con">
      <ul id="link_friend_title" class="clearfix">
        <li
          v-for="(item, idx) of items"
          :key="item.id"
          :val="idx"
          ref="li"
          class="fl link_friend_title_li"
          :class= "{active: idx === activeIdx}"
          @mouseenter="tabEnter(idx, $event)"
          @mouseleave="addHidden($event)"
        >{{item.text}}</li>
      </ul>
      <div id="link_friend_div">
        <ul>
          <li v-for="item in tabItems" :key="item.id" class="fl">{{item.text}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const points1 = [
        { id: 0, text: "哈尔滨" },
        { id: 1, text: "哈尔滨" },
        { id: 2, text: "哈尔滨" },
        { id: 3, text: "哈尔滨" },
        { id: 4, text: "哈尔滨" },
        { id: 5, text: "哈尔滨" },
        { id: 6, text: "哈尔滨" },
        { id: 7, text: "哈尔滨" },
      ];
const points2 = [
          { id: 1, text: "友情链接" },
          { id: 2, text: "友情链接" },
          { id: 3, text: "友情链接" },
      ];
const points = [points1, points2];
export default {
  data() {
    return {
      items: [
        { id: 0, text: "市局频道" },
        { id: 1, text: "友情链接" },
      ],
      points,
      cons: [{ id: 0 }, { id: 1 }],
      active_ul: 0,
      act_name: [],
      activeIdx: 0,
      prevObj: null,
      tabItems: points[0],
    };
  },
  methods: {
    tabEnter(idx, e) {
      // console.log('idx', idx ,'e.target', e.target ,'$refs',this.$refs);
      // e.target.classList.value.indexOf('active') ? e.target.classList.remove('active') : '';
      this.$refs.li[0].classList.remove('active');
      this.prevObj === null ? '' : this.prevObj.classList.remove('link_friend_title_li_pink');
      this.tabItems = points[idx];
      e.target.classList.add('link_friend_title_li_pink')
    },
    addHidden(e) {
     this.prevObj = e.target;
    }
  }
};
</script>

<style>
#link_friend_title li {
  position: relative;
  margin-right: 20px;
  padding-right: 10px;
  width: 96px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 22px;
}
#link_friend_title li::after {
  position: absolute;
  top: 26px;
  right: 0;
  content: "";
  display: block;
  border-top: 5px solid purple;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}
/* #link_friend_title li:hover {
  cursor: default;
  background-color: #fff;
} */

#link_friend_div {
  width: 1200px;
  height: 73px;
  background-color: blanchedalmond;
}

#link_friend_div li {
  padding: 0 20px;
  height: 35px;
  text-align: center;
  line-height: 35px;
}
.link_friend_title_li_pink {
  background-color: pink;
}
.active {
  background-color: pink;
}
.link_friend_active {
  display: block;
}
</style>