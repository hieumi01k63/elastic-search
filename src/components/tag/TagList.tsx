import { useCallback } from 'react'
import { useSearchStore } from '../../zustand/searchStore'
import { Tag } from './Tag'

const TAGS_DATA = [
  {
    data: 'Languages',
    title: 'Languages',
  },
  {
    data: 'Build',
    title: 'Build',
  },
  {
    data: 'Design',
    title: 'Design',
  },
  {
    data: 'Cloud',
    title: 'Cloud',
  },
]

export const TagList = () => {
  const { search, setSearch } = useSearchStore((state) => state)

  const handleTagClick = useCallback(
    (data: string) => {
      setSearch(data)
    },
    [setSearch]
  )

  return (
    <div className="space-x-xs space-y-xs">
      {TAGS_DATA.map((item) => {
        return (
          <Tag
            data={item.data}
            title={item.title}
            key={item.data}
            handleClick={() => handleTagClick(item.data)}
            active={search === item.data}
          />
        )
      })}
    </div>
  )
}
