/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as TronergyApi from "../index";

export interface Order {
    /** Unique identifier for the order. */
    id: string;
    /** Current status of the order. */
    status: TronergyApi.OrderStatus;
    /** Tron wallet address associated with the order. */
    address: string;
    /** Amount of energy ordered. */
    energy: number;
    /** Total cost of the order in TRX. */
    cost: number;
}