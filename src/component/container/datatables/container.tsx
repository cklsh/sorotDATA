import { connect } from 'react-redux';
import { deleteData, addData, updateData, sortData, searchData } from '../../../actions/data.action'

import Datatable from './table';

const mapStateToProps = (state:any) => {
    return {
        data: state.dataReducer,
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return{
        deleteData: (idx:Number) => dispatch(deleteData(idx)),
        addData: (newData:Object) => dispatch(addData(newData)),
        updateData: (data:Object) => dispatch(updateData(data)),
        sortData: (data:Object) => dispatch(sortData(data)),
        searchData: (data:Object) => dispatch(searchData(data)),
    }
}

const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Datatable)

export default TableContainer;
