// config.nba.access_level
// config.nba.version 
// config.nba.apikey
// config.nba.seasonID
// config.nba.season
// config.nba.format
var config = require('../config');

function beginUrl(access_level, version) {
  // http(s)://api.sportsdatallc.org/nba-[access_level][version]/
  return 'http://api.sportsdatallc.org/nba-' + access_level + version + '/';
}
function endUrl(format, apikey) {
  // .[format]?api_key=[your_api_key]
  return '.' + format + '?api_key=' + apikey;
}

function createSeasonScheduleUrl() {
  //  games/[season]/[nba_season]/schedule
  return beginUrl(config.nba.access_level, config.nba.version) + 'games/' + config.nba.seasonID + '/' + config.nba.season + '/schedule' + endUrl(config.nba.format, config.nba.apikey);
}

function createDailyScheduleUrl(year, month, day) {
  // games/[year]/[month]/[day]/schedule 
  return beginUrl(config.nba.access_level, config.nba.version) + 'games/' + year + '/' + month + '/' + day + '/schedule' + endUrl(config.nba.format, config.nba.apikey);
}

function createBoxScoreUrl(gameID) {
  // games/[game_id]/boxscore 
  return beginUrl(config.nba.access_level, config.nba.version) + 'games/' + gameID + '/boxscore' + endUrl(config.nba.format, config.nba.apikey);
}

function createGameSummaryUrl(gameID) {
  // games/[game_id]/summary
  return beginUrl(config.nba.access_level, config.nba.version) + 'games/' + gameID + '/summary' + endUrl(config.nba.format, config.nba.apikey);
}

function createStandingsUrl() {
  // seasontd/[season]/[nba_season]/standings
  return beginUrl(config.nba.access_level, config.nba.version) + 'seasontd/' + config.nba.seasonID + '/' + config.nba.season + '/standings' + endUrl(config.nba.format, config.nba.apikey);
}

function createRankingsUrl() {
  // seasontd/[season]/[nba_season]/rankings 
  return beginUrl(config.nba.access_level, config.nba.version) + 'seasontd/' + config.nba.seasonID + '/' + config.nba.season + '/rankings' + endUrl(config.nba.format, config.nba.apikey);
}

function createInjuriesUrl() {
  // league/injuries 
  return beginUrl(config.nba.access_level, config.nba.version) + 'league/' + '/injuries' + endUrl(config.nba.format, config.nba.apikey);
}

function createRosterUrl(teamID) {
  //  teams/[team_id]/profile 
  return beginUrl(config.nba.access_level, config.nba.version) + 'teams/' + teamID + '/profile' + endUrl(config.nba.format, config.nba.apikey);
}

function createSeasonalStatsUrl(teamID) {
  // seasontd/[season]/[nba_season]/teams/[teamID]/statistics
  return beginUrl(config.nba.access_level, config.nba.version) + 'seasontd/' + config.nba.seasonID + '/' + config.nba.season + '/teams/' + teamID + '/statistics' + endUrl(config.nba.format, config.nba.apikey);
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
