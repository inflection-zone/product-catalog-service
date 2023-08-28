export interface IBrandDto {
        id: string;
        Name: string;
        LogoUrl: string;
}

export interface IBrandUpdateModel{
        Name? : string,
        LogoUrl? : string
}