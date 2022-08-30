import { useMemo, useRef } from 'react';
import { IOptions } from "../interfaces/IOptions";
import { IPost } from "../interfaces/IPost";

const useFilters = (posts: IPost[], options: IOptions): { result: IPost[] } => {
  const refData = useRef<IPost[]>(posts);

  refData.current = useMemo(() => {
    return refData.current.filter((post) => (post[options.filter.name] as string)
      .toLowerCase()
      .includes(options.filter.value.toLowerCase()));
  }, [options.filter.name, options.filter.value]);

    useMemo(() => {
      switch (options.sort) {

        case "DESC": {
          refData.current.sort((a, b) => b.id - a.id);
          break;
        }

        case "ASC":
        default: {
          refData.current.sort((a, b) => a.id - b.id);
          break;
        }

  }}, [options.sort]);

  return { result: refData.current };

  // const data = useMemo(() => {
  //   return posts.filter((post) => (post[options.filter.name] as string)
  //     .toLowerCase()
  //     .includes(options.filter.value.toLowerCase()));
  // }, [posts, options.filter]);

//   useMemo(() => {
//     switch (options.sort) {

//       case "DESC": {
//         data.sort((a, b) => b.id - a.id);
//         break;
//       }

//       case "ASC":
//       default: {
//         data.sort((a, b) => a.id - b.id);
//         break;
//       }
// }}, [data, options.sort]);

  // return { result: data };
}

export default useFilters;