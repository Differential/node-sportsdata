// config.ncaamb.access_level
// config.ncaamb.version
// config.ncaamb.apikey
// config.ncaamb.year
// config.ncaamb.season
// config.ncaamb.format
var config = require('../config');

function createUrlWithEndpoint(endpoint) {
  return 'games/' + config.ncaamb.year + '/' + config.ncaamb.season + '/' + endpoint;
}

function createUrlWithEndpointWithDate(endpoint, year, month, day) {
  return 'games/' + year + '/' + month + '/' + day + '/' + endpoint;
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
  return 'games/' + gameID + '/boxscore';
}

function createGameSummaryUrl(gameID) {
  // games/[game_id]/summary
  return 'games/' + gameID + '/summary';
}

function createTournamentListUrl() {
  // tournaments/[season]/[ncaamb_season]/schedule 
  return 'tournaments/' + config.ncaamb.year + '/' + config.ncaamb.season + '/schedule';
}

function createTournamentScheduleUrl(tournament_id) {
  // tournaments/[tournament]/summary
  return 'tournaments/' + tournament_id + '/schedule';
}

function createSeasonalStatsUrl(teamID) {
  // seasontd/[season]/[ncaamb_season]/teams/[teamID]/statistics
  return 'seasontd/' + config.ncaamb.year + '/' + config.ncaamb.season + '/teams/' + teamID + '/statistics';
}

function createLeagueHierarchyUrl() {
  // league/hierarchy 
  return 'league/hierarchy';
}

function createRankingsUrl() {
  // polls/rpi/[ncaamb_season]/rankings 
  return 'polls/rpi/' + config.ncaamb.year + '/rankings';
}

function createStandingsUrl() {
  // seasontd/[season]/[ncaamb_season]/standings 
  return 'seasontd/' + config.ncaamb.year + '/' + config.ncaamb.season + '/standings';
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
