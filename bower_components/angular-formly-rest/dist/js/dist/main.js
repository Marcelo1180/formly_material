var DjangoRestConfig_1 = require("./DjangoRestConfig");
var Converter = (function () {
    function Converter(djangoRestMeta, fieldFactoryFn) {
        this.fields = [];
        for (var fieldName in djangoRestMeta) {
            var fieldConfig = djangoRestMeta[fieldName];
            fieldConfig.name = fieldName;
            this.fields.push(DjangoRestConfig_1.DjangoRestConfig.factory(fieldConfig, fieldFactoryFn));
        }
        ;
    }
    Converter.prototype.convert = function () {
        var configObjects = [];
        this.fields.forEach(function (field) {
            configObjects.push(field.getConfigurationObject());
        });
        return configObjects;
    };
    return Converter;
})();
exports.Converter = Converter;
exports.toFormlyFields = function toFormlyFieldsF(djangoRestMeta, fieldFactoryFn) {
    console.log("toFormlyFields is deprecated, please use toFormly instead");
    var converter = new Converter(djangoRestMeta, fieldFactoryFn);
    return converter.convert();
};
exports.toFormly = function toFormlyF(djangoRestMeta, fieldFactoryFn) {
    var converter = new Converter(djangoRestMeta, fieldFactoryFn);
    return converter.convert();
};
