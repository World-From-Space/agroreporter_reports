// Field data for LAM250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAM250215",
  "metadata": {
    "field_area_ha": 25.86,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Martínkov"
    },
    "terrain": {
      "variability": 16.08,
      "mean_elevation": 561.69,
      "min_elevation": 551.732,
      "max_elevation": 567.812
    },
    "soil": {
      "bulk_density kg/dm³": 1.323,
      "cation_exchange_capacity cmol(c)/kg": 18.977,
      "clay_particles g/100g (%)": 19.261,
      "sand particles g/100g (%)": 32.839,
      "silt particles g/100g (%)": 47.899,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2024-09-18": {
      "min": 0.095,
      "max": 0.467,
      "median": 0.146,
      "mean": 0.149,
      "sd": 0.019
    },
    "2024-09-27": {
      "min": 0.117,
      "max": 0.523,
      "median": 0.164,
      "mean": 0.167,
      "sd": 0.022
    },
    "2024-10-15": {
      "min": 0.1,
      "max": 0.424,
      "median": 0.145,
      "mean": 0.15,
      "sd": 0.023
    },
    "2024-10-28": {
      "min": 0.17,
      "max": 0.491,
      "median": 0.243,
      "mean": 0.25,
      "sd": 0.028
    },
    "2024-11-04": {
      "min": 0.183,
      "max": 0.492,
      "median": 0.275,
      "mean": 0.282,
      "sd": 0.029
    },
    "2024-11-10": {
      "min": 0.209,
      "max": 0.537,
      "median": 0.311,
      "mean": 0.317,
      "sd": 0.031
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 25.755,
      "area_percentage": 1.0
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 10.112,
        "area_percentage": 0.393
      },
      "low_vegetation": {
        "area_ha": 15.071,
        "area_percentage": 0.585
      },
      "medium vegetation": {
        "area_ha": 0.572,
        "area_percentage": 0.022
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
    "evi_median": 0.306,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.63,
          "percentage": 2.45
        },
        "EVI_statistics": {
          "mean": 0.249,
          "median": 0.252,
          "min": 0.203,
          "max": 0.26
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 5.64,
          "percentage": 21.89
        },
        "EVI_statistics": {
          "mean": 0.28,
          "median": 0.282,
          "min": 0.26,
          "max": 0.291
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 12.24,
          "percentage": 47.52
        },
        "EVI_statistics": {
          "mean": 0.305,
          "median": 0.305,
          "min": 0.291,
          "max": 0.321
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.68,
          "percentage": 18.18
        },
        "EVI_statistics": {
          "mean": 0.334,
          "median": 0.333,
          "min": 0.321,
          "max": 0.352
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 2.56,
          "percentage": 9.96
        },
        "EVI_statistics": {
          "mean": 0.383,
          "median": 0.374,
          "min": 0.352,
          "max": 0.52
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 4.41,
            "area_percentage": 17.44,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 6.33,
            "area_percentage": 25.03,
            "zone_number": 2
          },
          "similar": {
            "ha": 4.77,
            "area_percentage": 18.86,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 2.37,
            "area_percentage": 9.37,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 7.41,
            "area_percentage": 29.3,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-02-15",
      "reference_image_date": "2024-11-01",
      "change_period": 106
    },
    "median_EVI_change": {
      "old_value": 0.256,
      "new_value": 0.306,
      "difference": 0.048
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
          "ha": 0.01,
          "percentage": 0.05,
          "zone_number": 2
        },
        "no_change": {
          "ha": 24.04,
          "percentage": 93.33,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 1.7,
          "percentage": 6.61,
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
          "ha": 3.05,
          "percentage": 11.83,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.45,
          "percentage": 13.41,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 12.68,
          "percentage": 49.25,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.57,
          "percentage": 13.88,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 3.0,
          "percentage": 11.63,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
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
      "date": "2024-10-07",
      "day_since": 129
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
  "polygon_wkt": "POLYGON ((15.71932294 49.09325389, 15.71900233 49.09334561, 15.71868234 49.09344192, 15.71849606 49.09351188, 15.71832131 49.09358793, 15.71785453 49.09378752, 15.71750276 49.09394942, 15.7173784 49.09403277, 15.71734162 49.09412187, 15.71731855 49.09417213, 15.71731068 49.09422242, 15.71730454 49.09426923, 15.71730871 49.09431971, 15.71735937 49.0944194, 15.71740886 49.09447409, 15.71758586 49.09462673, 15.7176143 49.09466412, 15.71769275 49.09498932, 15.71772879 49.0951711, 15.71772769 49.095281, 15.71769733 49.09546971, 15.71769823 49.09555196, 15.7177176 49.09563796, 15.71778768 49.09580375, 15.71789231 49.09597236, 15.71796688 49.09620767, 15.71799942 49.09630686, 15.71802981 49.09646504, 15.71803666 49.09658048, 15.71802038 49.09668257, 15.71794971 49.09678241, 15.71794959 49.09681561, 15.71795127 49.09684439, 15.71798282 49.09689961, 15.7187124 49.09734174, 15.71957696 49.09787039, 15.71992492 49.09815503, 15.72054878 49.098696, 15.72066397 49.09876757, 15.72073098 49.09880093, 15.72083007 49.09885493, 15.72145156 49.09912218, 15.72218576 49.09942186, 15.72237443 49.09948382, 15.72254048 49.09951864, 15.72266737 49.09954132, 15.72278975 49.09955096, 15.7229738 49.09956275, 15.72325836 49.09956796, 15.72468353 49.09952296, 15.7263553 49.09948289, 15.72087814 49.09291561, 15.72018542 49.09300823, 15.71993725 49.09306955, 15.71973228 49.09316479, 15.71932294 49.09325389), (15.71887806 49.09597622, 15.71899102 49.09588058, 15.71917374 49.09582634, 15.71935681 49.09581982, 15.71943874 49.0958442, 15.71946402 49.09588144, 15.71946819 49.09591851, 15.7194339 49.09594533, 15.71930607 49.09599796, 15.7190597 49.09607709, 15.71896412 49.09610243, 15.7189019 49.09609456, 15.71886587 49.0960678, 15.71885278 49.0960399, 15.71887806 49.09597622))"
};
