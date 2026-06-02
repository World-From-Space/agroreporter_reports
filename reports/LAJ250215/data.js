// Field data for LAJ250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAJ250215",
  "metadata": {
    "field_area_ha": 29.032,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 22.384,
      "mean_elevation": 552.76,
      "min_elevation": 538.774,
      "max_elevation": 561.158
    },
    "soil": {
      "bulk_density kg/dm³": 1.331,
      "cation_exchange_capacity cmol(c)/kg": 19.646,
      "clay_particles g/100g (%)": 20.346,
      "sand particles g/100g (%)": 35.616,
      "silt particles g/100g (%)": 44.061,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2024-12-26": {
      "min": 0.183,
      "max": 0.573,
      "median": 0.298,
      "mean": 0.299,
      "sd": 0.025
    },
    "2024-12-27": {
      "min": 0.218,
      "max": 0.568,
      "median": 0.303,
      "mean": 0.304,
      "sd": 0.022
    },
    "2024-12-30": {
      "min": 0.133,
      "max": 0.607,
      "median": 0.277,
      "mean": 0.277,
      "sd": 0.026
    },
    "2025-02-01": {
      "min": 0.184,
      "max": 0.49,
      "median": 0.306,
      "mean": 0.306,
      "sd": 0.023
    },
    "2025-02-03": {
      "min": 0.126,
      "max": 0.446,
      "median": 0.26,
      "mean": 0.26,
      "sd": 0.024
    },
    "2025-02-05": {
      "min": 0.223,
      "max": 0.475,
      "median": 0.314,
      "mean": 0.315,
      "sd": 0.018
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 28.766,
      "area_percentage": 1.0
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.003,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 21.289,
        "area_percentage": 0.74
      },
      "low_vegetation": {
        "area_ha": 7.458,
        "area_percentage": 0.259
      },
      "medium vegetation": {
        "area_ha": 0.019,
        "area_percentage": 0.001
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
    "evi_median": 0.287,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.43,
          "percentage": 1.5
        },
        "EVI_statistics": {
          "mean": 0.233,
          "median": 0.235,
          "min": 0.193,
          "max": 0.244
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 4.82,
          "percentage": 16.77
        },
        "EVI_statistics": {
          "mean": 0.265,
          "median": 0.267,
          "min": 0.244,
          "max": 0.273
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 16.67,
          "percentage": 57.94
        },
        "EVI_statistics": {
          "mean": 0.286,
          "median": 0.286,
          "min": 0.273,
          "max": 0.302
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 6.33,
          "percentage": 22.01
        },
        "EVI_statistics": {
          "mean": 0.312,
          "median": 0.31,
          "min": 0.302,
          "max": 0.33
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.51,
          "percentage": 1.78
        },
        "EVI_statistics": {
          "mean": 0.346,
          "median": 0.339,
          "min": 0.33,
          "max": 0.458
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 3.0,
            "area_percentage": 10.65,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 7.02,
            "area_percentage": 24.92,
            "zone_number": 2
          },
          "similar": {
            "ha": 6.9,
            "area_percentage": 24.49,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 4.25,
            "area_percentage": 15.09,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 7.0,
            "area_percentage": 24.85,
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
      "old_value": 0.306,
      "new_value": 0.287,
      "difference": -0.02
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
          "ha": 0.07,
          "percentage": 0.24,
          "zone_number": 2
        },
        "no_change": {
          "ha": 28.7,
          "percentage": 99.75,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.01,
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
          "ha": 5.81,
          "percentage": 20.21,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.45,
          "percentage": 15.47,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 9.6,
          "percentage": 33.36,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.09,
          "percentage": 10.75,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 5.82,
          "percentage": 20.22,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.77058326859447 49.09322217)",
          "new_value": 0.306,
          "old_value": 0.29,
          "value_difference": 0.016,
          "area_ha": 3.863,
          "category": "major_growth",
          "location": "N",
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
  "polygon_wkt": "POLYGON ((15.7663897 49.08571684, 15.76678323 49.08643335, 15.7677729 49.08828736, 15.76854034 49.08970901, 15.7691352 49.09076525, 15.76934902 49.09169115, 15.76973816 49.09349168, 15.76982561 49.09386935, 15.77000219 49.09453388, 15.77006886 49.09461512, 15.77014166 49.0946253, 15.77126971 49.09450846, 15.77142183 49.09452129, 15.77176889 49.09460735, 15.77205149 49.09468384, 15.77232058 49.09478915, 15.77273026 49.09500871, 15.77287244 49.09503072, 15.77299363 49.09500128, 15.77308864 49.09494895, 15.77313157 49.09486447, 15.77326102 49.09413604, 15.77321661 49.09401898, 15.77322736 49.09398388, 15.77327965 49.09394916, 15.77335999 49.09391664, 15.7735295 49.09387529, 15.77359103 49.09384992, 15.77363098 49.09382286, 15.7736787 49.0927763, 15.77366251 49.09204436, 15.77367052 49.09200027, 15.77372094 49.09198807, 15.77379488 49.0919814, 15.77446314 49.09197561, 15.7752873 49.09195248, 15.77537731 49.09192114, 15.77543499 49.09187678, 15.77544447 49.09182456, 15.77539595 49.09167941, 15.77523706 49.09136799, 15.77512804 49.09119118, 15.77498014 49.09095132, 15.77478921 49.09064165, 15.77476048 49.09060356, 15.77439788 49.09013919, 15.77431095 49.09003476, 15.7742133 49.08999541, 15.77410072 49.08997753, 15.77394822 49.08995924, 15.77295066 49.08957668, 15.77183744 49.08913001, 15.77159267 49.08900486, 15.77147714 49.08891974, 15.7707861 49.08813925, 15.76962183 49.08682175, 15.76902319 49.08614086, 15.76861425 49.08589417, 15.76790118 49.08565261, 15.76683824 49.08530474, 15.7663897 49.08571684))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
