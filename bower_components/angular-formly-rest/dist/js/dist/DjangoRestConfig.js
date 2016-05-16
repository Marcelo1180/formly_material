"use strict";
var fields = require("./fields");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DjangoRestConfig;
var djnagoRestFieldLookup = [
    function (djangoRestMeta) {
        if (djangoRestMeta.choices && djangoRestMeta.choices.length > 0) {
            return "choice";
        }
    },
    function (djangoRestMeta) {
        if (djangoRestMeta.type == "regex") {
            if (djangoRestMeta.pattern == undefined) {
                console.warn('regex field should define pattern property. \'' + djangoRestMeta.name + '\' field will be treated as string.');
                return "string";
            }
            return "regex";
        }
    },
    function (djangoRestMeta) {
        if (djangoRestMeta.type == "string" && djangoRestMeta.max_length == undefined) {
            return "text";
        }
        else if (djangoRestMeta.type == "string") {
            return "string";
        }
    }
];
var DjangoRestConfig = (function () {
    function DjangoRestConfig() {
    }
    DjangoRestConfig.factory = function (djangoRestMeta, factoryFn) {
        var field_class_string = null, fieldClass;
        if (factoryFn) {
            field_class_string = factoryFn(djangoRestMeta);
        }
        if (!field_class_string) {
            for (var i in djnagoRestFieldLookup) {
                var ret = void 0, lookupFn = void 0;
                lookupFn = djnagoRestFieldLookup[i];
                ret = lookupFn(djangoRestMeta);
                if (ret !== null && ret !== undefined) {
                    field_class_string = ret;
                    break;
                }
            }
        }
        if (!field_class_string) {
            field_class_string = djangoRestMeta.type;
        }
        if (typeof field_class_string === "string") {
            field_class_string = DjangoRestConfig._fieldMapping[field_class_string];
        }
        if (!field_class_string) {
            throw TypeError("Can not find an appropriate field for '" + djangoRestMeta.type + "' field");
        }
        fieldClass = field_class_string;
        return new fieldClass(djangoRestMeta);
    };
    DjangoRestConfig.prototype.setType = function (type, fieldClass) {
        DjangoRestConfig._fieldMapping[type] = fieldClass;
    };
    DjangoRestConfig.prototype.getType = function (type) {
        return DjangoRestConfig._fieldMapping[type];
    };
    DjangoRestConfig._fieldMapping = {
        "boolean": fields.BooleanField,
        "integer": fields.NumericField,
        "decimal": fields.DecimalField,
        "float": fields.FloatField,
        "string": fields.CharField,
        "text": fields.TextField,
        "hidden": fields.HiddenField,
        "password": fields.PasswordField,
        "select": fields.SelectField,
        "choice": fields.SelectField,
        "radio": fields.RadioField,
        "regex": fields.RegexField,
        "email": fields.EmailField,
        "url": fields.URLField,
        "ipaddress": fields.IPAddressField,
        "date": fields.DateField,
        "datetime": fields.DateTimeField,
        "time": fields.TimeField,
    };
    return DjangoRestConfig;
})();
exports.DjangoRestConfig = DjangoRestConfig;
