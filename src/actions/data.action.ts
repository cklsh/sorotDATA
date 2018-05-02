import axios from 'axios'

import {DataEntity, formEntity} from './_entity';
import api from '../helpers/api'
import {content} from '../helpers/sorot'
import {getFieldName} from '../helpers/function'

// var content:any = [
//     {"Firstname": "John", "Lastname": "Doe", "Email": "john@example.com"},
//     {"Firstname": "Mary",  "Lastname": "Moe", "Email": "mary@example.com"},
//     {"Firstname": "July",  "Lastname": "Wooley", "Email": "july@example.com"}
// ];

var _ = require('lodash')
const BASE_URL = "http://localhost:9090/"

let field = getFieldName(content), data: DataEntity

export function getData() {

    data = new DataEntity(field, content)
    return (dispatch:any) => {
        dispatch(getDataFulfilledAction(data))
     }

}

export function deleteData(idx: Number, newContent: Object) {
    data = new DataEntity(field, newContent)
    data.content.splice(idx, 1)
    return (dispatch:any) => {
        dispatch(getDataFulfilledAction(data))
    }
}

export function addData(newData: Object) {
    data = new DataEntity(field, content)
    return (dispatch:any) => {
        dispatch(getDataFulfilledAction(data))
    }
}

export function updateData(newData: Object) {
    data = new DataEntity(field, content)
    return (dispatch:any) => {
        dispatch(getDataFulfilledAction(data))
    }
}

export function sortData(idx: any, asc: boolean) {
    let rowName=  Object.keys(content[0]), newContent;
    (asc)? newContent = _.orderBy(content, [rowName[idx]], 'asc'): newContent = _.orderBy(content, [rowName[idx]], 'desc');
    data = new DataEntity(field, newContent);
    return (dispatch:any) => {
        dispatch(getDataFulfilledAction(data))
    }
}

export function searchData(value: any, content1: any) {
    let newContent: any = [];
    if(value === ""){
        return (dispatch:any) => {
            data = new DataEntity(field, content)
            dispatch(getDataFulfilledAction(data))
        }
    }
    _.find(content1, (data1:any) => {
         _.toArray(data1).map((data2:any, idx:any) => {
             if(_.isString(data2) === true){
                 if(data2.toLowerCase().substring(0, value.length) === value.toLowerCase().substring(0, value.length)){
                     newContent.push(data1)
                 }
            }
        })
    });
    return (dispatch:any) => {
        data = new DataEntity(field, _.uniq(newContent))
        dispatch(getDataFulfilledAction(data))
    }
}

function getDataFulfilledAction(data: Object) {
    return {
        type: 'DATA_ASSIGN', data
    }
}
