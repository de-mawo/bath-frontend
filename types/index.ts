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



export type Course = {
  id: string;
  title: string;
  category: string;
  code: string;
  slug: string;
  progress: CourseProgress;
  possibleMarks: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  students: string[];
};

export type Modules = {
  id: string;
  title: string;
  category: string;
  code: string;
  slug: string;
  possibleMarks: number;
  tags: string[];
  courseCode: string;
  courseId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Project = {
  id: string;
  title: string;
  code: string;
  slug: string;
  tags: string[];
  description: string;
  requirements: string[];
  resources: string[];
  objectives: string[];
  startDate: Date;
  endDate: Date;
  courseCode: string;
  possibleMarks: number;
  tasks: Task[];
  createdAt: Date;
  updatedAt: Date;
};

export type Task = {
  id: string;
  title: string;
  question: string;
  markingScheme: string;
  number: number;
  requirements: string[];
  demo: string | null;
  progLang: string | null;
  possiblePoint: number;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
};

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
  MODERATOR = "MODERATOR"
}

enum EmploymentStatus {
  "EMPLOYED",
  "SEARCHING"
}
export type User = {
  id: string;
  googleId: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  role: Role;
  phone: string | null;
  github: string | null;
  linkedIn: string | null;
  discord: string | null;
  employment: EmploymentStatus;
  course: string | null;
}

export type Events = {
  id: string;
    title: string;
    course: string;
    url: string | null;
    venue: string | null;
    time: string | null;
    description: string | null;
    startDate: Date | null;
    endDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
}


export type Marks = {
  id: string;
    averageMarks: number;
    moduleTitle: string;
    moduleId: string;
    isCompleted: boolean;
    userId: string;
}