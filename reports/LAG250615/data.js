// Field data for LAG250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAG250615",
  "metadata": {
    "field_area_ha": 15.306,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 24.572,
      "mean_elevation": 548.945,
      "min_elevation": 532.86,
      "max_elevation": 557.432
    },
    "soil": {
      "bulk_density kg/dm³": 1.333,
      "cation_exchange_capacity cmol(c)/kg": 20.226,
      "clay_particles g/100g (%)": 21.176,
      "sand particles g/100g (%)": 35.874,
      "silt particles g/100g (%)": 42.992,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-04-20": {
      "min": 0.378,
      "max": 0.711,
      "median": 0.637,
      "mean": 0.629,
      "sd": 0.039
    },
    "2025-05-03": {
      "min": 0.417,
      "max": 0.758,
      "median": 0.687,
      "mean": 0.684,
      "sd": 0.027
    },
    "2025-05-14": {
      "min": 0.398,
      "max": 0.742,
      "median": 0.657,
      "mean": 0.653,
      "sd": 0.031
    },
    "2025-05-31": {
      "min": 0.334,
      "max": 0.754,
      "median": 0.67,
      "mean": 0.665,
      "sd": 0.035
    },
    "2025-06-09": {
      "min": 0.361,
      "max": 0.715,
      "median": 0.626,
      "mean": 0.621,
      "sd": 0.033
    },
    "2025-06-14": {
      "min": 0.304,
      "max": 0.69,
      "median": 0.606,
      "mean": 0.599,
      "sd": 0.038
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 15.038,
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
        "area_ha": 0.054,
        "area_percentage": 0.004
      },
      "medium vegetation": {
        "area_ha": 14.501,
        "area_percentage": 0.964
      },
      "high_vegetation": {
        "area_ha": 0.483,
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
    "evi_median": 0.606,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.55,
          "percentage": 3.65
        },
        "EVI_statistics": {
          "mean": 0.465,
          "median": 0.48,
          "min": 0.308,
          "max": 0.515
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 2.28,
          "percentage": 15.14
        },
        "EVI_statistics": {
          "mean": 0.555,
          "median": 0.559,
          "min": 0.516,
          "max": 0.576
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 10.66,
          "percentage": 70.88
        },
        "EVI_statistics": {
          "mean": 0.609,
          "median": 0.609,
          "min": 0.576,
          "max": 0.637
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 1.55,
          "percentage": 10.33
        },
        "EVI_statistics": {
          "mean": 0.648,
          "median": 0.645,
          "min": 0.637,
          "max": 0.697
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.0,
          "percentage": 0.01
        },
        "EVI_statistics": {
          "mean": 0.699,
          "median": 0.699,
          "min": 0.699,
          "max": 0.699
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.06,
            "area_percentage": 0.4,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 3.03,
            "area_percentage": 20.34,
            "zone_number": 2
          },
          "similar": {
            "ha": 8.11,
            "area_percentage": 54.43,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 3.32,
            "area_percentage": 22.28,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.38,
            "area_percentage": 2.55,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-06-15",
      "reference_image_date": "2025-05-31",
      "change_period": 15
    },
    "median_EVI_change": {
      "old_value": 0.67,
      "new_value": 0.606,
      "difference": -0.066
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.03,
          "percentage": 0.2,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 4.93,
          "percentage": 32.79,
          "zone_number": 2
        },
        "no_change": {
          "ha": 10.08,
          "percentage": 67.01,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.0,
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
          "ha": 1.74,
          "percentage": 11.55,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 2.35,
          "percentage": 15.66,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 7.12,
          "percentage": 47.36,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.01,
          "percentage": 13.36,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.82,
          "percentage": 12.07,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.767851382826086 49.092459865119864)",
          "new_value": 0.629,
          "old_value": 0.658,
          "value_difference": -0.029,
          "area_ha": 0.654,
          "category": "major_growth",
          "location": "NE",
          "id": 1
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 1596.712,
      "historical_average": 1600.851
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
          "temperature_mean": 15.429,
          "temperature_min": 9.837,
          "temperature_max": 18.518,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.322,
          "soiltemperature_0to10cm_mean": 16.39,
          "soilmoisture_0to10cm": 0.312,
          "windspeed_mean": 2.951
        },
        {
          "time": "2025-06-12 00:00:00",
          "temperature_mean": 15.171,
          "temperature_min": 7.611,
          "temperature_max": 21.076,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.002,
          "soiltemperature_0to10cm_mean": 15.873,
          "soilmoisture_0to10cm": 0.296,
          "windspeed_mean": 1.584
        },
        {
          "time": "2025-06-13 00:00:00",
          "temperature_mean": 16.578,
          "temperature_min": 9.413,
          "temperature_max": 22.407,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 16.8,
          "soilmoisture_0to10cm": 0.281,
          "windspeed_mean": 2.141
        },
        {
          "time": "2025-06-14 00:00:00",
          "temperature_mean": 17.558,
          "temperature_min": 9.4,
          "temperature_max": 24.3,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 17.484,
          "soilmoisture_0to10cm": 0.268,
          "windspeed_mean": 1.968
        },
        {
          "time": "2025-06-15 00:00:00",
          "temperature_mean": 21.115,
          "temperature_min": 11.8,
          "temperature_max": 28.301,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.096,
          "soiltemperature_0to10cm_mean": 19.505,
          "soilmoisture_0to10cm": 0.255,
          "windspeed_mean": 1.283
        },
        {
          "time": "2025-06-16 00:00:00",
          "temperature_mean": 16.242,
          "temperature_min": 14.315,
          "temperature_max": 18.814,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.996,
          "soiltemperature_0to10cm_mean": 16.949,
          "soilmoisture_0to10cm": 0.281,
          "windspeed_mean": 3.634
        },
        {
          "time": "2025-06-17 00:00:00",
          "temperature_mean": 16.994,
          "temperature_min": 12.611,
          "temperature_max": 21.446,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.681,
          "soiltemperature_0to10cm_mean": 17.004,
          "soilmoisture_0to10cm": 0.282,
          "windspeed_mean": 2.409
        },
        {
          "time": "2025-06-18 00:00:00",
          "temperature_mean": 19.531,
          "temperature_min": 11.683,
          "temperature_max": 25.931,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.6,
          "soiltemperature_0to10cm_mean": 18.929,
          "soilmoisture_0to10cm": 0.266,
          "windspeed_mean": 1.344
        },
        {
          "time": "2025-06-19 00:00:00",
          "temperature_mean": 20.039,
          "temperature_min": 14.801,
          "temperature_max": 24.484,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.267,
          "soiltemperature_0to10cm_mean": 19.588,
          "soilmoisture_0to10cm": 0.25,
          "windspeed_mean": 3.108
        },
        {
          "time": "2025-06-20 00:00:00",
          "temperature_mean": 16.678,
          "temperature_min": 10.391,
          "temperature_max": 21.575,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.013,
          "soiltemperature_0to10cm_mean": 18.257,
          "soilmoisture_0to10cm": 0.236,
          "windspeed_mean": 2.033
        },
        {
          "time": "2025-06-21 00:00:00",
          "temperature_mean": 17.799,
          "temperature_min": 12.167,
          "temperature_max": 22.602,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.023,
          "soiltemperature_0to10cm_mean": 17.974,
          "soilmoisture_0to10cm": 0.224,
          "windspeed_mean": 1.348
        },
        {
          "time": "2025-06-22 00:00:00",
          "temperature_mean": 21.377,
          "temperature_min": 16.102,
          "temperature_max": 27.3,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.021,
          "soiltemperature_0to10cm_mean": 19.537,
          "soilmoisture_0to10cm": 0.212,
          "windspeed_mean": 1.275
        },
        {
          "time": "2025-06-23 00:00:00",
          "temperature_mean": 22.261,
          "temperature_min": 16.911,
          "temperature_max": 29.293,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.636,
          "soiltemperature_0to10cm_mean": 20.485,
          "soilmoisture_0to10cm": 0.211,
          "windspeed_mean": 2.394
        },
        {
          "time": "2025-06-24 00:00:00",
          "temperature_mean": 20.501,
          "temperature_min": 15.645,
          "temperature_max": 25.236,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.323,
          "soiltemperature_0to10cm_mean": 20.194,
          "soilmoisture_0to10cm": 0.236,
          "windspeed_mean": 3.756
        },
        {
          "time": "2025-06-25 00:00:00",
          "temperature_mean": 22.892,
          "temperature_min": 16.015,
          "temperature_max": 28.305,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.168,
          "soiltemperature_0to10cm_mean": 21.615,
          "soilmoisture_0to10cm": 0.219,
          "windspeed_mean": 3.193
        },
        {
          "time": "2025-06-26 00:00:00",
          "temperature_mean": 23.654,
          "temperature_min": 17.047,
          "temperature_max": 31.493,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.598,
          "soiltemperature_0to10cm_mean": 23.105,
          "soilmoisture_0to10cm": 0.219,
          "windspeed_mean": 0.808
        },
        {
          "time": "2025-06-27 00:00:00",
          "temperature_mean": 20.707,
          "temperature_min": 18.121,
          "temperature_max": 25.739,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.545,
          "soiltemperature_0to10cm_mean": 21.185,
          "soilmoisture_0to10cm": 0.277,
          "windspeed_mean": 4.032
        },
        {
          "time": "2025-06-28 00:00:00",
          "temperature_mean": 20.777,
          "temperature_min": 17.018,
          "temperature_max": 24.851,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.588,
          "soiltemperature_0to10cm_mean": 20.726,
          "soilmoisture_0to10cm": 0.258,
          "windspeed_mean": 3.013
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
      "date": "2025-05-27",
      "day_since": 16
    },
    "beginning_of_ripenes": {
      "date": "2025-07-01",
      "day_since": -19
    },
    "harvest": {
      "date": "2025-07-19",
      "day_since": -37
    }
  },
  "timing_of_field_operations": {
    "2025-06-11": {
      "weather_conditions": {
        "temperature_mean": 15.429,
        "temperature_min": 9.837,
        "temperature_max": 18.518,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.322,
        "soiltemperature_0to10cm_mean": 16.39,
        "soilmoisture_0to10cm": 0.312,
        "windspeed_mean": 2.951
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
        "temperature_mean": 15.171,
        "temperature_min": 7.611,
        "temperature_max": 21.076,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.002,
        "soiltemperature_0to10cm_mean": 15.873,
        "soilmoisture_0to10cm": 0.296,
        "windspeed_mean": 1.584
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
        "temperature_mean": 16.578,
        "temperature_min": 9.413,
        "temperature_max": 22.407,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 16.8,
        "soilmoisture_0to10cm": 0.281,
        "windspeed_mean": 2.141
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
        "temperature_mean": 17.558,
        "temperature_min": 9.4,
        "temperature_max": 24.3,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 17.484,
        "soilmoisture_0to10cm": 0.268,
        "windspeed_mean": 1.968
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
        "temperature_mean": 21.115,
        "temperature_min": 11.8,
        "temperature_max": 28.301,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.096,
        "soiltemperature_0to10cm_mean": 19.505,
        "soilmoisture_0to10cm": 0.255,
        "windspeed_mean": 1.283
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
        "temperature_mean": 16.242,
        "temperature_min": 14.315,
        "temperature_max": 18.814,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.996,
        "soiltemperature_0to10cm_mean": 16.949,
        "soilmoisture_0to10cm": 0.281,
        "windspeed_mean": 3.634
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
        "temperature_mean": 16.994,
        "temperature_min": 12.611,
        "temperature_max": 21.446,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.681,
        "soiltemperature_0to10cm_mean": 17.004,
        "soilmoisture_0to10cm": 0.282,
        "windspeed_mean": 2.409
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
        "temperature_mean": 19.531,
        "temperature_min": 11.683,
        "temperature_max": 25.931,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.6,
        "soiltemperature_0to10cm_mean": 18.929,
        "soilmoisture_0to10cm": 0.266,
        "windspeed_mean": 1.344
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
        "temperature_mean": 20.039,
        "temperature_min": 14.801,
        "temperature_max": 24.484,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.267,
        "soiltemperature_0to10cm_mean": 19.588,
        "soilmoisture_0to10cm": 0.25,
        "windspeed_mean": 3.108
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
        "temperature_mean": 16.678,
        "temperature_min": 10.391,
        "temperature_max": 21.575,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.013,
        "soiltemperature_0to10cm_mean": 18.257,
        "soilmoisture_0to10cm": 0.236,
        "windspeed_mean": 2.033
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
        "temperature_mean": 17.799,
        "temperature_min": 12.167,
        "temperature_max": 22.602,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.023,
        "soiltemperature_0to10cm_mean": 17.974,
        "soilmoisture_0to10cm": 0.224,
        "windspeed_mean": 1.348
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
        "temperature_min": 16.102,
        "temperature_max": 27.3,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.021,
        "soiltemperature_0to10cm_mean": 19.537,
        "soilmoisture_0to10cm": 0.212,
        "windspeed_mean": 1.275
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
        "temperature_mean": 22.261,
        "temperature_min": 16.911,
        "temperature_max": 29.293,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.636,
        "soiltemperature_0to10cm_mean": 20.485,
        "soilmoisture_0to10cm": 0.211,
        "windspeed_mean": 2.394
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
        "temperature_mean": 20.501,
        "temperature_min": 15.645,
        "temperature_max": 25.236,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.323,
        "soiltemperature_0to10cm_mean": 20.194,
        "soilmoisture_0to10cm": 0.236,
        "windspeed_mean": 3.756
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
        "temperature_mean": 22.892,
        "temperature_min": 16.015,
        "temperature_max": 28.305,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.168,
        "soiltemperature_0to10cm_mean": 21.615,
        "soilmoisture_0to10cm": 0.219,
        "windspeed_mean": 3.193
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
        "temperature_mean": 23.654,
        "temperature_min": 17.047,
        "temperature_max": 31.493,
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.598,
        "soiltemperature_0to10cm_mean": 23.105,
        "soilmoisture_0to10cm": 0.219,
        "windspeed_mean": 0.808
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
        "temperature_mean": 20.707,
        "temperature_min": 18.121,
        "temperature_max": 25.739,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.545,
        "soiltemperature_0to10cm_mean": 21.185,
        "soilmoisture_0to10cm": 0.277,
        "windspeed_mean": 4.032
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
        "temperature_mean": 20.777,
        "temperature_min": 17.018,
        "temperature_max": 24.851,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.588,
        "soiltemperature_0to10cm_mean": 20.726,
        "soilmoisture_0to10cm": 0.258,
        "windspeed_mean": 3.013
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
  "polygon_wkt": "POLYGON ((15.76379918 49.08622056, 15.76411977 49.08678885, 15.76443687 49.08736724, 15.76484528 49.08810076, 15.76514919 49.08865656, 15.76550714 49.08930644, 15.76597 49.09014187, 15.76637731 49.09088668, 15.76670377 49.09147418, 15.76704511 49.0920952, 15.76748112 49.09288299, 15.76788947 49.09362727, 15.7679785 49.09378923, 15.76833464 49.09372306, 15.76935337 49.09350507, 15.76945682 49.09347681, 15.76948079 49.09345366, 15.76958271 49.09349916, 15.76959404 49.09343679, 15.7693469 49.09235543, 15.76920353 49.09168285, 15.76907794 49.091073, 15.7690196 49.09084798, 15.76894279 49.09069243, 15.76869065 49.09024902, 15.76838292 49.0896939, 15.76716393 49.08747243, 15.76633473 49.08597658, 15.76626792 49.08595345, 15.76619802 49.08594732, 15.76536521 49.08603856, 15.76452021 49.08613266, 15.76432511 49.08615698, 15.76403687 49.08619059, 15.76379918 49.08622056))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
