// config.mlb.access_level
// config.mlb.version
// config.mlb.apikey
// config.mlb.year
// config.mlb.season
// config.mlb.format
var config = require('../config');

function createDailyBoxscoreUrl(year, month, day) {
  // games/[year]/[month]/[day]/boxscore
  return 'games/' + year + '/' + month + '/' + day + '/boxscore';
}

function createDailyChangeLogUrl(year, month, day) {
  // games/[year]/[month]/[day]/changes
  return 'games/' + year + '/' + month + '/' + day + '/changes';
}

function createDailyScheduleUrl(year, month, day) {
  // games/[year]/[month]/[day]/schedule
  return 'games/' + year + '/' + month + '/' + day + '/schedule';
}

function createDailySummaryUrl(year, month, day) {
  // games/[year]/[month]/[day]/summary
  return 'games/' + year + '/' + month + '/' + day + '/summary';
}

function createGameBoxScoreUrl(eventId){
  // games/[event_id]/boxscore
  return 'games/' + eventId + '/boxscore';
}

function createGameSummaryUrl(eventId){
  // games/[event_id]/summary
  return 'games/' + eventId + '/summary';
}

function createGlossaryUrl(){
  // league/glossary
  return 'league/glossary';
}

function createLeagueDepthChartUrl(){
  // league/depth_charts
  return 'league/depth_charts';
}

function createTeamHierarchyUrl(){
  // league/hierarchy
  return 'league/hierarchy';
}

function createLeagueLeadersUrl(){
  // seasontd/[year]/[mlb_season]/leaders/statistics
  return 'seasontd/' + config.mlb.year + config.mlb.season + '/leaders/statistics';
}

function createLeagueScheduleUrl(){
  // games/[year]/[mlb_season]/schedule
  return 'games/' + config.mlb.year + '/' + config.mlb.season + '/schedule';
}

function createPlayByPlayUrl(eventId){
  // games/[event_id]/pbp
  return 'games/' + eventId + '/pbp';
}

function createPlayerProfileUrl(playerId){
  // players/[player_id]/profile
  return 'players/' + playerId + '/profile';
}

function createRankingsUrl(){
  // seasontd/[year]/[mlb_season]/rankings
  return 'seasontd/' + config.mlb.year + '/' + config.mlb.season + '/rankings';
}

function createSeasonalSplitsUrl(){
  // seasontd/[year]/[mlb_season]/teams/[team_id]/splits
  return 'seasontd/' + config.mlb.year + '/' + config.mlb.season + '/teams/' + teamId + '/splits';
}

function createSeasonalStatsUrl(){
  // seasontd/[year]/[mlb_season]/teams/[team_id]/statistics
  return 'seasontd/' + config.mlb.year + '/' + config.mlb.season + '/teams/' + teamId + '/statistics';
}

function createStandingsUrl(){
  // seasontd/[year]/[mlb_season]/standings
  return 'seasontd/' + config.mlb.year + '/' + config.mlb.season + '/standings';
}

function createTeamDepthChartUrl(teamId){
  // teams/[team_id]/depth_chart
  return 'teams/' + teamId + '/depth_chart';
}

function createTeamProfileUrl(teamId){
  // teams/[team_id]/depth_chart
  return 'teams/' + teamId + '/profile';
}

function createActiveTeamRosterUrl(){
  // league/active_rosters
  return 'league/active_rosters';
}

function createFullTeamRosterUrl(){
  // league/full_rosters
  return 'league/full_rosters';
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