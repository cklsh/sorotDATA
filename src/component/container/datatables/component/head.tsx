import * as React from 'react'

import FaSort = require('react-icons/lib/fa/sort')

interface IHead {
    column: Array<String>;
    content: any
    sort: (idx: number, asc:boolean) => void;
    search: (data: any, content: any) => void;
}

type StateHead = { value: any, asc: boolean };

class THead extends React.Component<IHead, StateHead> {

    constructor(props: any){
        super(props);
        this.state = {
          value: "search",
          asc: false
        };
        this.handleSort = this.handleSort.bind(this)
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSort(e:any){
        this.props.sort(e.target.value, this.state.asc)
        if(!this.state.asc){
            this.setState({
                asc: true
            })
        }
    }

    handleSearch(e:any){
        this.setState({value: e.target.value});
        this.props.search(e.target.value, this.props.content)
    }

    render () {
        return (
            <thead>
                <tr>
                    {this.props.column.map((name:string, idx:number) => (<th key={idx} className="thead"><button className="sortBtn btn" onClick={this.handleSort} value={idx} ><p>{name} <FaSort/></p></button></th>))}
                    <th colSpan={2}><input defaultValue="search" className="form-control" onChange={this.handleSearch} value={this.state.value}/></th>
                </tr>
            </thead>

        )
    }
}

export default THead
