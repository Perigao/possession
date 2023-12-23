[toc]
## 样式绑定
动态(样式的)绑定 v-bind  简写 “:”
### class
书写格式 v-bind:class="样式"
**class样式 是合并 不是覆盖**
#### 对象写法
```
    <p v-bind:class="{active:isActive,error: true}">
        这是一段文字
    </p>
```
```
    <p :class="{active:isActive}">
        新的内容 动态绑定样式 对象写法
    </p>
```
#### 数组写法
```
    <p v-bind:class="['active','error','common']">
        数组写法
    </p>
```
#### 对象数组写法
```
    <p :class="[{active:isActive},'common',{error: true}]">
        对象数组写法
    </p>
```
#### css
```
    .active {
            color: #f00;
        }
        .error {
            color: aqua;
        }
        .common {
            font-weight: bold;
        }
```
#### script
```
    <script>
        var app = new Vue({
            el:"#app",
            data:{
                isActive: true
            }
        })
    </script>
```
### style
书写格式 v-bind:style="样式"
#### 对象写法
```
    <p v-bind:style="{color:isColor,fontSize:fontSize + 'px',fontWeight: 900}">
        这是一段文字时 对象写法
    </p>
```
#### 数组写法
```
    <p :style="[{color:isColor}]">数组写法</p>
```
#### script
```
    <script>
        var app = new Vue({
            // el:"#app",
            data: {
                isColor: 'red',
                fontSize: 40
            }
        })
        app.$mount("#app");
    </script>
```      
## 计算属性(computed)
**computed：{}，**
>* 1.最好大量的去使用计算属性 计算属性有缓存 同步操作 处理计算量不大的数据
>* 2.像数据进行更新(衍生数据),最好使用计算属性
>* 3.如果计算量大 消耗性能 异步操作 使用侦听器(watch)
>* 4.watch 不进行缓存 计算量大的操作 异步操作

在methods里写方法调用时要加括号()
而computed计算属性中不需要
### html
```
    <div id="app">
        <div>
            <p>
                姓：<input type="text" v-model="newName">
            </p>
            <p>
                名：<input type="text" v-model="liName">
            </p>
            <p>姓名是: {{myName}}</p>
        </div>
        <p>名字是:{{firstName + lastName}}</p>
        <p>我们的名字是:{{ getFullName() }}</p>
        <p>{{full}}</p>
    </div>
```
### script
```
    var app = new Vue({
        el:"#app",
        data:{
            firstName: '卢勃玮',
            lastName: '张振博',
            full: '马琛',
            newName: '马',
            liName: '琛', 
        },
        computed:{
            fullName() {
                console.log("获取get的值")
                // 抛出数据 return 返回值；
               return this.firstName + this.lastName + this.full;
            },
            myName:{
                // 走的是getter 实际get方法
                get(){
                    return this.newName + '-' + this.liName;
                },
                set() {
                    this.newName = "天气";
                    this.liName = "真好";
                }
            }
        },
         methods: {
                getFullName() {
                    // this => Vue实例
                   return this.firstName + this.lastName + this.full;
                }
            },
    })
```
### watch
```
    watch:{
        // 初次进入页面 并不监听 发生更改才会开启监听
        newName(newValue,oldValue) {
            this.full = newValue + this.liName; 
        },
        liName(newValue,oldValue) {
            this.full = this.newName + newValue;
        },
        // 如果我们想 初始化页面进行监听 
        // 补充知识点
        // newName: {
        //     // 开启监听 ， 深度监听
        //     immediate:true,
        //     deep: true,
        //     handler() {
        //     }
        // }
    },
```

## 条件渲染
条件显示 只有条件满足时 才会执行 v-if
只要满足条件就会展示 v-show 
### v-if和v-show的区别
* 1.当你频繁切换时 使用v-show  条件逻辑性 v-if
* 2.v-if 消耗性能
* 3.v-show 只是单纯的展示隐藏
```
    <div id="app">
        {{score}}
        <p v-if="score >= 90">优秀</p>
        <p v-else-if="score>=80">良好</p>
        <p v-else-if="score>=70">凑合</p>
        <p v-else-if="score>=60">及格</p>
        <p v-else>不及格</p>
        <hr>
        
        <p v-show="score >= 90">优秀</p>
        <p v-show="score>=80">良好</p>
        <p v-show="score>=70">凑合</p>
        <p v-show="score>=60">及格</p>
        <p v-show="score < 60">不及格</p>
    </div>
    <script src="./vue.js"></script>
    <script>
        var app = new Vue({
            el:"#app",
            data:{
                score: Math.ceil(Math.random() * 100)
            },
        })
    </script>
```