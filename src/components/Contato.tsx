import Reveal from "./Reveal";


export default function Contact() {
  return (
    <Reveal>
      <section className="my-5 rounded-[20px] bg-card px-10 py-[52px] text-center bg-gray-100">
        <h2 className="mb-2 font-display text-2xl font-semibold">Entre em contato</h2>
        <p className="mb-[26px] text-sm text-sub dark:text-darkSub">
          Tem um projeto ou oportunidade? Vamos conversar.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {/* <a
            href="mailto:sara@example.com"
            className="rounded-[10px] bg-ink px-[22px] py-3 text-sm font-medium text-white dark:bg-white dark:text-ink"
          >
            Enviar e-mail
          </a> */}
          <a
            href="https://www.linkedin.com/in/sara-romao/"
            
            target="_blank"
            className="rounded-[10px] bg-black px-[22px] py-3 text-sm font-medium text-white transition hover:bg-gray-600 "

          >
            LinkedIn
          </a>
          {/* <a
            href="#"
            className="rounded-[10px] border border-line px-[22px] py-3 text-sm font-medium dark:border-darkLine"
          >
            Baixar CV
          </a> */}
        </div>
      </section>
    </Reveal>
  );
}
