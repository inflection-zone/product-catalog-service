import { uuid } from "../miscellaneous/system.types";
import { ProductImageDto } from "./product.image.dto";


////////////////////////////////////////////////////////////


export interface ProductImageSearchFilters {
    productImageId: string;
    ImageUrl: string;
}


////////////////////////////////////////////////////////////


export interface ProductImageSearchResults {
    Items: ProductImageDto[];
}