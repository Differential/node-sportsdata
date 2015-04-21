// config.golf.access_level
// config.golf.tour
// config.golf.apikey
// config.golf.year
// config.golf.format
var config = require('../config');

function createTournamentScheduleUrl(){
  // schedule/[golf_tour]/[year]/tournaments/schedule
  return 'schedule/' + config.golf.tour + '/' + config.golf.year + '/tournaments/schedule';
}

function createPlayerProfilesUrl() {
  // profiles/[golf_tour]/[year]/players/profiles
  return 'profiles/' + config.golf.tour + '/' + config.golf.year + '/players/profiles'
}

function createTournamentSummaryUrl(tournamentId) {
  // summary/[golf_tour]/[year]/tournaments/[tournament_id]/summary
  return 'summary/' + config.golf.tour + '/' + config.golf.year + '/tournaments/' + tournamentId + '/summary'
}

function createTournamentLeaderboardUrl(tournamentId) {
  // leaderboard/[golf_tour]/[year]/tournaments/[tournament_id]/leaderboard
  return 'leaderboard/' + config.golf.tour + '/' + config.golf.year + '/tournaments/' + tournamentId + '/leaderboard'
}

function createTournamentHoleStatusUrl(tournamentId) {
  // hole_stats/[golf_tour]/[year]/tournaments/[tournament_id]/hole-statistics
  return 'hole_stats/' + config.golf.tour + '/' + config.golf.year + '/tournaments/' + tournamentId + '/hole-statistics'
}

function createTeeTimesUrl(tournamentId, teeType, round) {
  // teetimes/[golf_tour]/[year]/tournaments/[tournament_id]/[teetimes_type]/[round_number]/teetimes
  return 'teetimes/' + config.golf.tour + '/' + config.golf.year + '/tournaments/' + tournamentId + '/' + teeType + '/' + round + '/teetimes'
}

function createScorecardsUrl(tournamentId, cardType, round) {
  // scorecards/[golf_tour]/[year]/tournaments/[tournament_id]/[scorecard_type]/[round_number]/scores
  return 'scorecards/' + config.golf.tour + '/' + config.golf.year + '/tournaments/' + tournamentId + '/' + cardType + '/' + round + '/scores'
}

function createPlayerStatsUrl() {
  // seasontd/[golf_tour]/[year]/players/statistics
  return 'seasontd/' + config.golf.tour + '/' + config.golf.year + '/players/statistics'
}

function createDailyChangeLogUrl(year, month, day) {
  // changelog/[golf_tour]/[year]/[month]/[day]/changes
  return 'changelog/' + config.golf.tour + '/' + year + '/' + month + '/' + day + '/changes'
}

module.exports = {
  getTournamentScheduleUrl: function() {
    return createTournamentScheduleUrl();
  },
  getPlayerProfilesUrl: function(){
    return createPlayerProfilesUrl();
  },
  getTournamentSummaryUrl: function(tournamentId){
    return createTournamentSummaryUrl(tournamentId);
  },
  getTournamentLeaderboardUrl: function(tournamentId){
    return createTournamentLeaderboardUrl(tournamentId);
  },
  getTournamentHoleStatusUrl: function(tournamentId){
    return createTournamentHoleStatusUrl(tournamentId);
  },
  getTeeTimesUrl: function(tournamentId, teeType, round){
    return createTeeTimesUrl(tournamentId, teeType, round);
  },
  getScorecardsUrl: function(tournamentId, cardType, round){
    return createScorecardsUrl(tournamentId, cardType, round);
  },
  getPlayerStatsUrl: function(){
    return createPlayerStatsUrl();
  },
  getDailyChangeLogUrl: function(year, month, day){
    return createDailyChangeLogUrl(year, month, day);
  }
}