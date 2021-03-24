import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Election App!</h1>
      <div>
        <div>
          <Link href="/pages/dum">
            <button>Voter Registration</button>
          </Link>
          <Link href="/pages/candidate/registration">
            <button>Cadidate Registration</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
