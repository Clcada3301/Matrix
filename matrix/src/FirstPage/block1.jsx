import {useState} from "react";
import './block.css'
function BlockOne(){

    const [div,setDiv]=useState(
        {
            color:'white',
            fontFamily:'Trattatello, fantasy',
            transition:'2s color',

            width: '10vw',
            height: '10vh',
            marginLeft: 'auto',
            marginRight: 'auto'

        }
    )
    const [text,setText]=useState({
        color:'transparent'
    })
const upDiv=()=>{

        setDiv({
            width: '10vw',
            height: '10vh',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily:'Trattatello, fantasy',
            color:'red',
            transition:'2s color'
        })
    setText({
        color:'white',
        transition:'9s color'

    })
}


    return(
        <div className='divs'>
          <h1 style={div} onMouseEnter={upDiv}  className='enter' ><a href="/two/Page">ENTER</a></h1>

            <p style={text}>Welkom this site</p>
            <p style={text}>Very intersting</p>
            <p style={text}>Go go go</p>
            <p style={text}>Lets go</p>
            <p style={text}>Space</p>
            <p style={text}>Mars</p>
            <p style={text}>Moon</p>
            <p style={text}>NASA</p>
            <p style={text}>Ознакомитесь с весленой</p>
            <p style={text}>Узанаете про комос</p>
            <p style={text}>увидите зведы</p>
            <p style={text}>увидите новейшие розработки</p>
            <p style={text}>Полеты</p>
            <p style={text}>Илона макса свежая инфа</p>
            <p style={text}>Телескопы</p>
            <p style={text}>Гороскоп</p>
        </div>

    )
}
export default BlockOne;