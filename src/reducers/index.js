import {combineReducers} from 'redux';

const newComments = (state = 0, action) => {
  return state
}

const newTasks = (state = 0, action) => {
  return state
}

const newOrders = (state = 0, action) => {
  return state
}

const tickets = (state = 0, action) => {
  return state
}

const tasks = (state = [], action) => {
  return state
}

const messages = (state = [], action) => {
  return state
}

const orders = (state = [], action) => {
  return state
}

const rootReducer = combineReducers({
  newComments,newTasks,newOrders,tickets,tasks,messages,
  orders
})

export default rootReducer;