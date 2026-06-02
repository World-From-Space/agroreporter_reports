// Field data for MAQ250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAQ250215",
  "metadata": {
    "field_area_ha": 5.425,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lhánice"
    },
    "terrain": {
      "variability": 5.198,
      "mean_elevation": 418.281,
      "min_elevation": 414.81,
      "max_elevation": 420.008
    },
    "soil": {
      "bulk_density kg/dm³": 1.32,
      "cation_exchange_capacity cmol(c)/kg": 19.752,
      "clay_particles g/100g (%)": 24.341,
      "sand particles g/100g (%)": 21.354,
      "silt particles g/100g (%)": 54.255,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2024-11-16": {
      "min": 0.146,
      "max": 0.389,
      "median": 0.226,
      "mean": 0.227,
      "sd": 0.025
    },
    "2024-11-23": {
      "min": 0.139,
      "max": 0.401,
      "median": 0.247,
      "mean": 0.249,
      "sd": 0.031
    },
    "2024-12-01": {
      "min": 0.169,
      "max": 0.38,
      "median": 0.255,
      "mean": 0.255,
      "sd": 0.025
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 5.369,
      "area_percentage": 0.993
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.036,
        "area_percentage": 0.007
      },
      "very_low_vegetation": {
        "area_ha": 4.953,
        "area_percentage": 0.916
      },
      "low_vegetation": {
        "area_ha": 0.416,
        "area_percentage": 0.077
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
    "evi_median": 0.272,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.45,
          "percentage": 8.36
        },
        "EVI_statistics": {
          "mean": 0.217,
          "median": 0.221,
          "min": 0.164,
          "max": 0.231
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 1.07,
          "percentage": 19.88
        },
        "EVI_statistics": {
          "mean": 0.247,
          "median": 0.248,
          "min": 0.231,
          "max": 0.259
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 2.6,
          "percentage": 48.16
        },
        "EVI_statistics": {
          "mean": 0.273,
          "median": 0.274,
          "min": 0.259,
          "max": 0.286
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 1.13,
          "percentage": 20.97
        },
        "EVI_statistics": {
          "mean": 0.295,
          "median": 0.294,
          "min": 0.286,
          "max": 0.313
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.14,
          "percentage": 2.63
        },
        "EVI_statistics": {
          "mean": 0.325,
          "median": 0.322,
          "min": 0.313,
          "max": 0.372
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.96,
            "area_percentage": 18.36,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.78,
            "area_percentage": 14.91,
            "zone_number": 2
          },
          "similar": {
            "ha": 1.58,
            "area_percentage": 30.21,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.87,
            "area_percentage": 16.63,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.04,
            "area_percentage": 19.89,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-02-15",
      "reference_image_date": "2024-12-01",
      "change_period": 76
    },
    "median_EVI_change": {
      "old_value": 0.255,
      "new_value": 0.272,
      "difference": 0.015
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
          "ha": 5.4,
          "percentage": 99.98,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.02,
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
          "ha": 0.68,
          "percentage": 12.61,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.79,
          "percentage": 14.67,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 2.48,
          "percentage": 45.93,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.75,
          "percentage": 13.86,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.7,
          "percentage": 12.94,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.21723417244318 49.12443392252101)",
          "new_value": 0.291,
          "old_value": 0.247,
          "value_difference": 0.044,
          "area_ha": 0.111,
          "category": "major_growth",
          "location": "S",
          "id": 1
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 399.496,
      "historical_average": 437.987
    },
    "accumulated_precipitation_since_seeding": {
      "current": 109.398,
      "historical_mean": 174.596
    },
    "precipitation_summary": {
      "last_3_days": 10.393,
      "last_7_days": 10.406,
      "last_14_days": 11.073,
      "last_30_days": 16.803
    },
    "standardized_precipitation_index": {
      "1_month": -1.536,
      "3_month": -1.123,
      "6_month": 1.134
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-02-11 00:00:00",
          "temperature_mean": 0.049,
          "temperature_min": -3.305,
          "temperature_max": 3.686,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.453,
          "soiltemperature_0to10cm_mean": 0.003,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 3.001
        },
        {
          "time": "2025-02-12 00:00:00",
          "temperature_mean": -1.223,
          "temperature_min": -2.145,
          "temperature_max": -0.043,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.992,
          "soiltemperature_0to10cm_mean": 0.139,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 3.731
        },
        {
          "time": "2025-02-13 00:00:00",
          "temperature_mean": -0.957,
          "temperature_min": -2.01,
          "temperature_max": 0.444,
          "precipitation_sum": 6.0,
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
          "totalcloudcover_mean": 0.874,
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
          "totalcloudcover_mean": 0.5,
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
          "totalcloudcover_mean": 0.809,
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
          "totalcloudcover_mean": 0.584,
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
          "totalcloudcover_mean": 0.421,
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
          "totalcloudcover_mean": 0.168,
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
          "totalcloudcover_mean": 0.501,
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
          "totalcloudcover_mean": 0.007,
          "soiltemperature_0to10cm_mean": -0.784,
          "soilmoisture_0to10cm": 0.341,
          "windspeed_mean": 3.448
        },
        {
          "time": "2025-02-23 00:00:00",
          "temperature_mean": -0.676,
          "temperature_min": -4.866,
          "temperature_max": 2.505,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.832,
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
          "totalcloudcover_mean": 0.193,
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
          "totalcloudcover_mean": 0.989,
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
          "totalcloudcover_mean": 0.996,
          "soiltemperature_0to10cm_mean": 1.987,
          "soilmoisture_0to10cm": 0.379,
          "windspeed_mean": 0.88
        },
        {
          "time": "2025-02-27 00:00:00",
          "temperature_mean": 3.644,
          "temperature_min": -0.341,
          "temperature_max": 7.936,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.889,
          "soiltemperature_0to10cm_mean": 1.53,
          "soilmoisture_0to10cm": 0.372,
          "windspeed_mean": 1.05
        },
        {
          "time": "2025-02-28 00:00:00",
          "temperature_mean": 2.652,
          "temperature_min": -2.063,
          "temperature_max": 7.234,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.416,
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
      "date": "2025-04-13",
      "day_since": -59
    },
    "beginning_of_heading": {
      "date": "2025-05-27",
      "day_since": -103
    },
    "beginning_of_ripenes": {
      "date": "2025-07-11",
      "day_since": -148
    },
    "harvest": {
      "date": "2025-07-29",
      "day_since": -166
    }
  },
  "timing_of_field_operations": {
    "2025-02-11": {
      "weather_conditions": {
        "temperature_mean": 0.049,
        "temperature_min": -3.305,
        "temperature_max": 3.686,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.453,
        "soiltemperature_0to10cm_mean": 0.003,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 3.001
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-02-12": {
      "weather_conditions": {
        "temperature_mean": -1.223,
        "temperature_min": -2.145,
        "temperature_max": -0.043,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.992,
        "soiltemperature_0to10cm_mean": 0.139,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 3.731
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-02-13": {
      "weather_conditions": {
        "temperature_mean": -0.957,
        "temperature_min": -2.01,
        "temperature_max": 0.444,
        "precipitation_sum": 6.0,
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
        "totalcloudcover_mean": 0.874,
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
        "totalcloudcover_mean": 0.5,
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
        "totalcloudcover_mean": 0.809,
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
        "totalcloudcover_mean": 0.584,
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
        "totalcloudcover_mean": 0.421,
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
        "totalcloudcover_mean": 0.168,
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
        "totalcloudcover_mean": 0.501,
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
        "totalcloudcover_mean": 0.007,
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
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.832,
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
        "totalcloudcover_mean": 0.193,
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
        "totalcloudcover_mean": 0.989,
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
        "totalcloudcover_mean": 0.996,
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
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.889,
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
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.416,
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
  "polygon_wkt": "POLYGON ((16.21571123 49.12461791, 16.21586565 49.12504119, 16.21595902 49.12530697, 16.21621375 49.1260436, 16.21646778 49.12676842, 16.21661007 49.12715821, 16.21666468 49.12716137, 16.21757486 49.12664038, 16.21798092 49.12641908, 16.21937769 49.12566535, 16.21938524 49.1256593, 16.21929608 49.12558543, 16.21938998 49.12553046, 16.21898185 49.12521055, 16.21877139 49.12499513, 16.21868847 49.1248412, 16.21868699 49.12483835, 16.21857322 49.12458693, 16.21850253 49.12442476, 16.2184035 49.12420938, 16.21834028 49.12409248, 16.21831528 49.12404409, 16.21825791 49.12400606, 16.21820562 49.12399487, 16.21813469 49.12399507, 16.21807136 49.1240077, 16.21744351 49.12415805, 16.21700097 49.12426562, 16.2164673 49.12439378, 16.21608931 49.12448973, 16.21585881 49.12454465, 16.21574997 49.12457485, 16.21570627 49.12459436, 16.21571123 49.12461791))"
};
