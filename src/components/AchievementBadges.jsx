import { useSelector } from "react-redux"

const AchievementBadges = () => {
    const habits = useSelector(state => state.habits.habits)

    let totalCompletions = 0
    let maxStreak = 0

    habits.forEach(habit => {
        totalCompletions += habit.completedDates?.length || 0
        if(habit.streak > maxStreak){
            maxStreak = habit.streak
        }
    })

    const badges = []
    if(maxStreak >= 3)badges.push("🔥3 Day Streak!")
    if(maxStreak >= 7)badges.push("💪7 Day Warrior!")
    if(totalCompletions >= 20)badges.push("🏆20 Completions!")
    if(totalCompletions >= 50)badges.push("👑Habit Master!")
  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
    <h2 className="font-bold text-lg mb-3 text-purple-900">
    Achievements
    </h2>
    {
     badges.length === 0? (
       <p className="text-gray-500">       
        No badges yet.
       </p>
     ) : (
        <div className="flex flex-wrap gap-2">
        {
          badges.map((badge, index) => (
          <span 
          key={index} 
          className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm">
          {badge}
          </span>
          ))
        }
        </div>
     )
    }
      
    </div>
  )
}

export default AchievementBadges
