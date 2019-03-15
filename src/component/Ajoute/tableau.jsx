import { confirmAlert } from 'react-confirm-alert'; // Import
import React, { Component } from 'react'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class confirm extends Component {

      render(){
            return (
                <center>
                    <table class="table table-bordered">
                    <thead>
                        <tr className="tab">
                            <th>Id</th>
                            <th>Produits</th>
                            <th>Prix</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.length >= 0 ? (
                        this.props.users.map(user => (
                                <tr key={user.id}>
                                    <td className="cent">{user.id}</td>
                                    <td id="tex">{user.name}</td>
                                    <td id="plus"><div className="flot">{parseInt(user.username)}</div></td>
                                    <td className="cent">
                                    <button onClick={()=>{this.props.editRow(user)}} className="btn btn-success">Edit</button>
                                        <button className="btn btn-danger" onClick={
                                            () => {confirmAlert({
                                            title: 'Suppression Produit',
                                            message: user.name.substring(0,1).toUpperCase()+user.name.substring(1).toLowerCase(),
                                            buttons: [
                                              {
                                                label: 'Oui',
                                                onClick: () => this.props.deleteUser(user.id)
                                              },
                                              {
                                                label: 'Non',
                                              }
                                            ],
                                          })}
                                        }>X</button>
                                        
                                      
                                    </td>
                                </tr>
                            ))
                        )
                         : (
                            <tr>
                                <td colSpan={3}></td>
                            </tr>
                            
                        )}
                        
                    </tbody>
                </table>
                  

	</center>
            );
      }
}
	

export default confirm;