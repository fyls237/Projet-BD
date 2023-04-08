import React, { createContext, useState } from 'react'


export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [error, setError] = useState(null)

  const handleScan = async (options) => {
    try {
      const response = await fetch('/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ options }),
      })
      const data = await response.json()
      setResults(data)
      setError(null)
      console.log('Requête Nmap exécutée avec succès :', data)
    } catch (err) {
      setError("Erreur lors de l'execution de la requete")
      console.error('Erreur lors de l\'execution de la requete:', err)
    }
  }

  return (
    <AppContext.Provider value={{ results, error, handleScan }}>
      {children}
    </AppContext.Provider>
  )
}
