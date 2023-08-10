import { FeatureDto } from "../../domain types/feature/feature.domain.types"; 
import { Feature } from "../models/feature.model";

export class FeatureMapper {
    static toDto = (feature: Feature): FeatureDto => {
        if (feature === null) {
            return null;
        }
        const dto: FeatureDto = {
            id: feature.id,
            name: feature.name,
            description: feature.description,
            imageUrl: feature.imageUrl,
        };
        return dto;
    }
}