import {useEffect, useState} from "react";

import Table from "./tabke";
import axios from "axios";

function Zvezda(){
    const API='pXSXl0PF58tbCRzVuCrJD0ShZcbcDfcLsGMM3B7N';
    const urlBrowser ="https://api.nasa.gov/DONKI/CME?startDate=2017-01-03&endDate=2017-01-03&api_key=DEMO_KEY" ;
    const [contactData, setContactData] = useState([])
    useEffect(() => {
        axios.get(urlBrowser).then((res) => {
            setContactData(res.data)

        });
    },[])

const [textColor,setTextColor]=useState({color:'white'})
    return(
        <div>
            <tbody>
            {contactData.map(
                item => (
                    <tr key={item.id}>
                        <td style={textColor}>{item.startTime}</td>

                    </tr>
                ))}
            </tbody>

ZVEZDA
        </div>
    )
}
export default Zvezda;