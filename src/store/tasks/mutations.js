export function updateTask (state, payload) {
  // console.log('payload from mutations: ', payload)
  Object.assign(state.tasks[payload.id], payload.updates)
}
