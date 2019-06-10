import React from "react";
import {render} from "react-dom";
require('./index.css')

function getId(){
    return document.getElementById('root')
}
//2.
// function eat(name) {
//     return name.name +" 去吃 "+name.food
// }
const user = {
    name:'zhangsan',
    food:'猪脚饭',
    imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560168138248&di=f0ff25267ab0e25e4b4c07f0eb197215&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201503%2F31%2F20150331203011_yshBy.jpeg"
}
//3.
// function order(a) {
//     if(a){
//         return <p>今天,{eat(a)}</p>
//     }else {
//         return <p>别吃了</p>
//     }
// }
// //不是字符串也不是html ,jsx
// const  element = (
//     <div>
//         <h1 className='red'>猪脚饭</h1>
//         <img src={user.imgUrl} alt="#" width='300' />
//     </div>
// )
// //5.jsx表示对象
// const element222 = React.createElement(
//     'h1',{className:'blue'},'猪脚饭'
// )

// render(element,getId('root'))

// function tick() {
//     const timeElement = (
//         <div  className='red'>
//             <h1>Time</h1>
//             <h2>{new Date().toLocaleString()}</h2>
//         </div>
//     )
//     render(timeElement,getId('root'))
// }
// setInterval(tick,1000)

//////////组件&props

// function film(pian) {
//     return <div>{pian.name}</div>
// }
//
// render(film({name:'aaa'}),getId())

// class Box extends React.Component{
//     render() {
//         return (
//             <div className={this.props.color}>{this.props.name}</div>
//         );
//     }
// }
// // const el5 = <Box name={user.food}/>
function Avatar(props){
    return (
        <img src={props.img} width='100%' alt="#" />
    )
}
// function Name(props) {
//     return (
//         <Box name={props.name} color="rW"/>
//     )
// }
// function Food(props) {
//     return (
//         <Box name={props.food} color="bW"/>
//     )
// }
// function Thing(props) {
//     return (
//         <div>
//             <Avatar img={props.imgUrl}/>
//             <Name name={props.name}/>
//             <Food food={props.food}/>
//         </div>
//     )
// }
// const el = Thing(user)
// render(el,getId())

// function Clock(props){
//     return(
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.data}.</h2>
//         </div>
//     )
// }

///setstate
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:new Date()
        }
    }
    render(){
        return(
            <div>
                <Avatar img={user.imgUrl}/>
                <h3 className='rW'>It is {this.state.data.toLocaleString()}.</h3>
            </div>
        )
    }
    //已经挂载  渲染到DOM后运行  所以定时器
    componentDidMount() {
        this.timeID = setInterval(()=>{
            this.tick()
        },1000)
    }
    //准备卸载
    componentWillUnmount() {
        clearInterval(this.timeID)
    }

    tick() {
        this.setState({
            data:new Date()
        })
    }
}


render(<Clock/>,getId())


