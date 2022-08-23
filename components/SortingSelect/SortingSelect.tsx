import { ChangeEventHandler } from "react";

interface ISortingSelectProps {
  name: string;
  options: string[];
  handler: ChangeEventHandler<HTMLSelectElement>;
}

const SortingSelect: React.FC<ISortingSelectProps> = ({ name, options, handler }) => {

  return ( 
    <select id="sort-posts" name={name} onChange={handler}>
      {options.map(option => <option value={option} key={option}>{option}</option>)}
    </select>
  )
}

export default SortingSelect