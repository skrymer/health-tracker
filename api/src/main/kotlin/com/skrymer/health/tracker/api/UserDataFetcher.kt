package com.skrymer.health.tracker.api

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import com.skrymer.health.tracker.domain.User
import com.skrymer.health.tracker.types.UserDto
import com.skrymer.health.tracker.repositories.UserRepository

@DgsComponent
class UserDataFetcher(val userRepository: UserRepository) {

    @DgsQuery
    fun users(@InputArgument userNameFilter : String?): List<UserDto> {
        return userRepository.findByUserName(userNameFilter).map { User.toDto(it) }
    }
}