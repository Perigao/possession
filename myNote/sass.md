[toc]
(/day21)
## sass
### 简介：
Sass是css的扩展语言，可以帮助我们减少css重复的代码，节省开发时间；
>Sass文件后缀为.sass，.scss;
### 为什么使用sass
> * css本身语法不够强大，导致重复写一些代码，无法复用，而且代码维护不方便；
> * Sass引入合理的样式复用机制，增加了规则，变量，混合宏，选择器，继承，内置函数等等特性；
### sass变量
> Sass变量使用$符号；用于存储一些信息，可重复使用；
>>Sass变量可以存储:字符串、数字、颜色值、布尔值、列表、null值；
>>$后跟进变量名 用:进行赋值(注意：全局变量与局部变量)

**$后跟进变量名 用:进行赋值**

`$box:50px !default;`表示默认变量 
特点：优先级较低
!global 全局

### Sass存储形式两种
* style.sass
* style.scss
**sass格式会省略花括号和分号，所以通常存为scss**
### 在sass中嵌入其他scss文件
* @import url(reset.css)
* @import “路径.scss”
### 嵌套
* 1.选择器的嵌套
* 2.属性嵌套
* 3.伪类嵌套
     “&”表示查找当前元素以及当前元素的祖先元素
### 混合宏
> * @mixin 指令允许我们定义一个可以在整个样式表重复使用的样式；
> * @include 指令可以将混入(mixin)引入当文档中；
#### 声明混合宏
>* 1.不带参数混合宏
>>  @mixin是用来声明混合宏的关键词，类似css中的@media、@font-face一样。

![声明混合宏不带参数](./images/声明混合宏.png)
> * 2.带参数混合宏

a.不带值得参数                           
![a](./images/a.png)
b.带值得参数
![b](./images/b.png)   
c.传多个参数  当混合宏传参过多时，可以用...来替代
![c](./images/c.png)
#### 缺点
产生冗长的代码块

### 继承
>在sass中继承类中的样式代码块；
>>通过关键字@extend来继承样式所以样式代码，而且编译出来的css会将选择器合并在一起，形成群组选择器；
>>>基类：已存在的样式块；
声明方式：.class(如:.titleBar)
调用方式: @extend

![继承](./images/继承.png)
#### 占位符
>%placeholder  简写 %
>>可以取代css中的基类造成的代码冗余的情形；
因为%placeholder声明的代码，如果不被@extend调用的话，不会产生任何代码；

![Alt text](image-1.png)

### sass函数
自定义函数:
要实现函数声明和返回内容需要使用function和return两个指令。

        @function 函数名(形参) {
            @return;
        }
        #{函数名(变量值)}px

![Alt text](image-2.png)

### sass操作符
* 加法：需要单位统一
* 减法：减法前后加空格，不可直接连接减法运算
* 乘法：只允许一个数值带有单位
* 除法：需要在运算外添加一个小括号
* 颜色运算：支持颜色值，分段运算

## 渐变色
如需创建线性渐变，您必须定义至少两个色标。色标是您要呈现平滑过渡的颜色。您还可以设置起点和方向（或角度）以及渐变效果。
>background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
### 线性渐变
* 从上到下
```
    #grad {
        background-image: linear-gradient(red, yellow);
    }
```
* 从左到右
```
    #grad {
        background-image: linear-gradient(to right, red , yellow);
    }
```
### 径向渐变
>background-image: radial-gradient(shape size at position, start-color, ..., last-color);
>>默认地，shape 为椭圆形，size 为最远角，position 为中心
```
    #grad {
        background-image: radial-gradient(red, yellow, green);
    }
```




























