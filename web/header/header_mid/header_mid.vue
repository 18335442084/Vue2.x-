<template>
  <div id="header_mid">
    <div id="header_mid_con" class="center-lr clearfix">
      <MidLeft class='fl'></MidLeft>
      <MidRight class="fr"></MidRight>
    </div>
  </div>
</template>

<script>
import MidLeft from "./header_mid_left.vue";
import MidRight from "./header_mid_right.vue";
export default {
  components: {
    MidLeft,
    MidRight,
  },
};
</script>
<style>
#header_mid {
    background-color: #fff;
}
#header_mid_con {
    width: 1200px;
    height: 145px;
}
</style>