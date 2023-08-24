import { FeatureDto } from "../../domain types/feature/feature.domain.type";
import { Feature } from "../models/feature.model";

export class FeatureMapper {
    static toDto = (feature: Feature): FeatureDto => {
        if (feature === null) {
            return null;
        }
        const dto: FeatureDto = {
            id: feature.id,
            Name: feature.Name,
            Description: feature.Description,
            ImageUrl: feature.ImageUrl,
        };
        return dto;
    }
}