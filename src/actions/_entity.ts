export class DataEntity {
  field: Array<String>;
  content: any;

  constructor(field:any, content:any){
    this.field = field
    this.content = content
  }
};

export type formEntity = {
  value: boolean;
  idx: number;
};
