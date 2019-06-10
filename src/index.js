import React from "react";
import {render} from "react-dom";
require('./index.css')

function getId(id){
    return document.getElementById(id)
}
//2.
function eat(name) {
    return name.name +" 去吃 "+name.food
}
const user = {
    name:'zhangsan',
    food:'猪脚饭',
    imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560168138248&di=f0ff25267ab0e25e4b4c07f0eb197215&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201503%2F31%2F20150331203011_yshBy.jpeg"
}

//3.
function order(a) {
    if(a){
        return <p>今天,{eat(a)}</p>
    }else {
        return <p>别吃了</p>
    }
}

//不是字符串也不是html ,他叫jsx
const  element = (
    <div>
        <h1 className='red'>猪脚饭</h1>
        <img src={user.imgUrl} alt="#" width='300' />
    </div>
)

///5.jsx表示对象
const element222 = React.createElement(
    'h1',{className:'blue'},'猪脚饭'
)







render(element,getId('root'))




