const students = [
    { id: 1, name: "Alice Johnson", course: "Math", email: "alice.j@example.com" },
    { id: 2, name: "Bob Smith", course: "Science", email: "bob.s@example.com" },
    { id: 3, name: "Charlie Evans", course: "Computer Science", email: "charlie.e@example.com" },
    { id: 4, name: "Diana White", course: "English", email: "diana.w@example.com" },
    { id: 5, name: "Ethan Patel", course: "Math", email: "ethan.p@example.com" },
    { id: 6, name: "Fiona Green", course: "Biology", email: "fiona.g@example.com" },
    { id: 7, name: "George Brown", course: "Chemistry", email: "george.b@example.com" },
    { id: 8, name: "Hannah Davis", course: "History", email: "hannah.d@example.com" },
    { id: 9, name: "Ian Wilson", course: "Computer Science", email: "ian.w@example.com" },
    { id: 10, name: "Jasmine Lee", course: "Science", email: "jasmine.l@example.com" },
    { id: 11, name: "Kevin Turner", course: "Math", email: "kevin.t@example.com" },
    { id: 12, name: "Laura Adams", course: "English", email: "laura.a@example.com" },
    { id: 13, name: "Michael Clark", course: "Physics", email: "michael.c@example.com" },
    { id: 14, name: "Nina Kim", course: "Biology", email: "nina.k@example.com" },
    { id: 15, name: "Oliver Scott", course: "Chemistry", email: "oliver.s@example.com" },
  ];
  
  
  export const fetchStudents = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(students);
      }, 1000); 
    });
  