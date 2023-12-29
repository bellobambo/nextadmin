import React from 'react'
import styles from '@app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src='/avatar.png' alt='' fill />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <label>Username</label>
                <input type="text" name='username' placeholder='John Doe' />
                <label>Username</label>
                <input type="text" name='username' placeholder='John Doe' />
                <label>Username</label>
                <input type="text" name='username' placeholder='John Doe' />
                <label>Username</label>
                <input type="text" name='username' placeholder='John Doe' />
                <label>Username</label>
                <input type="text" name='username' placeholder='John Doe' />
            </div>
        </div>
    )
}

export default SingleUserPage