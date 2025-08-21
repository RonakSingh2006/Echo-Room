function JoinCreateChat(){
  return <div className="min-h-screen flex items-center justify-center">
    <div className="p-8 w-full max-w-md dark:bg-gray-900 shadow rounded flex flex-col gap-5">
      <h1 className="text-2xl font-semibold text-center">Join Room / Create Room ..</h1>

      {/* name div  */}
      <div>
        <label htmlFor="name" className="block font-medium mb-2">Your Name</label>
        <input type="text" id="name" className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      {/* room Id div  */}
      <div>
        <label htmlFor="room-id" className="block font-medium mb-2">Room ID</label>
        <input type="text" id="room-id" className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      {/* buttons  */}
      <div className="flex justify-around mt-5">
        <button className="px-3 py-2 dark:bg-green-500 hover:bg-green-800 rounded-lg">Join Room</button>
        <button className="px-3 py-2 dark:bg-blue-500 hover:bg-blue-800 rounded-lg">Create Room</button>
      </div>

    </div>
  </div>
}

export default JoinCreateChat;