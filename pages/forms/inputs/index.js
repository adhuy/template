import { useState, Fragment } from "react";
import Layout from "../../../components/Layout";
import TextField from "../../../components/fragments/inputs/TextField";
import Password from "../../../components/fragments/inputs/Password";
import InputField from "../../../components/elements/forms/inputField";
import Email from "../../../components/fragments/inputs/Email";

export default function Inputs() {
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
                        <Email />
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