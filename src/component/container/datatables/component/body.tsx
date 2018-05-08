import * as React from 'react'

import {FieldEntity} from '../../../../actions/_entity'

import Row from './row'

interface IBody {
    entries: number
    content: Array<Object>
    column: Array<FieldEntity>;
    showForm: Object
    delete : (idx: any) => void
    setForm : (value: boolean, idx: number) => void
}

export const TBody: React.SFC<IBody> = (props:any) => {
    return (
        <tbody>
            {props.content.map((data:string,idx:number) => ( (idx<props.entries) && <Row key={idx} idx={idx} column={props.column} content={props.content} delete={props.delete} setForm={props.setForm} showForm={props.showForm}/>))}
        </tbody>
    )
}
