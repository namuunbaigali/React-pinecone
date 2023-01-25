import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

export default function Home() {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/articles").then((res) => {
      setArticle(res.data);
    });
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            {articles.map((article) => (
              <div className="col-md-3 col-sm-6 col-12">
                <Card
                  title={article.name}
                  image={article.imageUrl}
                  id={article.id}
                  articleId={article.id}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
