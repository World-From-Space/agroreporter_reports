// Field data for LAA250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAA250315",
  "metadata": {
    "field_area_ha": 32.334,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 22.68,
      "mean_elevation": 548.73,
      "min_elevation": 533.27,
      "max_elevation": 555.951
    },
    "soil": {
      "bulk_density kg/dm³": 1.33,
      "cation_exchange_capacity cmol(c)/kg": 20.681,
      "clay_particles g/100g (%)": 21.989,
      "sand particles g/100g (%)": 36.342,
      "silt particles g/100g (%)": 41.669,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-02-01": {
      "min": 0.202,
      "max": 0.432,
      "median": 0.306,
      "mean": 0.307,
      "sd": 0.03
    },
    "2025-02-05": {
      "min": 0.241,
      "max": 0.417,
      "median": 0.315,
      "mean": 0.317,
      "sd": 0.026
    },
    "2025-02-11": {
      "min": 0.192,
      "max": 0.384,
      "median": 0.285,
      "mean": 0.286,
      "sd": 0.027
    },
    "2025-02-24": {
      "min": 0.166,
      "max": 0.363,
      "median": 0.26,
      "mean": 0.26,
      "sd": 0.031
    },
    "2025-03-05": {
      "min": 0.226,
      "max": 0.491,
      "median": 0.374,
      "mean": 0.373,
      "sd": 0.027
    },
    "2025-03-07": {
      "min": 0.211,
      "max": 0.443,
      "median": 0.346,
      "mean": 0.344,
      "sd": 0.03
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 31.985,
      "area_percentage": 1.0
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.058,
        "area_percentage": 0.002
      },
      "low_vegetation": {
        "area_ha": 17.527,
        "area_percentage": 0.548
      },
      "medium vegetation": {
        "area_ha": 14.4,
        "area_percentage": 0.45
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
    "evi_median": 0.397,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.07,
          "percentage": 3.35
        },
        "EVI_statistics": {
          "mean": 0.324,
          "median": 0.327,
          "min": 0.254,
          "max": 0.337
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 7.37,
          "percentage": 23.04
        },
        "EVI_statistics": {
          "mean": 0.361,
          "median": 0.363,
          "min": 0.337,
          "max": 0.377
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 15.89,
          "percentage": 49.69
        },
        "EVI_statistics": {
          "mean": 0.397,
          "median": 0.397,
          "min": 0.377,
          "max": 0.416
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 7.14,
          "percentage": 22.32
        },
        "EVI_statistics": {
          "mean": 0.43,
          "median": 0.428,
          "min": 0.416,
          "max": 0.456
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.51,
          "percentage": 1.6
        },
        "EVI_statistics": {
          "mean": 0.467,
          "median": 0.464,
          "min": 0.456,
          "max": 0.508
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 5.36,
            "area_percentage": 17.17,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 7.52,
            "area_percentage": 24.09,
            "zone_number": 2
          },
          "similar": {
            "ha": 6.61,
            "area_percentage": 21.17,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 3.42,
            "area_percentage": 10.95,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 8.31,
            "area_percentage": 26.62,
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
      "old_value": 0.26,
      "new_value": 0.397,
      "difference": 0.135
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
          "ha": 0.04,
          "percentage": 0.14,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 26.41,
          "percentage": 82.56,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 5.53,
          "percentage": 17.3,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.764200245 49.09351282731818)",
          "new_value": 0.383,
          "old_value": 0.223,
          "value_difference": 0.16,
          "area_ha": 0.565,
          "category": "major_growth",
          "location": "N",
          "id": 1
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 1.66,
          "percentage": 5.18,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.53,
          "percentage": 14.16,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 19.49,
          "percentage": 60.93,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.81,
          "percentage": 15.02,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.5,
          "percentage": 4.7,
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
      "date": "2025-04-18",
      "day_since": -35
    },
    "beginning_of_heading": {
      "date": "2025-06-02",
      "day_since": -80
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
  "polygon_wkt": "POLYGON ((15.76367444 49.08623629, 15.76361464 49.08624949, 15.76356244 49.08627994, 15.76350937 49.08633005, 15.76348678 49.08638738, 15.76350515 49.08650964, 15.76353187 49.08667163, 15.76351396 49.08677227, 15.76346855 49.08686775, 15.7632723 49.08712839, 15.76291169 49.08765889, 15.76282477 49.08784451, 15.76280593 49.08797406, 15.7628016 49.08801544, 15.76278129 49.08804099, 15.76272668 49.08804348, 15.76246612 49.08795867, 15.7623597 49.08791983, 15.76209019 49.08782753, 15.76173797 49.08772197, 15.76153148 49.08765889, 15.76137241 49.08760905, 15.76131228 49.08758283, 15.76127279 49.0875279, 15.76126515 49.08747362, 15.76129814 49.08742062, 15.7615046 49.08718715, 15.76162805 49.08705402, 15.76171382 49.08693691, 15.76170745 49.08688723, 15.76129379 49.0867225, 15.76088197 49.08656367, 15.76082287 49.08658171, 15.76077812 49.0866001, 15.7606088 49.08679289, 15.76040767 49.0870081, 15.7603446 49.08700986, 15.76027807 49.08699552, 15.75992887 49.08684543, 15.75959079 49.0867223, 15.75954114 49.08673065, 15.75949824 49.08676899, 15.75951684 49.08701966, 15.75957257 49.08735302, 15.75965366 49.08757755, 15.75969262 49.08778072, 15.75975691 49.08807227, 15.75974025 49.08826549, 15.7597058 49.08839116, 15.75968839 49.08844891, 15.75966583 49.08861086, 15.75968492 49.08877154, 15.75978114 49.08904122, 15.75980775 49.0891375, 15.75995278 49.08950752, 15.76037594 49.09031972, 15.76107 49.09170672, 15.7615325 49.09260504, 15.76173343 49.09298, 15.76197745 49.09340725, 15.76215205 49.09373916, 15.76233547 49.09422321, 15.76246844 49.09433332, 15.76243428 49.09449325, 15.76245913 49.09461055, 15.76247747 49.09469665, 15.76250669 49.09477003, 15.76262264 49.09507119, 15.76262641 49.0950807, 15.76282387 49.09505238, 15.76361218 49.09487797, 15.76377596 49.09482487, 15.76384607 49.0947773, 15.76386487 49.09476686, 15.76388647 49.09475909, 15.76483138 49.09449569, 15.76483539 49.09449463, 15.76524835 49.0943906, 15.76526179 49.09438778, 15.76547696 49.09435144, 15.76584543 49.09426968, 15.76634762 49.09412655, 15.76691947 49.09396198, 15.76692624 49.09396018, 15.76709518 49.09391921, 15.76719433 49.09389516, 15.76746979 49.09382836, 15.76748422 49.0938255, 15.76766319 49.09379781, 15.76768796 49.09379569, 15.76771288 49.09379689, 15.76773586 49.09379956, 15.76785736 49.09381297, 15.76777679 49.09363796, 15.76748303 49.0931103, 15.76725575 49.09269471, 15.76705905 49.09233567, 15.76683087 49.09192097, 15.76656301 49.09143559, 15.76636154 49.09107474, 15.76610346 49.09060785, 15.76582147 49.09009595, 15.7655453 49.08959218, 15.76530891 49.08915862, 15.7650708 49.08873452, 15.7648577 49.08834543, 15.76464614 49.08795599, 15.76417337 49.08710096, 15.76389002 49.0865977, 15.76385755 49.08655561, 15.76377751 49.08641396, 15.76371948 49.08633408, 15.76369721 49.08628573, 15.76367444 49.08623629))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
