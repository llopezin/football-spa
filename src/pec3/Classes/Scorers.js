import { scorersDiv } from "../utils/elements";
import { createTable } from "../utils/createTables";
import { hideSpinner } from "../utils/interaction";


export default class Scorers {
  constructor(data) {
    this.scorers = data;
  }

  logData() {
    console.log("Scorers:");

    this.scorers.forEach(scorer => {
      const { player, team, goals } = scorer;

      console.log(`${player} (${team}): ${goals}`);
    });


  }

  renderData() {

    const table = createTable('PLAYER', 'TEAM', 'GOALS')

    this.scorers.forEach(scorer => {
      const { player, team, goals, teamId, playerId } = scorer;

      const row = document.createElement('tr');
      const scorerName = document.createElement('td');
      const scorerTeam = document.createElement('td');
      const scorerGoals = document.createElement('td');

      scorerName.textContent = player;
      scorerName.dataset.playerId = playerId;
      scorerTeam.textContent = team;
      scorerTeam.dataset.teamId = teamId;
      scorerGoals.textContent = goals;

      row.appendChild(scorerName);
      row.appendChild(scorerTeam);
      row.appendChild(scorerGoals);


      table.appendChild(row);
    });

    scorersDiv.appendChild(table)
    table.setAttribute("class", "scorers")
    hideSpinner('.scorers')
  }
}

