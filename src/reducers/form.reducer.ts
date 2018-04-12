export default (state: boolean = false, action: any) => {
  switch (action.type){
    case 'FORM_ASSIGN':
      return action.value;
    default:
      return state;
  }
}
