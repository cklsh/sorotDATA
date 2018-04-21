import {formEntity} from './_entity';

export function getFormData(value: boolean, idx: number) {
    return (dispatch:any) => {
        dispatch(getFormDataFulfilledAction({value, idx}))
    }
}

function getFormDataFulfilledAction(data: formEntity){
    return {
        type: 'FORM_ASSIGN', data
    }
}
