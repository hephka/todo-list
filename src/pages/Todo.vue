<template>
  <q-page class="q-pa-md q-ma-md">
    <q-list bordered padding>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>
        <q-item-section>
          <q-item-label> {{task.name}} </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tasks: [
        {
          id: 1,
          name: 'Arrumar quarto',
          completed: false
        },
        {
          id: 2,
          name: 'Tomar café da manhã',
          completed: false
        },
        {
          id: 3,
          name: 'Dar banho nos cachorros',
          completed: false
        }
      ]
    }
  }
}
</script>

<style>

</style>
