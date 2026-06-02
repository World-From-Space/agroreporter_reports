// Field data for LAK250515 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAK250515",
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
    "2025-04-11": {
      "min": 0.288,
      "max": 0.697,
      "median": 0.611,
      "mean": 0.596,
      "sd": 0.059
    },
    "2025-04-22": {
      "min": 0.302,
      "max": 0.735,
      "median": 0.648,
      "mean": 0.634,
      "sd": 0.057
    },
    "2025-05-01": {
      "min": 0.481,
      "max": 0.878,
      "median": 0.794,
      "mean": 0.782,
      "sd": 0.051
    },
    "2025-05-13": {
      "min": 0.425,
      "max": 0.817,
      "median": 0.704,
      "mean": 0.694,
      "sd": 0.048
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 29.128,
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
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "medium vegetation": {
        "area_ha": 4.856,
        "area_percentage": 0.167
      },
      "high_vegetation": {
        "area_ha": 24.271,
        "area_percentage": 0.833
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
    "evi_median": 0.685,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.07,
          "percentage": 3.68
        },
        "EVI_statistics": {
          "mean": 0.543,
          "median": 0.555,
          "min": 0.436,
          "max": 0.582
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.91,
          "percentage": 13.41
        },
        "EVI_statistics": {
          "mean": 0.626,
          "median": 0.631,
          "min": 0.582,
          "max": 0.651
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 21.56,
          "percentage": 74.02
        },
        "EVI_statistics": {
          "mean": 0.687,
          "median": 0.688,
          "min": 0.651,
          "max": 0.719
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 2.59,
          "percentage": 8.89
        },
        "EVI_statistics": {
          "mean": 0.73,
          "median": 0.728,
          "min": 0.719,
          "max": 0.782
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
          "mean": 0.791,
          "median": 0.791,
          "min": 0.791,
          "max": 0.791
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.44,
            "area_percentage": 1.56,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 4.73,
            "area_percentage": 16.74,
            "zone_number": 2
          },
          "similar": {
            "ha": 16.08,
            "area_percentage": 56.92,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 6.43,
            "area_percentage": 22.76,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.57,
            "area_percentage": 2.02,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-05-15",
      "reference_image_date": "2025-05-01",
      "change_period": 14
    },
    "median_EVI_change": {
      "old_value": 0.794,
      "new_value": 0.685,
      "difference": -0.107
    },
    "growth trend": "minor_decline",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.27,
          "percentage": 0.94,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 26.27,
          "percentage": 90.32,
          "zone_number": 2
        },
        "no_change": {
          "ha": 2.54,
          "percentage": 8.72,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.01,
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
          "ha": 2.37,
          "percentage": 8.15,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.25,
          "percentage": 14.63,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 16.01,
          "percentage": 55.06,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.02,
          "percentage": 13.83,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.42,
          "percentage": 8.33,
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
      "date": "2024-10-12",
      "day_since": 214
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-26",
      "day_since": 18
    },
    "beginning_of_heading": {
      "date": "2025-05-29",
      "day_since": -15
    },
    "beginning_of_ripenes": {
      "date": "2025-07-08",
      "day_since": -55
    },
    "harvest": {
      "date": "2025-07-28",
      "day_since": -75
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
  "polygon_wkt": "POLYGON ((15.76386821 49.08255081, 15.76381587 49.08257608, 15.76380047 49.08258853, 15.76379347 49.08259973, 15.76379276 49.08260086, 15.76381565 49.08263516, 15.76398966 49.08279281, 15.76422007 49.08303458, 15.76479675 49.08367928, 15.7657325 49.08468828, 15.76576349 49.08471641, 15.76585734 49.08479315, 15.76595488 49.08486196, 15.76603604 49.08490447, 15.76628572 49.08500954, 15.768408 49.085707, 15.76877338 49.0858398, 15.76907173 49.08603238, 15.76918578 49.08614167, 15.76938553 49.08602162, 15.76957505 49.08589413, 15.77005153 49.08559076, 15.7705363 49.08527796, 15.7710271 49.08496204, 15.77156602 49.0846161, 15.77190119 49.08440371, 15.77243324 49.08405939, 15.77303434 49.08367232, 15.7736967 49.08324907, 15.77416908 49.08294391, 15.77427007 49.08286988, 15.77439407 49.0827794, 15.77432151 49.08274492, 15.77419604 49.08267028, 15.77412315 49.08259492, 15.77409509 49.08248517, 15.77408646 49.08220437, 15.7741164 49.08192566, 15.77414312 49.08164928, 15.77415466 49.08158033, 15.77418587 49.08139385, 15.77426586 49.08109523, 15.77426496 49.08107274, 15.77426448 49.08106062, 15.77424966 49.08103599, 15.77422989 49.08101766, 15.77420016 49.08100425, 15.77330108 49.08095906, 15.77212654 49.0808978, 15.77174909 49.08091408, 15.7706344 49.08097224, 15.76925491 49.08108237, 15.76794316 49.08116142, 15.76753152 49.08112913, 15.76709638 49.08105252, 15.76687511 49.08102558, 15.7665395 49.08100586, 15.76618651 49.08104106, 15.76588475 49.08108569, 15.76587408 49.08109068, 15.76579704 49.08112673, 15.76574722 49.08115996, 15.76566026 49.08123701, 15.76558382 49.08132641, 15.76551999 49.08142508, 15.76548511 49.0815527, 15.76544534 49.08163928, 15.76542666 49.08166178, 15.76514526 49.08182666, 15.76510687 49.08187607, 15.76509847 49.08192231, 15.76511821 49.08196386, 15.76527381 49.08212843, 15.765261 49.08214503, 15.76520221 49.08217541, 15.76517766 49.08218809, 15.76493831 49.08229068, 15.76487212 49.08232371, 15.76483651 49.08232092, 15.76475979 49.08227201, 15.76469511 49.08224249, 15.76464492 49.08223568, 15.76458899 49.08223632, 15.76452401 49.08225063, 15.76404091 49.08246865, 15.76386821 49.08255081))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
