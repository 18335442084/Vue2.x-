<template>
    <div id="main_show"  class="clearfix">
        <div id="main_show_left"  class="fl clearfix">
            <ul>
                <li><a href="#"><img src=""></a></li>
            </ul>
            <div id="ctrl">
                <span></span> 
            </div>
        </div>
        <div id="main_show_right"  class="fl">
            <ul id="title" class="clearfix">
                <li class="fl">最新发布</li>
            </ul>
            <ul id="article">
                <li
                  v-for="article in articles"
                  :key="article.id"
                >
                    <a href="">
                        <span class="artText">{{article.text}}</span>
                        <span class="artDate">{{article.date}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showImg:[
                {id:1, src:"",text:""},
                {id:2, src:"",text:""},
                {id:3, src:"",text:""},
            ],
            articles: [
                {id: 1, text: '关于国家税务总局黑龙江省电子税务局暂停办理涉税事项的通知', date:'09-21'},
                {id: 2, text: '关于国家税务总局黑龙江省电子税务局暂停办理涉税事项的通知', date:'09-21'},
                {id: 3, text: '关于国家税务总局黑龙江省电子税务局暂停办理涉税事项的通知', date:'09-21'},
                {id: 4, text: '关于国家税务总局黑龙江省电子税务局暂停办理涉税事项的通知', date:'09-21'},
                {id: 5, text: '关于国家税务总局黑龙江省电子税务局暂停办理涉税事项的通知', date:'09-21'},                
            ],
        }
    }
}
</script>

<style>
#main_show_left {
    position: relative;
    margin-right: 20px;
    width: 580px;
    height: 366px;
}
#main_show_left a{
    position: absolute;
    top: 0;
    left: 0;
    width: 580px;
    height: 366px;
    background-color: lightblue;
}

#main_show_right {
    width: 580px;
    height: 366px;
}
#title {
    margin-bottom: 30px;
    width: 100%;
    height: 42px;
    border-bottom: 1px solid #999; 
}
#title li {
    position: relative;
    width: 118px;
    height: 42px;
    text-align: center;
    line-height: 42px;
    font-size: 22px;
    color: #fff;
    background-color: #6a91c6;
}
#title li::after {
    position: absolute;
    bottom: -10px;
    left: 49px;
    content: '';
    display: block;
    border-top: 10px solid #6a91c6;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
}

#article li {
    width: 580px;
    font-size: 18px;
    line-height: 36px;
}
#article .artText {
    display: inline-block;
    width: 510px;
    height: 36px;
}
#article .artDate {
    display: inline-block;
    width: 60px;
    height: 36px;
    text-align: right;
}

</style>