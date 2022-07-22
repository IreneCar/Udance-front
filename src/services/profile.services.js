import service from './service';

const URL = '/profile';

//add new task
const getProfileService = () => {
	return service.get(`${URL}`);
};

const getGivedLessonsService = () => {
	return service.get(`${URL}/gived`);
};

const getReceivedLessonsService = () => {
	return service.get(`${URL}/received`);
};

//delete task
const deleteTaskService = (id) => {
	return service.delete(`${URL}/${id}`);
};

//update task
const updateTaskService = (id, updatedTask) => {
	return service.put(`${URL}/${id}`, updatedTask);
};

export { getProfileService, deleteTaskService, updateTaskService,
	getGivedLessonsService,getReceivedLessonsService };
