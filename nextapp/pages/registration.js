
import styles from '../styles/Login.module.css'


const Registration = () => {
  return (
    <>

      <main className={styles.main}>
        <form>
          <h1>Registration Page</h1>

          <div>
          <label>Full Name:</label>
            <input type="email" className={styles.input} placeholder="Enter your name"/>
           
          </div>

          <div>
          <label>Email Address:</label>
            <input type="email" className={styles.input} placeholder="Email Address"/>
           
          </div>
          <div>
          <label>Password</label>
            <input type="password" className={styles.input} placeholder="Password" />  
          </div>
          <div>
          <label>Confirm Password</label>
            <input type="password" className={styles.input} placeholder="Password" />  
          </div>

          <button className={styles.button} type="submit">Register</button>
        </form>
      </main>

    </>
  )
}

export default Registration;