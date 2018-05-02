export class DataEntity {
  field: Array<String>;
  content: any;

  constructor(field:any, content:any){
    this.field = field
    this.content = content
  }
};

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
