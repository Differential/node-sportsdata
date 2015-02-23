// config.nhl.access_level
// config.nhl.version
// config.nhl.apikey
// config.nhl.seasonID
// config.nhl.season
// config.nhl.format

var config = require('../config');

// http(s)://api.sportsdatallc.org/nhl-[access_level][version]/
var BEGIN_URL = 'http://api.sportsdatallc.org/nhl-' + config.nhl.access_level + config.nhl.version + '/';

// .[format]?api_key=[your_api_key]
var END_URL = '.' + config.nhl.format + '?api_key=' + config.nhl.apikey;

function createSeasonScheduleUrl() {
  // games/[season]/[nhl_season]/schedule
  return BEGIN_URL + 'games/' + config.nhl.seasonID + '/' + config.nhl.season + '/schedule' + END_URL;
}

function createDailyScheduleUrl(year, month, day) {
  // games/[year]/[month]/[day]/schedule
  return BEGIN_URL + 'games/' + year + '/' + month + '/' + day + '/schedule' + END_URL;
}

function createSeriesScheduleUrl() {
  // series/[season]/[nhl_season]/schedule
  return BEGIN_URL + 'series/' + config.nhl.seasonID + '/' + config.nhl.season + '/schedule' + END_URL;
}

function createGameBoxScoreUrl(gameId) {
  // games/[game_id]/boxscore
  return BEGIN_URL + 'games/' + gameId + '/schedule' + END_URL;
}

function createStandingsUrl() {
  // seasontd/[season]/[nhl_season]/standings
  return BEGIN_URL + 'seasontd/' + config.nhl.seasonID + '/' + config.nhl.season + '/standings' + END_URL;
}

function createRankingsUrl() {
  // seasontd/[season]/[nhl_season]/rankings
  return BEGIN_URL + 'seasontd/' + config.nhl.seasonID + '/' + config.nhl.season + '/rankings' + END_URL;
}

function createLeagueHierarchyUrl() {
  // league/hierarchy
  return BEGIN_URL + 'league/hierarchy' + END_URL;
}

function createRosterUrl(teamId) {
  // teams/[team_id]/profile
  return BEGIN_URL + 'teams/' + teamId + '/profile' + END_URL;
}

function createPlayerProfileUrl(playerId) {
  // players/[player_id]/profile
  return BEGIN_URL + 'players/' + playerId + '/profile' + END_URL;
}

function createInjuriesUrl() {
  // league/injuries
  return BEGIN_URL + 'league/injuries' + END_URL;
}

function createGameSummaryUrl(gameId) {
  // games/[game_id]/summary
  return BEGIN_URL + 'games/' + gameId + '/summary' + END_URL;
}

function createPlayByPlayUrl(gameId) {
  // games/[game_id]/pbp
  return BEGIN_URL + 'games/' + gameId + '/pbp' + END_URL;
}

function createSeasonalStatsUrl(teamId) {
  // teams/[team_id]/statistics
  return BEGIN_URL + 'teams/' + teamId + '/statistics' + END_URL;
}

function createDailyChangeLogUrl(year, month, day) {
  // league/[year]/[month]/[day]/changes
  return BEGIN_URL + 'league/' + year + '/' + month + '/' + day + '/changes' + END_URL;
}

function createDailyTransfersUrl(year, month, day) {
  // league/[year]/[month]/[day]/transfers
  return BEGIN_URL + 'league/' + year + '/' + month + '/' + day + '/transfers' + END_URL;
}

module.exports = {
  getSeasonScheduleUrl: function () {
    return createSeasonScheduleUrl();
  },
  getDailyScheduleUrl: function (year, month, day) {
    return createDailyScheduleUrl(year, month, day);
  },
  getSeriesScheduleUrl: function () {
    return createSeriesScheduleUrl();
  },
  getGameBoxScoreUrl: function (gameId) {
    return createGameBoxScoreUrl(gameId);
  },
  getStandingsUrl: function () {
    return createStandingsUrl();
  },
  getRankingsUrl: function () {
    return createRankingsUrl();
  },
  getLeagueHierarchyUrl: function (){
    return createLeagueHierarchyUrl();
  },
  getRosterUrl: function (teamId) {
    return createRosterUrl(teamId);
  },
  getPlayerProfileUrl: function (playerId){
    return createPlayerProfileUrl(playerId);
  },
  getInjuriesUrl: function () {
    return createInjuriesUrl();
  },
  getGameSummaryUrl: function (gameId) {
    return createGameSummaryUrl(gameId);
  },
  getPlayByPlayUrl: function (gameId) {
    return createPlayByPlayUrl(gameId);
  },
  getSeasonalStatsUrl: function(teamId){
    return createSeasonalStatsUrl(teamId);
  },
  getDailyChangeLogUrl: function (year, month, day) {
    return createDailyChangeLogUrl(gameId);
  },
  getDailyTransfersUrl: function(year, month, day){
    return createDailyTransfersUrl(teamId);
  }
}