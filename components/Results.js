import Thumbnail from "./Thumbnail"
import FlipMove from 'react-flip-move'

const Results = ({results}) => {
  console.log(results)
  return (
    <FlipMove className="px-5 my-10 sm:grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center items-center">
      {results.map(result => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  )
}

export default Results
