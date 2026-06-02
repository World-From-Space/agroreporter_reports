// Field data for MAT250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAT250215",
  "metadata": {
    "field_area_ha": 4.354,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lhánice"
    },
    "terrain": {
      "variability": 11.665,
      "mean_elevation": 394.184,
      "min_elevation": 387.784,
      "max_elevation": 399.449
    },
    "soil": {
      "bulk_density kg/dm³": 1.33,
      "cation_exchange_capacity cmol(c)/kg": 20.795,
      "clay_particles g/100g (%)": 24.539,
      "sand particles g/100g (%)": 24.692,
      "silt particles g/100g (%)": 50.71,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2024-09-29": {
      "min": 0.108,
      "max": 0.466,
      "median": 0.147,
      "mean": 0.166,
      "sd": 0.054
    },
    "2024-10-14": {
      "min": 0.099,
      "max": 0.457,
      "median": 0.134,
      "mean": 0.16,
      "sd": 0.06
    },
    "2024-10-21": {
      "min": 0.116,
      "max": 0.419,
      "median": 0.154,
      "mean": 0.174,
      "sd": 0.048
    },
    "2024-10-28": {
      "min": 0.087,
      "max": 0.403,
      "median": 0.127,
      "mean": 0.146,
      "sd": 0.049
    },
    "2024-11-04": {
      "min": 0.101,
      "max": 0.411,
      "median": 0.144,
      "mean": 0.166,
      "sd": 0.052
    },
    "2024-11-16": {
      "min": 0.071,
      "max": 0.367,
      "median": 0.123,
      "mean": 0.136,
      "sd": 0.037
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 0.45,
      "area_percentage": 0.104
    },
    "dominant_category": "bare soil",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 3.895,
        "area_percentage": 0.896
      },
      "very_low_vegetation": {
        "area_ha": 0.395,
        "area_percentage": 0.091
      },
      "low_vegetation": {
        "area_ha": 0.055,
        "area_percentage": 0.013
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
    "evi_median": 0.126,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.43,
          "percentage": 9.96
        },
        "EVI_statistics": {
          "mean": 0.1,
          "median": 0.102,
          "min": 0.043,
          "max": 0.107
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 1.09,
          "percentage": 24.99
        },
        "EVI_statistics": {
          "mean": 0.114,
          "median": 0.114,
          "min": 0.107,
          "max": 0.119
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 1.1,
          "percentage": 25.33
        },
        "EVI_statistics": {
          "mean": 0.125,
          "median": 0.124,
          "min": 0.119,
          "max": 0.132
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.52,
          "percentage": 11.95
        },
        "EVI_statistics": {
          "mean": 0.137,
          "median": 0.137,
          "min": 0.132,
          "max": 0.144
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 1.21,
          "percentage": 27.75
        },
        "EVI_statistics": {
          "mean": 0.196,
          "median": 0.181,
          "min": 0.144,
          "max": 0.364
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 1.02,
            "area_percentage": 24.76,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.76,
            "area_percentage": 18.45,
            "zone_number": 2
          },
          "similar": {
            "ha": 0.53,
            "area_percentage": 12.86,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.5,
            "area_percentage": 12.14,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.31,
            "area_percentage": 31.8,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-02-15",
      "reference_image_date": "2024-11-09",
      "change_period": 98
    },
    "median_EVI_change": {
      "old_value": 0.148,
      "new_value": 0.126,
      "difference": -0.022
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
          "percentage": 2.4,
          "zone_number": 2
        },
        "no_change": {
          "ha": 4.24,
          "percentage": 97.47,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.01,
          "percentage": 0.12,
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
          "ha": 0.54,
          "percentage": 12.34,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.57,
          "percentage": 13.05,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 2.14,
          "percentage": 49.25,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.56,
          "percentage": 12.86,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.54,
          "percentage": 12.49,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 399.496,
      "historical_average": 437.987
    },
    "accumulated_precipitation_since_seeding": {
      "current": 92.098,
      "historical_mean": 157.708
    },
    "precipitation_summary": {
      "last_3_days": 8.846,
      "last_7_days": 8.864,
      "last_14_days": 9.31,
      "last_30_days": 13.654
    },
    "standardized_precipitation_index": {
      "1_month": -1.502,
      "3_month": -1.315,
      "6_month": 1.39
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-02-11 00:00:00",
          "temperature_mean": 0.049,
          "temperature_min": -3.305,
          "temperature_max": 3.686,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.526,
          "soiltemperature_0to10cm_mean": 0.003,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 3.001
        },
        {
          "time": "2025-02-12 00:00:00",
          "temperature_mean": -1.223,
          "temperature_min": -2.145,
          "temperature_max": -0.043,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.98,
          "soiltemperature_0to10cm_mean": 0.139,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 3.731
        },
        {
          "time": "2025-02-13 00:00:00",
          "temperature_mean": -0.957,
          "temperature_min": -2.01,
          "temperature_max": 0.444,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.999,
          "soiltemperature_0to10cm_mean": -0.009,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 2.095
        },
        {
          "time": "2025-02-14 00:00:00",
          "temperature_mean": -2.025,
          "temperature_min": -5.411,
          "temperature_max": 0.141,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.828,
          "soiltemperature_0to10cm_mean": -0.064,
          "soilmoisture_0to10cm": 0.346,
          "windspeed_mean": 3.26
        },
        {
          "time": "2025-02-15 00:00:00",
          "temperature_mean": -4.093,
          "temperature_min": -7.969,
          "temperature_max": -1.067,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.519,
          "soiltemperature_0to10cm_mean": -0.466,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 1.432
        },
        {
          "time": "2025-02-16 00:00:00",
          "temperature_mean": -4.256,
          "temperature_min": -7.669,
          "temperature_max": -0.935,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.794,
          "soiltemperature_0to10cm_mean": -0.801,
          "soilmoisture_0to10cm": 0.343,
          "windspeed_mean": 1.814
        },
        {
          "time": "2025-02-17 00:00:00",
          "temperature_mean": -5.544,
          "temperature_min": -8.22,
          "temperature_max": -1.85,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.706,
          "soiltemperature_0to10cm_mean": -0.972,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 1.492
        },
        {
          "time": "2025-02-18 00:00:00",
          "temperature_mean": -5.485,
          "temperature_min": -9.338,
          "temperature_max": -1.027,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.511,
          "soiltemperature_0to10cm_mean": -1.074,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 1.84
        },
        {
          "time": "2025-02-19 00:00:00",
          "temperature_mean": -5.731,
          "temperature_min": -10.637,
          "temperature_max": -0.404,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": -1.43,
          "soilmoisture_0to10cm": 0.343,
          "windspeed_mean": 1.735
        },
        {
          "time": "2025-02-20 00:00:00",
          "temperature_mean": -5.711,
          "temperature_min": -11.607,
          "temperature_max": 0.947,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.144,
          "soiltemperature_0to10cm_mean": -1.349,
          "soilmoisture_0to10cm": 0.343,
          "windspeed_mean": 2.658
        },
        {
          "time": "2025-02-21 00:00:00",
          "temperature_mean": -2.594,
          "temperature_min": -8.148,
          "temperature_max": 2.139,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.375,
          "soiltemperature_0to10cm_mean": -1.117,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 2.732
        },
        {
          "time": "2025-02-22 00:00:00",
          "temperature_mean": -1.376,
          "temperature_min": -4.257,
          "temperature_max": 2.925,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.011,
          "soiltemperature_0to10cm_mean": -0.784,
          "soilmoisture_0to10cm": 0.341,
          "windspeed_mean": 3.448
        },
        {
          "time": "2025-02-23 00:00:00",
          "temperature_mean": -0.676,
          "temperature_min": -4.866,
          "temperature_max": 2.505,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.844,
          "soiltemperature_0to10cm_mean": -0.773,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 0.496
        },
        {
          "time": "2025-02-24 00:00:00",
          "temperature_mean": 3.598,
          "temperature_min": -1.464,
          "temperature_max": 10.923,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.223,
          "soiltemperature_0to10cm_mean": -0.113,
          "soilmoisture_0to10cm": 0.361,
          "windspeed_mean": 0.462
        },
        {
          "time": "2025-02-25 00:00:00",
          "temperature_mean": 2.046,
          "temperature_min": -0.982,
          "temperature_max": 4.007,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.978,
          "soiltemperature_0to10cm_mean": 0.255,
          "soilmoisture_0to10cm": 0.369,
          "windspeed_mean": 2.253
        },
        {
          "time": "2025-02-26 00:00:00",
          "temperature_mean": 4.554,
          "temperature_min": 1.446,
          "temperature_max": 8.451,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.995,
          "soiltemperature_0to10cm_mean": 1.987,
          "soilmoisture_0to10cm": 0.379,
          "windspeed_mean": 0.88
        },
        {
          "time": "2025-02-27 00:00:00",
          "temperature_mean": 3.644,
          "temperature_min": -0.341,
          "temperature_max": 7.936,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.892,
          "soiltemperature_0to10cm_mean": 1.53,
          "soilmoisture_0to10cm": 0.372,
          "windspeed_mean": 1.05
        },
        {
          "time": "2025-02-28 00:00:00",
          "temperature_mean": 2.652,
          "temperature_min": -2.063,
          "temperature_max": 7.234,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.38,
          "soiltemperature_0to10cm_mean": 1.19,
          "soilmoisture_0to10cm": 0.367,
          "windspeed_mean": 2.481
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-10-14",
      "day_since": 123
    },
    "crop_emergence": {
      "date": "2024-10-24",
      "day_since": 112
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-12",
      "day_since": -58
    },
    "beginning_of_heading": {
      "date": "2025-05-28",
      "day_since": -104
    },
    "beginning_of_ripenes": {
      "date": "2025-07-09",
      "day_since": -146
    },
    "harvest": {
      "date": "2025-07-28",
      "day_since": -165
    }
  },
  "timing_of_field_operations": {
    "2025-02-11": {
      "weather_conditions": {
        "temperature_mean": 0.049,
        "temperature_min": -3.305,
        "temperature_max": 3.686,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.526,
        "soiltemperature_0to10cm_mean": 0.003,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 3.001
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
        "temperature_mean": -1.223,
        "temperature_min": -2.145,
        "temperature_max": -0.043,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.98,
        "soiltemperature_0to10cm_mean": 0.139,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 3.731
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
        "temperature_mean": -0.957,
        "temperature_min": -2.01,
        "temperature_max": 0.444,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.999,
        "soiltemperature_0to10cm_mean": -0.009,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 2.095
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
        "temperature_mean": -2.025,
        "temperature_min": -5.411,
        "temperature_max": 0.141,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.828,
        "soiltemperature_0to10cm_mean": -0.064,
        "soilmoisture_0to10cm": 0.346,
        "windspeed_mean": 3.26
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
        "temperature_mean": -4.093,
        "temperature_min": -7.969,
        "temperature_max": -1.067,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.519,
        "soiltemperature_0to10cm_mean": -0.466,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 1.432
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
        "temperature_mean": -4.256,
        "temperature_min": -7.669,
        "temperature_max": -0.935,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.794,
        "soiltemperature_0to10cm_mean": -0.801,
        "soilmoisture_0to10cm": 0.343,
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
    "2025-02-17": {
      "weather_conditions": {
        "temperature_mean": -5.544,
        "temperature_min": -8.22,
        "temperature_max": -1.85,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.706,
        "soiltemperature_0to10cm_mean": -0.972,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 1.492
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
        "temperature_mean": -5.485,
        "temperature_min": -9.338,
        "temperature_max": -1.027,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.511,
        "soiltemperature_0to10cm_mean": -1.074,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 1.84
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
        "temperature_mean": -5.731,
        "temperature_min": -10.637,
        "temperature_max": -0.404,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": -1.43,
        "soilmoisture_0to10cm": 0.343,
        "windspeed_mean": 1.735
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
        "temperature_mean": -5.711,
        "temperature_min": -11.607,
        "temperature_max": 0.947,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.144,
        "soiltemperature_0to10cm_mean": -1.349,
        "soilmoisture_0to10cm": 0.343,
        "windspeed_mean": 2.658
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
        "temperature_mean": -2.594,
        "temperature_min": -8.148,
        "temperature_max": 2.139,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.375,
        "soiltemperature_0to10cm_mean": -1.117,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 2.732
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
        "temperature_mean": -1.376,
        "temperature_min": -4.257,
        "temperature_max": 2.925,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.011,
        "soiltemperature_0to10cm_mean": -0.784,
        "soilmoisture_0to10cm": 0.341,
        "windspeed_mean": 3.448
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
        "temperature_mean": -0.676,
        "temperature_min": -4.866,
        "temperature_max": 2.505,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.844,
        "soiltemperature_0to10cm_mean": -0.773,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 0.496
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
        "temperature_mean": 3.598,
        "temperature_min": -1.464,
        "temperature_max": 10.923,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.223,
        "soiltemperature_0to10cm_mean": -0.113,
        "soilmoisture_0to10cm": 0.361,
        "windspeed_mean": 0.462
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
        "temperature_mean": 2.046,
        "temperature_min": -0.982,
        "temperature_max": 4.007,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.978,
        "soiltemperature_0to10cm_mean": 0.255,
        "soilmoisture_0to10cm": 0.369,
        "windspeed_mean": 2.253
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
        "temperature_mean": 4.554,
        "temperature_min": 1.446,
        "temperature_max": 8.451,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.995,
        "soiltemperature_0to10cm_mean": 1.987,
        "soilmoisture_0to10cm": 0.379,
        "windspeed_mean": 0.88
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
        "temperature_mean": 3.644,
        "temperature_min": -0.341,
        "temperature_max": 7.936,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.892,
        "soiltemperature_0to10cm_mean": 1.53,
        "soilmoisture_0to10cm": 0.372,
        "windspeed_mean": 1.05
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
        "temperature_mean": 2.652,
        "temperature_min": -2.063,
        "temperature_max": 7.234,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.38,
        "soiltemperature_0to10cm_mean": 1.19,
        "soilmoisture_0to10cm": 0.367,
        "windspeed_mean": 2.481
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
  "polygon_wkt": "POLYGON ((16.20529668 49.10671696, 16.20583505 49.10830334, 16.20586979 49.10831769, 16.20611876 49.10827461, 16.20714527 49.1081052, 16.2076003 49.10804154, 16.20838904 49.1079182, 16.20861085 49.10766847, 16.20865076 49.10758908, 16.20868739 49.10734365, 16.20857221 49.1064085, 16.20856082 49.1062909, 16.20854757 49.10623199, 16.20852155 49.10618235, 16.20846973 49.10616791, 16.2084134 49.10616842, 16.20554861 49.10658975, 16.20540634 49.10660893, 16.20535538 49.10662224, 16.2053164 49.10664757, 16.20529574 49.10668096, 16.20529668 49.10671696))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
