import { connect } from 'react-redux';
import { getFormData } from '../../../actions/form.action'

import Form from './form';

const mapStateToProps = (state:any) => {
    return {
        showForm: state.formReducer
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return{
        setForm: (value: boolean, idx: number) => dispatch(getFormData(value, idx)),
    }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form)

export default FormContainer;
