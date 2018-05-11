import {DataEntity, FieldEntity, formEntity} from '../actions/_entity';
//import FormElement from '../component/container/model/container'
//import TextField from '../component/container/model/textField'


const field1: FieldEntity = {
    objectName: "Firstname",
    viewName: "Nama Depan",
    searchable: true,
    formElement: "radio"
}

const field2: FieldEntity = {
    objectName: "Lastname",
    viewName: "Nama Belakang",
    searchable: false,
    formElement: {
        type: "string",
        element: "textInput",
        style: "primary"
    }
}

const field3: FieldEntity = {
    objectName: "Age",
    viewName: "Umur",
    searchable: true,
    formElement: {
        type: "number",
        element: "textInput",
        style: "primary"
    }
}

const field4: FieldEntity = {
    objectName: "Gender",
    viewName: "Jenis Kelamin",
    searchable: true,
    formElement: {
        type: "string",
        element: "radioButton",
        style: "primary"
    }
}

export const field: Array<FieldEntity> = [field1]

export const content:Array<Object> = [
    {"Firstname": "John", "Lastname": "Doe", "Email": "john@example.com", "Age": "20", "Gender": "Pria"},
    {"Firstname": "Mary",  "Lastname": "Moe", "Email": "mary@example.com", "Age": "32", "Gender": "Wanita"},
    {"Firstname": "July",  "Lastname": "Wooley", "Email": "july@example.com", "Age": "23", "Gender": "Wanita"}
];
