import { Schema, model } from "mongoose";

const portfolioSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  demoLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  imageURL : {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: []
  }
});

const PortfolioModel = model('project', portfolioSchema);

export default PortfolioModel;