import { useGetData } from '../../hooks'
import { useSearchStore } from '../../zustand/searchStore'

const outputContent = (size?: number) => {
  if (Number.isNaN(size) || !size) {
    return 'No results'
  }

  if (size > 1 || size === 0) {
    return `${size} results`
  }
  return `${size} result`
}

export const Footer = () => {
  const search = useSearchStore((state) => state.search)
  const { isPending, error, data } = useGetData(search)

  if (isPending) {
    return (
      <p className="text-paragraph text-base">
        {search ? 'Loading...' : 'No results'}
      </p>
    )
  }

  if (error) {
    return (
      <p className="text-error text-base">
        Something wrong happened but this is not your fault : )
      </p>
    )
  }

  return (
    <p className="text-paragraph text-base">{outputContent(data?.length)}</p>
  )
}
