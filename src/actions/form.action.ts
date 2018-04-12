export function getFormData(value: boolean) {
    return (dispatch:any) => {
        dispatch(getFormDataFulfilledAction(value))
    }
}

function getFormDataFulfilledAction(value: boolean){
    return {
        type: 'FORM_ASSIGN', value
    }
}
