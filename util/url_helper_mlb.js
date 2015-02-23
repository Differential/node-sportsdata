// config.mlb.access_level
// config.mlb.version
// config.mlb.apikey
// config.mlb.year
// config.mlb.season
// config.mlb.format
var config = require('../config');

// http(s)://api.sportsdatallc.org/mlb-[access_level][version]/
var BEGIN_URL = 'http://api.sportsdatallc.org/mlb-' + config.mlb.access_level + config.mlb.version + '/';

// .[format]?api_key=[your_api_key]
var END_URL = '.' + config.mlb.format + '?api_key=' + config.mlb.apikey;

function createDailyBoxscoreUrl(year, month, day) {
  // games/[year]/[month]/[day]/boxscore
  return BEGIN_URL + 'games/' + year + '/' + month + '/' + day + '/boxscore' + END_URL;
}

function createDailyChangeLogUrl(year, month, day) {
  // games/[year]/[month]/[day]/changes
  return BEGIN_URL + 'games/' + year + '/' + month + '/' + day + '/changes' + END_URL;
}

function createDailyScheduleUrl(year, month, day) {
  // games/[year]/[month]/[day]/schedule
  return BEGIN_URL + 'games/' + year + '/' + month + '/' + day + '/schedule' + END_URL;
}

function createDailySummaryUrl(year, month, day) {
  // games/[year]/[month]/[day]/summary
  return BEGIN_URL + 'games/' + year + '/' + month + '/' + day + '/summary' + END_URL;
}

function createGameBoxScoreUrl(eventId){
  // games/[event_id]/boxscore
  return BEGIN_URL + 'games/' + eventId + '/boxscore' + END_URL;
}

function createGameSummaryUrl(eventId){
  // games/[event_id]/summary
  return BEGIN_URL + 'games/' + eventId + '/summary' + END_URL;
}

function createGlossaryUrl(){
  // league/glossary
  return BEGIN_URL + 'league/glossary' + END_URL;
}

function createLeagueDepthChartUrl(){
  // league/depth_charts
  return BEGIN_URL + 'league/depth_charts' + END_URL;
}

function createTeamHierarchyUrl(){
  // league/hierarchy
  return BEGIN_URL + 'league/hierarchy' + END_URL;
}

function createLeagueLeadersUrl(){
  // seasontd/[year]/[mlb_season]/leaders/statistics
  return BEGIN_URL + 'seasontd/' + config.mlb.year + config.mlb.season + '/leaders/statistics' + END_URL;
}

function createLeagueScheduleUrl(){
  // games/[year]/[mlb_season]/schedule
  return BEGIN_URL + 'games/' + config.mlb.year + '/' + config.mlb.season + '/schedule' + END_URL;
}

function createPlayByPlayUrl(eventId){
  // games/[event_id]/pbp
  return BEGIN_URL + 'games/' + eventId + '/pbp' + END_URL;
}

function createPlayerProfileUrl(playerId){
  // players/[player_id]/profile
  return BEGIN_URL + 'players/' + playerId + '/profile' + END_URL;
}

function createRankingsUrl(){
  // seasontd/[year]/[mlb_season]/rankings
  return BEGIN_URL + 'seasontd/' + config.mlb.year + '/' + config.mlb.season + '/rankings' + END_URL;
}

function createSeasonalSplitsUrl(){
  // seasontd/[year]/[mlb_season]/teams/[team_id]/splits
  return BEGIN_URL + 'seasontd/' + config.mlb.year + '/' + config.mlb.season + '/teams/' + teamId + '/splits' + END_URL;
}

function createSeasonalStatsUrl(){
  // seasontd/[year]/[mlb_season]/teams/[team_id]/statistics
  return BEGIN_URL + 'seasontd/' + config.mlb.year + '/' + config.mlb.season + '/teams/' + teamId + '/statistics' + END_URL;
}

function createStandingsUrl(){
  // seasontd/[year]/[mlb_season]/standings
  return BEGIN_URL + 'seasontd/' + config.mlb.year + '/' + config.mlb.season + '/standings' + END_URL;
}

function createTeamDepthChartUrl(teamId){
  // teams/[team_id]/depth_chart
  return BEGIN_URL + 'teams/' + teamId + '/depth_chart' + END_URL;
}

function createTeamProfileUrl(teamId){
  // teams/[team_id]/depth_chart
  return BEGIN_URL + 'teams/' + teamId + '/profile' + END_URL;
}

function createActiveTeamRosterUrl(){
  // league/active_rosters
  return BEGIN_URL + 'league/active_rosters' + END_URL;
}

function createFullTeamRosterUrl(){
  // league/full_rosters
  return BEGIN_URL + 'league/full_rosters' + END_URL;
}

module.exports = {
  getDailyBoxscoreUrl: function(year, month, day) {
      return createDailyChangeLog(year, month, day);
  },
  getDailyChangeLogUrl: function(year, month, day) {
    return createDailyChangeLogUrl(year, month, day);
  },
  getDailyScheduleUrl: function(year, month, day) {
    return createDailyScheduleUrl(year, month, day);
  },
  getDailySummaryUrl: function(year, month, day) {
    return createDailySummaryUrl(year, month, day);
  },
  getGameBoxScoreUrl: function(eventId) {
    return createGameBoxScoreUrl(eventId);
  },
  getGameSummaryUrl: function(eventId) {
    return createGameSummaryUrl(eventId);
  },
  getGlossaryUrl: function() {
    return createGlossaryUrl();
  },
  getLeagueDepthChartUrl: function() {
    return createLeagueDepthChartUrl();
  },
  getTeamHierarchyUrl: function(){
    return createTeamHierarchyUrl();
  },
  getLeagueLeadersUrl: function(){
    return createLeagueLeadersUrl();
  },
  getLeagueScheduleUrl: function(){
    return createLeagueScheduleUrl();
  },
  getPlayByPlayUrl: function(eventId){
    return createPlayByPlayUrl(eventId);
  },
  getPlayerProfileUrl: function(playerId){
    return createPlayerProfileUrl(playerId);
  },
  getRankingsUrl: function(){
    return createRankingsUrl();
  },
  getSeasonalSplitsUrl: function(){
    return createSeasonalSplitsUrl();
  },
  getSeasonalStatsUrl: function(){
    return createSeasonalStatsUrl();
  },
  getStandingsUrl: function(){
    return createStandingsUrl();
  },
  getTeamDepthChartUrl: function(teamId){
    return createTeamDepthChartUrl(teamId);
  },
  getTeamProfileUrl: function(teamId){
    return createTeamProfileUrl(teamId);
  },
  getActiveTeamRosterUrl: function(){
    return createActiveTeamRosterUrl();
  },
  getFullTeamRosterUrl: function(){
    return createFullTeamRosterUrl();
  }
}