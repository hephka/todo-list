export function updateTask ({ commit }, payload) {
  console.log('payload: ', payload) // necessário para repassar pro mutations
  commit('updateTask', payload)
}
