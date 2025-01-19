import { createContext, useState } from "react";
 
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");

    const delayPara = (index,nextWord) => {
        
    }


    const onSent = async (prompt) => {

        await runChat(input)
        

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
       const response = await runChat(input)
    //    let responseArray = response.split("**");
    //    let newArray ;
    //    for (let i = 0; i < responseArray.length; i++) 
    //     {
    //         if (i === 0 || i%2 !== 1) {
                
    //         }
    //     const newArray += responseArray[i];
        
    //    }
       setResultData(response)
       setLoading(false)
       setLoading(false)
       setInput("")
    }

    


    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider