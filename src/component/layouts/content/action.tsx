import * as React from 'react';
import { connect } from 'react-redux'

import TableContainer from '../../container/datatables/container'
import FormContainer from '../../container/form2/container'
import DataEntity from '../../../api/dataEntity';
import Sidebar from '../../layouts/sidebar/index'

interface IAction{
    table: boolean
    form: boolean
    data: DataEntity
}

class Action extends React.Component<IAction, any> {

    public render() {
        console.log("aa", this.props)
        return(
            <div>
                <Sidebar/>
                {this.props.table && this.props.data && <div className="wrapper"><TableContainer {...this.props.data}/></div>}
                {this.props.form && this.props.data && <div className="wrapper">cacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>}
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        data: state.dataReducer[0],
        form: state.formReducer
    }
}

export default connect(mapStateToProps)(Action)

//{this.props.form && this.props.data  &&<div><FormContainer {...this.props.data}/></div>}

// type MyType = {
//     id: number;
//     name: string;
// }
