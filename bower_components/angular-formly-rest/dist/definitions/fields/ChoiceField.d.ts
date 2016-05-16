import base = require('./base');
import interfaces = require('../interfaces');
/**
 * Base string field interface.
 */
export interface IChoiceField extends base.IField {
    /**
     * List of accepted values.
     */
    choices: Array<interfaces.IDjangoRestOption>;
}
/**
 * Base ChoiceField class.
 */
export declare abstract class ChoiceField extends base.Field implements IChoiceField, base.IField {
    protected static templateType: string;
    choices: Array<interfaces.IDjangoRestOption>;
    constructor(options: interfaces.IDjangoRestFieldOptions);
    protected getExtraTemplateOptions(): {
        options?: interfaces.IOption[];
    };
}
export declare class RadioField extends ChoiceField {
    protected static fieldType: string;
}
export declare class SelectField extends ChoiceField {
    protected static fieldType: string;
}
