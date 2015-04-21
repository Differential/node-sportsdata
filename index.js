var sportsdata_nfl = require('./index_nfl'),
    sportsdata_nba = require('./index_nba'),
    sportsdata_mlb = require('./index_mlb'),
    sportsdata_ncaaf = require('./index_ncaaf'),
    sportsdata_nhl = require('./index_nhl'),
    sportsdata_ncaamb = require('./index_ncaamb');
    sportsdata_golf = require('./index_golf');

function createNfl() {
  return sportsdata_nfl;
}

function createNba() {
  return sportsdata_nba;
}

function createMlb() {
  return sportsdata_mlb;
}

function createNcaaf() {
  return sportsdata_ncaaf;
}

function createNhl() {
  return sportsdata_nhl;
}

function createNcaamb() {
  return sportsdata_ncaamb;
}

function createGolf() {
  return sportsdata_golf;
}

module.exports.NFL = createNfl();
module.exports.NBA = createNba();
module.exports.MLB = createMlb();
module.exports.NCAAF = createNcaaf();
module.exports.NHL = createNhl();
module.exports.NCAAMB = createNcaamb();
module.exports.GOLF = createGolf();