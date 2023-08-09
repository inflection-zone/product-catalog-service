export interface BrandDto {
        id: string;
        name: string;
        logoUrl: string;
}

export interface BrandUpdateModel{
        name? : string,
        logoUrl? : string
}