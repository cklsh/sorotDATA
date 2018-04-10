import * as React from 'react'
import GoBook = require('react-icons/lib/go/book');
import TiChartArea = require('react-icons/lib/ti/chart-area');
import GoChevronDown = require('react-icons/lib/go/chevron-down');

class Sidebar extends React.Component<any, any> {

    constructor(props: any){
        super(props);
        this.state = {
            child1: false
        }
        this.showChild = this.showChild.bind(this)
    }

    showChild(e:any){
        e.preventDefault()
        this.setState({child1: !this.state.child1})
    }

    render () {
        return (
            <aside className="sidebar" id="sidebar">
                <div className="header-item">DATA</div>
                <div className="sidebar-item"  onClick={this.showChild}><GoBook className="icon"/> sidebar item 1 <GoChevronDown className="caret"/>
                </div>
                {this.state.child1 && <div className="child">item child</div>}
                <div className="sidebar-item"><TiChartArea className="icon"/> sidebar item 2 <GoChevronDown className="caret"/></div>
                <div className="sidebar-item"><TiChartArea className="icon"/> sidebar item 3 <GoChevronDown className="caret"/></div>
                <div className="sidebar-item">sidebar item 4</div>
                <div className="sidebar-item">sidebar item 5</div>

                <div className="header-item">DATA2</div>
                <div className="sidebar-item">sidebar item 1</div>
                <div className="sidebar-item">sidebar item 2</div>
                <div className="sidebar-item">sidebar item 3</div>
                <div className="sidebar-item">sidebar item 4</div>
                <div className="sidebar-item">sidebar item 5</div>

            </aside>
        )
    }
}

export default Sidebar
