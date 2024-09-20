import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className="text-3xl font-bold underline bg-green-600">
      Hello world!
    </h1>
    </>
  )
}

export default App
