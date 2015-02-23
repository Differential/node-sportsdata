// config.nfl.access_level
// config.nfl.version
// config.nfl.apikey
// config.nfl.year
// config.nfl.season
// config.nfl.format
var config = require('../config');

function createWeeklyScheduleUrl(week) {
  // [year]/[nfl_season]/[nfl_season_week]/schedule
  return config.nfl.year + '/' + config.nfl.season + '/' + week + '/schedule';
}

function createSeasonScheduleUrl() {
  // [year]/[nfl_season]/schedule
  return config.nfl.year + '/' + config.nfl.season + '/schedule';
}

function createGameStatsUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/statistics
  return config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/statistics';
}

function createGameSummaryUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/summary
  return config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/summary';
}

function createPlayByPlayUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/pbp
  return config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/pbp';
}

function createPlaySummaryUrl(week, awayteam, hometeam, playid) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/plays/[play_id]
  return config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/plays/' + playid;
}

function createGameBoxscoreUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/boxscore
  return config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/boxscore';
}

function createExtendedBoxscoreUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/extended-boxscore
  return config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/extended-boxscore';
}

function createWeeklyBoxscoreUrl(week) {
  // [year]/[nfl_season]/[nfl_season_week]/boxscore
  return config.nfl.year + '/' + config.nfl.season + '/' + week + '/boxscore' ;
}

function createGameRosterUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/roster
  return config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/roster';
}

function createTeamHierarchyUrl() {
  // teams/hierarchy
  return 'teams/hierarchy';
}

function createTeamRosterUrl(team) {
  // teams/[team]/roster
  return '/teams/' + team + '/roster';
}

function createInjuriesUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/injuries
  return config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/injuries';
}

function createGameDepthChartUrl(week, awayteam, hometeam) {
  // [year]/[nfl_season]/[nfl_season_week]/[away_team]/[home_team]/depthchart
  return config.nfl.year + '/' + config.nfl.season + '/' + week + '/' + awayteam + '/' + hometeam + '/depthchart';
}

function createTeamDepthChartUrl(team) {
  // teams/[team]/depthchart
  return '/teams/' + team + '/depthchart';
}

function createWeeklyLeagueLeadersUrl(week) {
  // [year]/[nfl_season]/[nfl_season_week]/leaders
  return config.nfl.year + '/' + config.nfl.season + '/' + week + '/leaders';
}

function createStandingsUrl() {
  // teams/[year]/[nfl_season]/standings
  return 'teams/' + config.nfl.year + '/' + config.nfl.season + '/standings';
}

function createSeasonalStatsUrl(team) {
  // teams/[team]/[year]/[nfl_season]/statistics
  return 'teams/' + team + '/' + config.nfl.year + '/' + config.nfl.season + '/statistics';
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