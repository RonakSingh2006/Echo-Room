function Message({index,user,message}){
  return <div key={index} className={`flex justify-${user == message.sender ? "end" : "start" }`}>
              <div className={`my-2 ${user == message.sender ? "bg-green-700" : "bg-blue-600" } p-2 max-w-xs rounded mx-2`}>
                  <div className="flex flex-row gap-2 items-center">
                    <div>
                      <img className="h-10 w-10" src="https://avatar.iran.liara.run/public" alt="avatar" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-bold">{message.sender}</p>
                      <p>{message.content}</p>
                    </div>
                </div>
              </div>
            </div>
}

export default Message;