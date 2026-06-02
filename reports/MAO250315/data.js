// Field data for MAO250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAO250315",
  "metadata": {
    "field_area_ha": 2.916,
    "location": {
      "country": " Czechia",
      "region": " South Moravian",
      "subregion": "Senorady"
    },
    "terrain": {
      "variability": 7.102,
      "mean_elevation": 377.816,
      "min_elevation": 374.209,
      "max_elevation": 381.312
    },
    "soil": {
      "bulk_density kg/dm³": 1.34,
      "cation_exchange_capacity cmol(c)/kg": 20.809,
      "clay_particles g/100g (%)": 25.471,
      "sand particles g/100g (%)": 17.918,
      "silt particles g/100g (%)": 56.611,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-01-10": {
      "min": 0.133,
      "max": 0.358,
      "median": 0.183,
      "mean": 0.192,
      "sd": 0.032
    },
    "2025-01-29": {
      "min": 0.141,
      "max": 0.365,
      "median": 0.212,
      "mean": 0.217,
      "sd": 0.028
    },
    "2025-02-28": {
      "min": 0.154,
      "max": 0.305,
      "median": 0.197,
      "mean": 0.201,
      "sd": 0.021
    },
    "2025-03-03": {
      "min": 0.152,
      "max": 0.294,
      "median": 0.19,
      "mean": 0.195,
      "sd": 0.02
    },
    "2025-03-05": {
      "min": 0.229,
      "max": 0.371,
      "median": 0.275,
      "mean": 0.278,
      "sd": 0.017
    },
    "2025-03-08": {
      "min": 0.171,
      "max": 0.321,
      "median": 0.217,
      "mean": 0.22,
      "sd": 0.017
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 2.64,
      "area_percentage": 0.906
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.275,
        "area_percentage": 0.094
      },
      "very_low_vegetation": {
        "area_ha": 2.629,
        "area_percentage": 0.902
      },
      "low_vegetation": {
        "area_ha": 0.011,
        "area_percentage": 0.004
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
    "evi_median": 0.218,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.06,
          "percentage": 2.01
        },
        "EVI_statistics": {
          "mean": 0.176,
          "median": 0.18,
          "min": 0.123,
          "max": 0.186
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.59,
          "percentage": 20.16
        },
        "EVI_statistics": {
          "mean": 0.201,
          "median": 0.202,
          "min": 0.186,
          "max": 0.208
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 1.5,
          "percentage": 51.31
        },
        "EVI_statistics": {
          "mean": 0.218,
          "median": 0.218,
          "min": 0.208,
          "max": 0.229
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.51,
          "percentage": 17.66
        },
        "EVI_statistics": {
          "mean": 0.238,
          "median": 0.237,
          "min": 0.229,
          "max": 0.251
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.26,
          "percentage": 8.86
        },
        "EVI_statistics": {
          "mean": 0.269,
          "median": 0.265,
          "min": 0.251,
          "max": 0.328
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.57,
            "area_percentage": 20.65,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.45,
            "area_percentage": 16.3,
            "zone_number": 2
          },
          "similar": {
            "ha": 0.58,
            "area_percentage": 21.01,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.5,
            "area_percentage": 18.12,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.66,
            "area_percentage": 23.91,
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
      "old_value": 0.197,
      "new_value": 0.218,
      "difference": 0.02
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
          "ha": 2.91,
          "percentage": 99.72,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.01,
          "percentage": 0.28,
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
          "ha": 0.48,
          "percentage": 16.3,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.41,
          "percentage": 14.23,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 1.15,
          "percentage": 39.43,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.4,
          "percentage": 13.62,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.48,
          "percentage": 16.42,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.253522623841462 49.123888952191784)",
          "new_value": 0.202,
          "old_value": 0.2,
          "value_difference": 0.002,
          "area_ha": 0.033,
          "category": "major_decline",
          "location": "C",
          "id": 1
        },
        {
          "geometry": "POINT (16.252939416280487 49.123463680958906)",
          "new_value": 0.209,
          "old_value": 0.209,
          "value_difference": 0.0,
          "area_ha": 0.032,
          "category": "major_decline",
          "location": "SW",
          "id": 2
        },
        {
          "geometry": "POINT (16.25448075054878 49.12447370013699)",
          "new_value": 0.23,
          "old_value": 0.184,
          "value_difference": 0.046,
          "area_ha": 0.038,
          "category": "major_growth",
          "location": "NE",
          "id": 3
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 513.984,
      "historical_average": 543.28
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
          "temperature_mean": 8.6,
          "temperature_min": 3.835,
          "temperature_max": 13.714,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.677,
          "soiltemperature_0to10cm_mean": 8.369,
          "soilmoisture_0to10cm": 0.357,
          "windspeed_mean": 1.684
        },
        {
          "time": "2025-03-12 00:00:00",
          "temperature_mean": 7.969,
          "temperature_min": 1.781,
          "temperature_max": 14.205,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.844,
          "soiltemperature_0to10cm_mean": 6.623,
          "soilmoisture_0to10cm": 0.347,
          "windspeed_mean": 1.826
        },
        {
          "time": "2025-03-13 00:00:00",
          "temperature_mean": 5.557,
          "temperature_min": 0.922,
          "temperature_max": 7.985,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.796,
          "soiltemperature_0to10cm_mean": 5.894,
          "soilmoisture_0to10cm": 0.382,
          "windspeed_mean": 1.093
        },
        {
          "time": "2025-03-14 00:00:00",
          "temperature_mean": 2.498,
          "temperature_min": -0.753,
          "temperature_max": 4.956,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.981,
          "soiltemperature_0to10cm_mean": 3.376,
          "soilmoisture_0to10cm": 0.387,
          "windspeed_mean": 1.847
        },
        {
          "time": "2025-03-15 00:00:00",
          "temperature_mean": 2.603,
          "temperature_min": 1.143,
          "temperature_max": 4.512,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.996,
          "soiltemperature_0to10cm_mean": 3.262,
          "soilmoisture_0to10cm": 0.385,
          "windspeed_mean": 3.87
        },
        {
          "time": "2025-03-16 00:00:00",
          "temperature_mean": 3.2,
          "temperature_min": 0.1,
          "temperature_max": 7.898,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.495,
          "soiltemperature_0to10cm_mean": 4.083,
          "soilmoisture_0to10cm": 0.373,
          "windspeed_mean": 2.673
        },
        {
          "time": "2025-03-17 00:00:00",
          "temperature_mean": 0.906,
          "temperature_min": -2.69,
          "temperature_max": 4.106,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.366,
          "soiltemperature_0to10cm_mean": 2.546,
          "soilmoisture_0to10cm": 0.364,
          "windspeed_mean": 3.618
        },
        {
          "time": "2025-03-18 00:00:00",
          "temperature_mean": -0.266,
          "temperature_min": -4.684,
          "temperature_max": 4.336,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.028,
          "soiltemperature_0to10cm_mean": 1.347,
          "soilmoisture_0to10cm": 0.357,
          "windspeed_mean": 0.258
        },
        {
          "time": "2025-03-19 00:00:00",
          "temperature_mean": 1.638,
          "temperature_min": -3.96,
          "temperature_max": 7.419,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 0.905,
          "soilmoisture_0to10cm": 0.353,
          "windspeed_mean": 1.953
        },
        {
          "time": "2025-03-20 00:00:00",
          "temperature_mean": 2.497,
          "temperature_min": -4.21,
          "temperature_max": 9.441,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 1.935,
          "soilmoisture_0to10cm": 0.349,
          "windspeed_mean": 1.887
        },
        {
          "time": "2025-03-21 00:00:00",
          "temperature_mean": 5.481,
          "temperature_min": -1.36,
          "temperature_max": 12.235,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 3.727,
          "soilmoisture_0to10cm": 0.345,
          "windspeed_mean": 1.92
        },
        {
          "time": "2025-03-22 00:00:00",
          "temperature_mean": 7.724,
          "temperature_min": 2.792,
          "temperature_max": 13.068,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.408,
          "soiltemperature_0to10cm_mean": 6.235,
          "soilmoisture_0to10cm": 0.34,
          "windspeed_mean": 3.491
        },
        {
          "time": "2025-03-23 00:00:00",
          "temperature_mean": 9.31,
          "temperature_min": 4.948,
          "temperature_max": 15.525,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.778,
          "soiltemperature_0to10cm_mean": 7.881,
          "soilmoisture_0to10cm": 0.351,
          "windspeed_mean": 2.351
        },
        {
          "time": "2025-03-24 00:00:00",
          "temperature_mean": 7.663,
          "temperature_min": 2.584,
          "temperature_max": 13.256,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.838,
          "soiltemperature_0to10cm_mean": 7.265,
          "soilmoisture_0to10cm": 0.383,
          "windspeed_mean": 1.174
        },
        {
          "time": "2025-03-25 00:00:00",
          "temperature_mean": 8.707,
          "temperature_min": 3.388,
          "temperature_max": 14.335,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.294,
          "soiltemperature_0to10cm_mean": 8.55,
          "soilmoisture_0to10cm": 0.378,
          "windspeed_mean": 0.839
        },
        {
          "time": "2025-03-26 00:00:00",
          "temperature_mean": 8.33,
          "temperature_min": 3.063,
          "temperature_max": 13.638,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.226,
          "soiltemperature_0to10cm_mean": 8.312,
          "soilmoisture_0to10cm": 0.365,
          "windspeed_mean": 2.232
        },
        {
          "time": "2025-03-27 00:00:00",
          "temperature_mean": 7.637,
          "temperature_min": 4.558,
          "temperature_max": 10.426,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.594,
          "soiltemperature_0to10cm_mean": 7.938,
          "soilmoisture_0to10cm": 0.356,
          "windspeed_mean": 3.247
        },
        {
          "time": "2025-03-28 00:00:00",
          "temperature_mean": 8.807,
          "temperature_min": 2.731,
          "temperature_max": 14.126,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.517,
          "soiltemperature_0to10cm_mean": 8.329,
          "soilmoisture_0to10cm": 0.349,
          "windspeed_mean": 2.635
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
      "date": "2025-04-24",
      "day_since": -41
    },
    "beginning_of_heading": {
      "date": "2025-06-09",
      "day_since": -87
    },
    "beginning_of_ripenes": {
      "date": "2025-07-24",
      "day_since": -132
    },
    "harvest": {
      "date": "2025-08-11",
      "day_since": -150
    }
  },
  "timing_of_field_operations": {
    "2025-03-11": {
      "weather_conditions": {
        "temperature_mean": 8.6,
        "temperature_min": 3.835,
        "temperature_max": 13.714,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.677,
        "soiltemperature_0to10cm_mean": 8.369,
        "soilmoisture_0to10cm": 0.357,
        "windspeed_mean": 1.684
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
        "temperature_mean": 7.969,
        "temperature_min": 1.781,
        "temperature_max": 14.205,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.844,
        "soiltemperature_0to10cm_mean": 6.623,
        "soilmoisture_0to10cm": 0.347,
        "windspeed_mean": 1.826
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
        "temperature_mean": 5.557,
        "temperature_min": 0.922,
        "temperature_max": 7.985,
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.796,
        "soiltemperature_0to10cm_mean": 5.894,
        "soilmoisture_0to10cm": 0.382,
        "windspeed_mean": 1.093
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
        "temperature_mean": 2.498,
        "temperature_min": -0.753,
        "temperature_max": 4.956,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.981,
        "soiltemperature_0to10cm_mean": 3.376,
        "soilmoisture_0to10cm": 0.387,
        "windspeed_mean": 1.847
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
        "temperature_mean": 2.603,
        "temperature_min": 1.143,
        "temperature_max": 4.512,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.996,
        "soiltemperature_0to10cm_mean": 3.262,
        "soilmoisture_0to10cm": 0.385,
        "windspeed_mean": 3.87
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
        "temperature_mean": 3.2,
        "temperature_min": 0.1,
        "temperature_max": 7.898,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.495,
        "soiltemperature_0to10cm_mean": 4.083,
        "soilmoisture_0to10cm": 0.373,
        "windspeed_mean": 2.673
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
        "temperature_mean": 0.906,
        "temperature_min": -2.69,
        "temperature_max": 4.106,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.366,
        "soiltemperature_0to10cm_mean": 2.546,
        "soilmoisture_0to10cm": 0.364,
        "windspeed_mean": 3.618
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
        "temperature_mean": -0.266,
        "temperature_min": -4.684,
        "temperature_max": 4.336,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.028,
        "soiltemperature_0to10cm_mean": 1.347,
        "soilmoisture_0to10cm": 0.357,
        "windspeed_mean": 0.258
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
        "temperature_mean": 1.638,
        "temperature_min": -3.96,
        "temperature_max": 7.419,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 0.905,
        "soilmoisture_0to10cm": 0.353,
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
        "temperature_mean": 2.497,
        "temperature_min": -4.21,
        "temperature_max": 9.441,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 1.935,
        "soilmoisture_0to10cm": 0.349,
        "windspeed_mean": 1.887
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
        "temperature_mean": 5.481,
        "temperature_min": -1.36,
        "temperature_max": 12.235,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 3.727,
        "soilmoisture_0to10cm": 0.345,
        "windspeed_mean": 1.92
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
        "temperature_mean": 7.724,
        "temperature_min": 2.792,
        "temperature_max": 13.068,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.408,
        "soiltemperature_0to10cm_mean": 6.235,
        "soilmoisture_0to10cm": 0.34,
        "windspeed_mean": 3.491
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
        "temperature_mean": 9.31,
        "temperature_min": 4.948,
        "temperature_max": 15.525,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.778,
        "soiltemperature_0to10cm_mean": 7.881,
        "soilmoisture_0to10cm": 0.351,
        "windspeed_mean": 2.351
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
        "temperature_mean": 7.663,
        "temperature_min": 2.584,
        "temperature_max": 13.256,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.838,
        "soiltemperature_0to10cm_mean": 7.265,
        "soilmoisture_0to10cm": 0.383,
        "windspeed_mean": 1.174
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
        "temperature_mean": 8.707,
        "temperature_min": 3.388,
        "temperature_max": 14.335,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.294,
        "soiltemperature_0to10cm_mean": 8.55,
        "soilmoisture_0to10cm": 0.378,
        "windspeed_mean": 0.839
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
        "temperature_mean": 8.33,
        "temperature_min": 3.063,
        "temperature_max": 13.638,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.226,
        "soiltemperature_0to10cm_mean": 8.312,
        "soilmoisture_0to10cm": 0.365,
        "windspeed_mean": 2.232
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
        "temperature_mean": 7.637,
        "temperature_min": 4.558,
        "temperature_max": 10.426,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.594,
        "soiltemperature_0to10cm_mean": 7.938,
        "soilmoisture_0to10cm": 0.356,
        "windspeed_mean": 3.247
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
        "temperature_mean": 8.807,
        "temperature_min": 2.731,
        "temperature_max": 14.126,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.517,
        "soiltemperature_0to10cm_mean": 8.329,
        "soilmoisture_0to10cm": 0.349,
        "windspeed_mean": 2.635
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
  "polygon_wkt": "POLYGON ((16.25515866 49.12463116, 16.25520976 49.12460948, 16.25516645 49.12453604, 16.25487654 49.12413878, 16.25466423 49.1238579, 16.25458819 49.12377082, 16.25445372 49.12368865, 16.25417761 49.12359128, 16.25403861 49.12355093, 16.2539411 49.12352414, 16.2537129 49.12345218, 16.25328919 49.12328325, 16.25301952 49.12320862, 16.25282453 49.12316035, 16.25263938 49.12313023, 16.25254564 49.12312017, 16.25242945 49.12311373, 16.25229137 49.12309049, 16.25202041 49.1230266, 16.25193587 49.12302512, 16.25184545 49.12303305, 16.25179383 49.12309819, 16.25181374 49.12317039, 16.25190702 49.1233329, 16.25204154 49.12355328, 16.25220056 49.12378786, 16.252366 49.12401406, 16.25258368 49.12431487, 16.25269216 49.12443607, 16.25282697 49.12454507, 16.25300264 49.12463588, 16.25321525 49.1247312, 16.25334329 49.12483263, 16.25348377 49.12493271, 16.25356234 49.12496542, 16.25360423 49.12496466, 16.25372117 49.12494938, 16.25389289 49.12491261, 16.25419603 49.1248329, 16.25515866 49.12463116))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
