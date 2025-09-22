import { Router } from "express";
import { handleADDProject, handleGETProjects, handleDELETEProject, handleUPDATEProject } from "../controllers/portfolio.controller.js";

const portfolioRouter = Router(); 


portfolioRouter.get('/', handleGETProjects);
portfolioRouter.post('/', handleADDProject);
portfolioRouter.delete('/:id', handleDELETEProject);
portfolioRouter.put('/:id', handleUPDATEProject);


export default portfolioRouter;