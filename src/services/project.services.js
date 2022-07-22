import service from "./service";

const URL = "/lessons";

const getAllProjectsService = () => {
  return service.get(`${URL}/`);
};
const getProjectDetailsService = (id) => {
  return service.get(`${URL}/${id}`);
};

const addNewProjectService = (newProject) => {
  return service.post(`${URL}/`, newProject);
};
const joinLessonService = (id) => {
  return service.post(`${URL}/${id}/join`);
};
const dropOffLessonService = (id) => {
  return service.get(`${URL}/${id}/dropOff`);
};

export {
  getAllProjectsService,
  addNewProjectService,
  getProjectDetailsService,
  joinLessonService,
  dropOffLessonService

};
