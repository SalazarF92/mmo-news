import Fuse from 'fuse.js';
import { useMemo, useState } from 'react';

// export interface IFuzzyClient<T> {
//   keyword: string;
//   result: T[];
//   resetSearch: () => void;
//   search: (keyword: string) => void;
// }

export default function useFuzzy(data, options) {
  const [keyword, setKeyword] = useState('');
  const resetSearch = () => setKeyword('');

  const searcher = useMemo(() => {
    const defaultOptions = { tokenize: true, threshold: 0.05 };

    return new Fuse(data, { ...defaultOptions, ...options });
  }, [data, options]);

  const result = keyword ? searcher.search(keyword).map((res) => res.item) : data;

  return {
    keyword,
    resetSearch,
    result,
    search: setKeyword,
  };
}
