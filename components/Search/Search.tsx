import { ChangeEventHandler } from "react"

interface ISearchProps {
  name: string;
  handler: ChangeEventHandler<HTMLInputElement>
}

const Search: React.FC<ISearchProps> = ({ name, handler }) => {
  return (
    <input
      id="search-posts"
      type="text"
      name={name}
      placeholder="Search"
      onChange={handler}
      autoComplete="off"
    >
    </input>
  )
}

export default Search