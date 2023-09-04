import { uuid } from "../miscellaneous/system.types";
export interface ProductDetailsDomainEntity {
    ProductId: uuid;
    Information: string;
    AdditionalInformation: string;
    TechnicalDetails: string;
    PartNumber: string;
    ModelNumber: string;
    CountryOfOrigin: string;
    ItemWeight: number;
    ItemDimensions: string;
    PackItemCount: number;
}

export interface IProductDetailsUpdateModel {
    ProductId: uuid;
    Information?: string;
    AdditionalInformation?: string;
    TechnicalDetails?: string;
    PartNumber: string;
    ModelNumber: string;
    CountryOfOrigin?: string;
    ItemWeight?: number;
    ItemDimensions?: string;
    PackItemCount?: number;
}

  