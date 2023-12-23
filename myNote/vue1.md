[toc]
# vue
## 什么是vue
vue：是动态构成的一款**渐进式**JavaScript框架: 将静态的页面变成动态的页面 
## Vue导入
### 1.开发环境 
`<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>`
### 2.生产环境 
`<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>`
### 3.直接引入vue.js文件

## vue 的特点
* 1.数据驱动视图发生改变 视图驱动数据发生改变
（MVVM设计模式=>model view view model）
    >数据 -> 视图
    >视图 -> 数据
* 2.模块化
* 3.组件化
## 引入vue文件
* 实例化vue对象 var app = new Vue() 
* el 挂载实例化(app.$mount("#app"))
* data 实例化中的数据
```
    <script src="../vue.js"></script>
        <script>
            // 实例化vue对象 var app = new Vue() 
            var app = new Vue({
                // el 挂载实例化
                el: '#app',
                // data 实例化中的数据
                data: {
                message: 'Hello!'
                }
            })
        </script>
```
## 模板语法
### 1.插值语法
{{ }} 将data中的数据或者是js的语法片段渲染到页面中
```
<div id="app">
        数字:{{num}}
        求和:{{a+b}}
        随机数:{{Math.random()*10}}
        新的：{{'i love you'}}
    </div>
    <script src="../vue.js"></script>
    <script>
        var app = new Vue({
            el:"#app",
            data:{
                num: 1,
                a: 10,
                b: 35
            }
        })
    </script>
```
### 2.内置指令
**v-xx**
>数据绑定的指令 
>>a.v-text 更新数据文本内容 innerText 
>>b.v-html 更新文本内容 innerHTML 可以解析html标签
>>c.v-model 数据改变 视图更新 / 视图更新 数据改变 数据

```
    <div id="app">
        <div v-text="text1">{{text}}</div>
        <div v-html="html1">{{html}}</div>
        <input type="text" v-model="input1">
        输入值：{{input1}}
    </div>
    <script src="../vue.js"></script>
    <script>
        var app = new Vue({
            el:"#app",
            data:{
                text: "文字1",
                html: "文字2",
                text1:"<b>今天天气真好</b>",
                html1: "<b>开学了</b>",
                input1: ""
            },
            methods: {
            },
        })
    </script>
```
#### 双向数据绑定
用于表单内容里：输入框 文本域 下拉框 单选框 多选框

```
 <div id="app">
        <div>{{val}}</div>
        <input type="text" v-model="val">
        单选：
        <input type="radio" v-model="sex" value="男">男
        <input type="radio" v-model="sex" value="女">女
        多选：
        <input type="checkbox" v-model="hobby" value="唱歌">唱歌
        <input type="checkbox" v-model="hobby" value="222">跳舞
        <input type="checkbox" v-model="hobby" value="画画">画画
        <input type="checkbox" v-model="isCheck">是否勾选
        文本域：
        <textarea cols="30" rows="10" v-model="area"></textarea>
        下拉框：
        <select v-model="school">
            <option value="小学">小学</option>
            <option value="初中">初中</option>
            <option value="高中">高中</option>
            <option value="大学">大学</option>
        </select>
    </div>
    <script src="../vue.js"></script>
    <script>
        var app = new Vue({
            el: '#app',
            data:{
                val:"哈哈哈哈",
                sex: '女',
                hobby: ['画画','222'],
                isCheck: false,
                area: '文本区域',
                school: '初中'
            }
        })
    </script>
```

## vue方法使用
* 生命周期 created() {},
* 方法 methods:{},
```
    <div id="app">
        {{timer}}
    </div>
    <script src="../vue.js"></script>
    <script>
        // function formData() {
        //             var data = new Date();
        //             var year = data.getFullYear();
        //             var mouth = data.getMonth() + 1;
        //             var day = data.getDate();
        //             var hour = data.getHours();
        //             var minutes = data.getMinutes();
        //             var seconds = data.getSeconds();
        //             this.timer =  year + '年' + mouth + '月' + day + '日' + hour + '时' + minutes + '分' + seconds + '秒'
        //         }
        var app = new Vue({
            el:"#app",
            data:{
                timer: null
            },
            // 第一种：生命周期 created 创建前
            created() {
                this.formData();
            },
            // 方法
            methods: {
                // formData
                formData() {
                    var data = new Date();
                    var year = data.getFullYear();
                    var mouth = data.getMonth() + 1;
                    var day = data.getDate();
                    var hour = data.getHours();
                    var minutes = data.getMinutes();
                    var seconds = data.getSeconds();
                    this.timer =  year + '年' + mouth + '月' + day + '日' + hour + '时' + minutes + '分' + seconds + '秒'
                }
            },
        })
    </script>
```