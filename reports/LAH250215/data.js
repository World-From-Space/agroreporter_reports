// Field data for LAH250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAH250215",
  "metadata": {
    "field_area_ha": 20.96,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lesonice"
    },
    "terrain": {
      "variability": 10.845,
      "mean_elevation": 538.915,
      "min_elevation": 532.668,
      "max_elevation": 543.513
    },
    "soil": {
      "bulk_density kg/dm³": 1.334,
      "cation_exchange_capacity cmol(c)/kg": 19.774,
      "clay_particles g/100g (%)": 20.385,
      "sand particles g/100g (%)": 39.575,
      "silt particles g/100g (%)": 40.056,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2024-12-21": {
      "min": 0.181,
      "max": 0.431,
      "median": 0.292,
      "mean": 0.294,
      "sd": 0.026
    },
    "2024-12-26": {
      "min": 0.202,
      "max": 0.449,
      "median": 0.309,
      "mean": 0.31,
      "sd": 0.025
    },
    "2024-12-30": {
      "min": 0.16,
      "max": 0.45,
      "median": 0.285,
      "mean": 0.288,
      "sd": 0.03
    },
    "2025-01-10": {
      "min": 0.127,
      "max": 0.429,
      "median": 0.28,
      "mean": 0.28,
      "sd": 0.028
    },
    "2025-02-01": {
      "min": 0.186,
      "max": 0.428,
      "median": 0.323,
      "mean": 0.323,
      "sd": 0.026
    },
    "2025-02-05": {
      "min": 0.223,
      "max": 0.402,
      "median": 0.321,
      "mean": 0.321,
      "sd": 0.021
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 20.921,
      "area_percentage": 0.996
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.089,
        "area_percentage": 0.004
      },
      "very_low_vegetation": {
        "area_ha": 16.201,
        "area_percentage": 0.771
      },
      "low_vegetation": {
        "area_ha": 4.72,
        "area_percentage": 0.225
      },
      "medium vegetation": {
        "area_ha": 0.0,
        "area_percentage": 0.0
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
    "evi_median": 0.283,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.71,
          "percentage": 3.37
        },
        "EVI_statistics": {
          "mean": 0.221,
          "median": 0.225,
          "min": 0.154,
          "max": 0.241
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 4.1,
          "percentage": 19.5
        },
        "EVI_statistics": {
          "mean": 0.26,
          "median": 0.262,
          "min": 0.241,
          "max": 0.269
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 10.82,
          "percentage": 51.49
        },
        "EVI_statistics": {
          "mean": 0.283,
          "median": 0.283,
          "min": 0.269,
          "max": 0.298
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.74,
          "percentage": 22.56
        },
        "EVI_statistics": {
          "mean": 0.308,
          "median": 0.307,
          "min": 0.298,
          "max": 0.326
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.65,
          "percentage": 3.08
        },
        "EVI_statistics": {
          "mean": 0.337,
          "median": 0.335,
          "min": 0.326,
          "max": 0.375
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 2.55,
            "area_percentage": 12.76,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 3.74,
            "area_percentage": 18.72,
            "zone_number": 2
          },
          "similar": {
            "ha": 6.47,
            "area_percentage": 32.38,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 3.62,
            "area_percentage": 18.12,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 3.6,
            "area_percentage": 18.02,
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
      "old_value": 0.323,
      "new_value": 0.283,
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
          "ha": 0.38,
          "percentage": 1.79,
          "zone_number": 2
        },
        "no_change": {
          "ha": 20.63,
          "percentage": 98.21,
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
          "ha": 2.44,
          "percentage": 11.6,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.11,
          "percentage": 14.8,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 9.87,
          "percentage": 46.99,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.14,
          "percentage": 14.93,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.46,
          "percentage": 11.69,
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
      "date": "2024-10-09",
      "day_since": 127
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-13",
      "day_since": -59
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
  "polygon_wkt": "POLYGON ((15.74656123 49.09105737, 15.74527726 49.09188699, 15.74524083 49.09187731, 15.74475229 49.09147901, 15.74450925 49.09128865, 15.74421604 49.09148183, 15.74380554 49.09175228, 15.74319148 49.09214779, 15.74153282 49.09324274, 15.73935076 49.0946898, 15.73769565 49.09577845, 15.73751776 49.09589303, 15.73693981 49.09626529, 15.73674079 49.09639347, 15.73671591 49.09649205, 15.73666774 49.09652177, 15.73652001 49.09657331, 15.73578661 49.0970348, 15.73518211 49.09745276, 15.73513444 49.09749313, 15.73517488 49.09753091, 15.73522514 49.09756967, 15.73543151 49.09764778, 15.73553449 49.09765463, 15.73562933 49.09764129, 15.73707989 49.09724587, 15.73762284 49.09709533, 15.73762478 49.0970948, 15.73879024 49.09678689, 15.73959905 49.09653545, 15.739709 49.09647471, 15.73974596 49.09644021, 15.73995339 49.09634548, 15.74002054 49.09631001, 15.74069057 49.09612181, 15.74099229 49.09601057, 15.74145572 49.09588942, 15.74173511 49.0958018, 15.74205561 49.09569296, 15.74233851 49.09554853, 15.74258815 49.0953988, 15.74309073 49.09496683, 15.74332368 49.09461528, 15.74340045 49.0945724, 15.74350435 49.09452442, 15.74370577 49.09452104, 15.74393476 49.09450325, 15.7440976 49.09448538, 15.74426319 49.09445239, 15.74440576 49.09441759, 15.74454249 49.0943721, 15.74483744 49.09421477, 15.74561845 49.09368416, 15.74578279 49.09357777, 15.74611506 49.0933512, 15.74631266 49.09319012, 15.74649533 49.09296719, 15.746596 49.09287639, 15.74673333 49.09280386, 15.7470317 49.09264979, 15.74734517 49.09244788, 15.74742355 49.09235947, 15.74746172 49.09227812, 15.74746292 49.09218284, 15.74741053 49.09205674, 15.74742529 49.09197577, 15.74748962 49.09188606, 15.74753139 49.09182406, 15.7476123 49.09177051, 15.74764833 49.09175298, 15.74772529 49.0917111, 15.74782281 49.09165646, 15.74790156 49.09161472, 15.74800773 49.09157274, 15.74825433 49.09144036, 15.74868066 49.09120581, 15.74879833 49.09111537, 15.74888513 49.09100206, 15.74897269 49.09086325, 15.74895001 49.09076459, 15.74864009 49.09040369, 15.74825946 49.08996043, 15.74672311 49.09095277, 15.74656123 49.09105737))"
};
