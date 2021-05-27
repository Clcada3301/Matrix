import {useEffect, useState} from "react";
import axios from "axios";
import Table from "./tabke";
import zemla from './imgPlaneta/earth.png'
function Planeta(slides){

const [planets,setPalnets]=useState({color:'white'})
    const [grid,setGrid]=useState({
        width:'100%',

        })

const [array,setArray]=useState()
const [count,setCount]=useState(0)

    const plus=()=>{
        setCount(count+1)
        let plus=planeta[count]
        setArray(plus)
if (count===8){
  setCount(0)
    let plus=planeta[count]
    setArray(plus)
}
    }

const planeta=Table.map((item,index)=>
    <p style={grid}>{item.planeta}<p style={grid}>{item.text}</p><img src={item.img} alt="tregfewfewer" style={grid}/></p>


)


    return(
        <div>

<button onClick={plus}>plus</button>





            <h1  style={grid}>{planeta[count]}</h1>

        </div>
    )
}
export default Planeta;