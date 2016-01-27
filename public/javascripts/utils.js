var moment = require('moment');
exports.dateFormatshort = function (date) {
  return moment(date).format('YYYY-MM-DD');
}
exports.dateFormatlong = function (date) {
  return moment(date).format('YYYY-MM-DD hh:mm:ss dddd');
}
