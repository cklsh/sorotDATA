import * as React from 'react'

import {formEntity}from '../../../../actions/_entity';
import {FieldEntity} from '../../../../actions/_entity'


var _ = require('lodash/core')

interface IRow {
    idx: number
    column: Array<FieldEntity>
    content: Array<Object>
    showForm: formEntity
    setForm: (value: boolean, idx: number) => void
    delete: (idx: Number, content: any) => void
}

interface IField {
    value: string
    idx: number
}

const Field: React.SFC<IField> = (props:any) => {
    return (
        <td key={props.idx2}><input className="form-control" value={props.value}/></td>
    )
}

class Row extends React.Component<IRow, {}> {

    constructor(props: any){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
        this.showDetail = this.showDetail.bind(this)
        this.printField = this.printField.bind(this)
    }

    handleDelete(e:any){
        let idx: Number = e.target.value;
        this.props.delete(idx, this.props.content);
    }

    showDetail(){
        (!this.props.showForm.value)? this.props.setForm(true, this.props.idx): this.props.setForm(false, this.props.idx)
    }

    printField(idx2: number, value: string){
        for(let i = 0; i < this.props.column.length; i++){
            if(this.props.column[i].objectName == Object.keys(this.props.content[this.props.idx])[idx2]){
                    return(<Field key={idx2} value={value} idx={idx2}/>)
            }
        }
        return(<div/>)

    }

    render () {
        console.log("tgif", this.props)
        return (
            <tr key={this.props.idx} className="absolute">
                {_.toArray(this.props.content[this.props.idx]).map((value:string, idx2:number) => (this.printField(idx2, value)))}
                <td><button className="btn btn-info" onClick={this.showDetail} data-toggle="modal">details</button></td>
                <td><button className="btn btn-danger" onClick={this.handleDelete} value={this.props.idx}>delete</button></td>
            </tr>
        )
    }
}

export default Row
