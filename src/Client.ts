/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Order } from "./api/resources/order/client/Client";

export declare namespace TronergyApiClient {
    export interface Options {
        environment?: core.Supplier<environments.TronergyApiEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class TronergyApiClient {
    protected _order: Order | undefined;

    constructor(protected readonly _options: TronergyApiClient.Options) {}

    public get order(): Order {
        return (this._order ??= new Order(this._options));
    }
}
