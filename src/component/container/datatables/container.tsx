import { connect } from 'react-redux';
import { deleteData, addData, updateData, sortData, searchData } from '../../../actions/data.action'
import { getFormData } from '../../../actions/form.action'


import Datatable from './table';

const mapStateToProps = (state:any) => {
    return {
        data: state.dataReducer,
        formValue: state.formReducer
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return{
        deleteData: (idx:Number, content: any) => dispatch(deleteData(idx, content)),
        addData: (newData:Object) => dispatch(addData(newData)),
        updateData: (data:Object) => dispatch(updateData(data)),
        sortData: (idx: number, asc: boolean) => dispatch(sortData(idx, asc)),
        searchData: (data:Object, content: any) => dispatch(searchData(data, content)),
        setForm: (value: boolean) => dispatch(getFormData(value)),

    }
}

const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Datatable)

export default TableContainer;
