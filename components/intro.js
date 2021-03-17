//import { CMS_NAME, CMS_URL } from '@/lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl text-petroleo md:text-6xl lg:text-7xl md:flex items-center font-bold tracking-tighter leading-tight md:pr-8">
        G3rm@n<span className="animate-bounce w-5 h-5 md:w-10 md:h-10 bg-yellow-500 inline-block rounded-full mx-1 md:mx-5"></span> Blog.
      </h1>
      <h4 className="text-center text-petroleo md:text-left text-3xl mt-5 md:pl-8">
        Dedicado a las tecnologias que me gustan y uso. Y artículos que me han ayudado a resolver problemas específicos de  manera fácil + Programadores invitados a escribir{' '}
        {/* <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
          {CMS_NAME}
        </a> */}
        .
      </h4>
    </section>
  )
}
