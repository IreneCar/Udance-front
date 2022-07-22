import service from "./service";

const URL = "/lessons";

const getAllLessonsService = () => {
  return service.get(`${URL}/`);
};
const getLessonDetailsService = (id) => {
  return service.get(`${URL}/${id}`);
};

const addNewLessonService = (newLesson) => {
  return service.post(`${URL}/`, newLesson);
};
const joinLessonService = (id) => {
  return service.post(`${URL}/${id}/join`);
};
const dropOffLessonService = (id) => {
  return service.get(`${URL}/${id}/dropOff`);
};

export {
  getAllLessonsService,
  addNewLessonService,
  getLessonDetailsService,
  joinLessonService,
  dropOffLessonService

};
