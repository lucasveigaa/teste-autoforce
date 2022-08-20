import { Container, HyperLink } from "./styles";

import logoBmw from "../../assets/logoBmw.svg";
import logoDealer from "../../assets/logoDealer.svg";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export function Header() {
  return (
    <Container>
      <div>
        <img src={logoDealer} />
        <img src={logoBmw} />
      </div>
      <nav>
        <HyperLink href="tel:+5571999999999" variant="blue">
          <FaPhoneAlt color="#FFF" />
          LIGUE AGORA
        </HyperLink>
        <HyperLink
          target="_blank"
          href="https://wa.me/5571999999999"
          variant="green"
        >
          <FaWhatsapp />
          WHATSAPP
        </HyperLink>
      </nav>
    </Container>
  );
}
