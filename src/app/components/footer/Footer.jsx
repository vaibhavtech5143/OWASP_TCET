import styles from "./page.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      Footer
      <div>
        &copy;{`Copyright ${new Date().getFullYear()}`}.All Rights Reserved To OWASP TCET</div>
        
        <div className={styles.socials}> 
        <Image src={"/3.png"} width={20} height={20}  style={{zIndex: 4}}  className={styles.icon}alt="OWASP TWITTER"/>
        <Image src={"/3.png"} width={20} height={20}  style={{zIndex: 4}}  className={styles.icon}alt="OWASP TWITTER"/>
        <Image src={"/3.png"} width={20} height={20}   style={{zIndex: 4}} className={styles.icon}alt="OWASP TWITTER"/>
        <Image src={"/3.png"} width={20} height={20}   style={{zIndex: 4}} className={styles.icon}alt="OWASP TWITTER"/>
        <Image src={"/3.png"} width={20} height={20}  style={{zIndex: 4}}  className={styles.icon}alt="OWASP TWITTER"/>
        </div>

    </div>
  );
};

export default Footer;
