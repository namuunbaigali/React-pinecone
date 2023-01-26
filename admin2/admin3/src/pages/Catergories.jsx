import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PostCreate from "../components/Blogs/PostCreate";
import CategoriesCreate from "../components/Categories/CategoriesCreate";
import CategoryEdit from "../components/Categories/CategoriesEdit";
import CategoriesList from "../components/Categories/CategoriesList";
import Heading from "../components/Heading";
import DynamicModal from "../components/utils/DynamicModal";
import axios from "axios";

export default function Catergories() {
  const [modalShow, setModalShow] = useState(false);

  const [categories, setCategories] = useState([]);
  const [modalContent, setModalContent] = useState(<></>);

  useEffect(() => {
    axios
      .get("http://localhost:8000/articles")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("aldaa garlaa");
      });
  }, []);

  const modalClose = () => {
    setModalContent(<></>);
    setModalShow(false);
  };

  const afterSubmit = (category) => {
    setModalShow(false);
    setCategories([...categories, category]);
  };

  const showCreateModal = () => {
    setModalContent(<CategoriesCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
  };

  const afterEdit = (category) => {
    modalClose();
    let newCategories = categories.map((cat) => {
      if (cat.id === category.id) {
        return category;
      }
      return cat;
    });
    setCategories(newCategories);
  };
  const showEditModal = (category) => {
    setModalContent(<CategoryEdit category={category} afterEdit={afterEdit} />);
    setModalShow(true);
  };

  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Catergories" handleShow={showCreateModal} />
        <CategoriesList items={categories} onEdit={showEditModal} />
      </div>
      <DynamicModal
        content={modalContent}
        show={modalShow}
        handleClose={modalClose}
        title="Create category"
      />
    </>
  );
}
