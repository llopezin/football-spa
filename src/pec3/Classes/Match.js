export default class Match {
  constructor(data) {
    const {
      matchday,
      date,
      homeTeamId,
      homeTeam,
      awayTeamId,
      awayTeam,
      homeScore,
      awayScore
    } = data;

    this.matchDay = matchday;
    this.date = date;
    this.homeTeam = homeTeam;
    this.homeTeamId = homeTeamId;
    this.awayTeam = awayTeam;
    this.awayTeamId = awayTeamId;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
  }

  getMatchDay() {
    return this.matchDay;
  }

  logData() {
    console.log(
      `${this.homeTeam} ${this.homeScore} - ${this.awayScore} ${this.awayTeam}`
    );
  }

  renderData() {
    return `${this.homeTeam} ${this.homeScore} - ${this.awayScore} ${this.awayTeam}`
  }
}
