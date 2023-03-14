
import styles from '../styles/Login.module.css'


const Login = () => {
  return (
    <>

      <main className={styles.main}>
        <form>
          <h1>Please sign in</h1>

          <div>
          <label htmlFor="floatingInput">Email Address:</label>
            <input type="email" className={styles.input} placeholder="Email Address"/>
           
          </div>
          <div>
          <label htmlFor="floatingPassword">Password</label>
            <input type="password" className={styles.input} placeholder="Password" />  
          </div>
          <button className={styles.button} type="submit">Sign in</button>
        </form>
      </main>

    </>
  )
}

export default Login;