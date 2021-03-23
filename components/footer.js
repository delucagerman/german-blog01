import Container from './container';
import { EXAMPLE_PATH } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/3">
            <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 ">
              Un Blog donde todes somos posibilidad !!!
            </h3>
            <h2 className="mb-6 text-3xl font-dosis font-bold  text-center lg:text-left">
              G3rm@n{' '}
              <span className="w-3 h-3 bg-yellow-500 inline-block rounded-full"></span>
            </h2>
          </div>

          <div className="mb-6 md:mb-0 flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/3">
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                href="https://twitter.com/GermanDeLuca"
                rel="noopener noreferrer"
                target="_blank"
                className="ml-3 text-gray-900"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="animate-bounce w-16 h-16"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/delucagerman/"
                rel="noopener noreferrer"
                target="_blank"
                className="ml-3 text-gray-900"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-16 h-16"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/german-de-luca-7a2743179/"
                rel="noopener noreferrer"
                target="_blank"
                className="ml-3 text-gray-900"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-16 h-16"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/3">
            {/* <a
              href="https://nextjs.org/docs/basic-features/pages"
              target="_blank"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0" 
            >
              Read Documentation
            </a> */}
            <a
              href={`https://github.com/delucagerman/${EXAMPLE_PATH}`}
              target="_blank"
              //className="mx-3 font-bold hover:underline"
              className="m-6 bg-petroleo hover:bg-white hover:text-petroleo border border-petroleo text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
