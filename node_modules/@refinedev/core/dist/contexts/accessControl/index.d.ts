import React from "react";
import { IAccessControlContext, IAccessControlContextReturnType } from "./IAccessControlContext";
/** @deprecated default value for access control context has no use and is an empty object. */
export declare const defaultAccessControlContext: IAccessControlContext;
export declare const AccessControlContext: React.Context<IAccessControlContextReturnType>;
export { IAccessControlContext };
export declare const AccessControlContextProvider: React.FC<IAccessControlContext & {
    children?: React.ReactNode;
}>;
//# sourceMappingURL=index.d.ts.map