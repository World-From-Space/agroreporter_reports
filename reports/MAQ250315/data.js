// Field data for MAQ250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAQ250315",
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
    "2025-01-10": {
      "min": 0.164,
      "max": 0.372,
      "median": 0.272,
      "mean": 0.269,
      "sd": 0.025
    },
    "2025-02-28": {
      "min": 0.183,
      "max": 0.323,
      "median": 0.268,
      "mean": 0.266,
      "sd": 0.019
    },
    "2025-03-05": {
      "min": 0.254,
      "max": 0.409,
      "median": 0.345,
      "mean": 0.343,
      "sd": 0.02
    },
    "2025-03-06": {
      "min": 0.231,
      "max": 0.376,
      "median": 0.328,
      "mean": 0.325,
      "sd": 0.02
    },
    "2025-03-07": {
      "min": 0.184,
      "max": 0.34,
      "median": 0.285,
      "mean": 0.281,
      "sd": 0.021
    },
    "2025-03-08": {
      "min": 0.209,
      "max": 0.356,
      "median": 0.307,
      "mean": 0.304,
      "sd": 0.022
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 5.404,
      "area_percentage": 1.0
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 1.042,
        "area_percentage": 0.193
      },
      "low_vegetation": {
        "area_ha": 4.362,
        "area_percentage": 0.807
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
    "evi_median": 0.324,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.27,
          "percentage": 4.96
        },
        "EVI_statistics": {
          "mean": 0.26,
          "median": 0.265,
          "min": 0.207,
          "max": 0.276
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 1.22,
          "percentage": 22.6
        },
        "EVI_statistics": {
          "mean": 0.295,
          "median": 0.296,
          "min": 0.276,
          "max": 0.308
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 2.76,
          "percentage": 51.02
        },
        "EVI_statistics": {
          "mean": 0.326,
          "median": 0.326,
          "min": 0.308,
          "max": 0.341
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 1.14,
          "percentage": 21.02
        },
        "EVI_statistics": {
          "mean": 0.35,
          "median": 0.348,
          "min": 0.341,
          "max": 0.373
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.02,
          "percentage": 0.4
        },
        "EVI_statistics": {
          "mean": 0.38,
          "median": 0.377,
          "min": 0.373,
          "max": 0.399
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 1.12,
            "area_percentage": 21.41,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.8,
            "area_percentage": 15.3,
            "zone_number": 2
          },
          "similar": {
            "ha": 1.36,
            "area_percentage": 26.0,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 1.08,
            "area_percentage": 20.65,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.87,
            "area_percentage": 16.63,
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
      "old_value": 0.268,
      "new_value": 0.324,
      "difference": 0.056
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
          "ha": 4.82,
          "percentage": 89.28,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.58,
          "percentage": 10.72,
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
          "ha": 0.65,
          "percentage": 11.97,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.72,
          "percentage": 13.41,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 2.57,
          "percentage": 47.53,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.84,
          "percentage": 15.52,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.63,
          "percentage": 11.57,
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
      "date": "2024-10-28",
      "day_since": 137
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-23",
      "day_since": -40
    },
    "beginning_of_heading": {
      "date": "2025-06-08",
      "day_since": -86
    },
    "beginning_of_ripenes": {
      "date": "2025-07-23",
      "day_since": -131
    },
    "harvest": {
      "date": "2025-08-10",
      "day_since": -149
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
  "polygon_wkt": "POLYGON ((16.21571123 49.12461791, 16.21586565 49.12504119, 16.21595902 49.12530697, 16.21621375 49.1260436, 16.21646778 49.12676842, 16.21661007 49.12715821, 16.21666468 49.12716137, 16.21757486 49.12664038, 16.21798092 49.12641908, 16.21937769 49.12566535, 16.21938524 49.1256593, 16.21929608 49.12558543, 16.21938998 49.12553046, 16.21898185 49.12521055, 16.21877139 49.12499513, 16.21868847 49.1248412, 16.21868699 49.12483835, 16.21857322 49.12458693, 16.21850253 49.12442476, 16.2184035 49.12420938, 16.21834028 49.12409248, 16.21831528 49.12404409, 16.21825791 49.12400606, 16.21820562 49.12399487, 16.21813469 49.12399507, 16.21807136 49.1240077, 16.21744351 49.12415805, 16.21700097 49.12426562, 16.2164673 49.12439378, 16.21608931 49.12448973, 16.21585881 49.12454465, 16.21574997 49.12457485, 16.21570627 49.12459436, 16.21571123 49.12461791))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
