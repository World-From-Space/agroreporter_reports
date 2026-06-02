// Field data for LAG250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAG250315",
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
    "2025-02-01": {
      "min": 0.202,
      "max": 0.419,
      "median": 0.31,
      "mean": 0.309,
      "sd": 0.029
    },
    "2025-02-05": {
      "min": 0.237,
      "max": 0.403,
      "median": 0.32,
      "mean": 0.319,
      "sd": 0.027
    },
    "2025-02-11": {
      "min": 0.207,
      "max": 0.371,
      "median": 0.284,
      "mean": 0.283,
      "sd": 0.027
    },
    "2025-02-24": {
      "min": 0.182,
      "max": 0.357,
      "median": 0.263,
      "mean": 0.262,
      "sd": 0.03
    },
    "2025-03-05": {
      "min": 0.268,
      "max": 0.478,
      "median": 0.376,
      "mean": 0.374,
      "sd": 0.028
    },
    "2025-03-07": {
      "min": 0.265,
      "max": 0.435,
      "median": 0.348,
      "mean": 0.347,
      "sd": 0.03
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 15.038,
      "area_percentage": 1.0
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.004,
        "area_percentage": 0.0
      },
      "low_vegetation": {
        "area_ha": 8.282,
        "area_percentage": 0.551
      },
      "medium vegetation": {
        "area_ha": 6.753,
        "area_percentage": 0.449
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
    "evi_median": 0.396,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.4,
          "percentage": 2.66
        },
        "EVI_statistics": {
          "mean": 0.329,
          "median": 0.331,
          "min": 0.296,
          "max": 0.337
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.66,
          "percentage": 24.37
        },
        "EVI_statistics": {
          "mean": 0.359,
          "median": 0.36,
          "min": 0.337,
          "max": 0.376
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 7.14,
          "percentage": 47.5
        },
        "EVI_statistics": {
          "mean": 0.396,
          "median": 0.397,
          "min": 0.376,
          "max": 0.416
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 3.51,
          "percentage": 23.36
        },
        "EVI_statistics": {
          "mean": 0.43,
          "median": 0.428,
          "min": 0.416,
          "max": 0.455
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.32,
          "percentage": 2.11
        },
        "EVI_statistics": {
          "mean": 0.464,
          "median": 0.462,
          "min": 0.456,
          "max": 0.492
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 2.32,
            "area_percentage": 15.57,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 2.45,
            "area_percentage": 16.44,
            "zone_number": 2
          },
          "similar": {
            "ha": 3.67,
            "area_percentage": 24.63,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 2.59,
            "area_percentage": 17.38,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 3.87,
            "area_percentage": 25.97,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-03-15",
      "reference_image_date": "2025-02-24",
      "change_period": 19
    },
    "median_EVI_change": {
      "old_value": 0.263,
      "new_value": 0.396,
      "difference": 0.133
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
          "ha": 0.03,
          "percentage": 0.23,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 12.9,
          "percentage": 85.8,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 2.1,
          "percentage": 13.97,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 0.8,
          "percentage": 5.29,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 2.13,
          "percentage": 14.17,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 9.11,
          "percentage": 60.6,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.31,
          "percentage": 15.38,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.69,
          "percentage": 4.56,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 595.922,
      "historical_average": 632.139
    },
    "accumulated_precipitation_since_seeding": {
      "current": 143.921,
      "historical_mean": 228.395
    },
    "precipitation_summary": {
      "last_3_days": 12.994,
      "last_7_days": 16.782,
      "last_14_days": 17.159,
      "last_30_days": 25.047
    },
    "standardized_precipitation_index": {
      "1_month": -0.977,
      "3_month": -1.605,
      "6_month": -1.47
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-03-11 00:00:00",
          "temperature_mean": 8.006,
          "temperature_min": 3.462,
          "temperature_max": 12.704,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.693,
          "soiltemperature_0to10cm_mean": 6.705,
          "soilmoisture_0to10cm": 0.361,
          "windspeed_mean": 2.104
        },
        {
          "time": "2025-03-12 00:00:00",
          "temperature_mean": 6.901,
          "temperature_min": 0.353,
          "temperature_max": 12.235,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.853,
          "soiltemperature_0to10cm_mean": 5.026,
          "soilmoisture_0to10cm": 0.351,
          "windspeed_mean": 1.12
        },
        {
          "time": "2025-03-13 00:00:00",
          "temperature_mean": 3.585,
          "temperature_min": -0.354,
          "temperature_max": 5.779,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.862,
          "soiltemperature_0to10cm_mean": 3.863,
          "soilmoisture_0to10cm": 0.377,
          "windspeed_mean": 2.084
        },
        {
          "time": "2025-03-14 00:00:00",
          "temperature_mean": 1.863,
          "temperature_min": -1.189,
          "temperature_max": 4.948,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.995,
          "soiltemperature_0to10cm_mean": 2.284,
          "soilmoisture_0to10cm": 0.381,
          "windspeed_mean": 1.314
        },
        {
          "time": "2025-03-15 00:00:00",
          "temperature_mean": 1.777,
          "temperature_min": 0.217,
          "temperature_max": 4.099,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.995,
          "soiltemperature_0to10cm_mean": 2.262,
          "soilmoisture_0to10cm": 0.38,
          "windspeed_mean": 3.061
        },
        {
          "time": "2025-03-16 00:00:00",
          "temperature_mean": 2.68,
          "temperature_min": -0.586,
          "temperature_max": 7.912,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.627,
          "soiltemperature_0to10cm_mean": 3.104,
          "soilmoisture_0to10cm": 0.372,
          "windspeed_mean": 2.199
        },
        {
          "time": "2025-03-17 00:00:00",
          "temperature_mean": 0.097,
          "temperature_min": -3.911,
          "temperature_max": 3.263,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.392,
          "soiltemperature_0to10cm_mean": 1.35,
          "soilmoisture_0to10cm": 0.364,
          "windspeed_mean": 3.363
        },
        {
          "time": "2025-03-18 00:00:00",
          "temperature_mean": -0.936,
          "temperature_min": -4.419,
          "temperature_max": 3.619,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.019,
          "soiltemperature_0to10cm_mean": 0.272,
          "soilmoisture_0to10cm": 0.358,
          "windspeed_mean": 0.285
        },
        {
          "time": "2025-03-19 00:00:00",
          "temperature_mean": 0.503,
          "temperature_min": -4.751,
          "temperature_max": 6.84,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 0.06,
          "soilmoisture_0to10cm": 0.354,
          "windspeed_mean": 2.088
        },
        {
          "time": "2025-03-20 00:00:00",
          "temperature_mean": 2.116,
          "temperature_min": -4.468,
          "temperature_max": 9.068,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 0.72,
          "soilmoisture_0to10cm": 0.352,
          "windspeed_mean": 1.663
        },
        {
          "time": "2025-03-21 00:00:00",
          "temperature_mean": 5.03,
          "temperature_min": -1.169,
          "temperature_max": 11.604,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 1.749,
          "soilmoisture_0to10cm": 0.348,
          "windspeed_mean": 1.979
        },
        {
          "time": "2025-03-22 00:00:00",
          "temperature_mean": 6.688,
          "temperature_min": 2.021,
          "temperature_max": 11.953,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.453,
          "soiltemperature_0to10cm_mean": 4.322,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 3.67
        },
        {
          "time": "2025-03-23 00:00:00",
          "temperature_mean": 8.306,
          "temperature_min": 4.353,
          "temperature_max": 15.053,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.793,
          "soiltemperature_0to10cm_mean": 6.678,
          "soilmoisture_0to10cm": 0.354,
          "windspeed_mean": 1.462
        },
        {
          "time": "2025-03-24 00:00:00",
          "temperature_mean": 6.882,
          "temperature_min": 2.063,
          "temperature_max": 12.32,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.862,
          "soiltemperature_0to10cm_mean": 6.077,
          "soilmoisture_0to10cm": 0.379,
          "windspeed_mean": 1.394
        },
        {
          "time": "2025-03-25 00:00:00",
          "temperature_mean": 8.125,
          "temperature_min": 2.919,
          "temperature_max": 13.71,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.447,
          "soiltemperature_0to10cm_mean": 7.011,
          "soilmoisture_0to10cm": 0.386,
          "windspeed_mean": 0.275
        },
        {
          "time": "2025-03-26 00:00:00",
          "temperature_mean": 7.317,
          "temperature_min": 2.249,
          "temperature_max": 12.483,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.332,
          "soiltemperature_0to10cm_mean": 7.005,
          "soilmoisture_0to10cm": 0.379,
          "windspeed_mean": 2.16
        },
        {
          "time": "2025-03-27 00:00:00",
          "temperature_mean": 6.551,
          "temperature_min": 2.296,
          "temperature_max": 9.528,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.658,
          "soiltemperature_0to10cm_mean": 6.738,
          "soilmoisture_0to10cm": 0.366,
          "windspeed_mean": 2.752
        },
        {
          "time": "2025-03-28 00:00:00",
          "temperature_mean": 7.165,
          "temperature_min": 0.079,
          "temperature_max": 13.001,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.5,
          "soiltemperature_0to10cm_mean": 6.64,
          "soilmoisture_0to10cm": 0.357,
          "windspeed_mean": 1.821
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 167
    },
    "crop_emergence": {
      "date": "2024-10-15",
      "day_since": 150
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-20",
      "day_since": -37
    },
    "beginning_of_heading": {
      "date": "2025-06-03",
      "day_since": -81
    },
    "beginning_of_ripenes": {
      "date": "2025-07-19",
      "day_since": -127
    },
    "harvest": {
      "date": "2025-08-06",
      "day_since": -145
    }
  },
  "timing_of_field_operations": {
    "2025-03-11": {
      "weather_conditions": {
        "temperature_mean": 8.006,
        "temperature_min": 3.462,
        "temperature_max": 12.704,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.693,
        "soiltemperature_0to10cm_mean": 6.705,
        "soilmoisture_0to10cm": 0.361,
        "windspeed_mean": 2.104
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-12": {
      "weather_conditions": {
        "temperature_mean": 6.901,
        "temperature_min": 0.353,
        "temperature_max": 12.235,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.853,
        "soiltemperature_0to10cm_mean": 5.026,
        "soilmoisture_0to10cm": 0.351,
        "windspeed_mean": 1.12
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-13": {
      "weather_conditions": {
        "temperature_mean": 3.585,
        "temperature_min": -0.354,
        "temperature_max": 5.779,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.862,
        "soiltemperature_0to10cm_mean": 3.863,
        "soilmoisture_0to10cm": 0.377,
        "windspeed_mean": 2.084
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-03-14": {
      "weather_conditions": {
        "temperature_mean": 1.863,
        "temperature_min": -1.189,
        "temperature_max": 4.948,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.995,
        "soiltemperature_0to10cm_mean": 2.284,
        "soilmoisture_0to10cm": 0.381,
        "windspeed_mean": 1.314
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-15": {
      "weather_conditions": {
        "temperature_mean": 1.777,
        "temperature_min": 0.217,
        "temperature_max": 4.099,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.995,
        "soiltemperature_0to10cm_mean": 2.262,
        "soilmoisture_0to10cm": 0.38,
        "windspeed_mean": 3.061
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-16": {
      "weather_conditions": {
        "temperature_mean": 2.68,
        "temperature_min": -0.586,
        "temperature_max": 7.912,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.627,
        "soiltemperature_0to10cm_mean": 3.104,
        "soilmoisture_0to10cm": 0.372,
        "windspeed_mean": 2.199
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-17": {
      "weather_conditions": {
        "temperature_mean": 0.097,
        "temperature_min": -3.911,
        "temperature_max": 3.263,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.392,
        "soiltemperature_0to10cm_mean": 1.35,
        "soilmoisture_0to10cm": 0.364,
        "windspeed_mean": 3.363
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-18": {
      "weather_conditions": {
        "temperature_mean": -0.936,
        "temperature_min": -4.419,
        "temperature_max": 3.619,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.019,
        "soiltemperature_0to10cm_mean": 0.272,
        "soilmoisture_0to10cm": 0.358,
        "windspeed_mean": 0.285
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-19": {
      "weather_conditions": {
        "temperature_mean": 0.503,
        "temperature_min": -4.751,
        "temperature_max": 6.84,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 0.06,
        "soilmoisture_0to10cm": 0.354,
        "windspeed_mean": 2.088
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-20": {
      "weather_conditions": {
        "temperature_mean": 2.116,
        "temperature_min": -4.468,
        "temperature_max": 9.068,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 0.72,
        "soilmoisture_0to10cm": 0.352,
        "windspeed_mean": 1.663
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-21": {
      "weather_conditions": {
        "temperature_mean": 5.03,
        "temperature_min": -1.169,
        "temperature_max": 11.604,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 1.749,
        "soilmoisture_0to10cm": 0.348,
        "windspeed_mean": 1.979
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-22": {
      "weather_conditions": {
        "temperature_mean": 6.688,
        "temperature_min": 2.021,
        "temperature_max": 11.953,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.453,
        "soiltemperature_0to10cm_mean": 4.322,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 3.67
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-23": {
      "weather_conditions": {
        "temperature_mean": 8.306,
        "temperature_min": 4.353,
        "temperature_max": 15.053,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.793,
        "soiltemperature_0to10cm_mean": 6.678,
        "soilmoisture_0to10cm": 0.354,
        "windspeed_mean": 1.462
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-03-24": {
      "weather_conditions": {
        "temperature_mean": 6.882,
        "temperature_min": 2.063,
        "temperature_max": 12.32,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.862,
        "soiltemperature_0to10cm_mean": 6.077,
        "soilmoisture_0to10cm": 0.379,
        "windspeed_mean": 1.394
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-25": {
      "weather_conditions": {
        "temperature_mean": 8.125,
        "temperature_min": 2.919,
        "temperature_max": 13.71,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.447,
        "soiltemperature_0to10cm_mean": 7.011,
        "soilmoisture_0to10cm": 0.386,
        "windspeed_mean": 0.275
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-26": {
      "weather_conditions": {
        "temperature_mean": 7.317,
        "temperature_min": 2.249,
        "temperature_max": 12.483,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.332,
        "soiltemperature_0to10cm_mean": 7.005,
        "soilmoisture_0to10cm": 0.379,
        "windspeed_mean": 2.16
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-27": {
      "weather_conditions": {
        "temperature_mean": 6.551,
        "temperature_min": 2.296,
        "temperature_max": 9.528,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.658,
        "soiltemperature_0to10cm_mean": 6.738,
        "soilmoisture_0to10cm": 0.366,
        "windspeed_mean": 2.752
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-28": {
      "weather_conditions": {
        "temperature_mean": 7.165,
        "temperature_min": 0.079,
        "temperature_max": 13.001,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.5,
        "soiltemperature_0to10cm_mean": 6.64,
        "soilmoisture_0to10cm": 0.357,
        "windspeed_mean": 1.821
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
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
  "polygon_wkt": "POLYGON ((15.76379918 49.08622056, 15.76411977 49.08678885, 15.76443687 49.08736724, 15.76484528 49.08810076, 15.76514919 49.08865656, 15.76550714 49.08930644, 15.76597 49.09014187, 15.76637731 49.09088668, 15.76670377 49.09147418, 15.76704511 49.0920952, 15.76748112 49.09288299, 15.76788947 49.09362727, 15.7679785 49.09378923, 15.76833464 49.09372306, 15.76935337 49.09350507, 15.76945682 49.09347681, 15.76948079 49.09345366, 15.76958271 49.09349916, 15.76959404 49.09343679, 15.7693469 49.09235543, 15.76920353 49.09168285, 15.76907794 49.091073, 15.7690196 49.09084798, 15.76894279 49.09069243, 15.76869065 49.09024902, 15.76838292 49.0896939, 15.76716393 49.08747243, 15.76633473 49.08597658, 15.76626792 49.08595345, 15.76619802 49.08594732, 15.76536521 49.08603856, 15.76452021 49.08613266, 15.76432511 49.08615698, 15.76403687 49.08619059, 15.76379918 49.08622056))"
};
