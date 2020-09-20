import mongoose from "mongoose";

export * from "./utils";

export interface IUser extends mongoose.Document {
  name: string;
  username: string;
  password: string;
  email?: string;
}

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
