import { uuid } from "../miscellaneous/system.types";
import { InventoryDto } from "./inventory.dto";


////////////////////////////////////////////////////////////


export interface InventorySearchFilters{
    //productId?: uuid;
    merchantId?: uuid;
    BatchNumber?: uuid;
    TotalStock?: number;
    CurrentStock?: number;
    Units?: number;
    UnitsOfMeasure?: string;
}


////////////////////////////////////////////////////////////


export interface InventorySearchResults{
    Items  : InventoryDto[] ;
}