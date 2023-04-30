package com.skrymer.health.tracker.weight

import com.skrymer.health.tracker.types.WeightMeasurementDto
import com.skrymer.health.tracker.weight.domain.WeightMeasurement
import com.skrymer.health.tracker.weight.repositories.WeightMeasurementRepository
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api")
class WeightApi(val weightMeasurementRepository: WeightMeasurementRepository) {

    // TODO auth
    @PostMapping("/weight/measurement")
    fun save(@RequestBody entry: WeightMeasurementDto) {
        weightMeasurementRepository.save(WeightMeasurement.fromDto(entry))
    }
}