// Field data for LAM250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAM250615",
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
    "2025-04-20": {
      "min": 0.291,
      "max": 0.726,
      "median": 0.643,
      "mean": 0.634,
      "sd": 0.044
    },
    "2025-04-29": {
      "min": 0.312,
      "max": 0.804,
      "median": 0.702,
      "mean": 0.696,
      "sd": 0.044
    },
    "2025-05-10": {
      "min": 0.403,
      "max": 0.738,
      "median": 0.661,
      "mean": 0.653,
      "sd": 0.041
    },
    "2025-05-14": {
      "min": 0.41,
      "max": 0.728,
      "median": 0.647,
      "mean": 0.638,
      "sd": 0.041
    },
    "2025-06-09": {
      "min": 0.438,
      "max": 0.737,
      "median": 0.605,
      "mean": 0.601,
      "sd": 0.039
    },
    "2025-06-14": {
      "min": 0.468,
      "max": 0.789,
      "median": 0.606,
      "mean": 0.602,
      "sd": 0.039
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
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "low_vegetation": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "medium vegetation": {
        "area_ha": 23.089,
        "area_percentage": 0.896
      },
      "high_vegetation": {
        "area_ha": 2.667,
        "area_percentage": 0.104
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
    "evi_median": 0.61,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.44,
          "percentage": 1.71
        },
        "EVI_statistics": {
          "mean": 0.508,
          "median": 0.511,
          "min": 0.469,
          "max": 0.519
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 6.47,
          "percentage": 25.1
        },
        "EVI_statistics": {
          "mean": 0.557,
          "median": 0.559,
          "min": 0.519,
          "max": 0.58
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 14.48,
          "percentage": 56.21
        },
        "EVI_statistics": {
          "mean": 0.613,
          "median": 0.615,
          "min": 0.58,
          "max": 0.641
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.01,
          "percentage": 15.58
        },
        "EVI_statistics": {
          "mean": 0.656,
          "median": 0.652,
          "min": 0.641,
          "max": 0.702
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.36,
          "percentage": 1.39
        },
        "EVI_statistics": {
          "mean": 0.73,
          "median": 0.727,
          "min": 0.702,
          "max": 0.795
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.36,
            "area_percentage": 1.42,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 7.06,
            "area_percentage": 27.92,
            "zone_number": 2
          },
          "similar": {
            "ha": 11.83,
            "area_percentage": 46.78,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 4.48,
            "area_percentage": 17.71,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.56,
            "area_percentage": 6.17,
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
      "old_value": 0.647,
      "new_value": 0.61,
      "difference": -0.039
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
          "ha": 1.47,
          "percentage": 5.72,
          "zone_number": 2
        },
        "no_change": {
          "ha": 23.65,
          "percentage": 91.83,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.27,
          "percentage": 1.05,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.36,
          "percentage": 1.4,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 2.66,
          "percentage": 10.31,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.74,
          "percentage": 18.42,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 12.67,
          "percentage": 49.18,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.95,
          "percentage": 11.44,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.74,
          "percentage": 10.65,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.723760472018348 49.09658909644578)",
          "new_value": 0.67,
          "old_value": 0.581,
          "value_difference": 0.089,
          "area_ha": 1.409,
          "category": "major_growth",
          "location": "E",
          "id": 1
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
      "date": "2025-04-18",
      "day_since": 55
    },
    "beginning_of_heading": {
      "date": "2025-05-25",
      "day_since": 18
    },
    "beginning_of_ripenes": {
      "date": "2025-06-29",
      "day_since": -17
    },
    "harvest": {
      "date": "2025-07-17",
      "day_since": -35
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
  "polygon_wkt": "POLYGON ((15.71932294 49.09325389, 15.71900233 49.09334561, 15.71868234 49.09344192, 15.71849606 49.09351188, 15.71832131 49.09358793, 15.71785453 49.09378752, 15.71750276 49.09394942, 15.7173784 49.09403277, 15.71734162 49.09412187, 15.71731855 49.09417213, 15.71731068 49.09422242, 15.71730454 49.09426923, 15.71730871 49.09431971, 15.71735937 49.0944194, 15.71740886 49.09447409, 15.71758586 49.09462673, 15.7176143 49.09466412, 15.71769275 49.09498932, 15.71772879 49.0951711, 15.71772769 49.095281, 15.71769733 49.09546971, 15.71769823 49.09555196, 15.7177176 49.09563796, 15.71778768 49.09580375, 15.71789231 49.09597236, 15.71796688 49.09620767, 15.71799942 49.09630686, 15.71802981 49.09646504, 15.71803666 49.09658048, 15.71802038 49.09668257, 15.71794971 49.09678241, 15.71794959 49.09681561, 15.71795127 49.09684439, 15.71798282 49.09689961, 15.7187124 49.09734174, 15.71957696 49.09787039, 15.71992492 49.09815503, 15.72054878 49.098696, 15.72066397 49.09876757, 15.72073098 49.09880093, 15.72083007 49.09885493, 15.72145156 49.09912218, 15.72218576 49.09942186, 15.72237443 49.09948382, 15.72254048 49.09951864, 15.72266737 49.09954132, 15.72278975 49.09955096, 15.7229738 49.09956275, 15.72325836 49.09956796, 15.72468353 49.09952296, 15.7263553 49.09948289, 15.72087814 49.09291561, 15.72018542 49.09300823, 15.71993725 49.09306955, 15.71973228 49.09316479, 15.71932294 49.09325389), (15.71887806 49.09597622, 15.71899102 49.09588058, 15.71917374 49.09582634, 15.71935681 49.09581982, 15.71943874 49.0958442, 15.71946402 49.09588144, 15.71946819 49.09591851, 15.7194339 49.09594533, 15.71930607 49.09599796, 15.7190597 49.09607709, 15.71896412 49.09610243, 15.7189019 49.09609456, 15.71886587 49.0960678, 15.71885278 49.0960399, 15.71887806 49.09597622))"
};
