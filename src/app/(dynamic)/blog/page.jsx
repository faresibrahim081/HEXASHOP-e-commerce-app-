import Header from "@/Elements/Header/Header";
import styles from "./page.module.css";
import Link from "next/link";

async function Blog() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return (
    <>
      <Header info={'Customer opinions'} />
      {data.map((item) => {
        return (
          <>
            <div href="/blog/id" className={styles.post}>
              <h1 className={styles.title}>
                {item.id}- {item.title}
              </h1>
              <p className={styles.text}>{item.body}</p>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Blog;
