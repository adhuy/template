import { useState } from 'react';
import { useRouter } from 'next/router';
import InputField from '../../components/elements/forms/inputField';
import styles from './login.module.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submit, setSubmit] = useState(false);
    const router = useRouter();
    
    const submitLogin = async (event) => {
        event.preventDefault();
        setSubmit(true);

        if(username && password){
            router.push('/dashboard');
        }
    };
    
    const usernameError = submit && !username ? true : false;
    const passwordError = submit && !password ? true : false;

    return (
        <div className={`${styles.container} items-center`}>
            <div className={`${styles.content} flex flex-col`}>
                <div className='text-3xl font-bold text-center m-2'><h1>Login</h1></div>
                <hr className='mt-1' />
                <form>
                    <section className={styles.section}>
                        <label>
                            <h3 className={styles.titleInput}>Username</h3>
                        </label>
                        <InputField 
                            name="username"
                            onChange={(event) => setUsername(event.target.value)}
                            placeholder="Masukkan username Anda"
                            type="text"
                            value={username}
                            isEmpty={usernameError}
                            message="Username harus diisi"
                        />
                    </section> 
                    <section className={styles.section}>   
                        <label>
                            <h3 className={styles.titleInput}>Password</h3>
                        </label>
                        <InputField 
                            name="password"
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Masukkan password Anda"
                            type="password"
                            value={password}
                            isEmpty={passwordError}
                            message="Password harus diisi"
                        />
                    </section>
                    <div className="items-center p-4">
                        <button
                            className={styles.buttonLogin}
                            disabled={false}
                            onClick={submitLogin}
                            type="submit"
                            >
                            Masuk
                            {/* <Spinner active={loading} className={styles.spinner} /> */}
                        </button>
                    </div>
                </form>
                <div className="text-center mt-2 mb-6">
                    Belum punya akun? <a className="font-medium" href="/registrasi"> Daftar Sekarang </a>
                </div>
            </div>
        </div>
    )
}