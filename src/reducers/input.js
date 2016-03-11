import { USER_INPUT } from '../constants/ActionTypes';

export default function handleInput(state, action) {
  console.log('REDUCERS:::: action.type: ', action.type, 'state: ', state)
  return state
}
