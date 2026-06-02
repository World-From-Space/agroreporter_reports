// Field data for LAC250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAC250615",
  "metadata": {
    "field_area_ha": 32.062,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Martínkov"
    },
    "terrain": {
      "variability": 42.516,
      "mean_elevation": 561.401,
      "min_elevation": 548.815,
      "max_elevation": 591.331
    },
    "soil": {
      "bulk_density kg/dm³": 1.322,
      "cation_exchange_capacity cmol(c)/kg": 19.806,
      "clay_particles g/100g (%)": 21.349,
      "sand particles g/100g (%)": 33.087,
      "silt particles g/100g (%)": 45.524,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-04-20": {
      "min": 0.347,
      "max": 0.737,
      "median": 0.64,
      "mean": 0.634,
      "sd": 0.038
    },
    "2025-04-22": {
      "min": 0.333,
      "max": 0.764,
      "median": 0.652,
      "mean": 0.647,
      "sd": 0.041
    },
    "2025-05-10": {
      "min": 0.451,
      "max": 0.831,
      "median": 0.7,
      "mean": 0.7,
      "sd": 0.035
    },
    "2025-05-14": {
      "min": 0.393,
      "max": 0.766,
      "median": 0.663,
      "mean": 0.66,
      "sd": 0.031
    },
    "2025-06-09": {
      "min": 0.308,
      "max": 0.74,
      "median": 0.62,
      "mean": 0.618,
      "sd": 0.041
    },
    "2025-06-14": {
      "min": 0.357,
      "max": 0.778,
      "median": 0.614,
      "mean": 0.613,
      "sd": 0.037
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 32.158,
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
        "area_ha": 0.014,
        "area_percentage": 0.0
      },
      "medium vegetation": {
        "area_ha": 28.592,
        "area_percentage": 0.889
      },
      "high_vegetation": {
        "area_ha": 3.551,
        "area_percentage": 0.11
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
    "evi_median": 0.611,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.74,
          "percentage": 2.3
        },
        "EVI_statistics": {
          "mean": 0.483,
          "median": 0.487,
          "min": 0.347,
          "max": 0.519
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.81,
          "percentage": 11.86
        },
        "EVI_statistics": {
          "mean": 0.564,
          "median": 0.569,
          "min": 0.519,
          "max": 0.58
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 22.23,
          "percentage": 69.12
        },
        "EVI_statistics": {
          "mean": 0.61,
          "median": 0.61,
          "min": 0.58,
          "max": 0.641
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 5.17,
          "percentage": 16.09
        },
        "EVI_statistics": {
          "mean": 0.658,
          "median": 0.655,
          "min": 0.641,
          "max": 0.702
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.2,
          "percentage": 0.62
        },
        "EVI_statistics": {
          "mean": 0.717,
          "median": 0.714,
          "min": 0.703,
          "max": 0.759
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.93,
            "area_percentage": 3.01,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 7.43,
            "area_percentage": 24.08,
            "zone_number": 2
          },
          "similar": {
            "ha": 10.18,
            "area_percentage": 33.0,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 7.61,
            "area_percentage": 24.67,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 4.7,
            "area_percentage": 15.24,
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
      "old_value": 0.663,
      "new_value": 0.611,
      "difference": -0.051
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
          "ha": 5.28,
          "percentage": 16.44,
          "zone_number": 2
        },
        "no_change": {
          "ha": 26.83,
          "percentage": 83.52,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.01,
          "percentage": 0.04,
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
          "ha": 4.81,
          "percentage": 14.97,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.66,
          "percentage": 14.51,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 13.4,
          "percentage": 41.72,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.38,
          "percentage": 13.65,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 4.87,
          "percentage": 15.15,
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
      "date": "2025-04-21",
      "day_since": 52
    },
    "beginning_of_heading": {
      "date": "2025-05-30",
      "day_since": 13
    },
    "beginning_of_ripenes": {
      "date": "2025-07-04",
      "day_since": -22
    },
    "harvest": {
      "date": "2025-07-22",
      "day_since": -40
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
  "polygon_wkt": "POLYGON ((15.73795175 49.1036669, 15.73801437 49.10360716, 15.73808112 49.10356794, 15.73839084 49.10336579, 15.73860962 49.10322052, 15.73874058 49.10307504, 15.73881848 49.10301381, 15.73897782 49.10285467, 15.73901478 49.10280123, 15.73906115 49.10273421, 15.73905249 49.10263186, 15.73899002 49.1025651, 15.73854077 49.10240905, 15.7380238 49.10226632, 15.73793471 49.10227032, 15.73786982 49.10230596, 15.7376933 49.10253558, 15.73765288 49.10255488, 15.73760192 49.1025341, 15.73743608 49.1023629, 15.73725353 49.10212329, 15.7371293 49.10201301, 15.73660062 49.10183376, 15.73498963 49.10136694, 15.7314594 49.1035566, 15.72302755 49.10873424, 15.72337943 49.10892254, 15.72378455 49.10924971, 15.72433879 49.10963662, 15.72464872 49.10988837, 15.72477476 49.10995942, 15.72486192 49.10998186, 15.72494684 49.10997657, 15.72503089 49.10994605, 15.72576281 49.1095142, 15.72587498 49.10945148, 15.72597616 49.10939605, 15.72630565 49.10926893, 15.72636727 49.10923002, 15.72642337 49.10919371, 15.72647705 49.10913684, 15.72661543 49.10888708, 15.7266643 49.10879743, 15.72679892 49.10866123, 15.72740606 49.1082352, 15.72795004 49.10785691, 15.7280588 49.10781007, 15.72865594 49.10765526, 15.72896686 49.10752396, 15.73013024 49.10707574, 15.73094764 49.10684853, 15.73109062 49.10679509, 15.73123101 49.10672586, 15.73128144 49.10667951, 15.73128172 49.10662801, 15.73122348 49.10655254, 15.73102191 49.10640054, 15.73100548 49.10636211, 15.73102757 49.10632945, 15.73107931 49.10631733, 15.73141632 49.10639058, 15.73186779 49.10646711, 15.73202195 49.10645389, 15.73214836 49.10643395, 15.73240346 49.10632049, 15.73264973 49.10617362, 15.73283328 49.10600692, 15.73292965 49.1059347, 15.73338351 49.10582652, 15.73396121 49.10566185, 15.73412297 49.10559941, 15.73502116 49.10520546, 15.73511759 49.10515327, 15.73525099 49.10504964, 15.73549159 49.10488019, 15.73557524 49.10484511, 15.73588276 49.10473979, 15.73623172 49.10461146, 15.73653704 49.10450687, 15.73691902 49.10433737, 15.73726494 49.10417167, 15.73746323 49.10406506, 15.73755705 49.10402066, 15.73795175 49.1036669))"
};
