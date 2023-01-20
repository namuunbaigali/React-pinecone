import Card from "../components/Card";

export default function Home() {
  const articles = [
    {
      image:
        "https://mgl.gogo.mn/newsn/thumbnail/420/np/2022/12/22/5190205/Uniceff_Moiltmaa_2-100558-126746472311.jpeg",
      title:
        "Хүний эрх” нэрээр халхавчилсан хуулийг гэрлийн хурдаар батлахаар зүтгүүлэхийн учир  ",
    },
    {
      image:
        "https://mgl.gogo.mn/newsn/thumbnail/420/np/2022/12/22/5190205/Uniceff_Moiltmaa_2-100558-126746472311.jpeg",
      title:
        "Хүний эрх” нэрээр халхавчилсан хуулийг гэрлийн хурдаар батлахаар зүтгүүлэхийн учир  ",
    },
    {
      image:
        "https://mgl.gogo.mn/newsn/thumbnail/420/np/2022/12/22/5190205/Uniceff_Moiltmaa_2-100558-126746472311.jpeg",
      title:
        "Хүний эрх” нэрээр халхавчилсан хуулийг гэрлийн хурдаар батлахаар зүтгүүлэхийн учир  ",
    },
    {
      image:
        "https://mgl.gogo.mn/newsn/thumbnail/420/np/2022/12/22/5190205/Uniceff_Moiltmaa_2-100558-126746472311.jpeg",
      title:
        "Хүний эрх” нэрээр халхавчилсан хуулийг гэрлийн хурдаар батлахаар зүтгүүлэхийн учир  ",
    },
    {
      image:
        "https://mgl.gogo.mn/newsn/thumbnail/420/np/2022/12/22/5190205/Uniceff_Moiltmaa_2-100558-126746472311.jpeg",
      title:
        "Хүний эрх” нэрээр халхавчилсан хуулийг гэрлийн хурдаар батлахаар зүтгүүлэхийн учир  ",
    },
  ];
  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            {articles.map((article) => (
              <div className="col-md-3 col-sm-6 col-12">
                <Card title={article.title} image={article.image} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
