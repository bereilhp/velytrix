"use client"

import { useState } from "react"
import { ClipLoader } from "react-spinners"
import styles from "./ApiClient.module.css"

const ApiClient = () => {
  const [url, setUrl] = useState("")
  const [method, setMethod] = useState("GET")
  const [body, setBody] = useState("")
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const options = {
        method: method,
        headers: { "Content-Type": "application/json" },
        body:
          method !== "GET" && body ? JSON.stringify(JSON.parse(body)) : null,
      }

      const res = await fetch(url, options)
      const data = await res.json()

      if (!res.ok) throw new Error(data.message || "Something went wrong")

      setResponse(data)
      setError(null)
    } catch (err) {
      setError(err.message)
      setResponse(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Velytrix - API Client</h1>

      <input
        className={styles.inputField}
        type="text"
        placeholder="Enter API URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <select
        className={styles.selectMethod}
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>

      {(method === "POST" || method === "PUT") && (
        <textarea
          className={styles.textareaField}
          placeholder="Request Body (JSON format)"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      )}

      <button
        className={styles.button}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ClipLoader size={24} color={"#fff"} loading={loading} />
        ) : (
          "Send Request"
        )}
      </button>

      {error && <p className={styles.error}>Error: {error}</p>}

      {response && (
        <div className={styles.responseContainer}>
          <h2>Response</h2>
          <pre className={styles.response}>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

export default ApiClient
