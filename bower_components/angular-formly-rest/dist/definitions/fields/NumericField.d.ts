/// <reference path="../_all.d.ts" />
import base = require('./base');
import interfaces = require('../interfaces');
export interface INumericField extends base.IField {
    /**
     * The minimum value.
     */
    minValue?: number;
    /**
     * The maximum value.
     */
    maxValue?: number;
}
export declare class NumericField extends base.Field implements INumericField {
    protected static fieldType: string;
    protected static templateType: string;
    minValue: number;
    maxValue: number;
    constructor(options: interfaces.IDjangoRestFieldOptions);
    protected getExtraTemplateOptions(): Object;
}
