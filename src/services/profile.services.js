import service from "./service";

const URL = "/profile";

const getProfileService = () => {
  return service.get(`${URL}`);
};


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

const deleteLessonService = (lessonId) => {
  return service.delete(`${URL}/${lessonId}/delete`);
};



export {
  getProfileService,
  updateProfileService,
  deleteLessonService,
  getGivedLessonsService,
  getReceivedLessonsService,
  sendMessageService,
};
