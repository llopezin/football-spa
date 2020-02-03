import { createTable } from "../utils/createTables";
import { contentDiv } from "../utils/elements";
import { hideSpinner } from "../utils/interaction";


const TYPES = { total: "TOTAL", home: "HOME", away: "AWAY" };

export default class Standings {
  constructor(data) {
    const { competitionName, currentMatchday, total, home, away } = data;

    this.competitionName = competitionName;
    this.currentMatchday = currentMatchday;
    this.standings = {
      [TYPES.total]: {
        label: "Total standings",
        data: total
      },
      [TYPES.home]: {
        label: "Home standings",
        data: home
      },
      [TYPES.away]: {
        label: "Away standings",
        data: away
      }
    };
  }

  getTypes() {
    return Object.values(TYPES);
  }

  logData() {
    console.log(`${this.competitionName}, jornada ${this.currentMatchday}`);

    for (const standingType in this.standings) {
      const { label, data } = this.standings[standingType];

      console.log(label);
      console.table(data);
    }
  }

  loadContent() {


    const container = document.createElement('div')
    container.setAttribute('id', 'container')

    const table = createTable('RANK', 'TEAM', 'PLAYED GAMES', 'WON', 'LOST', 'DRAW', 'GOALS FOR', 'GOALS AGAINST')
    const header = document.createElement('h2')
    header.textContent = 'Total Standings'

    this.standings.TOTAL.data.forEach(team => {

      const row = document.createElement('tr')

      const rank = document.createElement('td');
      const teamName = document.createElement('td');
      const playedGames = document.createElement('td');
      const won = document.createElement('td');
      const lost = document.createElement('td');
      const draw = document.createElement('td');
      const goalsFor = document.createElement('td');
      const goalsAgainst = document.createElement('td');

      rank.textContent = team.position;
      teamName.textContent = team.team;
      teamName.dataset.teamId = team.teamId;
      playedGames.textContent = team.playedGames;
      won.textContent = team.won;
      lost.textContent = team.lost;
      draw.textContent = team.draw;
      goalsFor.textContent = team.goalsFor;
      goalsAgainst.textContent = team.goalsAgainst;


      row.appendChild(rank)
      row.appendChild(teamName)
      row.appendChild(playedGames)
      row.appendChild(won)
      row.appendChild(lost)
      row.appendChild(draw)
      row.appendChild(goalsFor)
      row.appendChild(goalsAgainst)


      table.appendChild(row)
      table.setAttribute('class', 'standings')

    });
    container.appendChild(header)
    container.appendChild(table)
    return container

  }

  renderData() {
    contentDiv.appendChild(this.loadContent())
    hideSpinner('.standings')
  }



}
