// Field data for MAP250515 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAP250515",
  "metadata": {
    "field_area_ha": 4.818,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lhánice"
    },
    "terrain": {
      "variability": 5.778,
      "mean_elevation": 392.45,
      "min_elevation": 389.641,
      "max_elevation": 395.418
    },
    "soil": {
      "bulk_density kg/dm³": 1.327,
      "cation_exchange_capacity cmol(c)/kg": 21.159,
      "clay_particles g/100g (%)": 24.337,
      "sand particles g/100g (%)": 19.54,
      "silt particles g/100g (%)": 56.124,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-03-18": {
      "min": 0.181,
      "max": 0.337,
      "median": 0.276,
      "mean": 0.274,
      "sd": 0.021
    },
    "2025-04-03": {
      "min": 0.258,
      "max": 0.516,
      "median": 0.428,
      "mean": 0.422,
      "sd": 0.039
    },
    "2025-04-11": {
      "min": 0.27,
      "max": 0.561,
      "median": 0.485,
      "mean": 0.475,
      "sd": 0.047
    },
    "2025-04-20": {
      "min": 0.331,
      "max": 0.61,
      "median": 0.545,
      "mean": 0.531,
      "sd": 0.047
    },
    "2025-04-28": {
      "min": 0.326,
      "max": 0.662,
      "median": 0.588,
      "mean": 0.577,
      "sd": 0.045
    },
    "2025-05-03": {
      "min": 0.523,
      "max": 0.808,
      "median": 0.728,
      "mean": 0.718,
      "sd": 0.041
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 4.823,
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
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "medium vegetation": {
        "area_ha": 2.643,
        "area_percentage": 0.548
      },
      "high_vegetation": {
        "area_ha": 2.18,
        "area_percentage": 0.452
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
    "evi_median": 0.647,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.22,
          "percentage": 4.48
        },
        "EVI_statistics": {
          "mean": 0.511,
          "median": 0.52,
          "min": 0.414,
          "max": 0.55
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.5,
          "percentage": 10.39
        },
        "EVI_statistics": {
          "mean": 0.591,
          "median": 0.596,
          "min": 0.55,
          "max": 0.615
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 3.89,
          "percentage": 80.65
        },
        "EVI_statistics": {
          "mean": 0.65,
          "median": 0.65,
          "min": 0.615,
          "max": 0.68
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.22,
          "percentage": 4.48
        },
        "EVI_statistics": {
          "mean": 0.687,
          "median": 0.686,
          "min": 0.68,
          "max": 0.727
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
            "ha": 0.08,
            "area_percentage": 1.71,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 1.03,
            "area_percentage": 22.06,
            "zone_number": 2
          },
          "similar": {
            "ha": 2.23,
            "area_percentage": 47.75,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.98,
            "area_percentage": 20.99,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.35,
            "area_percentage": 7.49,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-05-15",
      "reference_image_date": "2025-04-28",
      "change_period": 17
    },
    "median_EVI_change": {
      "old_value": 0.588,
      "new_value": 0.647,
      "difference": 0.06
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
          "ha": 0.0,
          "percentage": 0.0,
          "zone_number": 2
        },
        "no_change": {
          "ha": 3.68,
          "percentage": 76.25,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 1.13,
          "percentage": 23.38,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.02,
          "percentage": 0.37,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 0.54,
          "percentage": 11.25,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.7,
          "percentage": 14.61,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 2.36,
          "percentage": 48.98,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.64,
          "percentage": 13.27,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.57,
          "percentage": 11.89,
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
      "date": "2025-04-26",
      "day_since": 18
    },
    "beginning_of_heading": {
      "date": "2025-05-28",
      "day_since": -14
    },
    "beginning_of_ripenes": {
      "date": "2025-07-08",
      "day_since": -55
    },
    "harvest": {
      "date": "2025-07-27",
      "day_since": -74
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
  "polygon_wkt": "POLYGON ((16.2350599 49.11482723, 16.23539448 49.11470093, 16.23699407 49.11409705, 16.23606225 49.11345609, 16.23417243 49.11215611, 16.23415059 49.11214087, 16.23332578 49.11246041, 16.23251052 49.11277029, 16.23216454 49.11289644, 16.23218024 49.11290799, 16.23392629 49.11407172, 16.2350599 49.11482723))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
