// Field data for MAS250515 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAS250515",
  "metadata": {
    "field_area_ha": 2.891,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Mohelno"
    },
    "terrain": {
      "variability": 5.61,
      "mean_elevation": 386.987,
      "min_elevation": 383.592,
      "max_elevation": 389.202
    },
    "soil": {
      "bulk_density kg/dm³": 1.319,
      "cation_exchange_capacity cmol(c)/kg": 20.587,
      "clay_particles g/100g (%)": 24.564,
      "sand particles g/100g (%)": 22.574,
      "silt particles g/100g (%)": 52.861,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-03-17": {
      "min": 0.243,
      "max": 0.339,
      "median": 0.299,
      "mean": 0.299,
      "sd": 0.015
    },
    "2025-03-21": {
      "min": 0.177,
      "max": 0.292,
      "median": 0.242,
      "mean": 0.242,
      "sd": 0.017
    },
    "2025-04-03": {
      "min": 0.293,
      "max": 0.502,
      "median": 0.422,
      "mean": 0.422,
      "sd": 0.033
    },
    "2025-04-14": {
      "min": 0.315,
      "max": 0.634,
      "median": 0.534,
      "mean": 0.53,
      "sd": 0.04
    },
    "2025-04-22": {
      "min": 0.314,
      "max": 0.69,
      "median": 0.605,
      "mean": 0.601,
      "sd": 0.043
    },
    "2025-04-29": {
      "min": 0.398,
      "max": 0.76,
      "median": 0.674,
      "mean": 0.668,
      "sd": 0.046
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 2.843,
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
        "area_ha": 0.018,
        "area_percentage": 0.006
      },
      "medium vegetation": {
        "area_ha": 1.993,
        "area_percentage": 0.701
      },
      "high_vegetation": {
        "area_ha": 0.833,
        "area_percentage": 0.293
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
    "evi_median": 0.633,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.16,
          "percentage": 5.51
        },
        "EVI_statistics": {
          "mean": 0.474,
          "median": 0.488,
          "min": 0.318,
          "max": 0.538
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.48,
          "percentage": 16.81
        },
        "EVI_statistics": {
          "mean": 0.581,
          "median": 0.585,
          "min": 0.538,
          "max": 0.601
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 1.84,
          "percentage": 64.64
        },
        "EVI_statistics": {
          "mean": 0.636,
          "median": 0.637,
          "min": 0.601,
          "max": 0.664
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.37,
          "percentage": 12.98
        },
        "EVI_statistics": {
          "mean": 0.675,
          "median": 0.672,
          "min": 0.664,
          "max": 0.721
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.0,
          "percentage": 0.06
        },
        "EVI_statistics": {
          "mean": 0.737,
          "median": 0.737,
          "min": 0.734,
          "max": 0.74
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.15,
            "area_percentage": 5.4,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.66,
            "area_percentage": 23.74,
            "zone_number": 2
          },
          "similar": {
            "ha": 1.1,
            "area_percentage": 39.57,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.68,
            "area_percentage": 24.46,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.19,
            "area_percentage": 6.83,
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
      "old_value": 0.674,
      "new_value": 0.633,
      "difference": -0.045
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.01,
          "percentage": 0.25,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 0.27,
          "percentage": 9.43,
          "zone_number": 2
        },
        "no_change": {
          "ha": 2.57,
          "percentage": 90.31,
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
          "ha": 0.19,
          "percentage": 6.58,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.43,
          "percentage": 15.1,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 1.61,
          "percentage": 56.6,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.43,
          "percentage": 15.26,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.18,
          "percentage": 6.46,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
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
      "date": "2025-04-23",
      "day_since": 21
    },
    "beginning_of_heading": {
      "date": "2025-05-24",
      "day_since": -10
    },
    "beginning_of_ripenes": {
      "date": "2025-07-05",
      "day_since": -52
    },
    "harvest": {
      "date": "2025-07-24",
      "day_since": -71
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
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.33
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
      },
      "mid_fungicide": {
        "conditions": {
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
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.33
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
    }
  },
  "_images": {
    "zones": "images/zones.png",
    "history": "images/history.png",
    "hotspots": "images/hotspots.png",
    "evi": "images/evi.png",
    "rgb": "images/rgb.png"
  },
  "polygon_wkt": "POLYGON ((16.20228445 49.11627205, 16.2026515 49.11630531, 16.20348775 49.11639732, 16.20385538 49.11644005, 16.20397014 49.11645147, 16.20398985 49.11644719, 16.20398942 49.11643279, 16.20392941 49.11629039, 16.20381491 49.11603282, 16.20370185 49.11577536, 16.20349508 49.11526667, 16.20342174 49.11509166, 16.20338506 49.11500847, 16.20333478 49.11489649, 16.20329626 49.11480422, 16.20326291 49.11472032, 16.20318475 49.11452995, 16.20315541 49.11445497, 16.20312444 49.11437989, 16.20308556 49.11428408, 16.20305493 49.1141659, 16.20304316 49.11410848, 16.20301982 49.1140464, 16.20300962 49.11404085, 16.20295694 49.11404171, 16.20284469 49.11405148, 16.20278945 49.11405759, 16.20254437 49.11408184, 16.20242929 49.11411445, 16.20226458 49.11410505, 16.20165235 49.11415528, 16.20150765 49.11416738, 16.20228445 49.11627205))"
};
