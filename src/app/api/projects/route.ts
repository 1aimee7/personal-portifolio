import { NextResponse } from 'next/server';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  technologies: string[];
  hoverText: string;
}

const projects: Project[] = [
  {
    title: 'Weather App',
    description: 'A productivity app to manage tasks with real-time updates and collaboration features.',
    image: '/images/project1.jpg',
    link: 'https://weather-app-gnl1-git-main-ishimwe-aimees-projects.vercel.app/',
    github: 'https://github.com/1aimee7/weather-app',
    technologies: ['React', 'Next.js', 'Firebase'],
    hoverText: 'Check the latest weather updates anywhere!',
  },
  {
    title: 'Product Cart List',
    description: 'A responsive photo gallery showcasing user-uploaded images with filtering options.',
    image: '/images/project2.jpg',
    link: 'https://product-cart-git-main-ishimwe-aimees-projects.vercel.app/',
    github: 'https://github.com/1aimee7/product-cart',
    technologies: ['React', 'Tailwind CSS', 'MongoDB'],
    hoverText: 'Browse and manage your shopping cart effortlessly.',
  },
  {
    title: 'Recipe Viewer',
    description: 'A dynamic web app to browse, search, and view recipes with detailed instructions and filtering by category or ingredients.',
    image: '/images/image.png',
    link: 'https://recipes-a8cy-git-main-ishimwe-aimees-projects.vercel.app/',
    github: 'https://github.com/1aimee7/recipes.git',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API', 'Clerk Authentication'],
    hoverText: 'Discover new recipes with a single click!',
  },
];

export async function GET() {
  return NextResponse.json(projects, { status: 200 });
}