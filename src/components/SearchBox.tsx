import clsx from 'clsx'
import { useCallback, useEffect, useRef, useState } from 'react'
import SearchIcon from '../assets/svgs/search-icon.svg?react'
import { useGetData } from '../hooks'
import { useSearchStore } from '../zustand/searchStore'

export const SearchBox = () => {
  const [isFocused, setIsFocused] = useState(false)
  const { search, setSearch } = useSearchStore((state) => state)
  const { error } = useGetData(search)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    },
    [setSearch]
  )

  // auto focus on mount
  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current?.focus()
    }
  }, [])

  // auto focus on error
  useEffect(() => {
    if (inputRef?.current && error) {
      inputRef.current?.focus()
    }
  }, [error])

  return (
    <div className={clsx('bg-gray p-md rounded-md relative')}>
      <div
        className={clsx(
          'absolute top-0 left-0 w-full h-full border-[3px] rounded-md transition-all duration-200 z-0',
          isFocused ? 'opacity-100' : 'opacity-0',
          error ? 'border-error' : 'border-primary'
        )}
      ></div>
      <div className="relative flex items-center gap-sm z-10">
        <SearchIcon />
        <input
          className="w-full outline-0 text-black text-regular placeholder:text-paragraph"
          placeholder="Search what technologies we are using at DC..."
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleSearch}
          value={search}
          ref={inputRef}
        />
      </div>
    </div>
  )
}
