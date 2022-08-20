import imgBmw from "../../assets/imgBmw.svg";
import iconConsumo from "../../assets/iconConsumo.svg";
import iconCilindrada from "../../assets/iconCilindrada.svg";
import iconPotencia from "../../assets/iconPotencia.svg";
import iconVelocidadeMax from "../../assets/iconVelocidadeMax.svg";
import {
  ContainerContent,
  ContainerContent1,
  ContainerContent2,
  ContainerHighlights,
  SubContainerHighlights,
} from "./styles";

export function CartInformations() {
  return (
    <div>
      <p>
        Descubra o BMW Série 4 Cabrio <br /> Cliente On-line tem Condições
        Especiais e aqui na Dealer BMW!
      </p>
      <ContainerContent>
        <ContainerContent1>
          <span>
            A partir de <strong>R$ 179.950</strong>
          </span>
          <img src={imgBmw} alt="Imagem BMW Série 4 Cabrio" />
        </ContainerContent1>

        <ContainerContent2>
          <h3>Destaques</h3>
          <ContainerHighlights>
            <div>
              <img src={iconConsumo} alt="Icone de uma bomba de combustível" />
              <SubContainerHighlights>
                <strong>Consumo</strong>
                <span>14,7 km/l</span>
              </SubContainerHighlights>
            </div>
            <div>
              <img src={iconCilindrada} alt="Icone de um motor de carro" />
              <SubContainerHighlights>
                <strong>Cilindrada</strong>
                <span>999 cm3</span>
              </SubContainerHighlights>
            </div>
            <div>
              <img src={iconPotencia} alt="Icone de um raio" />
              <SubContainerHighlights>
                <strong>Potência</strong>
                <span>75 cv</span>
              </SubContainerHighlights>
            </div>
            <div>
              <img
                src={iconVelocidadeMax}
                alt="Icone de um velocímetro de carro"
              />
              <SubContainerHighlights>
                <strong>Velocidade Máx.</strong>
                <span>154 km/h</span>
              </SubContainerHighlights>
            </div>
          </ContainerHighlights>
          <a target="_blank" href="https://wa.me/5571999999999">
            TENHO INTERESSE
          </a>
        </ContainerContent2>
      </ContainerContent>
    </div>
  );
}
