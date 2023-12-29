import React from 'react'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
    return (
        <div className={styles.container}>


            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src='/noavatar.png' alt='' fill />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input type="text" name='username' placeholder='John Doe' />
                    <label>Email</label>
                    <input type="number" name='price' placeholder='John Doe' />
                    <label>Stock</label>
                    <input type="number" name='stock'  />
                    <label>Color</label>
                    <input type="text" name='color' placeholder='Red' />
                    <label>Size</label>
                    <textarea type="text" name='size' placeholder='John Doe'>
                    </textarea>
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value='kitchen'>Kitchen</option>
                        <option value='computers'>Computer</option>
                    </select>
                    <label>Description</label>
                   <textarea name="" placeholder='description' id="" cols="30" rows="10"></textarea>
                    <button>Update</button>
                </form>
            </div>

        </div >
    )
}

export default SingleUserPage