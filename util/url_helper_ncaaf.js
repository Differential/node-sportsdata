// config.ncaaf.access_level
// config.ncaaf.version
// config.ncaaf.apikey
// config.ncaaf.year
// config.ncaaf.season
// config.ncaaf.format
var config = require('../config');

function createUrlWithEndpointAndYear(endpoint) {
  return config.ncaaf.year + '/' + config.ncaaf.season + '/' + endpoint;
}

function createUrlWithEndpointAndWeekAndYear(week, endpoint) {
  return config.ncaaf.year + '/' + config.ncaaf.season + '/' + week + '/' + endpoint;
}

function createUrlWithEndpointAndDivision(division, endpoint) {
  return 'teams/' + division + '/' + endpoint;
}

function createUrlWithEndpointAndDivisionAndYear(division, endpoint) {
  return 'teams/' + division + '/' + config.ncaaf.year + '/' + config.ncaaf.season + '/' + endpoint;
}

function createUrlWithEndpointAndWeekAndTeamsAndYear(week, awayteam, hometeam, endpoint) {
  return config.ncaaf.year + '/' + config.ncaaf.season + '/' + week + '/' + awayteam + '/' + hometeam + '/' + endpoint;
}

function createSeasonScheduleUrl() {
  // [year]/[ncaafb_season]/schedule 
  return createUrlWithEndpointAndYear('schedule');
}

function createWeeklyScheduleUrl(week) {
  // [year]/[ncaafb_season]/[ncaafb_season_week]/schedule 
  return createUrlWithEndpointAndWeekAndYear(week, 'schedule');
}

function createGameStatisticsUrl(week, awayteam, hometeam) {
  // [year]/[ncaafb_season]/[ncaafb_season_week]/[away_team]/[home_team]/statistics 
  return createUrlWithEndpointAndWeekAndTeamsAndYear(week, awayteam, hometeam, 'schedule');
}

function createBoxscoreUrl(week, awayteam, hometeam) {
  //  [year]/[ncaafb_season]/[ncaafb_season_week]/[away_team]/[home_team]/boxscore 
  return createUrlWithEndpointAndWeekAndTeamsAndYear(week, awayteam, hometeam, 'boxscore');
}

function createExtendedBoxscoreUrl(week, awayteam, hometeam) {
  // [year]/[ncaafb_season]/[ncaafb_season_week]/[away_team]/[home_team]/extended-boxscore 
  return createUrlWithEndpointAndWeekAndTeamsAndYear(week, awayteam, hometeam, 'extended-boxscore');
}

function createStandingsUrl(division) {
  // teams/[division]/[year]/[ncaafb_season]/standings 
  return createUrlWithEndpointAndDivisionAndYear(division, 'standings');
}

function createTeamHierarchyUrl(division) {
  // teams/[division]/hierarchy
  return createUrlWithEndpointAndDivision(division, 'hierarchy');
}

module.exports = {
  getSeasonScheduleUrl: function() {
    return createSeasonScheduleUrl();
  },
  getWeeklyScheduleUrl: function(week) {
    return createWeeklyScheduleUrl(week);
  },
  getGameStatisticsUrl: function(week, awayteam, hometeam) {
    return createGameStatisticsUrl(week, awayteam, hometeam);
  },
  getBoxscoreUrl: function(week, awayteam, hometeam) {
    return createBoxscoreUrl(week, awayteam, hometeam);
  },
  getExtendedBoxscoreUrl: function(week, awayteam, hometeam) {
    return createExtendedBoxscoreUrl(week, awayteam, hometeam);
  },
  getStandingsUrl: function(division) {
    return createStandingsUrl(division);
  },
  getTeamHierarchyUrl: function(division) {
    return createTeamHierarchyUrl(division);
  }
}