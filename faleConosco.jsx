import React from "react";

export default function FaleConosco() {
  return (
    <div className="bg-black text-white font-sans">
      <header className="flex justify-between items-center px-20 py-4 h-36">
        <a href="/">
          <img
            src="imgs/logo nome white.png"
            alt="logoheader"
            className="h-full object-contain cursor-pointer"
          />
        </a>
      </header>

      <section className="relative flex flex-col items-center justify-center px-5 py-20 text-center">
        <h1 className="text-5xl font-bold mb-36 z-20">Fale conosco</h1>

        <img
          src="imgs/setinha.png"
          alt="setinhaFaleConosco1"
          className="absolute w-32 left-12 bottom-20 hidden md:block"
        />
        <img
          src="imgs/setinha.png"
          alt="setinhaFaleConosco2"
          className="absolute w-28 left-12 bottom-64 rotate-[300deg] hidden md:block"
        />
        <img
          src="imgs/nozinho.png"
          alt="nozinhoFaleConosco"
          className="absolute w-[600px] top-0 right-5 hidden md:block"
        />

        <div className="w-full max-w-xl scale-125 md:scale-150 z-10">
          <iframe
            data-tally-src="https://tally.so/embed/3NE2jb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Mollil"
            className="w-full h-[500px]"
          ></iframe>
        </div>
      </section>

      <footer className="flex flex-col md:flex-row justify-around items-center bg-[#1c2e4a] text-white py-10 gap-8 text-center md:text-left">
        <div className="footer0">
          <img src="imgs/logo nome white.png" alt="" className="w-24" />
        </div>
        <div className="border-l-2 h-24 border-gray-300 hidden md:block"></div>
        <div className="space-y-2">
          <a href="#quemsomos" className="hover:text-cyan-400">Quem Somos</a>
          <a href="#beneficios" className="hover:text-cyan-400">Benefícios</a>
          <a href="#comofunciona" className="hover:text-cyan-400">Como Funciona?</a>
        </div>
        <div className="text-sm">
          <a href="faleConosco.html" className="hover:text-cyan-400 block">Fale conosco</a>
          <p>contato@mollil.com</p>
          <p>2025 Mollil. Todos os direitos reservados.</p>
        </div>
        <div>
          <p>Curitiba - PR, Brasil</p>
        </div>
      </footer>
    </div>
  );
}
