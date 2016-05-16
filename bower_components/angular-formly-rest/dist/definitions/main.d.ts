import { IDjangoRestFieldOptions } from "./interfaces";
import { Field } from "./fields/base";
import { IFieldFactory } from "./DjangoRestConfig";
export declare class Converter {
    fields: Array<Field>;
    constructor(djangoRestMeta: any, fieldFactoryFn: IFieldFactory);
    convert(): any[];
}
export declare var DjangoRestFrameworkAdapter: (djangoRestMeta: IDjangoRestFieldOptions[], fieldFactoryFn?: IFieldFactory) => any[];
