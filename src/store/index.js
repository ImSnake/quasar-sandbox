import { createStore } from 'vuex';
import EventService from "@/services/EventService";

export default createStore({
  state: {
    userName: 'Pulikova Yuliya',
    userContact: '@puly',
    tasks: [],
    //task: {}
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    DELETE_TASK(state, id) {
      state.tasks = state.tasks.filter(value => value.id !== id);
    },
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    UPDATE_TASK(state, task) {
      state.tasks.find(value => value.id === task.id).done = task.done;
    }
  },
  actions: {
    createTask({ commit }, task) {
      return EventService.postTask(task)
        .then(() => {
          commit('ADD_TASK', task);
        })
        .catch(error => {
          throw(error);
        });
    },
    deleteTask({ commit }, id) {
      return EventService.deleteTask(id)
        .then(() => {
          commit('DELETE_TASK', id);
        })
        .catch(error => {
          throw(error);
        });
    },
    fetchTasks({ commit }) {
      return EventService.getTasks()
        .then(response => {
          commit('SET_TASKS', response.data);
        })
        .catch(error => {
          throw(error);
        });
    },
    updateTask({ commit }, task) {
      return EventService.updateTask(task.id, task)
        .then(() => {
          commit('UPDATE_TASK', task);
        })
        .catch(error => {
          throw(error);
        });
    }
  },
  modules: {
  }
})
