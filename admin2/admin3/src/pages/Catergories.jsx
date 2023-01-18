import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PostCreate from "../components/Blogs/PostCreate";
import CategoriesCreate from "../components/Categories/CategoriesCreate";
import CategoriesList from "../components/Categories/CategoriesList";
import Heading from "../components/Heading";
import DynamicModal from "../components/utils/DynamicModal";

export default function Catergories() {
  const [modalShow, setModalShow] = useState(false);

  const [categories, setCategories] = useState([]);

  const handleClose = () => {
    setModalShow(false);
  };
  const handleShow = () => {
    setModalShow(true);
  };

  useEffect(() => {
    fetch("https://demo-api-one.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.body);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Aldaa garlaa");
      });
  }, []);

  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Catergories" handleShow={handleShow} />
        <CategoriesList items={categories} />
      </div>
      <DynamicModal
        show={modalShow}
        handleClose={handleClose}
        title="Create category"
        content={<CategoriesCreate />}
      />
    </>
  );
}
