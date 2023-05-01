package com.skrymer.health.tracker.weight

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.autoconfig.DgsAutoConfiguration
import com.skrymer.health.tracker.api.WeightMeasurementsDataFetcher
import com.skrymer.health.tracker.domain.WeightMeasurement
import com.skrymer.health.tracker.domain.WeightUnit
import com.skrymer.health.tracker.repositories.WeightMeasurementRepository
import com.skrymer.health.tracker.types.WeightEntryDto
import com.skrymer.health.tracker.types.WeightUnitDto
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.mockito.Mockito
import org.springframework.boot.test.mock.mockito.MockBean
import java.time.LocalDateTime

@SpringBootTest(classes = [DgsAutoConfiguration::class, WeightMeasurementsDataFetcher::class])
class WeightMeasurementDataFetcherTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    @MockBean
    lateinit var weightMeasurementRepository: WeightMeasurementRepository

    @BeforeEach
    fun before() {
        Mockito.`when`(weightMeasurementRepository.findByUserName("testUser")).thenAnswer {
            listOf(WeightMeasurement("1234", 110.0, LocalDateTime.parse("2023-04-15T10:36:19"), WeightUnit.KILO_GRAM, "testUser"))
        }
    }
    @Test
    fun fetchWeightEntriesByUsername() {
        val weight : WeightEntryDto = dgsQueryExecutor.executeAndExtractJsonPathAsObject("""
            {
                weightEntries(userNameFilter: "testUser") {
                    id
                    weight
                    unit
                    timestamp
                    userName
                }
            }
        """.trimIndent(), "data.weightEntries[0]", WeightEntryDto::class.java)

        assertThat(weight).hasFieldOrPropertyWithValue("id", "1234")
        assertThat(weight).hasFieldOrPropertyWithValue("weight", 110.0)
        assertThat(weight).hasFieldOrPropertyWithValue("unit", WeightUnitDto.KILO_GRAM)
        assertThat(weight).hasFieldOrPropertyWithValue("timestamp", "2023-04-15T10:36:19")
        assertThat(weight).hasFieldOrPropertyWithValue("userName", "testUser")
    }
}