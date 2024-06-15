import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "HEXASHOP-Products",
  description: "ecomerce shop every thing is here technology electronic makeup foods",
};

async function getData(){
  const response = await fetch('https://dummyjson.com/products');
  if(!response.ok){
    throw new Error('Failed to fetch data')
  }
  return response.json()
}

async function Portfolio() {
  const data = await getData();
  const products = data.products;

  return (
    <div className={styles.mainContainer}>
      {products.map((item) => {
        return (
              <Link key={item.id} href={`/products/${item.id}`} className={styles.post}>
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.image}
                    src={
                      item.thumbnail
                    }
                    width={350}
                    height={250}
                    alt="post image"
                  />
                </div>
                <div className={styles.content}>
                  <p className={styles.text}>{item.price}$</p>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.title}>{item.category}</p>
                </div>
              </Link>
        );
      })} 
    </div>
  )
}

export default Portfolio