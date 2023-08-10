export default function AboutMe() {
  return (
    <section className="md:mt-8">
      <h3 className="font-fira text-xl md:hidden">
        About me
      </h3>
      <div className="p-3 font-lato flex flex-col gap-3 md:text-2xl">
        <p>Experienced with <b>API creation and integration</b>, and <b>UI development</b>.
        </p>
        <p>
          Brazilian, 25, <s>almost</s> married, passionate about motorcycles, games, and music.
        </p>
        <p>
          Love to learn, always improving.
        </p>
      </div>
    </section>
  )
}
