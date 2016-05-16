import { IDjangoRestFieldOptions } from "./interfaces";
import { Field } from "./fields/base";
export default DjangoRestConfig;
export interface IFieldFactory {
    (djangoRestMeta: IDjangoRestFieldOptions): Field | string;
}
/**
 *
 */
export declare class DjangoRestConfig {
    private static _fieldMapping;
    /**
     * Instantiate the appropriate Field from the given configuration.
     *
     * @param djangoRestMeta
     * @param factoryFn
     * @returns {any}
       */
    static factory(djangoRestMeta: IDjangoRestFieldOptions, factoryFn?: IFieldFactory): Field;
    setType(type: string, fieldClass: Field): void;
    getType(type: string): Field;
}
