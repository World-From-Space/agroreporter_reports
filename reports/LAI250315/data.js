// Field data for LAI250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAI250315",
  "metadata": {
    "field_area_ha": 31.08,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 19.244,
      "mean_elevation": 542.643,
      "min_elevation": 533.11,
      "max_elevation": 552.354
    },
    "soil": {
      "bulk_density kg/dm³": 1.341,
      "cation_exchange_capacity cmol(c)/kg": 17.758,
      "clay_particles g/100g (%)": 22.538,
      "sand particles g/100g (%)": 34.883,
      "silt particles g/100g (%)": 42.678,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-01-10": {
      "min": 0.198,
      "max": 0.377,
      "median": 0.281,
      "mean": 0.282,
      "sd": 0.022
    },
    "2025-02-01": {
      "min": 0.228,
      "max": 0.441,
      "median": 0.321,
      "mean": 0.323,
      "sd": 0.022
    },
    "2025-02-05": {
      "min": 0.26,
      "max": 0.423,
      "median": 0.33,
      "mean": 0.332,
      "sd": 0.019
    },
    "2025-02-11": {
      "min": 0.208,
      "max": 0.396,
      "median": 0.297,
      "mean": 0.299,
      "sd": 0.02
    },
    "2025-02-24": {
      "min": 0.187,
      "max": 0.352,
      "median": 0.264,
      "mean": 0.264,
      "sd": 0.019
    },
    "2025-03-07": {
      "min": 0.269,
      "max": 0.419,
      "median": 0.35,
      "mean": 0.35,
      "sd": 0.017
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 30.955,
      "area_percentage": 1.0
    },
    "dominant_category": "low vegetation",
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
        "area_ha": 15.979,
        "area_percentage": 0.516
      },
      "medium vegetation": {
        "area_ha": 14.976,
        "area_percentage": 0.484
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
    "evi_median": 0.399,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.12,
          "percentage": 0.39
        },
        "EVI_statistics": {
          "mean": 0.332,
          "median": 0.333,
          "min": 0.312,
          "max": 0.339
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 4.57,
          "percentage": 14.76
        },
        "EVI_statistics": {
          "mean": 0.369,
          "median": 0.371,
          "min": 0.339,
          "max": 0.379
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 21.42,
          "percentage": 69.21
        },
        "EVI_statistics": {
          "mean": 0.399,
          "median": 0.399,
          "min": 0.379,
          "max": 0.419
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.79,
          "percentage": 15.47
        },
        "EVI_statistics": {
          "mean": 0.429,
          "median": 0.427,
          "min": 0.419,
          "max": 0.459
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.05,
          "percentage": 0.17
        },
        "EVI_statistics": {
          "mean": 0.467,
          "median": 0.465,
          "min": 0.459,
          "max": 0.491
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.78,
            "area_percentage": 2.55,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 7.99,
            "area_percentage": 26.17,
            "zone_number": 2
          },
          "similar": {
            "ha": 10.53,
            "area_percentage": 34.49,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 6.43,
            "area_percentage": 21.06,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 4.8,
            "area_percentage": 15.72,
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
      "old_value": 0.264,
      "new_value": 0.399,
      "difference": 0.138
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
          "ha": 0.23,
          "percentage": 0.75,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 23.35,
          "percentage": 75.43,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 7.37,
          "percentage": 23.82,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.774328226977778 49.08886163472111)",
          "new_value": 0.401,
          "old_value": 0.238,
          "value_difference": 0.163,
          "area_ha": 0.823,
          "category": "major_growth",
          "location": "N",
          "id": 1
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 5.89,
          "percentage": 19.01,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.14,
          "percentage": 10.16,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 10.35,
          "percentage": 33.44,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 5.59,
          "percentage": 18.06,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 5.98,
          "percentage": 19.32,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.770963112577778 49.08591701360558)",
          "new_value": 0.383,
          "old_value": 0.284,
          "value_difference": 0.099,
          "area_ha": 4.164,
          "category": "major_decline",
          "location": "W",
          "id": 1
        }
      ]
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
      "date": "2024-10-13",
      "day_since": 152
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-18",
      "day_since": -35
    },
    "beginning_of_heading": {
      "date": "2025-06-03",
      "day_since": -81
    },
    "beginning_of_ripenes": {
      "date": "2025-07-17",
      "day_since": -125
    },
    "harvest": {
      "date": "2025-08-04",
      "day_since": -143
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
  "polygon_wkt": "POLYGON ((15.77607031 49.08312763, 15.7757935 49.0831708, 15.77569681 49.08317756, 15.77556381 49.08317673, 15.77540266 49.08316099, 15.7752743 49.08312857, 15.77493431 49.08298723, 15.77462064 49.08287987, 15.7746179 49.0828787, 15.7693221 49.08627231, 15.76933008 49.08627995, 15.77006061 49.08711747, 15.77024461 49.08732842, 15.77046207 49.08757772, 15.7711309 49.08835719, 15.77132682 49.08858553, 15.77153513 49.08882828, 15.77169978 49.08894461, 15.77187286 49.08904131, 15.77289695 49.08942698, 15.77338117 49.08959779, 15.77525878 49.08855139, 15.77528201 49.08853521, 15.77562692 49.08833587, 15.77683216 49.08762767, 15.77711374 49.087437, 15.77746015 49.08713376, 15.77804847 49.08652788, 15.77846258 49.08603161, 15.77850535 49.08585301, 15.77854861 49.0857012, 15.7785364 49.0854116, 15.77852087 49.08521582, 15.77851519 49.084947, 15.77853251 49.08480178, 15.77861075 49.08455194, 15.77865891 49.08439916, 15.77866964 49.0843207, 15.77866472 49.0842632, 15.7786421 49.08419776, 15.77855939 49.08408814, 15.77847134 49.08399794, 15.77790533 49.08351136, 15.77774359 49.08339086, 15.77740937 49.08329676, 15.77711079 49.0832127, 15.7769685 49.08318381, 15.7768453 49.08316825, 15.77668531 49.0831539, 15.77607031 49.08312763))"
};
