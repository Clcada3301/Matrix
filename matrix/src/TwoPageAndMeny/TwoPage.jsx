import {useState} from "react";
import './twoPage.css'
import Header from "./Header/header";
import Meny from "./Meny/meny";
import Content from "./Content/content";
function TwoPage() {
    const [text,setText]=useState({
        color:'white'
    })
    return (
        <div  >
            <div><Header/></div>
            <div><Meny/></div>
            <div><Content/></div>
           vvwevwefwefewfurfhsjdkewfjdhscjjfkdsmn




        </div>
    );
}

export default TwoPage;