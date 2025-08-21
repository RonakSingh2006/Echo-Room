import { IoMdSend } from "react-icons/io";
import { CgAttachment } from "react-icons/cg";
import { useRef, useState } from "react";
import Message from "./Message";

function Chat(){

  const [message,setMessage] = useState([
    {
      content : "Hello I am ROnak",
      sender : "Ronak"
    },
    {
      content : "Hello I am ROnak",
      sender : "Ron"
    },
    {
      content : "Hello I am ROnak",
      sender : "Ronak"
    }
  ]);
  const [input,setInput] = useState("");
  const inputRef = useRef();
  const chatBoxRef = useRef();
  const [stompClinet,setStompClient] = useState();
  const [roomId,setRoomId] = useState();
  const [currUser, setCurrUser] = useState("Ronak");

  return <div>
    {/* Header  */}
    <header className="py-5 fixed w-full dark:bg-gray-900 shadow flex justify-around">
      {/* room name container  */}
      <div>
        <h1 className="text-3xl font-semibold">
          Room : <span>Family Room</span> 
        </h1>
      </div>

      {/* user name container  */}
      <div>
        <h1 className="text-3xl font-semibold">
          User : <span>Ronak Singh</span> 
        </h1>
      </div>

      {/* leave btn  */}
      <div>
        <button className="dark:bg-red-500 hover:bg-red-800 px-3 py-2 rounded-lg">Leave Room</button>
      </div>

    </header>

    {/* main  */}
    <main className="py-20 w-2/3 dark:bg-slate-800 h-screen overflow-auto mx-auto">
      <div className="message-container">
        {message.map((message,index)=><Message index={index} user={currUser} message={message}/>)}
      </div>
    </main>

    {/* input message  */}
    <div className="fixed bottom-2 w-full h-16">
      <div className="h-full w-1/2 mx-auto rounded flex gap-5 items-center">
      
       <input type="text" placeholder="Type your message here..." className="w-full dark:bg-gray-900 border dark:border-gray-700 px-3 py-2 h-full focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"/>

       <button className="dark:bg-purple-600 h-13 w-15 flex rounded-full justify-center items-center"><CgAttachment /></button>

        <button className="dark:bg-green-600 h-13 w-15 flex rounded-full justify-center items-center"><IoMdSend size={25}/></button>
      </div>
    </div>
    
  </div>
}
export default Chat;