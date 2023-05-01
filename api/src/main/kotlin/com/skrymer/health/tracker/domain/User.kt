package com.skrymer.health.tracker.domain

import com.skrymer.health.tracker.types.HeightUnitDto
import com.skrymer.health.tracker.types.UserDto
import com.skrymer.health.tracker.types.WeightUnitDto
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.index.IndexDirection
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document

@Document("users")
class User(
    @Id var id: String?,
    @Indexed(direction = IndexDirection.ASCENDING) var userName: String,
    var email: String,
    var firstName: String,
    var lastName: String,
    var height: Double,
    var heightUnit: HeightUnit,
    var preferredWeightUnit: WeightUnit
) {

    companion object Factory {
        fun fromDto(dto: UserDto): User {
            return User(
                dto.id,
                dto.userName,
                dto.email,
                dto.firstName,
                dto.lastName,
                dto.height,
                HeightUnit.valueOf(dto.heightUnit.name),
                WeightUnit.valueOf(dto.preferredWeightUnit.name)
            )
        }

        fun toDto(domain: User): UserDto {
            return UserDto(
                domain.id,
                domain.userName,
                domain.email,
                domain.firstName,
                domain.lastName,
                domain.height,
                HeightUnitDto.valueOf(domain.heightUnit.name),
                WeightUnitDto.valueOf(domain.preferredWeightUnit.name)
            )

        }
    }
}