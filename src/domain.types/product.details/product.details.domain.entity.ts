import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface ProductDetailsDomainEntity {
    productId: uuid;
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
    productId?: uuid;
    Information?: string;
    AdditionalInformation?: string;
    TechnicalDetails?: string;
    PartNumber?: string;
    ModelNumber?: string;
    CountryOfOrigin?: string;
    ItemWeight?: number;
    ItemDimensions?: string;
    PackItemCount?: number;
}