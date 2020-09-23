<template>
    <div id="main-nav" class="clearfix">
        <a id="main_nav_f1" class="bor-rad fl" href="#"><img src="" alt=""></a>
        <ul id="main_nav_s2" class="bor-rad clearfix fl">
            <li class='fl  main_nav_lineV'><a href=""></a></li>
            <li class='fl  main_nav_lineV'><a href=""></a></li>
            <li class='fl'><a href=""></a></li>
            <li class='fl main_nav_line main_nav_lineV'><a href=""></a></li>
            <li class='fl main_nav_line main_nav_lineV'><a href=""></a></li>
            <li class='fl main_nav_line'><a href=""></a></li>
        </ul>
        <a id="main_nav_t3" class='bor-rad fl' href=""><img src="" alt=""></a>
        <div id="main_nav_f4" class="fl">
            <a href="" class="bor-rad"><img src="" alt=""></a>
            <a href="" class="bor-rad"><img src="" alt=""></a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#main-nav {
    margin-bottom: 20px;
}
#main_nav_f1,
#main_nav_t3 {
    display: block;
    margin-right: 15px;
    width: 280px;
    height: 150px;
    background-color: pink;
}

#main_nav_s2 {
    margin-right: 15px;
    width: 480px;
}
#main_nav_s2 li {
    position: relative;
    width: 160px;
    height: 75px;
    background-color: lightblue;
}
#main_nav_s2 li a {
    display: block;
    width: 100%;
    height: 100%;
}
.main_nav_line::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    display: block;
    width: 160px;
    height: 1px;
    background-color: pink;
}
.main_nav_lineV::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    display: block;
    width: 1px;
    height: 75px;
    background-color: pink;
}

#main_nav_t3 {
    width: 170px;
    margin-left: 0;
}

#main_nav_f4 {
    width: 220px;
}
#main_nav_f4 a {
    display: block;
    height: 68px;
    background-color: lightblue;
}
#main_nav_f4 a:nth-of-type(1) {
    margin-bottom: 14px;
}

</style>