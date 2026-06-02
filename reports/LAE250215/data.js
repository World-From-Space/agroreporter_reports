// Field data for LAE250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAE250215",
  "metadata": {
    "field_area_ha": 30.952,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Martínkov"
    },
    "terrain": {
      "variability": 30.805,
      "mean_elevation": 565.298,
      "min_elevation": 554.084,
      "max_elevation": 584.889
    },
    "soil": {
      "bulk_density kg/dm³": 1.326,
      "cation_exchange_capacity cmol(c)/kg": 20.194,
      "clay_particles g/100g (%)": 21.103,
      "sand particles g/100g (%)": 33.119,
      "silt particles g/100g (%)": 45.759,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2024-12-26": {
      "min": 0.201,
      "max": 0.44,
      "median": 0.349,
      "mean": 0.344,
      "sd": 0.032
    },
    "2024-12-30": {
      "min": 0.161,
      "max": 0.453,
      "median": 0.333,
      "mean": 0.328,
      "sd": 0.035
    },
    "2025-01-10": {
      "min": 0.146,
      "max": 0.404,
      "median": 0.321,
      "mean": 0.314,
      "sd": 0.033
    },
    "2025-02-01": {
      "min": 0.208,
      "max": 0.438,
      "median": 0.358,
      "mean": 0.353,
      "sd": 0.029
    },
    "2025-02-03": {
      "min": 0.247,
      "max": 0.473,
      "median": 0.395,
      "mean": 0.39,
      "sd": 0.027
    },
    "2025-02-05": {
      "min": 0.228,
      "max": 0.439,
      "median": 0.361,
      "mean": 0.356,
      "sd": 0.024
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 30.98,
      "area_percentage": 1.0
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 1.48,
        "area_percentage": 0.048
      },
      "low_vegetation": {
        "area_ha": 28.863,
        "area_percentage": 0.932
      },
      "medium vegetation": {
        "area_ha": 0.636,
        "area_percentage": 0.021
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
    "evi_median": 0.364,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 2.06,
          "percentage": 6.66
        },
        "EVI_statistics": {
          "mean": 0.282,
          "median": 0.288,
          "min": 0.212,
          "max": 0.309
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 6.3,
          "percentage": 20.32
        },
        "EVI_statistics": {
          "mean": 0.331,
          "median": 0.332,
          "min": 0.309,
          "max": 0.346
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 17.22,
          "percentage": 55.57
        },
        "EVI_statistics": {
          "mean": 0.366,
          "median": 0.367,
          "min": 0.346,
          "max": 0.382
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 5.38,
          "percentage": 17.36
        },
        "EVI_statistics": {
          "mean": 0.391,
          "median": 0.389,
          "min": 0.382,
          "max": 0.418
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.02,
          "percentage": 0.08
        },
        "EVI_statistics": {
          "mean": 0.424,
          "median": 0.423,
          "min": 0.419,
          "max": 0.433
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 2.3,
            "area_percentage": 7.65,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 7.74,
            "area_percentage": 25.76,
            "zone_number": 2
          },
          "similar": {
            "ha": 11.8,
            "area_percentage": 39.27,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 5.92,
            "area_percentage": 19.7,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 2.29,
            "area_percentage": 7.62,
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
      "old_value": 0.358,
      "new_value": 0.364,
      "difference": 0.005
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
          "ha": 30.98,
          "percentage": 100.0,
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
          "ha": 2.98,
          "percentage": 9.63,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.37,
          "percentage": 14.11,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 16.29,
          "percentage": 52.59,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.41,
          "percentage": 14.25,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.92,
          "percentage": 9.42,
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
      "date": "2024-10-08",
      "day_since": 128
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
      "date": "2025-07-08",
      "day_since": -145
    },
    "harvest": {
      "date": "2025-07-26",
      "day_since": -163
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
  "polygon_wkt": "POLYGON ((15.72453719 49.10445896, 15.72400202 49.1048135, 15.72217492 49.10601035, 15.72156598 49.10641648, 15.72135444 49.10656668, 15.72125081 49.10665652, 15.72119075 49.10678212, 15.72103458 49.10718453, 15.72104386 49.10734889, 15.72117759 49.10775594, 15.72124021 49.10799724, 15.72133676 49.10830287, 15.72146802 49.10854326, 15.72156779 49.10867472, 15.72161531 49.10871918, 15.72167368 49.10869941, 15.72175588 49.10864973, 15.72186669 49.10858691, 15.72200709 49.10850559, 15.72218294 49.10842178, 15.72224792 49.10842584, 15.72232353 49.10844991, 15.72242937 49.10849069, 15.72249494 49.10851595, 15.72253014 49.10852953, 15.72276041 49.10861837, 15.72292248 49.10868794, 15.73489041 49.10133819, 15.73479011 49.10130913, 15.73438195 49.10118589, 15.73426319 49.10115004, 15.73263179 49.10065746, 15.73128414 49.10030127, 15.73116671 49.10028484, 15.73107144 49.10028693, 15.73097571 49.10029978, 15.73084883 49.10036769, 15.73018398 49.1008168, 15.72972452 49.10106459, 15.72926067 49.10135637, 15.72836649 49.1019162, 15.72648608 49.10316152, 15.7254351 49.10386309, 15.72487927 49.10422506, 15.7247392 49.10438448, 15.72467025 49.10442883, 15.72453719 49.10445896))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
