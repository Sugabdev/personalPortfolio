import type { Technology } from "../components/projects/TechnologyIcons.astro";

export type Projects = {
    Screenshot: ImageMetadata;
    Title: string;
    Description: string;
    Technologies: Technology[];
}