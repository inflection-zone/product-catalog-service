import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface ProductFeatureDomainEntity {
    productId: uuid;
    featureId: uuid;
}

export interface IProductFeatureUpdateModel {
    productId?: uuid;
    featureId?: uuid;
}