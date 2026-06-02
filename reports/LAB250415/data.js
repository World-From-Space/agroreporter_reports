// Field data for LAB250415 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAB250415",
  "metadata": {
    "field_area_ha": 26.983,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Martínkov"
    },
    "terrain": {
      "variability": 47.201,
      "mean_elevation": 571.696,
      "min_elevation": 556.379,
      "max_elevation": 603.581
    },
    "soil": {
      "bulk_density kg/dm³": 1.311,
      "cation_exchange_capacity cmol(c)/kg": 19.85,
      "clay_particles g/100g (%)": 21.177,
      "sand particles g/100g (%)": 33.406,
      "silt particles g/100g (%)": 45.417,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-02-11": {
      "min": 0.143,
      "max": 0.439,
      "median": 0.361,
      "mean": 0.354,
      "sd": 0.032
    },
    "2025-03-05": {
      "min": 0.228,
      "max": 0.449,
      "median": 0.373,
      "mean": 0.37,
      "sd": 0.023
    },
    "2025-03-09": {
      "min": 0.164,
      "max": 0.424,
      "median": 0.341,
      "mean": 0.337,
      "sd": 0.03
    },
    "2025-03-18": {
      "min": 0.253,
      "max": 0.541,
      "median": 0.439,
      "mean": 0.436,
      "sd": 0.031
    },
    "2025-03-28": {
      "min": 0.249,
      "max": 0.587,
      "median": 0.497,
      "mean": 0.491,
      "sd": 0.039
    },
    "2025-04-03": {
      "min": 0.208,
      "max": 0.625,
      "median": 0.531,
      "mean": 0.522,
      "sd": 0.045
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 27.08,
      "area_percentage": 1.0
    },
    "dominant_category": "medium vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.037,
        "area_percentage": 0.001
      },
      "low_vegetation": {
        "area_ha": 0.282,
        "area_percentage": 0.01
      },
      "medium vegetation": {
        "area_ha": 26.371,
        "area_percentage": 0.974
      },
      "high_vegetation": {
        "area_ha": 0.391,
        "area_percentage": 0.014
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
    "evi_median": 0.603,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.92,
          "percentage": 7.11
        },
        "EVI_statistics": {
          "mean": 0.457,
          "median": 0.48,
          "min": 0.257,
          "max": 0.512
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.99,
          "percentage": 14.72
        },
        "EVI_statistics": {
          "mean": 0.548,
          "median": 0.552,
          "min": 0.512,
          "max": 0.572
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 18.58,
          "percentage": 68.61
        },
        "EVI_statistics": {
          "mean": 0.606,
          "median": 0.607,
          "min": 0.572,
          "max": 0.633
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 2.59,
          "percentage": 9.57
        },
        "EVI_statistics": {
          "mean": 0.642,
          "median": 0.64,
          "min": 0.633,
          "max": 0.682
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
            "ha": 1.2,
            "area_percentage": 4.56,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.53,
            "area_percentage": 20.99,
            "zone_number": 2
          },
          "similar": {
            "ha": 12.25,
            "area_percentage": 46.51,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 6.53,
            "area_percentage": 24.79,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.83,
            "area_percentage": 3.15,
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
      "old_value": 0.497,
      "new_value": 0.603,
      "difference": 0.1
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
          "ha": 2.72,
          "percentage": 10.06,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 24.33,
          "percentage": 89.83,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.03,
          "percentage": 0.12,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 1.69,
          "percentage": 6.22,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.77,
          "percentage": 13.92,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 16.27,
          "percentage": 60.09,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.58,
          "percentage": 13.21,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.77,
          "percentage": 6.55,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 803.516,
      "historical_average": 821.299
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
          "temperature_mean": 9.097,
          "temperature_min": 3.815,
          "temperature_max": 14.606,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.378,
          "soiltemperature_0to10cm_mean": 8.118,
          "soilmoisture_0to10cm": 0.325,
          "windspeed_mean": 4.444
        },
        {
          "time": "2025-04-12 00:00:00",
          "temperature_mean": 10.926,
          "temperature_min": 6.859,
          "temperature_max": 15.259,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.289,
          "soiltemperature_0to10cm_mean": 10.416,
          "soilmoisture_0to10cm": 0.318,
          "windspeed_mean": 1.172
        },
        {
          "time": "2025-04-13 00:00:00",
          "temperature_mean": 10.984,
          "temperature_min": 5.949,
          "temperature_max": 15.528,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.684,
          "soiltemperature_0to10cm_mean": 10.318,
          "soilmoisture_0to10cm": 0.313,
          "windspeed_mean": 2.13
        },
        {
          "time": "2025-04-14 00:00:00",
          "temperature_mean": 13.431,
          "temperature_min": 8.588,
          "temperature_max": 18.204,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.693,
          "soiltemperature_0to10cm_mean": 11.484,
          "soilmoisture_0to10cm": 0.31,
          "windspeed_mean": 2.016
        },
        {
          "time": "2025-04-15 00:00:00",
          "temperature_mean": 12.232,
          "temperature_min": 10.363,
          "temperature_max": 15.697,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.874,
          "soiltemperature_0to10cm_mean": 11.492,
          "soilmoisture_0to10cm": 0.324,
          "windspeed_mean": 4.339
        },
        {
          "time": "2025-04-16 00:00:00",
          "temperature_mean": 15.426,
          "temperature_min": 8.978,
          "temperature_max": 21.852,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.537,
          "soiltemperature_0to10cm_mean": 13.693,
          "soilmoisture_0to10cm": 0.332,
          "windspeed_mean": 3.668
        },
        {
          "time": "2025-04-17 00:00:00",
          "temperature_mean": 16.46,
          "temperature_min": 11.843,
          "temperature_max": 21.236,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.735,
          "soiltemperature_0to10cm_mean": 14.824,
          "soilmoisture_0to10cm": 0.316,
          "windspeed_mean": 5.215
        },
        {
          "time": "2025-04-18 00:00:00",
          "temperature_mean": 10.763,
          "temperature_min": 6.59,
          "temperature_max": 13.602,
          "precipitation_sum": 9.0,
          "totalcloudcover_mean": 0.937,
          "soiltemperature_0to10cm_mean": 11.942,
          "soilmoisture_0to10cm": 0.353,
          "windspeed_mean": 1.126
        },
        {
          "time": "2025-04-19 00:00:00",
          "temperature_mean": 10.051,
          "temperature_min": 3.632,
          "temperature_max": 15.047,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.415,
          "soiltemperature_0to10cm_mean": 10.235,
          "soilmoisture_0to10cm": 0.359,
          "windspeed_mean": 1.945
        },
        {
          "time": "2025-04-20 00:00:00",
          "temperature_mean": 12.323,
          "temperature_min": 6.64,
          "temperature_max": 18.225,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.432,
          "soiltemperature_0to10cm_mean": 12.011,
          "soilmoisture_0to10cm": 0.34,
          "windspeed_mean": 2.112
        },
        {
          "time": "2025-04-21 00:00:00",
          "temperature_mean": 13.867,
          "temperature_min": 7.578,
          "temperature_max": 19.942,
          "precipitation_sum": 10.0,
          "totalcloudcover_mean": 0.884,
          "soiltemperature_0to10cm_mean": 12.963,
          "soilmoisture_0to10cm": 0.335,
          "windspeed_mean": 0.651
        },
        {
          "time": "2025-04-22 00:00:00",
          "temperature_mean": 13.478,
          "temperature_min": 8.383,
          "temperature_max": 18.335,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.385,
          "soiltemperature_0to10cm_mean": 13.496,
          "soilmoisture_0to10cm": 0.381,
          "windspeed_mean": 2.181
        },
        {
          "time": "2025-04-23 00:00:00",
          "temperature_mean": 14.284,
          "temperature_min": 9.367,
          "temperature_max": 18.877,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.788,
          "soiltemperature_0to10cm_mean": 13.668,
          "soilmoisture_0to10cm": 0.361,
          "windspeed_mean": 1.253
        },
        {
          "time": "2025-04-24 00:00:00",
          "temperature_mean": 12.841,
          "temperature_min": 9.232,
          "temperature_max": 15.561,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.946,
          "soiltemperature_0to10cm_mean": 12.948,
          "soilmoisture_0to10cm": 0.371,
          "windspeed_mean": 1.93
        },
        {
          "time": "2025-04-25 00:00:00",
          "temperature_mean": 8.907,
          "temperature_min": 6.989,
          "temperature_max": 10.227,
          "precipitation_sum": 17.0,
          "totalcloudcover_mean": 1.0,
          "soiltemperature_0to10cm_mean": 10.171,
          "soilmoisture_0to10cm": 0.41,
          "windspeed_mean": 2.825
        },
        {
          "time": "2025-04-26 00:00:00",
          "temperature_mean": 10.091,
          "temperature_min": 6.284,
          "temperature_max": 14.754,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.428,
          "soiltemperature_0to10cm_mean": 10.804,
          "soilmoisture_0to10cm": 0.394,
          "windspeed_mean": 3.442
        },
        {
          "time": "2025-04-27 00:00:00",
          "temperature_mean": 9.247,
          "temperature_min": 3.727,
          "temperature_max": 14.364,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.002,
          "soiltemperature_0to10cm_mean": 10.275,
          "soilmoisture_0to10cm": 0.372,
          "windspeed_mean": 2.731
        },
        {
          "time": "2025-04-28 00:00:00",
          "temperature_mean": 11.955,
          "temperature_min": 4.262,
          "temperature_max": 18.088,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.055,
          "soiltemperature_0to10cm_mean": 11.681,
          "soilmoisture_0to10cm": 0.359,
          "windspeed_mean": 2.086
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
      "date": "2024-10-10",
      "day_since": 186
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-16",
      "day_since": -2
    },
    "beginning_of_heading": {
      "date": "2025-05-23",
      "day_since": -39
    },
    "beginning_of_ripenes": {
      "date": "2025-07-06",
      "day_since": -83
    },
    "harvest": {
      "date": "2025-07-25",
      "day_since": -102
    }
  },
  "timing_of_field_operations": {
    "2025-04-11": {
      "weather_conditions": {
        "temperature_mean": 9.097,
        "temperature_min": 3.815,
        "temperature_max": 14.606,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.378,
        "soiltemperature_0to10cm_mean": 8.118,
        "soilmoisture_0to10cm": 0.325,
        "windspeed_mean": 4.444
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
        "temperature_mean": 10.926,
        "temperature_min": 6.859,
        "temperature_max": 15.259,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.289,
        "soiltemperature_0to10cm_mean": 10.416,
        "soilmoisture_0to10cm": 0.318,
        "windspeed_mean": 1.172
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
        "temperature_mean": 10.984,
        "temperature_min": 5.949,
        "temperature_max": 15.528,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.684,
        "soiltemperature_0to10cm_mean": 10.318,
        "soilmoisture_0to10cm": 0.313,
        "windspeed_mean": 2.13
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
        "temperature_mean": 13.431,
        "temperature_min": 8.588,
        "temperature_max": 18.204,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.693,
        "soiltemperature_0to10cm_mean": 11.484,
        "soilmoisture_0to10cm": 0.31,
        "windspeed_mean": 2.016
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
        "temperature_mean": 12.232,
        "temperature_min": 10.363,
        "temperature_max": 15.697,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.874,
        "soiltemperature_0to10cm_mean": 11.492,
        "soilmoisture_0to10cm": 0.324,
        "windspeed_mean": 4.339
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
        "temperature_mean": 15.426,
        "temperature_min": 8.978,
        "temperature_max": 21.852,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.537,
        "soiltemperature_0to10cm_mean": 13.693,
        "soilmoisture_0to10cm": 0.332,
        "windspeed_mean": 3.668
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
        "temperature_mean": 16.46,
        "temperature_min": 11.843,
        "temperature_max": 21.236,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.735,
        "soiltemperature_0to10cm_mean": 14.824,
        "soilmoisture_0to10cm": 0.316,
        "windspeed_mean": 5.215
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
        "temperature_mean": 10.763,
        "temperature_min": 6.59,
        "temperature_max": 13.602,
        "precipitation_sum": 9.0,
        "totalcloudcover_mean": 0.937,
        "soiltemperature_0to10cm_mean": 11.942,
        "soilmoisture_0to10cm": 0.353,
        "windspeed_mean": 1.126
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
        "temperature_mean": 10.051,
        "temperature_min": 3.632,
        "temperature_max": 15.047,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.415,
        "soiltemperature_0to10cm_mean": 10.235,
        "soilmoisture_0to10cm": 0.359,
        "windspeed_mean": 1.945
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
        "temperature_mean": 12.323,
        "temperature_min": 6.64,
        "temperature_max": 18.225,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.432,
        "soiltemperature_0to10cm_mean": 12.011,
        "soilmoisture_0to10cm": 0.34,
        "windspeed_mean": 2.112
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
        "temperature_mean": 13.867,
        "temperature_min": 7.578,
        "temperature_max": 19.942,
        "precipitation_sum": 10.0,
        "totalcloudcover_mean": 0.884,
        "soiltemperature_0to10cm_mean": 12.963,
        "soilmoisture_0to10cm": 0.335,
        "windspeed_mean": 0.651
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
    "2025-04-22": {
      "weather_conditions": {
        "temperature_mean": 13.478,
        "temperature_min": 8.383,
        "temperature_max": 18.335,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.385,
        "soiltemperature_0to10cm_mean": 13.496,
        "soilmoisture_0to10cm": 0.381,
        "windspeed_mean": 2.181
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
        "temperature_mean": 14.284,
        "temperature_min": 9.367,
        "temperature_max": 18.877,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.788,
        "soiltemperature_0to10cm_mean": 13.668,
        "soilmoisture_0to10cm": 0.361,
        "windspeed_mean": 1.253
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
        "temperature_mean": 12.841,
        "temperature_min": 9.232,
        "temperature_max": 15.561,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.946,
        "soiltemperature_0to10cm_mean": 12.948,
        "soilmoisture_0to10cm": 0.371,
        "windspeed_mean": 1.93
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
        "temperature_mean": 8.907,
        "temperature_min": 6.989,
        "temperature_max": 10.227,
        "precipitation_sum": 17.0,
        "totalcloudcover_mean": 1.0,
        "soiltemperature_0to10cm_mean": 10.171,
        "soilmoisture_0to10cm": 0.41,
        "windspeed_mean": 2.825
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
        "temperature_mean": 10.091,
        "temperature_min": 6.284,
        "temperature_max": 14.754,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.428,
        "soiltemperature_0to10cm_mean": 10.804,
        "soilmoisture_0to10cm": 0.394,
        "windspeed_mean": 3.442
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
        "temperature_mean": 9.247,
        "temperature_min": 3.727,
        "temperature_max": 14.364,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.002,
        "soiltemperature_0to10cm_mean": 10.275,
        "soilmoisture_0to10cm": 0.372,
        "windspeed_mean": 2.731
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
        "temperature_mean": 11.955,
        "temperature_min": 4.262,
        "temperature_max": 18.088,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.055,
        "soiltemperature_0to10cm_mean": 11.681,
        "soilmoisture_0to10cm": 0.359,
        "windspeed_mean": 2.086
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
  "polygon_wkt": "POLYGON ((15.7168 49.106, 15.7168 49.106, 15.7274 49.0996, 15.7263 49.0996, 15.7257 49.0996, 15.7248 49.0997, 15.7239 49.0997, 15.723 49.0997, 15.7229 49.0997, 15.7228 49.0997, 15.7224 49.0996, 15.7221 49.0995, 15.7219 49.0994, 15.7217 49.0993, 15.7142 49.1038, 15.7142 49.1038, 15.7142 49.1039, 15.7143 49.1039, 15.7145 49.104, 15.7145 49.104, 15.7145 49.104, 15.7146 49.1041, 15.715 49.1048, 15.7156 49.1055, 15.7156 49.1055, 15.7157 49.1055, 15.7157 49.1055, 15.7158 49.1055, 15.7164 49.1054, 15.7165 49.1054, 15.7165 49.1054, 15.7168 49.1059, 15.7168 49.106))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
