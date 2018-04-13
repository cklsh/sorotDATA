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

        //console.log("sadas", this.props)
    }

    render() {
        return(
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={this.close}>&times;</span>
                <div className="form-group col-md-12">
                    <div className="col-md-6">
                        {this.formComponent(this.props.content[this.props.showForm.idx], this.props.showForm.idx)}
                    </div>
                    <div className="col-md-6"/>
                </div>
              </div>

            </div>
        )
    }
}

export default Form
