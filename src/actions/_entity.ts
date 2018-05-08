export class DataEntity {
  field: Array<FieldEntity>;
  content: Array<Object>;

  constructor(field:any, content:any){
    this.field = field
    this.content = content
  }
};

var field1: any = {
    objectName: "Firstname",
    viewName: "Nama Depan",
    searchable: true,
    formElement: "input"
}

export class FieldEntity {
  objectName: string;
  viewName: string;
  searchable: boolean;
  formElement: string; // nanti diganti

  constructor(objectName: string, viewName: string, searchable: boolean, formElement: string){
      this.objectName = objectName
      this.viewName = viewName
      this.searchable = searchable
      this.formElement = formElement
  }
};

export type formEntity = {
  value: boolean;
  idx: number;
};
