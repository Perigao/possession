[toc]
# ts
js是弱语言 但ts不是
## 引入ts文件的方式
> 与js文件相同
`<script src="./****.ts"></script>`

## 命令
> ts就是js的一个超集(ts是一个比较严格的js)

* 安装命令：**npm install -g typescript** 
* 查询版本号：**tsc -V**
## 格式
```
(()=>{

})()
```
## 方法
### 1.使用vscode自带的自动编译
* 点击文件--在集成终端中打开
* 命令框中输入：**tsc --init**(会自动生成tsconfig.json文件)
* function中若有传参会报错 在参数后面加上其类型
`eg: str:string`
* 在该文件中将严格模式`strict:true`改为`strict:false`
### 2.手动转换成js文件
* 使用tsc+Tab(自动生成该文件的js文件)
* 再重新在html文件中引入js文件

## ts在vscode中如何自动编译
>自动生成一个我们想要的js文件步骤
* 1.生成配置文件tsconfig.json(tsc --init)
* 2.修改tsconfig.json里的配置
    * outDir  输出的文件位置
    * strict  是否是严格模式
* 3.启动监视任务 
    * 终端--运行任务--显示所有任务--tsc监视

### 类型注解
ts本身有静态分析代码的能力  可以分析代码结构和提供类型注解
#### 什么是类型注解
> 是一个轻量级的为函数或者变量添加的约束

### 接口
> 是一种能力 一种约束

代码：
```
(()=>{
    // 定义一个接口
    interface iPerson{
        firstName:string
        lastName:string
    }
    //输出名字
    function showFullName(person: iPerson){
        return person.firstName + '-' + person.lastName
    }
    // 定义一个对象
    const person = {
        firstName:'jack',
        lastName:'lucy'

    }
    console.log(showFullName(person));
})()
```
### 类
代码：
```
(()=>{
  /* 定义一个接口 */
  interface iPerson{
    firstName: string
    lastName: string
  }

  /* 定义一个类 */
  class Person{
    /* 定义公共的字段属性 */
    firstName: string
    lastName: string
    fullName: string
    // 定义一个构造函数
    constructor (firstName: string,lastName: string){
      //更新属性数据
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = this.firstName + this.lastName
    }
  }
  //定义一个函数
  function showFullName(person: iPerson){
    return person.firstName + '-' + person.lastName
  }
  //实例化对象
  const person = new Person('诸葛','孔明')
  console.log(showFullName(person))
})()
```

## ts类型
### 基础类型
#### 布尔类型
定以后系统认为该数据为boolean类型 不能在进行更改
```
    var isDone = false  
    // isDone = 10
    console.log(isDone)
```
####   数字类型
```
  var a1 = 10; //十进制
  var a2 = 10; //二进制
  var a3 = 10; //八进制
  var a4 = 0xa; //十六进制
  console.log(a1)
  console.log(a2)
  console.log(a3)
  console.log(a4)  //输出的都是10
```
#### 字符串类型
```
  var name  = 'tom'
  console.log(name)

  //字符串和数字之间能够进行拼接
  var str5 = '我有这么多钱'
  var num  = 10000000
  console.log(str5 + num)
```
**总结**：
* ts中的变量一开始是什么类型的 后期赋值的时候只能用这个类型的数据  
* 不允许用其他类型的数据赋值给当前的变量
#### null &underfined
```
    var und = undefined
    var nll = null
    console.log(und,nll)
    /* 默认情况下 null和undefined是所有类型的子类型 */
    var num12 = 12
    // num12 = undefined
    console.log(num12)
```
#### 数组类型
```
    //数组类型定义方式1 元素类型后面接上[]
    var arr1: number[] = [1,2,3,4,5]
    //数组类型定义方式2  使用数组泛型
    var arr2: Array<number> = [2,3,4]
    console.log(arr1,arr2)
    // var arr3:Array<number> = ['小明',123,true,4] (不可以)
    let arr3 = ['小明',123,true]
    console.log(arr3)
    // console.log(arr3[3].split(''))
```
**注意问题**：数组定义后，里面数据的类型必须和定义数组时候的类型一致的

#### 元组类型
```
    let t1:[string,number]  = ['小明',13]
    console.log(t1)
    // console.log(t1[0].split(''))  //小 明
    // console.log(t1[1].split(''))  //(不可以)

    //枚举  枚举里面的每个数据值都可以叫做元素  每个元素都有自己的编号 从0开始
    enum Color{
        Red = 3,
        Green = 5,
        Blue = 7
    }
    let myColor: Color = Color.Red
    console.log(myColor,Color.Green,Color.Blue)
    console.log(Color[7])
```
#### any类型
* 当一个数组中要存储多个数据类型 不确定的时候  此时可以使用any类型来定义数组
```
    var str:any = 100
    str = '我变成string了'
    console.log(str)

    // 当一个数组中要存储多个数据类型 不确定的时候  此时可以使用any类型来定义数组
    let anyArr: any[] = [100,'小明',true]
    console.log(anyArr)
    // 这种情况下 没有错误的提示信息 any类型有有点也有缺点
    // console.log(anyArr[0].split(''))
```
#### void类型
```
    function showMsg():void{
        console.log('hello word')
    }
    console.log(showMsg())
```
####  object类型
```
    //定义一个函数 参数是object类型  返回值也是object类型
    function getObj(obj: object):object{
        console.log(obj)
        return {
        name:'xiaoming',
        age: 30
        }
    }
    console.log(getObj({name:'zs',age:18}))
```
####  联合类型  表示取值可以为多种类型
* 需求1：定义一个函数得到一个数组或者字符串
```
    function toString(x: number | string): string{
      return x.toString()
    }
    console.log(toString('123'))
```
* 需求2: 定义一个函数得到一个数组或者字符串的长度
```
    function toString(x: number|string): number{
        // return x.toString().length

        // if(x.length){
        //   return x.length
        // } else {
        //   return x.toString().length
        // }

        if((<string>x).length){
        return (x as string).length
        } else {
        return x.toString().length
        }
    }
    console.log(toString(123))
```
* 类型断言  
告诉编译器 我知道我自己是什么类型 
    * 方式1： <类型>值
    * 方式2: 值 as 类型  
#### 类型推断  
TS会在没有明确的指定类型的时候推测出一个类型
```
    // let text = 100
    // text = 'xiaoming'

    let text 
    text = 100
    console.log(text)
    text = '小明'
    console.log(text)
```

### 接口
>ts的核心原则之一是对值所具有的结构进行类型检查
接口：是一种类型，是一种规范

* 定义接口 interface 名字{}
* 可选属性 ？
* 只读属性 readonly

#### 代码：
```
(() => {
  /* 
    需求：创建一个人的对象  需要对人的属性进行一定的约束
    id是number类型  必须有 只读的
    name是string类型 必须有
    age是number类型 必须有
    school是string类型 可以没有
  */
  //定义一个接口
  interface IPerson{
    readonly id: number
    name: string
    age: number
    school?: string
  }

  const person1: IPerson = {
    id: 1,
    name: 'tom',
    age: 20
  }
  //id此时可读可写
  // person1.id = 100
  console.log(person1)
  //可选属性 ？
  //只读属性 readonly
  
})()
```
### 函数类型
* 函数类型：通过接口的方式作为函数类型来使用
* 为了使用接口表示函数类型  我们需要给接口定义一个调用签名
* 它就像是一个只有参数列表和返回值类型的函数  参数列表里面的每个参数都需要名字和类型
```
    (()=>{
    //定义一个接口  用来作为某个函数的类型
    interface SearchFunc{
        (source: string,subString: string) : boolean
    }
    //定义一个函数  它的类型就是上面定义的接口
    const mySearch: SearchFunc = function (source: string,subString: string): boolean{
        return source.search(subString) > -1
    }
    console.log(mySearch('abcd','bc'))
    })()
```

### 类类型
> 类类型：类的类型，类的类型可以通过接口来实现
* 类可以通过接口的方式，来定义当前这个类
* 类可以实现一个接口 也可以实现多个接口
* 接口可以继承其他多个接口
代码：
```
(()=>{
  //定义一个接口
  interface Alarm {
    alert(): any
  }

  //定义一个类 这个类的类型就是上面定义的接口 (可以理解为alarm 这个接口约束了 car这个类)
  class Car implements Alarm{
    //实现接口当中的方法
    alert() {
      console.log( ' car alert')
    }
  }
  //实例化对象
  const car = new Car()
  car.alert()


  //定义一个接口
  interface Light{
    lightOn(): void
    lightOff(): void
  }
  //当前这个类 实现多个接口
  class Car2 implements Alarm,Light {
    alert() {
      console.log('car alert')
    }
    lightOff(): void {
      console.log('car light off')
    }
    lightOn(): void {
      console.log('car light on')
    }
  }
  const person2 = new Car2()
  person2.lightOff()
  person2.lightOn()
  person2.alert()
  //总结：类可以通过接口的方式，来定义当前这个类的欸行
  //类可以实现一个接口 也可以实现多个接口

  //接口可以继承其他多个接口
  interface LightAble extends Alarm, Light{}
  //定义一个类 去实现这个新的接口
  class Car3 implements LightAble {
    alert() {
      console.log('car alert')
    }
    lightOn(): void {
      console.log('car light on')
    }
    lightOff(): void {
      console.log('car light off')
    }
  }
  const car3 = new Car3()
  car3.alert()
  car3.lightOn()
})()

```
## 类
### 定义
> 类：可以理解为模板 通过模板创建实例化对象
格式：`class 类名 {}` 

包含属性、构造函数、方法

代码：
```
(() => {
  class Person {
    //定义属性
    name: string
    age: number
    //定义构造函数 为了将来实例化对象的时候 可以直接对属性的值进行初始化
    constructor (name: string = '小明',age: number = 18){
      //更新对象中的属性数据
      this.name = name
      this.age = age
    }
    //定义一个方法
    sayHi(str: string){
      console.log(`大家好，我叫${this.name},今年${this.age}` + str)
    }
  }
  const person = new Person('xiaohong')
  person.sayHi('你们好')
})()
```

### 类继承
> 继承：类与类之间的继承

A类继承了B类，A类叫子类，B类叫基类(父类)
一旦有了继承关系  就会出现父子类
通过extends关键字

格式：
* class A{}
* class B extends A{}
* const C = new B()  //实例化
* C.(B中的方法)

代码：
```
(()=>{
  //定义一个类
  class Animal{
    run(distance: string){
      console.log(`animal run ${distance}m`)
    }
  }

  //继承
  class Dog extends Animal {
    cry(){
      console.log('wang  wang!')
    }
  }

  const dog = new Dog()
  dog.cry()
  dog.run('100') //可以调用从父中继承的方法

  //这里  dog是一个派生类  它派生自Animal的基类   通过extends关键字

})()
```
### 多态
>多态：父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为

代码：
```
(() => {
  //定义一个父类
  class Animal {
    //定义一个属性
    name: string
    //定义一个构造函数
    constructor(name: string) {
      this.name = name
    }
    //实例方法
    run(distance: number = 0) {
      console.log(`run ${distance}m far away`, this.name)
    }
  }
  //定义一个子类
  class Dog extends Animal {
    //构造函数
    constructor(name: string) {
      //调用父类的构造函数  实现子类中属性的初始化操作
      super(name)
    }
    //实例方法
    run(distance: number = 10) {
      console.log(`run ${distance}m far away`, this.name)
    }
  }
  //定义一个子类
  class Pig extends Animal {
    //构造函数
    constructor(name: string) {
      //调用父类的构造函数  实现子类中属性的初始化操作
      super(name)
    }
    //实例方法
    run(distance: number = 20) {
      console.log(`run ${distance}m far away`, this.name)
    }
  }

  //实例化父类对象
  const ani: Animal = new Animal('动物')
  ani.run()

  //实例化子类对象
  const dog: Dog = new Dog('大黄')
  dog.run()

  const pig: Pig = new Pig('佩奇')
  pig.run()


  /* 父类和子类的关系  可以使用父类的类型创建子类的类型 */
  const dog1: Animal = new Dog('小黄') 
  const pig1: Animal = new Pig('乔治')
  dog1.run()
  pig1.run()


  //该函数需要的参数是animal类型
  function showRun(ani: Animal){
    ani.run()
  }
  showRun(dog1)
  showRun(pig1)
})()
```

### 修饰符
>修饰符(类中的成员的修饰符)：主要是描述类中成员(属性，构造函数，方法)的可访问性
* **public** 修饰符 类中成员默认的修饰符  代表公共的  任何位置都可以访问类当中的成员
* **private** 类中成员如果使用private来修饰 外部成员无法访问这个数据  子类也无法访问
* **protected** 修饰符 类中成员如果使用这个修饰符 来修饰  外部无法访问数据 子类可以访问数据

代码：

```
(()=>{
  //定义一个类
  class Person{
    public name: string
    // private name: string
    // protected name: string
    public constructor(name: string){
      this.name = name
    }
    public eat(){
      console.log('我是eat方法',this.name)
    }
  }
  //定义一个子类
  class Student extends Person {
    constructor(name: string){
      super(name)
    }
    play(){
      console.log('我是play方法',this.name)
    }
  }
  const per = new Person('小红')
  /* 类的外部可以访问类当中的属性成员 */
  console.log(per.name)
  per.eat()
})()
```

#### readonly
>readonly  将属性设置为只读的
还有一个可选属性`？`

代码：
```
(function () {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = 'abc';
            this.name = name;
        }
        return Person;
    }());
    var john = new Person('john');
    console.log(john);
    // john.name = 'peter'
})();
```

### 存储器
> 存储器: 让我们可以有效地控制对于对象的成员的访问  通过getters或者setters进行操作

代码：
```
(()=>{
  class Person{
    firstName: string = 'A'
    lastName: string = 'B'
    get fullName(){
      return this.firstName + '-' + this.lastName
    }
    set fullName(value){
      const names = value.split('-')
      this.firstName = names[0]
      this.lastName = names[1]
    }
  }
  const p = new Person()
  console.log(p.fullName)


  p.firstName = 'C'
  p.lastName = 'D'
  console.log(p.fullName)
    //更改
  p.fullName = 'E-F'
  console.log(p.firstName,p.lastName)
})()
```

### 静态属性
> 静态属性：再类中通过static修饰的属性或者方法 那么就是静态的属性和静态的方法  也称之为静态成员
代码：
```
(()=>{
  class Person{
    name1: string = 'A'
    static name2: string = 'B'
  }
  console.log(Person.name2)
  console.log(new Person().name1)
})()
```

## 函数
### 类型
#### 命名函数
```
    function add(x, y) {
        return x + y
    }
```
#### 匿名函数
```
    let myAdd = function (x, y) {
        return x + y
    }
```
#### 书写完整函数类型
```
    let myAdd2: (x: number, y: number) => number =
        function (x: number, y: number): number {
            return x + y
        }
```
代码：
```
(() => {
  function add(x: number, y: number): number {
    return x + y
  }

  let myAdd = function (x: number, y: number): number {
    return x + y
  }

  //书写完整函数类型
  let myAdd2: (x: number, y: number) => number =
    function (x: number, y: number): number {
      return x + y
    }
})
```
### 可选参数和默认参数
可选：**？**
代码：
```
(() => {
  function buildName(firstName: string = 'A', lastName?: string): string {
    if (lastName) {
      return firstName + '-' + lastName
    } else {
      return firstName
    }
  }
  console.log(buildName('C','D'))   //输出C,D
  console.log(buildName('C'))       //输出C
  console.log(buildName())          //输出A
})()
```

### 剩余参数
js通常使用arguments结构
ts使用...args:

代码：
```
(() => {
  function info(x: string, ...args: string[]) {
    console.log(x,args)
  }
  info('abc','a','b','c')
})()
```

### 函数重载
> 函数重载：函数名相同，形参(类型)不同的多个函数
> 
代码：
```
(() => {
  //需求：我们有一个add函数 可以接收2个string类型的参数进行拼接
  //也可以接收两个number类型的参数进行相加

  //函数重载声明
  // function add(x: string, y: string): string
  // function add(x: number, y: number): number

  //定义函数实现
  function add(x: string | number, y: string | number): string | number {
    // return x + y
    //在实现上我们要注意严格判断两个参数的类型是否相等而不能直接写x+y
    if (typeof x === 'string' && typeof y === "string") {
      return x + y
    } else if (typeof x === 'number' && typeof y === 'number') {
      return x + y
    }
  }
  console.log(add(1, 2))        //输出3
  console.log(add('a', 'b'))    //输出ab
  console.log(add(1,'a'))       //输出underfined
})()
```

## 泛型
>指在定义函数、接口、类的时候，不预先执行具体的类型，而是在使用的时候再去指定的一种特性  <>

代码：
```
(() => {
  //创建一个函数 根据指定数量的count 和数据value  创建一个包含count个value的数组

  function creatArray(count: number, value: any): any[] {
    const arr: any[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr1 = creatArray(4, 11)
  const arr2 = creatArray(6, 'aa')
  console.log(arr1[0].toFixed(), arr2[0].split(''))



  function creatArray2<T>(count: number, value: T) {
    const arr: Array<T> = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr3 = creatArray2<number>(11,3)
  console.log(arr3)
  const arr4 = creatArray2<string>(4,'cc')
  console.log(arr4)
  // console.log(arr4[0].split(''))
  // console.log(arr4[0].toFixed())  error


  //多个泛型参数的函数
  function swap<K,V> (a: K,b: V): [K,V] {
    return [a,b]
  }
  const result = swap<string,number>('abc',123)
  console.log(result)
  console.log(result[0].length,result[1].toFixed())
})()
```
