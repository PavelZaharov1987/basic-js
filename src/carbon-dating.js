const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730; 

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    let num = parseFloat(sampleActivity);
    let result;
    if (!isNaN(num)) {
      if (num <= 0 || num > 15) {
        return false;
      } else {
        result = Math.ceil((Math.log(MODERN_ACTIVITY / num)) * HALF_LIFE_PERIOD / 0.693);
        return result;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};