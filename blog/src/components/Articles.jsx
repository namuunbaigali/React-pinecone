import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Articles() {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get("https://demo-api-one.vercel.app/api/articles/" + id)
      .then((res) => {
        setArticle(res.data.body);
      });
  }, []);

  return (
    <div className="container">
      <h1>{article.name}</h1>
      <img style={{ maxwidth: "100%" }} src={article.imageUrl} alt="" />
      <p>{article.text}</p>
    </div>
  );
}
