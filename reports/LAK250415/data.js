// Field data for LAK250415 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAK250415",
  "metadata": {
    "field_area_ha": 28.968,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 23.705,
      "mean_elevation": 535.356,
      "min_elevation": 521.673,
      "max_elevation": 545.379
    },
    "soil": {
      "bulk_density kg/dm³": 1.345,
      "cation_exchange_capacity cmol(c)/kg": 18.784,
      "clay_particles g/100g (%)": 22.068,
      "sand particles g/100g (%)": 35.648,
      "silt particles g/100g (%)": 42.336,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-02-11": {
      "min": 0.155,
      "max": 0.416,
      "median": 0.3,
      "mean": 0.296,
      "sd": 0.025
    },
    "2025-02-24": {
      "min": 0.141,
      "max": 0.389,
      "median": 0.279,
      "mean": 0.275,
      "sd": 0.026
    },
    "2025-03-09": {
      "min": 0.274,
      "max": 0.488,
      "median": 0.393,
      "mean": 0.392,
      "sd": 0.025
    },
    "2025-03-18": {
      "min": 0.258,
      "max": 0.529,
      "median": 0.422,
      "mean": 0.417,
      "sd": 0.031
    },
    "2025-03-28": {
      "min": 0.243,
      "max": 0.602,
      "median": 0.48,
      "mean": 0.47,
      "sd": 0.043
    },
    "2025-04-04": {
      "min": 0.342,
      "max": 0.742,
      "median": 0.612,
      "mean": 0.599,
      "sd": 0.052
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 29.128,
      "area_percentage": 1.0
    },
    "dominant_category": "medium vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.013,
        "area_percentage": 0.0
      },
      "low_vegetation": {
        "area_ha": 0.657,
        "area_percentage": 0.023
      },
      "medium vegetation": {
        "area_ha": 26.671,
        "area_percentage": 0.916
      },
      "high_vegetation": {
        "area_ha": 1.786,
        "area_percentage": 0.061
      },
      "very_high_vegetation": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      }
    }
  },
  "growth_variability": {
    "variability_category": "high",
    "number_of_zones": 4,
    "evi_median": 0.611,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 2.6,
          "percentage": 8.91
        },
        "EVI_statistics": {
          "mean": 0.444,
          "median": 0.46,
          "min": 0.288,
          "max": 0.519
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.98,
          "percentage": 13.66
        },
        "EVI_statistics": {
          "mean": 0.557,
          "median": 0.561,
          "min": 0.519,
          "max": 0.58
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 18.88,
          "percentage": 64.83
        },
        "EVI_statistics": {
          "mean": 0.614,
          "median": 0.615,
          "min": 0.58,
          "max": 0.642
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 3.67,
          "percentage": 12.6
        },
        "EVI_statistics": {
          "mean": 0.652,
          "median": 0.65,
          "min": 0.642,
          "max": 0.697
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.0,
          "percentage": 0.0
        },
        "EVI_statistics": {
          "mean": 0,
          "median": 0,
          "min": 0,
          "max": 0
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 1.73,
            "area_percentage": 6.12,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.2,
            "area_percentage": 18.41,
            "zone_number": 2
          },
          "similar": {
            "ha": 12.1,
            "area_percentage": 42.83,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 7.5,
            "area_percentage": 26.55,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.72,
            "area_percentage": 6.09,
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
      "old_value": 0.48,
      "new_value": 0.611,
      "difference": 0.13
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
          "ha": 1.37,
          "percentage": 4.72,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 23.63,
          "percentage": 81.14,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 4.12,
          "percentage": 14.14,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 2.4,
          "percentage": 8.25,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.86,
          "percentage": 13.26,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 16.31,
          "percentage": 56.01,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.34,
          "percentage": 14.89,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.21,
          "percentage": 7.59,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
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
      "date": "2024-10-11",
      "day_since": 185
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-19",
      "day_since": -5
    },
    "beginning_of_heading": {
      "date": "2025-05-27",
      "day_since": -43
    },
    "beginning_of_ripenes": {
      "date": "2025-07-10",
      "day_since": -87
    },
    "harvest": {
      "date": "2025-07-29",
      "day_since": -106
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
  "polygon_wkt": "POLYGON ((15.76386821 49.08255081, 15.76381587 49.08257608, 15.76380047 49.08258853, 15.76379347 49.08259973, 15.76379276 49.08260086, 15.76381565 49.08263516, 15.76398966 49.08279281, 15.76422007 49.08303458, 15.76479675 49.08367928, 15.7657325 49.08468828, 15.76576349 49.08471641, 15.76585734 49.08479315, 15.76595488 49.08486196, 15.76603604 49.08490447, 15.76628572 49.08500954, 15.768408 49.085707, 15.76877338 49.0858398, 15.76907173 49.08603238, 15.76918578 49.08614167, 15.76938553 49.08602162, 15.76957505 49.08589413, 15.77005153 49.08559076, 15.7705363 49.08527796, 15.7710271 49.08496204, 15.77156602 49.0846161, 15.77190119 49.08440371, 15.77243324 49.08405939, 15.77303434 49.08367232, 15.7736967 49.08324907, 15.77416908 49.08294391, 15.77427007 49.08286988, 15.77439407 49.0827794, 15.77432151 49.08274492, 15.77419604 49.08267028, 15.77412315 49.08259492, 15.77409509 49.08248517, 15.77408646 49.08220437, 15.7741164 49.08192566, 15.77414312 49.08164928, 15.77415466 49.08158033, 15.77418587 49.08139385, 15.77426586 49.08109523, 15.77426496 49.08107274, 15.77426448 49.08106062, 15.77424966 49.08103599, 15.77422989 49.08101766, 15.77420016 49.08100425, 15.77330108 49.08095906, 15.77212654 49.0808978, 15.77174909 49.08091408, 15.7706344 49.08097224, 15.76925491 49.08108237, 15.76794316 49.08116142, 15.76753152 49.08112913, 15.76709638 49.08105252, 15.76687511 49.08102558, 15.7665395 49.08100586, 15.76618651 49.08104106, 15.76588475 49.08108569, 15.76587408 49.08109068, 15.76579704 49.08112673, 15.76574722 49.08115996, 15.76566026 49.08123701, 15.76558382 49.08132641, 15.76551999 49.08142508, 15.76548511 49.0815527, 15.76544534 49.08163928, 15.76542666 49.08166178, 15.76514526 49.08182666, 15.76510687 49.08187607, 15.76509847 49.08192231, 15.76511821 49.08196386, 15.76527381 49.08212843, 15.765261 49.08214503, 15.76520221 49.08217541, 15.76517766 49.08218809, 15.76493831 49.08229068, 15.76487212 49.08232371, 15.76483651 49.08232092, 15.76475979 49.08227201, 15.76469511 49.08224249, 15.76464492 49.08223568, 15.76458899 49.08223632, 15.76452401 49.08225063, 15.76404091 49.08246865, 15.76386821 49.08255081))"
};
