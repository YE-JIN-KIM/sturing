import MyPageProfileCard from '@/components/(JH)/users/MyPageProfileCard';
import MyStudyInfo from '@/components/(JH)/users/MyStudyInfo';
import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import SturingRate from '@/components/(JH)/users/SturingRate';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

type TmypageProps = {
  auth?: boolean;
  userid?: string;
  completedstudy: number;
  activestudy: number;
};

export default async function MyPage(props: TmypageProps) {
  const { auth, userid, activestudy, completedstudy } = props;
  const loginbg = `bg-gradient-to-tr from-[rgba(217,227,255,0.5)] to-[rgba(255,228,224,0.5)]`;
  const data = await (
    await fetch(`${process.env.LOCAL_URL}/api/mypage?id=${userid}`, {
      cache: 'no-store',
    })
  ).json();
  if (data === null) {
    return '아직 유저가 없습니다.';
  }

  return (
    <main className="mb-[5rem]">
      <MyPageHeader>{auth && '마이페이지'}</MyPageHeader>
      <section className={`${loginbg} px-[1.6rem] py-[2.4rem]`}>
        <MyPageProfileCard auth={auth} data={data} />
        {auth && (
          <div className="mt-[1.5rem]">
            <MyStudyInfo
              userid={userid}
              activestudy={activestudy}
              completedstudy={completedstudy}
            />
          </div>
        )}
      </section>
      <SturingRate data={data} />
      <div className="border mt-[2rem]">
        <Link href={`/users/${userid}/mystudyreview`}>
          <div className="w-full px-[1.6rem] py-[2rem] flex justify-between items-center text-headline-3 font-medium">
            <span className="flex gap-[.8rem]">
              받은 스터디 평가{' '}
              <span className="text-main-600 ">{`${
                data.numberReview ? data.numberReview : 0
              }`}</span>
            </span>
            <IoIosArrowForward />
          </div>
        </Link>
      </div>

      {!auth && (
        <div className="border-b">
          <Link href={`/users/${userid}/mystudylog`}>
            <div className="w-full px-[1.6rem] py-[2rem] flex justify-between items-center text-headline-3 font-medium">
              <span className="flex gap-[.8rem]">
                스터디 이력{' '}
                <span className="text-main-600 ">{`${completedstudy}`}</span>
              </span>
              <IoIosArrowForward />
            </div>
          </Link>
        </div>
      )}
    </main>
  );
}
