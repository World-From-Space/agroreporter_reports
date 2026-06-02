// Field data for LAI250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAI250215",
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
    "2024-12-27": {
      "min": 0.23,
      "max": 0.412,
      "median": 0.319,
      "mean": 0.321,
      "sd": 0.022
    },
    "2024-12-30": {
      "min": 0.188,
      "max": 0.44,
      "median": 0.292,
      "mean": 0.293,
      "sd": 0.025
    },
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
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 30.955,
      "area_percentage": 1.0
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 17.239,
        "area_percentage": 0.557
      },
      "low_vegetation": {
        "area_ha": 13.716,
        "area_percentage": 0.443
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
    "evi_median": 0.297,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.13,
          "percentage": 0.41
        },
        "EVI_statistics": {
          "mean": 0.246,
          "median": 0.248,
          "min": 0.208,
          "max": 0.252
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 6.3,
          "percentage": 20.36
        },
        "EVI_statistics": {
          "mean": 0.274,
          "median": 0.275,
          "min": 0.253,
          "max": 0.282
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 16.99,
          "percentage": 54.88
        },
        "EVI_statistics": {
          "mean": 0.296,
          "median": 0.296,
          "min": 0.282,
          "max": 0.312
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 6.91,
          "percentage": 22.33
        },
        "EVI_statistics": {
          "mean": 0.322,
          "median": 0.321,
          "min": 0.312,
          "max": 0.342
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.62,
          "percentage": 2.01
        },
        "EVI_statistics": {
          "mean": 0.353,
          "median": 0.351,
          "min": 0.342,
          "max": 0.396
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 2.26,
            "area_percentage": 7.4,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 9.03,
            "area_percentage": 29.58,
            "zone_number": 2
          },
          "similar": {
            "ha": 6.28,
            "area_percentage": 20.57,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 4.64,
            "area_percentage": 15.2,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 8.32,
            "area_percentage": 27.25,
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
      "old_value": 0.321,
      "new_value": 0.297,
      "difference": -0.024
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
          "ha": 0.1,
          "percentage": 0.34,
          "zone_number": 2
        },
        "no_change": {
          "ha": 30.85,
          "percentage": 99.66,
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
          "ha": 3.92,
          "percentage": 12.68,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.73,
          "percentage": 15.28,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 13.56,
          "percentage": 43.82,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.79,
          "percentage": 15.46,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 3.95,
          "percentage": 12.77,
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
      "date": "2024-10-08",
      "day_since": 128
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-12",
      "day_since": -58
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
  "polygon_wkt": "POLYGON ((15.77607031 49.08312763, 15.7757935 49.0831708, 15.77569681 49.08317756, 15.77556381 49.08317673, 15.77540266 49.08316099, 15.7752743 49.08312857, 15.77493431 49.08298723, 15.77462064 49.08287987, 15.7746179 49.0828787, 15.7693221 49.08627231, 15.76933008 49.08627995, 15.77006061 49.08711747, 15.77024461 49.08732842, 15.77046207 49.08757772, 15.7711309 49.08835719, 15.77132682 49.08858553, 15.77153513 49.08882828, 15.77169978 49.08894461, 15.77187286 49.08904131, 15.77289695 49.08942698, 15.77338117 49.08959779, 15.77525878 49.08855139, 15.77528201 49.08853521, 15.77562692 49.08833587, 15.77683216 49.08762767, 15.77711374 49.087437, 15.77746015 49.08713376, 15.77804847 49.08652788, 15.77846258 49.08603161, 15.77850535 49.08585301, 15.77854861 49.0857012, 15.7785364 49.0854116, 15.77852087 49.08521582, 15.77851519 49.084947, 15.77853251 49.08480178, 15.77861075 49.08455194, 15.77865891 49.08439916, 15.77866964 49.0843207, 15.77866472 49.0842632, 15.7786421 49.08419776, 15.77855939 49.08408814, 15.77847134 49.08399794, 15.77790533 49.08351136, 15.77774359 49.08339086, 15.77740937 49.08329676, 15.77711079 49.0832127, 15.7769685 49.08318381, 15.7768453 49.08316825, 15.77668531 49.0831539, 15.77607031 49.08312763))"
};
