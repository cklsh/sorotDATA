import {formEntity}from '../../../actions/_entity';

export interface IForm {
    setForm: (value: boolean, idx: number) => void
    showForm: formEntity
    content: Array<Object>
    field: Array<String>
}
