import { getStandings, getMatches, getScorers, getTeamDetails } from "./api";
import { TEAM_ID } from "./config";
import { scorersDiv } from "./utils/elements";
import { contentDiv } from "./utils/elements";
import { matchesButton } from "./utils/elements";
import { standingsButton } from "./utils/elements";
import { replaceMainContent } from "./utils/interaction";




export async function init() {

  const standings = await getStandings();
  standings.renderData();

  const matches = await getMatches();

  const scorers = await getScorers();
  scorers.renderData()

  const teamDetails = await getTeamDetails(TEAM_ID);
  teamDetails.renderData();



  scorersDiv.addEventListener("click", function () { if (event.target.dataset.teamId != undefined) { changeTeam() } });
  contentDiv.addEventListener("click", function () { if (event.target.dataset.teamId != undefined) { changeTeam() } });

  matchesButton.addEventListener("click", function () {
    replaceMainContent(matches.renderData());
    matches.printMatchDay(1)
  });

  standingsButton.addEventListener("click", function () {
    replaceMainContent(standings.loadContent())
  })

  contentDiv.addEventListener("change", function () {
    if (event.target.value != undefined) {
      matches.changeMatchDay(event.target.value)
    }
  });



  async function changeTeam() {
    const team = event.target.dataset.teamId;
    const teamDetails = await getTeamDetails(team)
    teamDetails.removeData()
    teamDetails.renderData()
  }



}