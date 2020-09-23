<template>
    <div id="link_img_1">
        <ul id="link_img_1_title" class="clearfix">
            <li
             v-for="list in lists"
             :key="list.id"
             class='fl'
            >
                {{list.text}}
            </li>
        </ul>
        <ul id="link_img_1_img">
            <li
             v-for="img in imgs"
             :key="img.id"
            >
                <a href="#"><img src="#" alt=""></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lists: [
                {id:0, text:'图说税收'},
              
            ],
            imgs: [
                {id: 0}
            ],
        }
    }
}
</script>

<style>
#link_img_1 {
    width: 380px;
    height: 300px;
}
#link_img_1_title {
    border-bottom: 1px solid #999;
}
#link_img_1_title li{
    width: 95px;
    height: 57px;
    margin-right: 20px;
    text-align: center;
    line-height: 57px;
    font-size: 20px;
    border-bottom: 3px solid blue;
}

#link_img_1_img {
    position: relative;
    margin-top: 20px;
    width: 380px;
    height: 223px;
    background-color: peachpuff;
}
#link_img_1_img li {
    position: absolute;
}
#link_img_1_img a {
    display: block;
    widows: 100%;
    height: 100%;
}
</style>