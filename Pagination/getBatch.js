const data = [
  { name: 1 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
];

const pagination = ({ page, limit }) => {
  const start = (page - 1) * limit;

  const end = start + limit;

  const name = data.slice(start, end);
  return data.slice(start, end);
};

console.log(pagination({ page: 2, limit: 4 }));
