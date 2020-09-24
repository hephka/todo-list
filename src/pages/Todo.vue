<template>
  <q-page class="q-pa-md q-ma-md">
    <q-list separator bordered>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>
        <q-item-section>
          <q-item-label
            :class=" { 'text-strikethrough' : task.completed } "
          >
            {{task.name}}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="20px" class="q-mr-xs" />
            </div>
            <div class="column">
              <q-item-label caption class="row justify-end">
                {{task.dueDate}}
              </q-item-label>
              <q-item-label caption class="row justify-end">
                <small>{{task.dueTime}}</small>
              </q-item-label>
            </div>
          </div>
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
          completed: false,
          dueDate: '2020/09/24',
          dueTime: '18:30'
        },
        {
          id: 2,
          name: 'Tomar café da manhã',
          completed: false,
          dueDate: '2020/09/25',
          dueTime: '10:30'
        },
        {
          id: 3,
          name: 'Dar banho nos cachorros',
          completed: false,
          dueDate: '2020/09/26',
          dueTime: '19:00'
        }
      ]
    }
  }
}
</script>

<style>

</style>
