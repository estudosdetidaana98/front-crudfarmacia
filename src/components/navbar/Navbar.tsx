import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <header className="bg-white dark:bg-gray-900">
        <nav className="fixed z-20 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
          <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
              <div className="w-full items-center flex justify-between lg:w-auto">
                <Link to="/" className="relative z-10 text-sm font-semibold text-blue-600 dark:text-blue-400 lg:text-2xl text-xl uppercase font-bold" aria-label="logo">
                  +Saúde
                </Link>
              </div>
              <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0 ml-auto">
                <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                    <li>
                      <Link to='/home' className='block md:px-4 transition hover:text-primary dark:hover:text-primaryLight'>Home</Link>
                    </li>
                    <li>
                      <Link to='/catalogo' className='block md:px-4 transition hover:text-primary dark:hover:text-primaryLight'>Produtos</Link>
                    </li>
                    <li>
                      <Link to='/categorias' className='block md:px-4 transition hover:text-primary dark:hover:text-primaryLight'>Categoria</Link>
                    </li>
                    <li>
                      <Link to='/cadastroCategoria' className='block md:px-4 transition hover:text-primary dark:hover:text-primaryLight'>Nova Categoria</Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                  <a
                    href="#"
                    className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-sky-600/10 dark:focus:before:bg-sky-400/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative text-sm font-semibold text-primary dark:text-primaryLight">
                      Sign Up
                    </span>
                  </a>
                  <a
                    href="#"
                    className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-600 dark:before:bg-sky-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative text-sm font-semibold text-white dark:text-gray-900">
                      Login
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar;
