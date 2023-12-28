import React from 'react'
import styles from '@/app/ui/dashboard/footer/footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Bello Bambo</div>
        <div className={styles.text}>All Right Reserved</div>
    </div>
  )
}

export default Footer