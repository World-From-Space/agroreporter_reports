// Field data for LAH250415 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAH250415",
  "metadata": {
    "field_area_ha": 20.96,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lesonice"
    },
    "terrain": {
      "variability": 10.845,
      "mean_elevation": 538.915,
      "min_elevation": 532.668,
      "max_elevation": 543.513
    },
    "soil": {
      "bulk_density kg/dm³": 1.334,
      "cation_exchange_capacity cmol(c)/kg": 19.774,
      "clay_particles g/100g (%)": 20.385,
      "sand particles g/100g (%)": 39.575,
      "silt particles g/100g (%)": 40.056,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-02-11": {
      "min": 0.154,
      "max": 0.375,
      "median": 0.283,
      "mean": 0.284,
      "sd": 0.023
    },
    "2025-03-07": {
      "min": 0.219,
      "max": 0.424,
      "median": 0.334,
      "mean": 0.333,
      "sd": 0.023
    },
    "2025-03-17": {
      "min": 0.175,
      "max": 0.435,
      "median": 0.329,
      "mean": 0.328,
      "sd": 0.031
    },
    "2025-03-21": {
      "min": 0.182,
      "max": 0.424,
      "median": 0.314,
      "mean": 0.313,
      "sd": 0.03
    },
    "2025-03-28": {
      "min": 0.214,
      "max": 0.522,
      "median": 0.404,
      "mean": 0.4,
      "sd": 0.038
    },
    "2025-04-03": {
      "min": 0.233,
      "max": 0.597,
      "median": 0.461,
      "mean": 0.456,
      "sd": 0.045
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 21.011,
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
        "area_ha": 0.577,
        "area_percentage": 0.027
      },
      "medium vegetation": {
        "area_ha": 20.406,
        "area_percentage": 0.971
      },
      "high_vegetation": {
        "area_ha": 0.028,
        "area_percentage": 0.001
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
    "evi_median": 0.532,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.62,
          "percentage": 7.7
        },
        "EVI_statistics": {
          "mean": 0.408,
          "median": 0.418,
          "min": 0.302,
          "max": 0.453
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.44,
          "percentage": 16.35
        },
        "EVI_statistics": {
          "mean": 0.486,
          "median": 0.489,
          "min": 0.453,
          "max": 0.506
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 11.58,
          "percentage": 55.12
        },
        "EVI_statistics": {
          "mean": 0.534,
          "median": 0.534,
          "min": 0.506,
          "max": 0.559
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 3.65,
          "percentage": 17.39
        },
        "EVI_statistics": {
          "mean": 0.577,
          "median": 0.573,
          "min": 0.559,
          "max": 0.612
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.72,
          "percentage": 3.44
        },
        "EVI_statistics": {
          "mean": 0.626,
          "median": 0.623,
          "min": 0.612,
          "max": 0.684
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 2.6,
            "area_percentage": 13.01,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 3.93,
            "area_percentage": 19.67,
            "zone_number": 2
          },
          "similar": {
            "ha": 6.91,
            "area_percentage": 34.58,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 3.62,
            "area_percentage": 18.12,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 2.92,
            "area_percentage": 14.61,
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
      "old_value": 0.404,
      "new_value": 0.532,
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
          "ha": 0.74,
          "percentage": 3.53,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 16.69,
          "percentage": 79.41,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 3.58,
          "percentage": 17.05,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.743648692619761 49.09280568104167)",
          "new_value": 0.585,
          "old_value": 0.416,
          "value_difference": 0.169,
          "area_ha": 1.862,
          "category": "major_growth",
          "location": "C",
          "id": 1
        },
        {
          "geometry": "POINT (15.745886014476048 49.09323313659722)",
          "new_value": 0.54,
          "old_value": 0.369,
          "value_difference": 0.171,
          "area_ha": 0.263,
          "category": "major_growth",
          "location": "E",
          "id": 2
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 1.63,
          "percentage": 7.76,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.04,
          "percentage": 14.45,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 11.8,
          "percentage": 56.18,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.87,
          "percentage": 13.66,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.67,
          "percentage": 7.95,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.744021579595808 49.09342014840278)",
          "new_value": 0.551,
          "old_value": 0.381,
          "value_difference": 0.17,
          "area_ha": 0.269,
          "category": "major_growth",
          "location": "C",
          "id": 1
        },
        {
          "geometry": "POINT (15.74584458258982 49.093259852569446)",
          "new_value": 0.544,
          "old_value": 0.371,
          "value_difference": 0.173,
          "area_ha": 0.217,
          "category": "major_growth",
          "location": "E",
          "id": 2
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
      "date": "2025-04-19",
      "day_since": -5
    },
    "beginning_of_heading": {
      "date": "2025-05-28",
      "day_since": -44
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
  "polygon_wkt": "POLYGON ((15.74656123 49.09105737, 15.74527726 49.09188699, 15.74524083 49.09187731, 15.74475229 49.09147901, 15.74450925 49.09128865, 15.74421604 49.09148183, 15.74380554 49.09175228, 15.74319148 49.09214779, 15.74153282 49.09324274, 15.73935076 49.0946898, 15.73769565 49.09577845, 15.73751776 49.09589303, 15.73693981 49.09626529, 15.73674079 49.09639347, 15.73671591 49.09649205, 15.73666774 49.09652177, 15.73652001 49.09657331, 15.73578661 49.0970348, 15.73518211 49.09745276, 15.73513444 49.09749313, 15.73517488 49.09753091, 15.73522514 49.09756967, 15.73543151 49.09764778, 15.73553449 49.09765463, 15.73562933 49.09764129, 15.73707989 49.09724587, 15.73762284 49.09709533, 15.73762478 49.0970948, 15.73879024 49.09678689, 15.73959905 49.09653545, 15.739709 49.09647471, 15.73974596 49.09644021, 15.73995339 49.09634548, 15.74002054 49.09631001, 15.74069057 49.09612181, 15.74099229 49.09601057, 15.74145572 49.09588942, 15.74173511 49.0958018, 15.74205561 49.09569296, 15.74233851 49.09554853, 15.74258815 49.0953988, 15.74309073 49.09496683, 15.74332368 49.09461528, 15.74340045 49.0945724, 15.74350435 49.09452442, 15.74370577 49.09452104, 15.74393476 49.09450325, 15.7440976 49.09448538, 15.74426319 49.09445239, 15.74440576 49.09441759, 15.74454249 49.0943721, 15.74483744 49.09421477, 15.74561845 49.09368416, 15.74578279 49.09357777, 15.74611506 49.0933512, 15.74631266 49.09319012, 15.74649533 49.09296719, 15.746596 49.09287639, 15.74673333 49.09280386, 15.7470317 49.09264979, 15.74734517 49.09244788, 15.74742355 49.09235947, 15.74746172 49.09227812, 15.74746292 49.09218284, 15.74741053 49.09205674, 15.74742529 49.09197577, 15.74748962 49.09188606, 15.74753139 49.09182406, 15.7476123 49.09177051, 15.74764833 49.09175298, 15.74772529 49.0917111, 15.74782281 49.09165646, 15.74790156 49.09161472, 15.74800773 49.09157274, 15.74825433 49.09144036, 15.74868066 49.09120581, 15.74879833 49.09111537, 15.74888513 49.09100206, 15.74897269 49.09086325, 15.74895001 49.09076459, 15.74864009 49.09040369, 15.74825946 49.08996043, 15.74672311 49.09095277, 15.74656123 49.09105737))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
