package com.skrymer.health.tracker.weight

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import com.skrymer.health.tracker.weight.domain.WeightEntry
import com.skrymer.health.tracker.weight.repositories.WeightEntryRepository
import com.skrymer.health.tracker.types.WeightEntryDto

@DgsComponent
class WeightEntryDataFetcher(val weightEntryRepository: WeightEntryRepository) {

    @DgsQuery
    fun weightEntries(@InputArgument userNameFilter : String?): List<WeightEntryDto> {
        return weightEntryRepository.findByUserName(userNameFilter).sortedBy { it.timeStamp }.filter { it.userName == userNameFilter }.map { WeightEntry.toDto(it) }
    }
}