const COMPETITION_ID = 2014;

const API = "https://API.football-data.org/v2";

export const TEAM_ID = 81;

export const API_TOKEN = '9eee4db6f4e947b1a58e7232e546f9b7';

export const ENDPOINTS = {
  COMPETITION: `${API}/competitions/${COMPETITION_ID}/teams`,
  STANDINGS: `${API}/competitions/${COMPETITION_ID}/standings`,
  MATCHES: `${API}/competitions/${COMPETITION_ID}/matches`,
  SCORERS: `${API}/competitions/${COMPETITION_ID}/scorers`,
  TEAM_DETAILS: `${API}/teams`
};
