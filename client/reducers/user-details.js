import {
  LOG_OFF,
  REQUEST_USER_DETAILS,
  RECEIVE_USER_DETAILS
} from '../actions/auth'

const userDetails = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_DETAILS:
      return action.details

    case REQUEST_USER_DETAILS:
      return {}

    case LOG_OFF:
      return {}

    default:
      return state
  }
}

export default userDetails
