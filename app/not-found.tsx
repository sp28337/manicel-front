import Link from 'next/link'
import styles from './styles/not-found.module.css'
 
export default async function NotFound() {

  return (
    <div className={styles.wrapper}>
      <h2>Not Found: 404</h2>
      <p>Could not find requested resource</p>
      <button>
        View <Link href="/catalog">all products</Link>
      </button>
    </div>
  )
}