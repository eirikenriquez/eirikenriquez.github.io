export type ProjectLink = {
  href: string;
  label: string;
};

export type ProjectVisualId =
  | 'word-per-minute'
  | 'perrinn-424'
  | 'flatties'
  | 'tiny-hungry-shark';

export type Project = {
  cover: {
    detailLabel: string;
    detailValue: string;
    stack: string;
    title?: string;
  };
  description: string;
  featured?: boolean;
  links: ProjectLink[];
  name: string;
  status?: string;
  technologies: string[];
  visual: ProjectVisualId;
};

export const projects: Project[] = [
  {
    name: 'The Word per Minute',
    cover: {
      detailLabel: 'Focus',
      detailValue: 'Scripture-first typing',
      stack: 'React / TypeScript',
    },
    description:
      'A scripture-first typing practice app for slowing down and engaging more closely with Bible passages.',
    featured: true,
    status: 'Public alpha',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    visual: 'word-per-minute',
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
    cover: {
      detailLabel: 'Result',
      detailValue: '1.460 s improvement',
      stack: 'Unity / Python',
      title: 'PERRINN 424',
    },
    description:
      'An AUT team project using a genetic algorithm to improve lap times in a Unity simulation of the PERRINN 424 hypercar.',
    status: 'Team project',
    technologies: ['Unity', 'Python', 'C#', 'Genetic algorithm'],
    visual: 'perrinn-424',
    links: [
      {
        label: 'View source',
        href: 'https://github.com/ShawnHiewRenHaw/project-424-unity',
      },
    ],
  },
  {
    name: 'Flatties',
    cover: {
      detailLabel: 'Focus',
      detailValue: 'Property listings',
      stack: 'React / Node.js',
    },
    description:
      'A full-stack rental listing app for browsing, searching, and listing properties.',
    status: 'Team project',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    visual: 'flatties',
    links: [
      {
        label: 'View source',
        href: 'https://github.com/Puddle-Dev/Flatties',
      },
    ],
  },
  {
    name: 'Tiny Hungry Shark',
    cover: {
      detailLabel: 'Edition',
      detailValue: 'Winter 2023',
      stack: 'Unity / C#',
    },
    description:
      'A 2D Unity game created with a teammate for My First Game Jam: Winter 2023.',
    status: 'Game jam',
    technologies: ['Unity', 'C#'],
    visual: 'tiny-hungry-shark',
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
