import { uuid } from "../miscellaneous/system.types";


export interface ProductDetailsDto {
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