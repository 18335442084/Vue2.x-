<template>
  <div id="link">
    <div id="link_con" class="center-lr">
      <Lin_nav></Lin_nav>
      <div class="clearfix">
        <Link_dis class="fl link_dis_l"></Link_dis>
        <Link_dis class="fl"></Link_dis>
      </div>
      <div class="clearfix jianju_top ">
        <Link_img1 class="jianju_right fl" />
        <Link_img1 class="fl jianju_right" />
        <div class="fl link_img_2">
            <Link_img2 class="jianju_right jianju_bottom"/>
            <Link_img2 class="jianju_bottom"/>
            <Link_img2 class="jianju_right"/>
            <Link_img2 />
        </div>
      </div>
      <Link_active/>
      <Link_friend/>
    </div>
  </div>
</template>

<script>
import Lin_nav from "./lin_nav.vue";
import Link_dis from "./link_display.vue";
import Link_img1 from "./link_img_1.vue";
import Link_img2 from "./link_img_2.vue";
import Link_active from "./link_active.vue";
import Link_friend from "./link_friend.vue";
export default {
  components: {
    Lin_nav,
    Link_dis,
    Link_img1,
    Link_img2,
    Link_active,
    Link_friend,
  },
};
</script>

<style>
#link {
  margin-top: 20px;
  width: 100%;
}
#link_con {
  padding: 0 20px;
  width: 1200px;
  background-color: lightcyan;
}

.link_dis_l {
  margin-right: 40px;
}
.link_img_2 {
    margin-top: 60px;
    width: 400px;
    height: 243px;
}

</style>