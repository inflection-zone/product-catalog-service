export interface FeatureDto {
    id: string;
    Name: string;
    Description: string;
    ImageUrl: string;
}
export interface IFeatureUpdateModel {
    Name?: string;
    Description?: string;
    ImageUrl?: string;
}