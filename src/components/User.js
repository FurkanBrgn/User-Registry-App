import axios from "axios";
import React,{Component} from "react";
import UserConsumer from '../context';
import {Link} from 'react-router-dom';

class User extends Component{
    onDeleteCLick= async (dispatch,e)=>{
        const {id}=this.props;
        await axios.delete(`http://localhost:3000/users/${id}`);
        dispatch({type:"DELETE_USER",payload:id});
    }

    render(){
        const {id,name,email}=this.props;
        return(
            <UserConsumer>
            {
                value=>{
                    const {dispatch}=value;
                    return(
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>
                                <Link
                                    to={`/edit/${id}`}
                                    className="btn btn-success">
                                Update
                                </Link>
                            </td>
                            <td>
                                <button 
                                    onClick={this.onDeleteCLick.bind(this,dispatch)}
                                    className="btn btn-danger">
                                Delete
                                </button>
                            </td>
                        </tr>
                    );
                }
            }
            </UserConsumer>
        );
    }
}
export default User;