import * as React from 'react'

import THead from './component/head'
import {TBody} from './component/body'

import {ITable} from './interface'

var _ = require('lodash/core')

type StateTable = { entries: number };

class Datatable extends React.Component<ITable, StateTable> {

    constructor(props: any){
        super(props);
        this.state={
            entries: 10
        }
        this.changeEntries = this.changeEntries.bind(this)
    }

    changeEntries(e:any){
        this.setState({entries: e.target.value})
    }
    render () {
        return (
            <div className="col-md-12 overflow-table">
                <div className="col-md-8">
                <form className="form-inline entries">
                      <select className="custom-select my-1 mr-sm-2" onClick={this.changeEntries}>
                        <option value="10">Show 10 entries</option>
                        <option value="50">Show 50 entries</option>
                        <option value="100">Show 100 entries</option>
                      </select>
                </form>
                    <table className="table table-striped table-hover table-bordered">
                        <tr>
                            {this.props.field.map((data:string, idx:number) => (<td key={idx}><input className="form-control" defaultValue=""/></td>))}
                            <td colSpan={2}><button className="btn btn-info addBtn ">insert data</button></td>
                        </tr>
                        <THead column={this.props.field} sort={this.props.sortData} search={this.props.searchData} content={this.props.content}/>
                        <TBody entries={this.state.entries} content={this.props.content} delete={this.props.deleteData} setForm={this.props.setForm} showForm={this.props.showForm}/>
                    </table>
                </div>
                <div className="col-md-4"/>
            </div>

        )
    }
}

export default Datatable
