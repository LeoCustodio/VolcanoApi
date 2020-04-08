'use strict';

const utils = require('../util/util.js');
const airport = require('../services/airport.services.js');

module.exports = function (router) {

    router.get('/index',(req, res, next) => {

        const data = req.body;
        var firstAirport = '';
        var allAirport = '';
        var response= '';
        var correctArray = airport.toCloudMAp(data.Maps.total)
        correctArray.forEach(element => {
            if(element.length < 11){
                throw "Entrada com formato errado, por favor manter o 10x10.";
            }
        });
        if(correctArray.length >= 10){
            if(utils.getNumberOfOpenAirports(correctArray) >= 3 && utils.getNumberOfClouds(correctArray) >= 4){
                firstAirport = airport.getNumberDaysUntilFirstAirportBeCoveredByCloud(correctArray);
                allAirport = airport.getNumberDaysUntilAllAirportsBeCoveredByCloud(correctArray);
                response = 'O primeiro aeroporto a ser tomado levara ' +  firstAirport + ' dias, todos serão tomados em ' + allAirport + ' dias.';
            }
        }
        //exemplo jsonrequest  -  {"Maps":{"total": "..*...**..\r\n.**.......\r\n***.A..A..\r\n.*........\r\n.*....A...\r\n...A......\r\..........\r\n..........\r\n..........\r\n..........\r\n"}}
         res.send(response);
    });

};