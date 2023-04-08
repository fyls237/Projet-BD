import React, { useContext, useState } from "react"
import { AppContext } from "../component/AppContext"
import { useHistory } from "react-router"

const Home = () => {
  const { executeScan, loading } = useContext(AppContext)
  const [options, setoptions] = useState('')
  const history = useHistory

  const handleSumit = async (event) => {
    event.preventDefault()
    const taskId = await executeScan(options)
    history.push(` /scan/${taskId}`)
    
  }

  const handleChange = (event) => {
    setoptions(event.target.value)
  }

  return (
    <div>
      <h1>Interface de requête</h1>
      <form onSubmit={handleSumit}>
        <label>
          Options Nmap :
          <input type="text" value={options} onChange={(e) => setOptions(e.target.value)} />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'En cours...' : 'Lancer la requête'}
        </button>
      </form>
    </div>
  )
}

export default Home