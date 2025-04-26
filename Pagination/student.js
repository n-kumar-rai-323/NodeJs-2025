const studentNames = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Heidi",
  "Ivan",
  "Judy",
  "Kelly",
  "Liam",
];

const getStudentBatch = ({ batchNumber, batchSize }) => {
  const start = (batchNumber - 1) * batchSize;
  const end = start + batchSize;
  return studentNames.slice(start, end);
};

console.log(getStudentBatch({ batchNumber: 2, batchSize: 4 }));
