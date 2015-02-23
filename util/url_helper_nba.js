// config.nba.access_level
// config.nba.version 
// config.nba.apikey
// config.nba.seasonID
// config.nba.season
// config.nba.format
var config = require('../config');

function createSeasonScheduleUrl() {
  //  games/[season]/[nba_season]/schedule
  return 'games/' + config.nba.seasonID + '/' + config.nba.season + '/schedule';
}

function createDailyScheduleUrl(year, month, day) {
  // games/[year]/[month]/[day]/schedule 
  return 'games/' + year + '/' + month + '/' + day + '/schedule';
}

function createBoxScoreUrl(gameID) {
  // games/[game_id]/boxscore 
  return 'games/' + gameID + '/boxscore';
}

function createGameSummaryUrl(gameID) {
  // games/[game_id]/summary
  return 'games/' + gameID + '/summary';
}

function createStandingsUrl() {
  // seasontd/[season]/[nba_season]/standings
  return 'seasontd/' + config.nba.seasonID + '/' + config.nba.season + '/standings';
}

function createRankingsUrl() {
  // seasontd/[season]/[nba_season]/rankings 
  return 'seasontd/' + config.nba.seasonID + '/' + config.nba.season + '/rankings';
}

function createInjuriesUrl() {
  // league/injuries 
  return 'league/' + '/injuries';
}

function createRosterUrl(teamID) {
  //  teams/[team_id]/profile 
  return 'teams/' + teamID + '/profile';
}

function createSeasonalStatsUrl(teamID) {
  // seasontd/[season]/[nba_season]/teams/[teamID]/statistics
  return 'seasontd/' + config.nba.seasonID + '/' + config.nba.season + '/teams/' + teamID + '/statistics';
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
