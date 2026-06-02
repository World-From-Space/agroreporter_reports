// Field data for MAR250515 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAR250515",
  "metadata": {
    "field_area_ha": 6.56,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Mohelno"
    },
    "terrain": {
      "variability": 5.64,
      "mean_elevation": 385.166,
      "min_elevation": 381.776,
      "max_elevation": 387.415
    },
    "soil": {
      "bulk_density kg/dm³": 1.319,
      "cation_exchange_capacity cmol(c)/kg": 21.15,
      "clay_particles g/100g (%)": 25.578,
      "sand particles g/100g (%)": 22.146,
      "silt particles g/100g (%)": 52.276,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-03-17": {
      "min": 0.252,
      "max": 0.378,
      "median": 0.303,
      "mean": 0.305,
      "sd": 0.018
    },
    "2025-03-21": {
      "min": 0.19,
      "max": 0.33,
      "median": 0.245,
      "mean": 0.25,
      "sd": 0.022
    },
    "2025-04-03": {
      "min": 0.341,
      "max": 0.579,
      "median": 0.432,
      "mean": 0.439,
      "sd": 0.041
    },
    "2025-04-11": {
      "min": 0.318,
      "max": 0.632,
      "median": 0.487,
      "mean": 0.491,
      "sd": 0.045
    },
    "2025-04-20": {
      "min": 0.341,
      "max": 0.692,
      "median": 0.589,
      "mean": 0.587,
      "sd": 0.043
    },
    "2025-04-29": {
      "min": 0.265,
      "max": 0.808,
      "median": 0.705,
      "mean": 0.68,
      "sd": 0.083
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 6.404,
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
        "area_ha": 0.006,
        "area_percentage": 0.001
      },
      "medium vegetation": {
        "area_ha": 1.841,
        "area_percentage": 0.288
      },
      "high_vegetation": {
        "area_ha": 4.556,
        "area_percentage": 0.711
      },
      "very_high_vegetation": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      }
    }
  },
  "growth_variability": {
    "variability_category": "very_high",
    "number_of_zones": 4,
    "evi_median": 0.681,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.85,
          "percentage": 13.3
        },
        "EVI_statistics": {
          "mean": 0.527,
          "median": 0.535,
          "min": 0.368,
          "max": 0.579
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.93,
          "percentage": 14.46
        },
        "EVI_statistics": {
          "mean": 0.616,
          "median": 0.618,
          "min": 0.579,
          "max": 0.647
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 3.78,
          "percentage": 58.99
        },
        "EVI_statistics": {
          "mean": 0.685,
          "median": 0.686,
          "min": 0.647,
          "max": 0.715
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.85,
          "percentage": 13.25
        },
        "EVI_statistics": {
          "mean": 0.731,
          "median": 0.73,
          "min": 0.715,
          "max": 0.772
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
            "ha": 0.04,
            "area_percentage": 0.64,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.97,
            "area_percentage": 15.42,
            "zone_number": 2
          },
          "similar": {
            "ha": 3.41,
            "area_percentage": 54.21,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 1.35,
            "area_percentage": 21.46,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.52,
            "area_percentage": 8.27,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-05-15",
      "reference_image_date": "2025-04-29",
      "change_period": 16
    },
    "median_EVI_change": {
      "old_value": 0.705,
      "new_value": 0.681,
      "difference": -0.025
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.01,
          "percentage": 0.11,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 0.55,
          "percentage": 8.59,
          "zone_number": 2
        },
        "no_change": {
          "ha": 5.53,
          "percentage": 86.38,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.22,
          "percentage": 3.4,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.1,
          "percentage": 1.52,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.205132118915664 49.11840598610169)",
          "new_value": 0.57,
          "old_value": 0.375,
          "value_difference": 0.195,
          "area_ha": 0.096,
          "category": "major_growth",
          "location": "N",
          "id": 1
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 0.57,
          "percentage": 8.94,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.77,
          "percentage": 12.1,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 3.69,
          "percentage": 57.6,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.84,
          "percentage": 13.13,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.53,
          "percentage": 8.24,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.206236204216868 49.1180314220339)",
          "new_value": 0.625,
          "old_value": 0.726,
          "value_difference": -0.101,
          "area_ha": 0.216,
          "category": "major_decline",
          "location": "NE",
          "id": 1
        },
        {
          "geometry": "POINT (16.204367752168675 49.11688097525424)",
          "new_value": 0.648,
          "old_value": 0.724,
          "value_difference": -0.076,
          "area_ha": 0.082,
          "category": "major_decline",
          "location": "C",
          "id": 2
        },
        {
          "geometry": "POINT (16.20483486518072 49.114526572542374)",
          "new_value": 0.703,
          "old_value": 0.655,
          "value_difference": 0.048,
          "area_ha": 0.23,
          "category": "major_growth",
          "location": "S",
          "id": 3
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 1090.545,
      "historical_average": 1087.333
    },
    "accumulated_precipitation_since_seeding": {
      "current": 183.076,
      "historical_mean": 283.575
    },
    "precipitation_summary": {
      "last_3_days": 0.71,
      "last_7_days": 0.732,
      "last_14_days": 6.192,
      "last_30_days": 42.365
    },
    "standardized_precipitation_index": {
      "1_month": -0.509,
      "3_month": -1.113,
      "6_month": -1.366
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-05-11 00:00:00",
          "temperature_mean": 11.218,
          "temperature_min": 7.053,
          "temperature_max": 15.334,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.394,
          "soiltemperature_0to10cm_mean": 12.049,
          "soilmoisture_0to10cm": 0.271,
          "windspeed_mean": 2.299
        },
        {
          "time": "2025-05-12 00:00:00",
          "temperature_mean": 10.445,
          "temperature_min": 4.421,
          "temperature_max": 14.341,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.337,
          "soiltemperature_0to10cm_mean": 11.137,
          "soilmoisture_0to10cm": 0.264,
          "windspeed_mean": 2.642
        },
        {
          "time": "2025-05-13 00:00:00",
          "temperature_mean": 11.458,
          "temperature_min": 6.591,
          "temperature_max": 16.17,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.267,
          "soiltemperature_0to10cm_mean": 12.029,
          "soilmoisture_0to10cm": 0.257,
          "windspeed_mean": 2.349
        },
        {
          "time": "2025-05-14 00:00:00",
          "temperature_mean": 14.561,
          "temperature_min": 6.889,
          "temperature_max": 20.192,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.781,
          "soiltemperature_0to10cm_mean": 12.982,
          "soilmoisture_0to10cm": 0.249,
          "windspeed_mean": 1.826
        },
        {
          "time": "2025-05-15 00:00:00",
          "temperature_mean": 11.037,
          "temperature_min": 6.404,
          "temperature_max": 13.374,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.634,
          "soiltemperature_0to10cm_mean": 12.424,
          "soilmoisture_0to10cm": 0.245,
          "windspeed_mean": 3.625
        },
        {
          "time": "2025-05-16 00:00:00",
          "temperature_mean": 9.618,
          "temperature_min": 5.678,
          "temperature_max": 14.477,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.477,
          "soiltemperature_0to10cm_mean": 11.065,
          "soilmoisture_0to10cm": 0.246,
          "windspeed_mean": 3.53
        },
        {
          "time": "2025-05-17 00:00:00",
          "temperature_mean": 11.191,
          "temperature_min": 6.757,
          "temperature_max": 15.435,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.849,
          "soiltemperature_0to10cm_mean": 11.725,
          "soilmoisture_0to10cm": 0.249,
          "windspeed_mean": 4.078
        },
        {
          "time": "2025-05-18 00:00:00",
          "temperature_mean": 10.44,
          "temperature_min": 7.096,
          "temperature_max": 14.565,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.843,
          "soiltemperature_0to10cm_mean": 11.511,
          "soilmoisture_0to10cm": 0.269,
          "windspeed_mean": 3.382
        },
        {
          "time": "2025-05-19 00:00:00",
          "temperature_mean": 11.392,
          "temperature_min": 8.389,
          "temperature_max": 13.795,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.867,
          "soiltemperature_0to10cm_mean": 11.316,
          "soilmoisture_0to10cm": 0.279,
          "windspeed_mean": 4.305
        },
        {
          "time": "2025-05-20 00:00:00",
          "temperature_mean": 13.525,
          "temperature_min": 9.653,
          "temperature_max": 17.303,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.627,
          "soiltemperature_0to10cm_mean": 12.961,
          "soilmoisture_0to10cm": 0.273,
          "windspeed_mean": 0.522
        },
        {
          "time": "2025-05-21 00:00:00",
          "temperature_mean": 15.21,
          "temperature_min": 8.969,
          "temperature_max": 20.056,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.527,
          "soiltemperature_0to10cm_mean": 14.246,
          "soilmoisture_0to10cm": 0.267,
          "windspeed_mean": 1.225
        },
        {
          "time": "2025-05-22 00:00:00",
          "temperature_mean": 12.696,
          "temperature_min": 9.499,
          "temperature_max": 15.612,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.952,
          "soiltemperature_0to10cm_mean": 13.026,
          "soilmoisture_0to10cm": 0.289,
          "windspeed_mean": 1.116
        },
        {
          "time": "2025-05-23 00:00:00",
          "temperature_mean": 10.895,
          "temperature_min": 6.24,
          "temperature_max": 15.035,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.891,
          "soiltemperature_0to10cm_mean": 12.124,
          "soilmoisture_0to10cm": 0.321,
          "windspeed_mean": 2.811
        },
        {
          "time": "2025-05-24 00:00:00",
          "temperature_mean": 11.122,
          "temperature_min": 6.116,
          "temperature_max": 15.354,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.407,
          "soiltemperature_0to10cm_mean": 11.913,
          "soilmoisture_0to10cm": 0.298,
          "windspeed_mean": 1.907
        },
        {
          "time": "2025-05-25 00:00:00",
          "temperature_mean": 13.227,
          "temperature_min": 8.605,
          "temperature_max": 17.992,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.505,
          "soiltemperature_0to10cm_mean": 12.74,
          "soilmoisture_0to10cm": 0.286,
          "windspeed_mean": 1.579
        },
        {
          "time": "2025-05-26 00:00:00",
          "temperature_mean": 14.56,
          "temperature_min": 11.296,
          "temperature_max": 18.38,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.711,
          "soiltemperature_0to10cm_mean": 14.239,
          "soilmoisture_0to10cm": 0.325,
          "windspeed_mean": 2.783
        },
        {
          "time": "2025-05-27 00:00:00",
          "temperature_mean": 14.638,
          "temperature_min": 9.72,
          "temperature_max": 18.982,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.533,
          "soiltemperature_0to10cm_mean": 14.787,
          "soilmoisture_0to10cm": 0.307,
          "windspeed_mean": 2.008
        },
        {
          "time": "2025-05-28 00:00:00",
          "temperature_mean": 14.446,
          "temperature_min": 10.684,
          "temperature_max": 18.402,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.799,
          "soiltemperature_0to10cm_mean": 14.112,
          "soilmoisture_0to10cm": 0.297,
          "windspeed_mean": 3.23
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-10-14",
      "day_since": 213
    },
    "crop_emergence": {
      "date": "2024-10-28",
      "day_since": 198
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-25",
      "day_since": 19
    },
    "beginning_of_heading": {
      "date": "2025-05-26",
      "day_since": -12
    },
    "beginning_of_ripenes": {
      "date": "2025-07-07",
      "day_since": -54
    },
    "harvest": {
      "date": "2025-07-26",
      "day_since": -73
    }
  },
  "timing_of_field_operations": {
    "2025-05-11": {
      "weather_conditions": {
        "temperature_mean": 11.218,
        "temperature_min": 7.053,
        "temperature_max": 15.334,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.394,
        "soiltemperature_0to10cm_mean": 12.049,
        "soilmoisture_0to10cm": 0.271,
        "windspeed_mean": 2.299
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
        "temperature_mean": 10.445,
        "temperature_min": 4.421,
        "temperature_max": 14.341,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.337,
        "soiltemperature_0to10cm_mean": 11.137,
        "soilmoisture_0to10cm": 0.264,
        "windspeed_mean": 2.642
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
    "2025-05-13": {
      "weather_conditions": {
        "temperature_mean": 11.458,
        "temperature_min": 6.591,
        "temperature_max": 16.17,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.267,
        "soiltemperature_0to10cm_mean": 12.029,
        "soilmoisture_0to10cm": 0.257,
        "windspeed_mean": 2.349
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
        "temperature_mean": 14.561,
        "temperature_min": 6.889,
        "temperature_max": 20.192,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.781,
        "soiltemperature_0to10cm_mean": 12.982,
        "soilmoisture_0to10cm": 0.249,
        "windspeed_mean": 1.826
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
          "day_air_temperature_max": "bad",
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
        "temperature_mean": 11.037,
        "temperature_min": 6.404,
        "temperature_max": 13.374,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.634,
        "soiltemperature_0to10cm_mean": 12.424,
        "soilmoisture_0to10cm": 0.245,
        "windspeed_mean": 3.625
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
    },
    "2025-05-16": {
      "weather_conditions": {
        "temperature_mean": 9.618,
        "temperature_min": 5.678,
        "temperature_max": 14.477,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.477,
        "soiltemperature_0to10cm_mean": 11.065,
        "soilmoisture_0to10cm": 0.246,
        "windspeed_mean": 3.53
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
        "temperature_mean": 11.191,
        "temperature_min": 6.757,
        "temperature_max": 15.435,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.849,
        "soiltemperature_0to10cm_mean": 11.725,
        "soilmoisture_0to10cm": 0.249,
        "windspeed_mean": 4.078
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
        "temperature_mean": 10.44,
        "temperature_min": 7.096,
        "temperature_max": 14.565,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.843,
        "soiltemperature_0to10cm_mean": 11.511,
        "soilmoisture_0to10cm": 0.269,
        "windspeed_mean": 3.382
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
    },
    "2025-05-19": {
      "weather_conditions": {
        "temperature_mean": 11.392,
        "temperature_min": 8.389,
        "temperature_max": 13.795,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.867,
        "soiltemperature_0to10cm_mean": 11.316,
        "soilmoisture_0to10cm": 0.279,
        "windspeed_mean": 4.305
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
          "precipitation": "good"
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
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-05-20": {
      "weather_conditions": {
        "temperature_mean": 13.525,
        "temperature_min": 9.653,
        "temperature_max": 17.303,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.627,
        "soiltemperature_0to10cm_mean": 12.961,
        "soilmoisture_0to10cm": 0.273,
        "windspeed_mean": 0.522
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
    },
    "2025-05-21": {
      "weather_conditions": {
        "temperature_mean": 15.21,
        "temperature_min": 8.969,
        "temperature_max": 20.056,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.527,
        "soiltemperature_0to10cm_mean": 14.246,
        "soilmoisture_0to10cm": 0.267,
        "windspeed_mean": 1.225
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
        "temperature_mean": 12.696,
        "temperature_min": 9.499,
        "temperature_max": 15.612,
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.952,
        "soiltemperature_0to10cm_mean": 13.026,
        "soilmoisture_0to10cm": 0.289,
        "windspeed_mean": 1.116
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
        "temperature_mean": 10.895,
        "temperature_min": 6.24,
        "temperature_max": 15.035,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.891,
        "soiltemperature_0to10cm_mean": 12.124,
        "soilmoisture_0to10cm": 0.321,
        "windspeed_mean": 2.811
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
    "2025-05-24": {
      "weather_conditions": {
        "temperature_mean": 11.122,
        "temperature_min": 6.116,
        "temperature_max": 15.354,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.407,
        "soiltemperature_0to10cm_mean": 11.913,
        "soilmoisture_0to10cm": 0.298,
        "windspeed_mean": 1.907
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
    "2025-05-25": {
      "weather_conditions": {
        "temperature_mean": 13.227,
        "temperature_min": 8.605,
        "temperature_max": 17.992,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.505,
        "soiltemperature_0to10cm_mean": 12.74,
        "soilmoisture_0to10cm": 0.286,
        "windspeed_mean": 1.579
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
    "2025-05-26": {
      "weather_conditions": {
        "temperature_mean": 14.56,
        "temperature_min": 11.296,
        "temperature_max": 18.38,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.711,
        "soiltemperature_0to10cm_mean": 14.239,
        "soilmoisture_0to10cm": 0.325,
        "windspeed_mean": 2.783
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
        "temperature_mean": 14.638,
        "temperature_min": 9.72,
        "temperature_max": 18.982,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.533,
        "soiltemperature_0to10cm_mean": 14.787,
        "soilmoisture_0to10cm": 0.307,
        "windspeed_mean": 2.008
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
        "temperature_mean": 14.446,
        "temperature_min": 10.684,
        "temperature_max": 18.402,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.799,
        "soiltemperature_0to10cm_mean": 14.112,
        "soilmoisture_0to10cm": 0.297,
        "windspeed_mean": 3.23
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
    }
  },
  "_images": {
    "zones": "images/zones.png",
    "history": "images/history.png",
    "hotspots": "images/hotspots.png",
    "evi": "images/evi.png",
    "rgb": "images/rgb.png"
  },
  "polygon_wkt": "POLYGON ((16.20478025 49.11389784, 16.20476604 49.11389993, 16.20435411 49.11394104, 16.20379657 49.1139957, 16.20324797 49.1140374, 16.20317322 49.11404636, 16.20314098 49.11405781, 16.20311783 49.11408957, 16.20311504 49.11412484, 16.20312521 49.11416968, 16.20315719 49.11428528, 16.20316897 49.11431616, 16.20320063 49.1143992, 16.20328562 49.11460177, 16.20340987 49.11487747, 16.20345288 49.11500056, 16.20356999 49.11531324, 16.20422686 49.1168727, 16.20487373 49.11846913, 16.20493196 49.11861321, 16.20497188 49.11862794, 16.2050152 49.1186334, 16.20507781 49.11862577, 16.2051479 49.11861423, 16.20589603 49.11852135, 16.20616296 49.11850529, 16.20625316 49.11849986, 16.20645537 49.11847872, 16.20663821 49.11845795, 16.20663962 49.1184576, 16.20623431 49.11747745, 16.20478025 49.11389784))"
};
