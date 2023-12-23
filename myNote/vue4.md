[toc]
(/day28)
## 生命周期
vue 底层中diff算法 => DOM虚拟树 DOM真实树

### 定义
生命周期：生命周期函数 生命周期钩子 生命周期回调函数
生命周期的名字是不可以更改的

三个阶段：
### 创建阶段
* 1.beforeCreate 创建前：方法（methods） 和 数据（data）都是无法被调用
* 2.created      创建后：方法（methods） 和 数据（data）都是可以被调用
### 运行阶段
* 3.beforeMount  挂载前：页面数据不会更新到视图里(没有通过vue编译) 对DOM操作无效
* 4.mounted      挂载后：页面渲染数据，并可以开始对DOM进行操作
* 5.beforeUpdate 更新前：数据改变 页面未更新
* 6.updated      更新后：数据改变 页面更新
### 销毁阶段
* 7.beforeDestroy 销毁前：对DOM操作无效
* 8.destroyed     销毁后：彻底销毁
## 组件
### 相关语法结构
* 定义组件 `Vue.extend`
* 组件名`name `
* 组件模板 ` template:`` `
* 组件中数据
```
    data() {
        return {
        }
    }
```
* 注册组件 `components:{}`
### demo
```
    <body>
        <div id="app">
            <chenyou></chenyou>
            {{show}}
        </div>
        <script src="./vue.js"></script>
        <script>
            // 定义组件
            const zhenBo = Vue.extend({
                //组件名
                name:"zhenBo",
                //组件模板
                template:`
                    <div>
                        <h2>马琛笑得真好看</h2>    
                        <p>
                            {{msg}}    
                        </p>
                    </div>
                `,
                // 组件中数据
                data() {
                    return {
                        msg:"嘿嘿嘿"
                    }
                }
            })
            // vue实例
            new Vue({
                el:"#app",
                data:{
                    show:"卢勃玮也想来"
                },
                // 注册组件
                components:{
                    // 标签名要小写
                    chenyou: zhenBo
                }
            })

        </script>
    </body>
    </html>
```
## 嵌套组件
### demo
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
        {{msg3}}
        <list></list>
        <list3></list3>
        
        <list2></list2>
    </div>
    <script src="./vue.js"></script>
    <script>
    const list1 = Vue.extend({
        name:"list1",
        template:`
                <div>{{name}}</div>
        `,
        data() {
            return{
                name:'何盈盈'
            }
        }
    })


        const list3 = Vue.extend({
            name:"list3",
            template:`
                <div>
                    <i>{{msg5}}</i>
                    <h2>振博睡觉</h2>
                    <list1></list1>
                </div>
            `,
            data() {
                return{
                    msg5:'真香'
                }
            },
            // 注册组件（局部）
            components:{
                list1
            }
        })

    const list2 = Vue.extend({
        name:"list2",
        template:`
        <div>
        
            <h2>陈悠</h2>
                {{www}}    
        </div>
        `,
        data() {
            return{
                www:'真美'
            }
        }
    })

    const list = Vue.extend({
        name:"list",
        template:`
            <div>
                <h2>邵柏洋</h2>
                <i>{{msg2}}</i>
            </div>
        `,
        data() {
            return{
                msg2:'玩红警'
            }
        },
    })

    new Vue({
        el:"#app",
        data:{
            msg3:"陈悠今天真好看"
        },
        components:{
            list,
            list3,
            list2
        }
    })


    </script>
</body>
</html>
```

## 自己复习总结
### App.vue 
> 所有内容展示在这个页面
* 直接在App.vue页面写
* 涉及到页面跳转
`<router-view></router-view>`(这是组件页面的容器,切换菜单只会更新这里面的内容)与
`<router-link to="/新建的views名"></router-link>`绑定使用

### views
>所有页面写在views里

#### 步骤
* 1.在views里创建新的.vue文件(直接输入vue+enter)
* 2.在路由中引入
* 3.


### components

### router