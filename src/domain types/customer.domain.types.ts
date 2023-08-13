

export interface customerDto {
    id:string;
    productid:string;
    customerid:string;
    verifiedPurchase:string;
    Rating:string;
    Titles:string;
    Description:string;
    FoundUsefulCount:string;
}
 export interface customerUpdateModel{
    Titles?:string,
    Description?:string,
    FoundUsefulCount?:string,
 }