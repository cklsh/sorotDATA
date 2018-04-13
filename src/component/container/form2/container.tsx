import { connect } from 'react-redux';
import { getFormData } from '../../../actions/form.action'

import Form from './form';

const mapStateToProps = (state:any) => {
    return {
        formValue: state.formReducer
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return{
        setForm: (value: boolean) => dispatch(getFormData(value)),
    }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form)

export default FormContainer;
