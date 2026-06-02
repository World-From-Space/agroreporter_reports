// Field data for LAF250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAF250615",
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
    "2025-04-20": {
      "min": 0.334,
      "max": 0.711,
      "median": 0.615,
      "mean": 0.607,
      "sd": 0.047
    },
    "2025-04-22": {
      "min": 0.342,
      "max": 0.725,
      "median": 0.613,
      "mean": 0.605,
      "sd": 0.05
    },
    "2025-05-10": {
      "min": 0.41,
      "max": 0.787,
      "median": 0.668,
      "mean": 0.666,
      "sd": 0.041
    },
    "2025-05-14": {
      "min": 0.394,
      "max": 0.74,
      "median": 0.631,
      "mean": 0.63,
      "sd": 0.038
    },
    "2025-06-09": {
      "min": 0.345,
      "max": 0.734,
      "median": 0.576,
      "mean": 0.578,
      "sd": 0.043
    },
    "2025-06-14": {
      "min": 0.342,
      "max": 0.717,
      "median": 0.575,
      "mean": 0.579,
      "sd": 0.041
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
        "area_ha": 0.013,
        "area_percentage": 0.0
      },
      "medium vegetation": {
        "area_ha": 30.812,
        "area_percentage": 0.935
      },
      "high_vegetation": {
        "area_ha": 2.112,
        "area_percentage": 0.064
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
    "evi_median": 0.58,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.75,
          "percentage": 2.28
        },
        "EVI_statistics": {
          "mean": 0.462,
          "median": 0.466,
          "min": 0.346,
          "max": 0.493
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 4.53,
          "percentage": 13.76
        },
        "EVI_statistics": {
          "mean": 0.535,
          "median": 0.54,
          "min": 0.493,
          "max": 0.551
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 19.43,
          "percentage": 58.99
        },
        "EVI_statistics": {
          "mean": 0.578,
          "median": 0.577,
          "min": 0.551,
          "max": 0.609
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 7.68,
          "percentage": 23.33
        },
        "EVI_statistics": {
          "mean": 0.634,
          "median": 0.634,
          "min": 0.609,
          "max": 0.667
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.54,
          "percentage": 1.64
        },
        "EVI_statistics": {
          "mean": 0.676,
          "median": 0.674,
          "min": 0.667,
          "max": 0.714
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 1.28,
            "area_percentage": 3.96,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.99,
            "area_percentage": 18.51,
            "zone_number": 2
          },
          "similar": {
            "ha": 12.93,
            "area_percentage": 39.96,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 8.28,
            "area_percentage": 25.59,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 3.88,
            "area_percentage": 11.99,
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
      "old_value": 0.631,
      "new_value": 0.58,
      "difference": -0.047
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
          "ha": 4.67,
          "percentage": 14.18,
          "zone_number": 2
        },
        "no_change": {
          "ha": 28.13,
          "percentage": 85.41,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.12,
          "percentage": 0.38,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.01,
          "percentage": 0.03,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 3.77,
          "percentage": 11.44,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 5.05,
          "percentage": 15.35,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 15.84,
          "percentage": 48.08,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.53,
          "percentage": 13.77,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 3.74,
          "percentage": 11.37,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.718019726118252 49.10611770513298)",
          "new_value": 0.552,
          "old_value": 0.642,
          "value_difference": -0.09,
          "area_ha": 0.388,
          "category": "major_decline",
          "location": "W",
          "id": 1
        },
        {
          "geometry": "POINT (15.715654495732648 49.10846930385638)",
          "new_value": 0.607,
          "old_value": 0.601,
          "value_difference": 0.006,
          "area_ha": 0.852,
          "category": "major_growth",
          "location": "NW",
          "id": 2
        }
      ]
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
      "date": "2025-04-21",
      "day_since": 52
    },
    "beginning_of_heading": {
      "date": "2025-05-28",
      "day_since": 15
    },
    "beginning_of_ripenes": {
      "date": "2025-07-02",
      "day_since": -20
    },
    "harvest": {
      "date": "2025-07-20",
      "day_since": -38
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
  "polygon_wkt": "POLYGON ((15.71496383 49.106646, 15.71451436 49.10681776, 15.71439073 49.10686896, 15.71438889 49.10688564, 15.71527273 49.10827269, 15.71527435 49.10827535, 15.71553638 49.1087313, 15.71586179 49.10923542, 15.71586186 49.10923552, 15.71612182 49.10963991, 15.71617681 49.10971191, 15.71664248 49.10941621, 15.71680635 49.1093266, 15.71832017 49.10831765, 15.72053305 49.10683436, 15.72179957 49.10600308, 15.72216603 49.10576063, 15.72223483 49.10562387, 15.72245838 49.10550569, 15.72258062 49.10534278, 15.72288823 49.10528394, 15.72356846 49.10483354, 15.72443936 49.10426547, 15.7245063 49.10413495, 15.7247807 49.10404474, 15.72645848 49.10294219, 15.72829668 49.10173706, 15.72876077 49.10143142, 15.73005646 49.1005752, 15.73032131 49.10039462, 15.73048718 49.10026965, 15.73053055 49.10022099, 15.73045103 49.10017192, 15.73043584 49.10016465, 15.73043246 49.10016428, 15.73043274 49.10016316, 15.73032994 49.10011395, 15.72996969 49.10002017, 15.72996443 49.1000187, 15.72959259 49.09990856, 15.72931784 49.09984863, 15.72903009 49.09979746, 15.72859264 49.09973973, 15.72798963 49.09968783, 15.72768469 49.09967517, 15.72768254 49.09967507, 15.7274969 49.09966417, 15.7168956 49.1060182, 15.71662943 49.10613381, 15.71567904 49.10642617, 15.71496383 49.106646))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
