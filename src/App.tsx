import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyTable } from './components/MyTable.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='py-5'>
      <MyTable/>

    </section>
  )
}

export default App
