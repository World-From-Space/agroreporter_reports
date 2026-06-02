// Field data for MAR250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAR250315",
  "metadata": {
    "field_area_ha": 6.56,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Mohelno"
    },
    "terrain": {
      "variability": 5.64,
      "mean_elevation": 385.166,
      "min_elevation": 381.776,
      "max_elevation": 387.415
    },
    "soil": {
      "bulk_density kg/dm³": 1.319,
      "cation_exchange_capacity cmol(c)/kg": 21.15,
      "clay_particles g/100g (%)": 25.578,
      "sand particles g/100g (%)": 22.146,
      "silt particles g/100g (%)": 52.276,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-01-10": {
      "min": 0.094,
      "max": 0.36,
      "median": 0.169,
      "mean": 0.171,
      "sd": 0.021
    },
    "2025-02-04": {
      "min": 0.183,
      "max": 0.342,
      "median": 0.237,
      "mean": 0.238,
      "sd": 0.016
    },
    "2025-02-28": {
      "min": 0.169,
      "max": 0.3,
      "median": 0.202,
      "mean": 0.203,
      "sd": 0.012
    },
    "2025-03-05": {
      "min": 0.224,
      "max": 0.357,
      "median": 0.282,
      "mean": 0.283,
      "sd": 0.014
    },
    "2025-03-07": {
      "min": 0.166,
      "max": 0.285,
      "median": 0.207,
      "mean": 0.209,
      "sd": 0.015
    },
    "2025-03-08": {
      "min": 0.183,
      "max": 0.297,
      "median": 0.231,
      "mean": 0.233,
      "sd": 0.015
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 6.336,
      "area_percentage": 0.989
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.068,
        "area_percentage": 0.011
      },
      "very_low_vegetation": {
        "area_ha": 6.329,
        "area_percentage": 0.988
      },
      "low_vegetation": {
        "area_ha": 0.007,
        "area_percentage": 0.001
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
    "evi_median": 0.237,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.09,
          "percentage": 1.35
        },
        "EVI_statistics": {
          "mean": 0.196,
          "median": 0.197,
          "min": 0.172,
          "max": 0.201
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 1.46,
          "percentage": 22.74
        },
        "EVI_statistics": {
          "mean": 0.216,
          "median": 0.218,
          "min": 0.201,
          "max": 0.225
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 3.22,
          "percentage": 50.29
        },
        "EVI_statistics": {
          "mean": 0.236,
          "median": 0.236,
          "min": 0.225,
          "max": 0.248
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 1.41,
          "percentage": 22.04
        },
        "EVI_statistics": {
          "mean": 0.257,
          "median": 0.256,
          "min": 0.248,
          "max": 0.272
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.23,
          "percentage": 3.58
        },
        "EVI_statistics": {
          "mean": 0.282,
          "median": 0.279,
          "min": 0.272,
          "max": 0.318
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.5,
            "area_percentage": 7.95,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 1.87,
            "area_percentage": 29.73,
            "zone_number": 2
          },
          "similar": {
            "ha": 1.0,
            "area_percentage": 15.9,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 1.0,
            "area_percentage": 15.9,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.92,
            "area_percentage": 30.52,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-03-15",
      "reference_image_date": "2025-02-28",
      "change_period": 15
    },
    "median_EVI_change": {
      "old_value": 0.202,
      "new_value": 0.237,
      "difference": 0.035
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
          "ha": 6.37,
          "percentage": 99.47,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.03,
          "percentage": 0.53,
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
          "ha": 1.1,
          "percentage": 17.22,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.87,
          "percentage": 13.66,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 2.38,
          "percentage": 37.15,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 1.01,
          "percentage": 15.71,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.04,
          "percentage": 16.26,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
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
      "date": "2024-10-27",
      "day_since": 138
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-22",
      "day_since": -39
    },
    "beginning_of_heading": {
      "date": "2025-06-09",
      "day_since": -87
    },
    "beginning_of_ripenes": {
      "date": "2025-07-22",
      "day_since": -130
    },
    "harvest": {
      "date": "2025-08-08",
      "day_since": -147
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
  "polygon_wkt": "POLYGON ((16.20478025 49.11389784, 16.20476604 49.11389993, 16.20435411 49.11394104, 16.20379657 49.1139957, 16.20324797 49.1140374, 16.20317322 49.11404636, 16.20314098 49.11405781, 16.20311783 49.11408957, 16.20311504 49.11412484, 16.20312521 49.11416968, 16.20315719 49.11428528, 16.20316897 49.11431616, 16.20320063 49.1143992, 16.20328562 49.11460177, 16.20340987 49.11487747, 16.20345288 49.11500056, 16.20356999 49.11531324, 16.20422686 49.1168727, 16.20487373 49.11846913, 16.20493196 49.11861321, 16.20497188 49.11862794, 16.2050152 49.1186334, 16.20507781 49.11862577, 16.2051479 49.11861423, 16.20589603 49.11852135, 16.20616296 49.11850529, 16.20625316 49.11849986, 16.20645537 49.11847872, 16.20663821 49.11845795, 16.20663962 49.1184576, 16.20623431 49.11747745, 16.20478025 49.11389784))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
