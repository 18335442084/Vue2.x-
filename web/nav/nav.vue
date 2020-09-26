<template>
    <div id="nav">
        <ul id="nav_con" class="center-lr clearfix">
            <li class="navSplitLineL navSplitLine"><router-link to="/">首页</router-link></li>
            <li :class="{
                    navSplitLine: true,
                    active: pathName === 'info'
                }"
            >
                <router-link to="/info">信息公开</router-link>
            </li>
            <li class="navSplitLine"><router-link to="/news">新闻动态</router-link></li>
            <li class="navSplitLine"><a href="#">政策文件</a></li>
            <li class="navSplitLine"><a href="#">纳税服务</a></li>
            <li class="navSplitLine"><a href="#">互动交流</a></li>
        </ul>
    </div>
</template>

<script>
import {RouterLink} from 'vue-router';
export default {
    data() {
        return {
            pathName: ''
        };
    },
    watch: {
        '$route' (to, from) {
            console.log(to, from, '???')

            this.pathName = to.fullPath.slice(1);
        }
    }
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

.active {
    background: #e10;
}
</style>