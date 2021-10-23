import axios from 'axios'

const apiClient = axios.create({
	baseURL: 'http://localhost:3002',
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
		console.log(task);
		return apiClient.post('/tasks', task);
	},
	deleteTask(id) {
		return apiClient.delete('/tasks/' + id);
	},
	updateTask(id, value) {
		return apiClient.put('/tasks/' + id, value);
	}

}
