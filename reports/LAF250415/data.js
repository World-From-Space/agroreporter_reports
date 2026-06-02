// Field data for LAF250415 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAF250415",
  "metadata": {
    "field_area_ha": 32.954,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Martínkov"
    },
    "terrain": {
      "variability": 42.142,
      "mean_elevation": 572.298,
      "min_elevation": 553.388,
      "max_elevation": 595.529
    },
    "soil": {
      "bulk_density kg/dm³": 1.319,
      "cation_exchange_capacity cmol(c)/kg": 19.919,
      "clay_particles g/100g (%)": 21.412,
      "sand particles g/100g (%)": 33.512,
      "silt particles g/100g (%)": 45.076,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-02-11": {
      "min": 0.197,
      "max": 0.432,
      "median": 0.345,
      "mean": 0.342,
      "sd": 0.027
    },
    "2025-03-05": {
      "min": 0.239,
      "max": 0.425,
      "median": 0.356,
      "mean": 0.352,
      "sd": 0.026
    },
    "2025-03-09": {
      "min": 0.172,
      "max": 0.412,
      "median": 0.318,
      "mean": 0.315,
      "sd": 0.032
    },
    "2025-03-18": {
      "min": 0.278,
      "max": 0.515,
      "median": 0.42,
      "mean": 0.417,
      "sd": 0.033
    },
    "2025-03-28": {
      "min": 0.272,
      "max": 0.565,
      "median": 0.468,
      "mean": 0.463,
      "sd": 0.045
    },
    "2025-04-03": {
      "min": 0.258,
      "max": 0.604,
      "median": 0.505,
      "mean": 0.497,
      "sd": 0.049
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 32.938,
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
        "area_ha": 0.298,
        "area_percentage": 0.009
      },
      "medium vegetation": {
        "area_ha": 32.216,
        "area_percentage": 0.978
      },
      "high_vegetation": {
        "area_ha": 0.424,
        "area_percentage": 0.013
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
    "evi_median": 0.581,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 3.03,
          "percentage": 9.2
        },
        "EVI_statistics": {
          "mean": 0.447,
          "median": 0.453,
          "min": 0.324,
          "max": 0.493
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 5.02,
          "percentage": 15.25
        },
        "EVI_statistics": {
          "mean": 0.529,
          "median": 0.532,
          "min": 0.494,
          "max": 0.552
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 17.6,
          "percentage": 53.43
        },
        "EVI_statistics": {
          "mean": 0.582,
          "median": 0.582,
          "min": 0.552,
          "max": 0.61
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 7.26,
          "percentage": 22.04
        },
        "EVI_statistics": {
          "mean": 0.627,
          "median": 0.625,
          "min": 0.61,
          "max": 0.668
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.03,
          "percentage": 0.08
        },
        "EVI_statistics": {
          "mean": 0.672,
          "median": 0.671,
          "min": 0.668,
          "max": 0.688
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 1.3,
            "area_percentage": 4.02,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.97,
            "area_percentage": 18.45,
            "zone_number": 2
          },
          "similar": {
            "ha": 15.2,
            "area_percentage": 46.97,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 8.08,
            "area_percentage": 24.97,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.81,
            "area_percentage": 5.59,
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
      "old_value": 0.468,
      "new_value": 0.581,
      "difference": 0.11
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
          "ha": 2.08,
          "percentage": 6.33,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 30.37,
          "percentage": 92.19,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.49,
          "percentage": 1.48,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 1.07,
          "percentage": 3.26,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.16,
          "percentage": 12.63,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 22.34,
          "percentage": 67.82,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.38,
          "percentage": 13.3,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.98,
          "percentage": 2.99,
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
      "date": "2024-10-11",
      "day_since": 185
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
  "polygon_wkt": "POLYGON ((15.71496383 49.106646, 15.71451436 49.10681776, 15.71439073 49.10686896, 15.71438889 49.10688564, 15.71527273 49.10827269, 15.71527435 49.10827535, 15.71553638 49.1087313, 15.71586179 49.10923542, 15.71586186 49.10923552, 15.71612182 49.10963991, 15.71617681 49.10971191, 15.71664248 49.10941621, 15.71680635 49.1093266, 15.71832017 49.10831765, 15.72053305 49.10683436, 15.72179957 49.10600308, 15.72216603 49.10576063, 15.72223483 49.10562387, 15.72245838 49.10550569, 15.72258062 49.10534278, 15.72288823 49.10528394, 15.72356846 49.10483354, 15.72443936 49.10426547, 15.7245063 49.10413495, 15.7247807 49.10404474, 15.72645848 49.10294219, 15.72829668 49.10173706, 15.72876077 49.10143142, 15.73005646 49.1005752, 15.73032131 49.10039462, 15.73048718 49.10026965, 15.73053055 49.10022099, 15.73045103 49.10017192, 15.73043584 49.10016465, 15.73043246 49.10016428, 15.73043274 49.10016316, 15.73032994 49.10011395, 15.72996969 49.10002017, 15.72996443 49.1000187, 15.72959259 49.09990856, 15.72931784 49.09984863, 15.72903009 49.09979746, 15.72859264 49.09973973, 15.72798963 49.09968783, 15.72768469 49.09967517, 15.72768254 49.09967507, 15.7274969 49.09966417, 15.7168956 49.1060182, 15.71662943 49.10613381, 15.71567904 49.10642617, 15.71496383 49.106646))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
