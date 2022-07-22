import { Fragment, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../../../elements/forms/inputField";
import { MdEmail } from "react-icons/md";

const Email = () => {
    const [inputEmail1, setInputEmail1] = useState('');

    const formik = useFormik({
        initialValues: {
            inputEmail2: ''
        },
        validationSchema: Yup.object({
            inputEmail2: Yup.string()
            .email('Invalid email (ex: test@mail.com)')
            .required('Required')
        }),
        onSubmit: () => {
            alert("email = "+formik.values.inputEmail2);
        }
    });

    return(
        <Fragment>
            <h1 className="text-4xl font-bold">Email</h1>
            <div className="flex flex-col lg:flex-row lg:mt-2">
                <div className="p-4 lg:w-1/2">
                    <label className="text-lg">Basic Input</label>
                    <InputField
                        name="inputEmail1"
                        type="email"
                        placeholder="Input email here..."
                        onChange={(event) => setInputEmail1(event.target.value)}
                        value={inputEmail1}
                        leftIcon={<MdEmail color="#2dd4bf"/>}
                    />
                </div>
                <div className="p-4 lg:w-1/2 lg:flex">
                    <form className="contents" onSubmit={formik.handleSubmit} noValidate>
                        <div className="lg:w-4/5">
                            <label className="text-lg">Validation</label>
                            <InputField
                                name="inputEmail2"
                                type="email"
                                placeholder="Input email here..."
                                onChange={formik.handleChange}
                                value={formik.values.inputEmail2}
                                leftIcon={<MdEmail color="#2dd4bf"/>}
                                errorMessage={formik.errors.inputEmail2 ? formik.errors.inputEmail2 : null}
                            />
                        </div>
                        <div className="lg:w-1/5 lg:ml-2 mt-5 lg:mt-8">
                            <button type="submit" className="bg-primary rounded-lg p-[6px] text-[16px] text-white font-medium w-full hover:bg-blue-600">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Email;