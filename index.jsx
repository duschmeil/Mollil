import React from "react";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      <header className="flex justify-between items-center px-20 py-4">
        <img src="imgs/logo nome white.png" alt="logoheader" className="h-36" />
        <button className="px-5 py-2 border-2 border-cyan-400 rounded-lg text-lg font-bold hover:bg-cyan-400 hover:text-black transition">
          Login
        </button>
      </header>

      <section className="flex flex-col lg:flex-row justify-between items-center px-16 py-10">
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold">Transforme Seu Negócio com IA</h1>
          <p className="text-lg">
            Criamos soluções de Inteligência Artificial sob medida para pequenas e médias empresas. Deixe a tecnologia trabalhar por você e veja sua produtividade e resultados dispararem.
          </p>
          <button
            onClick={() => (window.location.href = "faleConosco.html")}
            className="px-6 py-3 border-2 border-cyan-400 rounded-lg text-lg font-bold hover:bg-cyan-400 hover:text-black transition"
          >
            Fale conosco
          </button>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img src="imgs/imagemsiterobozinho.png" alt="imgprimeira" className="w-full" />
        </div>
      </section>

      <section id="quemsomos" className="flex flex-col lg:flex-row items-center px-16 py-10 relative">
        <h2 className="absolute top-0 text-5xl font-bold z-10">Quem Somos?</h2>
        <img src="imgs/imgquemsomos.png" alt="imgquemsomos" className="lg:w-1/2 pt-32" />
        <p className="lg:pl-20 pt-20 text-lg max-w-xl">
          Na Mollil, acreditamos que a Inteligência Artificial deve ser simples, acessível e poderosa para qualquer negócio.
          Somos uma equipe apaixonada por inovação e resultados reais — ajudando empresas a crescer através de automações inteligentes, com soluções rápidas, seguras e sob medida.
          Nosso compromisso é fazer a tecnologia trabalhar por você.
        </p>
      </section>

      <section id="beneficios" className="relative px-16 py-10 text-center">
        <h2 className="text-5xl font-bold">Benefícios</h2>
        <img src="imgs/setinha.png" alt="setinhaesquerda" className="absolute w-28 bottom-5 left-5 rotate-[30deg]" />
        <img src="imgs/setinha.png" alt="setinhadireita" className="absolute w-28 top-36 right-5 rotate-[300deg]" />

        <div className="flex flex-wrap justify-center gap-10 mt-10">
          <div className="max-w-xs flex flex-col items-center">
            <img src="imgs/beneficios/1.png" alt="beneficios1" className="w-48 mb-4" />
            <h3 className="text-xl font-bold">Redução de custos operacionais</h3>
          </div>
          <div className="max-w-xs flex flex-col items-center">
            <img src="imgs/beneficios/2.png" alt="beneficios2" className="w-48 mb-4" />
            <h3 className="text-xl font-bold">Economia de Tempo</h3>
          </div>
          <div className="max-w-xs flex flex-col items-center">
            <img src="imgs/beneficios/3.png" alt="beneficios3" className="w-48 mb-4" />
            <h3 className="text-xl font-bold">Aumento na produtividade</h3>
          </div>
        </div>
      </section>

      <section id="comofunciona" className="px-16 py-10">
        <h2 className="text-5xl font-bold text-center mb-10">Como Funciona?</h2>

        <div className="mb-10">
          <h3 className="text-3xl font-bold mb-6">Opção 1</h3>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="max-w-xs">
              <h4 className="text-cyan-400 text-xl font-bold mb-2">Leads com IA</h4>
              <p>Centralize os contatos recebidos e use IA para identificar e priorizar automaticamente os leads mais promissores.</p>
            </div>
            <div className="max-w-xs">
              <h4 className="text-cyan-400 text-xl font-bold mb-2">Documentos Automáticos</h4>
              <p>Preencha um formulário e receba petições, contratos ou notificações prontos em segundos, gerados por inteligência artificial.</p>
            </div>
            <div className="max-w-xs">
              <h4 className="text-cyan-400 text-xl font-bold mb-2">Chatbot Jurídico</h4>
              <p>Responda dúvidas comuns de clientes e da equipe automaticamente com um chatbot treinado na base de conhecimento do escritório.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold">Opção 2</h3>
          <h4 className="text-2xl my-4">Conte seu <span className="text-cyan-400">desafio</span>, nós criamos a <span className="text-cyan-400">solução!</span></h4>
          <p className="max-w-2xl mx-auto text-lg">
            Não achou o que precisa acima? Nos conte como funciona seu processo, e a gente desenvolve uma automação sob medida com IA para você ganhar tempo, produtividade e resultados.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <svg className="w-8 h-8 fill-cyan-400" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5..." /></svg>
              <p className="text-xl">Diagnóstico do seu processo atual</p>
            </div>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <svg className="w-8 h-8 fill-cyan-400" viewBox="0 0 512 512"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5..." /></svg>
              <p className="text-xl">Desenvolvimento e implementação da solução</p>
            </div>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <svg className="w-8 h-8 fill-cyan-400" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l..." /></svg>
              <p className="text-xl">Acompanhamento e melhoria constante</p>
            </div>
          </div>
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
