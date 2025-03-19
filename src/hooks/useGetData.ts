import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { QUERY_KEYS } from '../utils/constants'
import { fetchFunction } from '../utils/apis'
import { IResult } from '../components/result'

export const useGetData = (param: string) => {
  return useQuery<IResult[]>({
    queryKey: [QUERY_KEYS.QUERY_1, param], // Add param to the key to avoid caching conflicts
    queryFn: ({ signal }) => fetchFunction(param, signal), // pass in the signal to cancel the staled requests
    enabled: !!param, // Query only runs if `param` is truthy
    retry: false, // for the sake of testing (it's 3 by default)
    placeholderData: keepPreviousData, // persist the previous data while fetching new data. Without this, we cannot show the loading state blur effect with the old data underneath
    staleTime: 60000, // 1 minutes
  })
}
