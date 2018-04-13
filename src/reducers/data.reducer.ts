import {DataEntity} from '../actions/_entity';

export default (state: Object = {}, action: any) => {
  switch (action.type){
    case 'DATA_ASSIGN':
      return [action.data];
    default:
      return state;
  }
}
