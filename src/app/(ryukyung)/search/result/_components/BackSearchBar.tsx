'use client';
import SearchPart from '@/app/(ryukyung)/pages/SearchPart';
import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

export default function BackSearchBar() {
  const router = useRouter();

  return (
    <div className="w-full flex items-center px-[1.2rem] ">
      <button onClick={() => router.back()} className="flex-shrink-0 ">
        <IoIosArrowBack className="w-[2.4rem] h-[2.4rem]" />
      </button>
      <div className="flex-grow max-w-[97%] mb-[1.2rem]">
        <SearchPart isList={false} />
      </div>
    </div>
  );
}
