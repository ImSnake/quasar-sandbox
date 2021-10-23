<template>
  <q-page class="bg-grey-3 column">

    <div class="row q-pl-lg q-pr-none q-py-sm" >
      <q-input class="col q-pb-none" bg-color="white" placeholder="Add task"
          bottom-slots dence filled square
          v-model="newTask"
          @keyup.enter="addTask"  >

        <template v-slot:before>
          <q-icon name="event" color="primary" />
        </template>

        <template v-slot:append>
          <q-btn icon="add" color="primary" class="add-task"
              dense flat round
              @click="addTask"  />
        </template>
      </q-input>
    </div>

    <q-list class="bg-white" bordered separator >
      <q-item clickable v-ripple
          :class="{ 'done bg-blue-1' : task.done }"
          v-for="(task, index) in tasks"
          :key="index"
          @click="task.done = !task.done"  >

        <q-item-section avatar>
          <q-checkbox v-model="task.done" class="no-pointer-events" color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>

        <q-item-section v-if="task.done" side >
          <q-btn color="primary" icon="delete"
              dense flat round
              @click.stop="deleteTask(index)" />
        </q-item-section>
      </q-item>
    </q-list>

    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon name="check" size="100px" color="primary"/>
      <div class="text-h5 text-primary text-center">No tasks</div>
    </div>

  </q-page>
</template>

<script>

export default {
  name: 'Todo',

  created() {
    this.$store.dispatch('fetchTasks')
      .catch(error => {
        this.$router.push({
          name: 'ErrorDisplay',
          params: { error: error }
        });
    });
  },

  data() {
    return {
      newTask: '',
      //tasks: []
    }
  },

  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },

  methods: {
    addTask() {
      if (this.newTask) {
        this.tasks.push({
          title: this.newTask,
          done: false
        });
        this.newTask = '';
        this.$q.notify({
          type: 'positive',
          message: 'Task added'
        });
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'No new tasks'
        });
      }
    },
    deleteTask(index) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index, 1);
        this.$q.notify({
          type: 'warning',
          message: 'Task deleted'
        });
      });
    }
  }

}
</script>

<style scoped lang="scss">
  .done {
    .q-item__label {
      text-decoration: line-through;
      color: #bbb;
    }
  }
  button.add-task {
    margin-right: 3px;
  }
</style>
