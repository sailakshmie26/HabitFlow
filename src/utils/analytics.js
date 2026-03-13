export const getWeeklyChartData = (habits) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - 7);

  return days.map((day, index) => {
    let count = 0;

    habits.forEach((habit) => {
      habit.completedDates?.forEach((date) => {
        const d = new Date(date);

        if (d.getDay() === index) {
          count++;
        }
      });
    });
    return {
      day,
      completed: count,
    };
  });
};

export const getCompletionPercentage = (habits) => {
  let totalCompleted = 0;
  habits.forEach((habit) => {
    totalCompleted += habit.completedDates?.length || 0;
  });

  const totalPossible = habits.length * 7;

  if (totalPossible === 0) {
    return 0;
  }
  return Math.round((totalCompleted / totalPossible) * 100);
};
