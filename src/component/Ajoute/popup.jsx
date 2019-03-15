import React, { Component } from 'react'
import Modal from './modal'

class List extends Component {
    constructor(props){
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
        requiredItem:0,
        brochure:[
          {  title:'',
             msg:'',
        }      
        ]
    }
    }

replaceModalItem(index) {
    this.setState({  
        requiredItem:index
    })
};
saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure(requiredItem) = item;
    this.setState({brochure,tempbrochure});
}

render(){
    const brochure = this.state.brochure.map((item,index)=>{
        return(

            <tr key={index}>
            <td>{item.title}</td>
            <td>{""}-{""}</td>
            <td>{item.msg}</td>
            <td>
            <button className="btn btn-primairy" data-toggle="modal" data-target="#empemleModam"
                onClick={()=> this.replaceModalItem(index)}>Edit</button> {""}

            </td>
            </tr>
                
        )
    });


    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return(
        <div>
            <table>
                <tbody>
                    {brochure}
                </tbody>
            </table>
            <div style= {{texteAlign: "center"}}>
            <Modal 
            username={modalData.username}
            saveModalDetails={this.saveModalsDetails}/> 
            </div>
        </div>
    )
}
}

export default List;