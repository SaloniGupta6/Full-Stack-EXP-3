import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
  } from "@mui/material";
  
  const students = [
    { id: 1, roll: "101", name: "Rahul Kumar", grade: "A" },
    { id: 2, roll: "102", name: "Priya Sharma", grade: "A+" },
    { id: 3, roll: "103", name: "Aman Verma", grade: "B+" },
  ];
  
  export default function StudentTable() {
    return (
      <>
        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Student Records
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Roll No</strong></TableCell>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Grade</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id} hover>
                  <TableCell>{student.roll}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
  