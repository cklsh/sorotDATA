import * as React from 'react'

import {IForm} from './interface'

var _ = require('lodash/core')

class Form extends React.Component<IForm, any> {
    constructor(props:any){
        super(props);
        this.close = this.close.bind(this)
    }

    formComponent(content:any, idx:number){
        return(
            <div key={idx}>
                {this.props.field.map((name:string, idx2:number) => (<p key={idx2}><label>{name}</label>: {<input type="text" className="form-control" defaultValue={_.toArray(content)[idx2]}/>}</p>))}
            </div>
        )
    }


    close(){
        this.props.setForm(false, 0)
    }

    render() {
        return(
            <div className="modal bd-example-modal-lg">
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Detail Data</h5>
                    <button type="button" className="close" onClick={this.close}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {this.formComponent(this.props.content[this.props.showForm.idx], this.props.showForm.idx)}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Form
