<template>
    <q-item
        @click="updateTask({ id: id, updates: { completed: !task.completed } })"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        clickable
        v-ripple
    >
        <q-item-section side top>
            <q-checkbox v-model="task.completed" class="no-pointer-events" />
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

        <q-item-section side>
            <div class="q-pa-md q-gutter-sm">
                <q-btn
                    @click.stop="promptToDelete"
                    flat
                    round
                    dense
                    color="red"
                    icon="delete"
                />
            </div>
        </q-item-section>
    </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'id'],
  data () {
    return {
      confirm: false
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete () {
      this.$q.dialog({
        title: 'Confirmar',
        message: 'Quer realmente deletar essa task?',
        ok: {
          push: true,
          color: 'negative',
          label: 'Deletar'
        },
        cancel: {
          push: true,
          flat: true,
          color: 'negative',
          label: 'Cancela'
        }
      }).onOk(() => {
        this.deleteTask(this.id)
      })
    }
  }
}
</script>
