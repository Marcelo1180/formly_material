"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base = require('./base');
var utils = require('../utils');
var CharField = (function (_super) {
    __extends(CharField, _super);
    function CharField(options) {
        _super.call(this, options);
        this.minLength = options.min_length;
        this.maxLength = options.max_length;
    }
    CharField.prototype.getExtraTemplateOptions = function () {
        return utils.smartExtend({}, {
            minlength: this.minLength,
            maxlength: this.maxLength
        });
    };
    CharField.fieldType = 'input';
    CharField.templateType = 'text';
    return CharField;
})(base.Field);
exports.CharField = CharField;
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField(options) {
        _super.call(this, options);
        this.rows = 2;
    }
    TextField.prototype.getExtraTemplateOptions = function () {
        return utils.extend(_super.prototype.getExtraTemplateOptions.call(this), {
            rows: this.rows
        });
    };
    TextField.fieldType = 'textarea';
    TextField.templateType = null;
    return TextField;
})(CharField);
exports.TextField = TextField;
var RegexField = (function (_super) {
    __extends(RegexField, _super);
    function RegexField(options) {
        _super.call(this, options);
        this.pattern = options.pattern || this.pattern;
    }
    RegexField.prototype.getExtraTemplateOptions = function () {
        return utils.extend(_super.prototype.getExtraTemplateOptions.call(this), {
            pattern: this.pattern
        });
    };
    return RegexField;
})(CharField);
exports.RegexField = RegexField;
var EmailField = (function (_super) {
    __extends(EmailField, _super);
    function EmailField() {
        _super.apply(this, arguments);
    }
    EmailField.prototype.getExtraTemplateOptions = function () {
        return utils.extend(_super.prototype.getExtraTemplateOptions.call(this), {
            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}$"
        });
    };
    EmailField.templateType = 'email';
    return EmailField;
})(CharField);
exports.EmailField = EmailField;
var PasswordField = (function (_super) {
    __extends(PasswordField, _super);
    function PasswordField() {
        _super.apply(this, arguments);
    }
    PasswordField.templateType = 'password';
    return PasswordField;
})(CharField);
exports.PasswordField = PasswordField;
var HiddenField = (function (_super) {
    __extends(HiddenField, _super);
    function HiddenField() {
        _super.apply(this, arguments);
    }
    HiddenField.templateType = 'hidden';
    return HiddenField;
})(CharField);
exports.HiddenField = HiddenField;
var URLField = (function (_super) {
    __extends(URLField, _super);
    function URLField() {
        _super.apply(this, arguments);
        this.pattern = '(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?';
    }
    URLField.templateType = 'url';
    return URLField;
})(RegexField);
exports.URLField = URLField;
var IPAddressField = (function (_super) {
    __extends(IPAddressField, _super);
    function IPAddressField() {
        _super.apply(this, arguments);
        this.pattern = '^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$';
    }
    return IPAddressField;
})(RegexField);
exports.IPAddressField = IPAddressField;
