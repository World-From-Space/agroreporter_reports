// Field data for LAK250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAK250215",
  "metadata": {
    "field_area_ha": 28.968,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 23.705,
      "mean_elevation": 535.356,
      "min_elevation": 521.673,
      "max_elevation": 545.379
    },
    "soil": {
      "bulk_density kg/dm³": 1.345,
      "cation_exchange_capacity cmol(c)/kg": 18.784,
      "clay_particles g/100g (%)": 22.068,
      "sand particles g/100g (%)": 35.648,
      "silt particles g/100g (%)": 42.336,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2024-12-26": {
      "min": 0.158,
      "max": 0.48,
      "median": 0.306,
      "mean": 0.303,
      "sd": 0.028
    },
    "2024-12-30": {
      "min": 0.126,
      "max": 0.478,
      "median": 0.292,
      "mean": 0.288,
      "sd": 0.031
    },
    "2025-01-10": {
      "min": 0.121,
      "max": 0.469,
      "median": 0.28,
      "mean": 0.276,
      "sd": 0.028
    },
    "2025-02-01": {
      "min": 0.174,
      "max": 0.478,
      "median": 0.326,
      "mean": 0.324,
      "sd": 0.026
    },
    "2025-02-03": {
      "min": 0.114,
      "max": 0.418,
      "median": 0.276,
      "mean": 0.272,
      "sd": 0.028
    },
    "2025-02-05": {
      "min": 0.219,
      "max": 0.444,
      "median": 0.333,
      "mean": 0.33,
      "sd": 0.022
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 28.884,
      "area_percentage": 0.992
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.244,
        "area_percentage": 0.008
      },
      "very_low_vegetation": {
        "area_ha": 14.421,
        "area_percentage": 0.495
      },
      "low_vegetation": {
        "area_ha": 14.449,
        "area_percentage": 0.496
      },
      "medium vegetation": {
        "area_ha": 0.014,
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
    "evi_median": 0.3,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.9,
          "percentage": 6.54
        },
        "EVI_statistics": {
          "mean": 0.228,
          "median": 0.233,
          "min": 0.155,
          "max": 0.255
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 4.6,
          "percentage": 15.8
        },
        "EVI_statistics": {
          "mean": 0.274,
          "median": 0.276,
          "min": 0.255,
          "max": 0.285
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 17.63,
          "percentage": 60.52
        },
        "EVI_statistics": {
          "mean": 0.301,
          "median": 0.301,
          "min": 0.285,
          "max": 0.315
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.8,
          "percentage": 16.47
        },
        "EVI_statistics": {
          "mean": 0.323,
          "median": 0.321,
          "min": 0.315,
          "max": 0.345
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.2,
          "percentage": 0.68
        },
        "EVI_statistics": {
          "mean": 0.367,
          "median": 0.36,
          "min": 0.345,
          "max": 0.416
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 1.98,
            "area_percentage": 7.01,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 6.36,
            "area_percentage": 22.51,
            "zone_number": 2
          },
          "similar": {
            "ha": 10.83,
            "area_percentage": 38.34,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 5.8,
            "area_percentage": 20.53,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 3.28,
            "area_percentage": 11.61,
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
      "old_value": 0.326,
      "new_value": 0.3,
      "difference": -0.027
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
          "ha": 0.31,
          "percentage": 1.06,
          "zone_number": 2
        },
        "no_change": {
          "ha": 28.82,
          "percentage": 98.94,
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
          "ha": 4.06,
          "percentage": 13.95,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.13,
          "percentage": 14.19,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 12.73,
          "percentage": 43.7,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.06,
          "percentage": 13.94,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 4.14,
          "percentage": 14.22,
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
      "date": "2025-04-13",
      "day_since": -59
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
  "polygon_wkt": "POLYGON ((15.76386821 49.08255081, 15.76381587 49.08257608, 15.76380047 49.08258853, 15.76379347 49.08259973, 15.76379276 49.08260086, 15.76381565 49.08263516, 15.76398966 49.08279281, 15.76422007 49.08303458, 15.76479675 49.08367928, 15.7657325 49.08468828, 15.76576349 49.08471641, 15.76585734 49.08479315, 15.76595488 49.08486196, 15.76603604 49.08490447, 15.76628572 49.08500954, 15.768408 49.085707, 15.76877338 49.0858398, 15.76907173 49.08603238, 15.76918578 49.08614167, 15.76938553 49.08602162, 15.76957505 49.08589413, 15.77005153 49.08559076, 15.7705363 49.08527796, 15.7710271 49.08496204, 15.77156602 49.0846161, 15.77190119 49.08440371, 15.77243324 49.08405939, 15.77303434 49.08367232, 15.7736967 49.08324907, 15.77416908 49.08294391, 15.77427007 49.08286988, 15.77439407 49.0827794, 15.77432151 49.08274492, 15.77419604 49.08267028, 15.77412315 49.08259492, 15.77409509 49.08248517, 15.77408646 49.08220437, 15.7741164 49.08192566, 15.77414312 49.08164928, 15.77415466 49.08158033, 15.77418587 49.08139385, 15.77426586 49.08109523, 15.77426496 49.08107274, 15.77426448 49.08106062, 15.77424966 49.08103599, 15.77422989 49.08101766, 15.77420016 49.08100425, 15.77330108 49.08095906, 15.77212654 49.0808978, 15.77174909 49.08091408, 15.7706344 49.08097224, 15.76925491 49.08108237, 15.76794316 49.08116142, 15.76753152 49.08112913, 15.76709638 49.08105252, 15.76687511 49.08102558, 15.7665395 49.08100586, 15.76618651 49.08104106, 15.76588475 49.08108569, 15.76587408 49.08109068, 15.76579704 49.08112673, 15.76574722 49.08115996, 15.76566026 49.08123701, 15.76558382 49.08132641, 15.76551999 49.08142508, 15.76548511 49.0815527, 15.76544534 49.08163928, 15.76542666 49.08166178, 15.76514526 49.08182666, 15.76510687 49.08187607, 15.76509847 49.08192231, 15.76511821 49.08196386, 15.76527381 49.08212843, 15.765261 49.08214503, 15.76520221 49.08217541, 15.76517766 49.08218809, 15.76493831 49.08229068, 15.76487212 49.08232371, 15.76483651 49.08232092, 15.76475979 49.08227201, 15.76469511 49.08224249, 15.76464492 49.08223568, 15.76458899 49.08223632, 15.76452401 49.08225063, 15.76404091 49.08246865, 15.76386821 49.08255081))"
};
