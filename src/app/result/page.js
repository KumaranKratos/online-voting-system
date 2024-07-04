import Image from "next/image";
import styles from "./result.module.css";
import { getPosts } from "@/lib/data";
import Sparkles from "@/components/Sparkles/Sparkles";

export default async function Result() {
  const posts = await getPosts();
  const count = posts.map((post) => post.count);
  const max = Math.max.apply(null, count);
  const array = posts.filter((post) => post.count === max);
  return (
    <div className={styles.container}>
      <Sparkles />
      <div className={styles.title}>Congratulations to the Winner!</div>
      {array.map((item, index) => (
        <div key={index} className={styles.box}>
          <div>
            <Image
              src={item.img}
              height={300}
              width={300}
              alt="Candidate_Symbol"
              className={styles.image}
            />
          </div>
          <div className={styles.textcontainer}>
            <p>
              <strong>{item.candidate_name}</strong> received
              <strong> {item.count} votes</strong> and has been chosen as the
              winner!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
