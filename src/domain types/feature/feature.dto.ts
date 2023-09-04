import { uuid } from "../miscellaneous/system.types";

export interface FeatureDto {
    featureId: uuid;
    Name: string;
    Description: string;
    ImageUrl: string;
}