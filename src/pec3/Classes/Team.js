import { teamDiv } from "../utils/elements";
import { createTable } from "../utils/createTables";
import { hideSpinner } from "../utils/interaction";

export default class Team {
  constructor(data) {
    const { team, teamId, stadium, website, logo } = data;

    this.teamId = teamId;
    this.team = team;
    this.stadium = stadium;
    this.website = website;
    this.logo = logo;
  }

  logData() {
    console.log("Team details");
    console.log(`${this.team} (${this.stadium}), ${this.website}`);
  }

  renderData() {

    const table = createTable('LOGO', 'STADIUM', 'TEAM', 'WEBSITE')

    const row = document.createElement('tr');
    const logo = document.createElement('td');
    const stadium = document.createElement('td');
    const team = document.createElement('td');
    const website = document.createElement('td');

    const logoImg = document.createElement('img');
    logoImg.src = this.logo;
    logo.appendChild(logoImg);

    stadium.textContent = this.stadium;
    team.textContent = this.team;
    website.textContent = this.website;

    row.appendChild(logo);
    row.appendChild(stadium);
    row.appendChild(team);
    row.appendChild(website);

    table.appendChild(row)
    table.setAttribute('class', 'team')

    teamDiv.appendChild(table)
    hideSpinner('.teams')

  }

  removeData() {
    const tableEmpty = createTable()
    teamDiv.replaceChild(tableEmpty, teamDiv.lastChild);
  }

}
