const utils = require('../util/util.js');


const service = {
    toCloudMAp : function(y){
        return utils.removeEmptyLine(utils.toCloudMapInput(utils.removeWhitespace(y)));
    },
    getNumberDaysUntilFirstAirportBeCoveredByCloud: function(x) {
        for (var e = x, t = utils.getNumberOfOpenAirports(e), r = 0; t === utils.getNumberOfOpenAirports(e); )
            e = utils.moveCloud(e),
            r++;
        return r
    },
    getNumberDaysUntilAllAirportsBeCoveredByCloud: function(x) {
        for (var e = x, t = 0; utils.getNumberOfOpenAirports(e) > 0; )
            e = utils.moveCloud(e),
            t++;
        return t
    }
}


module.exports = service;