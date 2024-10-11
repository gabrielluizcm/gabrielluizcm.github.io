import { useTranslation } from 'react-i18next';

import ProjectCard from './ProjectCard';

function SkillTag({ children }: { children: string }) {
  return (
    <span className="px-3 py-2 font-lato text-base
      bg-lavander hover:bg-deep-purple
      dark:bg-onyx dark:hover:bg-lavander-indigo
      cursor-pointer transition-colors rounded-md">
      {children}
    </span>
  )
}

export default function SkillsAndProjects() {
  const { t } = useTranslation();

  const skills = [
    'PHP', 'Node', 'SQL', 'NoSQL', 'Vue', 'React', 'Redux', 'TypeScript', 'Sass',
    'Tailwind', 'Jest', 'Git', 'Docker', 'Insomnia'
  ];
  const projects = [
    {
      header: 'Slowmodoro',
      content: t('projects.slowmodoro.desc'),
      link: 'https://slowmodoro.vercel.app/'
    },
    {
      header: 'Protein Tracker',
      content: t('projects.protein.desc'),
      link: 'https://proteintracker.vercel.app/'
    }
  ];

  return (
    <>
      <section>
        <h3 className="font-fira text-xl md:text-2xl">
          {t('skillsTitle')}
        </h3>
        <div className="p-3 w-full font-lato flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => <SkillTag key={index}>{skill}</SkillTag>)}
        </div>
      </section>
      <section className='flex flex-col items-center gap-3'>
        <h3 className="font-fira text-xl md:text-2xl w-full">
          {t('projects.title')}
        </h3>
        {projects.map((project, index) => {
          return (
            <ProjectCard.Root key={index} to={project.link}>
              <ProjectCard.Header>{project.header}</ProjectCard.Header>
              <ProjectCard.Content>{project.content}</ProjectCard.Content>
            </ProjectCard.Root>
          );
        })}
      </section>
    </>

  )
}
