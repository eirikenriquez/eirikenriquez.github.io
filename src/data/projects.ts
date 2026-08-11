import wordmark from '../assets/the-word-per-minute-wordmark.svg';

export type ProjectLink = {
  href: string;
  label: string;
};

type ProjectImage = {
  alt: string;
  src: string;
};

export type Project = {
  description: string;
  featured?: boolean;
  image?: ProjectImage;
  links: ProjectLink[];
  name: string;
  status?: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    name: 'The Word per Minute',
    description:
      'A scripture-first typing practice app for slowing down and engaging more closely with Bible passages.',
    featured: true,
    image: {
      alt: '',
      src: wordmark,
    },
    status: 'Public alpha',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    links: [
      {
        label: 'Use the app',
        href: 'https://thewordperminute.com/',
      },
      {
        label: 'View source',
        href: 'https://github.com/eirikenriquez/The-Word-per-Minute',
      },
    ],
  },
  {
    name: 'PERRINN 424 Lap Time Optimisation',
    description:
      'An AUT team project using a genetic algorithm to improve lap times in a Unity simulation of the PERRINN 424 hypercar.',
    status: 'Team project',
    technologies: ['Unity', 'Python', 'C#', 'Genetic algorithm'],
    links: [
      {
        label: 'View source',
        href: 'https://github.com/ShawnHiewRenHaw/project-424-unity',
      },
    ],
  },
  {
    name: 'Flatties',
    description:
      'A full-stack rental listing app for browsing, searching, and listing properties.',
    status: 'Team project',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    links: [
      {
        label: 'View source',
        href: 'https://github.com/Puddle-Dev/Flatties',
      },
    ],
  },
  {
    name: 'Tiny Hungry Shark',
    description:
      'A 2D Unity game created with a teammate for My First Game Jam: Winter 2023.',
    status: 'Game jam',
    technologies: ['Unity', 'C#'],
    links: [
      {
        label: 'Play the game',
        href: 'https://eirikenriquez.itch.io/tiny-hungry-shark',
      },
      {
        label: 'View source',
        href: 'https://github.com/eirikenriquez/Tiny-Hungry-Shark',
      },
    ],
  },
];
