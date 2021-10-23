import axios from 'axios'

const apiClient = axios.create({
	baseURL: 'http://localhost:3001',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})

export default {
	getTasks() {
		return apiClient.get('/tasks');
	},
	postTask(task) {
		return apiClient.post('/tasks', task);
	}
/*	getEvent(id) {
		return apiClient.get('/events/' + id)
	},*/

}
