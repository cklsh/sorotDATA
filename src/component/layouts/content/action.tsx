import * as React from 'react';
import { connect } from 'react-redux'

import TableContainer from '../../container/datatables/container'
import FormContainer from '../../container/form/container'
import DataEntity from '../../../api/dataEntity';
import Sidebar from '../../layouts/sidebar/index'



interface IAction extends React.Props<Action>{
    table: boolean
    form: boolean
    formTypeHover?: boolean
    data: DataEntity
}

class Action extends React.Component<IAction, any> {

    public render() {
        console.log("hti", this.props)
        return(
            <div>
                <Sidebar/>
                {this.props.table && this.props.data && <div><TableContainer {...this.props.data}/></div>}
                {this.props.form && this.props.data  &&<div><FormContainer {...this.props.data}/></div>}
            </div>
        )
    }
}


const mapStateToProps = (state:any) => {
    return {
        data: state.dataReducer[0],
    }
}

export default connect(mapStateToProps)(Action)

// type MyType = {
//     id: number;
//     name: string;
// }
