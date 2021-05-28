import Planeta from "./planeta/planeta";
import Space from "./Space/space";
import Zvezda from "./Zvezda/zvezda";
import {BrowserRouter,Route} from "react-router-dom";


function Content(){
    return(
        <div>
            <BrowserRouter>
                <Route path="/two/Page/Planeta" component={Planeta}/>
                <Route path="/two/Page/Zvezda" component={Zvezda}/>
                <Route path='/two/Page/Space' component={Space}/>
            </BrowserRouter>

        </div>
    )
}
export default Content;