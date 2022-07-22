import { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/elements/forms/inputField';
import styles from './login.module.css';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

export default function Login() {
    const [showHide, setShowHide] = useState(false);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
            .required('Required')
            .min(5, 'Too Short! (minimum 5 characters)'),
            password: Yup.string()
            .required('Required')
            .min(6, 'Too Short! (minimum 6 characters)')
        }),
        onSubmit: () => {
            router.push('/dashboard');
        }
    });

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-slate-100 relative overflow-auto">
            <div className="flex flex-col w-[90%] bg-white rounded-xl absolute lg:w-1/4">
                <div className='text-3xl text-white font-bold text-center py-4 rounded-t-xl bg-theme'><h1>Login</h1></div>
                <form onSubmit={formik.handleSubmit}>
                    <section className="m-4 mt-10">
                        <InputField 
                            name="username"
                            onChange={formik.handleChange}
                            placeholder="Masukkan username Anda"
                            type="text"
                            value={formik.values.username}
                            errorMessage={formik.errors.username ? formik.errors.username : null}
                            floatLabel="Username"
                            floatMode={true}
                        />
                    </section> 
                    <section className="m-4 mt-10">
                        <InputField 
                            name="password"
                            onChange={formik.handleChange}
                            placeholder="Masukkan password Anda"
                            type={showHide ? 'text' : 'password'}
                            value={formik.values.password}
                            errorMessage={formik.errors.password ? formik.errors.password : null}
                            floatLabel="Password"
                            floatMode={true}
                            rightIcon={
                                showHide ?
                                    <IoIosEye onClick={() => setShowHide(!showHide)} color="#2dd4bf"/>
                                :
                                    <IoIosEyeOff  onClick={() => setShowHide(!showHide)} color="#f87171"/>
                            }
                        />
                    </section>
                    <div className="items-center p-4">
                        <button
                            className="py-2 w-full text-white font-semibold bg-theme rounded-lg"
                            disabled={false}
                            type="submit"
                            >
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="text-center mt-2 mb-6 text-sm">
                    Don't have an account yet ? <a className="font-semibold text-blue-500" href="/registrasi"> Sign up </a>
                </div>
            </div>
            <div className={styles['bg-container']}></div>
        </div>
    )
}