var config = require('./config'),
    request = require('request'),
    xml2js = require('xml2js'),
    parser = new xml2js.Parser(),
    urlHelper = require('./util/url_helper_mlb');

function init(access_level, version, apikey, year, season, format) {
  config.mlb.access_level = access_level;
  config.mlb.season = season;
  config.mlb.version = version;
  config.mlb.apikey = apikey;
  config.mlb.year = year;
  config.mlb.format = format;
}
function createRequest(url, callback) {
  var begin_url = 'http://api.sportsdatallc.org/mlb-' + config.mlb.access_level + config.mlb.version + '/';
  var end_url = '.' + config.mlb.format + '?api_key=' + config.mlb.apikey;
  url = begin_url + url + end_url

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
function getDailyBoxscore(year, month, day, callback) {
  var url = urlHelper.getDailyBoxscoreUrl(year, month, day);
  createRequest(url, callback);
}
function getDailyChangeLog(year, month, day, callback) {
  var url = urlHelper.getDailyChangeLogUrl(year, month, day);
  createRequest(url, callback);
}
function getDailySchedule(year, month, day, callback) {
  var url = urlHelper.getDailyScheduleUrl(year, month, day);
  createRequest(url, callback);
}
function getDailySummary(year, month, day, callback) {
  var url = urlHelper.getDailySummaryUrl(year, month, day);
  createRequest(url, callback);
}
function getGameBoxScore(eventId, callback) {
  var url = urlHelper.getGameBoxScoreUrl(eventId);
  createRequest(url, callback);
}
function getGameSummary(eventId, callback) {
  var url = urlHelper.getGameSummaryUrl(eventId);
  createRequest(url, callback);
}
function getGlossary(callback) {
  var url = urlHelper.getGlossaryUrl();
  createRequest(url, callback);
}
function getLeagueDepthChart(callback) {
  var url = urlHelper.getLeagueDepthChartUrl();
  createRequest(url, callback);
}
function getTeamHierarchy(callback) {
  var url = urlHelper.getTeamHierarchyUrl();
  createRequest(url, callback);
}
function getLeagueLeaders(callback) {
  var url = urlHelper.getLeagueLeadersUrl();
  createRequest(url, callback);
}
function getLeagueSchedule(callback) {
  var url = urlHelper.getLeagueScheduleUrl();
  createRequest(url, callback);
}
function getPlayByPlay(eventId, callback) {
  var url = urlHelper.getPlayByPlayUrl(eventId);
  createRequest(url, callback);
}
function getPlayerProfile(playerId, callback) {
  var url = urlHelper.getPlayerProfileUrl(playerId);
  createRequest(url, callback);
}
function getRankings(callback) {
  var url = urlHelper.getRankingsUrl();
  createRequest(url, callback);
}
function getSeasonalSplits(callback) {
  var url = urlHelper.getSeasonalSplitsUrl();
  createRequest(url, callback);
}
function getSeasonalStats(callback) {
  var url = urlHelper.getSeasonalStatsUrl();
  createRequest(url, callback);
}
function getStandings(callback) {
  var url = urlHelper.getStandingsUrl();
  createRequest(url, callback);
}
function getTeamDepthChart(teamId, callback) {
  var url = urlHelper.getTeamDepthChartUrl(teamId);
  createRequest(url, callback);
}
function getTeamProfile(teamId, callback) {
  var url = urlHelper.getTeamProfileUrl(teamId);
  createRequest(url, callback);
}
function getActiveTeamRoster(callback) {
  var url = urlHelper.getActiveTeamRosterUrl();
  createRequest(url, callback);
}
function getFullTeamRoster(callback) {
  var url = urlHelper.getFullTeamRosterUrl();
  createRequest(url, callback);
}

module.exports = {
  init: function(access_level, version, apikey, year) {
    return init(access_level, version, apikey, year);
  },
  setRequest: function(reqObj) {
    request = reqObj;
  },
  getDailyBoxscore: function(year, month, day, callback) {
    return getDailyBoxscore(year, month, day, callback);
  },
  getDailyChangeLog: function(year, month, day, callback) {
    return getDailyChangeLog(year, month, day, callback);
  },
  getDailySchedule: function(year, month, day, callback) {
    return getDailySchedule(year, month, day, callback);
  },
  getDailySummary: function(year, month, day, callback) {
    return getDailySummary(year, month, day, callback);
  },
  getGameBoxScore: function(eventId, callback) {
    return getGameBoxScore(eventId, callback);
  },
  getGameSummary: function(eventId, callback) {
    return getGameSummary(eventId, callback);
  },
  getGlossary: function(callback) {
    return getGlossary(callback);
  },
  getLeagueDepthChart: function(callback) {
    return getLeagueDepthChart(callback);
  },
  getTeamHierarchy: function(callback){
    return getTeamHierarchy(callback);
  },
  getLeagueLeaders: function(callback){
    return getLeagueLeaders(callback);
  },
  getLeagueSchedule: function(callback){
    return getLeagueSchedule(callback);
  },
  getPlayByPlay: function(eventId, callback){
    return getPlayByPlay(eventId, callback);
  },
  getPlayerProfile: function(playerId, callback){
    return getPlayerProfile(playerId, callback);
  },
  getRankings: function(callback){
    return getRankings(callback);
  },
  getSeasonalSplits: function(callback){
    return getSeasonalSplits(callback);
  },
  getSeasonalStats: function(callback){
    return getSeasonalStats(callback);
  },
  getStandings: function(callback){
    return getStandings(callback);
  },
  getTeamDepthChart: function(teamId, callback){
    return getTeamDepthChart(teamId, callback);
  },
  getTeamProfile: function(teamId, callback){
    return getTeamProfile(teamId, callback);
  },
  getActiveTeamRoster: function(callback){
    return getActiveTeamRoster(callback);
  },
  getFullTeamRoster: function(callback){
    return getFullTeamRoster(callback);
  }
};
