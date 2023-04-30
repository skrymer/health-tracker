package com.skrymer.health.tracker.weight.repositories

import com.skrymer.health.tracker.weight.domain.WeightMeasurement
import org.springframework.data.mongodb.repository.MongoRepository

interface WeightMeasurementRepository: MongoRepository<WeightMeasurement, String> {
    fun findByUserName(userName: String?): List<WeightMeasurement>
}