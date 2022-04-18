<template>
  <q-page class="bg-grey-3 column">

    <div class="row q-pl-md q-pr-none q-py-sm" >
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
      <q-item class="q-pl-sm" clickable v-ripple
          :class="{ 'done' : task.done }"
          v-for="task in tasks"
          :key="task.id"  >

        <q-item-section avatar @click.stop="updateTask(task)" >
          <q-checkbox v-model="task.done" class="no-pointer-events" color="primary" />
        </q-item-section>

        <q-item-section @click.stop="editTask(task.id)">
          <q-item-label class="row no-wrap justify-between items-center" contenteditable="true">
            <div>{{ task.title }}</div>
            <q-btn color="primary" icon="done" dense flat round />
          </q-item-label>
        </q-item-section>

        <q-item-section v-if="task.done" side >
          <q-btn color="primary" icon="delete"
              dense flat round
              @click.stop="deleteTask(task.id)" />
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
    console.log('todo craeted');
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
      newTask: ''
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
        const maxId = this.$store.state.tasks.reduce((acc, item) => item = acc > item.id ? acc : item.id, 0);
        const task = {
          id: maxId + 1,
          title: this.newTask.trim(),
          done: false
        }
        this.$store.dispatch('createTask', task)
          .then(()=> {
            this.$q.notify({
              type: 'positive',
              message: 'Task added'
            });
            console.log(task);
            this.newTask = '';
          })
          .catch( error => {
            this.$router.push({
              name: 'ErrorDisplay',
              params: { error: error }
            })
          });
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'No new tasks'
        });
      }
    },

    deleteTask(id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$store.dispatch('deleteTask', id)
        .then(()=> {
          this.$q.notify({
            type: 'warning',
            message: 'Task deleted'
          });
        })
        .catch( error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          })
        });
      });
    },

    editTask(taskId){
      console.log('edit task');
      console.log(taskId);
    },

    updateTask(task) {
      console.log('update task');
      task.done = !task.done;
      this.$store.dispatch('updateTask', task)
        .catch( error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          })
        });
    }

  }

}
</script>

<style scoped lang="scss">
  .done {
    background: #ddd;
    .q-item__label {
      text-decoration: line-through;
      color: #bbb;
    }
  }
  button.add-task {
    margin-right: 3px;
  }
</style>
