// Field data for MAR250415 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAR250415",
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
    "2025-02-28": {
      "min": 0.169,
      "max": 0.3,
      "median": 0.202,
      "mean": 0.203,
      "sd": 0.012
    },
    "2025-03-09": {
      "min": 0.172,
      "max": 0.318,
      "median": 0.237,
      "mean": 0.237,
      "sd": 0.018
    },
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
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 6.404,
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
        "area_ha": 0.016,
        "area_percentage": 0.003
      },
      "medium vegetation": {
        "area_ha": 6.181,
        "area_percentage": 0.965
      },
      "high_vegetation": {
        "area_ha": 0.206,
        "area_percentage": 0.032
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
    "evi_median": 0.56,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.28,
          "percentage": 4.4
        },
        "EVI_statistics": {
          "mean": 0.446,
          "median": 0.452,
          "min": 0.364,
          "max": 0.476
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 1.11,
          "percentage": 17.27
        },
        "EVI_statistics": {
          "mean": 0.514,
          "median": 0.517,
          "min": 0.476,
          "max": 0.532
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 3.06,
          "percentage": 47.73
        },
        "EVI_statistics": {
          "mean": 0.558,
          "median": 0.556,
          "min": 0.532,
          "max": 0.588
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 1.71,
          "percentage": 26.69
        },
        "EVI_statistics": {
          "mean": 0.61,
          "median": 0.608,
          "min": 0.588,
          "max": 0.644
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.25,
          "percentage": 3.91
        },
        "EVI_statistics": {
          "mean": 0.665,
          "median": 0.663,
          "min": 0.644,
          "max": 0.713
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.3,
            "area_percentage": 4.77,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 1.62,
            "area_percentage": 25.76,
            "zone_number": 2
          },
          "similar": {
            "ha": 1.39,
            "area_percentage": 22.1,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.99,
            "area_percentage": 15.74,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.99,
            "area_percentage": 31.64,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-04-15",
      "reference_image_date": "2025-04-03",
      "change_period": 12
    },
    "median_EVI_change": {
      "old_value": 0.432,
      "new_value": 0.56,
      "difference": 0.127
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
          "ha": 0.36,
          "percentage": 5.65,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 5.06,
          "percentage": 79.09,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.98,
          "percentage": 15.26,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.20491979481928 49.11688097525424)",
          "new_value": 0.601,
          "old_value": 0.438,
          "value_difference": 0.163,
          "area_ha": 0.495,
          "category": "major_growth",
          "location": "C",
          "id": 1
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 0.43,
          "percentage": 6.75,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.88,
          "percentage": 13.82,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 3.67,
          "percentage": 57.39,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 1.06,
          "percentage": 16.56,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.35,
          "percentage": 5.5,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.20483486518072 49.11797791288136)",
          "new_value": 0.529,
          "old_value": 0.464,
          "value_difference": 0.065,
          "area_ha": 0.176,
          "category": "major_decline",
          "location": "N",
          "id": 1
        },
        {
          "geometry": "POINT (16.20517458373494 49.11677395694915)",
          "new_value": 0.567,
          "old_value": 0.401,
          "value_difference": 0.166,
          "area_ha": 0.08,
          "category": "major_growth",
          "location": "C",
          "id": 2
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 720.376,
      "historical_average": 742.761
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
          "temperature_mean": 9.685,
          "temperature_min": 4.246,
          "temperature_max": 14.989,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.386,
          "soiltemperature_0to10cm_mean": 8.839,
          "soilmoisture_0to10cm": 0.318,
          "windspeed_mean": 4.312
        },
        {
          "time": "2025-04-12 00:00:00",
          "temperature_mean": 11.183,
          "temperature_min": 7.354,
          "temperature_max": 15.079,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.349,
          "soiltemperature_0to10cm_mean": 10.762,
          "soilmoisture_0to10cm": 0.312,
          "windspeed_mean": 1.06
        },
        {
          "time": "2025-04-13 00:00:00",
          "temperature_mean": 11.799,
          "temperature_min": 7.177,
          "temperature_max": 16.053,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.726,
          "soiltemperature_0to10cm_mean": 10.849,
          "soilmoisture_0to10cm": 0.308,
          "windspeed_mean": 2.139
        },
        {
          "time": "2025-04-14 00:00:00",
          "temperature_mean": 13.235,
          "temperature_min": 6.398,
          "temperature_max": 18.839,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.69,
          "soiltemperature_0to10cm_mean": 12.126,
          "soilmoisture_0to10cm": 0.304,
          "windspeed_mean": 1.866
        },
        {
          "time": "2025-04-15 00:00:00",
          "temperature_mean": 12.703,
          "temperature_min": 10.771,
          "temperature_max": 15.699,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.863,
          "soiltemperature_0to10cm_mean": 11.873,
          "soilmoisture_0to10cm": 0.315,
          "windspeed_mean": 4.63
        },
        {
          "time": "2025-04-16 00:00:00",
          "temperature_mean": 16.242,
          "temperature_min": 10.324,
          "temperature_max": 22.335,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.312,
          "soiltemperature_0to10cm_mean": 14.433,
          "soilmoisture_0to10cm": 0.326,
          "windspeed_mean": 3.89
        },
        {
          "time": "2025-04-17 00:00:00",
          "temperature_mean": 17.407,
          "temperature_min": 13.028,
          "temperature_max": 22.765,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.731,
          "soiltemperature_0to10cm_mean": 15.635,
          "soilmoisture_0to10cm": 0.311,
          "windspeed_mean": 5.013
        },
        {
          "time": "2025-04-18 00:00:00",
          "temperature_mean": 12.35,
          "temperature_min": 8.19,
          "temperature_max": 14.942,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.966,
          "soiltemperature_0to10cm_mean": 13.198,
          "soilmoisture_0to10cm": 0.329,
          "windspeed_mean": 1.111
        },
        {
          "time": "2025-04-19 00:00:00",
          "temperature_mean": 10.945,
          "temperature_min": 4.592,
          "temperature_max": 15.844,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.439,
          "soiltemperature_0to10cm_mean": 11.215,
          "soilmoisture_0to10cm": 0.339,
          "windspeed_mean": 1.927
        },
        {
          "time": "2025-04-20 00:00:00",
          "temperature_mean": 12.963,
          "temperature_min": 7.615,
          "temperature_max": 19.157,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.533,
          "soiltemperature_0to10cm_mean": 12.751,
          "soilmoisture_0to10cm": 0.323,
          "windspeed_mean": 1.985
        },
        {
          "time": "2025-04-21 00:00:00",
          "temperature_mean": 14.361,
          "temperature_min": 6.163,
          "temperature_max": 20.576,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.926,
          "soiltemperature_0to10cm_mean": 13.753,
          "soilmoisture_0to10cm": 0.315,
          "windspeed_mean": 0.321
        },
        {
          "time": "2025-04-22 00:00:00",
          "temperature_mean": 14.791,
          "temperature_min": 9.809,
          "temperature_max": 19.71,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.403,
          "soiltemperature_0to10cm_mean": 14.659,
          "soilmoisture_0to10cm": 0.373,
          "windspeed_mean": 2.284
        },
        {
          "time": "2025-04-23 00:00:00",
          "temperature_mean": 15.641,
          "temperature_min": 10.933,
          "temperature_max": 20.34,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.781,
          "soiltemperature_0to10cm_mean": 15.027,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 1.507
        },
        {
          "time": "2025-04-24 00:00:00",
          "temperature_mean": 14.079,
          "temperature_min": 10.64,
          "temperature_max": 17.221,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.954,
          "soiltemperature_0to10cm_mean": 14.381,
          "soilmoisture_0to10cm": 0.346,
          "windspeed_mean": 1.847
        },
        {
          "time": "2025-04-25 00:00:00",
          "temperature_mean": 10.263,
          "temperature_min": 8.284,
          "temperature_max": 11.368,
          "precipitation_sum": 16.0,
          "totalcloudcover_mean": 0.999,
          "soiltemperature_0to10cm_mean": 11.348,
          "soilmoisture_0to10cm": 0.398,
          "windspeed_mean": 3.187
        },
        {
          "time": "2025-04-26 00:00:00",
          "temperature_mean": 10.931,
          "temperature_min": 7.255,
          "temperature_max": 15.203,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.354,
          "soiltemperature_0to10cm_mean": 11.739,
          "soilmoisture_0to10cm": 0.376,
          "windspeed_mean": 4.223
        },
        {
          "time": "2025-04-27 00:00:00",
          "temperature_mean": 10.043,
          "temperature_min": 4.721,
          "temperature_max": 15.123,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.001,
          "soiltemperature_0to10cm_mean": 11.15,
          "soilmoisture_0to10cm": 0.355,
          "windspeed_mean": 2.863
        },
        {
          "time": "2025-04-28 00:00:00",
          "temperature_mean": 12.574,
          "temperature_min": 5.305,
          "temperature_max": 18.676,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.018,
          "soiltemperature_0to10cm_mean": 12.381,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 1.808
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
      "date": "2024-10-25",
      "day_since": 171
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-15",
      "day_since": -1
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
        "temperature_mean": 9.685,
        "temperature_min": 4.246,
        "temperature_max": 14.989,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.386,
        "soiltemperature_0to10cm_mean": 8.839,
        "soilmoisture_0to10cm": 0.318,
        "windspeed_mean": 4.312
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
          "light_rain_after": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.57
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
        "temperature_mean": 11.183,
        "temperature_min": 7.354,
        "temperature_max": 15.079,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.349,
        "soiltemperature_0to10cm_mean": 10.762,
        "soilmoisture_0to10cm": 0.312,
        "windspeed_mean": 1.06
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
        "temperature_mean": 11.799,
        "temperature_min": 7.177,
        "temperature_max": 16.053,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.726,
        "soiltemperature_0to10cm_mean": 10.849,
        "soilmoisture_0to10cm": 0.308,
        "windspeed_mean": 2.139
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
        "temperature_mean": 13.235,
        "temperature_min": 6.398,
        "temperature_max": 18.839,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.69,
        "soiltemperature_0to10cm_mean": 12.126,
        "soilmoisture_0to10cm": 0.304,
        "windspeed_mean": 1.866
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
        "temperature_mean": 12.703,
        "temperature_min": 10.771,
        "temperature_max": 15.699,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.863,
        "soiltemperature_0to10cm_mean": 11.873,
        "soilmoisture_0to10cm": 0.315,
        "windspeed_mean": 4.63
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
        "temperature_mean": 16.242,
        "temperature_min": 10.324,
        "temperature_max": 22.335,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.312,
        "soiltemperature_0to10cm_mean": 14.433,
        "soilmoisture_0to10cm": 0.326,
        "windspeed_mean": 3.89
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
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
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
        "temperature_mean": 17.407,
        "temperature_min": 13.028,
        "temperature_max": 22.765,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.731,
        "soiltemperature_0to10cm_mean": 15.635,
        "soilmoisture_0to10cm": 0.311,
        "windspeed_mean": 5.013
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
        "temperature_mean": 12.35,
        "temperature_min": 8.19,
        "temperature_max": 14.942,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.966,
        "soiltemperature_0to10cm_mean": 13.198,
        "soilmoisture_0to10cm": 0.329,
        "windspeed_mean": 1.111
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
    "2025-04-19": {
      "weather_conditions": {
        "temperature_mean": 10.945,
        "temperature_min": 4.592,
        "temperature_max": 15.844,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.439,
        "soiltemperature_0to10cm_mean": 11.215,
        "soilmoisture_0to10cm": 0.339,
        "windspeed_mean": 1.927
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
        "temperature_mean": 12.963,
        "temperature_min": 7.615,
        "temperature_max": 19.157,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.533,
        "soiltemperature_0to10cm_mean": 12.751,
        "soilmoisture_0to10cm": 0.323,
        "windspeed_mean": 1.985
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
    "2025-04-21": {
      "weather_conditions": {
        "temperature_mean": 14.361,
        "temperature_min": 6.163,
        "temperature_max": 20.576,
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.926,
        "soiltemperature_0to10cm_mean": 13.753,
        "soilmoisture_0to10cm": 0.315,
        "windspeed_mean": 0.321
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
    "2025-04-22": {
      "weather_conditions": {
        "temperature_mean": 14.791,
        "temperature_min": 9.809,
        "temperature_max": 19.71,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.403,
        "soiltemperature_0to10cm_mean": 14.659,
        "soilmoisture_0to10cm": 0.373,
        "windspeed_mean": 2.284
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
    "2025-04-23": {
      "weather_conditions": {
        "temperature_mean": 15.641,
        "temperature_min": 10.933,
        "temperature_max": 20.34,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.781,
        "soiltemperature_0to10cm_mean": 15.027,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 1.507
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
    "2025-04-24": {
      "weather_conditions": {
        "temperature_mean": 14.079,
        "temperature_min": 10.64,
        "temperature_max": 17.221,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.954,
        "soiltemperature_0to10cm_mean": 14.381,
        "soilmoisture_0to10cm": 0.346,
        "windspeed_mean": 1.847
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
        "temperature_mean": 10.263,
        "temperature_min": 8.284,
        "temperature_max": 11.368,
        "precipitation_sum": 16.0,
        "totalcloudcover_mean": 0.999,
        "soiltemperature_0to10cm_mean": 11.348,
        "soilmoisture_0to10cm": 0.398,
        "windspeed_mean": 3.187
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
    "2025-04-26": {
      "weather_conditions": {
        "temperature_mean": 10.931,
        "temperature_min": 7.255,
        "temperature_max": 15.203,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.354,
        "soiltemperature_0to10cm_mean": 11.739,
        "soilmoisture_0to10cm": 0.376,
        "windspeed_mean": 4.223
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
    "2025-04-27": {
      "weather_conditions": {
        "temperature_mean": 10.043,
        "temperature_min": 4.721,
        "temperature_max": 15.123,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.001,
        "soiltemperature_0to10cm_mean": 11.15,
        "soilmoisture_0to10cm": 0.355,
        "windspeed_mean": 2.863
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
    },
    "2025-04-28": {
      "weather_conditions": {
        "temperature_mean": 12.574,
        "temperature_min": 5.305,
        "temperature_max": 18.676,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.018,
        "soiltemperature_0to10cm_mean": 12.381,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 1.808
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
  "polygon_wkt": "POLYGON ((16.20478025 49.11389784, 16.20476604 49.11389993, 16.20435411 49.11394104, 16.20379657 49.1139957, 16.20324797 49.1140374, 16.20317322 49.11404636, 16.20314098 49.11405781, 16.20311783 49.11408957, 16.20311504 49.11412484, 16.20312521 49.11416968, 16.20315719 49.11428528, 16.20316897 49.11431616, 16.20320063 49.1143992, 16.20328562 49.11460177, 16.20340987 49.11487747, 16.20345288 49.11500056, 16.20356999 49.11531324, 16.20422686 49.1168727, 16.20487373 49.11846913, 16.20493196 49.11861321, 16.20497188 49.11862794, 16.2050152 49.1186334, 16.20507781 49.11862577, 16.2051479 49.11861423, 16.20589603 49.11852135, 16.20616296 49.11850529, 16.20625316 49.11849986, 16.20645537 49.11847872, 16.20663821 49.11845795, 16.20663962 49.1184576, 16.20623431 49.11747745, 16.20478025 49.11389784))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
