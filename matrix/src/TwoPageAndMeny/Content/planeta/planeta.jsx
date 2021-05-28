import {useCallback, useEffect, useState} from "react";
import './planeta.css'
import Table from "./tabke";
import backs from "../Space/background-3907905_1280.jpg";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Planeta(slides){
const [planets,setPalnets]=useState({color:'white'})
    const [grids,setGrids]=useState({
        width: '1000px',
        height: '1000px'

        })
    const [grid,setGrid]=useState({
        width: '100%',
        height: '100%'


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
    const minus=()=>{
        setCount(count-1)
        let plus=planeta[count]
        setArray(plus)
        if (count===0){
            setCount(8)
            let plus=planeta[count]
            setArray(plus)
        }
    }
const planeta=Table.map((item,index)=>
    <div style={grid} className='gridPl'>
       <div className='namePlaneta'> {item.planeta}</div>
       <div className='planetaImg'> <img src={item.img}  style={grids}/></div>
        <div className='textPlaneta'><p>{item.texts}</p></div>
    </div>

)
    const [backs,setBacks]=useState({ backgroundImage: 'url("https://i.pinimg.com/originals/1d/28/db/1d28db61c1c5ed958b8924989a3ed0c4.jpg")',
        display: 'grid',
        width: '100%',
        height: '100%'
    })

    return(
        <div style={backs} className='grid'>
            <Button className='b1' onClick={plus} variant="outline-secondary">Plus</Button>{' '}

            <h1  >{planeta[count]}</h1>
            <Button className='b2' onClick={minus} variant="outline-secondary">Minus</Button>{' '}
        </div>
    )
}
export default Planeta;