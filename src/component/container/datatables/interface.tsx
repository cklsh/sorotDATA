import {FieldEntity} from '../../../actions/_entity'

export interface ITable {
    deleteData : (idx: number) => void;
    addData? : (data: Object) => void;
    updateData? : (data: Object) => void;
    sortData : (data: any) => void;
    searchData : (data: any) => void;
    setForm: (value: boolean, idx: number) => void
    showForm: Object
    content: Array<Object>
    field: Array<FieldEntity>
}
