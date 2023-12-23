[toc]
(/day30)
## 动画
### v-enter
>定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

 * v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

* v-enter-to：2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

### v-leave
> 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

* v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

* v-leave-to：2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
  
## 动画过程
![Alt text](./images/image-act.png)

## $nextTick
处理数据**未及时更新**问题
`$nextTick:Vue.nextTick([callback,content])`
在下次DOM更新循环后执行代码延迟回调，修改数据后渲然更新数据的一个方法
一般使用在`create `**修改数据后**渲然更新数据的一个方法
### demmo
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
        <!-- 
            处理数据未及时更新问题
            $nextTick:Vue.nextTick([callback,content])
            在下次DOM更新循环后执行代码延迟回调，修改数据后渲然更新数据的一个方法
            一般使用在create 修改数据后渲然更新数据的一个方法
         -->
         <div id="vase">{{vase}}</div>
         <button @click="send">改变</button>
    </div>
    <script src="./vue.js"></script>
    <script>
        
        var app = new Vue({
            el:"#app",
            data:{
                vase:'花瓶'
            },
            methods: {
                send() {
                    this.vase = '玩鼠标好玩么';
                    // this.$nextTick(()=>{
                    //     console.log("值1",document.getElementById("vase").innerHTML)
                    // })
                    setTimeout(()=>{
                        console.log("值2",document.getElementById("vase").innerHTML)
                    })
                    console.log("值",document.getElementById("vase").innerHTML)
                }
            },
            // js执行顺序：同步 异步（微任务 宏任务）=>同步 nextTick promise setTimeOut
        })
    </script>
</body>
</html>
```