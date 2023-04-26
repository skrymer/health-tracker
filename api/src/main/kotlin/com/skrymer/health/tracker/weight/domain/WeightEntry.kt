package com.skrymer.health.tracker.weight.domain

import com.skrymer.health.tracker.types.WeightEntryDto
import com.skrymer.health.tracker.types.WeightUnitDto
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.index.IndexDirection
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@Document("weight-entry")
class WeightEntry(
    @Id var id: String?,
    var weight: Double,
    var fatPercentage: Double,
    var timeStamp: LocalDateTime,
    var weightUnit: WeightUnit,
    @Indexed(direction = IndexDirection.ASCENDING) var userName: String
) {
    companion object Factory {
        fun fromDto(dto: WeightEntryDto): WeightEntry {
            return WeightEntry(
                dto.id,
                dto.weight,
                dto.fatPercentage,
                LocalDateTime.parse(dto.timestamp),
                WeightUnit.valueOf(dto.unit.name),
                dto.userName
            )
        }

        fun toDto(domain: WeightEntry): WeightEntryDto {
            return WeightEntryDto(
                domain.id, domain.weight, domain.fatPercentage, WeightUnitDto.valueOf(domain.weightUnit.name), domain.timeStamp.format(
                    DateTimeFormatter.ISO_DATE_TIME
                ), domain.userName
            )
        }
    }
}