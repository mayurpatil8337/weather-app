import _ from 'lodash'
const initialState = {
  data:[],
  loading:false
}
const rootReducer = (state = initialState, action) => {
  const data = _.get(action,'body')
  switch (action.type) {
    case 'WHETHER_FETCH_INIT':
        return {
          ...state,
          loading:true
        } 
      case 'WHETHER_FETCH_FAILED':
        return {
          ...state,
            data:data || [],
            loading:false

        }
        case 'WHETHER_FETCH_SUCCEEDED':
            return {
              ...state,
              data,
              loading:false
            }
      
      default:
        return state
    }
  }
  export default rootReducer
