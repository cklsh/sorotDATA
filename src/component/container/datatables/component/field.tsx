import * as React from 'react'

import FormElement from '../../formElement/elements'

interface IField {
    idx: number
    value: string
    formElement: any
}

const Field: React.SFC<IField> = (props:any) => {

    return (
        <td key={props.idx2}><FormElement value={props.value} formElement={props.formElement} /></td>
    )
}

export default Field


//<td key={props.idx2}><input className="form-control" value={props.value}/></td>
