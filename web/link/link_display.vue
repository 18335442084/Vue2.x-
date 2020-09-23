<template>
    <div id="link_display">
        <ul id="link_title" class="clearfix">
            <li
             @mouseover="titleBorder"
             @mouseout="titlDeleBorder"
             v-for="list in lists"
             :key="list.id"
             class="fl"
            >
                {{list.text}}
            </li>
        </ul>
        <ul id="link_articel">
            <li
             v-for="art in arts"
             :key="art.id"
            >
                {{art.text}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
       return {
           lists: [
               {id:0, text:"税务新闻"},
               {id:1, text:"基层动态"},
               {id:2, text:"媒体视点"},
           ],
           arts: [
               {id:0, text:"税务总局组织编写的 《税法教育读本》（初中版）正式出版"},
               {id:1, text:"税务总局组织编写的 《税法教育读本》（初中版）正式出版"},
               {id:2, text:"税务总局组织编写的 《税法教育读本》（初中版）正式出版"},
               {id:3, text:"税务总局组织编写的 《税法教育读本》（初中版）正式出版"},
               {id:4, text:"税务总局组织编写的 《税法教育读本》（初中版）正式出版"},
               {id:5, text:"税务总局组织编写的 《税法教育读本》（初中版）正式出版"},
           ],
       }
    },
    methods: {
        titleBorder(e) {
            e.target.classList.add('link_title_border');
        },
        titlDeleBorder(e) {
            e.target.classList.remove('link_title_border');
        }
    }
}
</script>

<style>
#link_display {
    margin-top: 20px;
    width: 580px;
    height: 296px;
    background-color:mediumpurple;
}
#link_title {
    width: 100%;
    height: 60px;
    font-size: 22px;
    font-weight: 400;
    text-align: center;
    line-height: 60px;
    border-bottom: 4px solid #999;
}
#link_title li{
    margin-right: 40px;
    width: 88px;    
}
.link_title_border {
    border-bottom: 4px solid #fff;
}
#link_title li:hover {
    cursor: pointer;
    color: #fff;
    background-color:orange;
}
#link_articel li {
    padding-left: 20px;
    width: 100%;
    height: 36px;
    line-height: 36px;
}
</style>