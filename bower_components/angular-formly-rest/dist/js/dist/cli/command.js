var http = require("http");
var path = require("path");
var chalk = require("chalk");
var fs = require("fs");
var prettyjson = require("prettyjson");
var JSON2 = require('JSON2');
var main_1 = require("../main");
function startsWith(str, prefix) {
    return str.indexOf(prefix) === 0;
}
function endsWith(str, suffix) {
    if (!str) {
        return null;
    }
    var res = str.match(suffix + "$");
    if (res) {
        return res[0] === suffix;
    }
    return false;
}
var DjangoRestFormlyCommand = (function () {
    function DjangoRestFormlyCommand(options) {
        this.host = options.host || "127.0.0.1";
        if (endsWith(this.host, "/")) {
            var str = this.host;
            this.host = str.substring(0, str.length - 1);
        }
        this.path = path.normalize(options.path || '/');
        if (!startsWith(this.path, "/")) {
            this.path = '/' + this.path;
        }
        this.port = options.port || 8000;
        this.suffix = '.json';
        this.outputFile = options.outputFile;
        if (options.indent) {
            this.indent = parseInt(options.indent, 10);
        }
        else {
            this.indent = 2;
        }
        this.noColor = options.noColor;
        this.noSuffix = options.noSuffix;
        this.endpoint = options.endpoint;
        this.json = options.json;
        this.output = options.output || null;
    }
    DjangoRestFormlyCommand.prototype.log = function (data, debug) {
        if (debug === void 0) { debug = false; }
        if (this.output) {
            if (debug) {
                return;
            }
            var output = JSON2.stringify(data, null, this.indent);
            fs.writeFile(this.output, output, function (err) {
                if (err) {
                    return console.error(chalk.red(err.toString()));
                }
                else {
                    console.info(chalk.green("Finished"));
                }
            });
        }
        else if (!this.json && data instanceof Object) {
            var options;
            if (!this.noColor) {
                options = {
                    keysColor: 'green',
                    stringColor: 'grey',
                    numberColor: 'blue',
                    inlineArrays: true,
                    noColor: this.noColor
                };
            }
            console.log(prettyjson.render(data, options || { noColor: true }, this.indent));
        }
        else if (this.json) {
            console.log(JSON2.stringify(data, null, this.indent));
        }
        else {
            console.log(data);
        }
    };
    DjangoRestFormlyCommand.prototype.request = function (options, callback) {
        var handler, req;
        options.headers = {
            'Accept': 'application/json; indent=' + this.indent
        };
        if (!this.noSuffix) {
            options.path = options.path + this.suffix;
        }
        handler = function (response) {
            var str = '';
            response.on('data', function (chunk) {
                str += chunk;
            });
            response.on('end', function () {
                var errorMessage;
                if (response.statusCode === 401) {
                    errorMessage = response.statusMessage;
                }
                else if (response.statusCode >= 500) {
                    errorMessage = "Authentication failed!";
                }
                else if (response.statusCode === 404) {
                    errorMessage = "Resource not found.";
                }
                else if (200 <= response.statusCode && response.statusCode < 400) {
                    try {
                        JSON.parse(str);
                    }
                    catch (e) {
                        errorMessage = "Server does not return valid JSON data";
                    }
                    if (!errorMessage) {
                        callback(str);
                        return;
                    }
                }
                else {
                    errorMessage = response.statusMessage;
                }
                console.error(chalk.red(errorMessage));
            });
        };
        req = http.request(options, handler);
        req.on('error', function (err) {
            console.error(chalk.red(err));
        });
        req.end();
    };
    DjangoRestFormlyCommand.prototype.listEndpoints = function () {
        var options = {
            host: this.host,
            port: this.port,
            path: this.path,
            method: 'GET'
        }, callback, vm = this;
        callback = function (raw) {
            var data = JSON.parse(raw);
            vm.log("Available endpoints:", true);
            vm.log(data);
        };
        this.request(options, callback);
    };
    DjangoRestFormlyCommand.prototype.generateFormScheme = function (endpointName) {
        var options = {
            host: this.host,
            port: this.port,
            path: path.join(this.path, endpointName),
            method: 'OPTIONS'
        }, callback, jsonOptions, vm = this;
        callback = function (raw) {
            var res, errMessage = " this endpoint does not accept POST request or you don't have enough permission to perform this action.", data = JSON.parse(raw);
            if (data.actions && data.actions.POST) {
                res = main_1.toFormlyFields(data.actions.POST);
                vm.log(res);
            }
            else {
                console.log(chalk.bold.bgRed("WARNING:").toString() +
                    chalk.bold(errMessage));
            }
        };
        this.request(options, callback);
    };
    return DjangoRestFormlyCommand;
})();
exports.DjangoRestFormlyCommand = DjangoRestFormlyCommand;
