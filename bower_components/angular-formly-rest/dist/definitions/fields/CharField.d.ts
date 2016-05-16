import base = require('./base');
import interfaces = require('../interfaces');
/**
 * Base string field interface.
 */
export interface ICharField extends base.IField {
    /**
    * The minimum length (in characters) of the field.
    */
    minLength?: number;
    /**
    * The maximum length (in characters) of the field.
    */
    maxLength?: number;
}
export interface ITextField extends ICharField {
    /**
    * Specifies the rows attribute for the textarea element.
    */
    rows?: number;
}
/**
 * Base string field class. The default form widget for this type is "input".
 * CharField has two extra optional arguments: `minLength` and `maxLength`.
 */
export declare class CharField extends base.Field implements ICharField {
    protected static fieldType: string;
    protected static templateType: string;
    minLength: number;
    maxLength: number;
    constructor(options: interfaces.IDjangoRestFieldOptions);
    protected getExtraTemplateOptions(): Object;
}
export declare class TextField extends CharField implements ITextField {
    protected static fieldType: string;
    protected static templateType: string;
    rows: number;
    constructor(options: interfaces.IDjangoRestFieldOptions);
    protected getExtraTemplateOptions(): Object;
}
