<template>
    <div id='header-top'>
       <div class='header-top-con center-lr'>
            <span class='fl'>
            <ul class='clearfix'>
                <li class='fl splitLine'><a href="#">简体</a></li>
                <li class='fl splitLine'><a href="#">繁体</a></li>
                <li class='fl'><a href="#">{{tag}}</a></li>
            </ul>
        </span>
        <span class='fr'>
            <ul class='clearfix'>
                <li class='fl splitLine'><a href="#">国家税务总局</a></li>
                <li class='fl'><a href="#">黑龙江省人民政府</a></li>
            </ul>
        </span>
       </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tag: '无障碍阅读'
        }
    }
}
</script>

<style>
#header-top {
    width: 100%;
    background-color: #999;
    font-size: 14px;
}
.header-top-con {
    width: 1200px;
    height: 35px;
    line-height: 35px;
}
.header-top-con li {
    position: relative;
    padding: 0 10px;
}
.splitLine::after {
    position: absolute;
    top: 11px;
    right: 0;
    content: '';
    display: inline-block;
    width: 1px;
    height: 14px;
    background-color: #000;
}
a:hover {
    color: lightblue;
}
</style>