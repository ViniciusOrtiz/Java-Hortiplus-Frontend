import "./Home.css";
import heroImage from "../../assets/hero.svg";
import { Link } from "react-router-dom";
import LocalStorageService from "../../services/TokenService";

function Home() {
  const usuarioLogado = LocalStorageService.get('user')
  const isAdmin = usuarioLogado.tipo == "admin";
  const isFornecedor = usuarioLogado.tipo == "fornecedor"
  const isCliente = usuarioLogado.tipo == "cliente"

  return (
    <>
      {/* Section 1 */}
      <section className="pt-20 lg:pt-10 px-6 dark:bg-black transition-all duration-300 ease-in-out">
        <div
          className="container flex flex-wrap-reverse items-center justify-center mx-auto gap-y-10 md:gax-y-0
                mt-10 md:flex-row lg:py-36"
        >
          <div className="mb-14 lg:mb-0">
            <h1
              className="max-w-xl text-[2.9rem] leading-none text-black font-extrabold font-sans text-center lg:text-5xl
                        lg:text-left lg:leading-tight mb-5 2xl:text-5xl dark:text-[#92D94D]"
            >
              Bem vindo ao <br></br> Horti+
            </h1>
            <p className="max-w-xl text-center text-black lg:text-left lg:max-w-md dark:text-white">
            Na Horti+, celebramos o frescor e a qualidade dos produtos de hortifrúti. Escolhemos cuidadosamente
             cada item para garantir que você desfrute dos sabores autênticos da natureza. Explore nossa variedade excepcional
              de frutas, legumes e verduras, tudo com o compromisso de qualidade.
            </p>
            <div
              className="flex justify-center mt-8 lg:justify-start"
              id="saibaMais"
            >
              {isAdmin ? (
                <>
                  <Link
                    to="/cadastroProduto"
                    className="text-white bg-[#03A678] hover:bg-[#92D94D] dark:bg-[#92D94D] dark:text-black dark:hover:bg-white font-medium rounded-lg px-5 py-4 text-center hover:drop-shadow-md transition duration-300 ease-out"
                  >
                    {" "}
                    Cadastrar Produto{" "}
                  </Link>
                  <Link
                    to="/cadastroCategoria"
                    className="text-white ml-4 bg-[#03A678] hover:bg-[#92D94D] dark:bg-[#92D94D] dark:text-black dark:hover:bg-white font-medium rounded-lg px-5 py-4 text-center hover:drop-shadow-md transition duration-300 ease-out"
                  >
                    {" "}
                    Cadastrar Categoria{" "}
                  </Link>
                </>
              ) : isFornecedor ? (
                <>
                  <Link to="/cadastroProduto" className="text-white bg-[#03A678] hover:bg-[#92D94D] dark:bg-[#92D94D] dark:text-black dark:hover:bg-white font-medium rounded-lg px-5 py-4 text-center hover:drop-shadow-md transition duration-300 ease-out">
                    {" "}
                    Cadastre seu produto{" "}
                  </Link>
                </>

              ) : isCliente && (
                <>
                  <a href="#saibaMais">
                    <button type="button" className="text-black dark:border-2 dark:border-[#92D94D] text-font-bold dark:text-[#92D94D] hover:bg-gradient-to-bl focus:ring-4 transition focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-lg text-sm px-8 py-4 text-center mb-2 hover:drop-shadow-md transiton-all ease-out duration-200 shadow-lg shadow-black-500/40 font-medium drop-shadow-l bg-gradient-to-br from-[#fff] to-[#92D94D]  hover:bg-verde_claro1 dark:bg-none dark:hover:bg-verde_claro2 dark:hover:text-black dark:py-[14px]">Saiba mais</button>
                  </a>
                  <Link
                    to="/produtos"
                    className="rounded-lg px-5 text-center hover:drop-shadow-md "
                  >
                    <button type="button" className="text-white bg-gradient-to-br from-[#92D94D] to-[#03A678] hover:bg-gradient-to-bl focus:ring-4 transition duration-300 ease-out focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mb-2">Produtos</button>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="drop-shadow-md">
            <img src={heroImage} alt="heroImage" className="ml-auto" />
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
