// Field data for MAO250515 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAO250515",
  "metadata": {
    "field_area_ha": 2.916,
    "location": {
      "country": " Czechia",
      "region": " South Moravian",
      "subregion": "Senorady"
    },
    "terrain": {
      "variability": 7.102,
      "mean_elevation": 377.816,
      "min_elevation": 374.209,
      "max_elevation": 381.312
    },
    "soil": {
      "bulk_density kg/dm³": 1.34,
      "cation_exchange_capacity cmol(c)/kg": 20.809,
      "clay_particles g/100g (%)": 25.471,
      "sand particles g/100g (%)": 17.918,
      "silt particles g/100g (%)": 56.611,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-03-18": {
      "min": 0.234,
      "max": 0.383,
      "median": 0.288,
      "mean": 0.291,
      "sd": 0.021
    },
    "2025-04-03": {
      "min": 0.246,
      "max": 0.517,
      "median": 0.342,
      "mean": 0.346,
      "sd": 0.038
    },
    "2025-04-11": {
      "min": 0.314,
      "max": 0.551,
      "median": 0.414,
      "mean": 0.416,
      "sd": 0.032
    },
    "2025-04-20": {
      "min": 0.321,
      "max": 0.542,
      "median": 0.436,
      "mean": 0.435,
      "sd": 0.033
    },
    "2025-04-28": {
      "min": 0.33,
      "max": 0.583,
      "median": 0.467,
      "mean": 0.463,
      "sd": 0.036
    },
    "2025-05-09": {
      "min": 0.422,
      "max": 0.678,
      "median": 0.547,
      "mean": 0.546,
      "sd": 0.037
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 2.915,
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
        "area_ha": 2.914,
        "area_percentage": 1.0
      },
      "high_vegetation": {
        "area_ha": 0.001,
        "area_percentage": 0.0
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
    "evi_median": 0.513,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.03,
          "percentage": 1.02
        },
        "EVI_statistics": {
          "mean": 0.429,
          "median": 0.43,
          "min": 0.417,
          "max": 0.436
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.66,
          "percentage": 22.54
        },
        "EVI_statistics": {
          "mean": 0.469,
          "median": 0.472,
          "min": 0.437,
          "max": 0.487
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 1.58,
          "percentage": 54.34
        },
        "EVI_statistics": {
          "mean": 0.513,
          "median": 0.514,
          "min": 0.488,
          "max": 0.539
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.61,
          "percentage": 21.09
        },
        "EVI_statistics": {
          "mean": 0.555,
          "median": 0.552,
          "min": 0.539,
          "max": 0.59
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.03,
          "percentage": 1.02
        },
        "EVI_statistics": {
          "mean": 0.615,
          "median": 0.609,
          "min": 0.591,
          "max": 0.654
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.24,
            "area_percentage": 8.7,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.68,
            "area_percentage": 24.64,
            "zone_number": 2
          },
          "similar": {
            "ha": 0.95,
            "area_percentage": 34.42,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.64,
            "area_percentage": 23.19,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.25,
            "area_percentage": 9.06,
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
      "old_value": 0.467,
      "new_value": 0.513,
      "difference": 0.049
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
          "ha": 2.55,
          "percentage": 87.59,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.36,
          "percentage": 12.38,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.0,
          "percentage": 0.03,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 0.28,
          "percentage": 9.6,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.44,
          "percentage": 15.19,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 1.43,
          "percentage": 49.12,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.49,
          "percentage": 16.86,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.27,
          "percentage": 9.23,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.25368925457317 49.12372947547945)",
          "new_value": 0.495,
          "old_value": 0.486,
          "value_difference": 0.009,
          "area_ha": 0.059,
          "category": "major_decline",
          "location": "C",
          "id": 1
        },
        {
          "geometry": "POINT (16.252897758597562 49.12359657821918)",
          "new_value": 0.484,
          "old_value": 0.481,
          "value_difference": 0.003,
          "area_ha": 0.052,
          "category": "major_decline",
          "location": "SW",
          "id": 2
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 1118.632,
      "historical_average": 1110.452
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
          "temperature_mean": 11.386,
          "temperature_min": 7.358,
          "temperature_max": 15.478,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.394,
          "soiltemperature_0to10cm_mean": 12.282,
          "soilmoisture_0to10cm": 0.265,
          "windspeed_mean": 2.424
        },
        {
          "time": "2025-05-12 00:00:00",
          "temperature_mean": 10.7,
          "temperature_min": 5.149,
          "temperature_max": 14.525,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.337,
          "soiltemperature_0to10cm_mean": 11.381,
          "soilmoisture_0to10cm": 0.258,
          "windspeed_mean": 2.713
        },
        {
          "time": "2025-05-13 00:00:00",
          "temperature_mean": 11.63,
          "temperature_min": 6.859,
          "temperature_max": 16.293,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.267,
          "soiltemperature_0to10cm_mean": 12.229,
          "soilmoisture_0to10cm": 0.251,
          "windspeed_mean": 2.381
        },
        {
          "time": "2025-05-14 00:00:00",
          "temperature_mean": 14.768,
          "temperature_min": 6.982,
          "temperature_max": 20.397,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.781,
          "soiltemperature_0to10cm_mean": 13.187,
          "soilmoisture_0to10cm": 0.243,
          "windspeed_mean": 1.858
        },
        {
          "time": "2025-05-15 00:00:00",
          "temperature_mean": 11.178,
          "temperature_min": 6.434,
          "temperature_max": 13.611,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.634,
          "soiltemperature_0to10cm_mean": 12.597,
          "soilmoisture_0to10cm": 0.239,
          "windspeed_mean": 3.606
        },
        {
          "time": "2025-05-16 00:00:00",
          "temperature_mean": 9.752,
          "temperature_min": 5.68,
          "temperature_max": 14.618,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.477,
          "soiltemperature_0to10cm_mean": 11.182,
          "soilmoisture_0to10cm": 0.241,
          "windspeed_mean": 3.46
        },
        {
          "time": "2025-05-17 00:00:00",
          "temperature_mean": 11.37,
          "temperature_min": 6.945,
          "temperature_max": 15.629,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.849,
          "soiltemperature_0to10cm_mean": 11.889,
          "soilmoisture_0to10cm": 0.245,
          "windspeed_mean": 4.071
        },
        {
          "time": "2025-05-18 00:00:00",
          "temperature_mean": 10.598,
          "temperature_min": 7.219,
          "temperature_max": 14.813,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.843,
          "soiltemperature_0to10cm_mean": 11.668,
          "soilmoisture_0to10cm": 0.264,
          "windspeed_mean": 3.331
        },
        {
          "time": "2025-05-19 00:00:00",
          "temperature_mean": 11.547,
          "temperature_min": 8.514,
          "temperature_max": 13.913,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.867,
          "soiltemperature_0to10cm_mean": 11.464,
          "soilmoisture_0to10cm": 0.274,
          "windspeed_mean": 4.315
        },
        {
          "time": "2025-05-20 00:00:00",
          "temperature_mean": 13.681,
          "temperature_min": 9.862,
          "temperature_max": 17.438,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.627,
          "soiltemperature_0to10cm_mean": 13.142,
          "soilmoisture_0to10cm": 0.267,
          "windspeed_mean": 0.575
        },
        {
          "time": "2025-05-21 00:00:00",
          "temperature_mean": 15.252,
          "temperature_min": 8.805,
          "temperature_max": 20.191,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.527,
          "soiltemperature_0to10cm_mean": 14.413,
          "soilmoisture_0to10cm": 0.261,
          "windspeed_mean": 1.271
        },
        {
          "time": "2025-05-22 00:00:00",
          "temperature_mean": 12.972,
          "temperature_min": 9.751,
          "temperature_max": 15.989,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.952,
          "soiltemperature_0to10cm_mean": 13.329,
          "soilmoisture_0to10cm": 0.282,
          "windspeed_mean": 1.006
        },
        {
          "time": "2025-05-23 00:00:00",
          "temperature_mean": 11.099,
          "temperature_min": 6.484,
          "temperature_max": 15.203,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.891,
          "soiltemperature_0to10cm_mean": 12.33,
          "soilmoisture_0to10cm": 0.315,
          "windspeed_mean": 2.905
        },
        {
          "time": "2025-05-24 00:00:00",
          "temperature_mean": 11.267,
          "temperature_min": 6.362,
          "temperature_max": 15.473,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.407,
          "soiltemperature_0to10cm_mean": 12.151,
          "soilmoisture_0to10cm": 0.293,
          "windspeed_mean": 1.934
        },
        {
          "time": "2025-05-25 00:00:00",
          "temperature_mean": 13.537,
          "temperature_min": 8.861,
          "temperature_max": 18.291,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.505,
          "soiltemperature_0to10cm_mean": 12.977,
          "soilmoisture_0to10cm": 0.28,
          "windspeed_mean": 1.46
        },
        {
          "time": "2025-05-26 00:00:00",
          "temperature_mean": 14.741,
          "temperature_min": 11.368,
          "temperature_max": 18.61,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.711,
          "soiltemperature_0to10cm_mean": 14.461,
          "soilmoisture_0to10cm": 0.316,
          "windspeed_mean": 2.755
        },
        {
          "time": "2025-05-27 00:00:00",
          "temperature_mean": 14.75,
          "temperature_min": 9.75,
          "temperature_max": 19.048,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.533,
          "soiltemperature_0to10cm_mean": 14.986,
          "soilmoisture_0to10cm": 0.3,
          "windspeed_mean": 1.943
        },
        {
          "time": "2025-05-28 00:00:00",
          "temperature_mean": 14.615,
          "temperature_min": 10.725,
          "temperature_max": 18.706,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.799,
          "soiltemperature_0to10cm_mean": 14.304,
          "soilmoisture_0to10cm": 0.291,
          "windspeed_mean": 3.181
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
      "date": "2024-10-26",
      "day_since": 200
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-29",
      "day_since": 15
    },
    "beginning_of_heading": {
      "date": "2025-06-02",
      "day_since": -19
    },
    "beginning_of_ripenes": {
      "date": "2025-07-14",
      "day_since": -61
    },
    "harvest": {
      "date": "2025-08-02",
      "day_since": -80
    }
  },
  "timing_of_field_operations": {
    "2025-05-11": {
      "weather_conditions": {
        "temperature_mean": 11.386,
        "temperature_min": 7.358,
        "temperature_max": 15.478,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.394,
        "soiltemperature_0to10cm_mean": 12.282,
        "soilmoisture_0to10cm": 0.265,
        "windspeed_mean": 2.424
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
        "temperature_mean": 10.7,
        "temperature_min": 5.149,
        "temperature_max": 14.525,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.337,
        "soiltemperature_0to10cm_mean": 11.381,
        "soilmoisture_0to10cm": 0.258,
        "windspeed_mean": 2.713
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
    "2025-05-13": {
      "weather_conditions": {
        "temperature_mean": 11.63,
        "temperature_min": 6.859,
        "temperature_max": 16.293,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.267,
        "soiltemperature_0to10cm_mean": 12.229,
        "soilmoisture_0to10cm": 0.251,
        "windspeed_mean": 2.381
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
        "temperature_mean": 14.768,
        "temperature_min": 6.982,
        "temperature_max": 20.397,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.781,
        "soiltemperature_0to10cm_mean": 13.187,
        "soilmoisture_0to10cm": 0.243,
        "windspeed_mean": 1.858
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
        "temperature_mean": 11.178,
        "temperature_min": 6.434,
        "temperature_max": 13.611,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.634,
        "soiltemperature_0to10cm_mean": 12.597,
        "soilmoisture_0to10cm": 0.239,
        "windspeed_mean": 3.606
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
    "2025-05-16": {
      "weather_conditions": {
        "temperature_mean": 9.752,
        "temperature_min": 5.68,
        "temperature_max": 14.618,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.477,
        "soiltemperature_0to10cm_mean": 11.182,
        "soilmoisture_0to10cm": 0.241,
        "windspeed_mean": 3.46
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
        "temperature_mean": 11.37,
        "temperature_min": 6.945,
        "temperature_max": 15.629,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.849,
        "soiltemperature_0to10cm_mean": 11.889,
        "soilmoisture_0to10cm": 0.245,
        "windspeed_mean": 4.071
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
        "temperature_mean": 10.598,
        "temperature_min": 7.219,
        "temperature_max": 14.813,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.843,
        "soiltemperature_0to10cm_mean": 11.668,
        "soilmoisture_0to10cm": 0.264,
        "windspeed_mean": 3.331
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
        "temperature_mean": 11.547,
        "temperature_min": 8.514,
        "temperature_max": 13.913,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.867,
        "soiltemperature_0to10cm_mean": 11.464,
        "soilmoisture_0to10cm": 0.274,
        "windspeed_mean": 4.315
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
        "temperature_mean": 13.681,
        "temperature_min": 9.862,
        "temperature_max": 17.438,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.627,
        "soiltemperature_0to10cm_mean": 13.142,
        "soilmoisture_0to10cm": 0.267,
        "windspeed_mean": 0.575
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
        "temperature_mean": 15.252,
        "temperature_min": 8.805,
        "temperature_max": 20.191,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.527,
        "soiltemperature_0to10cm_mean": 14.413,
        "soilmoisture_0to10cm": 0.261,
        "windspeed_mean": 1.271
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
        "temperature_mean": 12.972,
        "temperature_min": 9.751,
        "temperature_max": 15.989,
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.952,
        "soiltemperature_0to10cm_mean": 13.329,
        "soilmoisture_0to10cm": 0.282,
        "windspeed_mean": 1.006
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
        "temperature_mean": 11.099,
        "temperature_min": 6.484,
        "temperature_max": 15.203,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.891,
        "soiltemperature_0to10cm_mean": 12.33,
        "soilmoisture_0to10cm": 0.315,
        "windspeed_mean": 2.905
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
        "temperature_mean": 11.267,
        "temperature_min": 6.362,
        "temperature_max": 15.473,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.407,
        "soiltemperature_0to10cm_mean": 12.151,
        "soilmoisture_0to10cm": 0.293,
        "windspeed_mean": 1.934
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
        "temperature_mean": 13.537,
        "temperature_min": 8.861,
        "temperature_max": 18.291,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.505,
        "soiltemperature_0to10cm_mean": 12.977,
        "soilmoisture_0to10cm": 0.28,
        "windspeed_mean": 1.46
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
        "temperature_mean": 14.741,
        "temperature_min": 11.368,
        "temperature_max": 18.61,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.711,
        "soiltemperature_0to10cm_mean": 14.461,
        "soilmoisture_0to10cm": 0.316,
        "windspeed_mean": 2.755
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
        "temperature_mean": 14.75,
        "temperature_min": 9.75,
        "temperature_max": 19.048,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.533,
        "soiltemperature_0to10cm_mean": 14.986,
        "soilmoisture_0to10cm": 0.3,
        "windspeed_mean": 1.943
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
        "temperature_mean": 14.615,
        "temperature_min": 10.725,
        "temperature_max": 18.706,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.799,
        "soiltemperature_0to10cm_mean": 14.304,
        "soilmoisture_0to10cm": 0.291,
        "windspeed_mean": 3.181
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
  "polygon_wkt": "POLYGON ((16.25515866 49.12463116, 16.25520976 49.12460948, 16.25516645 49.12453604, 16.25487654 49.12413878, 16.25466423 49.1238579, 16.25458819 49.12377082, 16.25445372 49.12368865, 16.25417761 49.12359128, 16.25403861 49.12355093, 16.2539411 49.12352414, 16.2537129 49.12345218, 16.25328919 49.12328325, 16.25301952 49.12320862, 16.25282453 49.12316035, 16.25263938 49.12313023, 16.25254564 49.12312017, 16.25242945 49.12311373, 16.25229137 49.12309049, 16.25202041 49.1230266, 16.25193587 49.12302512, 16.25184545 49.12303305, 16.25179383 49.12309819, 16.25181374 49.12317039, 16.25190702 49.1233329, 16.25204154 49.12355328, 16.25220056 49.12378786, 16.252366 49.12401406, 16.25258368 49.12431487, 16.25269216 49.12443607, 16.25282697 49.12454507, 16.25300264 49.12463588, 16.25321525 49.1247312, 16.25334329 49.12483263, 16.25348377 49.12493271, 16.25356234 49.12496542, 16.25360423 49.12496466, 16.25372117 49.12494938, 16.25389289 49.12491261, 16.25419603 49.1248329, 16.25515866 49.12463116))"
};
