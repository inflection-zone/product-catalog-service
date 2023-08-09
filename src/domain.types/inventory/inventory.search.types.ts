import { uuid } from "../miscellaneous/system.types";
import { InventoryDto } from "./inventory.dto";


////////////////////////////////////////////////////////////


export interface InventorySearchFilters{
    productId?: uuid;
    merchantId?: uuid;
    batchNumber?: uuid;
    totalStock?: number;
    currentStock?: number;
    units?: number;
    unitsOfMeasure?: string;
}


////////////////////////////////////////////////////////////


export interface InventorySearchResults{
    Items  : InventoryDto[] ;
}