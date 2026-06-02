// Field data for MAU250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAU250315",
  "metadata": {
    "field_area_ha": 5.285,
    "location": {
      "country": " Czechia",
      "region": " South Moravian",
      "subregion": "Senorady"
    },
    "terrain": {
      "variability": 13.852,
      "mean_elevation": 402.049,
      "min_elevation": 395.082,
      "max_elevation": 408.935
    },
    "soil": {
      "bulk_density kg/dm³": 1.33,
      "cation_exchange_capacity cmol(c)/kg": 22.03,
      "clay_particles g/100g (%)": 20.697,
      "sand particles g/100g (%)": 21.538,
      "silt particles g/100g (%)": 57.765,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-01-29": {
      "min": 0.102,
      "max": 0.333,
      "median": 0.165,
      "mean": 0.171,
      "sd": 0.028
    },
    "2025-02-28": {
      "min": 0.064,
      "max": 0.295,
      "median": 0.143,
      "mean": 0.146,
      "sd": 0.031
    },
    "2025-03-05": {
      "min": 0.157,
      "max": 0.375,
      "median": 0.225,
      "mean": 0.231,
      "sd": 0.027
    },
    "2025-03-06": {
      "min": 0.15,
      "max": 0.357,
      "median": 0.205,
      "mean": 0.211,
      "sd": 0.027
    },
    "2025-03-07": {
      "min": 0.091,
      "max": 0.302,
      "median": 0.158,
      "mean": 0.165,
      "sd": 0.026
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 1.185,
      "area_percentage": 0.228
    },
    "dominant_category": "bare soil",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 4.019,
        "area_percentage": 0.772
      },
      "very_low_vegetation": {
        "area_ha": 1.184,
        "area_percentage": 0.228
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
    "evi_median": 0.179,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.16,
          "percentage": 3.16
        },
        "EVI_statistics": {
          "mean": 0.148,
          "median": 0.149,
          "min": 0.137,
          "max": 0.152
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 1.53,
          "percentage": 29.34
        },
        "EVI_statistics": {
          "mean": 0.163,
          "median": 0.163,
          "min": 0.152,
          "max": 0.17
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 1.68,
          "percentage": 32.22
        },
        "EVI_statistics": {
          "mean": 0.179,
          "median": 0.178,
          "min": 0.17,
          "max": 0.188
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.9,
          "percentage": 17.31
        },
        "EVI_statistics": {
          "mean": 0.196,
          "median": 0.196,
          "min": 0.188,
          "max": 0.206
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.94,
          "percentage": 17.97
        },
        "EVI_statistics": {
          "mean": 0.227,
          "median": 0.22,
          "min": 0.206,
          "max": 0.302
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 1.32,
            "area_percentage": 26.51,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.74,
            "area_percentage": 14.86,
            "zone_number": 2
          },
          "similar": {
            "ha": 0.74,
            "area_percentage": 14.86,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.74,
            "area_percentage": 14.86,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.44,
            "area_percentage": 28.92,
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
      "old_value": 0.143,
      "new_value": 0.179,
      "difference": 0.037
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
          "ha": 4.9,
          "percentage": 95.71,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.22,
          "percentage": 4.29,
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
          "ha": 0.3,
          "percentage": 5.92,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.81,
          "percentage": 15.72,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 2.94,
          "percentage": 57.32,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.71,
          "percentage": 13.95,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.36,
          "percentage": 7.1,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.244157553154764 49.1298942029562)",
          "new_value": 0.192,
          "old_value": 0.127,
          "value_difference": 0.065,
          "area_ha": 0.072,
          "category": "major_growth",
          "location": "SW",
          "id": 1
        },
        {
          "geometry": "POINT (16.24470622589286 49.12930724135036)",
          "new_value": 0.177,
          "old_value": 0.083,
          "value_difference": 0.094,
          "area_ha": 0.059,
          "category": "major_growth",
          "location": "SW",
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
      "current": 131.096,
      "historical_mean": 210.428
    },
    "precipitation_summary": {
      "last_3_days": 13.379,
      "last_7_days": 17.815,
      "last_14_days": 18.092,
      "last_30_days": 27.466
    },
    "standardized_precipitation_index": {
      "1_month": -0.85,
      "3_month": -1.452,
      "6_month": -1.266
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-03-11 00:00:00",
          "temperature_mean": 8.533,
          "temperature_min": 3.757,
          "temperature_max": 13.56,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.737,
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
          "totalcloudcover_mean": 0.842,
          "soiltemperature_0to10cm_mean": 6.289,
          "soilmoisture_0to10cm": 0.349,
          "windspeed_mean": 1.63
        },
        {
          "time": "2025-03-13 00:00:00",
          "temperature_mean": 5.023,
          "temperature_min": 0.695,
          "temperature_max": 7.456,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.886,
          "soiltemperature_0to10cm_mean": 5.335,
          "soilmoisture_0to10cm": 0.382,
          "windspeed_mean": 1.238
        },
        {
          "time": "2025-03-14 00:00:00",
          "temperature_mean": 2.36,
          "temperature_min": -0.819,
          "temperature_max": 4.946,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.985,
          "soiltemperature_0to10cm_mean": 3.132,
          "soilmoisture_0to10cm": 0.387,
          "windspeed_mean": 1.718
        },
        {
          "time": "2025-03-15 00:00:00",
          "temperature_mean": 2.443,
          "temperature_min": 0.947,
          "temperature_max": 4.444,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.976,
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
          "totalcloudcover_mean": 0.375,
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
          "totalcloudcover_mean": 0.411,
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
          "totalcloudcover_mean": 0.011,
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
          "totalcloudcover_mean": 0.384,
          "soiltemperature_0to10cm_mean": 5.859,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 3.488
        },
        {
          "time": "2025-03-23 00:00:00",
          "temperature_mean": 9.157,
          "temperature_min": 4.663,
          "temperature_max": 15.539,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.819,
          "soiltemperature_0to10cm_mean": 7.626,
          "soilmoisture_0to10cm": 0.351,
          "windspeed_mean": 2.131
        },
        {
          "time": "2025-03-24 00:00:00",
          "temperature_mean": 7.532,
          "temperature_min": 2.505,
          "temperature_max": 13.117,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.878,
          "soiltemperature_0to10cm_mean": 7.016,
          "soilmoisture_0to10cm": 0.38,
          "windspeed_mean": 1.249
        },
        {
          "time": "2025-03-25 00:00:00",
          "temperature_mean": 8.454,
          "temperature_min": 2.865,
          "temperature_max": 14.208,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.381,
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
          "totalcloudcover_mean": 0.339,
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
          "totalcloudcover_mean": 0.623,
          "soiltemperature_0to10cm_mean": 7.7,
          "soilmoisture_0to10cm": 0.357,
          "windspeed_mean": 3.109
        },
        {
          "time": "2025-03-28 00:00:00",
          "temperature_mean": 8.56,
          "temperature_min": 2.424,
          "temperature_max": 13.88,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.469,
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
      "date": "2024-10-30",
      "day_since": 135
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-18",
      "day_since": -35
    },
    "beginning_of_heading": {
      "date": "2025-06-03",
      "day_since": -81
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
        "totalcloudcover_mean": 0.737,
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
        "totalcloudcover_mean": 0.842,
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
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.886,
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
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.985,
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
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.976,
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
        "totalcloudcover_mean": 0.375,
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
        "totalcloudcover_mean": 0.411,
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
        "totalcloudcover_mean": 0.011,
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
        "totalcloudcover_mean": 0.384,
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
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.819,
        "soiltemperature_0to10cm_mean": 7.626,
        "soilmoisture_0to10cm": 0.351,
        "windspeed_mean": 2.131
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
    "2025-03-24": {
      "weather_conditions": {
        "temperature_mean": 7.532,
        "temperature_min": 2.505,
        "temperature_max": 13.117,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.878,
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
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.381,
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
        "totalcloudcover_mean": 0.339,
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
        "totalcloudcover_mean": 0.623,
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
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.469,
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
  "polygon_wkt": "POLYGON ((16.2437566 49.12948877, 16.24404111 49.12983694, 16.24444264 49.13035518, 16.24486002 49.13086621, 16.24520908 49.13125485, 16.24548853 49.13154973, 16.24554696 49.13160023, 16.24571783 49.13171899, 16.24599807 49.13189268, 16.2467306 49.13237649, 16.24682881 49.13243161, 16.24685615 49.13245191, 16.24689616 49.13246541, 16.24694228 49.13246883, 16.24699948 49.1324587, 16.24704328 49.13243322, 16.24707171 49.13240372, 16.2471066 49.13235363, 16.24712736 49.13228745, 16.2471433 49.13224095, 16.24715131 49.13218456, 16.24715896 49.13206531, 16.24717021 49.13197254, 16.24718055 49.13192563, 16.24719814 49.13187627, 16.24724764 49.13176672, 16.24728464 49.13167373, 16.24729723 49.131627, 16.24730187 49.131567, 16.24730099 49.13148648, 16.24720893 49.1311965, 16.24709192 49.13095266, 16.24687168 49.13061983, 16.24680513 49.13052118, 16.24672025 49.13041941, 16.24662061 49.13029184, 16.24660913 49.13027273, 16.24659986 49.13024746, 16.24660068 49.13021065, 16.24660003 49.13016295, 16.24661716 49.13006343, 16.24662391 49.12997729, 16.24661126 49.12984727, 16.24650117 49.12952731, 16.24645128 49.12945202, 16.24639766 49.12938101, 16.24618604 49.12919921, 16.24603007 49.12906994, 16.24595234 49.12900048, 16.24588824 49.12893763, 16.24583504 49.12887744, 16.2457867 49.12881366, 16.24562337 49.12886798, 16.24510733 49.12903959, 16.2437566 49.12948877))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
