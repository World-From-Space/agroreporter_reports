// Field data for LAB250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAB250615",
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
    "2025-04-20": {
      "min": 0.275,
      "max": 0.704,
      "median": 0.628,
      "mean": 0.618,
      "sd": 0.045
    },
    "2025-04-22": {
      "min": 0.281,
      "max": 0.708,
      "median": 0.628,
      "mean": 0.62,
      "sd": 0.044
    },
    "2025-05-10": {
      "min": 0.397,
      "max": 0.759,
      "median": 0.681,
      "mean": 0.676,
      "sd": 0.034
    },
    "2025-05-14": {
      "min": 0.382,
      "max": 0.779,
      "median": 0.656,
      "mean": 0.652,
      "sd": 0.033
    },
    "2025-06-13": {
      "min": 0.291,
      "max": 0.776,
      "median": 0.596,
      "mean": 0.593,
      "sd": 0.036
    },
    "2025-06-14": {
      "min": 0.343,
      "max": 0.784,
      "median": 0.604,
      "mean": 0.6,
      "sd": 0.037
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
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "low_vegetation": {
        "area_ha": 0.018,
        "area_percentage": 0.001
      },
      "medium vegetation": {
        "area_ha": 25.483,
        "area_percentage": 0.941
      },
      "high_vegetation": {
        "area_ha": 1.579,
        "area_percentage": 0.058
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
    "evi_median": 0.609,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.6,
          "percentage": 2.2
        },
        "EVI_statistics": {
          "mean": 0.464,
          "median": 0.463,
          "min": 0.369,
          "max": 0.518
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.38,
          "percentage": 12.47
        },
        "EVI_statistics": {
          "mean": 0.562,
          "median": 0.566,
          "min": 0.518,
          "max": 0.579
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 19.88,
          "percentage": 73.4
        },
        "EVI_statistics": {
          "mean": 0.61,
          "median": 0.61,
          "min": 0.579,
          "max": 0.64
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 3.1,
          "percentage": 11.46
        },
        "EVI_statistics": {
          "mean": 0.653,
          "median": 0.649,
          "min": 0.64,
          "max": 0.701
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.13,
          "percentage": 0.47
        },
        "EVI_statistics": {
          "mean": 0.723,
          "median": 0.72,
          "min": 0.701,
          "max": 0.772
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.43,
            "area_percentage": 1.63,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.83,
            "area_percentage": 22.13,
            "zone_number": 2
          },
          "similar": {
            "ha": 12.34,
            "area_percentage": 46.85,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 5.71,
            "area_percentage": 21.68,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 2.03,
            "area_percentage": 7.71,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-06-15",
      "reference_image_date": "2025-05-14",
      "change_period": 32
    },
    "median_EVI_change": {
      "old_value": 0.656,
      "new_value": 0.609,
      "difference": -0.046
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
          "ha": 2.85,
          "percentage": 10.53,
          "zone_number": 2
        },
        "no_change": {
          "ha": 24.23,
          "percentage": 89.46,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.01,
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
          "ha": 4.3,
          "percentage": 15.88,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.85,
          "percentage": 14.22,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 10.9,
          "percentage": 40.26,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.77,
          "percentage": 13.91,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 4.26,
          "percentage": 15.73,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 1596.561,
      "historical_average": 1592.496
    },
    "accumulated_precipitation_since_seeding": {
      "current": 292.782,
      "historical_mean": 423.13
    },
    "precipitation_summary": {
      "last_3_days": 0.032,
      "last_7_days": 12.541,
      "last_14_days": 36.375,
      "last_30_days": 65.775
    },
    "standardized_precipitation_index": {
      "1_month": -0.709,
      "3_month": -1.471,
      "6_month": -1.913
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-06-11 00:00:00",
          "temperature_mean": 15.388,
          "temperature_min": 9.907,
          "temperature_max": 18.454,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.322,
          "soiltemperature_0to10cm_mean": 16.42,
          "soilmoisture_0to10cm": 0.324,
          "windspeed_mean": 2.912
        },
        {
          "time": "2025-06-12 00:00:00",
          "temperature_mean": 15.167,
          "temperature_min": 7.506,
          "temperature_max": 21.01,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.002,
          "soiltemperature_0to10cm_mean": 15.875,
          "soilmoisture_0to10cm": 0.309,
          "windspeed_mean": 1.665
        },
        {
          "time": "2025-06-13 00:00:00",
          "temperature_mean": 16.709,
          "temperature_min": 9.55,
          "temperature_max": 22.414,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 16.929,
          "soilmoisture_0to10cm": 0.296,
          "windspeed_mean": 2.15
        },
        {
          "time": "2025-06-14 00:00:00",
          "temperature_mean": 17.684,
          "temperature_min": 9.987,
          "temperature_max": 24.263,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 17.645,
          "soilmoisture_0to10cm": 0.283,
          "windspeed_mean": 2.012
        },
        {
          "time": "2025-06-15 00:00:00",
          "temperature_mean": 21.123,
          "temperature_min": 11.819,
          "temperature_max": 28.416,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.096,
          "soiltemperature_0to10cm_mean": 19.612,
          "soilmoisture_0to10cm": 0.271,
          "windspeed_mean": 1.215
        },
        {
          "time": "2025-06-16 00:00:00",
          "temperature_mean": 16.169,
          "temperature_min": 14.255,
          "temperature_max": 18.782,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.996,
          "soiltemperature_0to10cm_mean": 16.991,
          "soilmoisture_0to10cm": 0.302,
          "windspeed_mean": 3.61
        },
        {
          "time": "2025-06-17 00:00:00",
          "temperature_mean": 16.91,
          "temperature_min": 12.519,
          "temperature_max": 21.378,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.681,
          "soiltemperature_0to10cm_mean": 17.008,
          "soilmoisture_0to10cm": 0.3,
          "windspeed_mean": 2.299
        },
        {
          "time": "2025-06-18 00:00:00",
          "temperature_mean": 19.456,
          "temperature_min": 11.642,
          "temperature_max": 25.777,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.6,
          "soiltemperature_0to10cm_mean": 18.858,
          "soilmoisture_0to10cm": 0.284,
          "windspeed_mean": 1.353
        },
        {
          "time": "2025-06-19 00:00:00",
          "temperature_mean": 19.962,
          "temperature_min": 14.83,
          "temperature_max": 24.357,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.267,
          "soiltemperature_0to10cm_mean": 19.579,
          "soilmoisture_0to10cm": 0.268,
          "windspeed_mean": 3.05
        },
        {
          "time": "2025-06-20 00:00:00",
          "temperature_mean": 16.669,
          "temperature_min": 10.508,
          "temperature_max": 21.495,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.013,
          "soiltemperature_0to10cm_mean": 18.276,
          "soilmoisture_0to10cm": 0.255,
          "windspeed_mean": 2.021
        },
        {
          "time": "2025-06-21 00:00:00",
          "temperature_mean": 17.561,
          "temperature_min": 11.663,
          "temperature_max": 22.586,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.023,
          "soiltemperature_0to10cm_mean": 17.991,
          "soilmoisture_0to10cm": 0.242,
          "windspeed_mean": 1.454
        },
        {
          "time": "2025-06-22 00:00:00",
          "temperature_mean": 21.377,
          "temperature_min": 15.997,
          "temperature_max": 27.254,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.021,
          "soiltemperature_0to10cm_mean": 19.566,
          "soilmoisture_0to10cm": 0.231,
          "windspeed_mean": 1.391
        },
        {
          "time": "2025-06-23 00:00:00",
          "temperature_mean": 22.011,
          "temperature_min": 16.512,
          "temperature_max": 29.034,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.636,
          "soiltemperature_0to10cm_mean": 20.478,
          "soilmoisture_0to10cm": 0.23,
          "windspeed_mean": 2.493
        },
        {
          "time": "2025-06-24 00:00:00",
          "temperature_mean": 20.428,
          "temperature_min": 15.637,
          "temperature_max": 25.072,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.323,
          "soiltemperature_0to10cm_mean": 20.204,
          "soilmoisture_0to10cm": 0.252,
          "windspeed_mean": 3.844
        },
        {
          "time": "2025-06-25 00:00:00",
          "temperature_mean": 22.878,
          "temperature_min": 16.208,
          "temperature_max": 28.096,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.168,
          "soiltemperature_0to10cm_mean": 21.669,
          "soilmoisture_0to10cm": 0.236,
          "windspeed_mean": 3.227
        },
        {
          "time": "2025-06-26 00:00:00",
          "temperature_mean": 23.596,
          "temperature_min": 17.055,
          "temperature_max": 31.284,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.598,
          "soiltemperature_0to10cm_mean": 23.073,
          "soilmoisture_0to10cm": 0.238,
          "windspeed_mean": 0.827
        },
        {
          "time": "2025-06-27 00:00:00",
          "temperature_mean": 20.536,
          "temperature_min": 18.0,
          "temperature_max": 25.44,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.545,
          "soiltemperature_0to10cm_mean": 21.092,
          "soilmoisture_0to10cm": 0.299,
          "windspeed_mean": 4.034
        },
        {
          "time": "2025-06-28 00:00:00",
          "temperature_mean": 20.693,
          "temperature_min": 16.967,
          "temperature_max": 24.65,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.588,
          "soiltemperature_0to10cm_mean": 20.66,
          "soilmoisture_0to10cm": 0.279,
          "windspeed_mean": 2.974
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 257
    },
    "crop_emergence": {
      "date": "2024-10-12",
      "day_since": 243
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-19",
      "day_since": 54
    },
    "beginning_of_heading": {
      "date": "2025-05-26",
      "day_since": 17
    },
    "beginning_of_ripenes": {
      "date": "2025-06-30",
      "day_since": -18
    },
    "harvest": {
      "date": "2025-07-18",
      "day_since": -36
    }
  },
  "timing_of_field_operations": {
    "2025-06-11": {
      "weather_conditions": {
        "temperature_mean": 15.388,
        "temperature_min": 9.907,
        "temperature_max": 18.454,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.322,
        "soiltemperature_0to10cm_mean": 16.42,
        "soilmoisture_0to10cm": 0.324,
        "windspeed_mean": 2.912
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      },
      "late_fungicide": {
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
    "2025-06-12": {
      "weather_conditions": {
        "temperature_mean": 15.167,
        "temperature_min": 7.506,
        "temperature_max": 21.01,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.002,
        "soiltemperature_0to10cm_mean": 15.875,
        "soilmoisture_0to10cm": 0.309,
        "windspeed_mean": 1.665
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-06-13": {
      "weather_conditions": {
        "temperature_mean": 16.709,
        "temperature_min": 9.55,
        "temperature_max": 22.414,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 16.929,
        "soilmoisture_0to10cm": 0.296,
        "windspeed_mean": 2.15
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-06-14": {
      "weather_conditions": {
        "temperature_mean": 17.684,
        "temperature_min": 9.987,
        "temperature_max": 24.263,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 17.645,
        "soilmoisture_0to10cm": 0.283,
        "windspeed_mean": 2.012
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-06-15": {
      "weather_conditions": {
        "temperature_mean": 21.123,
        "temperature_min": 11.819,
        "temperature_max": 28.416,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.096,
        "soiltemperature_0to10cm_mean": 19.612,
        "soilmoisture_0to10cm": 0.271,
        "windspeed_mean": 1.215
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-06-16": {
      "weather_conditions": {
        "temperature_mean": 16.169,
        "temperature_min": 14.255,
        "temperature_max": 18.782,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.996,
        "soiltemperature_0to10cm_mean": 16.991,
        "soilmoisture_0to10cm": 0.302,
        "windspeed_mean": 3.61
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      },
      "late_fungicide": {
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
    "2025-06-17": {
      "weather_conditions": {
        "temperature_mean": 16.91,
        "temperature_min": 12.519,
        "temperature_max": 21.378,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.681,
        "soiltemperature_0to10cm_mean": 17.008,
        "soilmoisture_0to10cm": 0.3,
        "windspeed_mean": 2.299
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      },
      "late_fungicide": {
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
    "2025-06-18": {
      "weather_conditions": {
        "temperature_mean": 19.456,
        "temperature_min": 11.642,
        "temperature_max": 25.777,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.6,
        "soiltemperature_0to10cm_mean": 18.858,
        "soilmoisture_0to10cm": 0.284,
        "windspeed_mean": 1.353
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-06-19": {
      "weather_conditions": {
        "temperature_mean": 19.962,
        "temperature_min": 14.83,
        "temperature_max": 24.357,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.267,
        "soiltemperature_0to10cm_mean": 19.579,
        "soilmoisture_0to10cm": 0.268,
        "windspeed_mean": 3.05
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      },
      "late_fungicide": {
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
    "2025-06-20": {
      "weather_conditions": {
        "temperature_mean": 16.669,
        "temperature_min": 10.508,
        "temperature_max": 21.495,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.013,
        "soiltemperature_0to10cm_mean": 18.276,
        "soilmoisture_0to10cm": 0.255,
        "windspeed_mean": 2.021
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-06-21": {
      "weather_conditions": {
        "temperature_mean": 17.561,
        "temperature_min": 11.663,
        "temperature_max": 22.586,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.023,
        "soiltemperature_0to10cm_mean": 17.991,
        "soilmoisture_0to10cm": 0.242,
        "windspeed_mean": 1.454
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-06-22": {
      "weather_conditions": {
        "temperature_mean": 21.377,
        "temperature_min": 15.997,
        "temperature_max": 27.254,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.021,
        "soiltemperature_0to10cm_mean": 19.566,
        "soilmoisture_0to10cm": 0.231,
        "windspeed_mean": 1.391
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-06-23": {
      "weather_conditions": {
        "temperature_mean": 22.011,
        "temperature_min": 16.512,
        "temperature_max": 29.034,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.636,
        "soiltemperature_0to10cm_mean": 20.478,
        "soilmoisture_0to10cm": 0.23,
        "windspeed_mean": 2.493
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-06-24": {
      "weather_conditions": {
        "temperature_mean": 20.428,
        "temperature_min": 15.637,
        "temperature_max": 25.072,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.323,
        "soiltemperature_0to10cm_mean": 20.204,
        "soilmoisture_0to10cm": 0.252,
        "windspeed_mean": 3.844
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-06-25": {
      "weather_conditions": {
        "temperature_mean": 22.878,
        "temperature_min": 16.208,
        "temperature_max": 28.096,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.168,
        "soiltemperature_0to10cm_mean": 21.669,
        "soilmoisture_0to10cm": 0.236,
        "windspeed_mean": 3.227
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-06-26": {
      "weather_conditions": {
        "temperature_mean": 23.596,
        "temperature_min": 17.055,
        "temperature_max": 31.284,
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.598,
        "soiltemperature_0to10cm_mean": 23.073,
        "soilmoisture_0to10cm": 0.238,
        "windspeed_mean": 0.827
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-06-27": {
      "weather_conditions": {
        "temperature_mean": 20.536,
        "temperature_min": 18.0,
        "temperature_max": 25.44,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.545,
        "soiltemperature_0to10cm_mean": 21.092,
        "soilmoisture_0to10cm": 0.299,
        "windspeed_mean": 4.034
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_fungicide": {
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-06-28": {
      "weather_conditions": {
        "temperature_mean": 20.693,
        "temperature_min": 16.967,
        "temperature_max": 24.65,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.588,
        "soiltemperature_0to10cm_mean": 20.66,
        "soilmoisture_0to10cm": 0.279,
        "windspeed_mean": 2.974
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      },
      "late_fungicide": {
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
    }
  },
  "_images": {
    "zones": "images/zones.png",
    "history": "images/history.png",
    "hotspots": "images/hotspots.png",
    "evi": "images/evi.png",
    "rgb": "images/rgb.png"
  },
  "polygon_wkt": "POLYGON ((15.7168 49.106, 15.7168 49.106, 15.7274 49.0996, 15.7263 49.0996, 15.7257 49.0996, 15.7248 49.0997, 15.7239 49.0997, 15.723 49.0997, 15.7229 49.0997, 15.7228 49.0997, 15.7224 49.0996, 15.7221 49.0995, 15.7219 49.0994, 15.7217 49.0993, 15.7142 49.1038, 15.7142 49.1038, 15.7142 49.1039, 15.7143 49.1039, 15.7145 49.104, 15.7145 49.104, 15.7145 49.104, 15.7146 49.1041, 15.715 49.1048, 15.7156 49.1055, 15.7156 49.1055, 15.7157 49.1055, 15.7157 49.1055, 15.7158 49.1055, 15.7164 49.1054, 15.7165 49.1054, 15.7165 49.1054, 15.7168 49.1059, 15.7168 49.106))"
};
