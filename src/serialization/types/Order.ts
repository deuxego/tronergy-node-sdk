/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as TronergyApi from "../../api/index";
import * as core from "../../core";
import { OrderStatus } from "./OrderStatus";

export const Order: core.serialization.ObjectSchema<serializers.Order.Raw, TronergyApi.Order> =
    core.serialization.object({
        id: core.serialization.string(),
        status: OrderStatus,
        address: core.serialization.string(),
        energy: core.serialization.number(),
        cost: core.serialization.number(),
    });

export declare namespace Order {
    export interface Raw {
        id: string;
        status: OrderStatus.Raw;
        address: string;
        energy: number;
        cost: number;
    }
}