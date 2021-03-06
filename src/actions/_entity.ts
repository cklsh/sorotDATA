export class DataEntity {
  field: Array<FieldEntity>;
  content: Array<Object>;

  constructor(field:any, content:any){
    this.field = field
    this.content = content
  }
};

export class FieldEntity {
  objectName: string;
  viewName: string;
  searchable: boolean;
  formElement: any;

  constructor(objectName: string, viewName: string, searchable: boolean, formElement: any){
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

export type formElement = {
    type: string;
}
