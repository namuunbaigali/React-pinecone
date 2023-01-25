import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Articles() {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/articles/" + id).then((res) => {
      setArticle(res.data);
      console.log(res.data.text);
    });
  }, []);

  return (
    <div className="container">
      <h1>{article.name}</h1>
      <img style={{ maxWidth: "100%" }} src={article.imageUrl} alt="" />
      <p>{article.text}</p>
    </div>
  );
}
