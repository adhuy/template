import { Fragment, useState } from "react";
import InputField from "../../../elements/forms/inputField";

const TextField = () => {
    const [inputText, setInputText] = useState('');
    const [inputFLoatText, setFloatText] = useState('');

    return(
        <Fragment>
            <h1 className="text-4xl font-bold">Text</h1>
            <div className="flex flex-col lg:flex-row lg:mt-2">
                <div className="mt-2 p-4 lg:w-1/2">
                    <InputField 
                        name="inputText"
                        type="text"
                        placeholder="Input text here..."
                        onChange={(event) => setInputText(event.target.value)}
                        value={inputText}
                    />
                </div>
                <div className="mt-2 p-4 lg:w-1/2">
                    <InputField 
                        name="floatText"
                        type="text"
                        placeholder="Input text here..."
                        onChange={(event) => setFloatText(event.target.value)}
                        value={inputFLoatText}
                        floatMode={true}
                        floatLabel="Username"
                    />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="mt-2 p-4 lg:w-1/2">
                    <InputField 
                        name="readOnly"
                        type="text"
                        placeholder="Text Readonly"
                        value="Readonly"
                        readOnly={true}
                    />
                </div>
                <div className="mt-2 p-4 lg:w-1/2">
                    <InputField 
                        name="disabled"
                        type="text"
                        placeholder="Text disabled"
                        value="Disabled"
                        disabled={true}
                    />
                </div>
            </div>
        </Fragment>
    ); 
}

export default TextField;