import { Card, SearchBox } from './components'
import { Footer } from './components/result/Footer'
import { ResultList } from './components/result'
import { TagList } from './components/tag'

function App() {
  return (
    <Card>
      <div className="p-md flex flex-col gap-sm w-[90vw] h-[90vh] lg:w-[690px] lg:h-[600px]">
        <SearchBox />
        <TagList />
        <ResultList />
      </div>
      <div className="px-md py-xs border-t border-gray">
        <Footer />
      </div>
    </Card>
  )
}

export default App
