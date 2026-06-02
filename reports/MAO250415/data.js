// Field data for MAO250415 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAO250415",
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
    "2025-02-28": {
      "min": 0.154,
      "max": 0.305,
      "median": 0.197,
      "mean": 0.201,
      "sd": 0.021
    },
    "2025-03-09": {
      "min": 0.123,
      "max": 0.328,
      "median": 0.218,
      "mean": 0.222,
      "sd": 0.021
    },
    "2025-03-18": {
      "min": 0.234,
      "max": 0.383,
      "median": 0.288,
      "mean": 0.291,
      "sd": 0.021
    },
    "2025-03-21": {
      "min": 0.169,
      "max": 0.326,
      "median": 0.219,
      "mean": 0.223,
      "sd": 0.023
    },
    "2025-04-03": {
      "min": 0.246,
      "max": 0.517,
      "median": 0.342,
      "mean": 0.346,
      "sd": 0.038
    },
    "2025-04-09": {
      "min": 0.274,
      "max": 0.52,
      "median": 0.383,
      "mean": 0.386,
      "sd": 0.035
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
        "area_ha": 0.98,
        "area_percentage": 0.336
      },
      "medium vegetation": {
        "area_ha": 1.935,
        "area_percentage": 0.664
      },
      "high_vegetation": {
        "area_ha": 0.0,
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
    "evi_median": 0.414,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.05,
          "percentage": 1.67
        },
        "EVI_statistics": {
          "mean": 0.339,
          "median": 0.341,
          "min": 0.314,
          "max": 0.352
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.71,
          "percentage": 24.3
        },
        "EVI_statistics": {
          "mean": 0.381,
          "median": 0.383,
          "min": 0.352,
          "max": 0.394
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 1.39,
          "percentage": 47.58
        },
        "EVI_statistics": {
          "mean": 0.414,
          "median": 0.414,
          "min": 0.394,
          "max": 0.435
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.66,
          "percentage": 22.78
        },
        "EVI_statistics": {
          "mean": 0.45,
          "median": 0.447,
          "min": 0.435,
          "max": 0.476
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.11,
          "percentage": 3.67
        },
        "EVI_statistics": {
          "mean": 0.501,
          "median": 0.498,
          "min": 0.476,
          "max": 0.551
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.39,
            "area_percentage": 14.13,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.59,
            "area_percentage": 21.38,
            "zone_number": 2
          },
          "similar": {
            "ha": 0.82,
            "area_percentage": 29.71,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.42,
            "area_percentage": 15.22,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.54,
            "area_percentage": 19.57,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-04-15",
      "reference_image_date": "2025-03-21",
      "change_period": 25
    },
    "median_EVI_change": {
      "old_value": 0.219,
      "new_value": 0.414,
      "difference": 0.194
    },
    "growth trend": "major_growth",
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
          "ha": 0.0,
          "percentage": 0.0,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.15,
          "percentage": 5.31,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 2.76,
          "percentage": 94.69,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 0.39,
          "percentage": 13.37,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.39,
          "percentage": 13.34,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 1.2,
          "percentage": 41.31,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.58,
          "percentage": 19.88,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.35,
          "percentage": 12.1,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.253355993109757 49.124686335753424)",
          "new_value": 0.388,
          "old_value": 0.231,
          "value_difference": 0.157,
          "area_ha": 0.034,
          "category": "major_decline",
          "location": "N",
          "id": 1
        },
        {
          "geometry": "POINT (16.255063958109755 49.124580017945206)",
          "new_value": 0.39,
          "old_value": 0.244,
          "value_difference": 0.146,
          "area_ha": 0.074,
          "category": "major_decline",
          "location": "NE",
          "id": 2
        },
        {
          "geometry": "POINT (16.251939631890245 49.123197886438355)",
          "new_value": 0.371,
          "old_value": 0.231,
          "value_difference": 0.14,
          "area_ha": 0.093,
          "category": "major_decline",
          "location": "SW",
          "id": 3
        },
        {
          "geometry": "POINT (16.254105831402438 49.12436738232877)",
          "new_value": 0.431,
          "old_value": 0.208,
          "value_difference": 0.223,
          "area_ha": 0.079,
          "category": "major_growth",
          "location": "NE",
          "id": 4
        },
        {
          "geometry": "POINT (16.253022731646343 49.123835793287675)",
          "new_value": 0.421,
          "old_value": 0.202,
          "value_difference": 0.219,
          "area_ha": 0.045,
          "category": "major_growth",
          "location": "C",
          "id": 5
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 742.19,
      "historical_average": 760.405
    },
    "accumulated_precipitation_since_seeding": {
      "current": 143.965,
      "historical_mean": 230.866
    },
    "precipitation_summary": {
      "last_3_days": 3.292,
      "last_7_days": 4.244,
      "last_14_days": 4.803,
      "last_30_days": 29.715
    },
    "standardized_precipitation_index": {
      "1_month": -0.538,
      "3_month": -1.278,
      "6_month": -2.133
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-04-11 00:00:00",
          "temperature_mean": 9.775,
          "temperature_min": 4.211,
          "temperature_max": 15.061,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.386,
          "soiltemperature_0to10cm_mean": 8.978,
          "soilmoisture_0to10cm": 0.317,
          "windspeed_mean": 4.248
        },
        {
          "time": "2025-04-12 00:00:00",
          "temperature_mean": 11.258,
          "temperature_min": 7.444,
          "temperature_max": 15.122,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.349,
          "soiltemperature_0to10cm_mean": 10.847,
          "soilmoisture_0to10cm": 0.311,
          "windspeed_mean": 1.059
        },
        {
          "time": "2025-04-13 00:00:00",
          "temperature_mean": 11.933,
          "temperature_min": 7.448,
          "temperature_max": 16.282,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.726,
          "soiltemperature_0to10cm_mean": 11.029,
          "soilmoisture_0to10cm": 0.307,
          "windspeed_mean": 2.2
        },
        {
          "time": "2025-04-14 00:00:00",
          "temperature_mean": 13.249,
          "temperature_min": 6.169,
          "temperature_max": 19.015,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.69,
          "soiltemperature_0to10cm_mean": 12.307,
          "soilmoisture_0to10cm": 0.303,
          "windspeed_mean": 1.906
        },
        {
          "time": "2025-04-15 00:00:00",
          "temperature_mean": 12.843,
          "temperature_min": 10.835,
          "temperature_max": 15.742,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.863,
          "soiltemperature_0to10cm_mean": 12.021,
          "soilmoisture_0to10cm": 0.313,
          "windspeed_mean": 4.773
        },
        {
          "time": "2025-04-16 00:00:00",
          "temperature_mean": 16.436,
          "temperature_min": 10.527,
          "temperature_max": 22.434,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.312,
          "soiltemperature_0to10cm_mean": 14.627,
          "soilmoisture_0to10cm": 0.323,
          "windspeed_mean": 4.004
        },
        {
          "time": "2025-04-17 00:00:00",
          "temperature_mean": 17.642,
          "temperature_min": 13.331,
          "temperature_max": 23.082,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.731,
          "soiltemperature_0to10cm_mean": 15.863,
          "soilmoisture_0to10cm": 0.308,
          "windspeed_mean": 5.046
        },
        {
          "time": "2025-04-18 00:00:00",
          "temperature_mean": 12.67,
          "temperature_min": 8.546,
          "temperature_max": 15.059,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.966,
          "soiltemperature_0to10cm_mean": 13.477,
          "soilmoisture_0to10cm": 0.324,
          "windspeed_mean": 1.24
        },
        {
          "time": "2025-04-19 00:00:00",
          "temperature_mean": 11.182,
          "temperature_min": 4.752,
          "temperature_max": 16.006,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.439,
          "soiltemperature_0to10cm_mean": 11.479,
          "soilmoisture_0to10cm": 0.334,
          "windspeed_mean": 1.987
        },
        {
          "time": "2025-04-20 00:00:00",
          "temperature_mean": 13.228,
          "temperature_min": 7.894,
          "temperature_max": 19.401,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.533,
          "soiltemperature_0to10cm_mean": 12.995,
          "soilmoisture_0to10cm": 0.319,
          "windspeed_mean": 2.009
        },
        {
          "time": "2025-04-21 00:00:00",
          "temperature_mean": 14.549,
          "temperature_min": 6.234,
          "temperature_max": 20.69,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.926,
          "soiltemperature_0to10cm_mean": 13.981,
          "soilmoisture_0to10cm": 0.31,
          "windspeed_mean": 0.257
        },
        {
          "time": "2025-04-22 00:00:00",
          "temperature_mean": 15.041,
          "temperature_min": 10.133,
          "temperature_max": 19.962,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.403,
          "soiltemperature_0to10cm_mean": 14.92,
          "soilmoisture_0to10cm": 0.365,
          "windspeed_mean": 2.299
        },
        {
          "time": "2025-04-23 00:00:00",
          "temperature_mean": 15.857,
          "temperature_min": 11.068,
          "temperature_max": 20.631,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.781,
          "soiltemperature_0to10cm_mean": 15.292,
          "soilmoisture_0to10cm": 0.338,
          "windspeed_mean": 1.597
        },
        {
          "time": "2025-04-24 00:00:00",
          "temperature_mean": 14.341,
          "temperature_min": 11.05,
          "temperature_max": 17.659,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.954,
          "soiltemperature_0to10cm_mean": 14.723,
          "soilmoisture_0to10cm": 0.339,
          "windspeed_mean": 1.824
        },
        {
          "time": "2025-04-25 00:00:00",
          "temperature_mean": 10.567,
          "temperature_min": 8.548,
          "temperature_max": 11.64,
          "precipitation_sum": 16.0,
          "totalcloudcover_mean": 0.999,
          "soiltemperature_0to10cm_mean": 11.652,
          "soilmoisture_0to10cm": 0.394,
          "windspeed_mean": 3.261
        },
        {
          "time": "2025-04-26 00:00:00",
          "temperature_mean": 11.101,
          "temperature_min": 7.452,
          "temperature_max": 15.293,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.354,
          "soiltemperature_0to10cm_mean": 11.981,
          "soilmoisture_0to10cm": 0.371,
          "windspeed_mean": 4.451
        },
        {
          "time": "2025-04-27 00:00:00",
          "temperature_mean": 10.225,
          "temperature_min": 4.909,
          "temperature_max": 15.319,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.001,
          "soiltemperature_0to10cm_mean": 11.363,
          "soilmoisture_0to10cm": 0.35,
          "windspeed_mean": 2.927
        },
        {
          "time": "2025-04-28 00:00:00",
          "temperature_mean": 12.768,
          "temperature_min": 5.721,
          "temperature_max": 18.836,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.018,
          "soiltemperature_0to10cm_mean": 12.604,
          "soilmoisture_0to10cm": 0.336,
          "windspeed_mean": 1.772
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-10-14",
      "day_since": 183
    },
    "crop_emergence": {
      "date": "2024-10-24",
      "day_since": 172
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-21",
      "day_since": -7
    },
    "beginning_of_heading": {
      "date": "2025-05-30",
      "day_since": -46
    },
    "beginning_of_ripenes": {
      "date": "2025-07-14",
      "day_since": -91
    },
    "harvest": {
      "date": "2025-08-01",
      "day_since": -109
    }
  },
  "timing_of_field_operations": {
    "2025-04-11": {
      "weather_conditions": {
        "temperature_mean": 9.775,
        "temperature_min": 4.211,
        "temperature_max": 15.061,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.386,
        "soiltemperature_0to10cm_mean": 8.978,
        "soilmoisture_0to10cm": 0.317,
        "windspeed_mean": 4.248
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
          "light_rain_after": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.71
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
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
        "temperature_mean": 11.258,
        "temperature_min": 7.444,
        "temperature_max": 15.122,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.349,
        "soiltemperature_0to10cm_mean": 10.847,
        "soilmoisture_0to10cm": 0.311,
        "windspeed_mean": 1.059
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
          "light_rain_after": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.71
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
      }
    },
    "2025-04-13": {
      "weather_conditions": {
        "temperature_mean": 11.933,
        "temperature_min": 7.448,
        "temperature_max": 16.282,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.726,
        "soiltemperature_0to10cm_mean": 11.029,
        "soilmoisture_0to10cm": 0.307,
        "windspeed_mean": 2.2
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
          "light_rain_after": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.71
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
      }
    },
    "2025-04-14": {
      "weather_conditions": {
        "temperature_mean": 13.249,
        "temperature_min": 6.169,
        "temperature_max": 19.015,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.69,
        "soiltemperature_0to10cm_mean": 12.307,
        "soilmoisture_0to10cm": 0.303,
        "windspeed_mean": 1.906
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
      }
    },
    "2025-04-15": {
      "weather_conditions": {
        "temperature_mean": 12.843,
        "temperature_min": 10.835,
        "temperature_max": 15.742,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.863,
        "soiltemperature_0to10cm_mean": 12.021,
        "soilmoisture_0to10cm": 0.313,
        "windspeed_mean": 4.773
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
      }
    },
    "2025-04-16": {
      "weather_conditions": {
        "temperature_mean": 16.436,
        "temperature_min": 10.527,
        "temperature_max": 22.434,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.312,
        "soiltemperature_0to10cm_mean": 14.627,
        "soilmoisture_0to10cm": 0.323,
        "windspeed_mean": 4.004
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
          "cloudy_weather": "bad"
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
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-04-17": {
      "weather_conditions": {
        "temperature_mean": 17.642,
        "temperature_min": 13.331,
        "temperature_max": 23.082,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.731,
        "soiltemperature_0to10cm_mean": 15.863,
        "soilmoisture_0to10cm": 0.308,
        "windspeed_mean": 5.046
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
      }
    },
    "2025-04-18": {
      "weather_conditions": {
        "temperature_mean": 12.67,
        "temperature_min": 8.546,
        "temperature_max": 15.059,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.966,
        "soiltemperature_0to10cm_mean": 13.477,
        "soilmoisture_0to10cm": 0.324,
        "windspeed_mean": 1.24
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
      }
    },
    "2025-04-19": {
      "weather_conditions": {
        "temperature_mean": 11.182,
        "temperature_min": 4.752,
        "temperature_max": 16.006,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.439,
        "soiltemperature_0to10cm_mean": 11.479,
        "soilmoisture_0to10cm": 0.334,
        "windspeed_mean": 1.987
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
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-04-20": {
      "weather_conditions": {
        "temperature_mean": 13.228,
        "temperature_min": 7.894,
        "temperature_max": 19.401,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.533,
        "soiltemperature_0to10cm_mean": 12.995,
        "soilmoisture_0to10cm": 0.319,
        "windspeed_mean": 2.009
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
      }
    },
    "2025-04-21": {
      "weather_conditions": {
        "temperature_mean": 14.549,
        "temperature_min": 6.234,
        "temperature_max": 20.69,
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.926,
        "soiltemperature_0to10cm_mean": 13.981,
        "soilmoisture_0to10cm": 0.31,
        "windspeed_mean": 0.257
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
          "cloudy_weather": "good"
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
      }
    },
    "2025-04-22": {
      "weather_conditions": {
        "temperature_mean": 15.041,
        "temperature_min": 10.133,
        "temperature_max": 19.962,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.403,
        "soiltemperature_0to10cm_mean": 14.92,
        "soilmoisture_0to10cm": 0.365,
        "windspeed_mean": 2.299
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
    "2025-04-23": {
      "weather_conditions": {
        "temperature_mean": 15.857,
        "temperature_min": 11.068,
        "temperature_max": 20.631,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.781,
        "soiltemperature_0to10cm_mean": 15.292,
        "soilmoisture_0to10cm": 0.338,
        "windspeed_mean": 1.597
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
    "2025-04-24": {
      "weather_conditions": {
        "temperature_mean": 14.341,
        "temperature_min": 11.05,
        "temperature_max": 17.659,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.954,
        "soiltemperature_0to10cm_mean": 14.723,
        "soilmoisture_0to10cm": 0.339,
        "windspeed_mean": 1.824
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
    "2025-04-25": {
      "weather_conditions": {
        "temperature_mean": 10.567,
        "temperature_min": 8.548,
        "temperature_max": 11.64,
        "precipitation_sum": 16.0,
        "totalcloudcover_mean": 0.999,
        "soiltemperature_0to10cm_mean": 11.652,
        "soilmoisture_0to10cm": 0.394,
        "windspeed_mean": 3.261
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
      }
    },
    "2025-04-26": {
      "weather_conditions": {
        "temperature_mean": 11.101,
        "temperature_min": 7.452,
        "temperature_max": 15.293,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.354,
        "soiltemperature_0to10cm_mean": 11.981,
        "soilmoisture_0to10cm": 0.371,
        "windspeed_mean": 4.451
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
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-04-27": {
      "weather_conditions": {
        "temperature_mean": 10.225,
        "temperature_min": 4.909,
        "temperature_max": 15.319,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.001,
        "soiltemperature_0to10cm_mean": 11.363,
        "soilmoisture_0to10cm": 0.35,
        "windspeed_mean": 2.927
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
      }
    },
    "2025-04-28": {
      "weather_conditions": {
        "temperature_mean": 12.768,
        "temperature_min": 5.721,
        "temperature_max": 18.836,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.018,
        "soiltemperature_0to10cm_mean": 12.604,
        "soilmoisture_0to10cm": 0.336,
        "windspeed_mean": 1.772
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
  "polygon_wkt": "POLYGON ((16.25515866 49.12463116, 16.25520976 49.12460948, 16.25516645 49.12453604, 16.25487654 49.12413878, 16.25466423 49.1238579, 16.25458819 49.12377082, 16.25445372 49.12368865, 16.25417761 49.12359128, 16.25403861 49.12355093, 16.2539411 49.12352414, 16.2537129 49.12345218, 16.25328919 49.12328325, 16.25301952 49.12320862, 16.25282453 49.12316035, 16.25263938 49.12313023, 16.25254564 49.12312017, 16.25242945 49.12311373, 16.25229137 49.12309049, 16.25202041 49.1230266, 16.25193587 49.12302512, 16.25184545 49.12303305, 16.25179383 49.12309819, 16.25181374 49.12317039, 16.25190702 49.1233329, 16.25204154 49.12355328, 16.25220056 49.12378786, 16.252366 49.12401406, 16.25258368 49.12431487, 16.25269216 49.12443607, 16.25282697 49.12454507, 16.25300264 49.12463588, 16.25321525 49.1247312, 16.25334329 49.12483263, 16.25348377 49.12493271, 16.25356234 49.12496542, 16.25360423 49.12496466, 16.25372117 49.12494938, 16.25389289 49.12491261, 16.25419603 49.1248329, 16.25515866 49.12463116))"
};
