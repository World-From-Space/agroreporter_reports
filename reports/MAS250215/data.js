// Field data for MAS250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAS250215",
  "metadata": {
    "field_area_ha": 2.891,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Mohelno"
    },
    "terrain": {
      "variability": 5.61,
      "mean_elevation": 386.987,
      "min_elevation": 383.592,
      "max_elevation": 389.202
    },
    "soil": {
      "bulk_density kg/dm³": 1.319,
      "cation_exchange_capacity cmol(c)/kg": 20.587,
      "clay_particles g/100g (%)": 24.564,
      "sand particles g/100g (%)": 22.574,
      "silt particles g/100g (%)": 52.861,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2024-12-17": {
      "min": 0.098,
      "max": 0.226,
      "median": 0.164,
      "mean": 0.165,
      "sd": 0.015
    },
    "2024-12-21": {
      "min": 0.118,
      "max": 0.237,
      "median": 0.164,
      "mean": 0.164,
      "sd": 0.015
    },
    "2024-12-29": {
      "min": 0.119,
      "max": 0.238,
      "median": 0.181,
      "mean": 0.181,
      "sd": 0.016
    },
    "2025-01-04": {
      "min": 0.155,
      "max": 0.261,
      "median": 0.207,
      "mean": 0.206,
      "sd": 0.015
    },
    "2025-01-10": {
      "min": 0.111,
      "max": 0.235,
      "median": 0.164,
      "mean": 0.165,
      "sd": 0.013
    },
    "2025-01-30": {
      "min": 0.085,
      "max": 0.21,
      "median": 0.151,
      "mean": 0.151,
      "sd": 0.015
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 2.836,
      "area_percentage": 0.997
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.007,
        "area_percentage": 0.003
      },
      "very_low_vegetation": {
        "area_ha": 2.836,
        "area_percentage": 0.997
      },
      "low_vegetation": {
        "area_ha": 0.0,
        "area_percentage": 0.0
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
    "evi_median": 0.235,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.01,
          "percentage": 0.25
        },
        "EVI_statistics": {
          "mean": 0.196,
          "median": 0.197,
          "min": 0.191,
          "max": 0.199
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.44,
          "percentage": 15.45
        },
        "EVI_statistics": {
          "mean": 0.217,
          "median": 0.218,
          "min": 0.2,
          "max": 0.223
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 1.94,
          "percentage": 68.09
        },
        "EVI_statistics": {
          "mean": 0.235,
          "median": 0.235,
          "min": 0.223,
          "max": 0.246
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.46,
          "percentage": 16.02
        },
        "EVI_statistics": {
          "mean": 0.253,
          "median": 0.251,
          "min": 0.246,
          "max": 0.27
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.01,
          "percentage": 0.19
        },
        "EVI_statistics": {
          "mean": 0.279,
          "median": 0.278,
          "min": 0.275,
          "max": 0.287
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.06,
            "area_percentage": 2.16,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.69,
            "area_percentage": 24.82,
            "zone_number": 2
          },
          "similar": {
            "ha": 1.08,
            "area_percentage": 38.85,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.6,
            "area_percentage": 21.58,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.35,
            "area_percentage": 12.59,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-02-15",
      "reference_image_date": "2025-01-10",
      "change_period": 36
    },
    "median_EVI_change": {
      "old_value": 0.164,
      "new_value": 0.235,
      "difference": 0.07
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
          "ha": 1.86,
          "percentage": 65.34,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.99,
          "percentage": 34.66,
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
          "ha": 0.57,
          "percentage": 20.01,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.4,
          "percentage": 13.93,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 0.94,
          "percentage": 32.92,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.39,
          "percentage": 13.77,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.55,
          "percentage": 19.37,
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
      "date": "2025-04-11",
      "day_since": -57
    },
    "beginning_of_heading": {
      "date": "2025-05-25",
      "day_since": -101
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
  "polygon_wkt": "POLYGON ((16.20228445 49.11627205, 16.2026515 49.11630531, 16.20348775 49.11639732, 16.20385538 49.11644005, 16.20397014 49.11645147, 16.20398985 49.11644719, 16.20398942 49.11643279, 16.20392941 49.11629039, 16.20381491 49.11603282, 16.20370185 49.11577536, 16.20349508 49.11526667, 16.20342174 49.11509166, 16.20338506 49.11500847, 16.20333478 49.11489649, 16.20329626 49.11480422, 16.20326291 49.11472032, 16.20318475 49.11452995, 16.20315541 49.11445497, 16.20312444 49.11437989, 16.20308556 49.11428408, 16.20305493 49.1141659, 16.20304316 49.11410848, 16.20301982 49.1140464, 16.20300962 49.11404085, 16.20295694 49.11404171, 16.20284469 49.11405148, 16.20278945 49.11405759, 16.20254437 49.11408184, 16.20242929 49.11411445, 16.20226458 49.11410505, 16.20165235 49.11415528, 16.20150765 49.11416738, 16.20228445 49.11627205))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
