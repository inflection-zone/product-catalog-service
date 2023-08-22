export interface IProductOfferDto {
    id: string;
    ProductId: string;
    Title: string;
    Details: string;
}

export interface IProductOfferUpdateModel{
    ProductId?: string;
    Title?: string;
    Details?: string;
}