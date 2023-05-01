package com.skrymer.health.tracker.domain

import com.skrymer.health.tracker.types.WeightMeasurementDto
import com.skrymer.health.tracker.types.WeightUnitDto
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.index.IndexDirection
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@Document("weight-measurement")
class WeightMeasurement(
    @Id var id: String?,
    var weight: Double,
    var fatPercentage: Double,
    var timeStamp: LocalDateTime,
    var weightUnit: WeightUnit,
    @Indexed(direction = IndexDirection.ASCENDING) var userName: String
) {
    companion object Factory {
        fun fromDto(dto: WeightMeasurementDto): WeightMeasurement {
            return WeightMeasurement(
                dto.id,
                dto.weight,
                dto.fatPercentage,
                LocalDateTime.parse(dto.timestamp),
                WeightUnit.valueOf(dto.unit.name),
                dto.userName
            )
        }

        fun toDto(domain: WeightMeasurement): WeightMeasurementDto {
            return WeightMeasurementDto(
                domain.id, domain.weight, domain.fatPercentage, WeightUnitDto.valueOf(domain.weightUnit.name), domain.timeStamp.format(
                    DateTimeFormatter.ISO_DATE_TIME
                ), domain.userName
            )
        }
    }
}