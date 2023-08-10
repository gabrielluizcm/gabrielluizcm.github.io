type ProjectCardRootProps = {
  to: string;
  children: React.ReactNode;
}

export default function ProjectCardRoot({ to, children }: ProjectCardRootProps) {
  return (
    <a href={to} target="_blank"
      className="w-11/12 rounded-md p-3 dark:bg-khaki dark:text-faux-black dark:hover:bg-lavander-indigo dark:hover:text-light-silver transition-all">
      {children}
    </a>
  )
}
