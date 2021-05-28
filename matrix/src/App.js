

import './App.css'
import BlockOne from "./FirstPage/block1";

import TwoPage from "./TwoPageAndMeny/TwoPage";
import {BrowserRouter,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';








function App() {
    return (
        <BrowserRouter>
        <div className='App'>

      <div>
          <Route path="/one" component={BlockOne}/>
          <Route path="/two/Page" component={TwoPage}/>
      </div>








        </div>
</BrowserRouter>
    );
}

export default App;