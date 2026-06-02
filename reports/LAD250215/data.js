// Field data for LAD250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAD250215",
  "metadata": {
    "field_area_ha": 21.833,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lesonice"
    },
    "terrain": {
      "variability": 20.132,
      "mean_elevation": 543.793,
      "min_elevation": 535.254,
      "max_elevation": 555.385
    },
    "soil": {
      "bulk_density kg/dm³": 1.332,
      "cation_exchange_capacity cmol(c)/kg": 20.964,
      "clay_particles g/100g (%)": 20.336,
      "sand particles g/100g (%)": 37.904,
      "silt particles g/100g (%)": 41.779,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2024-12-21": {
      "min": 0.152,
      "max": 0.463,
      "median": 0.325,
      "mean": 0.32,
      "sd": 0.036
    },
    "2024-12-26": {
      "min": 0.144,
      "max": 0.494,
      "median": 0.34,
      "mean": 0.334,
      "sd": 0.039
    },
    "2024-12-30": {
      "min": 0.12,
      "max": 0.509,
      "median": 0.319,
      "mean": 0.312,
      "sd": 0.043
    },
    "2025-01-10": {
      "min": 0.098,
      "max": 0.44,
      "median": 0.307,
      "mean": 0.302,
      "sd": 0.038
    },
    "2025-02-01": {
      "min": 0.178,
      "max": 0.494,
      "median": 0.348,
      "mean": 0.344,
      "sd": 0.033
    },
    "2025-02-05": {
      "min": 0.209,
      "max": 0.454,
      "median": 0.348,
      "mean": 0.345,
      "sd": 0.029
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 21.64,
      "area_percentage": 0.989
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.245,
        "area_percentage": 0.011
      },
      "very_low_vegetation": {
        "area_ha": 3.025,
        "area_percentage": 0.138
      },
      "low_vegetation": {
        "area_ha": 18.414,
        "area_percentage": 0.841
      },
      "medium vegetation": {
        "area_ha": 0.202,
        "area_percentage": 0.009
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
    "evi_median": 0.33,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.49,
          "percentage": 6.81
        },
        "EVI_statistics": {
          "mean": 0.238,
          "median": 0.244,
          "min": 0.148,
          "max": 0.28
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 5.11,
          "percentage": 23.35
        },
        "EVI_statistics": {
          "mean": 0.302,
          "median": 0.304,
          "min": 0.28,
          "max": 0.313
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 7.41,
          "percentage": 33.87
        },
        "EVI_statistics": {
          "mean": 0.328,
          "median": 0.327,
          "min": 0.313,
          "max": 0.346
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 6.92,
          "percentage": 31.64
        },
        "EVI_statistics": {
          "mean": 0.361,
          "median": 0.361,
          "min": 0.346,
          "max": 0.379
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.95,
          "percentage": 4.33
        },
        "EVI_statistics": {
          "mean": 0.392,
          "median": 0.387,
          "min": 0.379,
          "max": 0.46
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 3.23,
            "area_percentage": 15.09,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 4.55,
            "area_percentage": 21.25,
            "zone_number": 2
          },
          "similar": {
            "ha": 3.07,
            "area_percentage": 14.34,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 2.41,
            "area_percentage": 11.26,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 8.15,
            "area_percentage": 38.07,
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
      "old_value": 0.348,
      "new_value": 0.33,
      "difference": -0.015
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
          "ha": 0.17,
          "percentage": 0.77,
          "zone_number": 2
        },
        "no_change": {
          "ha": 21.72,
          "percentage": 99.22,
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
          "ha": 3.29,
          "percentage": 15.01,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 2.79,
          "percentage": 12.77,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 9.44,
          "percentage": 43.13,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.15,
          "percentage": 14.39,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 3.21,
          "percentage": 14.69,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.73568728461165 49.09817411578125)",
          "new_value": 0.33,
          "old_value": 0.378,
          "value_difference": -0.048,
          "area_ha": 0.346,
          "category": "major_decline",
          "location": "SW",
          "id": 1
        },
        {
          "geometry": "POINT (15.739662681893204 49.097106003281255)",
          "new_value": 0.317,
          "old_value": 0.368,
          "value_difference": -0.051,
          "area_ha": 0.35,
          "category": "major_decline",
          "location": "SE",
          "id": 2
        }
      ]
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
      "date": "2025-07-10",
      "day_since": -147
    },
    "harvest": {
      "date": "2025-07-27",
      "day_since": -164
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
  "polygon_wkt": "POLYGON ((15.73893923 49.1008205, 15.7389888 49.10080557, 15.73907601 49.10080764, 15.73915344 49.10082331, 15.73936013 49.10093062, 15.73953817 49.10099494, 15.7397719 49.10105406, 15.74034875 49.1011222, 15.74074889 49.1011578, 15.74099738 49.10118932, 15.74135921 49.10126276, 15.74139122 49.10126336, 15.74143393 49.10125329, 15.74148347 49.10123003, 15.74151788 49.10118545, 15.74154642 49.10112595, 15.74178514 49.10047057, 15.74196444 49.10007688, 15.74203389 49.09981731, 15.74206938 49.09958626, 15.7419995 49.09933344, 15.74204865 49.09908667, 15.74207664 49.09885307, 15.74210544 49.09835663, 15.7421266 49.09828445, 15.7419855 49.09802681, 15.74185833 49.09778858, 15.74170322 49.09754036, 15.74147939 49.0972587, 15.74115955 49.09694584, 15.74074863 49.09667313, 15.74045338 49.09650519, 15.74030602 49.09656023, 15.74019277 49.09657048, 15.73999272 49.09662484, 15.73965374 49.09673673, 15.73947672 49.09680894, 15.73943954 49.09683836, 15.73943126 49.09684429, 15.73935163 49.09689589, 15.73934779 49.09689827, 15.73926593 49.09694695, 15.73924573 49.0969567, 15.73922294 49.09696356, 15.73915187 49.09697946, 15.73915914 49.09698963, 15.73764492 49.09743268, 15.73765279 49.09738563, 15.73751539 49.0973861, 15.7372589 49.09744551, 15.73567961 49.09785022, 15.73566072 49.09785394, 15.73554086 49.09787087, 15.73552065 49.09787259, 15.73550028 49.09787211, 15.73541394 49.09786531, 15.73539351 49.09786254, 15.73531883 49.09784797, 15.73518663 49.09782553, 15.73502897 49.09771517, 15.73487199 49.09775554, 15.73473027 49.09785222, 15.73456322 49.09792774, 15.73439185 49.09796697, 15.73359606 49.09846922, 15.73637721 49.10126607, 15.73636683 49.101323, 15.73613625 49.10153639, 15.73619893 49.10156861, 15.73621504 49.10156029, 15.73625707 49.10156999, 15.73631819 49.10160834, 15.73637652 49.10163213, 15.73660945 49.10140507, 15.73694351 49.10108085, 15.73724436 49.10078889, 15.73753668 49.10050512, 15.73825971 49.10066769, 15.73893923 49.1008205))"
};
