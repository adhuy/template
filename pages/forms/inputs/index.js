import { useState, Fragment } from "react";
import Layout from "../../../components/Layout";
import TextField from "../../../components/fragments/inputs/TextField";
import Password from "../../../components/fragments/inputs/Password";
import InputField from "../../../components/elements/forms/inputField";
import { MdEmail } from "react-icons/md";

export default function Inputs() {
    const [inputEmail, setInputEmail] = useState('');
    const [inputNumber, setInputNumber] = useState('');
    
    return (
        <Layout>
            <Fragment>
                <div className="p-4 bg-white rounded-lg w-full h-[88vh] text-2xl overflow-auto text-justify">
                    <section className="mt-2 mb-6">
                        <TextField />
                    </section>

                    <section className="mt-2 mb-6">
                        <Password />
                    </section>

                    <section className="mt-2 mb-6">
                        <h1 className="text-4xl font-bold">Email</h1>
                        <div className="mt-2 p-4 lg:w-1/2 lg:flex">
                            <div className="lg:w-4/5">
                                <InputField 
                                    name="inputEmail"
                                    type="email"
                                    placeholder="Input email here..."
                                    onChange={(event) => setInputEmail(event.target.value)}
                                    value={inputEmail}
                                    leftIcon={<MdEmail color="#2dd4bf"/>}
                                />
                            </div> 
                            <span className="lg:w-1/5 lg:ml-2">
                                <button type="button" className="bg-primary rounded-lg p-[6px] text-[16px] text-white font-medium w-full">Button</button>
                            </span>
                        </div>
                    </section>

                    <section className="mt-2 mb-6">
                        <h1 className="text-4xl font-bold">Number</h1>
                        <div className="mt-2 p-4 lg:w-1/2">
                            <InputField 
                                name="inputNumber"
                                type="number"
                                placeholder="Input number here..."
                                onChange={(event) => setInputNumber(event.target.value)}
                                value={inputNumber}
                            />
                        </div>
                    </section>
                </div>
            </Fragment>
        </Layout>
    )
}