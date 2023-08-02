import React from 'react'
import styles from "../button/button.module.css"
import Link from 'next/link'

const Button = ({url,text}) => {
  return (
    <Link href={url}>
        <button className={styles.button}>{text}</button>
    </Link>
  )
}

export default Button