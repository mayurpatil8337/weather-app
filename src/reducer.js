import _ from 'lodash'
const rootReducer = (state = {}, action) => {
  const data = _.get(action,'body')
  switch (action.type) {
      case 'WHETHER_FETCH_FAILED':
        return {
            data:data || []
        }
        case 'WHETHER_FETCH_SUCCEEDED':
            return {
              data
            }
      
      default:
        return state
    }
  }
  export default rootReducer
