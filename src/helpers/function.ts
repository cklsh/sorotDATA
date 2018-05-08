//content: data dari API
export function getFieldName(content: any){

    var rowName=  Object.keys(content[0])
    var field = rowName
    for (let i = 0; i < field.length; i++) {
        field[i] = rowName[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").toUpperCase()
    }
    return field
