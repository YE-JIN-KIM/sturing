type TLecutreStudyInfoProps = {
  lectureInstructor: string;
  lectureDescription: string;
};

export default function LectureStudyInfo(props: TLecutreStudyInfoProps) {
  const { lectureInstructor, lectureDescription } = props;
  return (
    <div className="flex flex-col gap-y-[1.2rem] mx-[1.6rem] justify-between">
      <div className="flex flex-row text-content-1">
        <div className="mr-[0.7rem]">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M16.6883 6.79245V12.2074C16.6883 13.0941 16.2133 13.9175 15.4454 14.3687L10.7429 17.0841C9.97496 17.5274 9.02496 17.5274 8.24913 17.0841L3.54663 14.3687C2.77871 13.9254 2.30371 13.102 2.30371 12.2074V6.79245C2.30371 5.90578 2.77871 5.08241 3.54663 4.63116L8.24913 1.91575C9.01704 1.47242 9.96704 1.47242 10.7429 1.91575L15.4454 4.63116C16.2133 5.08241 16.6883 5.89786 16.6883 6.79245Z"
              fill="#4171FF"
            />
            <path
              d="M9.5001 9.49994C10.5188 9.49994 11.3447 8.67407 11.3447 7.65534C11.3447 6.6366 10.5188 5.81079 9.5001 5.81079C8.48137 5.81079 7.65552 6.6366 7.65552 7.65534C7.65552 8.67407 8.48137 9.49994 9.5001 9.49994Z"
              fill="#4171FF"
            />
            <path
              d="M11.6218 13.1892C12.263 13.1892 12.6351 12.4767 12.2788 11.9463C11.7405 11.1467 10.6955 10.6084 9.50009 10.6084C8.30467 10.6084 7.25967 11.1467 6.72134 11.9463C6.36509 12.4767 6.73717 13.1892 7.37842 13.1892H11.6218Z"
              fill="#4171FF"
            />
          </svg>
        </div>
        <span className="min-w-[7rem]">강사 </span>{' '}
        <span>{lectureInstructor}</span>
      </div>
      <div className="flex flex-row text-content-1">
        <div className="mr-[0.7rem]">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.34925 3.65747H5.52591C4.26716 3.65747 3.7605 4.13247 3.7605 5.3358V14.7408H8.11466V5.3358C8.10675 4.13247 7.60008 3.65747 6.34925 3.65747Z"
              fill="#4171FF"
            />
            <path
              opacity="0.4"
              d="M13.0783 7.61572H12.2549C10.9962 7.61572 10.4895 8.09864 10.4895 9.29406V14.7407H14.8437V9.29406C14.8437 8.09864 14.3291 7.61572 13.0783 7.61572Z"
              fill="#4171FF"
            />
            <path
              d="M2.177 14.155H16.8228C17.1474 14.155 17.4166 14.4242 17.4166 14.7488C17.4166 15.0734 17.1474 15.3425 16.8228 15.3425H2.177C1.85242 15.3425 1.58325 15.0734 1.58325 14.7409C1.58325 14.4084 1.85242 14.155 2.177 14.155Z"
              fill="#4171FF"
            />
          </svg>
        </div>
        <span className="min-w-[7rem]">강의 설명</span>
        <span className="">{lectureDescription}</span>
      </div>
    </div>
  );
}
