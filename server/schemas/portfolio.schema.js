import {z} from 'zod';

export const projectSchema = z.object({
    projectName: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    imageURL: z.string().optional(),
    githubLink: z.string().optional(),
    demoLink: z.string().optional(),
    tags: z.array(z.string()).optional(),
});


