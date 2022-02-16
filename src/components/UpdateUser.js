import axios from "axios";
import React from "react";
import UserConsumer from '../context';
import { useNavigate, useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       const history = useNavigate();
       return <Children {...props}  match = {match} history={history}/>
   }
 }

class UpdateUser extends React.Component{
    state={
        name:"",
        email:"",
        error:false
    }
    
    onChangeInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    valideForm=()=>{
        const{name,email}=this.state;
        if(name===""||email===""){
            return false;
        }
        return true;
    }

    updateUser=async(dispatch,e)=>{
        e.preventDefault();
        const {id} =this.props.match.params;
        const {name,email}=this.state;
        const newUser={
            name,
            email
        };
        if(!this.valideForm()){
            this.setState({
                error:true
            });
            return;
        }
        const response=await axios.put(`http://localhost:3000/users/${id}`,newUser);
        dispatch({type:"UPDATE_USER",payload:response.data});
        this.props.history("/");
    }

    componentDidMount= async()=>{
        const {id} =this.props.match.params;
        const response=await axios.get(`http://localhost:3000/users/${id}`);
        const{name,email}=response.data;
        this.setState({
            name,
            email
        });
    }

    render(){
        const {name,email,error}=this.state;
        return(
            <UserConsumer>
            {
                value => {
                    const {dispatch}=value;
                    return(
                        <div className="card text-white bg-dark">
                            <h5 className="card-header">Update User</h5>
                            <div className="card-body">
                                {
                                    error ? <div class="alert alert-danger" role="alert">
                                        Lütfen değerleri boş bırakmayınız!
                                    </div> : null
                                }
                                <form onSubmit={this.updateUser.bind(this,dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            placeholder="Enter Name"
                                            name="name"
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={this.onChangeInput}>
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            placeholder="Enter Email"
                                            name="email"
                                            type="text"
                                            className="form-control"
                                            value={email}
                                            onChange={this.onChangeInput}>
                                        </input>
                                    </div>
                                    <button type="submit" className="btn btn-danger btn-block">Update User</button>
                                </form>
                            </div>
                        </div>
                    );
                }
            }
            </UserConsumer>
        );
    }
}
export default withRouter(UpdateUser);