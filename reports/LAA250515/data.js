// Field data for LAA250515 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAA250515",
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
    "2025-04-11": {
      "min": 0.315,
      "max": 0.707,
      "median": 0.608,
      "mean": 0.598,
      "sd": 0.053
    },
    "2025-04-22": {
      "min": 0.278,
      "max": 0.728,
      "median": 0.628,
      "mean": 0.618,
      "sd": 0.048
    },
    "2025-05-03": {
      "min": 0.358,
      "max": 0.768,
      "median": 0.683,
      "mean": 0.674,
      "sd": 0.04
    },
    "2025-05-13": {
      "min": 0.296,
      "max": 0.772,
      "median": 0.68,
      "mean": 0.667,
      "sd": 0.054
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 31.985,
      "area_percentage": 1.0
    },
    "dominant_category": "high vegetation",
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
        "area_ha": 0.04,
        "area_percentage": 0.001
      },
      "medium vegetation": {
        "area_ha": 15.706,
        "area_percentage": 0.491
      },
      "high_vegetation": {
        "area_ha": 16.24,
        "area_percentage": 0.508
      },
      "very_high_vegetation": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      }
    }
  },
  "growth_variability": {
    "variability_category": "high",
    "number_of_zones": 5,
    "evi_median": 0.651,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.93,
          "percentage": 6.02
        },
        "EVI_statistics": {
          "mean": 0.52,
          "median": 0.53,
          "min": 0.318,
          "max": 0.553
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 5.62,
          "percentage": 17.58
        },
        "EVI_statistics": {
          "mean": 0.593,
          "median": 0.597,
          "min": 0.553,
          "max": 0.618
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 19.87,
          "percentage": 62.13
        },
        "EVI_statistics": {
          "mean": 0.654,
          "median": 0.655,
          "min": 0.618,
          "max": 0.683
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.56,
          "percentage": 14.27
        },
        "EVI_statistics": {
          "mean": 0.695,
          "median": 0.693,
          "min": 0.683,
          "max": 0.742
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
          "mean": 0.75,
          "median": 0.75,
          "min": 0.75,
          "max": 0.75
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.38,
            "area_percentage": 1.22,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 6.11,
            "area_percentage": 19.57,
            "zone_number": 2
          },
          "similar": {
            "ha": 16.01,
            "area_percentage": 51.28,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 7.58,
            "area_percentage": 24.28,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.14,
            "area_percentage": 3.65,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-05-15",
      "reference_image_date": "2025-05-03",
      "change_period": 12
    },
    "median_EVI_change": {
      "old_value": 0.683,
      "new_value": 0.651,
      "difference": -0.033
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.0,
          "percentage": 0.0,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 0.92,
          "percentage": 2.86,
          "zone_number": 2
        },
        "no_change": {
          "ha": 31.07,
          "percentage": 97.14,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.0,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.0,
          "percentage": 0.0,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 2.03,
          "percentage": 6.36,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.46,
          "percentage": 13.93,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 18.92,
          "percentage": 59.15,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.61,
          "percentage": 14.41,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.97,
          "percentage": 6.16,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 1145.183,
      "historical_average": 1144.383
    },
    "accumulated_precipitation_since_seeding": {
      "current": 227.007,
      "historical_mean": 336.717
    },
    "precipitation_summary": {
      "last_3_days": 1.179,
      "last_7_days": 1.566,
      "last_14_days": 7.812,
      "last_30_days": 53.265
    },
    "standardized_precipitation_index": {
      "1_month": -0.257,
      "3_month": -1.35,
      "6_month": -1.684
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-05-11 00:00:00",
          "temperature_mean": 10.428,
          "temperature_min": 5.88,
          "temperature_max": 14.757,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.452,
          "soiltemperature_0to10cm_mean": 11.178,
          "soilmoisture_0to10cm": 0.277,
          "windspeed_mean": 1.97
        },
        {
          "time": "2025-05-12 00:00:00",
          "temperature_mean": 9.599,
          "temperature_min": 2.735,
          "temperature_max": 13.9,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.342,
          "soiltemperature_0to10cm_mean": 10.341,
          "soilmoisture_0to10cm": 0.269,
          "windspeed_mean": 2.484
        },
        {
          "time": "2025-05-13 00:00:00",
          "temperature_mean": 10.797,
          "temperature_min": 5.678,
          "temperature_max": 15.939,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.194,
          "soiltemperature_0to10cm_mean": 11.266,
          "soilmoisture_0to10cm": 0.26,
          "windspeed_mean": 2.265
        },
        {
          "time": "2025-05-14 00:00:00",
          "temperature_mean": 13.633,
          "temperature_min": 5.574,
          "temperature_max": 19.342,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.786,
          "soiltemperature_0to10cm_mean": 12.188,
          "soilmoisture_0to10cm": 0.252,
          "windspeed_mean": 1.747
        },
        {
          "time": "2025-05-15 00:00:00",
          "temperature_mean": 10.325,
          "temperature_min": 6.059,
          "temperature_max": 12.365,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.622,
          "soiltemperature_0to10cm_mean": 11.598,
          "soilmoisture_0to10cm": 0.249,
          "windspeed_mean": 3.671
        },
        {
          "time": "2025-05-16 00:00:00",
          "temperature_mean": 8.877,
          "temperature_min": 5.314,
          "temperature_max": 13.681,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.499,
          "soiltemperature_0to10cm_mean": 10.454,
          "soilmoisture_0to10cm": 0.251,
          "windspeed_mean": 3.67
        },
        {
          "time": "2025-05-17 00:00:00",
          "temperature_mean": 10.349,
          "temperature_min": 5.757,
          "temperature_max": 14.625,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.796,
          "soiltemperature_0to10cm_mean": 10.938,
          "soilmoisture_0to10cm": 0.252,
          "windspeed_mean": 4.046
        },
        {
          "time": "2025-05-18 00:00:00",
          "temperature_mean": 9.737,
          "temperature_min": 6.79,
          "temperature_max": 13.663,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.777,
          "soiltemperature_0to10cm_mean": 10.855,
          "soilmoisture_0to10cm": 0.278,
          "windspeed_mean": 3.604
        },
        {
          "time": "2025-05-19 00:00:00",
          "temperature_mean": 10.701,
          "temperature_min": 7.875,
          "temperature_max": 13.252,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.792,
          "soiltemperature_0to10cm_mean": 10.659,
          "soilmoisture_0to10cm": 0.292,
          "windspeed_mean": 4.224
        },
        {
          "time": "2025-05-20 00:00:00",
          "temperature_mean": 12.812,
          "temperature_min": 8.792,
          "temperature_max": 16.663,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.605,
          "soiltemperature_0to10cm_mean": 12.221,
          "soilmoisture_0to10cm": 0.285,
          "windspeed_mean": 0.401
        },
        {
          "time": "2025-05-21 00:00:00",
          "temperature_mean": 14.581,
          "temperature_min": 8.249,
          "temperature_max": 19.523,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.601,
          "soiltemperature_0to10cm_mean": 13.588,
          "soilmoisture_0to10cm": 0.277,
          "windspeed_mean": 1.062
        },
        {
          "time": "2025-05-22 00:00:00",
          "temperature_mean": 11.52,
          "temperature_min": 8.46,
          "temperature_max": 14.284,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.97,
          "soiltemperature_0to10cm_mean": 12.108,
          "soilmoisture_0to10cm": 0.309,
          "windspeed_mean": 1.536
        },
        {
          "time": "2025-05-23 00:00:00",
          "temperature_mean": 9.914,
          "temperature_min": 5.275,
          "temperature_max": 14.248,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.791,
          "soiltemperature_0to10cm_mean": 11.259,
          "soilmoisture_0to10cm": 0.336,
          "windspeed_mean": 2.448
        },
        {
          "time": "2025-05-24 00:00:00",
          "temperature_mean": 10.158,
          "temperature_min": 3.523,
          "temperature_max": 14.684,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.52,
          "soiltemperature_0to10cm_mean": 10.751,
          "soilmoisture_0to10cm": 0.31,
          "windspeed_mean": 1.751
        },
        {
          "time": "2025-05-25 00:00:00",
          "temperature_mean": 11.609,
          "temperature_min": 4.952,
          "temperature_max": 16.937,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.554,
          "soiltemperature_0to10cm_mean": 11.633,
          "soilmoisture_0to10cm": 0.298,
          "windspeed_mean": 2.098
        },
        {
          "time": "2025-05-26 00:00:00",
          "temperature_mean": 13.756,
          "temperature_min": 10.864,
          "temperature_max": 17.315,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.662,
          "soiltemperature_0to10cm_mean": 13.236,
          "soilmoisture_0to10cm": 0.345,
          "windspeed_mean": 2.836
        },
        {
          "time": "2025-05-27 00:00:00",
          "temperature_mean": 13.99,
          "temperature_min": 9.298,
          "temperature_max": 18.54,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.444,
          "soiltemperature_0to10cm_mean": 13.845,
          "soilmoisture_0to10cm": 0.322,
          "windspeed_mean": 2.303
        },
        {
          "time": "2025-05-28 00:00:00",
          "temperature_mean": 13.548,
          "temperature_min": 9.995,
          "temperature_max": 16.984,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.815,
          "soiltemperature_0to10cm_mean": 13.047,
          "soilmoisture_0to10cm": 0.314,
          "windspeed_mean": 3.418
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 228
    },
    "crop_emergence": {
      "date": "2024-10-13",
      "day_since": 213
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-24",
      "day_since": 20
    },
    "beginning_of_heading": {
      "date": "2025-05-26",
      "day_since": -12
    },
    "beginning_of_ripenes": {
      "date": "2025-07-04",
      "day_since": -51
    },
    "harvest": {
      "date": "2025-07-24",
      "day_since": -71
    }
  },
  "timing_of_field_operations": {
    "2025-05-11": {
      "weather_conditions": {
        "temperature_mean": 10.428,
        "temperature_min": 5.88,
        "temperature_max": 14.757,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.452,
        "soiltemperature_0to10cm_mean": 11.178,
        "soilmoisture_0to10cm": 0.277,
        "windspeed_mean": 1.97
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "good",
          "cloudy_weather": "bad"
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
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
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
      "mid_fungicide": {
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
    "2025-05-12": {
      "weather_conditions": {
        "temperature_mean": 9.599,
        "temperature_min": 2.735,
        "temperature_max": 13.9,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.342,
        "soiltemperature_0to10cm_mean": 10.341,
        "soilmoisture_0to10cm": 0.269,
        "windspeed_mean": 2.484
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
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
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      }
    },
    "2025-05-13": {
      "weather_conditions": {
        "temperature_mean": 10.797,
        "temperature_min": 5.678,
        "temperature_max": 15.939,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.194,
        "soiltemperature_0to10cm_mean": 11.266,
        "soilmoisture_0to10cm": 0.26,
        "windspeed_mean": 2.265
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "good",
          "cloudy_weather": "bad"
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
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
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
      "mid_fungicide": {
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
    "2025-05-14": {
      "weather_conditions": {
        "temperature_mean": 13.633,
        "temperature_min": 5.574,
        "temperature_max": 19.342,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.786,
        "soiltemperature_0to10cm_mean": 12.188,
        "soilmoisture_0to10cm": 0.252,
        "windspeed_mean": 1.747
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
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
      "late_insecticide": {
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
      "mid_fungicide": {
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
    "2025-05-15": {
      "weather_conditions": {
        "temperature_mean": 10.325,
        "temperature_min": 6.059,
        "temperature_max": 12.365,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.622,
        "soiltemperature_0to10cm_mean": 11.598,
        "soilmoisture_0to10cm": 0.249,
        "windspeed_mean": 3.671
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.7
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
      "late_insecticide": {
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
      "mid_fungicide": {
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
    "2025-05-16": {
      "weather_conditions": {
        "temperature_mean": 8.877,
        "temperature_min": 5.314,
        "temperature_max": 13.681,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.499,
        "soiltemperature_0to10cm_mean": 10.454,
        "soilmoisture_0to10cm": 0.251,
        "windspeed_mean": 3.67
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.7
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
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.2
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
      "late_insecticide": {
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
      "mid_fungicide": {
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
    "2025-05-17": {
      "weather_conditions": {
        "temperature_mean": 10.349,
        "temperature_min": 5.757,
        "temperature_max": 14.625,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.796,
        "soiltemperature_0to10cm_mean": 10.938,
        "soilmoisture_0to10cm": 0.252,
        "windspeed_mean": 4.046
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.7
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
          "min_air_temperature": "bad -> BLOCKED",
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
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
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
      "mid_fungicide": {
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
    "2025-05-18": {
      "weather_conditions": {
        "temperature_mean": 9.737,
        "temperature_min": 6.79,
        "temperature_max": 13.663,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.777,
        "soiltemperature_0to10cm_mean": 10.855,
        "soilmoisture_0to10cm": 0.278,
        "windspeed_mean": 3.604
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.7
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
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
      "late_insecticide": {
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
      "mid_fungicide": {
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
    "2025-05-19": {
      "weather_conditions": {
        "temperature_mean": 10.701,
        "temperature_min": 7.875,
        "temperature_max": 13.252,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.792,
        "soiltemperature_0to10cm_mean": 10.659,
        "soilmoisture_0to10cm": 0.292,
        "windspeed_mean": 4.224
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.7
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
          "min_air_temperature": "bad -> BLOCKED",
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
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
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
      "mid_fungicide": {
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
    "2025-05-20": {
      "weather_conditions": {
        "temperature_mean": 12.812,
        "temperature_min": 8.792,
        "temperature_max": 16.663,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.605,
        "soiltemperature_0to10cm_mean": 12.221,
        "soilmoisture_0to10cm": 0.285,
        "windspeed_mean": 0.401
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.7
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
          "cloudy_weather": "bad"
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
      "late_insecticide": {
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
      "mid_fungicide": {
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
    "2025-05-21": {
      "weather_conditions": {
        "temperature_mean": 14.581,
        "temperature_min": 8.249,
        "temperature_max": 19.523,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.601,
        "soiltemperature_0to10cm_mean": 13.588,
        "soilmoisture_0to10cm": 0.277,
        "windspeed_mean": 1.062
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "good",
          "moist_soil": "good",
          "light_rain_before": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.8
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
          "cloudy_weather": "bad"
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
      "late_insecticide": {
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
      "mid_fungicide": {
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
    "2025-05-22": {
      "weather_conditions": {
        "temperature_mean": 11.52,
        "temperature_min": 8.46,
        "temperature_max": 14.284,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.97,
        "soiltemperature_0to10cm_mean": 12.108,
        "soilmoisture_0to10cm": 0.309,
        "windspeed_mean": 1.536
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
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
          "cloudy_weather": "good"
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
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
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
      "mid_fungicide": {
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
    "2025-05-23": {
      "weather_conditions": {
        "temperature_mean": 9.914,
        "temperature_min": 5.275,
        "temperature_max": 14.248,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.791,
        "soiltemperature_0to10cm_mean": 11.259,
        "soilmoisture_0to10cm": 0.336,
        "windspeed_mean": 2.448
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
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
      "late_insecticide": {
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
      "mid_fungicide": {
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
    "2025-05-24": {
      "weather_conditions": {
        "temperature_mean": 10.158,
        "temperature_min": 3.523,
        "temperature_max": 14.684,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.52,
        "soiltemperature_0to10cm_mean": 10.751,
        "soilmoisture_0to10cm": 0.31,
        "windspeed_mean": 1.751
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
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
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
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
      "mid_fungicide": {
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
    "2025-05-25": {
      "weather_conditions": {
        "temperature_mean": 11.609,
        "temperature_min": 4.952,
        "temperature_max": 16.937,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.554,
        "soiltemperature_0to10cm_mean": 11.633,
        "soilmoisture_0to10cm": 0.298,
        "windspeed_mean": 2.098
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
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
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
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
      "mid_fungicide": {
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
    "2025-05-26": {
      "weather_conditions": {
        "temperature_mean": 13.756,
        "temperature_min": 10.864,
        "temperature_max": 17.315,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.662,
        "soiltemperature_0to10cm_mean": 13.236,
        "soilmoisture_0to10cm": 0.345,
        "windspeed_mean": 2.836
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "good",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.6
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
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      },
      "mid_fungicide": {
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
    "2025-05-27": {
      "weather_conditions": {
        "temperature_mean": 13.99,
        "temperature_min": 9.298,
        "temperature_max": 18.54,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.444,
        "soiltemperature_0to10cm_mean": 13.845,
        "soilmoisture_0to10cm": 0.322,
        "windspeed_mean": 2.303
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "good",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.6
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
          "cloudy_weather": "bad"
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
      "late_insecticide": {
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
      "mid_fungicide": {
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
    "2025-05-28": {
      "weather_conditions": {
        "temperature_mean": 13.548,
        "temperature_min": 9.995,
        "temperature_max": 16.984,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.815,
        "soiltemperature_0to10cm_mean": 13.047,
        "soilmoisture_0to10cm": 0.314,
        "windspeed_mean": 3.418
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "good",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.6
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
      "late_insecticide": {
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
      "mid_fungicide": {
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
