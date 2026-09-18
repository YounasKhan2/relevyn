import { HeroActions } from "@/components/public/HeroActions/HeroActions";
import styles from "./Hero.module.css";
export function Hero() {
  return (
    <section className={styles.hero}>
      <span className={styles.eyebrow}>
        PROFESSIONAL IDENTITY, RECONSIDERED
      </span>
      <h1>
        A career should read like a body of work —<br />
        not a pile of forms.
      </h1>
      <p>
        Keep one candidate-controlled identity. Bring evidence, preferences,
        applications and opportunities into one coherent professional record.
      </p>
      <HeroActions />
    </section>
  );
}
