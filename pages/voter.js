import React from "react"
import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Voter() {
  return (
    <div className={styles.container}>
      <h1>Voter's Page!</h1>
      <div>
        <div>
          <Link href="/voter">
            <button>Registration</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
