import Nav from "components/nav";
import Category from "components/category";
import Footer from "components/footer";
import Carousel from "components/carousel";

export default function Home(props) {
  return (
    <div>
      <Nav />

      <Carousel news={props.lastNews} />
      <Category id="politics" title="Política" news={props.politics} />
      <Category id="economia" title="Economia" news={props.economics} />
      <Category id="desporto" title="Desporto" news={props.sports} />
      <Category id="fama" title="Fama" news={props.fame} />
      <Category id="pais" title="País" news={props.pais} />
      <Category id="mundo" title="Mundo" news={props.mundo} />
      <Category id="cultura" title="Cultura" news={props.cultura} />
      <Category id="lifestyle" title="Lifestyle" news={props.lifestyle} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const lastNewsResponse = await fetch(
    "https://www.publico.pt/api/list/ultimas"
  );
  const sportsResponse = await fetch(
    "https://www.publico.pt/api/list/desporto"
  );
  const fameResponse = await fetch("https://www.publico.pt/api/list/fama");

  const economicsResponse = await fetch(
    "https://www.publico.pt/api/list/economia"
  );

  const politicResponse = await fetch(
    "https://www.publico.pt/api/list/politica"
  );
  const paisResponse = await fetch("https://www.publico.pt/api/list/pais");
  const mundoResponse = await fetch("https://www.publico.pt/api/list/mundo");
  const culturaResponse = await fetch(
    "https://www.publico.pt/api/list/cultura"
  );

  const lifestyleResponse = await fetch(
    "https://www.publico.pt/api/list/cultura"
  );

  const lastNews = await lastNewsResponse.json();
  const sports = await sportsResponse.json();
  const fame = await fameResponse.json();
  const economics = await economicsResponse.json();
  const politics = await politicResponse.json();
  const pais = await paisResponse.json();
  const mundo = await mundoResponse.json();
  const cultura = await culturaResponse.json();
  const lifestyle = await lifestyleResponse.json();

  const props = {
    sports,
    fame,
    lastNews,
    economics,
    politics,
    pais,
    mundo,
    cultura,
    lifestyle,
  };

  return {
    props,
  };
}
