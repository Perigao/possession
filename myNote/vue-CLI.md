[toc]
(/day29)
## vue 搭建流程
命令板：cmd 回车

* 1.安装node包 node -v 

* 2.全局安装vue-cli脚手架 

* 3.创建vue项目：vue create 项目名称

* 4.起服务 npm run serve

* 5.npm 与 cnpm
切换博客网址：
https://blog.csdn.net/sinat_43082914/article/details/107683545?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169484906416800227418624%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=169484906416800227418624&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-107683545-null-null.142^v94^insert_down28v1&utm_term=cnpm%E4%B8%8Enpm%E5%88%87%E6%8D%A2&spm=1018.2226.3001.4187

cnpm报错解决网址
https://www.cnblogs.com/fswhq/p/16691708.html

* 6.cnpm install node-sass

* 7.cnpm install sass-loader

* 8.cnpm/npm run serve


* 9.vue项目中vue.config.js文件只要发生更改必须重新起服务

断服务ctrl + c
起服务

* 10.在vue.config.js// 关闭eslint校验
  lintOnSave: false 


* 11.如何使用组件 
    a.组件写在components里 组件里要起名
    b.在使用页面 先引入 import 
    c.注册组件
    d.使用组件


* 12.ref
ref绑定信息 使用方法 ：
	在template部分 绑定标签 `ref='xxx'`
	调用 `this.$refs.xxx`

* 13.父子组件通信：父组件向子组件传参 props

* 14.样式隔断 scoped 
   sass使用

* 15.mixin 全局注册
 
## 安装后写时步骤

* 1.创建vue项目 `vue create 项目名` 
* 2.进入vue项目 cd 项目名 
* 3.运行vue项目 `npm/cnpm run serve`
## 脚手架目录

![Alt text](./images/image-vue.png)
### sass 安装

>cnpm install node-sass
cnpm install sass-loader
### 断服务

ctrl + c
vue项目中vue.config.js文件只要发生更改必须重新起服务
### 避免名字不合法

在vue.config.js// 关闭eslint校验
  `lintOnSave: false `
## 组件 src/components
### 如何使用组件 

* a.组件写在`components`里 组件里要起名
* b.在使用页面 先引入 `import `
* c.注册组件
* d.使用组件
## ref

ref绑定信息 使用方法 ：
* 在`template`部分 绑定标签 `ref='xxx'`
* 调用 `this.$refs.xxx`

## 父子组件通信

父组件向子组件传参 `props`
###  demo

```
        props:{
            name:{
                // 类型
                type: String,
                // 是否必须传入
                require: true,
                // 默认值
                default: ""
            },
            age:{
                // 类型
                type: Number,
                // 是否必须传入
                require: true,
                // 默认值
                default: "12"
            },
            sex:{
                // 类型
                type: String,
                // 是否必须传入
                require: true,
                // 默认值
                default: ""
            }
        },
```

## 样式隔断 scss写法
样式隔断 `scoped `
sass使用 `lang='scss'`

## 混合mixin

## 自定义事件 `$emit/$on/$off`
### 方法
#### 第一种

> 父：
>> 在模板中：自定义事件 v-on/@事件名="自定义方法"
>> 在方法里：自定义方法（接参）{执行的代码}
>
> 子：
>> 在方法中：this.$emit("监听的事件名",传参)

#### 第二种

> 父：
>>在组件位置：ref="xxx"
>>在方法里：在挂载后周期mounted(){this.$refs.xxx.$on('监听方法名',调用的方法)}
>
> 子:
>>在方法里：this.$emit("监听方法名")
>
> 解绑：this.$off()
### -$emit

> **this**.$emit("wxChat",**this**.name,1,2,3,4,5)

### -$on

```
    mounted() {
        this.$bus.$on('demoList',this.demoList)
},
```

### -$off

> this.$off ( "xxx" ) ;
>
> this.$off ( [ 'xxx' ] ) ;
>
> this.$off ( ) ;

```
    Unbinding() {
        // 解绑单个文件
        this.$off("wxChat");
        // 解绑多个文件
        this.$off(['wxChat']);
        // 解绑全部文件
        this.$off();
        console.log('解绑了')
},
```

## 全局事件总线（组件与组件间的一个通信）

> 全局事件 : 
>
> main.js => Vue.prototype.$bus = this

```main.js
// 实例化Vue
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;    //	<==这一行这一行
  }
}).$mount('#app')
```

### 发布订阅 npm install pubsub-js

> components下创建	List.vue
>
> 
>
> 发布方法：			 pubsub.subscribe("监听事件名",执行的方法)
>
> 取消发布订阅： 	pubsub.unsubscribe("监听事件名")

```
vue
<script>
// 引入发布订阅
import pubsub from 'pubsub-js';
export default {
    name:'List',
    data() {
        return{   
        }
    },
    methods:{
        newList(msgName,data) {
            console.log("发布订阅成功：",data)
        }
    },
    mounted() {
        // 发布方法 pubsub.subscribe("监听事件名",执行的方法)
       this.ids = pubsub.subscribe("vase",this.newList)
        // this.$refs.xxx.$on("ab")
    },
    beforeDestroy() {
        // 取消发布订阅 pubsub.unsubscribe("监听事件名")
        pubsub.unsubscribe(this.ids);
    },
}
</script>
```
## 发布订阅 npm install pubsub-js