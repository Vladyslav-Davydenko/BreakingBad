import { useEffect, useState } from 'react'
import '../App.css'
import { breakify } from '../helper/breakify'
import BreakingBadLogo from './BreakingBadLogo'

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [first, setFirst] = useState(["", "", ""])
  const [last, setLast] = useState(["", "", ""])

  useEffect(() => {
    setFirst(breakify(firstName))
  }, [firstName])

  useEffect(() => {
    setLast(breakify(lastName))
  }, [lastName])

  return (
    <div className='app'>
      <div className="content">
        <div className="row-letters">
          <BreakingBadLogo str={first}/>
          <BreakingBadLogo str={last}/>
        </div>
        <div className="row">
          <div className="col">
            <label >First Name</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="col">
          <label >Last Name</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
        </div>
        <button>Breakify</button>
      </div>
     
    </div>
  )
}

export default App
