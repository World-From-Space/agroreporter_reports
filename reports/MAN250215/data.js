// Field data for MAN250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAN250215",
  "metadata": {
    "field_area_ha": 17.202,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Mohelno"
    },
    "terrain": {
      "variability": 27.3,
      "mean_elevation": 409.133,
      "min_elevation": 396.571,
      "max_elevation": 423.871
    },
    "soil": {
      "bulk_density kg/dm³": 1.33,
      "cation_exchange_capacity cmol(c)/kg": 21.467,
      "clay_particles g/100g (%)": 21.661,
      "sand particles g/100g (%)": 21.001,
      "silt particles g/100g (%)": 57.338,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2024-11-16": {
      "min": 0.065,
      "max": 0.472,
      "median": 0.121,
      "mean": 0.128,
      "sd": 0.031
    },
    "2024-11-23": {
      "min": 0.084,
      "max": 0.507,
      "median": 0.134,
      "mean": 0.141,
      "sd": 0.034
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 1.147,
      "area_percentage": 0.066
    },
    "dominant_category": "bare soil",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 16.348,
        "area_percentage": 0.934
      },
      "very_low_vegetation": {
        "area_ha": 0.961,
        "area_percentage": 0.055
      },
      "low_vegetation": {
        "area_ha": 0.185,
        "area_percentage": 0.011
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
    "evi_median": 0.163,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.82,
          "percentage": 4.7
        },
        "EVI_statistics": {
          "mean": 0.132,
          "median": 0.134,
          "min": 0.097,
          "max": 0.139
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 4.29,
          "percentage": 24.52
        },
        "EVI_statistics": {
          "mean": 0.149,
          "median": 0.149,
          "min": 0.139,
          "max": 0.155
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 6.9,
          "percentage": 39.45
        },
        "EVI_statistics": {
          "mean": 0.163,
          "median": 0.163,
          "min": 0.155,
          "max": 0.171
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 3.41,
          "percentage": 19.47
        },
        "EVI_statistics": {
          "mean": 0.178,
          "median": 0.177,
          "min": 0.171,
          "max": 0.188
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 2.08,
          "percentage": 11.87
        },
        "EVI_statistics": {
          "mean": 0.224,
          "median": 0.203,
          "min": 0.188,
          "max": 0.379
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 4.07,
            "area_percentage": 24.59,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 2.54,
            "area_percentage": 15.35,
            "zone_number": 2
          },
          "similar": {
            "ha": 3.17,
            "area_percentage": 19.15,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 2.8,
            "area_percentage": 16.92,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 3.97,
            "area_percentage": 23.99,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-02-15",
      "reference_image_date": "2024-11-23",
      "change_period": 84
    },
    "median_EVI_change": {
      "old_value": 0.134,
      "new_value": 0.163,
      "difference": 0.029
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.0,
          "percentage": 0.01,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 0.02,
          "percentage": 0.11,
          "zone_number": 2
        },
        "no_change": {
          "ha": 17.45,
          "percentage": 99.77,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.02,
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
          "ha": 2.83,
          "percentage": 16.18,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 2.27,
          "percentage": 12.95,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 7.2,
          "percentage": 41.17,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.45,
          "percentage": 14.02,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.74,
          "percentage": 15.68,
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
  "polygon_wkt": "POLYGON ((16.17823519 49.12326941, 16.17825865 49.12326568, 16.17830052 49.12325374, 16.178356 49.1232448, 16.17841775 49.12324231, 16.18187852 49.12277889, 16.18188136 49.12277854, 16.18271821 49.12268644, 16.18356823 49.12257459, 16.18356836 49.12257457, 16.18485972 49.12240606, 16.18524052 49.12235473, 16.18524141 49.12235461, 16.18568372 49.12229833, 16.18635542 49.12220814, 16.1864609 49.12219349, 16.18648907 49.12218977, 16.18655741 49.12218859, 16.18656421 49.12219073, 16.18655354 49.12215477, 16.18644325 49.12183683, 16.18620989 49.12099287, 16.18609685 49.12066015, 16.18594414 49.12015458, 16.18581567 49.11980241, 16.1857933 49.1197628, 16.18575485 49.11973838, 16.18557318 49.11971619, 16.18552238 49.11971563, 16.18533905 49.11973169, 16.18402879 49.11991002, 16.18255971 49.12009243, 16.18189079 49.12019093, 16.18121842 49.12028118, 16.18046676 49.12037987, 16.18003682 49.12044673, 16.17977425 49.12050214, 16.1796682 49.12052455, 16.17948548 49.12056836, 16.17907655 49.12066047, 16.17766751 49.12104861, 16.17761415 49.12107826, 16.17758631 49.12109853, 16.17757768 49.12112024, 16.17759054 49.12117228, 16.17765598 49.12140353, 16.17783234 49.12190989, 16.17791959 49.12206665, 16.1779669 49.12222314, 16.17802284 49.12241739, 16.17810085 49.12271484, 16.17813337 49.12282705, 16.17822363 49.1232018, 16.17823519 49.12326941))"
};
