/**
 * angular-formly-rest utilities.
 */
export interface IObject {
    [key: string]: any;
}
/**
 * Copy all of the properties in the source objects over to the destination
 * object, and return the destination object.
 *
 * @param destination
 * @param sources
 * @returns {Object}
 */
export declare function extend(destination: IObject, ...sources: Array<IObject>): Object;
/**
 * Copy all non null properties in the source objects over to the destination
 * object, and return the destination object.
 *
 * @param destination
 * @param sources
 * @returns {Object}
 */
export declare function smartExtend(destination: IObject, ...sources: Array<IObject>): Object;
