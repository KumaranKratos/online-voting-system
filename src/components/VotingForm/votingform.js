"use client";
import Image from "next/image";
import styles from "./votingform.module.css";
import { useFormState } from "react-dom";
import { addCount } from "@/lib/action";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VotingForm({ posts }) {
  const router = useRouter();
  const [state, formAction] = useFormState(addCount, undefined);

  useEffect(() => {
    state?.success && router.push("/dashboard/Voting/votted");
  }, [state?.success, router]);

  return (
    <div>
      <form className={styles.form} action={formAction}>
        <div className={styles.title}>Vote For Your Candidate</div>
        {posts.map((post, index) => (
          <div key={post.id || index} className={styles.container}>
            <div className={styles.imgcontainer}>
              <Image
                src={post.img}
                height={60}
                width={60}
                alt={post.candidate_name} 
                className={styles.img}
              />
            </div>
            <div className={styles.inputcontainer}>
              <input
                type="radio"
                name="candidate_name"
                value={post.candidate_name}
                id={post.candidate_name}
                required
              />
              <label htmlFor={post.candidate_name}>{post.candidate_name}</label>
            </div>
          </div>
        ))}

        <div>
          <button>Vote</button>
        </div>
      </form>
    </div>
  );
}
