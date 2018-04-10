import * as React from 'react'

var _ = require('lodash/core')

interface IRow {
    idx: number
    content: any
    delete: (idx: Number) => void
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
    }

    handleDelete(e:any){
        let idx: Number = e.target.value;
        this.props.delete(idx);
    }

    render () {
        return (
            <tr key={this.props.idx}>
                {Object.keys(this.props.content[this.props.idx]).map((value:string, idx2:number) => (<Field key={idx2} value={_.toArray(this.props.content[this.props.idx])[idx2]} idx={idx2}/>))}
                <td><button className="btn btn-info">details</button></td>
                <td><button className="btn btn-danger" onClick={this.handleDelete} value={this.props.idx}>delete</button></td>
            </tr>
        )
    }
}

export default Row