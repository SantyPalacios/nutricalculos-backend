export const __esModule: boolean;
export namespace Prisma {
    namespace TransactionIsolationLevel {
        let ReadUncommitted: string;
        let ReadCommitted: string;
        let RepeatableRead: string;
        let Serializable: string;
    }
    namespace UserScalarFieldEnum {
        let id: string;
        let email: string;
        let username: string;
        let password: string;
        let peso: string;
        let altura: string;
        let imc: string;
        let sexo: string;
        let edad: string;
        let actividad: string;
        let red: string;
    }
    namespace SortOrder {
        let asc: string;
        let desc: string;
    }
    namespace QueryMode {
        let _default: string;
        export { _default as default };
        export let insensitive: string;
    }
    namespace ModelName {
        let User: string;
    }
}
export const $Enums: {};
export namespace Prisma {
    export namespace prismaVersion {
        let client: string;
        let engine: string;
    }
    export function PrismaClientKnownRequestError(): never;
    export function PrismaClientUnknownRequestError(): never;
    export function PrismaClientRustPanicError(): never;
    export function PrismaClientInitializationError(): never;
    export function PrismaClientValidationError(): never;
    export function NotFoundError(): never;
    export { Decimal };
    /**
     * Re-export of sql-template-tag
     */
    export function sql(): never;
    export function empty(): never;
    export function join(): never;
    export function raw(): never;
    export let validator: typeof Public.validator;
    /**
    * Extensions
    */
    export function getExtensionContext(): never;
    export function defineExtension(): never;
    export let DbNull: {
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    export let JsonNull: {
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    export let AnyNull: {
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    export namespace NullTypes {
        let DbNull_1: {
            new (arg?: symbol): {
                _getNamespace(): string;
                _getName(): string;
                toString(): string;
            };
        };
        export { DbNull_1 as DbNull };
        let JsonNull_1: {
            new (arg?: symbol): {
                _getNamespace(): string;
                _getName(): string;
                toString(): string;
            };
        };
        export { JsonNull_1 as JsonNull };
        let AnyNull_1: {
            new (arg?: symbol): {
                _getNamespace(): string;
                _getName(): string;
                toString(): string;
            };
        };
        export { AnyNull_1 as AnyNull };
    }
}
/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
export class PrismaClient {
}
import { Decimal } from "./runtime/index-browser.js";
import { Public } from "./runtime/index-browser.js";
//# sourceMappingURL=wasm.d.ts.map