package com.skrymer.health.tracker.repositories

import com.skrymer.health.tracker.domain.WeightMeasurement
import org.springframework.data.mongodb.repository.MongoRepository

interface WeightMeasurementRepository: MongoRepository<WeightMeasurement, String> {
    fun findByUserName(userName: String?): List<WeightMeasurement>
}