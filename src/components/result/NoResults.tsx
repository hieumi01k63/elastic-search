import NotFoundPng from '../../assets/pngs/404.png'

export const NoResults = () => {
  return (
    <div className="w-fit h-auto">
      <img src={NotFoundPng} alt="404" />
    </div>
  )
}
