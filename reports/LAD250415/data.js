// Field data for LAD250415 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAD250415",
  "metadata": {
    "field_area_ha": 21.833,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lesonice"
    },
    "terrain": {
      "variability": 20.132,
      "mean_elevation": 543.793,
      "min_elevation": 535.254,
      "max_elevation": 555.385
    },
    "soil": {
      "bulk_density kg/dm³": 1.332,
      "cation_exchange_capacity cmol(c)/kg": 20.964,
      "clay_particles g/100g (%)": 20.336,
      "sand particles g/100g (%)": 37.904,
      "silt particles g/100g (%)": 41.779,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-02-11": {
      "min": 0.148,
      "max": 0.46,
      "median": 0.33,
      "mean": 0.329,
      "sd": 0.037
    },
    "2025-02-24": {
      "min": 0.142,
      "max": 0.423,
      "median": 0.3,
      "mean": 0.292,
      "sd": 0.036
    },
    "2025-03-07": {
      "min": 0.22,
      "max": 0.435,
      "median": 0.347,
      "mean": 0.343,
      "sd": 0.023
    },
    "2025-03-17": {
      "min": 0.186,
      "max": 0.501,
      "median": 0.385,
      "mean": 0.378,
      "sd": 0.038
    },
    "2025-03-28": {
      "min": 0.229,
      "max": 0.576,
      "median": 0.484,
      "mean": 0.471,
      "sd": 0.049
    },
    "2025-04-03": {
      "min": 0.201,
      "max": 0.627,
      "median": 0.55,
      "mean": 0.53,
      "sd": 0.062
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 21.885,
      "area_percentage": 1.0
    },
    "dominant_category": "medium vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.141,
        "area_percentage": 0.006
      },
      "low_vegetation": {
        "area_ha": 0.553,
        "area_percentage": 0.025
      },
      "medium vegetation": {
        "area_ha": 17.443,
        "area_percentage": 0.797
      },
      "high_vegetation": {
        "area_ha": 3.748,
        "area_percentage": 0.171
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
    "evi_median": 0.628,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 2.62,
          "percentage": 11.98
        },
        "EVI_statistics": {
          "mean": 0.444,
          "median": 0.46,
          "min": 0.247,
          "max": 0.534
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.8,
          "percentage": 17.35
        },
        "EVI_statistics": {
          "mean": 0.574,
          "median": 0.577,
          "min": 0.534,
          "max": 0.597
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 13.98,
          "percentage": 63.9
        },
        "EVI_statistics": {
          "mean": 0.634,
          "median": 0.637,
          "min": 0.597,
          "max": 0.66
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 1.48,
          "percentage": 6.77
        },
        "EVI_statistics": {
          "mean": 0.667,
          "median": 0.666,
          "min": 0.66,
          "max": 0.695
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
            "ha": 1.41,
            "area_percentage": 6.59,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 4.22,
            "area_percentage": 19.71,
            "zone_number": 2
          },
          "similar": {
            "ha": 10.91,
            "area_percentage": 50.96,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 4.43,
            "area_percentage": 20.69,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.44,
            "area_percentage": 2.06,
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
      "old_value": 0.484,
      "new_value": 0.628,
      "difference": 0.139
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
          "ha": 1.14,
          "percentage": 5.22,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 14.44,
          "percentage": 65.98,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 6.3,
          "percentage": 28.8,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.741319097427185 49.09996320421875)",
          "new_value": 0.643,
          "old_value": 0.481,
          "value_difference": 0.162,
          "area_ha": 3.922,
          "category": "major_growth",
          "location": "NE",
          "id": 1
        },
        {
          "geometry": "POINT (15.736267030048545 49.09956266203125)",
          "new_value": 0.646,
          "old_value": 0.485,
          "value_difference": 0.161,
          "area_ha": 0.719,
          "category": "major_growth",
          "location": "W",
          "id": 2
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 1.73,
          "percentage": 7.9,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 2.73,
          "percentage": 12.46,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 12.74,
          "percentage": 58.22,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.17,
          "percentage": 14.48,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.52,
          "percentage": 6.95,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.73663972354369 49.09790708765625)",
          "new_value": 0.609,
          "old_value": 0.506,
          "value_difference": 0.103,
          "area_ha": 0.342,
          "category": "major_decline",
          "location": "S",
          "id": 1
        }
      ]
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
      "date": "2025-07-11",
      "day_since": -88
    },
    "harvest": {
      "date": "2025-07-30",
      "day_since": -107
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
  "polygon_wkt": "POLYGON ((15.73893923 49.1008205, 15.7389888 49.10080557, 15.73907601 49.10080764, 15.73915344 49.10082331, 15.73936013 49.10093062, 15.73953817 49.10099494, 15.7397719 49.10105406, 15.74034875 49.1011222, 15.74074889 49.1011578, 15.74099738 49.10118932, 15.74135921 49.10126276, 15.74139122 49.10126336, 15.74143393 49.10125329, 15.74148347 49.10123003, 15.74151788 49.10118545, 15.74154642 49.10112595, 15.74178514 49.10047057, 15.74196444 49.10007688, 15.74203389 49.09981731, 15.74206938 49.09958626, 15.7419995 49.09933344, 15.74204865 49.09908667, 15.74207664 49.09885307, 15.74210544 49.09835663, 15.7421266 49.09828445, 15.7419855 49.09802681, 15.74185833 49.09778858, 15.74170322 49.09754036, 15.74147939 49.0972587, 15.74115955 49.09694584, 15.74074863 49.09667313, 15.74045338 49.09650519, 15.74030602 49.09656023, 15.74019277 49.09657048, 15.73999272 49.09662484, 15.73965374 49.09673673, 15.73947672 49.09680894, 15.73943954 49.09683836, 15.73943126 49.09684429, 15.73935163 49.09689589, 15.73934779 49.09689827, 15.73926593 49.09694695, 15.73924573 49.0969567, 15.73922294 49.09696356, 15.73915187 49.09697946, 15.73915914 49.09698963, 15.73764492 49.09743268, 15.73765279 49.09738563, 15.73751539 49.0973861, 15.7372589 49.09744551, 15.73567961 49.09785022, 15.73566072 49.09785394, 15.73554086 49.09787087, 15.73552065 49.09787259, 15.73550028 49.09787211, 15.73541394 49.09786531, 15.73539351 49.09786254, 15.73531883 49.09784797, 15.73518663 49.09782553, 15.73502897 49.09771517, 15.73487199 49.09775554, 15.73473027 49.09785222, 15.73456322 49.09792774, 15.73439185 49.09796697, 15.73359606 49.09846922, 15.73637721 49.10126607, 15.73636683 49.101323, 15.73613625 49.10153639, 15.73619893 49.10156861, 15.73621504 49.10156029, 15.73625707 49.10156999, 15.73631819 49.10160834, 15.73637652 49.10163213, 15.73660945 49.10140507, 15.73694351 49.10108085, 15.73724436 49.10078889, 15.73753668 49.10050512, 15.73825971 49.10066769, 15.73893923 49.1008205))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
