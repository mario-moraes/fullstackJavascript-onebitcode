import posterImg from "../../assets/star-wars-poster.jpg"
import styles from "./styles.module.css"

export default function Card() {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={posterImg} alt="star wars movie poster" />
      <div>
        <h2 className={styles.title}>Star Wars movie poster</h2>
        <p className={styles.description}>An epic Star Wars movie decorative poster, with MDF frame and A3 size. A great memento of one of the most iconic films of all time. This classic poster will bring adventure, nostalgia and the magic of Star Wars wherever you decide to hang it. Don't miss the chance to add this beautiful memory to your collection!</p>
        <button className={styles.button}>Buy now</button>
      </div>
    </div>
  )
}