import { Fragment, useState } from "react";
import InputField from "../../../elements/forms/inputField";
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

const Password = () => {
    const [inputPassword, setInputPassword] = useState('');
    const [showHide, setShowHide] = useState(false);
    
    return(
        <Fragment>
            <h1 className="text-4xl font-bold">Password</h1>
            <div className="mt-2 p-4 lg:w-1/2">
                <InputField 
                    name="inputPassword"
                    type={showHide ? 'text' : 'password'}
                    placeholder="Input password here..."
                    onChange={(event) => setInputPassword(event.target.value)}
                    value={inputPassword}
                    rightIcon={
                        showHide ?
                            <IoIosEye onClick={() => setShowHide(!showHide)} color="#2dd4bf"/>
                        :
                            <IoIosEyeOff  onClick={() => setShowHide(!showHide)} color="#f87171"/>
                    }
                />
            </div>
        </Fragment>
    ); 
}

export default Password;