<template>
  <div>
    Input:
    <input id="ip" type="text" @keyup="changeColor"/>
    <div id="op">{{val}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: "font's color",
    };
  },
  methods: {
    color: function () {
      let color = document.querySelector("#ip").value;
      let r = this.change(color);
      this.val = r;
    },
    changeColor: function () {
      let color = document.querySelector("#ip").value;
      let box = document.querySelector("#op");
      let val = this.change(color);
      box.style = `color: ${val}`;
      this.color();
    },
    change: function (str) {
      let arr = str.split("");
      arr = arr.slice(1);
      console.log(arr);
      const idxArr = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ];
      let r = 1,
        rst = [],
        rstStr = "";
      if (arr.length === 3) {
        arr.splice(1, 0, arr[0]);
        arr.splice(3, 0, arr[2]);
        arr.splice(5, 0, arr[4]);
        console.log(arr);
      }
      for (let i = 0, len = arr.length; i < len; i++) {
        let val = idxArr.indexOf(arr[i]);
        r *= val;
        if (i % 2 === 1) {
          rst.push(r);
          r = 1;
        }
      }
      console.log(rst);
      rstStr = rst.join(",");
      return `rgb(${rstStr})`;
    },
  },
  computed: {},
};
</script>

<style>
#op {
  color: red;
}
</style>