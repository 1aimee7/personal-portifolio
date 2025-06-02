import { NextResponse } from 'next/server';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: 'TaskMaster',
    description: 'A productivity app to manage tasks with real-time updates and collaboration features.',
    image: '/images/project1.jpg',
    link: 'https://taskmaster.example.com',
    technologies: ['React', 'Next.js', 'Firebase'],
  },
  {
    title: 'PhotoGallery',
    description: 'A responsive photo gallery showcasing user-uploaded images with filtering options.',
    image: '/images/project2.jpg',
    link: 'https://photogallery.example.com',
    technologies: ['React', 'Tailwind CSS', 'MongoDB'],
  },
  {
    title: 'Recipe Viewer',
    description: 'A dynamic web app to browse, search, and view recipes with detailed instructions and filtering by category or ingredients.',
    image: '/images/image.png',
    link: 'https://recipes-a8cy-git-main-ishimwe-aimees-projects.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API', 'Clerk Authentication'],
  },
];

export async function GET() {
  return NextResponse.json(projects, { status: 200 });
}