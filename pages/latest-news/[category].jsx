import React from "react";
import NewsList from "components/news-list";
import { useRouter } from "next/router";

import Layout from "components/layout";

const categoryToText = {
  politics: { title: "Política", slug: "politica" },
  economics: { title: "Economia", slug: "economia" },
  sports: { title: "Desporto", slug: "desporto" },
  culture: { title: "Cultura", slug: "cultura" },
  society: { title: "Sociedade", slug: "sociedade" },
  art: { title: "Arte", slug: "arte" },
  world: { title: "Mundo", slug: "mundo" },
  country: { title: "País", slug: "pais" },
  fire: { title: "Incêndios", slug: "fogo" },
};

export default function Category(props) {
  const router = useRouter();
  return (
    <div className="category bg-color">
      <Layout>
        <NewsList
          title={categoryToText[router.query.category].title}
          news={props.category}
        />
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const categoryResponse = await fetch(
    `https://www.publico.pt/api/list/${
      categoryToText[context.params.category].slug
    }`
  );

  const category = await categoryResponse.json();

  const props = {
    category,
  };

  return {
    props,
  };
}
