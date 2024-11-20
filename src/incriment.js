// import { useState,useEffect } from "react";
function Incriment (props){
    console.log(props.setcount);
    const {setcount,count}=props
    console.log(count);
    // let [count,setcount]=useState(0);
    // let [gold,setgold]=useState(0);
function increase(){
    setcount(count++);
}
// function goldinc(){
//     setgold(gold=gold+1);
// }
    // useEffect(()=>{
    //     console.log("count")
    // },[gold]);
    return(
        <div>
            <button onClick={increase} >Incriment</button>
            <button>gold</button>
        </div>
    )
}

export default Incriment;