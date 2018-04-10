import * as React from 'react'

import FaSort = require('react-icons/lib/fa/sort')

interface IHead {
    column: Array<String>;
    sort: (fieldName: any) => void;
    search: (data: any) => void;
}

type StateHead = { value: any };

class THead extends React.Component<IHead, StateHead> {

    constructor(props: any){
        super(props);
        this.state = {
          value: "search"
        };
        this.handleSort = this.handleSort.bind(this)
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSort(e:any){
        this.props.sort(e.target.value)
    }

    handleSearch(e:any){
        this.setState({value: e.target.value});
        console.log("this", this.state.value)
    }

    render () {
        return (
            <thead>
                <tr>
                    {this.props.column.map((name:string, idx:number) => (<td key={idx}><button className="sortBtn btn" onClick={this.handleSort} value={name}> {name} <FaSort className="float-right icon"/></button></td>))}
                    <td colSpan={2}><input defaultValue="search" className="form-control" onChange={this.handleSearch} value={this.state.value}/></td>
                </tr>
            </thead>

        )
    }
}

export default THead
