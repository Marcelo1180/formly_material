/// <reference path="../_all.d.ts" />
import AngularFormly = require('angular-formly');
import interfaces = require('../interfaces');
export interface ITemplateOptions extends AngularFormly.ITemplateOptions {
    options?: Array<Object>;
}
export interface IField {
    /**
     * Field's name.
     */
    name: string;
    /**
     * Is this field required?
     */
    required: boolean;
    /**
     * Specifies if the field is read only.
     */
    readOnly?: boolean;
    /**
     * Field's label.
     */
    label?: string;
    /**
     * Extra "help" text to be displayed in the form.
     */
    helpText?: string;
}
/**
 * Base class for all fields.
 */
export declare class Field implements IField {
    "constructor": typeof Field;
    /**
     * Specifies HTML type, e.g: input, checkbox, etc.
     */
    protected static fieldType: string;
    /**
     * Specifies the type of field to be rendered, e.g: password, email, etc.
     */
    protected static templateType: string;
    protected templateOptions: ITemplateOptions;
    name: string;
    required: boolean;
    readOnly: boolean;
    label: string;
    helpText: string;
    choices: Array<Object>;
    /**
     * Create a new Field instance.
     * @param options  The field metadata.
     */
    constructor(options: interfaces.IDjangoRestFieldOptions);
    protected getExtraTemplateOptions(): {};
    private getTemplateOptions();
    getConfigurationObject(): any;
}
/**
 * BooleanField class will be represented by a `checkbox` input.
 * It does not have any custom attributes.
 */
export declare class BooleanField extends Field {
    protected static fieldType: string;
    protected static templateType: string;
}
export declare class EmailField extends Field {
    protected static fieldType: string;
    protected static templateType: string;
}
export declare class PasswordField extends Field {
    protected static fieldType: string;
    protected static templateType: string;
}
export declare class HiddenField extends Field {
    protected static fieldType: string;
    protected static templateType: string;
}
