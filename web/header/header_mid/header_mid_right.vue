<template>
    <div id="header_mid_right">
        <div id="appImg">
            <a href="#"><span>微博</span></a>
            <a @mouseover='displaySao' @mouseout='addHidden'><span>微信</span></a>
            <div class='saoImg hidden'><img :src='saoImg'></div>
        </div>
        <div id="search" class='clearfix'>
            <input class='fl' type="text"><button>搜索</button>
        </div>
        <div id="hotWord">
            <span>
                本站热词：
                <a href="#">减税降费</a>
                <a href="#">个税</a>
                <a href="#">增值税</a>
                <a href="#">小微企业</a>
                <a href="#">发票</a>
            </span>
        </div>
    </div>
</template>

<script>
import saoImg from "../../images/saoyisao.gif"
export default {
    data() {
        return {
            saoImg
        }
    },
    methods: {
        displaySao() {
            document.querySelector('.saoImg').classList.remove('hidden');
        },
        addHidden() {
            document.querySelector('.saoImg').classList.add('hidden');
        }
    }
}
</script>
<style>
#header_mid_right {
    width: 370px;
    height: 145px;
}
#appImg {
    position: relative;
    margin-left: 30px;
    height: 55px;
    line-height: 55px;
}
#appImg  span {
    display: inline-block;
    margin-left: 30px;
    width: 50px;
    line-height: 55px;
}
#appImg a{
    display: inline-block;
    height: 55px;
}
#appImg a:hover {
    cursor: pointer;
}
#appImg  a:first-child {
    background: url(../../images/weibo.png) no-repeat;
}
#appImg  a:nth-child(2) {
    background: url(../../images/weixin.png) no-repeat;
}
.saoImg {
    position: absolute;
    left: 30px;
    width: 160px;
    height: 160px;
    background: lightblue;
    z-index: 1;
}

#search {
    height:36px;
}
#search input {
    display: block;
    padding-left: 8px;
    height: 34px;
    font-size: 20px;
    line-height: 34px;
    border: 1px solid #999;
    border-right: 0px;
    outline: none;
}
#search button{
    display: block;
    width: 78px;
    height: 36px;
    border: 1px solid #999;
    border-radius: 0;
    outline: none;
    background-color: #1a56a8;
    color: #fff;
    font-size: 16px;
}
#search button:hover {
    cursor: pointer;
}

#hotWord {
    font-size: 14px;
    margin-top: 10px;
}

#hotWord a{
    margin-left: 3px;
}
</style>
