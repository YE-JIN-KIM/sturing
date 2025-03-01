export type TStudyInfo = {
  _id: string;
  leaderId: string;
  studyImage: string;
  studyName: string;
  studyContent: string;
  studyType: string;
  studyLevel: string;
  studyMember: number;
  studyJoinMember: number;
  studyLecture: string;
  studyCategory: string;
  studyViews: number;
  studyDeadline?: string;
  studyStart: string;
  studyEnd: string;
  studyPlace: string;
  studyMeetings: string;
  studyMood: string[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};
