export const calculateStreak = (completedDates) => {
    if(!completedDates || completedDates.length === 0)
        return 0;

    let streak = 0;
    let today = new Date();

    for(let i = completedDates.length-1; i>=0; i--){
        const completed = new Date(completedDates[i]);
        const diff = Math.floor(
            (today - completed)/(1000*60*60*24)
        );

        if(diff === streak){
            streak++;
        } else{
            break;
        }
    }
    
    return streak;
}