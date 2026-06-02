// Field data for LAM250415 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAM250415",
  "metadata": {
    "field_area_ha": 25.86,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Martínkov"
    },
    "terrain": {
      "variability": 16.08,
      "mean_elevation": 561.69,
      "min_elevation": 551.732,
      "max_elevation": 567.812
    },
    "soil": {
      "bulk_density kg/dm³": 1.323,
      "cation_exchange_capacity cmol(c)/kg": 18.977,
      "clay_particles g/100g (%)": 19.261,
      "sand particles g/100g (%)": 32.839,
      "silt particles g/100g (%)": 47.899,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-02-24": {
      "min": 0.166,
      "max": 0.395,
      "median": 0.277,
      "mean": 0.276,
      "sd": 0.022
    },
    "2025-03-05": {
      "min": 0.256,
      "max": 0.442,
      "median": 0.345,
      "mean": 0.344,
      "sd": 0.019
    },
    "2025-03-17": {
      "min": 0.233,
      "max": 0.552,
      "median": 0.412,
      "mean": 0.413,
      "sd": 0.035
    },
    "2025-03-21": {
      "min": 0.221,
      "max": 0.526,
      "median": 0.392,
      "mean": 0.391,
      "sd": 0.034
    },
    "2025-03-28": {
      "min": 0.224,
      "max": 0.618,
      "median": 0.497,
      "mean": 0.495,
      "sd": 0.04
    },
    "2025-04-03": {
      "min": 0.214,
      "max": 0.647,
      "median": 0.543,
      "mean": 0.535,
      "sd": 0.045
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 25.755,
      "area_percentage": 1.0
    },
    "dominant_category": "medium vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.126,
        "area_percentage": 0.005
      },
      "low_vegetation": {
        "area_ha": 0.369,
        "area_percentage": 0.014
      },
      "medium vegetation": {
        "area_ha": 24.968,
        "area_percentage": 0.969
      },
      "high_vegetation": {
        "area_ha": 0.292,
        "area_percentage": 0.011
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
          "ha": 1.39,
          "percentage": 5.41
        },
        "EVI_statistics": {
          "mean": 0.422,
          "median": 0.444,
          "min": 0.242,
          "max": 0.513
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.93,
          "percentage": 15.27
        },
        "EVI_statistics": {
          "mean": 0.554,
          "median": 0.559,
          "min": 0.513,
          "max": 0.573
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 18.1,
          "percentage": 70.27
        },
        "EVI_statistics": {
          "mean": 0.606,
          "median": 0.607,
          "min": 0.573,
          "max": 0.633
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 2.33,
          "percentage": 9.05
        },
        "EVI_statistics": {
          "mean": 0.642,
          "median": 0.639,
          "min": 0.633,
          "max": 0.693
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
            "ha": 2.19,
            "area_percentage": 8.66,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.98,
            "area_percentage": 23.65,
            "zone_number": 2
          },
          "similar": {
            "ha": 8.76,
            "area_percentage": 34.64,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 5.48,
            "area_percentage": 21.67,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 2.88,
            "area_percentage": 11.39,
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
      "difference": 0.101
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
          "ha": 5.12,
          "percentage": 19.87,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 20.54,
          "percentage": 79.76,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.09,
          "percentage": 0.37,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 3.27,
          "percentage": 12.7,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.22,
          "percentage": 12.49,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 12.12,
          "percentage": 47.08,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.3,
          "percentage": 16.7,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.84,
          "percentage": 11.03,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.72143550614679 49.09418463259036)",
          "new_value": 0.59,
          "old_value": 0.527,
          "value_difference": 0.063,
          "area_ha": 1.436,
          "category": "major_decline",
          "location": "S",
          "id": 1
        },
        {
          "geometry": "POINT (15.719857850733945 49.093463293433736)",
          "new_value": 0.6,
          "old_value": 0.538,
          "value_difference": 0.062,
          "area_ha": 0.319,
          "category": "major_decline",
          "location": "SW",
          "id": 2
        },
        {
          "geometry": "POINT (15.722971644311928 49.097631030783134)",
          "new_value": 0.631,
          "old_value": 0.495,
          "value_difference": 0.136,
          "area_ha": 0.395,
          "category": "major_growth",
          "location": "N",
          "id": 3
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
  "polygon_wkt": "POLYGON ((15.71932294 49.09325389, 15.71900233 49.09334561, 15.71868234 49.09344192, 15.71849606 49.09351188, 15.71832131 49.09358793, 15.71785453 49.09378752, 15.71750276 49.09394942, 15.7173784 49.09403277, 15.71734162 49.09412187, 15.71731855 49.09417213, 15.71731068 49.09422242, 15.71730454 49.09426923, 15.71730871 49.09431971, 15.71735937 49.0944194, 15.71740886 49.09447409, 15.71758586 49.09462673, 15.7176143 49.09466412, 15.71769275 49.09498932, 15.71772879 49.0951711, 15.71772769 49.095281, 15.71769733 49.09546971, 15.71769823 49.09555196, 15.7177176 49.09563796, 15.71778768 49.09580375, 15.71789231 49.09597236, 15.71796688 49.09620767, 15.71799942 49.09630686, 15.71802981 49.09646504, 15.71803666 49.09658048, 15.71802038 49.09668257, 15.71794971 49.09678241, 15.71794959 49.09681561, 15.71795127 49.09684439, 15.71798282 49.09689961, 15.7187124 49.09734174, 15.71957696 49.09787039, 15.71992492 49.09815503, 15.72054878 49.098696, 15.72066397 49.09876757, 15.72073098 49.09880093, 15.72083007 49.09885493, 15.72145156 49.09912218, 15.72218576 49.09942186, 15.72237443 49.09948382, 15.72254048 49.09951864, 15.72266737 49.09954132, 15.72278975 49.09955096, 15.7229738 49.09956275, 15.72325836 49.09956796, 15.72468353 49.09952296, 15.7263553 49.09948289, 15.72087814 49.09291561, 15.72018542 49.09300823, 15.71993725 49.09306955, 15.71973228 49.09316479, 15.71932294 49.09325389), (15.71887806 49.09597622, 15.71899102 49.09588058, 15.71917374 49.09582634, 15.71935681 49.09581982, 15.71943874 49.0958442, 15.71946402 49.09588144, 15.71946819 49.09591851, 15.7194339 49.09594533, 15.71930607 49.09599796, 15.7190597 49.09607709, 15.71896412 49.09610243, 15.7189019 49.09609456, 15.71886587 49.0960678, 15.71885278 49.0960399, 15.71887806 49.09597622))"
};
