import PortfolioModel from "../models/portfolio.model.js";
import { projectSchema } from "../schemas/portfolio.schema.js";

export const handleGETProjects = async (req, res) => {
  try {
    const result = await PortfolioModel.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    console.log("Portfolio Fetch Error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const handleADDProject = async (req, res) => {
  console.log(req.body);
  const response = projectSchema.safeParse(req.body);
  if (!response.success) {
    return res.status(400).json({
      status: "error",
      message: response.error.errors.map((e) => e.message).join(", "),
    });
  }
  try {
    const response = await PortfolioModel.create(req.body);
    return res.status(201).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    console.log("Portfolio Add Error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const handleDELETEProject = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "Project ID is required",
    });
  }
  try {
    const response = await PortfolioModel.findByIdAndDelete(id);
    if (!response) {
      return res.status(404).json({
        status: "error",
        message: "Project not found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    console.log("Portfolio Delete Error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const handleUPDATEProject = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "Project ID is required",
    });
  }
  const response = projectSchema.partial().safeParse(req.body);
  if (!response.success) {
    return res.status(400).json({
      status: "error",
      message: response.error.errors.map((e) => e.message).join(", "),
    });
  }
  try {
    const response = await PortfolioModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!response) {
      return res.status(404).json({
        status: "error",
        message: "Project not found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    console.log("Portfolio Update Error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
