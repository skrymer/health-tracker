package com.skrymer.health.tracker.api

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import com.skrymer.health.tracker.domain.WeightMeasurement
import com.skrymer.health.tracker.repositories.WeightMeasurementRepository
import com.skrymer.health.tracker.types.WeightMeasurementDto

@DgsComponent
class WeightMeasurementsDataFetcher(val weightMeasurementRepository: WeightMeasurementRepository) {

    @DgsQuery
    fun weightMeasurements(@InputArgument userNameFilter : String?): List<WeightMeasurementDto> {
        return weightMeasurementRepository.findByUserName(userNameFilter).sortedBy { it.timeStamp }.filter { it.userName == userNameFilter }.map { WeightMeasurement.toDto(it) }
    }
}