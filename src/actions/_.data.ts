import {DataEntity, FieldEntity, formEntity} from '../actions/_entity';

const field1: FieldEntity = {
    objectName: "Firstname",
    viewName: "Nama Depan",
    searchable: true,
    formElement: "input"
}

const field2: FieldEntity = {
    objectName: "Lastname",
    viewName: "Nama Belakang",
    searchable: false,
    formElement: "input"
}

const field3: FieldEntity = {
    objectName: "Age",
    viewName: "Umur",
    searchable: true,
    formElement: "input"
}

const field4: FieldEntity = {
    objectName: "Gender",
    viewName: "Jenis Kelamin",
    searchable: true,
    formElement: "radio"
}

export const field: Array<FieldEntity> = [field1, field2, field3, field4]

export const content:Array<Object> = [
    {"Firstname": "John", "Lastname": "Doe", "Email": "john@example.com", "Age": "20", "Gender": "Pria"},
    {"Firstname": "Mary",  "Lastname": "Moe", "Email": "mary@example.com", "Age": "32", "Gender": "Wanita"},
    {"Firstname": "July",  "Lastname": "Wooley", "Email": "july@example.com", "Age": "23", "Gender": "Wanita"}
];
