<template>
    <div id="link_active" class="jianju_top">
        <!-- <ul class="clearfix">
            <li
             v-for="item in items"
             :key="item.id"
             class="fl"
            >
                <a href="#"><img :src="item.src" alt=""></a>
            </li>
        </ul> -->
        <transition-group tag="ul" name="active_list ">
            <li
             v-for="(item, idx) of items"
             :key="item.id"
             
             class="fl"
            >
               <a href="#"><img :src="item.src"></a> 
            </li>
        </transition-group>
        <!-- <transition name="active_ul" tag="ul">
            <li
             v-for="item in items"
             :key="item.id"
             class="fl"
            >
                <a href="#"><img :src="item.src" alt=""></a>
            </li>
        </transition> -->
    </div>
</template>

<script>
import img0 from '../images/act_0.gif';
import img1 from '../images/act_1.gif';
import img2 from '../images/act_2.jpg';
import img3 from '../images/act_3.jpg';
import img4 from '../images/act_4.jpg';
import img5 from '../images/act_5.jpg';
export default {
    data() {
        return {
            items: [
                {id:8, src: img4},
                {id:9, src: img5},
                {id:0, src: img0},
                {id:1, src: img1},
                {id:2, src: img2},
                {id:3, src: img3},
                {id:4, src: img4},
                {id:5, src: img5},
                {id:6, src: img0},
                {id:7, src: img1},
            ],
        }
    }
}
</script>

<style>
#link_active {
    position: relative;
    width: 1200px;
    height: 90px;
    overflow: hidden;
}
#link_active::before,
#link_active::after  {
    position: absolute;
    display: block;
    width: 20px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: peru;
    background-color: rgba(38, 218, 231, 0.3);
}
#link_active::before {
    content: "<";
    top: 25px;
    left: 0;
}
#link_active::after {
    content: ">";
    top: 25px;
    right: 0;
}

#link_active:hover::before,
#link_active:hover::after {
    cursor: pointer;
}
#link_active ul {
    width: 2450px;
}
#link_active img{ 
    display: block;
    margin-right: 20px;
}

.active_list-enter-active,
.active_list-leave-active {
    transition: all 1s;
}
.active_list-enter {
    transform: translateX(-245px);
}
</style>