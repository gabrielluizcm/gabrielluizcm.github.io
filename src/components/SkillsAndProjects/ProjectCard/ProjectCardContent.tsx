export default function ProjectCardContent({ children }: { children: string }) {
  return (
    <p className="p-3 font-lato text-base md:text-lg">
      {children}
    </p>
  )
}
