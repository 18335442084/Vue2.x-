<template>
    <div id="main_display">
        <ul>
            <li
              v-for="title in titles"
              :key="title.id"
              class="hidden"
            >
                {{title.text}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titles: [
                {id:'1', text:'首次个税年度汇算：彰显国家税收治理能力'},
                {id:'2', text:'便民办税春风行动成效显著'},
                {id:'3', text:'税收大数据透出经济发展新亮点'},
                {id:'4', text:'首次个税年度汇算：彰显国家税收治理能力'},
                {id:'5', text:'便民办税春风行动成效显著'},
                {id:'6', text:'税收大数据透出经济发展新亮点'}
            ],
        }
    }
}
</script>

<style>
#main_display {
    margin: 10px 0;
    width: 100%;
    height: 90px;
    background-color: pink;
}
#main_display li {
    width: 100%;
    height: 90px;
    font-size: 36px;
    text-align: center;
    line-height: 90px;
    color: #fff;
}
</style>