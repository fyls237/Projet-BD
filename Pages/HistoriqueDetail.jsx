import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function HistoryDetail () {
  const { id } = useParams()
  const [data, setData] = useState
  
  useEffect(() => {
    async function fetchData() {
      const reponse = await fetch(`/history/${id}`)
      const data = await reponse.json();
      setData(data)
    }
    fetchData()

  }, [id])
  return (
    <div>
      <h2>Détails de la requête</h2>
      <p>Options : {data.options}</p>
      <p>Résultats :</p>
      <pre>{data.results}</pre>
    </div>
  )
}

export default HistoryDetail