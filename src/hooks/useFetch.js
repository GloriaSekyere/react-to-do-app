import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async (url) => {
      setIsPending(true)
      
      try {
        setError(false)
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const json = await response.json()
        setIsPending(false)
        setData(json)
      } 
      catch (err) {
        console.log(err.message)
        setError(true)
      }
      
      setIsPending(false)
    }

    fetchData(url)
  }, [url])

  return {data, isPending, error}
}