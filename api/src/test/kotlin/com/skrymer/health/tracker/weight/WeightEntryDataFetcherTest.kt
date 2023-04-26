package com.skrymer.health.tracker.weight

import com.netflix.graphql.dgs.DgsQueryExecutor
import com.netflix.graphql.dgs.autoconfig.DgsAutoConfiguration
import com.skrymer.health.tracker.weight.domain.WeightEntry
import com.skrymer.health.tracker.weight.domain.WeightUnit
import com.skrymer.health.tracker.weight.repositories.WeightEntryRepository
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

@SpringBootTest(classes = [DgsAutoConfiguration::class, WeightEntryDataFetcher::class])
class WeightEntryDataFetcherTest {

    @Autowired
    lateinit var dgsQueryExecutor: DgsQueryExecutor

    @MockBean
    lateinit var weightEntryRepository: WeightEntryRepository

    @BeforeEach
    fun before() {
        Mockito.`when`(weightEntryRepository.findByUserName("testUser")).thenAnswer {
            listOf(WeightEntry("1234", 110.0, LocalDateTime.parse("2023-04-15T10:36:19"), WeightUnit.KILO_GRAM, "testUser"))
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