// Field data for MAS250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAS250315",
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
    },
    "2025-02-04": {
      "min": 0.191,
      "max": 0.287,
      "median": 0.235,
      "mean": 0.235,
      "sd": 0.012
    },
    "2025-02-28": {
      "min": 0.152,
      "max": 0.241,
      "median": 0.201,
      "mean": 0.2,
      "sd": 0.01
    },
    "2025-03-05": {
      "min": 0.233,
      "max": 0.327,
      "median": 0.281,
      "mean": 0.28,
      "sd": 0.012
    },
    "2025-03-08": {
      "min": 0.186,
      "max": 0.266,
      "median": 0.229,
      "mean": 0.228,
      "sd": 0.012
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 2.795,
      "area_percentage": 0.983
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.048,
        "area_percentage": 0.017
      },
      "very_low_vegetation": {
        "area_ha": 2.794,
        "area_percentage": 0.983
      },
      "low_vegetation": {
        "area_ha": 0.001,
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
    "evi_median": 0.231,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.03,
          "percentage": 1.08
        },
        "EVI_statistics": {
          "mean": 0.19,
          "median": 0.192,
          "min": 0.171,
          "max": 0.196
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.59,
          "percentage": 20.67
        },
        "EVI_statistics": {
          "mean": 0.212,
          "median": 0.213,
          "min": 0.197,
          "max": 0.22
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 1.59,
          "percentage": 56.03
        },
        "EVI_statistics": {
          "mean": 0.231,
          "median": 0.231,
          "min": 0.22,
          "max": 0.243
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.6,
          "percentage": 21.21
        },
        "EVI_statistics": {
          "mean": 0.25,
          "median": 0.249,
          "min": 0.243,
          "max": 0.266
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.03,
          "percentage": 1.01
        },
        "EVI_statistics": {
          "mean": 0.271,
          "median": 0.269,
          "min": 0.266,
          "max": 0.304
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.18,
            "area_percentage": 6.47,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.67,
            "area_percentage": 24.1,
            "zone_number": 2
          },
          "similar": {
            "ha": 0.87,
            "area_percentage": 31.29,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.7,
            "area_percentage": 25.18,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.36,
            "area_percentage": 12.95,
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
      "old_value": 0.201,
      "new_value": 0.231,
      "difference": 0.031
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
          "ha": 2.84,
          "percentage": 99.91,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.09,
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
          "percentage": 18.84,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.41,
          "percentage": 14.28,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 0.95,
          "percentage": 33.52,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.4,
          "percentage": 14.18,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.55,
          "percentage": 19.18,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.202496322881355 49.11598273833334)",
          "new_value": 0.24,
          "old_value": 0.192,
          "value_difference": 0.048,
          "area_ha": 0.04,
          "category": "major_growth",
          "location": "N",
          "id": 1
        },
        {
          "geometry": "POINT (16.203253604237286 49.115822030333334)",
          "new_value": 0.249,
          "old_value": 0.2,
          "value_difference": 0.049,
          "area_ha": 0.029,
          "category": "major_growth",
          "location": "NE",
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
      "date": "2024-10-27",
      "day_since": 138
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-18",
      "day_since": -35
    },
    "beginning_of_heading": {
      "date": "2025-06-04",
      "day_since": -82
    },
    "beginning_of_ripenes": {
      "date": "2025-07-18",
      "day_since": -126
    },
    "harvest": {
      "date": "2025-08-04",
      "day_since": -143
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
  "polygon_wkt": "POLYGON ((16.20228445 49.11627205, 16.2026515 49.11630531, 16.20348775 49.11639732, 16.20385538 49.11644005, 16.20397014 49.11645147, 16.20398985 49.11644719, 16.20398942 49.11643279, 16.20392941 49.11629039, 16.20381491 49.11603282, 16.20370185 49.11577536, 16.20349508 49.11526667, 16.20342174 49.11509166, 16.20338506 49.11500847, 16.20333478 49.11489649, 16.20329626 49.11480422, 16.20326291 49.11472032, 16.20318475 49.11452995, 16.20315541 49.11445497, 16.20312444 49.11437989, 16.20308556 49.11428408, 16.20305493 49.1141659, 16.20304316 49.11410848, 16.20301982 49.1140464, 16.20300962 49.11404085, 16.20295694 49.11404171, 16.20284469 49.11405148, 16.20278945 49.11405759, 16.20254437 49.11408184, 16.20242929 49.11411445, 16.20226458 49.11410505, 16.20165235 49.11415528, 16.20150765 49.11416738, 16.20228445 49.11627205))"
};
