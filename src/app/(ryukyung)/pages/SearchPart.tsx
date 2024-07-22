'use client';

import SearchInput from '@/components/common/SearchInput';
import CurrentSearch from '@/components/search/CurrentSearch';
import useLocalStorage from '@/utils/useLocalStorage';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SearchPartProps {
  isList: boolean;
}

export default function SearchPart({ isList }: SearchPartProps) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>('');
  const [recentSearches, addSearchToLocalStorage, removeFromLocal, clearLocal] =
    useLocalStorage<string[]>('recent', []);

  const onSearch = () => {
    if (recentSearches.includes(inputValue)) {
      setInputValue('');
      router.push(`/search/result?keyword=${inputValue}`);
      return;
    }
    if (inputValue.trim() !== '') {
      addSearchToLocalStorage(inputValue);
      setInputValue('');
      router.push(`/search/result?keyword=${inputValue}`);
    }
  };

  const onRemove = (search: string) => {
    removeFromLocal(search);
  };

  const onClear = () => {
    clearLocal();
  };

  const onInputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="px-[1.6rem] mt-[2.4rem]">
      <SearchInput
        placeholderText="관심 스터디 분야나 강의명을 검색해 보세요"
        value={inputValue}
        changeHandler={onInputKeyword}
        localsave={onSearch}
      />
      {isList && (
        <CurrentSearch
          data={recentSearches}
          remove={onRemove}
          clear={onClear}
        />
      )}
    </section>
  );
}
