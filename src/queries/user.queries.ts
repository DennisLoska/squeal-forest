/** Types generated for queries found in "src/queries/user.sql" */
import { PreparedQuery } from "@pgtyped/runtime";

/** 'FindUserByName' parameters type */
export interface IFindUserByNameParams {
    name?: string | null | void;
}

/** 'FindUserByName' return type */
export interface IFindUserByNameResult {
    email: string | null;
    id: number;
    name: string | null;
}

/** 'FindUserByName' query type */
export interface IFindUserByNameQuery {
    params: IFindUserByNameParams;
    result: IFindUserByNameResult;
}

const findUserByNameIR: any = {
    usedParamSet: { name: true },
    params: [
        {
            name: "name",
            required: false,
            transform: { type: "scalar" },
            locs: [{ a: 33, b: 37 }],
        },
    ],
    statement: "SELECT * FROM users WHERE name = :name",
};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM users WHERE name = :name
 * ```
 */
export const findUserByName = new PreparedQuery<
    IFindUserByNameParams,
    IFindUserByNameResult
>(findUserByNameIR);
