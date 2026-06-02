// Field data for LAL250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAL250315",
  "metadata": {
    "field_area_ha": 27.898,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 22.617,
      "mean_elevation": 548.196,
      "min_elevation": 533.245,
      "max_elevation": 555.863
    },
    "soil": {
      "bulk_density kg/dm³": 1.337,
      "cation_exchange_capacity cmol(c)/kg": 20.924,
      "clay_particles g/100g (%)": 22.869,
      "sand particles g/100g (%)": 38.655,
      "silt particles g/100g (%)": 38.476,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-01-10": {
      "min": 0.124,
      "max": 0.48,
      "median": 0.272,
      "mean": 0.274,
      "sd": 0.037
    },
    "2025-02-01": {
      "min": 0.172,
      "max": 0.529,
      "median": 0.31,
      "mean": 0.312,
      "sd": 0.031
    },
    "2025-02-11": {
      "min": 0.171,
      "max": 0.444,
      "median": 0.281,
      "mean": 0.282,
      "sd": 0.031
    },
    "2025-02-24": {
      "min": 0.153,
      "max": 0.45,
      "median": 0.265,
      "mean": 0.265,
      "sd": 0.03
    },
    "2025-03-05": {
      "min": 0.258,
      "max": 0.493,
      "median": 0.37,
      "mean": 0.372,
      "sd": 0.026
    },
    "2025-03-09": {
      "min": 0.272,
      "max": 0.499,
      "median": 0.388,
      "mean": 0.39,
      "sd": 0.031
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 27.436,
      "area_percentage": 1.0
    },
    "dominant_category": "medium vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.001,
        "area_percentage": 0.0
      },
      "low_vegetation": {
        "area_ha": 7.975,
        "area_percentage": 0.291
      },
      "medium vegetation": {
        "area_ha": 19.46,
        "area_percentage": 0.709
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
    "evi_median": 0.415,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.56,
          "percentage": 2.05
        },
        "EVI_statistics": {
          "mean": 0.342,
          "median": 0.344,
          "min": 0.297,
          "max": 0.353
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 5.79,
          "percentage": 21.12
        },
        "EVI_statistics": {
          "mean": 0.38,
          "median": 0.382,
          "min": 0.353,
          "max": 0.394
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 14.17,
          "percentage": 51.63
        },
        "EVI_statistics": {
          "mean": 0.414,
          "median": 0.414,
          "min": 0.394,
          "max": 0.436
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 6.14,
          "percentage": 22.4
        },
        "EVI_statistics": {
          "mean": 0.454,
          "median": 0.454,
          "min": 0.436,
          "max": 0.477
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.77,
          "percentage": 2.8
        },
        "EVI_statistics": {
          "mean": 0.485,
          "median": 0.484,
          "min": 0.477,
          "max": 0.53
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 4.57,
            "area_percentage": 16.75,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.33,
            "area_percentage": 19.54,
            "zone_number": 2
          },
          "similar": {
            "ha": 6.39,
            "area_percentage": 23.42,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 4.33,
            "area_percentage": 15.87,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 6.66,
            "area_percentage": 24.41,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-03-15",
      "reference_image_date": "2025-02-24",
      "change_period": 19
    },
    "median_EVI_change": {
      "old_value": 0.265,
      "new_value": 0.415,
      "difference": 0.152
    },
    "growth trend": "major_growth",
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
          "ha": 0.03,
          "percentage": 0.09,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 12.48,
          "percentage": 45.56,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 14.89,
          "percentage": 54.35,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.7560234846875 49.09294170854839)",
          "new_value": 0.406,
          "old_value": 0.244,
          "value_difference": 0.162,
          "area_ha": 6.426,
          "category": "major_growth",
          "location": "NW",
          "id": 1
        },
        {
          "geometry": "POINT (15.755479949517046 49.09159884295699)",
          "new_value": 0.395,
          "old_value": 0.232,
          "value_difference": 0.163,
          "area_ha": 0.348,
          "category": "major_growth",
          "location": "NW",
          "id": 2
        },
        {
          "geometry": "POINT (15.756776071846591 49.08770453274194)",
          "new_value": 0.454,
          "old_value": 0.289,
          "value_difference": 0.165,
          "area_ha": 4.734,
          "category": "major_growth",
          "location": "S",
          "id": 3
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 1.34,
          "percentage": 4.89,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.69,
          "percentage": 13.48,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 17.18,
          "percentage": 62.71,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.85,
          "percentage": 14.06,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.33,
          "percentage": 4.87,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 595.922,
      "historical_average": 632.139
    },
    "accumulated_precipitation_since_seeding": {
      "current": 143.921,
      "historical_mean": 228.395
    },
    "precipitation_summary": {
      "last_3_days": 12.994,
      "last_7_days": 16.782,
      "last_14_days": 17.159,
      "last_30_days": 25.047
    },
    "standardized_precipitation_index": {
      "1_month": -0.977,
      "3_month": -1.605,
      "6_month": -1.47
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-03-11 00:00:00",
          "temperature_mean": 8.006,
          "temperature_min": 3.462,
          "temperature_max": 12.704,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.693,
          "soiltemperature_0to10cm_mean": 6.705,
          "soilmoisture_0to10cm": 0.361,
          "windspeed_mean": 2.104
        },
        {
          "time": "2025-03-12 00:00:00",
          "temperature_mean": 6.901,
          "temperature_min": 0.353,
          "temperature_max": 12.235,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.853,
          "soiltemperature_0to10cm_mean": 5.026,
          "soilmoisture_0to10cm": 0.351,
          "windspeed_mean": 1.12
        },
        {
          "time": "2025-03-13 00:00:00",
          "temperature_mean": 3.585,
          "temperature_min": -0.354,
          "temperature_max": 5.779,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.862,
          "soiltemperature_0to10cm_mean": 3.863,
          "soilmoisture_0to10cm": 0.377,
          "windspeed_mean": 2.084
        },
        {
          "time": "2025-03-14 00:00:00",
          "temperature_mean": 1.863,
          "temperature_min": -1.189,
          "temperature_max": 4.948,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.995,
          "soiltemperature_0to10cm_mean": 2.284,
          "soilmoisture_0to10cm": 0.381,
          "windspeed_mean": 1.314
        },
        {
          "time": "2025-03-15 00:00:00",
          "temperature_mean": 1.777,
          "temperature_min": 0.217,
          "temperature_max": 4.099,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.995,
          "soiltemperature_0to10cm_mean": 2.262,
          "soilmoisture_0to10cm": 0.38,
          "windspeed_mean": 3.061
        },
        {
          "time": "2025-03-16 00:00:00",
          "temperature_mean": 2.68,
          "temperature_min": -0.586,
          "temperature_max": 7.912,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.627,
          "soiltemperature_0to10cm_mean": 3.104,
          "soilmoisture_0to10cm": 0.372,
          "windspeed_mean": 2.199
        },
        {
          "time": "2025-03-17 00:00:00",
          "temperature_mean": 0.097,
          "temperature_min": -3.911,
          "temperature_max": 3.263,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.392,
          "soiltemperature_0to10cm_mean": 1.35,
          "soilmoisture_0to10cm": 0.364,
          "windspeed_mean": 3.363
        },
        {
          "time": "2025-03-18 00:00:00",
          "temperature_mean": -0.936,
          "temperature_min": -4.419,
          "temperature_max": 3.619,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.019,
          "soiltemperature_0to10cm_mean": 0.272,
          "soilmoisture_0to10cm": 0.358,
          "windspeed_mean": 0.285
        },
        {
          "time": "2025-03-19 00:00:00",
          "temperature_mean": 0.503,
          "temperature_min": -4.751,
          "temperature_max": 6.84,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 0.06,
          "soilmoisture_0to10cm": 0.354,
          "windspeed_mean": 2.088
        },
        {
          "time": "2025-03-20 00:00:00",
          "temperature_mean": 2.116,
          "temperature_min": -4.468,
          "temperature_max": 9.068,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 0.72,
          "soilmoisture_0to10cm": 0.352,
          "windspeed_mean": 1.663
        },
        {
          "time": "2025-03-21 00:00:00",
          "temperature_mean": 5.03,
          "temperature_min": -1.169,
          "temperature_max": 11.604,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 1.749,
          "soilmoisture_0to10cm": 0.348,
          "windspeed_mean": 1.979
        },
        {
          "time": "2025-03-22 00:00:00",
          "temperature_mean": 6.688,
          "temperature_min": 2.021,
          "temperature_max": 11.953,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.453,
          "soiltemperature_0to10cm_mean": 4.322,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 3.67
        },
        {
          "time": "2025-03-23 00:00:00",
          "temperature_mean": 8.306,
          "temperature_min": 4.353,
          "temperature_max": 15.053,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.793,
          "soiltemperature_0to10cm_mean": 6.678,
          "soilmoisture_0to10cm": 0.354,
          "windspeed_mean": 1.462
        },
        {
          "time": "2025-03-24 00:00:00",
          "temperature_mean": 6.882,
          "temperature_min": 2.063,
          "temperature_max": 12.32,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.862,
          "soiltemperature_0to10cm_mean": 6.077,
          "soilmoisture_0to10cm": 0.379,
          "windspeed_mean": 1.394
        },
        {
          "time": "2025-03-25 00:00:00",
          "temperature_mean": 8.125,
          "temperature_min": 2.919,
          "temperature_max": 13.71,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.447,
          "soiltemperature_0to10cm_mean": 7.011,
          "soilmoisture_0to10cm": 0.386,
          "windspeed_mean": 0.275
        },
        {
          "time": "2025-03-26 00:00:00",
          "temperature_mean": 7.317,
          "temperature_min": 2.249,
          "temperature_max": 12.483,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.332,
          "soiltemperature_0to10cm_mean": 7.005,
          "soilmoisture_0to10cm": 0.379,
          "windspeed_mean": 2.16
        },
        {
          "time": "2025-03-27 00:00:00",
          "temperature_mean": 6.551,
          "temperature_min": 2.296,
          "temperature_max": 9.528,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.658,
          "soiltemperature_0to10cm_mean": 6.738,
          "soilmoisture_0to10cm": 0.366,
          "windspeed_mean": 2.752
        },
        {
          "time": "2025-03-28 00:00:00",
          "temperature_mean": 7.165,
          "temperature_min": 0.079,
          "temperature_max": 13.001,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.5,
          "soiltemperature_0to10cm_mean": 6.64,
          "soilmoisture_0to10cm": 0.357,
          "windspeed_mean": 1.821
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 167
    },
    "crop_emergence": {
      "date": "2024-10-12",
      "day_since": 153
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-15",
      "day_since": -32
    },
    "beginning_of_heading": {
      "date": "2025-05-30",
      "day_since": -77
    },
    "beginning_of_ripenes": {
      "date": "2025-07-14",
      "day_since": -122
    },
    "harvest": {
      "date": "2025-08-01",
      "day_since": -140
    }
  },
  "timing_of_field_operations": {
    "2025-03-11": {
      "weather_conditions": {
        "temperature_mean": 8.006,
        "temperature_min": 3.462,
        "temperature_max": 12.704,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.693,
        "soiltemperature_0to10cm_mean": 6.705,
        "soilmoisture_0to10cm": 0.361,
        "windspeed_mean": 2.104
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
        "temperature_mean": 6.901,
        "temperature_min": 0.353,
        "temperature_max": 12.235,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.853,
        "soiltemperature_0to10cm_mean": 5.026,
        "soilmoisture_0to10cm": 0.351,
        "windspeed_mean": 1.12
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
    "2025-03-13": {
      "weather_conditions": {
        "temperature_mean": 3.585,
        "temperature_min": -0.354,
        "temperature_max": 5.779,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.862,
        "soiltemperature_0to10cm_mean": 3.863,
        "soilmoisture_0to10cm": 0.377,
        "windspeed_mean": 2.084
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
        "temperature_mean": 1.863,
        "temperature_min": -1.189,
        "temperature_max": 4.948,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.995,
        "soiltemperature_0to10cm_mean": 2.284,
        "soilmoisture_0to10cm": 0.381,
        "windspeed_mean": 1.314
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
        "temperature_mean": 1.777,
        "temperature_min": 0.217,
        "temperature_max": 4.099,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.995,
        "soiltemperature_0to10cm_mean": 2.262,
        "soilmoisture_0to10cm": 0.38,
        "windspeed_mean": 3.061
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
        "temperature_mean": 2.68,
        "temperature_min": -0.586,
        "temperature_max": 7.912,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.627,
        "soiltemperature_0to10cm_mean": 3.104,
        "soilmoisture_0to10cm": 0.372,
        "windspeed_mean": 2.199
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
        "temperature_mean": 0.097,
        "temperature_min": -3.911,
        "temperature_max": 3.263,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.392,
        "soiltemperature_0to10cm_mean": 1.35,
        "soilmoisture_0to10cm": 0.364,
        "windspeed_mean": 3.363
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
        "temperature_mean": -0.936,
        "temperature_min": -4.419,
        "temperature_max": 3.619,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.019,
        "soiltemperature_0to10cm_mean": 0.272,
        "soilmoisture_0to10cm": 0.358,
        "windspeed_mean": 0.285
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
        "temperature_mean": 0.503,
        "temperature_min": -4.751,
        "temperature_max": 6.84,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 0.06,
        "soilmoisture_0to10cm": 0.354,
        "windspeed_mean": 2.088
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
        "temperature_mean": 2.116,
        "temperature_min": -4.468,
        "temperature_max": 9.068,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 0.72,
        "soilmoisture_0to10cm": 0.352,
        "windspeed_mean": 1.663
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
        "temperature_mean": 5.03,
        "temperature_min": -1.169,
        "temperature_max": 11.604,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 1.749,
        "soilmoisture_0to10cm": 0.348,
        "windspeed_mean": 1.979
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
        "temperature_mean": 6.688,
        "temperature_min": 2.021,
        "temperature_max": 11.953,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.453,
        "soiltemperature_0to10cm_mean": 4.322,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 3.67
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
        "temperature_mean": 8.306,
        "temperature_min": 4.353,
        "temperature_max": 15.053,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.793,
        "soiltemperature_0to10cm_mean": 6.678,
        "soilmoisture_0to10cm": 0.354,
        "windspeed_mean": 1.462
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
        "temperature_mean": 6.882,
        "temperature_min": 2.063,
        "temperature_max": 12.32,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.862,
        "soiltemperature_0to10cm_mean": 6.077,
        "soilmoisture_0to10cm": 0.379,
        "windspeed_mean": 1.394
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
        "temperature_mean": 8.125,
        "temperature_min": 2.919,
        "temperature_max": 13.71,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.447,
        "soiltemperature_0to10cm_mean": 7.011,
        "soilmoisture_0to10cm": 0.386,
        "windspeed_mean": 0.275
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
        "temperature_mean": 7.317,
        "temperature_min": 2.249,
        "temperature_max": 12.483,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.332,
        "soiltemperature_0to10cm_mean": 7.005,
        "soilmoisture_0to10cm": 0.379,
        "windspeed_mean": 2.16
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
        "temperature_mean": 6.551,
        "temperature_min": 2.296,
        "temperature_max": 9.528,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.658,
        "soiltemperature_0to10cm_mean": 6.738,
        "soilmoisture_0to10cm": 0.366,
        "windspeed_mean": 2.752
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
        "temperature_mean": 7.165,
        "temperature_min": 0.079,
        "temperature_max": 13.001,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.5,
        "soiltemperature_0to10cm_mean": 6.64,
        "soilmoisture_0to10cm": 0.357,
        "windspeed_mean": 1.821
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
  "polygon_wkt": "POLYGON ((15.75700558 49.09347751, 15.75712859 49.09362657, 15.75717177 49.0936179, 15.75737054 49.09357798, 15.75752844 49.09354163, 15.75815545 49.09340567, 15.75855908 49.09330498, 15.75910486 49.09316301, 15.75934842 49.09309447, 15.75935452 49.09305806, 15.75945541 49.09301493, 15.75955246 49.09298086, 15.7603417 49.09275812, 15.7613111 49.0924712, 15.7613125 49.09247079, 15.76098397 49.09182524, 15.75990556 49.08971254, 15.75965459 49.08924168, 15.75957758 49.08900804, 15.75951126 49.08875106, 15.75945069 49.08855341, 15.75932865 49.08823138, 15.75923601 49.08811905, 15.75911058 49.08797407, 15.75905187 49.08786666, 15.75901437 49.0877469, 15.758988 49.08687514, 15.758969 49.08642611, 15.75893905 49.08639022, 15.75888142 49.08637611, 15.75882905 49.0863732, 15.75878232 49.08639948, 15.75869654 49.08649906, 15.75863353 49.08655554, 15.75856421 49.08659735, 15.75815094 49.08637476, 15.75770311 49.0861412, 15.75767681 49.08613338, 15.75763325 49.0861439, 15.75711667 49.08641398, 15.75693036 49.08653611, 15.75678619 49.08666155, 15.75669917 49.08677607, 15.75666363 49.08681222, 15.75662101 49.08683424, 15.75650892 49.08687434, 15.75638152 49.08695309, 15.75631862 49.08699227, 15.756187 49.08708737, 15.75576166 49.0874198, 15.75470201 49.08843088, 15.75443435 49.08877888, 15.75418089 49.08914237, 15.75407913 49.08930052, 15.75399199 49.0894598, 15.75396632 49.08954825, 15.75395387 49.08964465, 15.75409744 49.09050147, 15.75414987 49.09059425, 15.75422346 49.09069108, 15.7545438 49.09101576, 15.75486207 49.09136684, 15.75488821 49.09145075, 15.75486643 49.091718, 15.75486201 49.09173365, 15.75472359 49.09222327, 15.75469569 49.09237652, 15.75471148 49.09250394, 15.75498142 49.09291017, 15.75506016 49.0930685, 15.75511313 49.09315956, 15.75518295 49.09320698, 15.75527967 49.09324692, 15.75539169 49.09326291, 15.75590059 49.09315035, 15.75642017 49.09302275, 15.75656769 49.09300079, 15.75670952 49.0930078, 15.75690233 49.09302206, 15.75713933 49.09304306, 15.75740299 49.09306948, 15.75750453 49.09307912, 15.75759828 49.09311204, 15.75763685 49.0931436, 15.75766115 49.09318087, 15.75764482 49.09321234, 15.75759481 49.09323317, 15.75749949 49.09326243, 15.75722518 49.09333413, 15.75720612 49.09334042, 15.75695954 49.09342172, 15.75700558 49.09347751), (15.75622248 49.08830732, 15.756264 49.08831756, 15.75618918 49.08835082, 15.75607502 49.08838714, 15.75587599 49.0884503, 15.75575704 49.08849423, 15.75532293 49.08862514, 15.75470108 49.08879911, 15.75464393 49.08881179, 15.75461751 49.08880489, 15.75460092 49.08877729, 15.7546341 49.08875162, 15.75546905 49.08849797, 15.75580867 49.08840602, 15.75614854 49.08831769, 15.75622248 49.08830732))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
