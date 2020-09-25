<template>
    <div id="infoAsiade">
        <a href="#"><img src="" alt=""></a>
        <ul id="asideTabs" class="clearfix">
            <li
             v-for="(tab, idx) of tabs"
             :key="idx"
             class="fl"
            >
                {{tab.text}}
            </li>
        </ul>
        <ul id="asideList">
            <li
             v-for="(list, listIdx) of lists"
             :key="listIdx"
            >
                {{list.text}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                {text: '机构职能'},
                {text: '领导简介'},
                {text: '机构设置'},
                {text: '联系方式'},
            ],
            lists: [
                {text: '政府信息公开规定'},
                {text: '政府信息公开规定'},
                {text: '政府信息公开规定'},
                {text: '政府信息公开规定'},
                {text: '政府信息公开规定'},
                {text: '政府信息公开规定'},

            ],
        }
    },
}
</script>

<style>
#infoAsiade {
    margin: 20px 0 0 40px;
    width: 340px;
}
#infoAsiade a {
    display: block;
    width: 340px;
    height: 70px;
    background-color: lightblue;
}

#asideTabs li{
    width: 160px;
    height: 70px;
    margin: 10px 20px 10px 0;
    text-align: center;
    line-height: 70px;
    background-color: pink;
}
#asideTabs li:nth-child(even) {
    margin-right: 0;
}

#asideList li {
    margin-top: 10px;
    width: 340px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    background-color: indigo;
}
</style>