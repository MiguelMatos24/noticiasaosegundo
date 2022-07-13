import NewsList from "components/news-list";
import Layout from "components/layout";

export default function Home(props) {
  return (
    <div className="home">
      <Layout>
        <NewsList title="Última Hora" news={props.lastNews} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const lastNewsResponse = await fetch(
    "https://www.publico.pt/api/list/ultimas"
  );

  const lastNews = await lastNewsResponse.json();

  const props = {
    lastNews,
  };

  return {
    props,
  };
}
