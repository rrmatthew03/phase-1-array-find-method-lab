// code your solution here

function superbowlWin(record){
      function isWinningYear(year) {
        if (year.result === "W") {
          return true
        } else {
          return false
        }
      }
  const winningYearObject = record.find(isWinningYear)
      if (winningYearObject) {
        return winningYearObject.year
      }
    }