import clsx from 'clsx'
import { useGetData } from '../../hooks'
import { Error } from './Error'
import { Loading } from './Loading'
import { NoResults } from './NoResults'
import { Result } from './Result'
import { useSearchStore } from '../../zustand/searchStore'
import { useEffect, useRef } from 'react'

const Container = ({
  children,
  className,
  isLoading,
}: {
  children: React.ReactNode
  className?: string
  isLoading?: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      if (isLoading) {
        ref.current.scrollTop = 0
        // prevent scrolling when loading, or else the loading indicator will be hidden in a long list of results
        ref.current.style.overflowY = 'hidden'
      } else {
        ref.current.style.overflowY = 'auto'
      }
    }
  }, [isLoading])

  return (
    <div
      ref={ref}
      className={clsx('relative overflow-y-auto flex-1', className)}
    >
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray/20 backdrop-blur-[2px]">
          <Loading />
        </div>
      )}
      {children}
    </div>
  )
}

export const ResultList = () => {
  const search = useSearchStore((state) => state.search)
  const { isPending, error, data, isPlaceholderData } = useGetData(search)
  const isLoading = (isPending || isPlaceholderData) && !!search

  if (error) {
    return (
      <Container
        isLoading={isLoading}
        className="flex justify-center items-center"
      >
        <Error />
      </Container>
    )
  }

  if (!data?.length) {
    return (
      <Container
        isLoading={isLoading}
        className="flex justify-center items-center"
      >
        <NoResults />
      </Container>
    )
  }

  return (
    <Container isLoading={isLoading} className="py-2">
      {data?.map((item, index) => {
        return <Result {...item} key={`${item.url}-${index}`} />
      })}
    </Container>
  )
}
