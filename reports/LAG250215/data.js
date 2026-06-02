// Field data for LAG250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAG250215",
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
    "2024-12-17": {
      "min": 0.111,
      "max": 0.393,
      "median": 0.273,
      "mean": 0.271,
      "sd": 0.033
    },
    "2024-12-26": {
      "min": 0.206,
      "max": 0.391,
      "median": 0.295,
      "mean": 0.294,
      "sd": 0.026
    },
    "2024-12-30": {
      "min": 0.165,
      "max": 0.416,
      "median": 0.28,
      "mean": 0.278,
      "sd": 0.035
    },
    "2025-02-01": {
      "min": 0.202,
      "max": 0.419,
      "median": 0.31,
      "mean": 0.309,
      "sd": 0.029
    },
    "2025-02-03": {
      "min": 0.138,
      "max": 0.367,
      "median": 0.263,
      "mean": 0.262,
      "sd": 0.03
    },
    "2025-02-05": {
      "min": 0.237,
      "max": 0.403,
      "median": 0.32,
      "mean": 0.319,
      "sd": 0.027
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 15.038,
      "area_percentage": 1.0
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 10.774,
        "area_percentage": 0.716
      },
      "low_vegetation": {
        "area_ha": 4.264,
        "area_percentage": 0.284
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
    "evi_median": 0.284,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.32,
          "percentage": 8.76
        },
        "EVI_statistics": {
          "mean": 0.232,
          "median": 0.233,
          "min": 0.207,
          "max": 0.242
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.16,
          "percentage": 20.98
        },
        "EVI_statistics": {
          "mean": 0.258,
          "median": 0.259,
          "min": 0.242,
          "max": 0.27
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 6.04,
          "percentage": 40.15
        },
        "EVI_statistics": {
          "mean": 0.285,
          "median": 0.284,
          "min": 0.27,
          "max": 0.299
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 3.91,
          "percentage": 26.02
        },
        "EVI_statistics": {
          "mean": 0.31,
          "median": 0.309,
          "min": 0.299,
          "max": 0.327
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.62,
          "percentage": 4.09
        },
        "EVI_statistics": {
          "mean": 0.336,
          "median": 0.334,
          "min": 0.327,
          "max": 0.371
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 2.95,
            "area_percentage": 19.8,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 2.46,
            "area_percentage": 16.51,
            "zone_number": 2
          },
          "similar": {
            "ha": 2.72,
            "area_percentage": 18.26,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 2.39,
            "area_percentage": 16.04,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 4.38,
            "area_percentage": 29.4,
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
      "new_value": 0.284,
      "difference": -0.026
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
          "ha": 0.09,
          "percentage": 0.58,
          "zone_number": 2
        },
        "no_change": {
          "ha": 14.95,
          "percentage": 99.42,
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
          "ha": 1.29,
          "percentage": 8.61,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 2.28,
          "percentage": 15.14,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 8.03,
          "percentage": 53.4,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.05,
          "percentage": 13.65,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.38,
          "percentage": 9.2,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.768775201086957 49.09353409936644)",
          "new_value": 0.303,
          "old_value": 0.286,
          "value_difference": 0.017,
          "area_ha": 0.432,
          "category": "major_growth",
          "location": "NE",
          "id": 1
        }
      ]
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
      "date": "2025-04-12",
      "day_since": -58
    },
    "beginning_of_heading": {
      "date": "2025-05-26",
      "day_since": -102
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
  "polygon_wkt": "POLYGON ((15.76379918 49.08622056, 15.76411977 49.08678885, 15.76443687 49.08736724, 15.76484528 49.08810076, 15.76514919 49.08865656, 15.76550714 49.08930644, 15.76597 49.09014187, 15.76637731 49.09088668, 15.76670377 49.09147418, 15.76704511 49.0920952, 15.76748112 49.09288299, 15.76788947 49.09362727, 15.7679785 49.09378923, 15.76833464 49.09372306, 15.76935337 49.09350507, 15.76945682 49.09347681, 15.76948079 49.09345366, 15.76958271 49.09349916, 15.76959404 49.09343679, 15.7693469 49.09235543, 15.76920353 49.09168285, 15.76907794 49.091073, 15.7690196 49.09084798, 15.76894279 49.09069243, 15.76869065 49.09024902, 15.76838292 49.0896939, 15.76716393 49.08747243, 15.76633473 49.08597658, 15.76626792 49.08595345, 15.76619802 49.08594732, 15.76536521 49.08603856, 15.76452021 49.08613266, 15.76432511 49.08615698, 15.76403687 49.08619059, 15.76379918 49.08622056))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
