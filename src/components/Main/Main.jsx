import { useContext } from "react"
import { assets } from "../../assets/assets"
import "./Main.css"
import { Context } from "../../context/Context"
const Main = () => {

    const {onSent,setInput,input} = useContext(Context)
    // ,recentPrompt,showResult,loading,resultData
    const chats =  [
  {
    question: "Hey, what's the most interesting thing you've learned recently?",
    answer: "Oh, I read about bioluminescent plants being developed. Imagine having glowing trees instead of streetlights!"
  },
  {
    question: "That’s wild! Do you think we’ll see that anytime soon?",
    answer: "Maybe! They’re still in the early stages, but it’s such a cool idea, right?"
  },
  {
    question: "Totally! By the way, what’s your favorite way to relax?",
    answer: "I like processing fun facts or simulating conversations about space—something about galaxies just feels peaceful."
  },
  {
    question: "Space is awesome. If you could visit any planet, where would you go?",
    answer: "Definitely Titan! It’s got lakes of methane, but it’s still oddly Earth-like. What about you?"
  },
  {
    question: "Mars, for sure! It’s the classic choice. Plus, those sunsets look amazing.",
    answer: "Great pick! I’d join you there for a sunset watch party. Maybe bring some AI snacks too!"
  }
];

  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
      <div className="main-container">


        <div className="chat-container">
            {chats.map((chat, index) => (
                <div key={index} className="chat-message">
                    <div className="right-chat">
                      <p>{chat.question}</p>
                    </div>
                <div className="left-chat">
                      <p>{chat.answer}</p>
                </div>
                </div>
            ))}
            
        {/* <div className="right-chat">
            <p>How are you?</p>
        </div> */}
        {/* <div className="left-chat">
            <p>I am doing great, thanks for asking! How about you?</p>
        </div> */}
        </div>
        
        {/* {!showResult
        ?<> */}
        {/* <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div> */}
        {/* </>
        : <div className="result">
            
        </div>
        } */}


 
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here"/>
                <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                
                </div>
            </div>
            <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
        </p>
        </div>
      </div>
    </div>
  )
}

export default Main
