import { IResourceItem, MetaQuery } from "../../interfaces";
/**
 * Hook that returns a function to get meta.
 * The meta is a combination of the resource meta, hook meta and query params.
 * @internal
 */
export declare const useMeta: () => ({ resource, meta: metaFromProp, }?: {
    resource?: IResourceItem | undefined;
    meta?: MetaQuery | undefined;
}) => {
    queryContext?: Omit<import("@tanstack/query-core").QueryFunctionContext<import("@tanstack/query-core").QueryKey, any>, "meta"> | undefined;
    operation?: string | undefined;
    fields?: import("../../interfaces/metaData/fields").Fields | undefined;
    variables?: import("../../interfaces/metaData/variableOptions").VariableOptions | undefined;
    gqlQuery?: import("graphql").DocumentNode | undefined;
    gqlMutation?: import("graphql").DocumentNode | undefined;
};
//# sourceMappingURL=index.d.ts.map