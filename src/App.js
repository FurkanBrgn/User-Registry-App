import React,{Component} from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import Users from "./components/Users";
import NotFound from "./components/NotFound";
class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="container">
        <Navbar/>
        <hr/>
        <Routes>
          <Route path='/' element={<Users/>} exact />
          <Route path='/add' element={<AddUser/>} exact />
          <Route path='/edit/:id' element={<UpdateUser/>} exact/>
          <Route path='*' element={<NotFound/>} exact/>
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
