// Field data for MAN250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAN250315",
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
    "2025-01-10": {
      "min": 0.097,
      "max": 0.379,
      "median": 0.163,
      "mean": 0.168,
      "sd": 0.028
    },
    "2025-03-05": {
      "min": 0.162,
      "max": 0.347,
      "median": 0.252,
      "mean": 0.254,
      "sd": 0.016
    },
    "2025-03-07": {
      "min": 0.069,
      "max": 0.279,
      "median": 0.174,
      "mean": 0.176,
      "sd": 0.018
    },
    "2025-03-08": {
      "min": 0.126,
      "max": 0.293,
      "median": 0.2,
      "mean": 0.201,
      "sd": 0.017
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 11.695,
      "area_percentage": 0.669
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 5.8,
        "area_percentage": 0.331
      },
      "very_low_vegetation": {
        "area_ha": 11.695,
        "area_percentage": 0.669
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
    "evi_median": 0.208,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.48,
          "percentage": 2.75
        },
        "EVI_statistics": {
          "mean": 0.17,
          "median": 0.172,
          "min": 0.144,
          "max": 0.177
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 4.32,
          "percentage": 24.7
        },
        "EVI_statistics": {
          "mean": 0.19,
          "median": 0.19,
          "min": 0.177,
          "max": 0.197
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 7.73,
          "percentage": 44.16
        },
        "EVI_statistics": {
          "mean": 0.208,
          "median": 0.208,
          "min": 0.197,
          "max": 0.218
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.01,
          "percentage": 22.91
        },
        "EVI_statistics": {
          "mean": 0.226,
          "median": 0.225,
          "min": 0.218,
          "max": 0.239
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.96,
          "percentage": 5.48
        },
        "EVI_statistics": {
          "mean": 0.248,
          "median": 0.246,
          "min": 0.239,
          "max": 0.293
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 4.66,
            "area_percentage": 28.16,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 2.51,
            "area_percentage": 15.17,
            "zone_number": 2
          },
          "similar": {
            "ha": 2.07,
            "area_percentage": 12.51,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 2.29,
            "area_percentage": 13.84,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 5.02,
            "area_percentage": 30.33,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-03-15",
      "reference_image_date": "2025-01-10",
      "change_period": 64
    },
    "median_EVI_change": {
      "old_value": 0.163,
      "new_value": 0.208,
      "difference": 0.043
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
          "percentage": 0.59,
          "zone_number": 2
        },
        "no_change": {
          "ha": 16.86,
          "percentage": 96.39,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.53,
          "percentage": 3.02,
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
          "ha": 2.92,
          "percentage": 16.68,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 2.63,
          "percentage": 15.02,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 6.47,
          "percentage": 36.99,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.57,
          "percentage": 14.67,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.91,
          "percentage": 16.64,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.178675113387097 49.12312462637037)",
          "new_value": 0.198,
          "old_value": 0.191,
          "value_difference": 0.007,
          "area_ha": 0.26,
          "category": "major_decline",
          "location": "NW",
          "id": 1
        },
        {
          "geometry": "POINT (16.182940609193547 49.12122927703704)",
          "new_value": 0.229,
          "old_value": 0.158,
          "value_difference": 0.071,
          "area_ha": 0.3,
          "category": "major_growth",
          "location": "C",
          "id": 2
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 496.392,
      "historical_average": 529.752
    },
    "accumulated_precipitation_since_seeding": {
      "current": 114.251,
      "historical_mean": 189.665
    },
    "precipitation_summary": {
      "last_3_days": 14.63,
      "last_7_days": 18.18,
      "last_14_days": 18.436,
      "last_30_days": 26.936
    },
    "standardized_precipitation_index": {
      "1_month": -0.542,
      "3_month": -1.25,
      "6_month": -1.132
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-03-11 00:00:00",
          "temperature_mean": 8.533,
          "temperature_min": 3.757,
          "temperature_max": 13.56,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.677,
          "soiltemperature_0to10cm_mean": 8.027,
          "soilmoisture_0to10cm": 0.359,
          "windspeed_mean": 1.716
        },
        {
          "time": "2025-03-12 00:00:00",
          "temperature_mean": 7.624,
          "temperature_min": 1.427,
          "temperature_max": 13.822,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.844,
          "soiltemperature_0to10cm_mean": 6.289,
          "soilmoisture_0to10cm": 0.349,
          "windspeed_mean": 1.63
        },
        {
          "time": "2025-03-13 00:00:00",
          "temperature_mean": 5.023,
          "temperature_min": 0.695,
          "temperature_max": 7.456,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.796,
          "soiltemperature_0to10cm_mean": 5.335,
          "soilmoisture_0to10cm": 0.382,
          "windspeed_mean": 1.238
        },
        {
          "time": "2025-03-14 00:00:00",
          "temperature_mean": 2.36,
          "temperature_min": -0.819,
          "temperature_max": 4.946,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.981,
          "soiltemperature_0to10cm_mean": 3.132,
          "soilmoisture_0to10cm": 0.387,
          "windspeed_mean": 1.718
        },
        {
          "time": "2025-03-15 00:00:00",
          "temperature_mean": 2.443,
          "temperature_min": 0.947,
          "temperature_max": 4.444,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.996,
          "soiltemperature_0to10cm_mean": 3.042,
          "soilmoisture_0to10cm": 0.385,
          "windspeed_mean": 3.676
        },
        {
          "time": "2025-03-16 00:00:00",
          "temperature_mean": 3.122,
          "temperature_min": 0.045,
          "temperature_max": 7.915,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.495,
          "soiltemperature_0to10cm_mean": 3.894,
          "soilmoisture_0to10cm": 0.373,
          "windspeed_mean": 2.54
        },
        {
          "time": "2025-03-17 00:00:00",
          "temperature_mean": 0.784,
          "temperature_min": -2.899,
          "temperature_max": 3.972,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.366,
          "soiltemperature_0to10cm_mean": 2.365,
          "soilmoisture_0to10cm": 0.365,
          "windspeed_mean": 3.55
        },
        {
          "time": "2025-03-18 00:00:00",
          "temperature_mean": -0.413,
          "temperature_min": -4.641,
          "temperature_max": 4.203,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.028,
          "soiltemperature_0to10cm_mean": 1.156,
          "soilmoisture_0to10cm": 0.358,
          "windspeed_mean": 0.195
        },
        {
          "time": "2025-03-19 00:00:00",
          "temperature_mean": 1.433,
          "temperature_min": -4.03,
          "temperature_max": 7.267,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 0.841,
          "soilmoisture_0to10cm": 0.354,
          "windspeed_mean": 1.953
        },
        {
          "time": "2025-03-20 00:00:00",
          "temperature_mean": 2.362,
          "temperature_min": -4.273,
          "temperature_max": 9.287,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 1.601,
          "soilmoisture_0to10cm": 0.35,
          "windspeed_mean": 1.811
        },
        {
          "time": "2025-03-21 00:00:00",
          "temperature_mean": 5.354,
          "temperature_min": -1.354,
          "temperature_max": 12.069,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 3.196,
          "soilmoisture_0to10cm": 0.346,
          "windspeed_mean": 1.911
        },
        {
          "time": "2025-03-22 00:00:00",
          "temperature_mean": 7.52,
          "temperature_min": 2.662,
          "temperature_max": 12.859,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.408,
          "soiltemperature_0to10cm_mean": 5.859,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 3.488
        },
        {
          "time": "2025-03-23 00:00:00",
          "temperature_mean": 9.157,
          "temperature_min": 4.663,
          "temperature_max": 15.539,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.778,
          "soiltemperature_0to10cm_mean": 7.626,
          "soilmoisture_0to10cm": 0.351,
          "windspeed_mean": 2.131
        },
        {
          "time": "2025-03-24 00:00:00",
          "temperature_mean": 7.532,
          "temperature_min": 2.505,
          "temperature_max": 13.117,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.838,
          "soiltemperature_0to10cm_mean": 7.016,
          "soilmoisture_0to10cm": 0.38,
          "windspeed_mean": 1.249
        },
        {
          "time": "2025-03-25 00:00:00",
          "temperature_mean": 8.454,
          "temperature_min": 2.865,
          "temperature_max": 14.208,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.294,
          "soiltemperature_0to10cm_mean": 8.208,
          "soilmoisture_0to10cm": 0.378,
          "windspeed_mean": 0.714
        },
        {
          "time": "2025-03-26 00:00:00",
          "temperature_mean": 8.113,
          "temperature_min": 2.899,
          "temperature_max": 13.39,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.226,
          "soiltemperature_0to10cm_mean": 8.004,
          "soilmoisture_0to10cm": 0.366,
          "windspeed_mean": 2.222
        },
        {
          "time": "2025-03-27 00:00:00",
          "temperature_mean": 7.455,
          "temperature_min": 4.267,
          "temperature_max": 10.29,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.594,
          "soiltemperature_0to10cm_mean": 7.7,
          "soilmoisture_0to10cm": 0.357,
          "windspeed_mean": 3.109
        },
        {
          "time": "2025-03-28 00:00:00",
          "temperature_mean": 8.56,
          "temperature_min": 2.424,
          "temperature_max": 13.88,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.517,
          "soiltemperature_0to10cm_mean": 8.05,
          "soilmoisture_0to10cm": 0.35,
          "windspeed_mean": 2.459
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-10-14",
      "day_since": 152
    },
    "crop_emergence": {
      "date": "2024-10-26",
      "day_since": 139
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-21",
      "day_since": -38
    },
    "beginning_of_heading": {
      "date": "2025-06-06",
      "day_since": -84
    },
    "beginning_of_ripenes": {
      "date": "2025-07-19",
      "day_since": -127
    },
    "harvest": {
      "date": "2025-08-06",
      "day_since": -145
    }
  },
  "timing_of_field_operations": {
    "2025-03-11": {
      "weather_conditions": {
        "temperature_mean": 8.533,
        "temperature_min": 3.757,
        "temperature_max": 13.56,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.677,
        "soiltemperature_0to10cm_mean": 8.027,
        "soilmoisture_0to10cm": 0.359,
        "windspeed_mean": 1.716
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
    "2025-03-12": {
      "weather_conditions": {
        "temperature_mean": 7.624,
        "temperature_min": 1.427,
        "temperature_max": 13.822,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.844,
        "soiltemperature_0to10cm_mean": 6.289,
        "soilmoisture_0to10cm": 0.349,
        "windspeed_mean": 1.63
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
    "2025-03-13": {
      "weather_conditions": {
        "temperature_mean": 5.023,
        "temperature_min": 0.695,
        "temperature_max": 7.456,
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.796,
        "soiltemperature_0to10cm_mean": 5.335,
        "soilmoisture_0to10cm": 0.382,
        "windspeed_mean": 1.238
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
    "2025-03-14": {
      "weather_conditions": {
        "temperature_mean": 2.36,
        "temperature_min": -0.819,
        "temperature_max": 4.946,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.981,
        "soiltemperature_0to10cm_mean": 3.132,
        "soilmoisture_0to10cm": 0.387,
        "windspeed_mean": 1.718
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
    "2025-03-15": {
      "weather_conditions": {
        "temperature_mean": 2.443,
        "temperature_min": 0.947,
        "temperature_max": 4.444,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.996,
        "soiltemperature_0to10cm_mean": 3.042,
        "soilmoisture_0to10cm": 0.385,
        "windspeed_mean": 3.676
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
    "2025-03-16": {
      "weather_conditions": {
        "temperature_mean": 3.122,
        "temperature_min": 0.045,
        "temperature_max": 7.915,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.495,
        "soiltemperature_0to10cm_mean": 3.894,
        "soilmoisture_0to10cm": 0.373,
        "windspeed_mean": 2.54
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
    "2025-03-17": {
      "weather_conditions": {
        "temperature_mean": 0.784,
        "temperature_min": -2.899,
        "temperature_max": 3.972,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.366,
        "soiltemperature_0to10cm_mean": 2.365,
        "soilmoisture_0to10cm": 0.365,
        "windspeed_mean": 3.55
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
    "2025-03-18": {
      "weather_conditions": {
        "temperature_mean": -0.413,
        "temperature_min": -4.641,
        "temperature_max": 4.203,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.028,
        "soiltemperature_0to10cm_mean": 1.156,
        "soilmoisture_0to10cm": 0.358,
        "windspeed_mean": 0.195
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
    "2025-03-19": {
      "weather_conditions": {
        "temperature_mean": 1.433,
        "temperature_min": -4.03,
        "temperature_max": 7.267,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 0.841,
        "soilmoisture_0to10cm": 0.354,
        "windspeed_mean": 1.953
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
    "2025-03-20": {
      "weather_conditions": {
        "temperature_mean": 2.362,
        "temperature_min": -4.273,
        "temperature_max": 9.287,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 1.601,
        "soilmoisture_0to10cm": 0.35,
        "windspeed_mean": 1.811
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
    "2025-03-21": {
      "weather_conditions": {
        "temperature_mean": 5.354,
        "temperature_min": -1.354,
        "temperature_max": 12.069,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 3.196,
        "soilmoisture_0to10cm": 0.346,
        "windspeed_mean": 1.911
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
    "2025-03-22": {
      "weather_conditions": {
        "temperature_mean": 7.52,
        "temperature_min": 2.662,
        "temperature_max": 12.859,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.408,
        "soiltemperature_0to10cm_mean": 5.859,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 3.488
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
    "2025-03-23": {
      "weather_conditions": {
        "temperature_mean": 9.157,
        "temperature_min": 4.663,
        "temperature_max": 15.539,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.778,
        "soiltemperature_0to10cm_mean": 7.626,
        "soilmoisture_0to10cm": 0.351,
        "windspeed_mean": 2.131
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
    "2025-03-24": {
      "weather_conditions": {
        "temperature_mean": 7.532,
        "temperature_min": 2.505,
        "temperature_max": 13.117,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.838,
        "soiltemperature_0to10cm_mean": 7.016,
        "soilmoisture_0to10cm": 0.38,
        "windspeed_mean": 1.249
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
    "2025-03-25": {
      "weather_conditions": {
        "temperature_mean": 8.454,
        "temperature_min": 2.865,
        "temperature_max": 14.208,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.294,
        "soiltemperature_0to10cm_mean": 8.208,
        "soilmoisture_0to10cm": 0.378,
        "windspeed_mean": 0.714
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
    "2025-03-26": {
      "weather_conditions": {
        "temperature_mean": 8.113,
        "temperature_min": 2.899,
        "temperature_max": 13.39,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.226,
        "soiltemperature_0to10cm_mean": 8.004,
        "soilmoisture_0to10cm": 0.366,
        "windspeed_mean": 2.222
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
    "2025-03-27": {
      "weather_conditions": {
        "temperature_mean": 7.455,
        "temperature_min": 4.267,
        "temperature_max": 10.29,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.594,
        "soiltemperature_0to10cm_mean": 7.7,
        "soilmoisture_0to10cm": 0.357,
        "windspeed_mean": 3.109
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
    "2025-03-28": {
      "weather_conditions": {
        "temperature_mean": 8.56,
        "temperature_min": 2.424,
        "temperature_max": 13.88,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.517,
        "soiltemperature_0to10cm_mean": 8.05,
        "soilmoisture_0to10cm": 0.35,
        "windspeed_mean": 2.459
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
  "polygon_wkt": "POLYGON ((16.17823519 49.12326941, 16.17825865 49.12326568, 16.17830052 49.12325374, 16.178356 49.1232448, 16.17841775 49.12324231, 16.18187852 49.12277889, 16.18188136 49.12277854, 16.18271821 49.12268644, 16.18356823 49.12257459, 16.18356836 49.12257457, 16.18485972 49.12240606, 16.18524052 49.12235473, 16.18524141 49.12235461, 16.18568372 49.12229833, 16.18635542 49.12220814, 16.1864609 49.12219349, 16.18648907 49.12218977, 16.18655741 49.12218859, 16.18656421 49.12219073, 16.18655354 49.12215477, 16.18644325 49.12183683, 16.18620989 49.12099287, 16.18609685 49.12066015, 16.18594414 49.12015458, 16.18581567 49.11980241, 16.1857933 49.1197628, 16.18575485 49.11973838, 16.18557318 49.11971619, 16.18552238 49.11971563, 16.18533905 49.11973169, 16.18402879 49.11991002, 16.18255971 49.12009243, 16.18189079 49.12019093, 16.18121842 49.12028118, 16.18046676 49.12037987, 16.18003682 49.12044673, 16.17977425 49.12050214, 16.1796682 49.12052455, 16.17948548 49.12056836, 16.17907655 49.12066047, 16.17766751 49.12104861, 16.17761415 49.12107826, 16.17758631 49.12109853, 16.17757768 49.12112024, 16.17759054 49.12117228, 16.17765598 49.12140353, 16.17783234 49.12190989, 16.17791959 49.12206665, 16.1779669 49.12222314, 16.17802284 49.12241739, 16.17810085 49.12271484, 16.17813337 49.12282705, 16.17822363 49.1232018, 16.17823519 49.12326941))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
