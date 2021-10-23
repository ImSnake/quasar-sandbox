import { createStore } from 'vuex';
import EventService from "@/services/EventService";

export default createStore({
  state: {
    user: 'Pulikova Yuliya',
    tasks: [],
    task: {}
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    }
    /*SET_TASK(state, task) {
	  state.task = task;
    }*/
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
    fetchTasks({ commit }) {
      return EventService.getTasks()
        .then(response => {
          commit('SET_TASKS', response.data);
        })
        .catch(error => {
          throw(error);
        });
    },
    /*fetchEvent({ commit, state }, id) {
      const existingEvent = state.events.find(event => event.id === id)
      if (existingEvent) {
        commit('SET_EVENT', existingEvent)
      } else {
        return EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            throw(error)
          })
      }
    }*/
  },
  modules: {
  }
})
