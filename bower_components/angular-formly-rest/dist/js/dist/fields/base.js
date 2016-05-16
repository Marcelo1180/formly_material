var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils = require('../utils');
var Field = (function () {
    function Field(options) {
        this.name = options.name;
        this.required = options.required || false;
        this.readOnly = options.read_only || false;
        this.defaultValue = options.default;
        this.allow_null = options.allow_null || false;
        this.label = options.label || this.name;
        this.helpText = options.help_text;
        this.choices = options.choices;
    }
    Field.prototype.isBoolean = function () {
        if (this.constructor.fieldType === 'checkbox') {
            return true;
        }
        return false;
    };
    Field.prototype.getExtraTemplateOptions = function () {
        return {};
    };
    Field.prototype.getTemplateOptions = function () {
        var tplOptions = {
            label: this.label,
            type: this.constructor.templateType,
            required: this.required,
            disabled: this.readOnly
        };
        if (!this.isBoolean() && this.allow_null) {
            tplOptions.required = false;
        }
        return utils.smartExtend({}, tplOptions, this.getExtraTemplateOptions());
    };
    Field.prototype.getConfigurationObject = function () {
        var configurationObject = {
            type: this.constructor.fieldType,
            key: this.name,
            templateOptions: this.getTemplateOptions()
        };
        if (this.defaultValue !== undefined) {
            configurationObject.defaultValue = this.defaultValue;
        }
        return configurationObject;
    };
    Field.fieldType = 'input';
    return Field;
})();
exports.Field = Field;
var BooleanField = (function (_super) {
    __extends(BooleanField, _super);
    function BooleanField() {
        _super.apply(this, arguments);
    }
    BooleanField.fieldType = 'checkbox';
    BooleanField.templateType = null;
    return BooleanField;
})(Field);
exports.BooleanField = BooleanField;
