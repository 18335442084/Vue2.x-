<template>
  <div id="footer">
    <div id="footer_con">
      <div id="footer_a">
        <ul class="clearfix">
          <li v-for="item in items" :key="item.id" class="fl">
            <a href="#">{{item.text}}</a>
          </li>
        </ul>
      </div>
      <div>
        <ul class="clearfix">
          <li v-for="list in lists" :key="list.id" class="fl">{{list.text}}</li>
        </ul>
      </div>
      <div>
        <span>{{wzbs}}</span>
        <span>{{hgw}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 0, text: "网站地图" },
        { id: 1, text: "网站管理" },
        { id: 2, text: "联系我们" },
      ],
      lists: [
        {
          id: 0,
          text:
            "主办单位：国家税务总局黑龙江省税务局纳税服务中心（税收宣传中心）",
        },
        { id: 1, text: "地址：哈尔滨市南岗区大成街116号 电话：0451-12366" },
      ],
      wzbs: "bm29080012 黑ICP备05000790号",
      hgw: "黑公网安备 23010302000376号",
    };
  },
};
</script>

<style>
#footer {
  margin-top: 20px;
  padding: 40px 0;
  width: 100%;
  font-size: 16px;
  line-height: 18px;
  background-color:darkcyan;
}
#footer_con {
    margin-left: 300px;
}
#footer_a li {
  margin-right: 15px;
}
</style>