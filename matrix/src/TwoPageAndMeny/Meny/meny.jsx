import {Button, Nav, Navbar, NavLink} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {useState} from "react";
import './meny.css'
const Meny=()=>{
const [colorsText,setcolorsText]=useState({color:'white'})

    return(
        <div className='grid'>

            <Button className='b1' variant="outline-secondary"><a style={colorsText} href='/two/Page/Space'>Space</a></Button>
            <Button className='b2' variant="outline-secondary"> <a style={colorsText}href='/two/Page/Planeta'>Planet</a></Button>
            <Button className='b3' variant="outline-secondary"> <a style={colorsText}href="/ilon">Ilon mask</a></Button>
            <Button className='b4' variant="outline-secondary"><a style={colorsText}href="/two/Page/Zvezda">Zvezda</a></Button>

        </div>
    )
}
export  default Meny;