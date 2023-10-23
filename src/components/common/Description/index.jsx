import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp } from './anim';


export default function Index({ phrase }) {

  const description = useRef(null);
  const isInView = useInView(description, { once: true, amount: 0.8 });

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <div>
          {
            phrase.split(" ").map((word, index) => {
              return <span key={index} className={styles.mask}>
                <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} whileInView={{ opacity: 1 }} key={index}>{word}</motion.span>
              </span>
            })
          }
        </div>
      </div>
    </div>
  )
}
