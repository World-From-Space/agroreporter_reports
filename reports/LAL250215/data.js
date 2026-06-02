// Field data for LAL250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAL250215",
  "metadata": {
    "field_area_ha": 27.898,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 22.617,
      "mean_elevation": 548.196,
      "min_elevation": 533.245,
      "max_elevation": 555.863
    },
    "soil": {
      "bulk_density kg/dm³": 1.337,
      "cation_exchange_capacity cmol(c)/kg": 20.924,
      "clay_particles g/100g (%)": 22.869,
      "sand particles g/100g (%)": 38.655,
      "silt particles g/100g (%)": 38.476,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2024-12-26": {
      "min": 0.171,
      "max": 0.497,
      "median": 0.291,
      "mean": 0.292,
      "sd": 0.034
    },
    "2024-12-30": {
      "min": 0.141,
      "max": 0.559,
      "median": 0.283,
      "mean": 0.284,
      "sd": 0.04
    },
    "2025-01-10": {
      "min": 0.124,
      "max": 0.48,
      "median": 0.272,
      "mean": 0.274,
      "sd": 0.037
    },
    "2025-02-01": {
      "min": 0.172,
      "max": 0.529,
      "median": 0.31,
      "mean": 0.312,
      "sd": 0.031
    },
    "2025-02-03": {
      "min": 0.136,
      "max": 0.468,
      "median": 0.261,
      "mean": 0.263,
      "sd": 0.032
    },
    "2025-02-05": {
      "min": 0.215,
      "max": 0.489,
      "median": 0.32,
      "mean": 0.321,
      "sd": 0.027
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 27.289,
      "area_percentage": 0.995
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.147,
        "area_percentage": 0.005
      },
      "very_low_vegetation": {
        "area_ha": 19.952,
        "area_percentage": 0.727
      },
      "low_vegetation": {
        "area_ha": 7.276,
        "area_percentage": 0.265
      },
      "medium vegetation": {
        "area_ha": 0.06,
        "area_percentage": 0.002
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
    "evi_median": 0.281,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.85,
          "percentage": 6.74
        },
        "EVI_statistics": {
          "mean": 0.223,
          "median": 0.226,
          "min": 0.171,
          "max": 0.239
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 6.3,
          "percentage": 22.96
        },
        "EVI_statistics": {
          "mean": 0.255,
          "median": 0.256,
          "min": 0.239,
          "max": 0.267
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 10.74,
          "percentage": 39.15
        },
        "EVI_statistics": {
          "mean": 0.281,
          "median": 0.281,
          "min": 0.267,
          "max": 0.295
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 6.14,
          "percentage": 22.37
        },
        "EVI_statistics": {
          "mean": 0.309,
          "median": 0.308,
          "min": 0.295,
          "max": 0.323
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 2.41,
          "percentage": 8.79
        },
        "EVI_statistics": {
          "mean": 0.338,
          "median": 0.332,
          "min": 0.323,
          "max": 0.444
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 5.37,
            "area_percentage": 19.68,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.12,
            "area_percentage": 18.77,
            "zone_number": 2
          },
          "similar": {
            "ha": 5.49,
            "area_percentage": 20.12,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 4.24,
            "area_percentage": 15.54,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 7.06,
            "area_percentage": 25.88,
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
      "old_value": 0.31,
      "new_value": 0.281,
      "difference": -0.03
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
          "ha": 0.16,
          "percentage": 0.59,
          "zone_number": 2
        },
        "no_change": {
          "ha": 27.27,
          "percentage": 99.41,
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
          "percentage": 6.33,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.02,
          "percentage": 14.64,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 15.89,
          "percentage": 57.92,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.12,
          "percentage": 15.0,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.67,
          "percentage": 6.1,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 511.367,
      "historical_average": 553.292
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
          "temperature_mean": -0.374,
          "temperature_min": -3.213,
          "temperature_max": 2.924,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.6,
          "soiltemperature_0to10cm_mean": -0.269,
          "soilmoisture_0to10cm": 0.348,
          "windspeed_mean": 3.561
        },
        {
          "time": "2025-02-12 00:00:00",
          "temperature_mean": -1.963,
          "temperature_min": -2.827,
          "temperature_max": -0.804,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.949,
          "soiltemperature_0to10cm_mean": -0.25,
          "soilmoisture_0to10cm": 0.346,
          "windspeed_mean": 3.802
        },
        {
          "time": "2025-02-13 00:00:00",
          "temperature_mean": -1.471,
          "temperature_min": -2.861,
          "temperature_max": 0.108,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.999,
          "soiltemperature_0to10cm_mean": -0.436,
          "soilmoisture_0to10cm": 0.353,
          "windspeed_mean": 1.886
        },
        {
          "time": "2025-02-14 00:00:00",
          "temperature_mean": -2.608,
          "temperature_min": -5.674,
          "temperature_max": -0.689,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.948,
          "soiltemperature_0to10cm_mean": -0.52,
          "soilmoisture_0to10cm": 0.356,
          "windspeed_mean": 3.204
        },
        {
          "time": "2025-02-15 00:00:00",
          "temperature_mean": -4.948,
          "temperature_min": -10.69,
          "temperature_max": -1.503,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.603,
          "soiltemperature_0to10cm_mean": -0.963,
          "soilmoisture_0to10cm": 0.353,
          "windspeed_mean": 1.182
        },
        {
          "time": "2025-02-16 00:00:00",
          "temperature_mean": -4.68,
          "temperature_min": -8.88,
          "temperature_max": -1.534,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.853,
          "soiltemperature_0to10cm_mean": -1.235,
          "soilmoisture_0to10cm": 0.351,
          "windspeed_mean": 1.618
        },
        {
          "time": "2025-02-17 00:00:00",
          "temperature_mean": -6.921,
          "temperature_min": -10.966,
          "temperature_max": -2.565,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.642,
          "soiltemperature_0to10cm_mean": -1.46,
          "soilmoisture_0to10cm": 0.349,
          "windspeed_mean": 1.513
        },
        {
          "time": "2025-02-18 00:00:00",
          "temperature_mean": -5.788,
          "temperature_min": -9.75,
          "temperature_max": -1.428,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.533,
          "soiltemperature_0to10cm_mean": -1.57,
          "soilmoisture_0to10cm": 0.349,
          "windspeed_mean": 1.581
        },
        {
          "time": "2025-02-19 00:00:00",
          "temperature_mean": -5.68,
          "temperature_min": -11.693,
          "temperature_max": -1.059,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": -1.891,
          "soilmoisture_0to10cm": 0.348,
          "windspeed_mean": 2.301
        },
        {
          "time": "2025-02-20 00:00:00",
          "temperature_mean": -5.255,
          "temperature_min": -10.924,
          "temperature_max": 0.604,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.091,
          "soiltemperature_0to10cm_mean": -1.686,
          "soilmoisture_0to10cm": 0.347,
          "windspeed_mean": 2.588
        },
        {
          "time": "2025-02-21 00:00:00",
          "temperature_mean": -2.262,
          "temperature_min": -7.211,
          "temperature_max": 2.457,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.43,
          "soiltemperature_0to10cm_mean": -1.353,
          "soilmoisture_0to10cm": 0.346,
          "windspeed_mean": 2.809
        },
        {
          "time": "2025-02-22 00:00:00",
          "temperature_mean": -1.367,
          "temperature_min": -3.965,
          "temperature_max": 2.915,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.039,
          "soiltemperature_0to10cm_mean": -1.054,
          "soilmoisture_0to10cm": 0.346,
          "windspeed_mean": 3.596
        },
        {
          "time": "2025-02-23 00:00:00",
          "temperature_mean": -0.272,
          "temperature_min": -4.801,
          "temperature_max": 3.85,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.903,
          "soiltemperature_0to10cm_mean": -1.009,
          "soilmoisture_0to10cm": 0.351,
          "windspeed_mean": 0.289
        },
        {
          "time": "2025-02-24 00:00:00",
          "temperature_mean": 3.474,
          "temperature_min": -1.334,
          "temperature_max": 10.839,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.259,
          "soiltemperature_0to10cm_mean": -0.266,
          "soilmoisture_0to10cm": 0.368,
          "windspeed_mean": 0.693
        },
        {
          "time": "2025-02-25 00:00:00",
          "temperature_mean": 1.707,
          "temperature_min": -1.016,
          "temperature_max": 3.716,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.998,
          "soiltemperature_0to10cm_mean": 0.142,
          "soilmoisture_0to10cm": 0.371,
          "windspeed_mean": 2.209
        },
        {
          "time": "2025-02-26 00:00:00",
          "temperature_mean": 4.276,
          "temperature_min": 2.175,
          "temperature_max": 8.809,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.993,
          "soiltemperature_0to10cm_mean": 1.571,
          "soilmoisture_0to10cm": 0.375,
          "windspeed_mean": 0.515
        },
        {
          "time": "2025-02-27 00:00:00",
          "temperature_mean": 3.51,
          "temperature_min": -0.188,
          "temperature_max": 7.331,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.889,
          "soiltemperature_0to10cm_mean": 1.285,
          "soilmoisture_0to10cm": 0.37,
          "windspeed_mean": 1.387
        },
        {
          "time": "2025-02-28 00:00:00",
          "temperature_mean": 1.845,
          "temperature_min": -2.942,
          "temperature_max": 6.32,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.437,
          "soiltemperature_0to10cm_mean": 0.877,
          "soilmoisture_0to10cm": 0.367,
          "windspeed_mean": 2.542
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
      "date": "2025-04-14",
      "day_since": -60
    },
    "beginning_of_heading": {
      "date": "2025-05-27",
      "day_since": -103
    },
    "beginning_of_ripenes": {
      "date": "2025-07-09",
      "day_since": -146
    },
    "harvest": {
      "date": "2025-07-27",
      "day_since": -164
    }
  },
  "timing_of_field_operations": {
    "2025-02-11": {
      "weather_conditions": {
        "temperature_mean": -0.374,
        "temperature_min": -3.213,
        "temperature_max": 2.924,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.6,
        "soiltemperature_0to10cm_mean": -0.269,
        "soilmoisture_0to10cm": 0.348,
        "windspeed_mean": 3.561
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
        "temperature_mean": -1.963,
        "temperature_min": -2.827,
        "temperature_max": -0.804,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.949,
        "soiltemperature_0to10cm_mean": -0.25,
        "soilmoisture_0to10cm": 0.346,
        "windspeed_mean": 3.802
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
        "temperature_mean": -1.471,
        "temperature_min": -2.861,
        "temperature_max": 0.108,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.999,
        "soiltemperature_0to10cm_mean": -0.436,
        "soilmoisture_0to10cm": 0.353,
        "windspeed_mean": 1.886
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
        "temperature_mean": -2.608,
        "temperature_min": -5.674,
        "temperature_max": -0.689,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.948,
        "soiltemperature_0to10cm_mean": -0.52,
        "soilmoisture_0to10cm": 0.356,
        "windspeed_mean": 3.204
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
        "temperature_mean": -4.948,
        "temperature_min": -10.69,
        "temperature_max": -1.503,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.603,
        "soiltemperature_0to10cm_mean": -0.963,
        "soilmoisture_0to10cm": 0.353,
        "windspeed_mean": 1.182
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
        "temperature_mean": -4.68,
        "temperature_min": -8.88,
        "temperature_max": -1.534,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.853,
        "soiltemperature_0to10cm_mean": -1.235,
        "soilmoisture_0to10cm": 0.351,
        "windspeed_mean": 1.618
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
        "temperature_mean": -6.921,
        "temperature_min": -10.966,
        "temperature_max": -2.565,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.642,
        "soiltemperature_0to10cm_mean": -1.46,
        "soilmoisture_0to10cm": 0.349,
        "windspeed_mean": 1.513
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
        "temperature_mean": -5.788,
        "temperature_min": -9.75,
        "temperature_max": -1.428,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.533,
        "soiltemperature_0to10cm_mean": -1.57,
        "soilmoisture_0to10cm": 0.349,
        "windspeed_mean": 1.581
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
        "temperature_mean": -5.68,
        "temperature_min": -11.693,
        "temperature_max": -1.059,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": -1.891,
        "soilmoisture_0to10cm": 0.348,
        "windspeed_mean": 2.301
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
        "temperature_mean": -5.255,
        "temperature_min": -10.924,
        "temperature_max": 0.604,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.091,
        "soiltemperature_0to10cm_mean": -1.686,
        "soilmoisture_0to10cm": 0.347,
        "windspeed_mean": 2.588
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
        "temperature_mean": -2.262,
        "temperature_min": -7.211,
        "temperature_max": 2.457,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.43,
        "soiltemperature_0to10cm_mean": -1.353,
        "soilmoisture_0to10cm": 0.346,
        "windspeed_mean": 2.809
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
        "temperature_mean": -1.367,
        "temperature_min": -3.965,
        "temperature_max": 2.915,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.039,
        "soiltemperature_0to10cm_mean": -1.054,
        "soilmoisture_0to10cm": 0.346,
        "windspeed_mean": 3.596
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
        "temperature_mean": -0.272,
        "temperature_min": -4.801,
        "temperature_max": 3.85,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.903,
        "soiltemperature_0to10cm_mean": -1.009,
        "soilmoisture_0to10cm": 0.351,
        "windspeed_mean": 0.289
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
        "temperature_mean": 3.474,
        "temperature_min": -1.334,
        "temperature_max": 10.839,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.259,
        "soiltemperature_0to10cm_mean": -0.266,
        "soilmoisture_0to10cm": 0.368,
        "windspeed_mean": 0.693
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
        "temperature_mean": 1.707,
        "temperature_min": -1.016,
        "temperature_max": 3.716,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.998,
        "soiltemperature_0to10cm_mean": 0.142,
        "soilmoisture_0to10cm": 0.371,
        "windspeed_mean": 2.209
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
        "temperature_mean": 4.276,
        "temperature_min": 2.175,
        "temperature_max": 8.809,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.993,
        "soiltemperature_0to10cm_mean": 1.571,
        "soilmoisture_0to10cm": 0.375,
        "windspeed_mean": 0.515
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
        "temperature_mean": 3.51,
        "temperature_min": -0.188,
        "temperature_max": 7.331,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.889,
        "soiltemperature_0to10cm_mean": 1.285,
        "soilmoisture_0to10cm": 0.37,
        "windspeed_mean": 1.387
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
        "temperature_mean": 1.845,
        "temperature_min": -2.942,
        "temperature_max": 6.32,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.437,
        "soiltemperature_0to10cm_mean": 0.877,
        "soilmoisture_0to10cm": 0.367,
        "windspeed_mean": 2.542
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
  "polygon_wkt": "POLYGON ((15.75700558 49.09347751, 15.75712859 49.09362657, 15.75717177 49.0936179, 15.75737054 49.09357798, 15.75752844 49.09354163, 15.75815545 49.09340567, 15.75855908 49.09330498, 15.75910486 49.09316301, 15.75934842 49.09309447, 15.75935452 49.09305806, 15.75945541 49.09301493, 15.75955246 49.09298086, 15.7603417 49.09275812, 15.7613111 49.0924712, 15.7613125 49.09247079, 15.76098397 49.09182524, 15.75990556 49.08971254, 15.75965459 49.08924168, 15.75957758 49.08900804, 15.75951126 49.08875106, 15.75945069 49.08855341, 15.75932865 49.08823138, 15.75923601 49.08811905, 15.75911058 49.08797407, 15.75905187 49.08786666, 15.75901437 49.0877469, 15.758988 49.08687514, 15.758969 49.08642611, 15.75893905 49.08639022, 15.75888142 49.08637611, 15.75882905 49.0863732, 15.75878232 49.08639948, 15.75869654 49.08649906, 15.75863353 49.08655554, 15.75856421 49.08659735, 15.75815094 49.08637476, 15.75770311 49.0861412, 15.75767681 49.08613338, 15.75763325 49.0861439, 15.75711667 49.08641398, 15.75693036 49.08653611, 15.75678619 49.08666155, 15.75669917 49.08677607, 15.75666363 49.08681222, 15.75662101 49.08683424, 15.75650892 49.08687434, 15.75638152 49.08695309, 15.75631862 49.08699227, 15.756187 49.08708737, 15.75576166 49.0874198, 15.75470201 49.08843088, 15.75443435 49.08877888, 15.75418089 49.08914237, 15.75407913 49.08930052, 15.75399199 49.0894598, 15.75396632 49.08954825, 15.75395387 49.08964465, 15.75409744 49.09050147, 15.75414987 49.09059425, 15.75422346 49.09069108, 15.7545438 49.09101576, 15.75486207 49.09136684, 15.75488821 49.09145075, 15.75486643 49.091718, 15.75486201 49.09173365, 15.75472359 49.09222327, 15.75469569 49.09237652, 15.75471148 49.09250394, 15.75498142 49.09291017, 15.75506016 49.0930685, 15.75511313 49.09315956, 15.75518295 49.09320698, 15.75527967 49.09324692, 15.75539169 49.09326291, 15.75590059 49.09315035, 15.75642017 49.09302275, 15.75656769 49.09300079, 15.75670952 49.0930078, 15.75690233 49.09302206, 15.75713933 49.09304306, 15.75740299 49.09306948, 15.75750453 49.09307912, 15.75759828 49.09311204, 15.75763685 49.0931436, 15.75766115 49.09318087, 15.75764482 49.09321234, 15.75759481 49.09323317, 15.75749949 49.09326243, 15.75722518 49.09333413, 15.75720612 49.09334042, 15.75695954 49.09342172, 15.75700558 49.09347751), (15.75622248 49.08830732, 15.756264 49.08831756, 15.75618918 49.08835082, 15.75607502 49.08838714, 15.75587599 49.0884503, 15.75575704 49.08849423, 15.75532293 49.08862514, 15.75470108 49.08879911, 15.75464393 49.08881179, 15.75461751 49.08880489, 15.75460092 49.08877729, 15.7546341 49.08875162, 15.75546905 49.08849797, 15.75580867 49.08840602, 15.75614854 49.08831769, 15.75622248 49.08830732))"
};
