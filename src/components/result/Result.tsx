import React, { useCallback } from 'react'
import ArrowUpperRightIcon from '../../assets/svgs/arrow-upper-right.svg?react'
import { subString } from '../../utils/commons'

export interface IResult {
  category: string
  description: string
  image: string
  title: string
  url: string
}

export const Result = React.memo(
  ({ title, description, image, url }: IResult) => {
    const handleClick = useCallback(() => {
      window.open(url, '_blank')
    }, [url])

    return (
      <button
        onClick={handleClick}
        className="w-[97%] mx-auto rounded-md bg-white py-12 px-sm space-y-10 cursor-pointer hover:bg-gray transition-colors duration-200 grid grid-cols-7 gap-sm outline-primary focus-visible:outline-2 group"
      >
        <div>
          <img
            src={image}
            alt={title}
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="col-span-5 space-y-8 text-left">
          <h2 className="text-black text-regular">{title}</h2>
          <p className="text-paragraph text-base">
            {subString(description, 100)}
          </p>
        </div>
        <div className="flex justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowUpperRightIcon />
        </div>
      </button>
    )
  }
)
