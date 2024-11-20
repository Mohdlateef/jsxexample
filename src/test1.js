import React from "react";

const Test1=(props)=>{
let arr=['apple','mango','grapes'];
console.log(props.children)
return(
    <div>
        {arr.map((ele,index)=>
        (
            <h5 key={index}>{ele}</h5>
        ))}
        {props.children}
    </div>
)
}

export default Test1;