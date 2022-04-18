import { createStore } from 'vuex';
import EventService from "@/services/EventService";

export default createStore({
  state: {
    userName: 'Pulikova Yuliya',
    userContact: '@puly',
    tasks: [],
    dashboard: []
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
    },

    SET_YEAR_DATA(state, yearData) {
      state.dashboard.push(yearData);
      //plan: data.filter(value => value.type_id === 1).map(item => item.total).reduce((prev, curr) => prev + curr, 0),
      //  fact: data.filter(value => value.type_id === 2).map(item => item.total).reduce((prev, curr) => prev + curr, 0),
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
    },

    async fetchYearData({ commit }, year) {
      const data = (await EventService.getYearData(year)).data;
        /*.catch(error => {
          throw(error);
        });*/
      commit('SET_YEAR_DATA', {
        year: year,
        data: data
      });
    }
  },
  modules: {
  }
})
