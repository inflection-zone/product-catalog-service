import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface InventoryDto {
    //productId: uuid;
    merchantId: uuid;
    BatchNumber: uuid;
    TotalStock: number;
    CurrentStock: number;
    Units: number;
    UnitsOfMeasure: string;
}