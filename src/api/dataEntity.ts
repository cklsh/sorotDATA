export default class DataEntity {
  field: Array<String>;
  content: any;

  constructor(field:any, content:any){
    this.field = field
    this.content = content
  }
};
