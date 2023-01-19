import { useState } from "react";
import PostCreate from "../components/Blogs/PostCreate";
import PostList from "../components/Blogs/PostList";
import Heading from "../components/Heading";
import DynamicModal from "../components/utils/DynamicModal";
import ArticlesList from "../components/Articles/ArticlesList";
import ArticlesCreate from "../components/Articles/ArticlesCreate";

export default function Articles() {
  const [modalShow, setModalShow] = useState(false);
  const [article, setArticle] = useState([]);
  const [modalContent, setModalContent] = useState(<></>);

  const modalClose = () => {
    setModalContent(<></>);
    setModalShow(false);
  };

  const afterSubmit = (category) => {
    setModalShow(false);
    setArticle([...article, category]);
  };

  const showCreateModal = () => {
    setModalContent(<ArticlesCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
  };

  // const showEditModal = (category) => {
  //   setModalContent(<Article category={category} afterEdit={afterEdit} />);
  //   setModalShow(true);
  // };

  const afterEdit = (category) => {
    modalClose();
    let newArticles = article.map((art) => {
      if (art.id === article.id) {
        return article;
      }
      return art;
    });
    setArticle(newArticles);
  };
  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Blog posts" handleShow={showCreateModal} />
        <ArticlesList items={article} />
      </div>
      <DynamicModal
        show={modalShow}
        handleClose={modalClose}
        title="Create post"
        content={<PostCreate />}
      />
    </>
  );
}
