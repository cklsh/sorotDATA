import * as React from 'react'

import Row from './component/row'
import THead from './component/head'
import {ITable} from './interface'

var _ = require('lodash/core')

interface IBody {
    content: Array<Object>
    delete : (idx: any) => void
}

const TBody: React.SFC<IBody> = (props:any) => {
    return (
        <tbody>
            {props.content.map((data:string,idx:number) => ( (idx< 10) && <Row key={idx} idx={idx} content={props.content} delete={props.delete}/>))}
        </tbody>
    )
}

class Datatable extends React.Component<ITable, {}> {

    constructor(props: any){
        super(props);
    }

    render () {
        return (
            <div className="col-md-12">
                <div className="col-md-8">
                    <table className="table table-striped table-hover table-bordered">
                        <tr>
                            {this.props.field.map((data:string, idx:number) => (<td key={idx}><input className="form-control" defaultValue=""/></td>))}
                            <td colSpan={2}><button className="btn btn-info addBtn ">insert data</button></td>
                        </tr>
                        <THead column={this.props.field} sort={this.props.sortData} search={this.props.searchData}/>
                        <TBody content={this.props.content} delete={this.props.deleteData}/>
                    </table>
                </div>
                <div className="col-md-4"/>
            </div>

        )
    }
}

export default Datatable
