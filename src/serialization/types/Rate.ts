/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as TronergyApi from "../../api/index";
import * as core from "../../core";

export const Rate: core.serialization.ObjectSchema<serializers.Rate.Raw, TronergyApi.Rate> = core.serialization.object({
    rate: core.serialization.number(),
});

export declare namespace Rate {
    export interface Raw {
        rate: number;
    }
}