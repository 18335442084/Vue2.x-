<template>
    <div id='header-top'>
       <div class='header-top-con center-lr'>
            <span class='fl'>
            <ul class='clearfix'>
                <li class='fl splitLine'><a href="#">简体</a></li>
                <li class='fl splitLine'><a href="#">繁体</a></li>
                <li class='fl'><a href="#">{{tag}}</a></li>
                <li class="fl">{{name}},{{age}}</li>
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
// const request = (cb) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", 'http://127.0.0.1:1024/index?name=yangnan&age=26');
//     xhr.onreadystatechange = function() {
//         if(xhr.readyState == 4 && xhr.status == 200) {
//             const req = JSON.parse(xhr.responseText);
//             cb(req.data);
//         }
//     };
//     xhr.send();
// }
const getData = function(url) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        let name,age;
        const handler = function() {
            if(xhr.readyState == 4 && xhr.status == 200){
                console.log('111:',JSON.parse(xhr.responseText).data, 'this:', this);
                resolve(JSON.parse(xhr.responseText).data);
            }else {
                // reject(new Error());
            }
        };
        xhr.open("GET", url);
        xhr.onreadystatechange = handler;
        xhr.send();


        // xhr.onreadystatechange = () => {
        //     if(xhr.status == 200 && xhr.readyState == 4) {
        //         const rlt = JOSN.parse(xhr.responseText).data;
        //         name = rlt.name;
        //         age = rlt.age;
        //     }
        // }
    });
} 

export default {
    data() {
        return {
            tag: '无障碍阅读',
            name: '',
            age: '',
        }
    },
    methods: {
        insertText() {
            this.$refs.insertText[0].innerHTML = `name: ${this.dname} age: ${this.dage} `;
        }
    },

    mounted() {
        // const callback = (error, data) => {

        //     console.log('请求回来了', data);
        //     Object.assign(this, data);
        //     callback ==
        //      request
        // };

        // request(callback);

        // Promise
        const that = this;
        getData('http://127.0.0.1:1024/index?name=yangnan&age=26')
        // .then(function(obj) {
        //     console.log(obj,'this:', this);
        //     // Object.assign(that, obj);
        //     that.name = obj.name;
        //     that.age = obj.age;
        // })
        // 箭头函数this
        .then(obj => {
            console.log('arrow this:', this);
            this.name = obj.name;
            this.age = obj.age;
        })
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