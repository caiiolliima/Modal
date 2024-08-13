import image from './assets/main-image.png'

function receita() {
  return (
    <>
    <div className="bg-[url('./assets/bg-image.jpg')] bg-cover" >
    <div className="w-[800px] p-6 bg-yellow-10 rounded-lg">
        <img src={image} className="rounded-lg"/>
      <main>
        <section className="">
          <h1>Cupcake de café com chantilly</h1>
          <p>
          O bolinho perfeito para acompanhar o café de todos os dias. É muito fácil e ainda por cima fica maravilhoso, com certeza vai impressionar. Faz e depois me conta o que achou!
          </p>
          <p>
          Tempo: 1h10 <br />
          Rendimento: 12 porções <br/>
          Dificuldade: fácil
          </p>
        </section>
        <section className="">
          <h2>Ingredientes</h2>
          <ul>
            <li>1 e 1/2 xícara (chá) de água morna</li>
            <li>1 colher (sopa) de café solúvel</li>
            <li>3 ovos</li>
            <li>1/2 xícara (chá) de óleo</li>
            <li>2 xícaras (chá) de açúcar</li>
            <li>2/3 de xícara (chá) de chocolate em pó</li>
            <li>2 e 1/2 xícaras (chá) de farinha de trigo</li>
            <li>1 colher (sopa) de fermento em pó químico</li>
            <li>2 xícaras (chá) de chantilly pronto</li>
            <li>Grãos de café para decorar</li>
            <li>1 lata de leite condensado</li>
            <li>1 colher (sopa) de café solúvel</li>
            <li>1 colher (sopa) de chocolate em pó</li>
            <li>2 colheres (sopa) de manteiga</li>
          </ul>
        </section>
        <section className="">
          <h2>Modo de preparo</h2>
          <p>
          No liquidificador, bata a água, o café solúvel, os ovos, o óleo, o açúcar e o chocolate em pó até ficar homogêneo. Transfira para uma tigela, adicione a farinha e o fermento e misture com uma colher. Despeje em forminhas para cupcakes forradas com forminhas de papel e coloque em uma fôrma grande, um ao lado do outro. Leve ao forno médio, preaquecido, por 25 minutos ou até assar e dourar. Retire e deixe esfriar.
          <br /><br />
          Para o recheio, leve todos os ingredientes ao fogo médio, mexendo bem até engrossar. Desligue, deixe esfriar e coloque dentro de um saco de confeiteiro com bico perle. Reserve. Coloque o chantilly dentro de um saco de confeiteiro com bico pitanga e reserve.
          <br /><br /> 
          Para a montagem, faça um furo no centro dos cupcakes e recheie com o brigadeiro de café reservado. Decore as superfícies dos cupcakes com o chantilly reservado, fazendo círculos. Decore com grãos de café e leve à geladeira até o momento de servir.
          </p>
        </section>
      </main>
    </div>
    </div>
    </>
  )
}

export default receita;