import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface FeatureDomainEntity {
    featureId: uuid;
    Name: string;
    Description: string;
    ImageUrl: string;
}

export interface IFeatureUpdateModel {
    Name?: string;
    Description?: string;
    ImageUrl?: string;
}
