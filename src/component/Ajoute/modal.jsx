import React, { Component } from 'react'

class Modal extends Component {
  constructor(props){
    super(props);
    this.handleSave = this.handeleSave.bind(this);
    this.state = {
     title:'',
     msg:'',
    }
  }

componentWillReceiveProps(nextProps){
  this.setState({
    title: nextProps.title,
    msg: nextProps.msg,
  });
}

titleHandler(e) {
  this.setState({title: e.target.value});
}

msgHandler(e) {
  this.setState({msg: e.target.value});
}

handleSave() {
    const item = this.state;
    this.props.SaveModalDetails(item)
}

render() {
  return(
    <div className="modal fade" id="exempleModal" tabIndex="-1" role="dialog" arial-labelledby="exempleModalLabel" aria-hedden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="Close" data-dismiss="modal" aria-label="Close">
              <span aria-hedden="true"></span>
            </button>            
          </div>
          <div>
            <p><span className="modal-lable">Title:</span><input value={this.state.title} onchange={(e)=>this.titleHandler(e)}/></p>
            <p><span className="modal-lable">msg:</span><input value={this.state.title} onchange={(e)=>this.msgHandler(e)}/></p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal">Annuler</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{this.handleSave() }}>Ok</button>
          </div>
        </div>
      </div>
    </div>
  )
}
};

export default Modal;