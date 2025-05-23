const dailyVisits = [
  120,
  150,
  135,
  160,
  140,
  170,
  155, // Week 1
  180,
  190,
  200,
  175,
  165,
  210,
  195, // Week 2
  220,
  230,
  240,
  215,
  205,
  250,
  235, // Week 3
  260,
  270,
  280,
  255,
  245,
  290,
  275, // Week 4
];

const getWeeklyVisit = ({ weekNumber }) => {
  const daysPerWeek = 7;
  const start = (weekNumber - 1) * daysPerWeek;
  const end = start + daysPerWeek;
  return dailyVisits.slice(start, end);
};

console.log(getWeeklyVisit({ weekNumber: 4 }));
