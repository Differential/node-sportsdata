var config = require('./config'),
    request = require('request'),
    xml2js = require('xml2js'),
    parser = new xml2js.Parser(),
    urlHelper = require('./util/url_helper_ncaamb');

function init(access_level, version, apikey, year, season) {
  config.ncaamb.access_level = access_level;
  config.ncaamb.version = version;
  config.ncaamb.year = year;
  config.ncaamb.season = season;
  config.ncaamb.apikey = apikey;
  config.ncaamb.format = 'xml';
}

function getSeasonSchedule(callback) {
  var url = urlHelper.getSeasonScheduleUrl();
  createRequest(url, callback);
}

function getDailySchedule(year, month, day, callback) {
  var url = urlHelper.getDailyScheduleUrl(year, month, day);
  createRequest(url, callback);
}

function getBoxScore(gameID, callback) {
  var url = urlHelper.getBoxScoreUrl(gameID);
  createRequest(url, callback);
}

function getGameScoreAndStats(gameID, callback) {
  var url = urlHelper.getGameSummaryUrl(gameID);
  createRequest(url, callback);
}

function getTournamentList(callback) {
  var url = urlHelper.getTournamentListUrl();
  createRequest(url, callback);
}

function getTournamentSchedule(tournament_id, callback) {
  var url = urlHelper.getTournamentScheduleUrl(tournament_id);
  createRequest(url, callback);
}

function getSeasonalStats(teamID, callback) {
  var url = urlHelper.getSeasonalStatsUrl(teamID);
  createRequest(url, callback);
}

function getLeagueHierarchy(callback) {
  var url = urlHelper.getLeagueHierarchyUrl();
  createRequest(url, callback);
}

function getRankings(callback) {
  var url = urlHelper.getRankingsUrl();
  createRequest(url, callback);
}

function getStandings(callback) {
  var url = urlHelper.getStandingsUrl();
  createRequest(url, callback);
}

function getTournamentExample(fileName, callback) {
  var url = urlHelper.getTournamentExampleUrl(fileName);
  createRequest(url, callback);
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

module.exports = {
  init: function(access_level, version, year, season, apikey) {
    return init(access_level, version, year, season, apikey);
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
  getBoxScore: function(gameID, callback) {
    return getBoxScore(gameID, callback);
  },
  getGameScoreAndStats: function(gameID, callback) {
    return getGameScoreAndStats(gameID, callback);
  },
  getTournamentList: function(callback) {
    return getTournamentList(callback);
  },
  getTournamentSchedule: function(tournament_id, callback) {
    return getTournamentSchedule(tournament_id, callback);
  },
  getSeasonalStats: function(teamID, callback) {
    return getSeasonalStats(teamID, callback);
  },
  getLeagueHierarchy: function(callback) {
    return getLeagueHierarchy(callback);
  },
  getRankings: function(callback) {
    return getRankings(callback);
  },
  getStandings: function(callback) {
    return getStandings(callback);
  },
  getTournamentExample: function(fileName, callback) {
    return getTournamentExample(fileName, callback);
  }
};