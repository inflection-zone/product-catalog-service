import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface InventoryDto {
    productId: uuid;
    merchantId: uuid;
    batchNumber: uuid;
    totalStock: number;
    currentStock: number;
    units: number;
    unitsOfMeasure: string;
}