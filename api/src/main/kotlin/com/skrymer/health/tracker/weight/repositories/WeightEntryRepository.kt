package com.skrymer.health.tracker.weight.repositories

import com.skrymer.health.tracker.weight.domain.WeightEntry
import org.springframework.data.mongodb.repository.MongoRepository

interface WeightEntryRepository: MongoRepository<WeightEntry, String> {
    fun findByUserName(userName: String?): List<WeightEntry>
}