export interface Department {
  name: string;
  courses: string[];
}

export interface Course {
  name: string;
  department: string;
  subjects: string[];
}

export interface Subject {
  name: string;
  courses: string[];
  documents: string[];
}

export interface Document {
  name: string;
  url: string;
  subjects: string[];
}
