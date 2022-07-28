import service from "./service";

const URL = "/profile";

//add new task
const getProfileService = () => {
  return service.get(`${URL}`);
};

//update profile
const updateProfileService = (updatedProfile) => {
  return service.put(`${URL}/edit`, updatedProfile);
};

const getGivedLessonsService = () => {
  return service.get(`${URL}/gived`);
};

const getReceivedLessonsService = () => {
  return service.get(`${URL}/received`);
};
const messageService = (lessonId,message) => {
  return service.post(`${URL}/${lessonId}/send-email`,message);
};

//delete task
const deleteTaskService = (id) => {
  return service.delete(`${URL}/${id}`);
};

//update task
const updateTaskService = (id, updatedTask) => {
  return service.put(`${URL}/${id}`, updatedTask);
};

export {
  getProfileService,
  updateProfileService,
  deleteTaskService,
  updateTaskService,
  getGivedLessonsService,
  getReceivedLessonsService,
  messageService,
};
