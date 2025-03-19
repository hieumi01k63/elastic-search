import { clsx } from 'clsx'
import TagFillIcon from '../../assets/svgs/tag-fill.svg?react'
import TagIcon from '../../assets/svgs/tag.svg?react'

interface IProps {
  data: string
  title: string
  active?: boolean
  Icon?: React.ReactNode
  handleClick?: () => void
}

export const Tag = ({ data, title, active, handleClick }: IProps) => {
  return (
    <button
      onClick={handleClick}
      data-tag={data}
      className={clsx(
        'inline-flex gap-1 text-primary font-semibold bg-gray rounded-lg py-xss px-xs cursor-pointer hover:bg-primary hover:text-white transition-colors ease-in-out duration-100 outline-primary focus-visible:outline-2 group',
        active && 'bg-primary text-white'
      )}
    >
      {active ? (
        <TagIcon />
      ) : (
        <TagFillIcon className="group-hover:fill-white" />
      )}
      {title}
    </button>
  )
}
