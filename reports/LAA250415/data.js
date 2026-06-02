// Field data for LAA250415 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAA250415",
  "metadata": {
    "field_area_ha": 32.334,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 22.68,
      "mean_elevation": 548.73,
      "min_elevation": 533.27,
      "max_elevation": 555.951
    },
    "soil": {
      "bulk_density kg/dm³": 1.33,
      "cation_exchange_capacity cmol(c)/kg": 20.681,
      "clay_particles g/100g (%)": 21.989,
      "sand particles g/100g (%)": 36.342,
      "silt particles g/100g (%)": 41.669,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-02-11": {
      "min": 0.192,
      "max": 0.384,
      "median": 0.285,
      "mean": 0.286,
      "sd": 0.027
    },
    "2025-02-24": {
      "min": 0.166,
      "max": 0.363,
      "median": 0.26,
      "mean": 0.26,
      "sd": 0.031
    },
    "2025-03-05": {
      "min": 0.226,
      "max": 0.491,
      "median": 0.374,
      "mean": 0.373,
      "sd": 0.027
    },
    "2025-03-17": {
      "min": 0.224,
      "max": 0.521,
      "median": 0.377,
      "mean": 0.375,
      "sd": 0.043
    },
    "2025-03-28": {
      "min": 0.277,
      "max": 0.58,
      "median": 0.464,
      "mean": 0.458,
      "sd": 0.044
    },
    "2025-04-03": {
      "min": 0.23,
      "max": 0.614,
      "median": 0.506,
      "mean": 0.499,
      "sd": 0.05
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 31.985,
      "area_percentage": 1.0
    },
    "dominant_category": "medium vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "low_vegetation": {
        "area_ha": 0.194,
        "area_percentage": 0.006
      },
      "medium vegetation": {
        "area_ha": 27.123,
        "area_percentage": 0.848
      },
      "high_vegetation": {
        "area_ha": 4.667,
        "area_percentage": 0.146
      },
      "very_high_vegetation": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      }
    }
  },
  "growth_variability": {
    "variability_category": "very_high",
    "number_of_zones": 5,
    "evi_median": 0.608,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 2.18,
          "percentage": 6.81
        },
        "EVI_statistics": {
          "mean": 0.464,
          "median": 0.473,
          "min": 0.315,
          "max": 0.517
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 6.92,
          "percentage": 21.63
        },
        "EVI_statistics": {
          "mean": 0.554,
          "median": 0.556,
          "min": 0.517,
          "max": 0.577
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 15.2,
          "percentage": 47.53
        },
        "EVI_statistics": {
          "mean": 0.609,
          "median": 0.61,
          "min": 0.577,
          "max": 0.638
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 7.68,
          "percentage": 24.02
        },
        "EVI_statistics": {
          "mean": 0.654,
          "median": 0.653,
          "min": 0.638,
          "max": 0.698
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.0,
          "percentage": 0.01
        },
        "EVI_statistics": {
          "mean": 0.704,
          "median": 0.704,
          "min": 0.7,
          "max": 0.707
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 3.51,
            "area_percentage": 11.24,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 6.63,
            "area_percentage": 21.24,
            "zone_number": 2
          },
          "similar": {
            "ha": 8.54,
            "area_percentage": 27.35,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 6.61,
            "area_percentage": 21.17,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 5.93,
            "area_percentage": 18.99,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-04-15",
      "reference_image_date": "2025-03-28",
      "change_period": 18
    },
    "median_EVI_change": {
      "old_value": 0.464,
      "new_value": 0.608,
      "difference": 0.145
    },
    "growth trend": "minor_growth",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.0,
          "percentage": 0.0,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 0.0,
          "percentage": 0.0,
          "zone_number": 2
        },
        "no_change": {
          "ha": 0.83,
          "percentage": 2.6,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 17.99,
          "percentage": 56.25,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 13.16,
          "percentage": 41.15,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.761943282599999 49.08911742356061)",
          "new_value": 0.618,
          "old_value": 0.451,
          "value_difference": 0.167,
          "area_ha": 0.572,
          "category": "major_growth",
          "location": "SW",
          "id": 1
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 2.31,
          "percentage": 7.23,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.05,
          "percentage": 12.66,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 18.7,
          "percentage": 58.46,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 5.42,
          "percentage": 16.94,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.51,
          "percentage": 4.71,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.7645346098 49.08847419374243)",
          "new_value": 0.587,
          "old_value": 0.497,
          "value_difference": 0.09,
          "area_ha": 0.927,
          "category": "major_decline",
          "location": "S",
          "id": 1
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 801.279,
      "historical_average": 825.843
    },
    "accumulated_precipitation_since_seeding": {
      "current": 177.841,
      "historical_mean": 277.194
    },
    "precipitation_summary": {
      "last_3_days": 4.169,
      "last_7_days": 4.904,
      "last_14_days": 5.979,
      "last_30_days": 33.921
    },
    "standardized_precipitation_index": {
      "1_month": -0.641,
      "3_month": -1.81,
      "6_month": -2.477
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-04-11 00:00:00",
          "temperature_mean": 9.146,
          "temperature_min": 3.862,
          "temperature_max": 14.635,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.378,
          "soiltemperature_0to10cm_mean": 8.056,
          "soilmoisture_0to10cm": 0.316,
          "windspeed_mean": 4.501
        },
        {
          "time": "2025-04-12 00:00:00",
          "temperature_mean": 10.891,
          "temperature_min": 6.934,
          "temperature_max": 15.122,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.289,
          "soiltemperature_0to10cm_mean": 10.29,
          "soilmoisture_0to10cm": 0.309,
          "windspeed_mean": 1.121
        },
        {
          "time": "2025-04-13 00:00:00",
          "temperature_mean": 11.007,
          "temperature_min": 5.992,
          "temperature_max": 15.391,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.684,
          "soiltemperature_0to10cm_mean": 10.151,
          "soilmoisture_0to10cm": 0.304,
          "windspeed_mean": 2.091
        },
        {
          "time": "2025-04-14 00:00:00",
          "temperature_mean": 13.428,
          "temperature_min": 8.723,
          "temperature_max": 18.189,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.693,
          "soiltemperature_0to10cm_mean": 11.361,
          "soilmoisture_0to10cm": 0.3,
          "windspeed_mean": 1.952
        },
        {
          "time": "2025-04-15 00:00:00",
          "temperature_mean": 12.179,
          "temperature_min": 10.375,
          "temperature_max": 15.515,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.874,
          "soiltemperature_0to10cm_mean": 11.365,
          "soilmoisture_0to10cm": 0.316,
          "windspeed_mean": 4.308
        },
        {
          "time": "2025-04-16 00:00:00",
          "temperature_mean": 15.463,
          "temperature_min": 9.225,
          "temperature_max": 21.895,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.537,
          "soiltemperature_0to10cm_mean": 13.62,
          "soilmoisture_0to10cm": 0.326,
          "windspeed_mean": 3.676
        },
        {
          "time": "2025-04-17 00:00:00",
          "temperature_mean": 16.508,
          "temperature_min": 11.855,
          "temperature_max": 21.461,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.735,
          "soiltemperature_0to10cm_mean": 14.688,
          "soilmoisture_0to10cm": 0.309,
          "windspeed_mean": 5.155
        },
        {
          "time": "2025-04-18 00:00:00",
          "temperature_mean": 11.009,
          "temperature_min": 6.717,
          "temperature_max": 14.182,
          "precipitation_sum": 9.0,
          "totalcloudcover_mean": 0.937,
          "soiltemperature_0to10cm_mean": 12.052,
          "soilmoisture_0to10cm": 0.339,
          "windspeed_mean": 1.019
        },
        {
          "time": "2025-04-19 00:00:00",
          "temperature_mean": 10.06,
          "temperature_min": 3.634,
          "temperature_max": 15.129,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.415,
          "soiltemperature_0to10cm_mean": 10.19,
          "soilmoisture_0to10cm": 0.35,
          "windspeed_mean": 1.903
        },
        {
          "time": "2025-04-20 00:00:00",
          "temperature_mean": 12.168,
          "temperature_min": 6.338,
          "temperature_max": 18.248,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.432,
          "soiltemperature_0to10cm_mean": 11.807,
          "soilmoisture_0to10cm": 0.33,
          "windspeed_mean": 2.071
        },
        {
          "time": "2025-04-21 00:00:00",
          "temperature_mean": 13.768,
          "temperature_min": 6.644,
          "temperature_max": 20.072,
          "precipitation_sum": 10.0,
          "totalcloudcover_mean": 0.884,
          "soiltemperature_0to10cm_mean": 12.903,
          "soilmoisture_0to10cm": 0.326,
          "windspeed_mean": 0.582
        },
        {
          "time": "2025-04-22 00:00:00",
          "temperature_mean": 13.624,
          "temperature_min": 8.519,
          "temperature_max": 18.563,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.385,
          "soiltemperature_0to10cm_mean": 13.508,
          "soilmoisture_0to10cm": 0.378,
          "windspeed_mean": 2.217
        },
        {
          "time": "2025-04-23 00:00:00",
          "temperature_mean": 14.411,
          "temperature_min": 9.388,
          "temperature_max": 19.094,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.788,
          "soiltemperature_0to10cm_mean": 13.661,
          "soilmoisture_0to10cm": 0.353,
          "windspeed_mean": 1.248
        },
        {
          "time": "2025-04-24 00:00:00",
          "temperature_mean": 12.97,
          "temperature_min": 9.093,
          "temperature_max": 15.877,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.946,
          "soiltemperature_0to10cm_mean": 12.906,
          "soilmoisture_0to10cm": 0.364,
          "windspeed_mean": 1.914
        },
        {
          "time": "2025-04-25 00:00:00",
          "temperature_mean": 9.058,
          "temperature_min": 7.132,
          "temperature_max": 10.362,
          "precipitation_sum": 17.0,
          "totalcloudcover_mean": 1.0,
          "soiltemperature_0to10cm_mean": 10.219,
          "soilmoisture_0to10cm": 0.407,
          "windspeed_mean": 2.937
        },
        {
          "time": "2025-04-26 00:00:00",
          "temperature_mean": 10.171,
          "temperature_min": 6.292,
          "temperature_max": 14.802,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.428,
          "soiltemperature_0to10cm_mean": 10.778,
          "soilmoisture_0to10cm": 0.388,
          "windspeed_mean": 3.5
        },
        {
          "time": "2025-04-27 00:00:00",
          "temperature_mean": 9.236,
          "temperature_min": 3.729,
          "temperature_max": 14.401,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.002,
          "soiltemperature_0to10cm_mean": 10.144,
          "soilmoisture_0to10cm": 0.365,
          "windspeed_mean": 2.705
        },
        {
          "time": "2025-04-28 00:00:00",
          "temperature_mean": 11.758,
          "temperature_min": 3.81,
          "temperature_max": 18.072,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.055,
          "soiltemperature_0to10cm_mean": 11.414,
          "soilmoisture_0to10cm": 0.351,
          "windspeed_mean": 2.033
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 198
    },
    "crop_emergence": {
      "date": "2024-10-12",
      "day_since": 184
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-18",
      "day_since": -4
    },
    "beginning_of_heading": {
      "date": "2025-05-26",
      "day_since": -42
    },
    "beginning_of_ripenes": {
      "date": "2025-07-09",
      "day_since": -86
    },
    "harvest": {
      "date": "2025-07-28",
      "day_since": -105
    }
  },
  "timing_of_field_operations": {
    "2025-04-11": {
      "weather_conditions": {
        "temperature_mean": 9.146,
        "temperature_min": 3.862,
        "temperature_max": 14.635,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.378,
        "soiltemperature_0to10cm_mean": 8.056,
        "soilmoisture_0to10cm": 0.316,
        "windspeed_mean": 4.501
      },
      "second_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature_minimum": "good",
          "moist_soil": "good",
          "no_freeze_next_week": "bad",
          "light_rain_before": "bad",
          "light_rain_after": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.43
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "good",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-04-12": {
      "weather_conditions": {
        "temperature_mean": 10.891,
        "temperature_min": 6.934,
        "temperature_max": 15.122,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.289,
        "soiltemperature_0to10cm_mean": 10.29,
        "soilmoisture_0to10cm": 0.309,
        "windspeed_mean": 1.121
      },
      "second_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "soil_temperature_minimum": "good",
          "moist_soil": "good",
          "no_freeze_next_week": "bad",
          "light_rain_before": "bad",
          "light_rain_after": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.57
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "good",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.7
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-04-13": {
      "weather_conditions": {
        "temperature_mean": 11.007,
        "temperature_min": 5.992,
        "temperature_max": 15.391,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.684,
        "soiltemperature_0to10cm_mean": 10.151,
        "soilmoisture_0to10cm": 0.304,
        "windspeed_mean": 2.091
      },
      "second_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "soil_temperature_minimum": "good",
          "moist_soil": "good",
          "no_freeze_next_week": "bad",
          "light_rain_before": "bad",
          "light_rain_after": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.57
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "good",
          "cloudy_weather": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.8
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-04-14": {
      "weather_conditions": {
        "temperature_mean": 13.428,
        "temperature_min": 8.723,
        "temperature_max": 18.189,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.693,
        "soiltemperature_0to10cm_mean": 11.361,
        "soilmoisture_0to10cm": 0.3,
        "windspeed_mean": 1.952
      },
      "second_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "soil_temperature_minimum": "good",
          "moist_soil": "good",
          "no_freeze_next_week": "bad",
          "light_rain_before": "bad",
          "light_rain_after": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.57
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.6
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      }
    },
    "2025-04-15": {
      "weather_conditions": {
        "temperature_mean": 12.179,
        "temperature_min": 10.375,
        "temperature_max": 15.515,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.874,
        "soiltemperature_0to10cm_mean": 11.365,
        "soilmoisture_0to10cm": 0.316,
        "windspeed_mean": 4.308
      },
      "second_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "soil_temperature_minimum": "good",
          "moist_soil": "good",
          "no_freeze_next_week": "bad",
          "light_rain_before": "good",
          "light_rain_after": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.71
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-04-16": {
      "weather_conditions": {
        "temperature_mean": 15.463,
        "temperature_min": 9.225,
        "temperature_max": 21.895,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.537,
        "soiltemperature_0to10cm_mean": 13.62,
        "soilmoisture_0to10cm": 0.326,
        "windspeed_mean": 3.676
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.3
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      }
    },
    "2025-04-17": {
      "weather_conditions": {
        "temperature_mean": 16.508,
        "temperature_min": 11.855,
        "temperature_max": 21.461,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.735,
        "soiltemperature_0to10cm_mean": 14.688,
        "soilmoisture_0to10cm": 0.309,
        "windspeed_mean": 5.155
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-04-18": {
      "weather_conditions": {
        "temperature_mean": 11.009,
        "temperature_min": 6.717,
        "temperature_max": 14.182,
        "precipitation_sum": 9.0,
        "totalcloudcover_mean": 0.937,
        "soiltemperature_0to10cm_mean": 12.052,
        "soilmoisture_0to10cm": 0.339,
        "windspeed_mean": 1.019
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "bad",
          "cloudy_weather": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.6
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      }
    },
    "2025-04-19": {
      "weather_conditions": {
        "temperature_mean": 10.06,
        "temperature_min": 3.634,
        "temperature_max": 15.129,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.415,
        "soiltemperature_0to10cm_mean": 10.19,
        "soilmoisture_0to10cm": 0.35,
        "windspeed_mean": 1.903
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-04-20": {
      "weather_conditions": {
        "temperature_mean": 12.168,
        "temperature_min": 6.338,
        "temperature_max": 18.248,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.432,
        "soiltemperature_0to10cm_mean": 11.807,
        "soilmoisture_0to10cm": 0.33,
        "windspeed_mean": 2.071
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.4
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      }
    },
    "2025-04-21": {
      "weather_conditions": {
        "temperature_mean": 13.768,
        "temperature_min": 6.644,
        "temperature_max": 20.072,
        "precipitation_sum": 10.0,
        "totalcloudcover_mean": 0.884,
        "soiltemperature_0to10cm_mean": 12.903,
        "soilmoisture_0to10cm": 0.326,
        "windspeed_mean": 0.582
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "active_growing_conditions": "bad",
          "precipitation": "bad",
          "cloudy_weather": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.4
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.33
      }
    },
    "2025-04-22": {
      "weather_conditions": {
        "temperature_mean": 13.624,
        "temperature_min": 8.519,
        "temperature_max": 18.563,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.385,
        "soiltemperature_0to10cm_mean": 13.508,
        "soilmoisture_0to10cm": 0.378,
        "windspeed_mean": 2.217
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.4
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      }
    },
    "2025-04-23": {
      "weather_conditions": {
        "temperature_mean": 14.411,
        "temperature_min": 9.388,
        "temperature_max": 19.094,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.788,
        "soiltemperature_0to10cm_mean": 13.661,
        "soilmoisture_0to10cm": 0.353,
        "windspeed_mean": 1.248
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      }
    },
    "2025-04-24": {
      "weather_conditions": {
        "temperature_mean": 12.97,
        "temperature_min": 9.093,
        "temperature_max": 15.877,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.946,
        "soiltemperature_0to10cm_mean": 12.906,
        "soilmoisture_0to10cm": 0.364,
        "windspeed_mean": 1.914
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "bad",
          "cloudy_weather": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.6
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      }
    },
    "2025-04-25": {
      "weather_conditions": {
        "temperature_mean": 9.058,
        "temperature_min": 7.132,
        "temperature_max": 10.362,
        "precipitation_sum": 17.0,
        "totalcloudcover_mean": 1.0,
        "soiltemperature_0to10cm_mean": 10.219,
        "soilmoisture_0to10cm": 0.407,
        "windspeed_mean": 2.937
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "bad",
          "cloudy_weather": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.4
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.33
      }
    },
    "2025-04-26": {
      "weather_conditions": {
        "temperature_mean": 10.171,
        "temperature_min": 6.292,
        "temperature_max": 14.802,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.428,
        "soiltemperature_0to10cm_mean": 10.778,
        "soilmoisture_0to10cm": 0.388,
        "windspeed_mean": 3.5
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.4
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-04-27": {
      "weather_conditions": {
        "temperature_mean": 9.236,
        "temperature_min": 3.729,
        "temperature_max": 14.401,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.002,
        "soiltemperature_0to10cm_mean": 10.144,
        "soilmoisture_0to10cm": 0.365,
        "windspeed_mean": 2.705
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "good",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-04-28": {
      "weather_conditions": {
        "temperature_mean": 11.758,
        "temperature_min": 3.81,
        "temperature_max": 18.072,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.055,
        "soiltemperature_0to10cm_mean": 11.414,
        "soilmoisture_0to10cm": 0.351,
        "windspeed_mean": 2.033
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "good",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    }
  },
  "_images": {
    "zones": "images/zones.png",
    "history": "images/history.png",
    "hotspots": "images/hotspots.png",
    "evi": "images/evi.png",
    "rgb": "images/rgb.png"
  },
  "polygon_wkt": "POLYGON ((15.76367444 49.08623629, 15.76361464 49.08624949, 15.76356244 49.08627994, 15.76350937 49.08633005, 15.76348678 49.08638738, 15.76350515 49.08650964, 15.76353187 49.08667163, 15.76351396 49.08677227, 15.76346855 49.08686775, 15.7632723 49.08712839, 15.76291169 49.08765889, 15.76282477 49.08784451, 15.76280593 49.08797406, 15.7628016 49.08801544, 15.76278129 49.08804099, 15.76272668 49.08804348, 15.76246612 49.08795867, 15.7623597 49.08791983, 15.76209019 49.08782753, 15.76173797 49.08772197, 15.76153148 49.08765889, 15.76137241 49.08760905, 15.76131228 49.08758283, 15.76127279 49.0875279, 15.76126515 49.08747362, 15.76129814 49.08742062, 15.7615046 49.08718715, 15.76162805 49.08705402, 15.76171382 49.08693691, 15.76170745 49.08688723, 15.76129379 49.0867225, 15.76088197 49.08656367, 15.76082287 49.08658171, 15.76077812 49.0866001, 15.7606088 49.08679289, 15.76040767 49.0870081, 15.7603446 49.08700986, 15.76027807 49.08699552, 15.75992887 49.08684543, 15.75959079 49.0867223, 15.75954114 49.08673065, 15.75949824 49.08676899, 15.75951684 49.08701966, 15.75957257 49.08735302, 15.75965366 49.08757755, 15.75969262 49.08778072, 15.75975691 49.08807227, 15.75974025 49.08826549, 15.7597058 49.08839116, 15.75968839 49.08844891, 15.75966583 49.08861086, 15.75968492 49.08877154, 15.75978114 49.08904122, 15.75980775 49.0891375, 15.75995278 49.08950752, 15.76037594 49.09031972, 15.76107 49.09170672, 15.7615325 49.09260504, 15.76173343 49.09298, 15.76197745 49.09340725, 15.76215205 49.09373916, 15.76233547 49.09422321, 15.76246844 49.09433332, 15.76243428 49.09449325, 15.76245913 49.09461055, 15.76247747 49.09469665, 15.76250669 49.09477003, 15.76262264 49.09507119, 15.76262641 49.0950807, 15.76282387 49.09505238, 15.76361218 49.09487797, 15.76377596 49.09482487, 15.76384607 49.0947773, 15.76386487 49.09476686, 15.76388647 49.09475909, 15.76483138 49.09449569, 15.76483539 49.09449463, 15.76524835 49.0943906, 15.76526179 49.09438778, 15.76547696 49.09435144, 15.76584543 49.09426968, 15.76634762 49.09412655, 15.76691947 49.09396198, 15.76692624 49.09396018, 15.76709518 49.09391921, 15.76719433 49.09389516, 15.76746979 49.09382836, 15.76748422 49.0938255, 15.76766319 49.09379781, 15.76768796 49.09379569, 15.76771288 49.09379689, 15.76773586 49.09379956, 15.76785736 49.09381297, 15.76777679 49.09363796, 15.76748303 49.0931103, 15.76725575 49.09269471, 15.76705905 49.09233567, 15.76683087 49.09192097, 15.76656301 49.09143559, 15.76636154 49.09107474, 15.76610346 49.09060785, 15.76582147 49.09009595, 15.7655453 49.08959218, 15.76530891 49.08915862, 15.7650708 49.08873452, 15.7648577 49.08834543, 15.76464614 49.08795599, 15.76417337 49.08710096, 15.76389002 49.0865977, 15.76385755 49.08655561, 15.76377751 49.08641396, 15.76371948 49.08633408, 15.76369721 49.08628573, 15.76367444 49.08623629))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
