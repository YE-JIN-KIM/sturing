import { TStudy } from '@/types/TStudy';
import Card from './Card';
import ScrollableContainer from './ScrollableContainer';

// 날짜 형식을 바꾸는 함수
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}.${day}`;
};

export default async function StudyCardList({
  sort,
  userId,
}: {
  sort?: string;
  userId?: string;
}) {
  let url = `${process.env.LOCAL_URL}/api/study?sort=${sort}`;
  if (userId) {
    url += `&userId=${userId}`;
  }

  const studies: TStudy[] = await (
    await fetch(url, {
      cache: 'no-store',
    })
  ).json();

  return (
    <ScrollableContainer>
      {studies &&
        studies.map((study) => (
          <li key={study.studyId}>
            <Card
              studyId={study.studyId}
              studyImage={study.studyImage}
              studyMeetings={study.studyMeetings}
              studyType={study.studyType}
              studyCategory={study.studyCategory}
              studyName={study.studyName}
              studyStart={formatDate(study.studyStart)}
              studyEnd={formatDate(study.studyEnd)}
              studyPlace={study.studyPlace}
              studyJoinMember={study.studyJoinMember}
              studyMember={study.studyMember}
            />
          </li>
        ))}
    </ScrollableContainer>
  );
}
