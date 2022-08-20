import { CartInformations } from "../../components/CarInformations";
import { Header } from "../../components/Header";
import {
  Container
} from "./styles";

export function Home() {
  return (
    <>
      <Header />

      <Container>
        <nav>
          <small>Ofertas → Novo Série 1</small>
          <a href="#">Voltar para página anterior</a>
        </nav>
        <h1>BMW Série 4 Cabrio</h1>
        <CartInformations />
      </Container>
    </>
  );
}
