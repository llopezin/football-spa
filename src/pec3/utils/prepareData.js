import { Match } from "../Classes";

function getTypes(standings) {
  return standings.map(standingType => standingType.type);
}

function filterStandings(standings) {
  const types = getTypes(standings);

  return types.map(standingType => {
    const standingDataByType = standings.find(
      array => array.type === standingType
    );

    return standingDataByType.table.map(row => {
      const {
        team,
        position,
        playedGames,
        won,
        draw,
        lost,
        goalsFor,
        goalsAgainst
      } = row;

      return {
        teamId: team.id,
        team: team.name,
        position,
        playedGames,
        won,
        draw,
        lost,
        goalsFor,
        goalsAgainst
      };
    });
  });
}

export function prepareStandings(data) {
  const { standings, competition, season } = data;
  const competitionName = competition.name;
  const currentMatchday = season.currentMatchday;
  const [total, home, away] = filterStandings(standings);

  return { competitionName, currentMatchday, total, home, away };
}

export function prepareMatches(data) {
  const { matches } = data;

  const filteredData = matches.map(match => {
    const { matchday, utcDate, homeTeam, awayTeam, score } = match;
    const preparedData = {
      matchday,
      date: utcDate,
      homeTeamId: homeTeam.id,
      homeTeam: homeTeam.name,
      awayTeamId: awayTeam.id,
      awayTeam: awayTeam.name,
      homeScore: score.fullTime.homeTeam,
      awayScore: score.fullTime.awayTeam
    };

    return new Match(preparedData);
  });

  const preparedMatches = filteredData.reduce((calendar, match) => {
    const matchDay = match.getMatchDay();

    if (!(matchDay in calendar)) {
      calendar[matchDay] = [match];
    } else {
      calendar[matchDay].push(match);
    }

    return calendar;
  }, {});

  return preparedMatches;
}

export function prepareScorers(data) {
  const { scorers } = data;

  const preparedScorers = scorers.map(scorer => {
    const { numberOfGoals, player, team } = scorer;

    return {
      goals: numberOfGoals,
      playerId: player.id,
      player: player.name,
      teamId: team.id,
      team: team.name
    };
  });

  return preparedScorers;
}

export function prepareTeamDetails(data) {
  const { name, venue, website, crestUrl } = data;

  return {
    team: name,
    stadium: venue,
    website,
    logo: crestUrl
  };
}
