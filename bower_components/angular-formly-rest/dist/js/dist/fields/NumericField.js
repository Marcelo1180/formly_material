"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base = require('./base');
var utils = require('../utils');
var NumericField = (function (_super) {
    __extends(NumericField, _super);
    function NumericField(options) {
        _super.call(this, options);
        this.minValue = options.min_value;
        this.maxValue = options.max_value;
    }
    NumericField.prototype.getExtraTemplateOptions = function () {
        return utils.smartExtend({}, {
            min: this.minValue,
            max: this.maxValue
        });
    };
    NumericField.fieldType = 'input';
    NumericField.templateType = 'number';
    return NumericField;
})(base.Field);
exports.NumericField = NumericField;
var DecimalField = (function (_super) {
    __extends(DecimalField, _super);
    function DecimalField(options) {
        _super.call(this, options);
        this.maxDigits = options.max_digits;
        this.decimalPlaces = options.decimal_places;
    }
    DecimalField.prototype.getExtraTemplateOptions = function () {
        return utils.smartExtend(_super.prototype.getExtraTemplateOptions.call(this), {
            maxlength: this.maxDigits
        });
    };
    DecimalField.fieldType = 'input';
    DecimalField.templateType = 'number';
    return DecimalField;
})(NumericField);
exports.DecimalField = DecimalField;
var FloatField = (function (_super) {
    __extends(FloatField, _super);
    function FloatField() {
        _super.apply(this, arguments);
    }
    FloatField.prototype.getExtraTemplateOptions = function () {
        return utils.smartExtend(_super.prototype.getExtraTemplateOptions.call(this), {
            'step': 'any'
        });
    };
    return FloatField;
})(NumericField);
exports.FloatField = FloatField;
