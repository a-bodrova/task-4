import { ChangeEventHandler } from "react"

const Search: React.FC<{ handler: ChangeEventHandler<HTMLInputElement> }> = ({ handler }) => {
  return (
    <input
      id="search-posts"
      type="text"
      name="description"
      placeholder="Search"
      onChange={handler}
      autoComplete="off"
    >
    </input>
  )
}

export default Search