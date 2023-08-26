import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface ProductDetailsDto {
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