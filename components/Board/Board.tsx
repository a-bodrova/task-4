import React, { useState, ChangeEventHandler } from 'react';
import styles from '../../styles/Board.module.css';
import * as options from '../../data/sortingOptions.json'; 
import { IPost } from '../../interfaces/IPost';
import { IOptions } from '../../interfaces/IOptions';
import { SortType } from '../../interfaces/SortType';
import Card from '../Card/Card';
import Search from '../Search/Search';
import SortingSelect from '../SortingSelect/SortingSelect';
import useFilters from '../../hooks/useFilters';

const Board: React.FC<{ cards: IPost[] }> = ({ cards }) => {
  const [filters, setFilters] = useState<IOptions>({
    filter: {
      name: 'description',
      value: '',
    },
    sort: "ASC"
  });

  const { result } = useFilters(cards, filters);

  const handleFilter: ChangeEventHandler<HTMLSelectElement | HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'sort': {
        setFilters({
          ...filters,
          [name]: value as SortType
        });
        break;
      }
      
      case 'description': {
        setFilters({
          ...filters,
          filter: {
            name: 'description',
            value
          }
        });

        break;
      }

      default: {
        break;
      }
    };
  }

  return (
    <section className={styles.board}>
      <div className={styles.board__sort_items} >
        <SortingSelect name="sort" options={Array.from(options)} handler={handleFilter} />
        <Search name="description" handler={handleFilter} />
      </div>
      <div className={styles.cards}>
        {
          result.map((post) => <Card post={post} key={post.id} />)
        }
      </div>
    </section>
  )
}

export default Board
