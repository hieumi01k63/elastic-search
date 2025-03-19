/**
 * Fetches the API with a given search string, AbortSignal and timeout (optional).
 *
 * If the search string is empty, returns null without making a request.
 *
 * If the request takes longer than the given timeout (default 10000ms), aborts the request.
 *
 * @param search - The search string to query the API with
 * @param signal - The AbortSignal from React Query to use for cancellation
 * @param timeout - The timeout in ms (default 10000ms, reduce this to test timeout handling)
 * @returns The response JSON or null if the search string is empty
 */
export const fetchFunction = async (
  search: string,
  signal: AbortSignal,
  timeout = 10000
) => {
  if (!search) {
    return null
  }
  // change no-throttling to false for testing error handling (this URL should be placed in an env file, but we're just using it here for testing)
  const url = `https://frontend-test-api.digitalcreative.cn/?no-throttling=true&search=${encodeURIComponent(
    search
  )}`

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  // Combine React Query's signal with our timeout signal
  const combinedSignal = new AbortController()
  signal.addEventListener('abort', () => combinedSignal.abort()) // React Query cancels this
  controller.signal.addEventListener('abort', () => combinedSignal.abort()) // Timeout cancels this

  try {
    const response = await fetch(url, { signal: combinedSignal.signal })

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`)
    }

    return response.json()
  } finally {
    clearTimeout(timeoutId) // Cleanup to avoid memory leaks
  }
}
