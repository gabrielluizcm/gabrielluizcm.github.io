import ProjectCard from './ProjectCard';

function SkillTag({ children }: { children: string }) {
  return (
    <span className="px-3 py-2 font-lato text-base bg-onyx rounded-md">
      {children}
    </span>
  )
}

export default function SkillsAndProjects() {
  const skills = [
    'PHP', 'Node', 'SQL', 'NoSQL', 'React', 'Redux', 'TypeScript', 'Sass',
    'Tailwind', 'Jest', 'Git', 'Docker', 'Insomnia'
  ];
  const projects = [
    { header: 'Slowmodoro', content: 'Reverse Pomodoro technique app, with timer customization and different modes' },
    { header: 'Musclify - WIP', content: 'Training routine app to keep track of exercises and progression' }
  ];

  return (
    <>
      <section>
        <h3 className="font-fira text-xl md:text-2xl">
          Skills
        </h3>
        <div className="p-3 w-11/12 font-lato flex flex-wrap justify-center gap-3">
          {skills.map((skill) => <SkillTag>{skill}</SkillTag>)}
        </div>
      </section>
      <section className='flex flex-col items-center gap-3'>
        <h3 className="font-fira text-xl md:text-2xl w-full">
          Major projects
        </h3>
        {projects.map((project) => {
          return (
            <ProjectCard.Root>
              <ProjectCard.Header>{project.header}</ProjectCard.Header>
              <ProjectCard.Content>{project.content}</ProjectCard.Content>
            </ProjectCard.Root>
          );
        })}
      </section>
    </>

  )
}
