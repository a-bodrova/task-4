import { IOptions } from "../interfaces/IOptions";
import { IPost } from "../interfaces/IPost";

const useFilters = (posts: IPost[], options: IOptions): { result: IPost[] } => {

  const sorteredData = posts.sort((a, b) => {
      switch (options.sort) {

        case "DESC": {
          return b.id - a.id;
        }

        case "ASC":
        default: {
          return a.id - b.id;
        }
      };
  });

  const result = sorteredData
    .filter((post) => (post[options.filter.name] as string).toLowerCase().includes(options.filter.value.toLowerCase()))
  return { result };
}

export default useFilters;