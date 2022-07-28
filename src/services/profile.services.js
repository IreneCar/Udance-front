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
const sendMessageService = (lessonId,message) => {
  return service.post(`${URL}/${lessonId}/send-email`,message);
};

//delete task
const deleteLessonService = (lessonId) => {
  return service.delete(`${URL}/${lessonId}/delete`);
};

//update task
const updateTaskService = (id, updatedTask) => {
  return service.put(`${URL}/${id}`, updatedTask);
};

export {
  getProfileService,
  updateProfileService,
  deleteLessonService,
  updateTaskService,
  getGivedLessonsService,
  getReceivedLessonsService,
  sendMessageService,
};
