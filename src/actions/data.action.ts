import axios from 'axios'

import DataEntity from '../api/dataEntity';
import api from '../helpers/api'
import {sorotData} from '../helpers/sorot'

console.log(sorotData)
var _ = require('lodash')
const BASE_URL = "http://localhost:9090/"

var field:any =  [
    "Channel",
    "Deskripsi Laporan",
    "Foto Komentar",
    "Foto Laporan",
    "Foto User",
    "ID Laporan",
    "Judul",
    "Kategori",
    "Komentar",
    "Lama Penyelesaian",
    "Latitude",
    "Longitude",
    "Media",
    "Nama User",
    "Status",
    "Tanggal",
    "Video Laporan"
];

//buat test
var field2:any =  ["Firstname", "Lastname", "Email"];

var content:any = [
    {"Firstname": "John", "Lastname": "Doe", "Email": "john@example.com"},
    {"Firstname": "Mary",  "Lastname": "Moe", "Email": "mary@example.com"},
    {"Firstname": "July",  "Lastname": "Wooley", "Email": "july@example.com"}
];

var data2 = new DataEntity(field2, content)
//

//var caca = api("getAll", "test")


export function getData() {

    let data: Object
    //var request = axios.get(`${BASE_URL}getAll`)
    return (dispatch:any) => {
       // return request.then(
       //   response => {
       //       var content= response.data
       //       data = new DataEntity(field, sorotData)
       //       dispatch(getDataFulfilledAction(data))
       //   },
       //   err => dispatch(getDataFulfilledAction(data))
       // );
        data = new DataEntity(field, sorotData)
        dispatch(getDataFulfilledAction(data))
     }

}

export function deleteData(idx: Number) {
    let data = new DataEntity(field, content)
    data.content.splice(idx, 1)
    return (dispatch:any) => {
        dispatch(getDataFulfilledAction(data))
    }
}

export function addData(newData: Object) {
    let data = new DataEntity(field, content)
    return (dispatch:any) => {
        dispatch(getDataFulfilledAction(data))
    }
}

export function updateData(newData: Object) {
    let data = new DataEntity(field, content)
    return (dispatch:any) => {
        dispatch(getDataFulfilledAction(data))
    }
}

export function sortData(fieldName: any) {
    let newContent = _.sortBy(content, [fieldName]);
    let data = new DataEntity(field, newContent)


    return (dispatch:any) => {
        dispatch(getDataFulfilledAction(data))
    }
}

export function searchData(value: any) {
    let newContent = content.map((data:any, idx:number) => {
        _.findLast(data, value);
    })
    let data = new DataEntity(field, newContent)
    return (dispatch:any) => {
        dispatch(getDataFulfilledAction(data))
    }
}

function getDataFulfilledAction(data: Object) {
    return {
        type: 'DATA_ASSIGN', data
    }
}
