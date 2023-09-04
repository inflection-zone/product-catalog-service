import { uuid } from "../miscellaneous/system.types";
export interface ProductFeatureDomainEntity {
  ProductId: uuid;
  FeatureId:uuid;
}
export interface IProductFeatureUpdateModel {
  ProductId?: uuid;
  FeatureId?:uuid;
}



