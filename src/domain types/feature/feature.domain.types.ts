export interface FeatureDto {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}
export interface FeatureUpdateModel {
    name?: string;
    description?: string;
    imageUrl?: string;
}