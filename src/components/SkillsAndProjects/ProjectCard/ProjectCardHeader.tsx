export default function ProjectCardHeader({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-fira text-lg md:text-xl">
      {children}
    </h4>
  );
}
