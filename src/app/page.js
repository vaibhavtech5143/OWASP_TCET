
import styles from './page.module.css'
import Hero from '../../public/OWASP-modified.png'
import Image from 'next/image'
import bg from "../../public/cool-background.svg"

export default function Home() {
  return (
<div className={styles.container}>

<div className={styles.item}>
<Image src={bg} fill style={{zIndex:1,opacity:"0.4"}}/>
  <h1 className={styles.title}>Welcome TO Owasp Tcet Official Page</h1>
  <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet </p>
  <button className={styles.button}>See Our Works</button>
</div>
<div className={styles.item}></div>
    <Image src={Hero} className={styles.img}/>
    {/* <Image src={"https://images.pexels.com/photos/17767834/pexels-photo-17767834/free-photo-of-a-creative-mess-on-a-marble-table-jovan-vasiljevic-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={500} height={500}/> */}
</div>
  )
}
