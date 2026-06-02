// Field data for MAO250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAO250215",
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
    "2024-12-01": {
      "min": 0.123,
      "max": 0.408,
      "median": 0.178,
      "mean": 0.192,
      "sd": 0.042
    },
    "2024-12-21": {
      "min": 0.125,
      "max": 0.365,
      "median": 0.193,
      "mean": 0.204,
      "sd": 0.036
    },
    "2025-01-10": {
      "min": 0.133,
      "max": 0.358,
      "median": 0.183,
      "mean": 0.192,
      "sd": 0.032
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 2.202,
      "area_percentage": 0.755
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.713,
        "area_percentage": 0.245
      },
      "very_low_vegetation": {
        "area_ha": 2.153,
        "area_percentage": 0.738
      },
      "low_vegetation": {
        "area_ha": 0.049,
        "area_percentage": 0.017
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
    "evi_median": 0.212,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.1,
          "percentage": 3.43
        },
        "EVI_statistics": {
          "mean": 0.173,
          "median": 0.175,
          "min": 0.141,
          "max": 0.18
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.69,
          "percentage": 23.62
        },
        "EVI_statistics": {
          "mean": 0.194,
          "median": 0.195,
          "min": 0.18,
          "max": 0.201
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 1.24,
          "percentage": 42.57
        },
        "EVI_statistics": {
          "mean": 0.211,
          "median": 0.211,
          "min": 0.201,
          "max": 0.223
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.51,
          "percentage": 17.44
        },
        "EVI_statistics": {
          "mean": 0.231,
          "median": 0.23,
          "min": 0.223,
          "max": 0.244
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.38,
          "percentage": 12.94
        },
        "EVI_statistics": {
          "mean": 0.274,
          "median": 0.271,
          "min": 0.244,
          "max": 0.365
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.56,
            "area_percentage": 20.29,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.51,
            "area_percentage": 18.48,
            "zone_number": 2
          },
          "similar": {
            "ha": 0.54,
            "area_percentage": 19.57,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.45,
            "area_percentage": 16.3,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.7,
            "area_percentage": 25.36,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-02-15",
      "reference_image_date": "2025-01-10",
      "change_period": 36
    },
    "median_EVI_change": {
      "old_value": 0.183,
      "new_value": 0.212,
      "difference": 0.026
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
          "ha": 2.9,
          "percentage": 99.63,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.01,
          "percentage": 0.37,
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
          "ha": 0.44,
          "percentage": 15.1,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.39,
          "percentage": 13.43,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 1.26,
          "percentage": 43.32,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.37,
          "percentage": 12.69,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.45,
          "percentage": 15.47,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.253355993109757 49.12372947547945)",
          "new_value": 0.216,
          "old_value": 0.164,
          "value_difference": 0.052,
          "area_ha": 0.032,
          "category": "major_growth",
          "location": "C",
          "id": 1
        },
        {
          "geometry": "POINT (16.253064389329268 49.123569998767124)",
          "new_value": 0.228,
          "old_value": 0.175,
          "value_difference": 0.053,
          "area_ha": 0.036,
          "category": "major_growth",
          "location": "S",
          "id": 2
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 412.082,
      "historical_average": 448.568
    },
    "accumulated_precipitation_since_seeding": {
      "current": 92.098,
      "historical_mean": 157.708
    },
    "precipitation_summary": {
      "last_3_days": 8.846,
      "last_7_days": 8.864,
      "last_14_days": 9.31,
      "last_30_days": 13.654
    },
    "standardized_precipitation_index": {
      "1_month": -1.502,
      "3_month": -1.315,
      "6_month": 1.39
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-02-11 00:00:00",
          "temperature_mean": 0.173,
          "temperature_min": -3.35,
          "temperature_max": 3.793,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.526,
          "soiltemperature_0to10cm_mean": 0.053,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 2.9
        },
        {
          "time": "2025-02-12 00:00:00",
          "temperature_mean": -1.02,
          "temperature_min": -1.95,
          "temperature_max": 0.141,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.98,
          "soiltemperature_0to10cm_mean": 0.238,
          "soilmoisture_0to10cm": 0.34,
          "windspeed_mean": 3.754
        },
        {
          "time": "2025-02-13 00:00:00",
          "temperature_mean": -0.813,
          "temperature_min": -1.795,
          "temperature_max": 0.549,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.999,
          "soiltemperature_0to10cm_mean": 0.128,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 2.146
        },
        {
          "time": "2025-02-14 00:00:00",
          "temperature_mean": -1.894,
          "temperature_min": -5.264,
          "temperature_max": 0.325,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.828,
          "soiltemperature_0to10cm_mean": 0.122,
          "soilmoisture_0to10cm": 0.343,
          "windspeed_mean": 3.262
        },
        {
          "time": "2025-02-15 00:00:00",
          "temperature_mean": -3.94,
          "temperature_min": -7.666,
          "temperature_max": -0.954,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.519,
          "soiltemperature_0to10cm_mean": -0.187,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 1.494
        },
        {
          "time": "2025-02-16 00:00:00",
          "temperature_mean": -4.242,
          "temperature_min": -7.815,
          "temperature_max": -0.765,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.794,
          "soiltemperature_0to10cm_mean": -0.482,
          "soilmoisture_0to10cm": 0.341,
          "windspeed_mean": 1.911
        },
        {
          "time": "2025-02-17 00:00:00",
          "temperature_mean": -5.185,
          "temperature_min": -7.945,
          "temperature_max": -1.594,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.706,
          "soiltemperature_0to10cm_mean": -0.627,
          "soilmoisture_0to10cm": 0.34,
          "windspeed_mean": 1.512
        },
        {
          "time": "2025-02-18 00:00:00",
          "temperature_mean": -5.41,
          "temperature_min": -8.859,
          "temperature_max": -0.906,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.511,
          "soiltemperature_0to10cm_mean": -0.728,
          "soilmoisture_0to10cm": 0.339,
          "windspeed_mean": 1.927
        },
        {
          "time": "2025-02-19 00:00:00",
          "temperature_mean": -5.651,
          "temperature_min": -10.847,
          "temperature_max": -0.195,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": -1.004,
          "soilmoisture_0to10cm": 0.34,
          "windspeed_mean": 1.642
        },
        {
          "time": "2025-02-20 00:00:00",
          "temperature_mean": -5.444,
          "temperature_min": -10.906,
          "temperature_max": 1.131,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.144,
          "soiltemperature_0to10cm_mean": -1.009,
          "soilmoisture_0to10cm": 0.341,
          "windspeed_mean": 2.712
        },
        {
          "time": "2025-02-21 00:00:00",
          "temperature_mean": -2.498,
          "temperature_min": -8.574,
          "temperature_max": 2.285,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.375,
          "soiltemperature_0to10cm_mean": -0.862,
          "soilmoisture_0to10cm": 0.34,
          "windspeed_mean": 2.774
        },
        {
          "time": "2025-02-22 00:00:00",
          "temperature_mean": -1.133,
          "temperature_min": -4.24,
          "temperature_max": 3.255,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.011,
          "soiltemperature_0to10cm_mean": -0.597,
          "soilmoisture_0to10cm": 0.339,
          "windspeed_mean": 3.468
        },
        {
          "time": "2025-02-23 00:00:00",
          "temperature_mean": -0.749,
          "temperature_min": -5.094,
          "temperature_max": 2.35,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.844,
          "soiltemperature_0to10cm_mean": -0.584,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 0.574
        },
        {
          "time": "2025-02-24 00:00:00",
          "temperature_mean": 3.643,
          "temperature_min": -1.341,
          "temperature_max": 10.927,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.223,
          "soiltemperature_0to10cm_mean": 0.013,
          "soilmoisture_0to10cm": 0.359,
          "windspeed_mean": 0.446
        },
        {
          "time": "2025-02-25 00:00:00",
          "temperature_mean": 2.192,
          "temperature_min": -0.939,
          "temperature_max": 4.208,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.978,
          "soiltemperature_0to10cm_mean": 0.348,
          "soilmoisture_0to10cm": 0.367,
          "windspeed_mean": 2.308
        },
        {
          "time": "2025-02-26 00:00:00",
          "temperature_mean": 4.675,
          "temperature_min": 1.606,
          "temperature_max": 8.361,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.995,
          "soiltemperature_0to10cm_mean": 2.161,
          "soilmoisture_0to10cm": 0.378,
          "windspeed_mean": 1.125
        },
        {
          "time": "2025-02-27 00:00:00",
          "temperature_mean": 3.665,
          "temperature_min": -0.128,
          "temperature_max": 8.044,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.892,
          "soiltemperature_0to10cm_mean": 1.762,
          "soilmoisture_0to10cm": 0.371,
          "windspeed_mean": 0.958
        },
        {
          "time": "2025-02-28 00:00:00",
          "temperature_mean": 2.89,
          "temperature_min": -1.647,
          "temperature_max": 7.447,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.38,
          "soiltemperature_0to10cm_mean": 1.652,
          "soilmoisture_0to10cm": 0.365,
          "windspeed_mean": 2.456
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-10-14",
      "day_since": 123
    },
    "crop_emergence": {
      "date": "2024-10-24",
      "day_since": 112
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-17",
      "day_since": -63
    },
    "beginning_of_heading": {
      "date": "2025-05-31",
      "day_since": -107
    },
    "beginning_of_ripenes": {
      "date": "2025-07-15",
      "day_since": -152
    },
    "harvest": {
      "date": "2025-08-01",
      "day_since": -169
    }
  },
  "timing_of_field_operations": {
    "2025-02-11": {
      "weather_conditions": {
        "temperature_mean": 0.173,
        "temperature_min": -3.35,
        "temperature_max": 3.793,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.526,
        "soiltemperature_0to10cm_mean": 0.053,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 2.9
      }
    },
    "2025-02-12": {
      "weather_conditions": {
        "temperature_mean": -1.02,
        "temperature_min": -1.95,
        "temperature_max": 0.141,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.98,
        "soiltemperature_0to10cm_mean": 0.238,
        "soilmoisture_0to10cm": 0.34,
        "windspeed_mean": 3.754
      }
    },
    "2025-02-13": {
      "weather_conditions": {
        "temperature_mean": -0.813,
        "temperature_min": -1.795,
        "temperature_max": 0.549,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.999,
        "soiltemperature_0to10cm_mean": 0.128,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 2.146
      }
    },
    "2025-02-14": {
      "weather_conditions": {
        "temperature_mean": -1.894,
        "temperature_min": -5.264,
        "temperature_max": 0.325,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.828,
        "soiltemperature_0to10cm_mean": 0.122,
        "soilmoisture_0to10cm": 0.343,
        "windspeed_mean": 3.262
      }
    },
    "2025-02-15": {
      "weather_conditions": {
        "temperature_mean": -3.94,
        "temperature_min": -7.666,
        "temperature_max": -0.954,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.519,
        "soiltemperature_0to10cm_mean": -0.187,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 1.494
      }
    },
    "2025-02-16": {
      "weather_conditions": {
        "temperature_mean": -4.242,
        "temperature_min": -7.815,
        "temperature_max": -0.765,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.794,
        "soiltemperature_0to10cm_mean": -0.482,
        "soilmoisture_0to10cm": 0.341,
        "windspeed_mean": 1.911
      }
    },
    "2025-02-17": {
      "weather_conditions": {
        "temperature_mean": -5.185,
        "temperature_min": -7.945,
        "temperature_max": -1.594,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.706,
        "soiltemperature_0to10cm_mean": -0.627,
        "soilmoisture_0to10cm": 0.34,
        "windspeed_mean": 1.512
      }
    },
    "2025-02-18": {
      "weather_conditions": {
        "temperature_mean": -5.41,
        "temperature_min": -8.859,
        "temperature_max": -0.906,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.511,
        "soiltemperature_0to10cm_mean": -0.728,
        "soilmoisture_0to10cm": 0.339,
        "windspeed_mean": 1.927
      }
    },
    "2025-02-19": {
      "weather_conditions": {
        "temperature_mean": -5.651,
        "temperature_min": -10.847,
        "temperature_max": -0.195,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": -1.004,
        "soilmoisture_0to10cm": 0.34,
        "windspeed_mean": 1.642
      }
    },
    "2025-02-20": {
      "weather_conditions": {
        "temperature_mean": -5.444,
        "temperature_min": -10.906,
        "temperature_max": 1.131,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.144,
        "soiltemperature_0to10cm_mean": -1.009,
        "soilmoisture_0to10cm": 0.341,
        "windspeed_mean": 2.712
      }
    },
    "2025-02-21": {
      "weather_conditions": {
        "temperature_mean": -2.498,
        "temperature_min": -8.574,
        "temperature_max": 2.285,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.375,
        "soiltemperature_0to10cm_mean": -0.862,
        "soilmoisture_0to10cm": 0.34,
        "windspeed_mean": 2.774
      }
    },
    "2025-02-22": {
      "weather_conditions": {
        "temperature_mean": -1.133,
        "temperature_min": -4.24,
        "temperature_max": 3.255,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.011,
        "soiltemperature_0to10cm_mean": -0.597,
        "soilmoisture_0to10cm": 0.339,
        "windspeed_mean": 3.468
      }
    },
    "2025-02-23": {
      "weather_conditions": {
        "temperature_mean": -0.749,
        "temperature_min": -5.094,
        "temperature_max": 2.35,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.844,
        "soiltemperature_0to10cm_mean": -0.584,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 0.574
      }
    },
    "2025-02-24": {
      "weather_conditions": {
        "temperature_mean": 3.643,
        "temperature_min": -1.341,
        "temperature_max": 10.927,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.223,
        "soiltemperature_0to10cm_mean": 0.013,
        "soilmoisture_0to10cm": 0.359,
        "windspeed_mean": 0.446
      }
    },
    "2025-02-25": {
      "weather_conditions": {
        "temperature_mean": 2.192,
        "temperature_min": -0.939,
        "temperature_max": 4.208,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.978,
        "soiltemperature_0to10cm_mean": 0.348,
        "soilmoisture_0to10cm": 0.367,
        "windspeed_mean": 2.308
      }
    },
    "2025-02-26": {
      "weather_conditions": {
        "temperature_mean": 4.675,
        "temperature_min": 1.606,
        "temperature_max": 8.361,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.995,
        "soiltemperature_0to10cm_mean": 2.161,
        "soilmoisture_0to10cm": 0.378,
        "windspeed_mean": 1.125
      }
    },
    "2025-02-27": {
      "weather_conditions": {
        "temperature_mean": 3.665,
        "temperature_min": -0.128,
        "temperature_max": 8.044,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.892,
        "soiltemperature_0to10cm_mean": 1.762,
        "soilmoisture_0to10cm": 0.371,
        "windspeed_mean": 0.958
      }
    },
    "2025-02-28": {
      "weather_conditions": {
        "temperature_mean": 2.89,
        "temperature_min": -1.647,
        "temperature_max": 7.447,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.38,
        "soiltemperature_0to10cm_mean": 1.652,
        "soilmoisture_0to10cm": 0.365,
        "windspeed_mean": 2.456
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
  "polygon_wkt": "POLYGON ((16.25515866 49.12463116, 16.25520976 49.12460948, 16.25516645 49.12453604, 16.25487654 49.12413878, 16.25466423 49.1238579, 16.25458819 49.12377082, 16.25445372 49.12368865, 16.25417761 49.12359128, 16.25403861 49.12355093, 16.2539411 49.12352414, 16.2537129 49.12345218, 16.25328919 49.12328325, 16.25301952 49.12320862, 16.25282453 49.12316035, 16.25263938 49.12313023, 16.25254564 49.12312017, 16.25242945 49.12311373, 16.25229137 49.12309049, 16.25202041 49.1230266, 16.25193587 49.12302512, 16.25184545 49.12303305, 16.25179383 49.12309819, 16.25181374 49.12317039, 16.25190702 49.1233329, 16.25204154 49.12355328, 16.25220056 49.12378786, 16.252366 49.12401406, 16.25258368 49.12431487, 16.25269216 49.12443607, 16.25282697 49.12454507, 16.25300264 49.12463588, 16.25321525 49.1247312, 16.25334329 49.12483263, 16.25348377 49.12493271, 16.25356234 49.12496542, 16.25360423 49.12496466, 16.25372117 49.12494938, 16.25389289 49.12491261, 16.25419603 49.1248329, 16.25515866 49.12463116))"
};
