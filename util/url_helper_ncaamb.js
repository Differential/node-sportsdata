// config.ncaamb.access_level
// config.ncaamb.version
// config.ncaamb.apikey
// config.ncaamb.year
// config.ncaamb.season
// config.ncaamb.format
var config = require('../config');

// http(s)://api.sportsdatallc.org/ncaamb-[access_level][version]/
var BEGIN_URL = 'http://api.sportsdatallc.org/ncaamb-' + config.ncaamb.access_level + config.ncaamb.version + '/'

// .[format]?api_key=[your_api_key]
var END_URL = '.' + config.ncaamb.format + '?api_key=' + config.ncaamb.apikey;

function createUrlWithEndpoint(endpoint) {
  return BEGIN_URL + 'games/' + config.ncaamb.year + '/' + config.ncaamb.season + '/' + endpoint + END_URL;
}

function createUrlWithEndpointWithDate(endpoint, year, month, day) {
  return BEGIN_URL + 'games/' + year + '/' + month + '/' + day + '/' + endpoint + END_URL;
}

function createSeasonScheduleUrl() {
  // games/[season]/[ncaab_schedule]/schedule 
  return createUrlWithEndpoint('schedule');
}

function createDailyScheduleUrl(year, month, day) {
  // games/[year]/[month]/[day]/schedule 
  return createUrlWithEndpointWithDate('schedule', year, month, day);
}

function createBoxScoreUrl(gameID) {
  // games/[game_id]/boxscore 
  return BEGIN_URL + 'games/' + gameID + '/boxscore' + END_URL;
}

function createGameSummaryUrl(gameID) {
  // games/[game_id]/summary
  return BEGIN_URL + 'games/' + gameID + '/summary' + END_URL;
}

function createTournamentListUrl() {
  // tournaments/[season]/[ncaamb_season]/schedule 
  return BEGIN_URL + 'tournaments/' + config.ncaamb.year + '/' + config.ncaamb.season + '/schedule' + END_URL;
}

function createTournamentScheduleUrl(tournament_id) {
  // tournaments/[tournament]/summary
  return BEGIN_URL + 'tournaments/' + tournament_id + '/schedule' + END_URL;
}

function createSeasonalStatsUrl(teamID) {
  // seasontd/[season]/[ncaamb_season]/teams/[teamID]/statistics
  return BEGIN_URL + 'seasontd/' + config.ncaamb.year + '/' + config.ncaamb.season + '/teams/' + teamID + '/statistics' + END_URL;
}

function createLeagueHierarchyUrl() {
  // league/hierarchy 
  return BEGIN_URL + 'league/hierarchy' + END_URL;
}

function createRankingsUrl() {
  // polls/rpi/[ncaamb_season]/rankings 
  return BEGIN_URL + 'polls/rpi/' + config.ncaamb.year + '/rankings' + END_URL;
}

function createStandingsUrl() {
  // seasontd/[season]/[ncaamb_season]/standings 
  return BEGIN_URL + 'seasontd/' + config.ncaamb.year + '/' + config.ncaamb.season + '/standings' + END_URL;
}

function createTournamentExampleUrl(fileName) {
  // URL should look like: http://developer.sportsdatallc.com/files/[fileName].xml
  return 'http://developer.sportsdatallc.com/files/' + fileName + '.xml';
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
  getTournamentListUrl: function () {
    return createTournamentListUrl();
  },
  getTournamentScheduleUrl: function (tournament_id) {
    return createTournamentScheduleUrl(tournament_id);
  },
  getSeasonalStatsUrl: function(teamID){
    return createSeasonalStatsUrl(teamID);
  },
  getLeagueHierarchyUrl: function(){
    return createLeagueHierarchyUrl();
  },
  getRankingsUrl: function(){
    return createRankingsUrl();
  },
  getStandingsUrl: function(){
    return createStandingsUrl();
  },
  getTournamentExampleUrl: function(fileName){
    return createTournamentExampleUrl(fileName);
  }
}
