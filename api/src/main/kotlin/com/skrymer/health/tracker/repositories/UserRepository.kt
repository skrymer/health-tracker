package com.skrymer.health.tracker.repositories

import com.skrymer.health.tracker.domain.User
import org.springframework.data.mongodb.repository.MongoRepository

interface UserRepository: MongoRepository<User, String> {
    fun findByUserName(userName: String?): List<User>
}