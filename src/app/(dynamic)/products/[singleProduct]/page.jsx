import Image from "next/image";
import styles from "./page.module.css";

export async function generateMetadata({ params }) {
  // read route params
  const id = params.id
 
  const data = await getData(params.singleProduct);
 
  return {
    title: data.title,
    description: data.description
  }
}


async function getData(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

async function Post({ params }) {

  const data = await getData(params.singleProduct);
  console.log(data);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.info}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>{data.description}</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              width={500}
              height={500}
              className={styles.image}
              src={data.thumbnail}
              alt="post image"
            />
            <span className={styles.auther}>{data.category}</span>
          </div>
        </div>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A sapiente
            maxime doloribus. Nihil doloribus quasi quam. Numquam dolorum
            blanditiis, earum aliquid sunt expedita facere assumenda praesentium
            nihil. Illo facilis qui assumenda, labore vitae, iusto reiciendis,
            dolore blanditiis nam dolores modi? Aliquid expedita suscipit natus
            perspiciatis impedit et tenetur quas alias asperiores ex beatae,
            blanditiis molestias officia iste id iure exercitationem ducimus
            laborum. Totam accusamus sed aliquam, temporibus distinctio corporis
            officia commodi vero, quam facilis at necessitatibus fugiat voluptas
            tempore unde!
          </p>
        </div>
      </div>
    </>
  );
}

export default Post;
