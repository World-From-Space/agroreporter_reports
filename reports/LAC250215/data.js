// Field data for LAC250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAC250215",
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
    "2024-12-26": {
      "min": 0.167,
      "max": 0.492,
      "median": 0.334,
      "mean": 0.335,
      "sd": 0.029
    },
    "2024-12-29": {
      "min": 0.142,
      "max": 0.432,
      "median": 0.299,
      "mean": 0.3,
      "sd": 0.03
    },
    "2024-12-30": {
      "min": 0.141,
      "max": 0.522,
      "median": 0.314,
      "mean": 0.315,
      "sd": 0.032
    },
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
        "area_ha": 0.893,
        "area_percentage": 0.028
      },
      "low_vegetation": {
        "area_ha": 30.595,
        "area_percentage": 0.951
      },
      "medium vegetation": {
        "area_ha": 0.67,
        "area_percentage": 0.021
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
    "evi_median": 0.348,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.71,
          "percentage": 2.21
        },
        "EVI_statistics": {
          "mean": 0.282,
          "median": 0.285,
          "min": 0.217,
          "max": 0.296
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 5.92,
          "percentage": 18.42
        },
        "EVI_statistics": {
          "mean": 0.32,
          "median": 0.322,
          "min": 0.296,
          "max": 0.33
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 17.67,
          "percentage": 54.95
        },
        "EVI_statistics": {
          "mean": 0.347,
          "median": 0.347,
          "min": 0.33,
          "max": 0.365
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 7.19,
          "percentage": 22.36
        },
        "EVI_statistics": {
          "mean": 0.379,
          "median": 0.378,
          "min": 0.365,
          "max": 0.4
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.66,
          "percentage": 2.07
        },
        "EVI_statistics": {
          "mean": 0.409,
          "median": 0.406,
          "min": 0.4,
          "max": 0.454
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 1.91,
            "area_percentage": 6.19,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 7.37,
            "area_percentage": 23.89,
            "zone_number": 2
          },
          "similar": {
            "ha": 9.16,
            "area_percentage": 29.69,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 5.73,
            "area_percentage": 18.57,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 6.68,
            "area_percentage": 21.65,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-02-15",
      "reference_image_date": "2025-02-01",
      "change_period": 14
    },
    "median_EVI_change": {
      "old_value": 0.346,
      "new_value": 0.348,
      "difference": 0.003
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
          "ha": 0.0,
          "percentage": 0.0,
          "zone_number": 2
        },
        "no_change": {
          "ha": 32.16,
          "percentage": 100.0,
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
          "ha": 3.01,
          "percentage": 9.35,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.71,
          "percentage": 14.63,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 16.56,
          "percentage": 51.51,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.88,
          "percentage": 15.17,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 3.0,
          "percentage": 9.34,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 513.093,
      "historical_average": 550.271
    },
    "accumulated_precipitation_since_seeding": {
      "current": 123.251,
      "historical_mean": 193.618
    },
    "precipitation_summary": {
      "last_3_days": 8.24,
      "last_7_days": 8.367,
      "last_14_days": 9.071,
      "last_30_days": 13.884
    },
    "standardized_precipitation_index": {
      "1_month": -1.786,
      "3_month": -1.376,
      "6_month": 0.796
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-02-11 00:00:00",
          "temperature_mean": -0.368,
          "temperature_min": -3.083,
          "temperature_max": 2.827,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.6,
          "soiltemperature_0to10cm_mean": -0.201,
          "soilmoisture_0to10cm": 0.35,
          "windspeed_mean": 3.704
        },
        {
          "time": "2025-02-12 00:00:00",
          "temperature_mean": -2.009,
          "temperature_min": -2.878,
          "temperature_max": -0.892,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.949,
          "soiltemperature_0to10cm_mean": -0.229,
          "soilmoisture_0to10cm": 0.348,
          "windspeed_mean": 3.799
        },
        {
          "time": "2025-02-13 00:00:00",
          "temperature_mean": -1.359,
          "temperature_min": -2.862,
          "temperature_max": 0.446,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.999,
          "soiltemperature_0to10cm_mean": -0.42,
          "soilmoisture_0to10cm": 0.357,
          "windspeed_mean": 1.814
        },
        {
          "time": "2025-02-14 00:00:00",
          "temperature_mean": -2.612,
          "temperature_min": -5.436,
          "temperature_max": -0.834,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.948,
          "soiltemperature_0to10cm_mean": -0.501,
          "soilmoisture_0to10cm": 0.362,
          "windspeed_mean": 3.126
        },
        {
          "time": "2025-02-15 00:00:00",
          "temperature_mean": -4.766,
          "temperature_min": -9.876,
          "temperature_max": -1.504,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.603,
          "soiltemperature_0to10cm_mean": -0.925,
          "soilmoisture_0to10cm": 0.357,
          "windspeed_mean": 1.109
        },
        {
          "time": "2025-02-16 00:00:00",
          "temperature_mean": -4.557,
          "temperature_min": -8.492,
          "temperature_max": -1.591,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.853,
          "soiltemperature_0to10cm_mean": -1.188,
          "soilmoisture_0to10cm": 0.355,
          "windspeed_mean": 1.664
        },
        {
          "time": "2025-02-17 00:00:00",
          "temperature_mean": -6.888,
          "temperature_min": -11.024,
          "temperature_max": -2.592,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.642,
          "soiltemperature_0to10cm_mean": -1.437,
          "soilmoisture_0to10cm": 0.352,
          "windspeed_mean": 1.557
        },
        {
          "time": "2025-02-18 00:00:00",
          "temperature_mean": -5.831,
          "temperature_min": -9.898,
          "temperature_max": -1.453,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.533,
          "soiltemperature_0to10cm_mean": -1.575,
          "soilmoisture_0to10cm": 0.352,
          "windspeed_mean": 1.591
        },
        {
          "time": "2025-02-19 00:00:00",
          "temperature_mean": -5.618,
          "temperature_min": -12.597,
          "temperature_max": -1.102,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": -1.878,
          "soilmoisture_0to10cm": 0.351,
          "windspeed_mean": 2.471
        },
        {
          "time": "2025-02-20 00:00:00",
          "temperature_mean": -4.55,
          "temperature_min": -8.93,
          "temperature_max": 0.717,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.091,
          "soiltemperature_0to10cm_mean": -1.653,
          "soilmoisture_0to10cm": 0.35,
          "windspeed_mean": 2.624
        },
        {
          "time": "2025-02-21 00:00:00",
          "temperature_mean": -2.273,
          "temperature_min": -6.874,
          "temperature_max": 1.957,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.43,
          "soiltemperature_0to10cm_mean": -1.283,
          "soilmoisture_0to10cm": 0.349,
          "windspeed_mean": 2.894
        },
        {
          "time": "2025-02-22 00:00:00",
          "temperature_mean": -1.796,
          "temperature_min": -4.488,
          "temperature_max": 2.233,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.039,
          "soiltemperature_0to10cm_mean": -1.013,
          "soilmoisture_0to10cm": 0.348,
          "windspeed_mean": 3.657
        },
        {
          "time": "2025-02-23 00:00:00",
          "temperature_mean": 0.008,
          "temperature_min": -4.873,
          "temperature_max": 4.368,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.903,
          "soiltemperature_0to10cm_mean": -0.935,
          "soilmoisture_0to10cm": 0.354,
          "windspeed_mean": 0.288
        },
        {
          "time": "2025-02-24 00:00:00",
          "temperature_mean": 3.558,
          "temperature_min": -1.246,
          "temperature_max": 10.602,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.259,
          "soiltemperature_0to10cm_mean": -0.182,
          "soilmoisture_0to10cm": 0.371,
          "windspeed_mean": 0.752
        },
        {
          "time": "2025-02-25 00:00:00",
          "temperature_mean": 1.918,
          "temperature_min": -0.78,
          "temperature_max": 4.237,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.998,
          "soiltemperature_0to10cm_mean": 0.274,
          "soilmoisture_0to10cm": 0.373,
          "windspeed_mean": 2.247
        },
        {
          "time": "2025-02-26 00:00:00",
          "temperature_mean": 4.419,
          "temperature_min": 2.171,
          "temperature_max": 8.766,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.993,
          "soiltemperature_0to10cm_mean": 1.765,
          "soilmoisture_0to10cm": 0.376,
          "windspeed_mean": 0.666
        },
        {
          "time": "2025-02-27 00:00:00",
          "temperature_mean": 3.495,
          "temperature_min": 0.252,
          "temperature_max": 7.182,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.889,
          "soiltemperature_0to10cm_mean": 1.478,
          "soilmoisture_0to10cm": 0.372,
          "windspeed_mean": 1.412
        },
        {
          "time": "2025-02-28 00:00:00",
          "temperature_mean": 1.795,
          "temperature_min": -2.934,
          "temperature_max": 6.152,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.437,
          "soiltemperature_0to10cm_mean": 0.976,
          "soilmoisture_0to10cm": 0.369,
          "windspeed_mean": 2.507
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 138
    },
    "crop_emergence": {
      "date": "2024-10-08",
      "day_since": 128
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-12",
      "day_since": -58
    },
    "beginning_of_heading": {
      "date": "2025-05-26",
      "day_since": -102
    },
    "beginning_of_ripenes": {
      "date": "2025-07-08",
      "day_since": -145
    },
    "harvest": {
      "date": "2025-07-26",
      "day_since": -163
    }
  },
  "timing_of_field_operations": {
    "2025-02-11": {
      "weather_conditions": {
        "temperature_mean": -0.368,
        "temperature_min": -3.083,
        "temperature_max": 2.827,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.6,
        "soiltemperature_0to10cm_mean": -0.201,
        "soilmoisture_0to10cm": 0.35,
        "windspeed_mean": 3.704
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
    "2025-02-12": {
      "weather_conditions": {
        "temperature_mean": -2.009,
        "temperature_min": -2.878,
        "temperature_max": -0.892,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.949,
        "soiltemperature_0to10cm_mean": -0.229,
        "soilmoisture_0to10cm": 0.348,
        "windspeed_mean": 3.799
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
    "2025-02-13": {
      "weather_conditions": {
        "temperature_mean": -1.359,
        "temperature_min": -2.862,
        "temperature_max": 0.446,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.999,
        "soiltemperature_0to10cm_mean": -0.42,
        "soilmoisture_0to10cm": 0.357,
        "windspeed_mean": 1.814
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
    "2025-02-14": {
      "weather_conditions": {
        "temperature_mean": -2.612,
        "temperature_min": -5.436,
        "temperature_max": -0.834,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.948,
        "soiltemperature_0to10cm_mean": -0.501,
        "soilmoisture_0to10cm": 0.362,
        "windspeed_mean": 3.126
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
    "2025-02-15": {
      "weather_conditions": {
        "temperature_mean": -4.766,
        "temperature_min": -9.876,
        "temperature_max": -1.504,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.603,
        "soiltemperature_0to10cm_mean": -0.925,
        "soilmoisture_0to10cm": 0.357,
        "windspeed_mean": 1.109
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
    "2025-02-16": {
      "weather_conditions": {
        "temperature_mean": -4.557,
        "temperature_min": -8.492,
        "temperature_max": -1.591,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.853,
        "soiltemperature_0to10cm_mean": -1.188,
        "soilmoisture_0to10cm": 0.355,
        "windspeed_mean": 1.664
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
    "2025-02-17": {
      "weather_conditions": {
        "temperature_mean": -6.888,
        "temperature_min": -11.024,
        "temperature_max": -2.592,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.642,
        "soiltemperature_0to10cm_mean": -1.437,
        "soilmoisture_0to10cm": 0.352,
        "windspeed_mean": 1.557
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
    "2025-02-18": {
      "weather_conditions": {
        "temperature_mean": -5.831,
        "temperature_min": -9.898,
        "temperature_max": -1.453,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.533,
        "soiltemperature_0to10cm_mean": -1.575,
        "soilmoisture_0to10cm": 0.352,
        "windspeed_mean": 1.591
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
    "2025-02-19": {
      "weather_conditions": {
        "temperature_mean": -5.618,
        "temperature_min": -12.597,
        "temperature_max": -1.102,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": -1.878,
        "soilmoisture_0to10cm": 0.351,
        "windspeed_mean": 2.471
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
    "2025-02-20": {
      "weather_conditions": {
        "temperature_mean": -4.55,
        "temperature_min": -8.93,
        "temperature_max": 0.717,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.091,
        "soiltemperature_0to10cm_mean": -1.653,
        "soilmoisture_0to10cm": 0.35,
        "windspeed_mean": 2.624
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
    "2025-02-21": {
      "weather_conditions": {
        "temperature_mean": -2.273,
        "temperature_min": -6.874,
        "temperature_max": 1.957,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.43,
        "soiltemperature_0to10cm_mean": -1.283,
        "soilmoisture_0to10cm": 0.349,
        "windspeed_mean": 2.894
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
    "2025-02-22": {
      "weather_conditions": {
        "temperature_mean": -1.796,
        "temperature_min": -4.488,
        "temperature_max": 2.233,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.039,
        "soiltemperature_0to10cm_mean": -1.013,
        "soilmoisture_0to10cm": 0.348,
        "windspeed_mean": 3.657
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
    "2025-02-23": {
      "weather_conditions": {
        "temperature_mean": 0.008,
        "temperature_min": -4.873,
        "temperature_max": 4.368,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.903,
        "soiltemperature_0to10cm_mean": -0.935,
        "soilmoisture_0to10cm": 0.354,
        "windspeed_mean": 0.288
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
    "2025-02-24": {
      "weather_conditions": {
        "temperature_mean": 3.558,
        "temperature_min": -1.246,
        "temperature_max": 10.602,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.259,
        "soiltemperature_0to10cm_mean": -0.182,
        "soilmoisture_0to10cm": 0.371,
        "windspeed_mean": 0.752
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
    "2025-02-25": {
      "weather_conditions": {
        "temperature_mean": 1.918,
        "temperature_min": -0.78,
        "temperature_max": 4.237,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.998,
        "soiltemperature_0to10cm_mean": 0.274,
        "soilmoisture_0to10cm": 0.373,
        "windspeed_mean": 2.247
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
    "2025-02-26": {
      "weather_conditions": {
        "temperature_mean": 4.419,
        "temperature_min": 2.171,
        "temperature_max": 8.766,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.993,
        "soiltemperature_0to10cm_mean": 1.765,
        "soilmoisture_0to10cm": 0.376,
        "windspeed_mean": 0.666
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
    "2025-02-27": {
      "weather_conditions": {
        "temperature_mean": 3.495,
        "temperature_min": 0.252,
        "temperature_max": 7.182,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.889,
        "soiltemperature_0to10cm_mean": 1.478,
        "soilmoisture_0to10cm": 0.372,
        "windspeed_mean": 1.412
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
    "2025-02-28": {
      "weather_conditions": {
        "temperature_mean": 1.795,
        "temperature_min": -2.934,
        "temperature_max": 6.152,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.437,
        "soiltemperature_0to10cm_mean": 0.976,
        "soilmoisture_0to10cm": 0.369,
        "windspeed_mean": 2.507
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
  "polygon_wkt": "POLYGON ((15.73795175 49.1036669, 15.73801437 49.10360716, 15.73808112 49.10356794, 15.73839084 49.10336579, 15.73860962 49.10322052, 15.73874058 49.10307504, 15.73881848 49.10301381, 15.73897782 49.10285467, 15.73901478 49.10280123, 15.73906115 49.10273421, 15.73905249 49.10263186, 15.73899002 49.1025651, 15.73854077 49.10240905, 15.7380238 49.10226632, 15.73793471 49.10227032, 15.73786982 49.10230596, 15.7376933 49.10253558, 15.73765288 49.10255488, 15.73760192 49.1025341, 15.73743608 49.1023629, 15.73725353 49.10212329, 15.7371293 49.10201301, 15.73660062 49.10183376, 15.73498963 49.10136694, 15.7314594 49.1035566, 15.72302755 49.10873424, 15.72337943 49.10892254, 15.72378455 49.10924971, 15.72433879 49.10963662, 15.72464872 49.10988837, 15.72477476 49.10995942, 15.72486192 49.10998186, 15.72494684 49.10997657, 15.72503089 49.10994605, 15.72576281 49.1095142, 15.72587498 49.10945148, 15.72597616 49.10939605, 15.72630565 49.10926893, 15.72636727 49.10923002, 15.72642337 49.10919371, 15.72647705 49.10913684, 15.72661543 49.10888708, 15.7266643 49.10879743, 15.72679892 49.10866123, 15.72740606 49.1082352, 15.72795004 49.10785691, 15.7280588 49.10781007, 15.72865594 49.10765526, 15.72896686 49.10752396, 15.73013024 49.10707574, 15.73094764 49.10684853, 15.73109062 49.10679509, 15.73123101 49.10672586, 15.73128144 49.10667951, 15.73128172 49.10662801, 15.73122348 49.10655254, 15.73102191 49.10640054, 15.73100548 49.10636211, 15.73102757 49.10632945, 15.73107931 49.10631733, 15.73141632 49.10639058, 15.73186779 49.10646711, 15.73202195 49.10645389, 15.73214836 49.10643395, 15.73240346 49.10632049, 15.73264973 49.10617362, 15.73283328 49.10600692, 15.73292965 49.1059347, 15.73338351 49.10582652, 15.73396121 49.10566185, 15.73412297 49.10559941, 15.73502116 49.10520546, 15.73511759 49.10515327, 15.73525099 49.10504964, 15.73549159 49.10488019, 15.73557524 49.10484511, 15.73588276 49.10473979, 15.73623172 49.10461146, 15.73653704 49.10450687, 15.73691902 49.10433737, 15.73726494 49.10417167, 15.73746323 49.10406506, 15.73755705 49.10402066, 15.73795175 49.1036669))"
};
