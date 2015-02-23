var config = require('./config'),
    request = require('request'),
    xml2js = require('xml2js'),
    parser = new xml2js.Parser(),
    urlHelper = require('./util/url_helper_nhl');

function init(access_level, version, apikey, seasonID, season) {
  config.nhl.access_level = access_level;
  config.nhl.version = version;
  config.nhl.apikey = apikey;
  config.nhl.seasonID = seasonID;
  config.nhl.season = season;
  config.nhl.format = 'xml';
}
function createRequest(url, callback) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // Parse the XML to JSON
      parser.parseString(body, function (err, result) {
          callback(err, result);
      });
    } else {
      callback(error, body);
    }
  });
}
function getSeasonSchedule(callback) {
  var url = urlHelper.getSeasonScheduleUrl();
  createRequest(url, callback);
}
function getDailySchedule(year, month, day, callback) {
  var url = urlHelper.getDailyScheduleUrl(year, month, day);
  createRequest(url, callback);
}
function getSeriesSchedule(callback) {
  var url = urlHelper.getSeriesScheduleUrl();
  createRequest(url, callback);
}
function getGameBoxScore(gameId, callback) {
  var url = urlHelper.getGameBoxScoreUrl(gameId);
  createRequest(url, callback);
}
function getStandings(callback) {
  var url = urlHelper.getStandingsUrl();
  createRequest(url, callback);
}
function getRankings(callback) {
  var url = urlHelper.getRankingsUrl();
  createRequest(url, callback);
}
function getLeagueHierarchy(callback) {
  var url = urlHelper.getLeagueHierarchyUrl();
  createRequest(url, callback);
}
function getRoster(teamId, callback) {
  var url = urlHelper.getRosterUrl(teamId);
  createRequest(url, callback);
}
function getPlayerProfile(playerId, callback) {
  var url = urlHelper.getPlayerProfileUrl(playerId);
  createRequest(url, callback);
}
function getInjuries(callback) {
  var url = urlHelper.getInjuriesUrl();
  createRequest(url, callback);
}
function getGameSummary(gameId, callback) {
  var url = urlHelper.getGameSummaryUrl(gameId);
  createRequest(url, callback);
} 
function getPlayByPlay(gameId, callback) {
  var url = urlHelper.getPlayByPlayUrl(gameId);
  createRequest(url, callback);
}
function getSeasonalStats(teamId, callback) {
  var url = urlHelper.getSeasonalStatsUrl(teamId);
  createRequest(url, callback);
}
function getDailyChangeLog(year, month, day, callback) {
  var url = urlHelper.getDailyChangeLogUrl(year, month, day);
  createRequest(url, callback);
}
function getDailyTransfers(year, month, day, callback) {
  var url = urlHelper.getDailyTransfersUrl(year, month, day);
  createRequest(url, callback);
}

module.exports = {
  init: function(access_level, version, apikey, seasonID, season) {
    return init(access_level, version, apikey, seasonID, season);
  },
  setRequest: function(reqObj) {
    request = reqObj;
  },
  getSeasonSchedule: function(callback) {
    return getSeasonSchedule(callback);
  },
  getDailySchedule: function(year, month, day, callback) {
    return getDailySchedule(year, month, day, callback);
  },
  getSeriesSchedule: function(gameId, callback) {
    return getSeriesSchedule(callback);
  },
  getGameBoxScore: function(gameId, callback) {
    return getGameBoxScore(gameId, callback);
  },
  getStandings: function(callback) {
    return getStandings(callback);
  },
  getRankings: function(callback) {
    return getRankings(callback);
  },
  getLeagueHierarchy: function(callback){
    return getLeagueHierarchy(callback);
  },
  getRoster: function(teamId, callback){
    return getRoster(teamId, callback);
  },
  getPlayerProfile: function(playerId, callback){
    return getPlayerProfile(playerId, callback);
  },
  getInjuries: function(callback){
    return getInjuries(callback);
  },
  getGameSummary: function(gameId, callback){
    return getGameSummary(gameId, callback);
  },
  getPlayByPlay: function(gameId, callback){
    return getPlayByPlay(gameId, callback);
  },
  getSeasonalStats: function(teamId, callback){
    return getSeasonalStats(teamId, callback);
  },
  getDailyChangeLog: function(year, month, day, callback){
    return getDailyChangeLog(year, month, day, callback);
  },
  getDailyTransfers: function(year, month, day, callback){
    return getDailyTransfers(year, month, day, callback);
  }
};