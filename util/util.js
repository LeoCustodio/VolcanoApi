const utils = {
    removeWhitespace: function (e) {
        return e.replace(/ +/g, "")
    },
    removeEmptyLine: function (e) {
        return e.reduce(function (e, t) {
            return t.length > 0 && e.push(t), e
        }, [])
    },
    toCloudMapInput: function (e) {
        return e.split("\n").map(function (e) {
            return e.split("")
        })
    },
    o: function (e) {
        return e.map(function (e) {
            return e.slice()
        })
    },
    moveCloud: function (e) {
        var t = this.o(e);
        var n = e;
        var r = [];
        return e.forEach(function (r, n) {
            r.forEach(function (r, u) {
                "*" === e[n][u] && (n > 0 && (t[n - 1][u] = "*"),
                    n < e.length - 1 && (t[n + 1][u] = "*"),
                    u > 0 && (t[n][u - 1] = "*"),
                    u < e[n].length - 1 && (t[n][u + 1] = "*"))
            })
        }),
            t
    },
    i: function (e) {
        return e.reduce(function (e, t) {
            return e.concat(t)
        }, [])
    },
    getNumberOfOpenAirports: function (e) {
        return this.i(e).filter(function (e) {
            return "A" === e
        }).length
    },
    getNumberOfClouds: function(e) {
        return this.i(e).filter(function(e) {
            return "*" === e
        }).length
    },


}


module.exports = utils;