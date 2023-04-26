package com.skrymer.health.tracker.weight

import com.skrymer.health.tracker.types.WeightEntryDto
import com.skrymer.health.tracker.weight.domain.WeightEntry
import com.skrymer.health.tracker.weight.repositories.WeightEntryRepository
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api")
class WeightApi(val weightEntryRepository: WeightEntryRepository) {

    @PostMapping("/weight")
    fun save(@RequestBody entry: WeightEntryDto) {
        weightEntryRepository.save(WeightEntry.fromDto(entry))
    }
}