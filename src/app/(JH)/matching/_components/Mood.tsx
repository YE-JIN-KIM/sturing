import FlexContainer from '@/components/(JH)/matching/FlexContainer';
import SelectMatching from '@/components/(JH)/matching/SelectMatching';
import { emojiLabelList } from '@/constant/emojiLabelList';

export default function Mood({ moods, onClickMood }: any) {
  console.log(moods);
  return (
    <div className="w-full px-[1.6rem] py-[2rem]">
      <section>
        <h1 className="font-black text-headline-3">웅진님이 선호하는</h1>
        <h1 className="font-black text-headline-3">
          스터디 분위기를 선택해 주세요.
        </h1>
        <p className="text-gray-700 mt-4 text-content-2">
          최대 3개까지 선택 가능합니다.
        </p>
      </section>
      <FlexContainer>
        {emojiLabelList.map((label) => (
          <SelectMatching
            key={label.title}
            type="mood"
            onClick={() => {
              onClickMood(label.title);
            }}
          >
            <img src={label.imgSrc} alt={label.imgAlt} />
            <div className="ml-2">{label.title}</div>
          </SelectMatching>
        ))}
      </FlexContainer>
    </div>
  );
}
