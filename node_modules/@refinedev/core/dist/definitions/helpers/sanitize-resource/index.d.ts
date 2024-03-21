import { IResourceItem } from "../../../interfaces/bindings/resource";
/**
 * Remove all properties that are non-serializable from a resource object.
 */
export declare const sanitizeResource: (resource?: (Partial<IResourceItem> & Required<Pick<IResourceItem, "name">> & {
    children?: unknown;
}) | undefined) => (Partial<IResourceItem> & Required<Pick<IResourceItem, "name">>) | undefined;
//# sourceMappingURL=index.d.ts.map