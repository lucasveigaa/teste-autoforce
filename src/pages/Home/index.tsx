import { CartInformations } from "../../components/CarInformations";
import { Header } from "../../components/Header";
import { ContainerDescription, ContainerVideo, MainContainer, SubContainer } from "./styles";

export function Home() {
  return (
    <>
      <Header />

      <MainContainer>
        <SubContainer>
          <nav>
            <small>Ofertas → Novo Série 1</small>
            <a href="#">Voltar para página anterior</a>
          </nav>
          <h1>BMW Série 4 Cabrio</h1>
          <CartInformations />
        </SubContainer>
        <ContainerDescription>
          <div>
          <strong>
            A vida é melhor quando compartilhada. 
          </strong>
          <strong>
          BMW Série 4 Cabrio
          </strong>
          </div>
          <p>
            A performance irradia de cada ângulo do design inovador do BMW Série
            4 Cabrio. Começando pela dianteira, que conta com para-choque
            clássico dos modelos BMW. Ao correr os olhos pelo design, nota-se
            imediatamente o teto inclinado e a linha do ombro marcante, que
            equilibra o centro de gravidade do carro. Voltando-se para as
            laterais, são os robustos arcos de 10 mm e as incomuns rodas de 21
            polegadas que chamam a atenção. Ao chegar na traseira do BMW Série 4
            Cabrio, a força do design continua surpreendendo. O para-choque com
            difusão clássica dos modelos BMW, as lâminas horizontais e teto com
            spoiler ganham um toque a mais de amplitude devido ao vidro traseiro
            levemente rebaixado.
          </p>
        </ContainerDescription>
        <ContainerVideo>
          <strong>Conheça o BMW Série 4 Cabrio</strong>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cFyrTEYyq64" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </ContainerVideo>
      </MainContainer>
    </>
  );
}
