import { renderPage } from "./render-page.js";
import { todoFactory } from "./todo-object.js";
import { projectFactory, createProjects } from "./project-object.js";
import { renderToDoObjects } from "./render-todo-objects.js";
import { storeProjects, storeTodos } from "./storage.js";
import { renderProjectList } from "./render-projects.js";

const createDefaultProject = (() => {
    storeProjects.getProjectList();
    storeProjects.setProjectList();
    createProjects();
    renderProjectList();
})();
