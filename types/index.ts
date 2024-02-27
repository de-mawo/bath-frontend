export type UserSession = {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
};

enum CourseProgress {
  "INPROGRESS",
  "SUSPENDED",
  "COMPLETED",
}


export type Course =  {
  id: string;
  title: string;
  category: string;
  code: string;
  slug: string;
  progress: CourseProgress
  possibleMarks: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  students: string[];
}