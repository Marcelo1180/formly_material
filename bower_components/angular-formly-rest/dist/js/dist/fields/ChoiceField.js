"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base = require('./base');
var ChoiceField = (function (_super) {
    __extends(ChoiceField, _super);
    function ChoiceField(options) {
        _super.call(this, options);
        this.choices = options.choices;
    }
    ChoiceField.prototype.getExtraTemplateOptions = function () {
        var res = {}, options = [];
        if (!this.readOnly && this.choices) {
            this.choices.forEach(function (choice) {
                options.push({
                    name: choice['display_name'],
                    value: choice['value']
                });
            });
            res.options = options;
        }
        return res;
    };
    ChoiceField.templateType = null;
    return ChoiceField;
})(base.Field);
exports.ChoiceField = ChoiceField;
var RadioField = (function (_super) {
    __extends(RadioField, _super);
    function RadioField() {
        _super.apply(this, arguments);
    }
    RadioField.fieldType = 'radio';
    return RadioField;
})(ChoiceField);
exports.RadioField = RadioField;
var SelectField = (function (_super) {
    __extends(SelectField, _super);
    function SelectField() {
        _super.apply(this, arguments);
    }
    SelectField.fieldType = 'select';
    return SelectField;
})(ChoiceField);
exports.SelectField = SelectField;
