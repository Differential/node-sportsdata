// config.nfl.access_level
// config.nfl.version
// config.nfl.apikey
// config.nfl.year
// config.nfl.season
// config.nfl.format
var config = require('../config');

// http(s)://api.sportsdatallc.org/nba-[access_level][version]/
var BEGIN_URL = 'http://api.sportsdatallc.org/nfl-' + config.nfl.access_level + config.nfl.version + '/'

// .[format]?api_key=[your_api_key]
var END_URL = '.' + config.nfl.format + '?api_key=' + config.nfl.apikey;

function createWeeklyScheduleUrl(week) {
  // [year]/[nfl_season]/[nfl_season_week]/schedule
  return BEGIN_URL + config.nfl.year + '/' + config.nfl.season + '/' + week + '/schedule' + END_URL;
}

function createSeasonScheduleUrl() {
  // [year]/[nfl_season]/schedule
  return BEGIN_URL + config.nfl.year + '/' + config.nfl.season + '/schedule' + END_URL;
}

function createGameStatsUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/statistics
  return BEGIN_URL + config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/statistics' + END_URL;
}

function createGameSummaryUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/summary
  return BEGIN_URL + config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/summary' + END_URL;
}

function createPlayByPlayUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/pbp
  return BEGIN_URL + config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/pbp' + END_URL;
}

function createPlaySummaryUrl(week, awayteam, hometeam, playid) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/plays/[play_id]
  return BEGIN_URL + config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/plays/' + playid + END_URL;
}

function createGameBoxscoreUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/boxscore
  return BEGIN_URL + config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/boxscore' + END_URL;
}

function createExtendedBoxscoreUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/extended-boxscore
  return BEGIN_URL + config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/extended-boxscore' + END_URL;
}

function createWeeklyBoxscoreUrl(week) {
  // [year]/[nfl_season]/[nfl_season_week]/boxscore
  return BEGIN_URL + config.nfl.year + '/' + config.nfl.season + '/' + week + '/boxscore'  + END_URL;
}

function createGameRosterUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/roster
  return BEGIN_URL + config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/roster' + END_URL;
}

function createTeamHierarchyUrl() {
  // teams/hierarchy
  return BEGIN_URL + 'teams/hierarchy' + END_URL;
}

function createTeamRosterUrl(team) {
  // teams/[team]/roster
  return BEGIN_URL + '/teams/' + team + '/roster' + END_URL;
}

function createInjuriesUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/injuries
  return BEGIN_URL + config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/injuries' + END_URL;
}

function createGameDepthChartUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/depthchart
  return BEGIN_URL + config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/depthchart' + END_URL;
}

function createTeamDepthChartUrl(team) {
  // teams/[team]/depthchart
  return BEGIN_URL + '/teams/' + team + '/depthchart' + END_URL;
}

function createWeeklyLeagueLeadersUrl(week) {
  // [year]/[nfl_season]/[nfl_season_week]/leaders
  return BEGIN_URL + config.nfl.year + '/' + config.nfl.season + '/' + week + '/leaders' + END_URL;
}

function createStandingsUrl() {
  // teams/[year]/[nfl_season]/standings
  return BEGIN_URL + 'teams/' + config.nfl.year + '/' + config.nfl.season + '/standings' + END_URL;
}

function createSeasonalStatsUrl(team) {
  // teams/[team]/[year]/[nfl_season]/statistics
  return BEGIN_URL + 'teams/' + team + '/' + config.nfl.year + '/' + config.nfl.season + '/statistics' + END_URL;
}

module.exports = {
  getWeeklyScheduleUrl: function(week) {
    return createWeeklyScheduleUrl(week);
  },
  getSeasonScheduleUrl: function() {
    return createSeasonScheduleUrl();
  },
  getGameStatsUrl: function(week, awayteam, hometeam) {
    return createGameStatsUrl(week, awayteam, hometeam);
  },
  getGameSummaryUrl: function(week, awayteam, hometeam) {
    return createGameSummaryUrl(week, awayteam, hometeam);
  },
  getPlayByPlayUrl: function(week, awayteam, hometeam) {
    return createPlayByPlayUrl(week, awayteam, hometeam);
  },
  getPlaySummaryUrl: function(week, awayteam, hometeam, playid) {
    return createPlaySummaryUrl(week, awayteam, hometeam, playid);
  },
  getGameBoxscoreUrl: function(week, awayteam, hometeam) {
    return createGameBoxscoreUrl(week, awayteam, hometeam);
  },
  getExtendedBoxscoreUrl: function(week, awayteam, hometeam) {
    return createExtendedBoxscoreUrl(week, awayteam, hometeam);
  },
  getWeeklyBoxscoreUrl: function(week) {
    return createWeeklyBoxscoreUrl(week);
  },
  getGameRosterUrl: function(week, awayteam, hometeam) {
    return createGameRosterUrl(week, awayteam, hometeam);
  },
  getTeamHierarchyUrl: function() {
    return createTeamHierarchyUrl();
  },
  getTeamRosterUrl: function(team) {
    return createTeamRosterUrl(team);
  },
  getInjuriesUrl: function(week, awayteam, hometeam) {
    return createInjuriesUrl(week, awayteam, hometeam);
  },
  getGameDepthChartUrl: function(week, awayteam, hometeam) {
    return createGameDepthChartUrl(week, awayteam, hometeam);
  },
  getTeamDepthChartUrl: function(team) {
    return createTeamDepthChartUrl(team);
  },
  getWeeklyLeagueLeadersUrl: function(week) {
    return createWeeklyLeagueLeadersUrl(week);
  },
  getStandingsUrl: function() {
    return createStandingsUrl();
  },
  getSeasonalStatsUrl: function(team) {
    return createSeasonalStatsUrl(team);
  }
}