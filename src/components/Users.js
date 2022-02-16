import React,{Component} from "react";
import User from "./User";
import UserConsumer from '../context';
class Users extends Component{
    render(){
        return(
            <UserConsumer>
            {
                value => {
                    const {users}=value;
                    return(
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Update</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user=>{
                                        return <User
                                            key={user.id}
                                            id={user.id}
                                            name={user.name}
                                            email={user.email}
                                        />;
                                    })
                                }
                            </tbody>
                        </table>
                    );
                }
            }
            </UserConsumer>
        );
    }
}
export default Users;