// config.nba.access_level
// config.nba.version 
// config.nba.apikey
// config.nba.seasonID
// config.nba.season
// config.nba.format
var config = require('../config');

// http(s)://api.sportsdatallc.org/nba-[access_level][version]/
var BEGIN_URL = 'http://api.sportsdatallc.org/nba-' + config.nba.access_level + config.nba.version + '/'

// .[format]?api_key=[your_api_key]
var END_URL = '.' + config.nba.format + '?api_key=' + config.nba.apikey;

function createSeasonScheduleUrl() {
  //  games/[season]/[nba_season]/schedule 
  return BEGIN_URL + 'games/' + config.nba.seasonID + '/' + config.nba.season + '/schedule' + END_URL;
}

function createDailyScheduleUrl(year, month, day) {
  // games/[year]/[month]/[day]/schedule 
  return BEGIN_URL + 'games/' + year + '/' + month + '/' + day + '/schedule' + END_URL;
}

function createBoxScoreUrl(gameID) {
  // games/[game_id]/boxscore 
  return BEGIN_URL + 'games/' + gameID + '/boxscore' + END_URL;
}

function createGameSummaryUrl(gameID) {
  // games/[game_id]/summary
  return BEGIN_URL + 'games/' + gameID + '/summary' + END_URL;
}

function createStandingsUrl() {
  // seasontd/[season]/[nba_season]/standings
  return BEGIN_URL + 'seasontd/' + config.nba.seasonID + '/' + config.nba.season + '/standings' + END_URL;
}

function createRankingsUrl() {
  // seasontd/[season]/[nba_season]/rankings 
  return BEGIN_URL + 'seasontd/' + config.nba.seasonID + '/' + config.nba.season + '/rankings' + END_URL;
}

function createInjuriesUrl() {
  // league/injuries 
  return BEGIN_URL + 'league/' + '/injuries' + END_URL;
}

function createRosterUrl(teamID) {
  //  teams/[team_id]/profile 
  return BEGIN_URL + 'teams/' + teamID + '/profile' + END_URL;
}

function createSeasonalStatsUrl(teamID) {
  // seasontd/[season]/[nba_season]/teams/[teamID]/statistics
  return BEGIN_URL + 'seasontd/' + config.nba.seasonID + '/' + config.nba.season + '/teams/' + teamID + '/statistics' + END_URL;
}

module.exports = {
  getSeasonScheduleUrl: function () {
    return createSeasonScheduleUrl();
  },
  getDailyScheduleUrl: function (year, month, day) {
    return createDailyScheduleUrl(year, month, day);
  },
  getBoxScoreUrl: function (gameID) {
    return createBoxScoreUrl(gameID);
  },
  getGameSummaryUrl: function (gameID) {
    return createGameSummaryUrl(gameID);
  },
  getStandingsUrl: function () {
    return createStandingsUrl();
  },
  getRankingsUrl: function () {
    return createRankingsUrl();
  },
  getInjuriesUrl: function () {
    return createInjuriesUrl();
  },
  getRosterUrl: function (teamID) {
    return createRosterUrl(teamID);
  },
  getSeasonalStatsUrl: function(teamID){
    return createSeasonalStatsUrl(teamID);
  }
}
