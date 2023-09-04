import { FeatureDto } from "../../domain types/feature/feature.dto";
import { Feature } from "../models/feature.model";

export class FeatureMapper {
    static toDto = (feature: Feature): FeatureDto => {
        if (feature === null) {
            return null;
        }
        const dto: FeatureDto = {
            featureId: feature.featureId,
            Name: feature.Name,
            Description: feature.Description,
            ImageUrl: feature.ImageUrl,
        };
        return dto;
    }
}
   