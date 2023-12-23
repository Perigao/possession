[toc]
(/day27)
## 列表渲染
### 格式
>v-for="(item,index) in/of data" :key="index"
>>key：给元素唯一的标识

一般渲染：数组 对象 字符串（很少） 次数（极少）
### 渲染数组
```
    <div v-for="(item,index) of person" :key="index">
        名字：{{item.name}}
        年龄：{{item.age}}
        下标：{{index}}
    </div>
```
### 渲染对象 
```
    <div v-for="(item,index) of obj" :key="index">
        {{item}}
    </div>
```
### 渲染字符串
```
    <div v-for="(item,index) of str" :key="index">
            {{item}}
    </div>
```
### 渲染次数 
```
    <div v-for="(item,index) of 6" :key="index">
        {{item}}
    </div>
```
### script
```
    <script>
        var app = new Vue({
            el:"#app",
            data:{
                person:[
                    {
                        name:"LiLi",
                        age: 10
                    },
                    {
                        name: "Jack",
                        age: 30
                    }
                ],
                obj:{
                    isColor: 'red',
                    name: 'HuaHua',
                    age: 20,
                },
                str:"Hello"
            }
        })
    </script>
```
## 列表过滤
### watch
#### html
```
    <div id="app">
        <input type="text" v-model="keyWords">
        <ul>
            <li v-for="(item,index) in newList" :key="index">
                {{item.name}}--{{item.age}}--{{item.sex}}
            </li>
        </ul>
    </div>
```
#### script
```
    <script>
        var app = new Vue({
            data:{
                keyWords:"",
                person:[
                    {
                        name:"LiLi",
                        age: 19,
                        sex: '女'
                    },
                    {
                        name:"Ming",
                        age: 29,
                        sex: '男'
                    },
                    {
                        name:"Lucy",
                        age: 99,
                        sex: '女'
                    },
                    {
                        name:"马冬梅",
                        age: 98,
                        sex: '女'
                    },
                ],
                newList:[]
            },
            // 监听模式
            watch: {
                keyWords:{  
                    immediate: true,
                    deep: true,
                    handler(val) {
                        this.newList = this.person.filter((item) =>{
                            return item.name.indexOf(val) !== -1;
                        })
                    }
                }
            }
        }).$mount("#app")
    </script>
```
### computed
#### html
```
    <input type="text" v-model="keyWords">
    <ul>
        <li v-for="(item,index) in newList" :key="index">
            {{item.name}}--{{item.age}}--{{item.sex}}
        </li>
    </ul>
```
#### script
```
     <script>
        var app = new Vue({
            data:{
                keyWords:"",
                person:[
                    {
                        name:"LiLi",
                        age: 19,
                        sex: '女'
                    },
                    {
                        name:"Ming",
                        age: 29,
                        sex: '男'
                    },
                    {
                        name:"Lucy",
                        age: 99,
                        sex: '女'
                    },
                    {
                        name:"马冬梅",
                        age: 98,
                        sex: '女'
                    },
                ],
            },
            // 计算属性
            computed:{
                newList() {
                    return this.person.filter((item) => {
                        return item.name.indexOf(this.keyWords) !== -1;
                    })
                }
            }
        }).$mount("#app")
    </script>
```
## 数据监听
>vue 响应式原理 => Object.defineProperty(getter/setter)
数据监听 => 数据与视图的更新

* Vue.set(target,propertyName/index,value)
* (app实例).$set(target,propertyName/index,value)**用的比较多**
### html
```
     <div id="app">
        <ul>
            <li v-for="(item,index) of person" :key="index">
                {{item.name}}--{{item.age}}--{{item.sex}}
            </li>
        </ul>
        <button @click="updateMsg">修改</button>
    </div>
```
### script
```
    <script>
        var app = new Vue({
            el:'#app',
            data:{
                person:[
                    {
                        name:"LiLi",
                        age: 19,
                        sex: '女'
                    },
                    {
                        name:"Ming",
                        age: 29,
                        sex: '男'
                    },
                    {
                        name:"Lucy",
                        age: 99,
                        sex: '女'
                    },
                    {
                        name:"马冬梅",
                        age: 98,
                        sex: '女'
                    },
                ],
            },
            methods: {
                updateMsg() {
                    // this.person[1] = {name:"马琛",age: 20,sex:'男'}
                    this.$set(this.person,1,{name:"马琛",age: 20,sex:'男'})
                    // Vue.set(this.person,1,{name:"马琛",age: 20,sex:'男'})
                }
            },
        })
    </script>
```
## 列表排序
### html
```
    <div id="app">
        <input type="text" v-model="keyWords">
        <ul>
            <li v-for="(item,index) in newList" :key="index">
                {{item.name}}--{{item.age}}--{{item.sex}}
            </li>
        </ul>
        <button  @click="sortType = 1">升序排列</button>
        <button  @click="sortType = 2">降序排列</button>
        <button @click="sortType = 0">原来的顺序</button>
    </div>
```
### script
```
    <script>
        var app = new Vue({
            el:"#app",
            data:{
                sortType: 0,
                keyWords:"",
                person:[
                    {
                        name:"LiLi",
                        age: 19,
                        sex: '女'
                    },
                    {
                        name:"Ming",
                        age: 9,
                        sex: '男'
                    },
                    {
                        name:"Lucy",
                        age: 99,
                        sex: '女'
                    },
                    {
                        name:"马冬梅",
                        age: 33,
                        sex: '女'
                    },
                ],
            },
            computed:{
                newList() {
                    const arr = this.person.filter((item) => {
                        return item.name.indexOf(this.keyWords) !== -1;
                    })
                    // sort 升序 a-b 降序 b-a
                    // sort(a,b) => a-b
                    // arr.sort((a,b) =>{
                    //     return 
                    // })
                    if(this.sortType) {
                        arr.sort((a,b) => {
                            return this.sortType === 1 ? a.age-b.age : b.age - a.age;
                        })
                    }
                    return arr;
                }
            }

        }).$mount("#app")
    </script>
```
## Vue事件处理
可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。
**v-on 事件处理 =>简写："@"**
### 格式
* 1.v-on:事件名="事件处理"
* 2.@事件名="事件处理"
#### html
```
    <div class="box" v-on:click="num++">{{num}}</div>
    <div @click="showAlert">
       弹出框
    </div>
    <div @click="showMsg(1)">
       消息
    </div>
    <div @click="showEvent($event)">
       事件
    </div>
```
#### script
```
     var app = new Vue({
            el:"#app",
            data:{
                num: 0
            },
            methods:{
                showAlert() {
                    alert("出现");
                },
                showMsg(a) {
                    console.log(a,'a');
                },
                showEvent(a) {
                    console.log(a.target,'a1');
                },
            }
     })
```
### 修饰符
* 阻止事件冒泡 .stop
* 阻止默认事件 .prevent
* 触发一次     .once
* 触发自身     .self
  
**冒泡**
```
    <div class="box1" @click="getMain">
        <div class="box2" @click.stop="getMsg"></div>
    </div>
    <script>
         var app = new Vue({
            el:"#app",
            methods:{
                getMain() {
                    alert(1);
                },
                getMsg() {
                    alert(2);
                },
            },
         })
    </script>
```
**默认事件**
```
    <a href="https://v2.cn.vuejs.org/v2/guide/events.html" @click.prevent="getSee">
        Vue官网
    </a>
    <script>
         var app = new Vue({
            el:"#app",
            methods:{
                getSee() {
                    alert(3);
                },
            },
         })
    </script>
```
**触发一次**
```
    <div @click.once="showContent">内容</div>
    <script>
         var app = new Vue({
            el:"#app",
            methods:{
                showContent() {
                    alert("555");
                },
            },
         })
    </script>
```
**触发自身**
```
    <div @click.self="mySelf" class="box3">
            <div @click="meMain" class="box4">
                我自己
            </div>
    </div>
    <script>
         var app = new Vue({
            el:"#app",
            methods:{
                mySelf() {
                    alert("666");
                },
                meMain() {
                    alert("777");
                },
            },
         })
    </script>
```
### 键盘事件
```
    <input type="text" @keyup.enter="showEnter">
    <input type="text" @keydown.tab="showEnter">
    <input type="text" @keydown.tot="showEnter">
    <script>
         var app = new Vue({
            <!-- 自定义键值 -->
            Vue.config.keyCodes.tot = 32;
            el:"#app",
            methods:{
                showEnter(event) {
                    console.log(event.target.value)
                }
            },
         })
    </script>
```
## 数据代理
什么叫数据代理？
**Object.defineProperty()**
通过一个对象去代理另一个对象并对其属性进行（读/写）的操作；
* 参数一：需要设置或添加属性的对象
* 参数二： 需要设置或添加属性的值
* 参数三：配置对象
```
    <div id="app"></div>
    <script>
        var app = new Vue({
        el:"#app",
        data:{
            num: 10,
            obj:{
                name:"hyy",sex:"female"
            }
        },
    })
    </script>
```
写在控制台面板里(通过num改变obj)
```
        let num = 10; 
        let obj = {name:"hyy",sex:"female"}; 
        Object.defineProperty(obj,'age',{
            get(){
                console.log("读取"); 
                return num
            },
            set(value) {
                console.log("设置");
                num = value;
            }
        })
```
写在控制台面板里(通过obj改变obj1)
```
        let obj = {};
        let obj1 = {
            name: "Zark",
            age: 18
        }
        Object.defineProperty(obj,'age',{
            get() {
                console.log("走到获取里");
                return obj1.age;
            },
            set(value) {
                obj1.age = value
            }
        })
        console.log(obj)
```