// config.nhl.access_level
// config.nhl.version
// config.nhl.apikey
// config.nhl.seasonID
// config.nhl.season
// config.nhl.format

var config = require('../config');

function createSeasonScheduleUrl() {
  // games/[season]/[nhl_season]/schedule
  return 'games/' + config.nhl.seasonID + '/' + config.nhl.season + '/schedule';
}

function createDailyScheduleUrl(year, month, day) {
  // games/[year]/[month]/[day]/schedule
  return 'games/' + year + '/' + month + '/' + day + '/schedule';
}

function createSeriesScheduleUrl() {
  // series/[season]/[nhl_season]/schedule
  return 'series/' + config.nhl.seasonID + '/' + config.nhl.season + '/schedule';
}

function createGameBoxScoreUrl(gameId) {
  // games/[game_id]/boxscore
  return 'games/' + gameId + '/schedule';
}

function createStandingsUrl() {
  // seasontd/[season]/[nhl_season]/standings
  return 'seasontd/' + config.nhl.seasonID + '/' + config.nhl.season + '/standings';
}

function createRankingsUrl() {
  // seasontd/[season]/[nhl_season]/rankings
  return 'seasontd/' + config.nhl.seasonID + '/' + config.nhl.season + '/rankings';
}

function createLeagueHierarchyUrl() {
  // league/hierarchy
  return 'league/hierarchy';
}

function createRosterUrl(teamId) {
  // teams/[team_id]/profile
  return 'teams/' + teamId + '/profile';
}

function createPlayerProfileUrl(playerId) {
  // players/[player_id]/profile
  return 'players/' + playerId + '/profile';
}

function createInjuriesUrl() {
  // league/injuries
  return 'league/injuries';
}

function createGameSummaryUrl(gameId) {
  // games/[game_id]/summary
  return 'games/' + gameId + '/summary';
}

function createPlayByPlayUrl(gameId) {
  // games/[game_id]/pbp
  return 'games/' + gameId + '/pbp';
}

function createSeasonalStatsUrl(teamId) {
  // teams/[team_id]/statistics
  return 'teams/' + teamId + '/statistics';
}

function createDailyChangeLogUrl(year, month, day) {
  // league/[year]/[month]/[day]/changes
  return 'league/' + year + '/' + month + '/' + day + '/changes';
}

function createDailyTransfersUrl(year, month, day) {
  // league/[year]/[month]/[day]/transfers
  return 'league/' + year + '/' + month + '/' + day + '/transfers';
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