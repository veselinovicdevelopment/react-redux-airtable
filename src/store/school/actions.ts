import { createAsyncThunk } from "@reduxjs/toolkit";
import Airtable from "airtable";

import { Student, ClassMembers } from "./types";

const base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(
  "app8ZbcPx7dkpOnP0"
);

const getData: any = createAsyncThunk("getData", async (name: string) => {
  let classes: string[] = [];
  let studentIds: string[] = [];
  let students: Student[] = [];

  // Get one student record
  const studentRecord = await base("Students")
    .select({
      filterByFormula: `({Name}="${name}")`,
    })
    .all();
  if (studentRecord.length > 0) {
    classes = studentRecord[0].get("Classes") as string[];
  }

  // Get classes related to the student
  const classRecords = await base("Classes")
    .select({
      filterByFormula:
        "OR( RECORD_ID() = '" + classes.join("', RECORD_ID() = '") + "')",
      fields: ["Students"],
      view: "Grid view",
    })
    .all();

  classRecords.forEach((record) => {
    (record.get("Students") as string[]).forEach((studentId) => {
      !studentIds.includes(studentId) && studentIds.push(studentId);
    });
  });

  // Get all students belongs to related classes
  const studentRecords = await base("Students")
    .select({
      filterByFormula:
        "OR( RECORD_ID() = '" + studentIds.join("', RECORD_ID() = '") + "')",
      view: "Grid view",
    })
    .all();

  // generate students array
  studentRecords!.forEach((record) => {
    students.push({
      id: record.id,
      name: record.get("Name")?.toString() ?? "",
    });
  });

  const classMembers: ClassMembers[] = [];

  classRecords.forEach((classRecord) => {
    const classInfo: ClassMembers = {
      name: classRecord.get("Name")?.toString() ?? "",
      students: "",
    };

    const classStudents: string[] = classRecord.get("Students") as string[];
    let studentNames = "";

    classStudents.forEach((classStudent) => {
      const studentName = students.find(
        (student) => student.id === classStudent
      )?.name;
      if (studentNames !== "") studentNames += ", ";
      studentNames += studentName;
    });
    classInfo.students = studentNames;
    classMembers.push(classInfo);
  });

  return classMembers;
});

export { getData };
