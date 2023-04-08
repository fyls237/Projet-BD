import React, { useState, useEffect } from 'react'

function History() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/requests')
      const data = await response.json()
      setRequests(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>Historique des requêtes passées</h2>
      <ul>
        {requests.map((request, index) => (
          <li key={index}>
            <div>
              <span>Date : {request.date}</span>
              <span>Options : {request.options}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default History
