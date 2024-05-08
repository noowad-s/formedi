import Image from 'next/image';

export default function header({ activePage }) {
  return (
    <header>
      <nav className="bg-white border-lime-200 px-4 lg:px-6 py-2.5 dark:bg-lime-600">
        <div
          className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
        >
          <a href="/" className="flex items-center">
          <Image
            src="/imgs/header_logo.png"
            alt="Logo"
            width={130}
            height={63}
            className="self-center"
          />
          </a>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/pharmacy"
                  className={`{"${activePage === '/pharmacy' ? 'lg:p-0 dark:text-white' : 'lg:p-0 dark:text-lime-400'} block py-2 pr-4 pl-3 lg:bg-transparent  lg:dark:hover:text-white active:bg-primary-700 active:text-white}`}
                >
                  pharmacy
                </a>
              </li>
              <li>
                <a
                  href="/hospital"
                  className={`{"${activePage === '/hospital' ? 'lg:p-0 dark:text-white' : 'lg:p-0 dark:text-lime-400'} block py-2 pr-4 pl-3 lg:bg-transparent  lg:dark:hover:text-white active:bg-primary-700 active:text-white}`}
                >
                  hospital
                </a>
              </li>
              <li>
                <a
                  href="/medicine"
                  className={`{"${activePage === '/medicine' ? 'lg:p-0 dark:text-white' : 'lg:p-0 dark:text-lime-400'} block py-2 pr-4 pl-3 lg:bg-transparent  lg:dark:hover:text-white active:bg-primary-700 active:text-white}`}
                >
                  medicine
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={`{"${activePage === '/' ? 'lg:p-0 dark:text-white' : 'lg:p-0 dark:text-lime-400'} block py-2 pr-4 pl-3 lg:bg-transparent  lg:dark:hover:text-white active:bg-primary-700 active:text-white}`}
                  aria-current="page"
                >
                  how to use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
