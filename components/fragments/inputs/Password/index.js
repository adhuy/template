import { Fragment, useState } from "react";
import InputField from "../../../elements/forms/inputField";
import { IoIosEye, IoIosEyeOff, IoIosLock } from 'react-icons/io';

const Password = () => {
    const [inputPassword1, setInputPassword1] = useState('');
    const [inputPassword2, setInputPassword2] = useState('');
    const [showHide, setShowHide] = useState(false);
    
    return(
        <Fragment>
            <h1 className="text-4xl font-bold">Password</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="mt-2 p-4 lg:w-1/2">
                    <InputField
                        name="inputPassword1"
                        type="password"
                        placeholder="Input password here..."
                        onChange={(event) => setInputPassword1(event.target.value)}
                        value={inputPassword1}
                    />
                </div>
                <div className="mt-2 p-4 lg:w-1/2">
                    <InputField
                        name="inputPassword2"
                        type={showHide ? 'text' : 'password'}
                        placeholder="Input password here..."
                        onChange={(event) => setInputPassword2(event.target.value)}
                        value={inputPassword2}
                        leftIcon={<IoIosLock color="#2dd4bf"/>}
                        rightIcon={
                            showHide ?
                                <IoIosEye onClick={() => setShowHide(!showHide)} color="#2dd4bf"/>
                            :
                                <IoIosEyeOff  onClick={() => setShowHide(!showHide)} color="#f87171"/>
                        }
                    />
                </div>
            </div>
        </Fragment>
    ); 
}

export default Password;