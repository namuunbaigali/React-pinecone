import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Home() {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    fetch("https://demo-api-one.vercel.app/api/articles", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.body);
        console.log(data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Link to={"/home"}>
        <main>
          <div className="container">
            <div className="row">
              {articles.map((article) => (
                <div className="col-md-3 col-sm-6 col-12">
                  <Card title={article.name} image={article.imageUrl} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </Link>
    </>
  );
}
