import {formEntity} from '../actions/_entity';

export default (state: Object = {value:false, idx: 0}, action: any) => {
  switch (action.type){
    case 'FORM_ASSIGN':
      return action.data;
    default:
      return state;
  }
}
