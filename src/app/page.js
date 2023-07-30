
import styles from './page.module.css'
import Hero from '../../public/hero.png'
import Image from 'next/image'

export default function Home() {
  return (
<>

  <h1>Home Page</h1>
    <Image src={Hero}/>
</>
  )
}
