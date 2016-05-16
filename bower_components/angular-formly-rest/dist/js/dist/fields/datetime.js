"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base = require('./base');
var DateField = (function (_super) {
    __extends(DateField, _super);
    function DateField() {
        _super.apply(this, arguments);
    }
    DateField.fieldType = 'input';
    DateField.templateType = 'date';
    return DateField;
})(base.Field);
exports.DateField = DateField;
var TimeField = (function (_super) {
    __extends(TimeField, _super);
    function TimeField() {
        _super.apply(this, arguments);
    }
    TimeField.fieldType = 'input';
    TimeField.templateType = 'time';
    return TimeField;
})(base.Field);
exports.TimeField = TimeField;
var DateTimeField = (function (_super) {
    __extends(DateTimeField, _super);
    function DateTimeField() {
        _super.apply(this, arguments);
    }
    DateTimeField.fieldType = 'input';
    DateTimeField.templateType = 'datetime-local';
    return DateTimeField;
})(base.Field);
exports.DateTimeField = DateTimeField;
