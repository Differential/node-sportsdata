var config = require('./config'),
    request = require('request'),
    xml2js = require('xml2js'),
    parser = new xml2js.Parser(),
    urlHelper = require('./util/url_helper_golf');

function init(access_level, version, apikey, year, tour, format) {
  config.golf.access_level = access_level;
  config.golf.version = version;
  config.golf.tour = tour;
  config.golf.apikey = apikey;
  config.golf.year = year;
  if format
    config.golf.format = format;
}
function createRequest(url, callback) {
  var begin_url = 'http://api.sportsdatallc.org/golf-' + config.golf.access_level + config.golf.version + '/';
  var end_url = '.' + config.golf.format + '?api_key=' + config.golf.apikey;
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

function getTournamentSchedule(callback) {
  var url = urlHelper.getTournamentScheduleUrl();
  createRequest(url, callback);
}
function getPlayerProfiles(callback) {
  var url = urlHelper.getPlayerProfilesUrl();
  createRequest(url, callback);
}
function getTournamentSummary(tournamentId, callback){
  var url = urlHelper.getTournamentSummaryUrl(tournamentId);
  createRequest(url, callback);
}
function getTournamentLeaderboard(tournamentId, callback){
  var url = urlHelper.getTournamentLeaderboardUrl(tournamentId);
  createRequest(url, callback);
}
function getTournamentHoleStatus(tournamentId, callback){
  var url = urlHelper.getTournamentHoleStatusUrl(tournamentId);
  createRequest(url, callback);
}
function getTeeTimes(tournamentId, teeType, round, callback){
  var url = urlHelper.getTeeTimesUrl(tournamentId, teeType, round);
  createRequest(url, callback);
}
function getScorecards(tournamentId, cardType, round, callback){
  var url = urlHelper.getScorecardsUrl(tournamentId, cardType, round);
  createRequest(url, callback);
}
function getPlayerStats(callback){
  var url = urlHelper.getPlayerStatsUrl();
  createRequest(url, callback);
}
function getDailyChangeLog(year, month, day, callback){
  var url = urlHelper.getDailyChangeLogUrl(year, month, day);
  createRequest(url, callback);
}

module.exports = {
  init: function(access_level, version, apikey, year, tour, format) {
    return init(access_level, version, apikey, year, tour, format);
  },
  setRequest: function(reqObj) {
    request = reqObj;
  },
  getTournamentSchedule: function(callback) {
    return getTournamentSchedule(callback);
  },
  getPlayerProfiles: function(callback) {
    return getPlayerProfiles(callback);
  },
  getTournamentSummary: function(tournamentId, callback){
    return getTournamentSummary(tournamentId, callback);
  },
  getTournamentLeaderboard: function(tournamentId, callback){
    return getTournamentLeaderboard(tournamentId, callback);
  },
  getTournamentHoleStatus: function(tournamentId, callback){
    return getTournamentHoleStatus(tournamentId, callback);
  },
  getTeeTimes: function(tournamentId, teeType, round, callback){
    return getTeeTimes(tournamentId, teeType, round, callback);
  },
  getScorecards: function(tournamentId, cardType, round, callback){
    return getTeeTimes(tournamentId, cardType, round, callback);
  },
  getPlayerStats: function(callback){
    return getPlayerStats(callback);
  },
  getDailyChangeLog: function(year, month, day, callback){
    return getDailyChangeLog(year, month, day, callback);
  }
}