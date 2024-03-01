import React from 'react';

function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://blog.portalpos.com.br/app/uploads/2022/04/saude-publica-familia-pos-graduacao.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="text-lightblue flex flex-col items-end mx-10 font-serif">
          <h1 className="italic text-4xl xl:text-6xl font-abhaya-libre font-bold leading-none mb-2">
            +ViVer
          </h1>
          <h2 className="italic text-4xl xl:text-6xl font-abhaya-libre uppercase font-bold leading-none mb-6">
            Melhor
          </h2>
          <div className='flex flex-col items-center'>
            <a
              href="#"
              className="font-montserrat text-blue-500 font-semibold text-lg py-3 px-8 rounded-full shadow-lg bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white mb-4"
            >
              Ver Produtos
            </a>
            <a
              href="#"
              className="font-montserrat text-blue-500 font-semibold text-lg py-3 px-8 rounded-full shadow-lg bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Ver Categorias
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
