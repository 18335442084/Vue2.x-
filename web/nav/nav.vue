<template>
    <div id="nav">
        <ul id="nav_con" class="center-lr clearfix">
            <li class="navSplitLineL navSplitLine"><a href="#">首页</a></li>
            <li class="navSplitLine"><a href="#">信息公开</a></li>
            <li class="navSplitLine"><a href="#">新闻动态</a></li>
            <li class="navSplitLine"><a href="#">政策文件</a></li>
            <li class="navSplitLine"><a href="#">纳税服务</a></li>
            <li class="navSplitLine"><a href="#">互动交流</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#nav {
    width: 100%;
    text-align: center;
    background-color: #1a56a8;
    margin-bottom: 10px;
}
#nav_con {
    width: 1200px;
}
#nav_con li {
    position: relative;
    float: left;
    width: 200px;
    height: 50px;
    line-height: 50px;
    font-size: 22px;
    color: #fff;
}
#nav_con li:hover {
    background-color: #e9eef6;
    color: #000;
}
.navSplitLineL::before,
.navSplitLine::after {
    position: absolute;
    top:0;
    right: 0;
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background-color: #fff;
}
.navSplitLineL::before {
    left: 0;
}
.nav_con ul li a {
    color: #fff;
}
.nav_con ul li a:hover {
    color: yellow;
}
</style>