import * as React from 'react'
import {IForm} from './interface'

var _ = require('lodash/core')

class Form extends React.Component<IForm, any> {

    constructor(props: any){
        super(props);
    }

    formComponent(content:any, idx:number){
        return(
            <div key={idx}>
                {this.props.field.map((name:string, idx2:number) => (<p key={idx2}><label>{name}</label>: {<input type="text" className="form-control" defaultValue={_.toArray(content)[idx2]}/>}</p>))}
            </div>
        )
    }

    render() {

        return (
            <div className="form-group col-md-12">
                <div className="col-md-6">
                    {_.toArray(this.props.content).map((content:any, idx:number) => (this.formComponent(content, idx)))}
                </div>
                <div className="col-md-6"/>
            </div>

        )
    }
}

export default Form
