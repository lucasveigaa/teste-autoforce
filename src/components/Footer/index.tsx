import { Container, ContainerFooter, Content, LogoDealer } from "./styles";

import logoDealerFooter from "../../assets/logoDealerFooter.svg";
import iconInstagramFooter from "../../assets/iconInstagramFooter.svg";
import iconLinkedinFooter from "../../assets/iconLinkedinFooter.svg";
import iconYoutubeFooter from "../../assets/iconYoutubeFooter.svg";
import logoAutoforceFooter from "../../assets/logoAutoforceFooter.svg";

import { BsBoxArrowUpRight } from "react-icons/bs";

export function Footer() {
  return (
    <Container>
      <header>
        <LogoDealer src={logoDealerFooter} />
        <div>
          <span>SIGA-NOS:</span>
          <a href="#">
            <img src={iconInstagramFooter} />
          </a>
          <a href="#">
            <img src={iconLinkedinFooter} />
          </a>
          <a href="#">
            <img src={iconYoutubeFooter} />
          </a>
        </div>
      </header>

      <Content>
        <div>
          <strong>Razão Social:</strong>
          <span>AUTO FORCE PLATAFORMA DE MARKETING DIGITAL LTDA</span>
        </div>
        <div>
          <strong>CNPJ:</strong>
          <span>22.588.947/0001-06</span>
        </div>
        <div>
          <strong>Endereço Matriz:</strong>
          <span>
            Av. Prudente de Morais, 3966, Lagoa Nova. Natal/RN – CEP 59056-200
          </span>
          <a href="#">
            Ver mapa <BsBoxArrowUpRight />
          </a>
        </div>
      </Content>

      <ContainerFooter>
        <img src={logoAutoforceFooter} />
        <div>
          <span>
            © Copyright 2021 - AutoForce - Todos os direitos reservados
          </span>
          <span>
            Confira a nossa <a href="#">Politica de privacidade.</a>
          </span>
        </div>
      </ContainerFooter>
    </Container>
  );
}
