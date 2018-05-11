import * as React from 'react'

import Field from './field'
import {formEntity} from '../../../../actions/_entity'
import {FieldEntity} from '../../../../actions/_entity'

var _ = require('lodash/core')

interface IRow {
    idx: number
    column: Array<FieldEntity>
    content: Array<Object>
    showForm: formEntity
    setForm: (value: boolean, idx: number) => void
    delete: (idx: number, content: any) => void
}

class Row extends React.Component<IRow, {}> {

    constructor(props: any){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
        this.showDetail = this.showDetail.bind(this)
        this.printField = this.printField.bind(this)
    }

    handleDelete(e:any){
        let idx: number = e.target.value;
        this.props.delete(idx, this.props.content);
    }

    showDetail(){
        (!this.props.showForm.value)? this.props.setForm(true, this.props.idx): this.props.setForm(false, this.props.idx)
    }

    printField(idx2: number, value: string){
        let props= this.props.column
        for(let i = 0; i < props.length; i++){
            if(props[i].objectName == Object.keys(this.props.content[this.props.idx])[idx2]){
                    return(<Field key={idx2} value={value} idx={idx2} formElement={props[i].formElement}/>)
            }
        }
        return(null)
    }

    render () {
        //console.log("sdadasd", this.props.column[0].formElement)
        return (
            <tr key={this.props.idx} className="absolute">
                {_.toArray(this.props.content[this.props.idx]).map((value:string, idx2:number) => (this.printField(idx2, value)))}
                <td><button className="btn btn-primary" onClick={this.showDetail} value={this.props.idx}>details</button></td>
                <td><button className="btn btn-danger" onClick={this.handleDelete} value={this.props.idx}>delete</button></td>
            </tr>
        )
    }
}

export default Row
