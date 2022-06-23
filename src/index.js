import x from './x.js'
import jpg from './assets/小猫.jpg' //得到的是路径
const div = document.getElementById('app')

div.innerHTML = `
<img src="${jpg}">`

const button = document.createElement('button') //创建按钮
button.innerText = '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy.js')
    promise.then((module)=>{
       const fn = module.default() //函数等于模块默认值
       fn() //成功了就调用函数
    },()=>{
        console.log('错了');
    })
}
div.appendChild(button)