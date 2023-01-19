import { useEffect, useState } from "react";
import { SlPencil, SlTrash } from "react-icons/sl";
import { toast } from "react-toastify";

const ArticleList = ({ item, index }) => {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td style={{ whiteSpace: "nowrap" }}>
        <button className="btn btn-sm btn-outline-primary me-2">
          <SlPencil />
        </button>
        <button className="btn btn-sm btn-outline-danger">
          <SlTrash />
        </button>
      </td>
    </tr>
  );
};

export default function ArticlesList() {
  const [article, setArticle] = useState([]);
  const [number, setNumber] = useState(0);

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
        toast.error("Aldaa garlaa");
      });
  }, []);

  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th width="1">#</th>
          <th>Namegg</th>
          <th>Description</th>
          <th width="1">Actions</th>
        </tr>
      </thead>
      <tbody>
        {article?.map((item, index) => {
          return (
            <ArticleList
              item={item}
              index={index + 1}
              key={`list-item-${index}`}
            />
          );
        })}
      </tbody>
    </table>
  );
}
