import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async (url) => {
      setIsPending(true)
      
      try {
        setError(false)
        const response = await fetch(url, {signal: controller.signal})
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const json = await response.json()
        setIsPending(false)
        setData(json)
      } 
      catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch was aborted")
        } 
        else {
          setIsPending(false)
          setError(true)
        }
      }
    }

    fetchData(url)

    return () => {
      controller.abort()
    }
  }, [url])
  
  return {data, setData, isPending, error}
}