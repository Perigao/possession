[toc]
# Webpack
## 目的
旧的浏览器和新的浏览器兼容

## 指令
* 1.安装npm install yarn -g
* 2.yarn -v 查看版本号
* 3.yarn init -y 初始化
* 4.yarn add -D webpack webpack-cli
* 5.yarn webpack
* 6.yarn build 打包

## mode 模式

```
development 开发模式
none 无
production 生产模式
```

## entry 指定文件打包路径

默认：index.js (约定俗成) 
单个打包： `entry:"./src/aaa.js"` 单个入口 
对象类型： entry:{

```
     hello:"./src/a1.js",
     say:"./src/a2.js"
}
```

数组类型：

```
entry:[
    "./src/a1.js",
    "./src/a2.js"
]
```

## output 出口

* 使用`path:const path = require("path")` 在全局定义
* 指定打包后的文件名称
    `filename:"[name]-[id]-[hash].js",  `
    //此时entry用对象写法，数组写法容易合并只生成一个文件
    `filename:"fileMode.js",`
* 自动删除旧的打包文件 生成新的打包文件
    `clean:true,`
* 指定打包后的文件 (默认dist)
    `path:path.resolve(__dirname,"dist")`  //也可以是自己已创建的文件夹 将dist换成已创建文件夹名称即可


## loader 加载器

安装：yarn add -D css-loader style-loader module: { 名称

```
rules: [ 规则
    { 
        test: /\.css$/, 匹配正则
        use: [
            { loader: 'style-loader'}, 
            { loader: 'css-loader'}, 
            ]
         //use:['style-loader','css-loader']   //另一种写法
         // 使用的加载器内容：执行顺序是从后往前，先css转换在style展示
    },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }
],
```

## babel-loader 
### 目的：新的属性/特性在老版浏览器兼容

### 安装指令
yarn add -D babel-loader [@babel](http://git.edu.koobietech.com/babel)/core [@babel](http://git.edu.koobietech.com/babel)/preset-env

### 规则
```
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
```

### 默认适配浏览器列表

```
    "browserslist":[
        "defaults"，
        ....
    ]
```

## 插件 plugin

### 安装指令
yarn add -D html-webpack-plugin 

### 引入
const HtmlWebpackPlugin = require("html-webpack-plugin");

```
    plugins: [new HtmlWebpackPlugin({
    title: "打包工具webpack" //页面标题
    template:"./src/demo.html" 模板
    //这里的路径是自己新建的demo文件的路径  按照demo这个页面的模板打包
    })],
```

## 映射源码

devtool:"inline-source-map"

## 开发服务器

1.yarn webpack --watch 自动打包 
yarn watch
2.yarn add -D webpack-dev-server 服务器上的网址 
启动命令 yarn webpack serve --open 