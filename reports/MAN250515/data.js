// Field data for MAN250515 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAN250515",
  "metadata": {
    "field_area_ha": 17.202,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Mohelno"
    },
    "terrain": {
      "variability": 27.3,
      "mean_elevation": 409.133,
      "min_elevation": 396.571,
      "max_elevation": 423.871
    },
    "soil": {
      "bulk_density kg/dm³": 1.33,
      "cation_exchange_capacity cmol(c)/kg": 21.467,
      "clay_particles g/100g (%)": 21.661,
      "sand particles g/100g (%)": 21.001,
      "silt particles g/100g (%)": 57.338,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-03-17": {
      "min": 0.202,
      "max": 0.38,
      "median": 0.274,
      "mean": 0.275,
      "sd": 0.02
    },
    "2025-03-21": {
      "min": 0.142,
      "max": 0.312,
      "median": 0.217,
      "mean": 0.219,
      "sd": 0.021
    },
    "2025-04-03": {
      "min": 0.285,
      "max": 0.548,
      "median": 0.429,
      "mean": 0.429,
      "sd": 0.033
    },
    "2025-04-11": {
      "min": 0.312,
      "max": 0.608,
      "median": 0.495,
      "mean": 0.493,
      "sd": 0.036
    },
    "2025-04-29": {
      "min": 0.423,
      "max": 0.79,
      "median": 0.707,
      "mean": 0.701,
      "sd": 0.038
    },
    "2025-05-09": {
      "min": 0.509,
      "max": 0.855,
      "median": 0.75,
      "mean": 0.739,
      "sd": 0.046
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 17.495,
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
        "area_ha": 6.143,
        "area_percentage": 0.351
      },
      "high_vegetation": {
        "area_ha": 11.352,
        "area_percentage": 0.649
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
    "evi_median": 0.671,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.29,
          "percentage": 7.39
        },
        "EVI_statistics": {
          "mean": 0.533,
          "median": 0.54,
          "min": 0.416,
          "max": 0.57
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.83,
          "percentage": 21.92
        },
        "EVI_statistics": {
          "mean": 0.609,
          "median": 0.612,
          "min": 0.57,
          "max": 0.637
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 9.89,
          "percentage": 56.56
        },
        "EVI_statistics": {
          "mean": 0.676,
          "median": 0.678,
          "min": 0.637,
          "max": 0.704
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 2.47,
          "percentage": 14.13
        },
        "EVI_statistics": {
          "mean": 0.716,
          "median": 0.714,
          "min": 0.704,
          "max": 0.761
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
            "ha": 1.43,
            "area_percentage": 8.64,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 3.56,
            "area_percentage": 21.51,
            "zone_number": 2
          },
          "similar": {
            "ha": 8.52,
            "area_percentage": 51.48,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 2.45,
            "area_percentage": 14.8,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.59,
            "area_percentage": 3.56,
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
      "old_value": 0.707,
      "new_value": 0.671,
      "difference": -0.04
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.07,
          "percentage": 0.43,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 2.91,
          "percentage": 16.61,
          "zone_number": 2
        },
        "no_change": {
          "ha": 14.51,
          "percentage": 82.96,
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
          "ha": 1.66,
          "percentage": 9.46,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 2.76,
          "percentage": 15.76,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 8.68,
          "percentage": 49.62,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.69,
          "percentage": 15.38,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.71,
          "percentage": 9.78,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.18542536403226 49.121045006962966)",
          "new_value": 0.68,
          "old_value": 0.673,
          "value_difference": 0.007,
          "area_ha": 0.565,
          "category": "major_growth",
          "location": "E",
          "id": 1
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
      "date": "2024-10-30",
      "day_since": 196
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-29",
      "day_since": 15
    },
    "beginning_of_heading": {
      "date": "2025-06-01",
      "day_since": -18
    },
    "beginning_of_ripenes": {
      "date": "2025-07-11",
      "day_since": -58
    },
    "harvest": {
      "date": "2025-07-30",
      "day_since": -77
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
      "early_fungicide": {
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
    }
  },
  "_images": {
    "zones": "images/zones.png",
    "history": "images/history.png",
    "hotspots": "images/hotspots.png",
    "evi": "images/evi.png",
    "rgb": "images/rgb.png"
  },
  "polygon_wkt": "POLYGON ((16.17823519 49.12326941, 16.17825865 49.12326568, 16.17830052 49.12325374, 16.178356 49.1232448, 16.17841775 49.12324231, 16.18187852 49.12277889, 16.18188136 49.12277854, 16.18271821 49.12268644, 16.18356823 49.12257459, 16.18356836 49.12257457, 16.18485972 49.12240606, 16.18524052 49.12235473, 16.18524141 49.12235461, 16.18568372 49.12229833, 16.18635542 49.12220814, 16.1864609 49.12219349, 16.18648907 49.12218977, 16.18655741 49.12218859, 16.18656421 49.12219073, 16.18655354 49.12215477, 16.18644325 49.12183683, 16.18620989 49.12099287, 16.18609685 49.12066015, 16.18594414 49.12015458, 16.18581567 49.11980241, 16.1857933 49.1197628, 16.18575485 49.11973838, 16.18557318 49.11971619, 16.18552238 49.11971563, 16.18533905 49.11973169, 16.18402879 49.11991002, 16.18255971 49.12009243, 16.18189079 49.12019093, 16.18121842 49.12028118, 16.18046676 49.12037987, 16.18003682 49.12044673, 16.17977425 49.12050214, 16.1796682 49.12052455, 16.17948548 49.12056836, 16.17907655 49.12066047, 16.17766751 49.12104861, 16.17761415 49.12107826, 16.17758631 49.12109853, 16.17757768 49.12112024, 16.17759054 49.12117228, 16.17765598 49.12140353, 16.17783234 49.12190989, 16.17791959 49.12206665, 16.1779669 49.12222314, 16.17802284 49.12241739, 16.17810085 49.12271484, 16.17813337 49.12282705, 16.17822363 49.1232018, 16.17823519 49.12326941))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
