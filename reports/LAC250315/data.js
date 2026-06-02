// Field data for LAC250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAC250315",
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
    "2025-01-10": {
      "min": 0.139,
      "max": 0.44,
      "median": 0.302,
      "mean": 0.304,
      "sd": 0.03
    },
    "2025-02-01": {
      "min": 0.228,
      "max": 0.463,
      "median": 0.346,
      "mean": 0.346,
      "sd": 0.025
    },
    "2025-02-05": {
      "min": 0.222,
      "max": 0.463,
      "median": 0.347,
      "mean": 0.348,
      "sd": 0.022
    },
    "2025-02-11": {
      "min": 0.217,
      "max": 0.454,
      "median": 0.348,
      "mean": 0.349,
      "sd": 0.025
    },
    "2025-03-05": {
      "min": 0.264,
      "max": 0.459,
      "median": 0.359,
      "mean": 0.359,
      "sd": 0.023
    },
    "2025-03-07": {
      "min": 0.24,
      "max": 0.466,
      "median": 0.365,
      "mean": 0.365,
      "sd": 0.025
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 32.158,
      "area_percentage": 1.0
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 2.299,
        "area_percentage": 0.071
      },
      "low_vegetation": {
        "area_ha": 29.604,
        "area_percentage": 0.921
      },
      "medium vegetation": {
        "area_ha": 0.256,
        "area_percentage": 0.008
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
    "evi_median": 0.336,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.78,
          "percentage": 2.44
        },
        "EVI_statistics": {
          "mean": 0.273,
          "median": 0.276,
          "min": 0.231,
          "max": 0.286
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 7.02,
          "percentage": 21.83
        },
        "EVI_statistics": {
          "mean": 0.308,
          "median": 0.309,
          "min": 0.286,
          "max": 0.32
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 16.11,
          "percentage": 50.1
        },
        "EVI_statistics": {
          "mean": 0.336,
          "median": 0.336,
          "min": 0.32,
          "max": 0.353
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 7.24,
          "percentage": 22.53
        },
        "EVI_statistics": {
          "mean": 0.366,
          "median": 0.365,
          "min": 0.353,
          "max": 0.387
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 1.0,
          "percentage": 3.11
        },
        "EVI_statistics": {
          "mean": 0.396,
          "median": 0.394,
          "min": 0.387,
          "max": 0.462
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 2.49,
            "area_percentage": 8.07,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 6.95,
            "area_percentage": 22.53,
            "zone_number": 2
          },
          "similar": {
            "ha": 9.28,
            "area_percentage": 30.08,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 5.9,
            "area_percentage": 19.12,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 6.23,
            "area_percentage": 20.19,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-03-15",
      "reference_image_date": "2025-02-11",
      "change_period": 32
    },
    "median_EVI_change": {
      "old_value": 0.348,
      "new_value": 0.336,
      "difference": -0.012
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
          "ha": 0.01,
          "percentage": 0.04,
          "zone_number": 2
        },
        "no_change": {
          "ha": 32.14,
          "percentage": 99.96,
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
          "ha": 2.91,
          "percentage": 9.05,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.79,
          "percentage": 14.89,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 16.79,
          "percentage": 52.2,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.85,
          "percentage": 15.07,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.82,
          "percentage": 8.78,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 598.572,
      "historical_average": 628.225
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
          "temperature_mean": 7.894,
          "temperature_min": 3.501,
          "temperature_max": 12.513,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.693,
          "soiltemperature_0to10cm_mean": 6.942,
          "soilmoisture_0to10cm": 0.364,
          "windspeed_mean": 2.167
        },
        {
          "time": "2025-03-12 00:00:00",
          "temperature_mean": 6.802,
          "temperature_min": 0.482,
          "temperature_max": 11.981,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.853,
          "soiltemperature_0to10cm_mean": 5.121,
          "soilmoisture_0to10cm": 0.354,
          "windspeed_mean": 1.111
        },
        {
          "time": "2025-03-13 00:00:00",
          "temperature_mean": 3.325,
          "temperature_min": -0.432,
          "temperature_max": 5.132,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.862,
          "soiltemperature_0to10cm_mean": 3.905,
          "soilmoisture_0to10cm": 0.383,
          "windspeed_mean": 2.171
        },
        {
          "time": "2025-03-14 00:00:00",
          "temperature_mean": 1.874,
          "temperature_min": -1.243,
          "temperature_max": 5.007,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.995,
          "soiltemperature_0to10cm_mean": 2.343,
          "soilmoisture_0to10cm": 0.384,
          "windspeed_mean": 1.272
        },
        {
          "time": "2025-03-15 00:00:00",
          "temperature_mean": 1.699,
          "temperature_min": 0.178,
          "temperature_max": 4.066,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.995,
          "soiltemperature_0to10cm_mean": 2.267,
          "soilmoisture_0to10cm": 0.383,
          "windspeed_mean": 3.005
        },
        {
          "time": "2025-03-16 00:00:00",
          "temperature_mean": 2.632,
          "temperature_min": -0.355,
          "temperature_max": 7.792,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.627,
          "soiltemperature_0to10cm_mean": 3.124,
          "soilmoisture_0to10cm": 0.376,
          "windspeed_mean": 2.178
        },
        {
          "time": "2025-03-17 00:00:00",
          "temperature_mean": 0.058,
          "temperature_min": -3.882,
          "temperature_max": 3.165,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.392,
          "soiltemperature_0to10cm_mean": 1.543,
          "soilmoisture_0to10cm": 0.368,
          "windspeed_mean": 3.303
        },
        {
          "time": "2025-03-18 00:00:00",
          "temperature_mean": -0.957,
          "temperature_min": -4.376,
          "temperature_max": 3.602,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.019,
          "soiltemperature_0to10cm_mean": 0.434,
          "soilmoisture_0to10cm": 0.363,
          "windspeed_mean": 0.4
        },
        {
          "time": "2025-03-19 00:00:00",
          "temperature_mean": 0.563,
          "temperature_min": -4.79,
          "temperature_max": 6.9,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 0.355,
          "soilmoisture_0to10cm": 0.359,
          "windspeed_mean": 2.175
        },
        {
          "time": "2025-03-20 00:00:00",
          "temperature_mean": 2.199,
          "temperature_min": -4.583,
          "temperature_max": 9.437,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 1.197,
          "soilmoisture_0to10cm": 0.357,
          "windspeed_mean": 1.695
        },
        {
          "time": "2025-03-21 00:00:00",
          "temperature_mean": 5.177,
          "temperature_min": -1.41,
          "temperature_max": 11.753,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 2.408,
          "soilmoisture_0to10cm": 0.354,
          "windspeed_mean": 2.077
        },
        {
          "time": "2025-03-22 00:00:00",
          "temperature_mean": 6.769,
          "temperature_min": 2.232,
          "temperature_max": 11.824,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.453,
          "soiltemperature_0to10cm_mean": 5.11,
          "soilmoisture_0to10cm": 0.35,
          "windspeed_mean": 3.789
        },
        {
          "time": "2025-03-23 00:00:00",
          "temperature_mean": 8.212,
          "temperature_min": 4.527,
          "temperature_max": 14.848,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.793,
          "soiltemperature_0to10cm_mean": 6.884,
          "soilmoisture_0to10cm": 0.362,
          "windspeed_mean": 1.435
        },
        {
          "time": "2025-03-24 00:00:00",
          "temperature_mean": 6.856,
          "temperature_min": 2.095,
          "temperature_max": 12.033,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.862,
          "soiltemperature_0to10cm_mean": 6.127,
          "soilmoisture_0to10cm": 0.384,
          "windspeed_mean": 1.336
        },
        {
          "time": "2025-03-25 00:00:00",
          "temperature_mean": 8.305,
          "temperature_min": 3.687,
          "temperature_max": 13.684,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.447,
          "soiltemperature_0to10cm_mean": 7.099,
          "soilmoisture_0to10cm": 0.389,
          "windspeed_mean": 0.209
        },
        {
          "time": "2025-03-26 00:00:00",
          "temperature_mean": 7.273,
          "temperature_min": 2.335,
          "temperature_max": 12.284,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.332,
          "soiltemperature_0to10cm_mean": 7.091,
          "soilmoisture_0to10cm": 0.382,
          "windspeed_mean": 2.134
        },
        {
          "time": "2025-03-27 00:00:00",
          "temperature_mean": 6.473,
          "temperature_min": 2.445,
          "temperature_max": 9.372,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.658,
          "soiltemperature_0to10cm_mean": 6.795,
          "soilmoisture_0to10cm": 0.37,
          "windspeed_mean": 2.721
        },
        {
          "time": "2025-03-28 00:00:00",
          "temperature_mean": 7.07,
          "temperature_min": 0.094,
          "temperature_max": 12.911,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.5,
          "soiltemperature_0to10cm_mean": 6.707,
          "soilmoisture_0to10cm": 0.362,
          "windspeed_mean": 1.753
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
      "date": "2025-04-13",
      "day_since": -30
    },
    "beginning_of_heading": {
      "date": "2025-05-28",
      "day_since": -75
    },
    "beginning_of_ripenes": {
      "date": "2025-07-12",
      "day_since": -120
    },
    "harvest": {
      "date": "2025-07-30",
      "day_since": -138
    }
  },
  "timing_of_field_operations": {
    "2025-03-11": {
      "weather_conditions": {
        "temperature_mean": 7.894,
        "temperature_min": 3.501,
        "temperature_max": 12.513,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.693,
        "soiltemperature_0to10cm_mean": 6.942,
        "soilmoisture_0to10cm": 0.364,
        "windspeed_mean": 2.167
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
        "temperature_mean": 6.802,
        "temperature_min": 0.482,
        "temperature_max": 11.981,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.853,
        "soiltemperature_0to10cm_mean": 5.121,
        "soilmoisture_0to10cm": 0.354,
        "windspeed_mean": 1.111
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
        "temperature_mean": 3.325,
        "temperature_min": -0.432,
        "temperature_max": 5.132,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.862,
        "soiltemperature_0to10cm_mean": 3.905,
        "soilmoisture_0to10cm": 0.383,
        "windspeed_mean": 2.171
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
        "temperature_mean": 1.874,
        "temperature_min": -1.243,
        "temperature_max": 5.007,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.995,
        "soiltemperature_0to10cm_mean": 2.343,
        "soilmoisture_0to10cm": 0.384,
        "windspeed_mean": 1.272
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
        "temperature_mean": 1.699,
        "temperature_min": 0.178,
        "temperature_max": 4.066,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.995,
        "soiltemperature_0to10cm_mean": 2.267,
        "soilmoisture_0to10cm": 0.383,
        "windspeed_mean": 3.005
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
        "temperature_mean": 2.632,
        "temperature_min": -0.355,
        "temperature_max": 7.792,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.627,
        "soiltemperature_0to10cm_mean": 3.124,
        "soilmoisture_0to10cm": 0.376,
        "windspeed_mean": 2.178
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
        "temperature_mean": 0.058,
        "temperature_min": -3.882,
        "temperature_max": 3.165,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.392,
        "soiltemperature_0to10cm_mean": 1.543,
        "soilmoisture_0to10cm": 0.368,
        "windspeed_mean": 3.303
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
        "temperature_mean": -0.957,
        "temperature_min": -4.376,
        "temperature_max": 3.602,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.019,
        "soiltemperature_0to10cm_mean": 0.434,
        "soilmoisture_0to10cm": 0.363,
        "windspeed_mean": 0.4
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
        "temperature_mean": 0.563,
        "temperature_min": -4.79,
        "temperature_max": 6.9,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 0.355,
        "soilmoisture_0to10cm": 0.359,
        "windspeed_mean": 2.175
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
        "temperature_mean": 2.199,
        "temperature_min": -4.583,
        "temperature_max": 9.437,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 1.197,
        "soilmoisture_0to10cm": 0.357,
        "windspeed_mean": 1.695
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
        "temperature_mean": 5.177,
        "temperature_min": -1.41,
        "temperature_max": 11.753,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 2.408,
        "soilmoisture_0to10cm": 0.354,
        "windspeed_mean": 2.077
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
        "temperature_mean": 6.769,
        "temperature_min": 2.232,
        "temperature_max": 11.824,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.453,
        "soiltemperature_0to10cm_mean": 5.11,
        "soilmoisture_0to10cm": 0.35,
        "windspeed_mean": 3.789
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
        "temperature_mean": 8.212,
        "temperature_min": 4.527,
        "temperature_max": 14.848,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.793,
        "soiltemperature_0to10cm_mean": 6.884,
        "soilmoisture_0to10cm": 0.362,
        "windspeed_mean": 1.435
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
        "temperature_mean": 6.856,
        "temperature_min": 2.095,
        "temperature_max": 12.033,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.862,
        "soiltemperature_0to10cm_mean": 6.127,
        "soilmoisture_0to10cm": 0.384,
        "windspeed_mean": 1.336
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
        "temperature_mean": 8.305,
        "temperature_min": 3.687,
        "temperature_max": 13.684,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.447,
        "soiltemperature_0to10cm_mean": 7.099,
        "soilmoisture_0to10cm": 0.389,
        "windspeed_mean": 0.209
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
        "temperature_mean": 7.273,
        "temperature_min": 2.335,
        "temperature_max": 12.284,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.332,
        "soiltemperature_0to10cm_mean": 7.091,
        "soilmoisture_0to10cm": 0.382,
        "windspeed_mean": 2.134
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
        "temperature_mean": 6.473,
        "temperature_min": 2.445,
        "temperature_max": 9.372,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.658,
        "soiltemperature_0to10cm_mean": 6.795,
        "soilmoisture_0to10cm": 0.37,
        "windspeed_mean": 2.721
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
        "temperature_mean": 7.07,
        "temperature_min": 0.094,
        "temperature_max": 12.911,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.5,
        "soiltemperature_0to10cm_mean": 6.707,
        "soilmoisture_0to10cm": 0.362,
        "windspeed_mean": 1.753
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
  "polygon_wkt": "POLYGON ((15.73795175 49.1036669, 15.73801437 49.10360716, 15.73808112 49.10356794, 15.73839084 49.10336579, 15.73860962 49.10322052, 15.73874058 49.10307504, 15.73881848 49.10301381, 15.73897782 49.10285467, 15.73901478 49.10280123, 15.73906115 49.10273421, 15.73905249 49.10263186, 15.73899002 49.1025651, 15.73854077 49.10240905, 15.7380238 49.10226632, 15.73793471 49.10227032, 15.73786982 49.10230596, 15.7376933 49.10253558, 15.73765288 49.10255488, 15.73760192 49.1025341, 15.73743608 49.1023629, 15.73725353 49.10212329, 15.7371293 49.10201301, 15.73660062 49.10183376, 15.73498963 49.10136694, 15.7314594 49.1035566, 15.72302755 49.10873424, 15.72337943 49.10892254, 15.72378455 49.10924971, 15.72433879 49.10963662, 15.72464872 49.10988837, 15.72477476 49.10995942, 15.72486192 49.10998186, 15.72494684 49.10997657, 15.72503089 49.10994605, 15.72576281 49.1095142, 15.72587498 49.10945148, 15.72597616 49.10939605, 15.72630565 49.10926893, 15.72636727 49.10923002, 15.72642337 49.10919371, 15.72647705 49.10913684, 15.72661543 49.10888708, 15.7266643 49.10879743, 15.72679892 49.10866123, 15.72740606 49.1082352, 15.72795004 49.10785691, 15.7280588 49.10781007, 15.72865594 49.10765526, 15.72896686 49.10752396, 15.73013024 49.10707574, 15.73094764 49.10684853, 15.73109062 49.10679509, 15.73123101 49.10672586, 15.73128144 49.10667951, 15.73128172 49.10662801, 15.73122348 49.10655254, 15.73102191 49.10640054, 15.73100548 49.10636211, 15.73102757 49.10632945, 15.73107931 49.10631733, 15.73141632 49.10639058, 15.73186779 49.10646711, 15.73202195 49.10645389, 15.73214836 49.10643395, 15.73240346 49.10632049, 15.73264973 49.10617362, 15.73283328 49.10600692, 15.73292965 49.1059347, 15.73338351 49.10582652, 15.73396121 49.10566185, 15.73412297 49.10559941, 15.73502116 49.10520546, 15.73511759 49.10515327, 15.73525099 49.10504964, 15.73549159 49.10488019, 15.73557524 49.10484511, 15.73588276 49.10473979, 15.73623172 49.10461146, 15.73653704 49.10450687, 15.73691902 49.10433737, 15.73726494 49.10417167, 15.73746323 49.10406506, 15.73755705 49.10402066, 15.73795175 49.1036669))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
