import Vue from 'vue'

export function updateTask (state, payload) {
  // console.log('payload from mutations: ', payload)
  Object.assign(state.tasks[payload.id], payload.updates)
}

export function deleteTask (state, id) {
  // console.log('Delete id: ', id)
  // delete state.tasks[id]
  Vue.delete(state.tasks, id)
}
