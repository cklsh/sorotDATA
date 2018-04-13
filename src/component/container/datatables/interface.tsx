export interface ITable {
    deleteData : (idx: Number) => void;
    addData? : (data: Object) => void;
    updateData? : (data: Object) => void;
    sortData : (data: any) => void;
    searchData : (data: any) => void;
    setForm: (value: boolean, idx: number) => void
    showForm: Object
    content: Array<Object>
    field: Array<String>
}
