// Field data for MAS250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAS250615",
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
    "2025-04-14": {
      "min": 0.315,
      "max": 0.634,
      "median": 0.534,
      "mean": 0.53,
      "sd": 0.04
    },
    "2025-04-20": {
      "min": 0.287,
      "max": 0.641,
      "median": 0.563,
      "mean": 0.557,
      "sd": 0.045
    },
    "2025-04-22": {
      "min": 0.314,
      "max": 0.69,
      "median": 0.605,
      "mean": 0.601,
      "sd": 0.043
    },
    "2025-04-29": {
      "min": 0.398,
      "max": 0.76,
      "median": 0.674,
      "mean": 0.668,
      "sd": 0.046
    },
    "2025-05-14": {
      "min": 0.318,
      "max": 0.74,
      "median": 0.633,
      "mean": 0.623,
      "sd": 0.049
    },
    "2025-06-12": {
      "min": 0.389,
      "max": 0.667,
      "median": 0.564,
      "mean": 0.561,
      "sd": 0.028
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 2.843,
      "area_percentage": 1.0
    },
    "dominant_category": "medium vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "low_vegetation": {
        "area_ha": 0.003,
        "area_percentage": 0.001
      },
      "medium vegetation": {
        "area_ha": 2.826,
        "area_percentage": 0.994
      },
      "high_vegetation": {
        "area_ha": 0.014,
        "area_percentage": 0.005
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
    "evi_median": 0.574,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.07,
          "percentage": 2.41
        },
        "EVI_statistics": {
          "mean": 0.456,
          "median": 0.462,
          "min": 0.357,
          "max": 0.487
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.34,
          "percentage": 11.87
        },
        "EVI_statistics": {
          "mean": 0.527,
          "median": 0.531,
          "min": 0.488,
          "max": 0.545
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 2.23,
          "percentage": 78.28
        },
        "EVI_statistics": {
          "mean": 0.575,
          "median": 0.575,
          "min": 0.545,
          "max": 0.602
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.21,
          "percentage": 7.28
        },
        "EVI_statistics": {
          "mean": 0.62,
          "median": 0.616,
          "min": 0.602,
          "max": 0.659
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.0,
          "percentage": 0.16
        },
        "EVI_statistics": {
          "mean": 0.675,
          "median": 0.667,
          "min": 0.663,
          "max": 0.699
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "low",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.1,
            "area_percentage": 3.6,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.43,
            "area_percentage": 15.47,
            "zone_number": 2
          },
          "similar": {
            "ha": 1.8,
            "area_percentage": 64.75,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.38,
            "area_percentage": 13.67,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.07,
            "area_percentage": 2.52,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-06-15",
      "reference_image_date": "2025-05-14",
      "change_period": 32
    },
    "median_EVI_change": {
      "old_value": 0.633,
      "new_value": 0.574,
      "difference": -0.054
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
          "ha": 0.63,
          "percentage": 22.0,
          "zone_number": 2
        },
        "no_change": {
          "ha": 2.21,
          "percentage": 77.9,
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
          "ha": 0.43,
          "percentage": 15.04,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.32,
          "percentage": 11.27,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 1.27,
          "percentage": 44.63,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.38,
          "percentage": 13.26,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.45,
          "percentage": 15.8,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.203590173728813 49.11603630766667)",
          "new_value": 0.561,
          "old_value": 0.665,
          "value_difference": -0.104,
          "area_ha": 0.152,
          "category": "major_decline",
          "location": "NE",
          "id": 1
        },
        {
          "geometry": "POINT (16.20262253644068 49.114456012333335)",
          "new_value": 0.562,
          "old_value": 0.655,
          "value_difference": -0.093,
          "area_ha": 0.09,
          "category": "major_decline",
          "location": "S",
          "id": 2
        },
        {
          "geometry": "POINT (16.20279082118644 49.115688107000004)",
          "new_value": 0.589,
          "old_value": 0.614,
          "value_difference": -0.025,
          "area_ha": 0.081,
          "category": "major_growth",
          "location": "N",
          "id": 3
        },
        {
          "geometry": "POINT (16.20215975338983 49.11533990633333)",
          "new_value": 0.589,
          "old_value": 0.616,
          "value_difference": -0.027,
          "area_ha": 0.106,
          "category": "major_growth",
          "location": "W",
          "id": 4
        },
        {
          "geometry": "POINT (16.201823183898306 49.114482797)",
          "new_value": 0.593,
          "old_value": 0.619,
          "value_difference": -0.026,
          "area_ha": 0.035,
          "category": "major_growth",
          "location": "SW",
          "id": 5
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 1568.101,
      "historical_average": 1570.641
    },
    "accumulated_precipitation_since_seeding": {
      "current": 239.779,
      "historical_mean": 356.87
    },
    "precipitation_summary": {
      "last_3_days": 0.0,
      "last_7_days": 13.45,
      "last_14_days": 31.559,
      "last_30_days": 56.703
    },
    "standardized_precipitation_index": {
      "1_month": -0.621,
      "3_month": -1.226,
      "6_month": -1.477
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-06-11 00:00:00",
          "temperature_mean": 16.1,
          "temperature_min": 10.946,
          "temperature_max": 19.097,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.314,
          "soiltemperature_0to10cm_mean": 17.164,
          "soilmoisture_0to10cm": 0.297,
          "windspeed_mean": 3.099
        },
        {
          "time": "2025-06-12 00:00:00",
          "temperature_mean": 15.973,
          "temperature_min": 8.004,
          "temperature_max": 21.711,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.001,
          "soiltemperature_0to10cm_mean": 16.875,
          "soilmoisture_0to10cm": 0.281,
          "windspeed_mean": 1.532
        },
        {
          "time": "2025-06-13 00:00:00",
          "temperature_mean": 17.308,
          "temperature_min": 11.277,
          "temperature_max": 22.59,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 17.762,
          "soilmoisture_0to10cm": 0.266,
          "windspeed_mean": 2.451
        },
        {
          "time": "2025-06-14 00:00:00",
          "temperature_mean": 18.566,
          "temperature_min": 11.456,
          "temperature_max": 24.871,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 18.623,
          "soilmoisture_0to10cm": 0.253,
          "windspeed_mean": 1.926
        },
        {
          "time": "2025-06-15 00:00:00",
          "temperature_mean": 21.641,
          "temperature_min": 12.569,
          "temperature_max": 28.614,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.054,
          "soiltemperature_0to10cm_mean": 20.597,
          "soilmoisture_0to10cm": 0.241,
          "windspeed_mean": 1.214
        },
        {
          "time": "2025-06-16 00:00:00",
          "temperature_mean": 16.809,
          "temperature_min": 14.7,
          "temperature_max": 19.277,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.982,
          "soiltemperature_0to10cm_mean": 17.499,
          "soilmoisture_0to10cm": 0.279,
          "windspeed_mean": 3.562
        },
        {
          "time": "2025-06-17 00:00:00",
          "temperature_mean": 17.868,
          "temperature_min": 13.359,
          "temperature_max": 22.413,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.726,
          "soiltemperature_0to10cm_mean": 17.826,
          "soilmoisture_0to10cm": 0.291,
          "windspeed_mean": 2.646
        },
        {
          "time": "2025-06-18 00:00:00",
          "temperature_mean": 20.268,
          "temperature_min": 12.046,
          "temperature_max": 26.58,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.591,
          "soiltemperature_0to10cm_mean": 19.898,
          "soilmoisture_0to10cm": 0.273,
          "windspeed_mean": 1.133
        },
        {
          "time": "2025-06-19 00:00:00",
          "temperature_mean": 20.779,
          "temperature_min": 15.533,
          "temperature_max": 25.245,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.285,
          "soiltemperature_0to10cm_mean": 20.452,
          "soilmoisture_0to10cm": 0.256,
          "windspeed_mean": 3.225
        },
        {
          "time": "2025-06-20 00:00:00",
          "temperature_mean": 17.467,
          "temperature_min": 11.478,
          "temperature_max": 22.237,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.02,
          "soiltemperature_0to10cm_mean": 19.093,
          "soilmoisture_0to10cm": 0.241,
          "windspeed_mean": 2.155
        },
        {
          "time": "2025-06-21 00:00:00",
          "temperature_mean": 18.283,
          "temperature_min": 11.006,
          "temperature_max": 23.075,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.041,
          "soiltemperature_0to10cm_mean": 18.792,
          "soilmoisture_0to10cm": 0.228,
          "windspeed_mean": 0.976
        },
        {
          "time": "2025-06-22 00:00:00",
          "temperature_mean": 21.474,
          "temperature_min": 12.734,
          "temperature_max": 27.715,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.035,
          "soiltemperature_0to10cm_mean": 20.411,
          "soilmoisture_0to10cm": 0.217,
          "windspeed_mean": 0.842
        },
        {
          "time": "2025-06-23 00:00:00",
          "temperature_mean": 22.546,
          "temperature_min": 15.93,
          "temperature_max": 30.359,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.661,
          "soiltemperature_0to10cm_mean": 21.482,
          "soilmoisture_0to10cm": 0.214,
          "windspeed_mean": 1.975
        },
        {
          "time": "2025-06-24 00:00:00",
          "temperature_mean": 21.104,
          "temperature_min": 15.856,
          "temperature_max": 26.074,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.346,
          "soiltemperature_0to10cm_mean": 21.091,
          "soilmoisture_0to10cm": 0.236,
          "windspeed_mean": 3.393
        },
        {
          "time": "2025-06-25 00:00:00",
          "temperature_mean": 23.561,
          "temperature_min": 16.097,
          "temperature_max": 29.182,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.187,
          "soiltemperature_0to10cm_mean": 22.564,
          "soilmoisture_0to10cm": 0.221,
          "windspeed_mean": 3.008
        },
        {
          "time": "2025-06-26 00:00:00",
          "temperature_mean": 24.62,
          "temperature_min": 18.168,
          "temperature_max": 32.069,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.57,
          "soiltemperature_0to10cm_mean": 24.296,
          "soilmoisture_0to10cm": 0.218,
          "windspeed_mean": 0.681
        },
        {
          "time": "2025-06-27 00:00:00",
          "temperature_mean": 21.679,
          "temperature_min": 18.889,
          "temperature_max": 26.881,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.508,
          "soiltemperature_0to10cm_mean": 22.3,
          "soilmoisture_0to10cm": 0.265,
          "windspeed_mean": 3.82
        },
        {
          "time": "2025-06-28 00:00:00",
          "temperature_mean": 21.408,
          "temperature_min": 17.571,
          "temperature_max": 25.555,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.489,
          "soiltemperature_0to10cm_mean": 21.657,
          "soilmoisture_0to10cm": 0.248,
          "windspeed_mean": 3.063
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-10-14",
      "day_since": 242
    },
    "crop_emergence": {
      "date": "2024-10-27",
      "day_since": 228
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-12",
      "day_since": 61
    },
    "beginning_of_heading": {
      "date": "2025-05-19",
      "day_since": 24
    },
    "beginning_of_ripenes": {
      "date": "2025-06-24",
      "day_since": -12
    },
    "harvest": {
      "date": "2025-07-12",
      "day_since": -30
    }
  },
  "timing_of_field_operations": {
    "2025-06-11": {
      "weather_conditions": {
        "temperature_mean": 16.1,
        "temperature_min": 10.946,
        "temperature_max": 19.097,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.314,
        "soiltemperature_0to10cm_mean": 17.164,
        "soilmoisture_0to10cm": 0.297,
        "windspeed_mean": 3.099
      }
    },
    "2025-06-12": {
      "weather_conditions": {
        "temperature_mean": 15.973,
        "temperature_min": 8.004,
        "temperature_max": 21.711,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.001,
        "soiltemperature_0to10cm_mean": 16.875,
        "soilmoisture_0to10cm": 0.281,
        "windspeed_mean": 1.532
      }
    },
    "2025-06-13": {
      "weather_conditions": {
        "temperature_mean": 17.308,
        "temperature_min": 11.277,
        "temperature_max": 22.59,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 17.762,
        "soilmoisture_0to10cm": 0.266,
        "windspeed_mean": 2.451
      }
    },
    "2025-06-14": {
      "weather_conditions": {
        "temperature_mean": 18.566,
        "temperature_min": 11.456,
        "temperature_max": 24.871,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 18.623,
        "soilmoisture_0to10cm": 0.253,
        "windspeed_mean": 1.926
      }
    },
    "2025-06-15": {
      "weather_conditions": {
        "temperature_mean": 21.641,
        "temperature_min": 12.569,
        "temperature_max": 28.614,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.054,
        "soiltemperature_0to10cm_mean": 20.597,
        "soilmoisture_0to10cm": 0.241,
        "windspeed_mean": 1.214
      }
    },
    "2025-06-16": {
      "weather_conditions": {
        "temperature_mean": 16.809,
        "temperature_min": 14.7,
        "temperature_max": 19.277,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.982,
        "soiltemperature_0to10cm_mean": 17.499,
        "soilmoisture_0to10cm": 0.279,
        "windspeed_mean": 3.562
      }
    },
    "2025-06-17": {
      "weather_conditions": {
        "temperature_mean": 17.868,
        "temperature_min": 13.359,
        "temperature_max": 22.413,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.726,
        "soiltemperature_0to10cm_mean": 17.826,
        "soilmoisture_0to10cm": 0.291,
        "windspeed_mean": 2.646
      }
    },
    "2025-06-18": {
      "weather_conditions": {
        "temperature_mean": 20.268,
        "temperature_min": 12.046,
        "temperature_max": 26.58,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.591,
        "soiltemperature_0to10cm_mean": 19.898,
        "soilmoisture_0to10cm": 0.273,
        "windspeed_mean": 1.133
      }
    },
    "2025-06-19": {
      "weather_conditions": {
        "temperature_mean": 20.779,
        "temperature_min": 15.533,
        "temperature_max": 25.245,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.285,
        "soiltemperature_0to10cm_mean": 20.452,
        "soilmoisture_0to10cm": 0.256,
        "windspeed_mean": 3.225
      }
    },
    "2025-06-20": {
      "weather_conditions": {
        "temperature_mean": 17.467,
        "temperature_min": 11.478,
        "temperature_max": 22.237,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.02,
        "soiltemperature_0to10cm_mean": 19.093,
        "soilmoisture_0to10cm": 0.241,
        "windspeed_mean": 2.155
      }
    },
    "2025-06-21": {
      "weather_conditions": {
        "temperature_mean": 18.283,
        "temperature_min": 11.006,
        "temperature_max": 23.075,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.041,
        "soiltemperature_0to10cm_mean": 18.792,
        "soilmoisture_0to10cm": 0.228,
        "windspeed_mean": 0.976
      }
    },
    "2025-06-22": {
      "weather_conditions": {
        "temperature_mean": 21.474,
        "temperature_min": 12.734,
        "temperature_max": 27.715,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.035,
        "soiltemperature_0to10cm_mean": 20.411,
        "soilmoisture_0to10cm": 0.217,
        "windspeed_mean": 0.842
      }
    },
    "2025-06-23": {
      "weather_conditions": {
        "temperature_mean": 22.546,
        "temperature_min": 15.93,
        "temperature_max": 30.359,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.661,
        "soiltemperature_0to10cm_mean": 21.482,
        "soilmoisture_0to10cm": 0.214,
        "windspeed_mean": 1.975
      }
    },
    "2025-06-24": {
      "weather_conditions": {
        "temperature_mean": 21.104,
        "temperature_min": 15.856,
        "temperature_max": 26.074,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.346,
        "soiltemperature_0to10cm_mean": 21.091,
        "soilmoisture_0to10cm": 0.236,
        "windspeed_mean": 3.393
      }
    },
    "2025-06-25": {
      "weather_conditions": {
        "temperature_mean": 23.561,
        "temperature_min": 16.097,
        "temperature_max": 29.182,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.187,
        "soiltemperature_0to10cm_mean": 22.564,
        "soilmoisture_0to10cm": 0.221,
        "windspeed_mean": 3.008
      }
    },
    "2025-06-26": {
      "weather_conditions": {
        "temperature_mean": 24.62,
        "temperature_min": 18.168,
        "temperature_max": 32.069,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.57,
        "soiltemperature_0to10cm_mean": 24.296,
        "soilmoisture_0to10cm": 0.218,
        "windspeed_mean": 0.681
      }
    },
    "2025-06-27": {
      "weather_conditions": {
        "temperature_mean": 21.679,
        "temperature_min": 18.889,
        "temperature_max": 26.881,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.508,
        "soiltemperature_0to10cm_mean": 22.3,
        "soilmoisture_0to10cm": 0.265,
        "windspeed_mean": 3.82
      }
    },
    "2025-06-28": {
      "weather_conditions": {
        "temperature_mean": 21.408,
        "temperature_min": 17.571,
        "temperature_max": 25.555,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.489,
        "soiltemperature_0to10cm_mean": 21.657,
        "soilmoisture_0to10cm": 0.248,
        "windspeed_mean": 3.063
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
  "polygon_wkt": "POLYGON ((16.20228445 49.11627205, 16.2026515 49.11630531, 16.20348775 49.11639732, 16.20385538 49.11644005, 16.20397014 49.11645147, 16.20398985 49.11644719, 16.20398942 49.11643279, 16.20392941 49.11629039, 16.20381491 49.11603282, 16.20370185 49.11577536, 16.20349508 49.11526667, 16.20342174 49.11509166, 16.20338506 49.11500847, 16.20333478 49.11489649, 16.20329626 49.11480422, 16.20326291 49.11472032, 16.20318475 49.11452995, 16.20315541 49.11445497, 16.20312444 49.11437989, 16.20308556 49.11428408, 16.20305493 49.1141659, 16.20304316 49.11410848, 16.20301982 49.1140464, 16.20300962 49.11404085, 16.20295694 49.11404171, 16.20284469 49.11405148, 16.20278945 49.11405759, 16.20254437 49.11408184, 16.20242929 49.11411445, 16.20226458 49.11410505, 16.20165235 49.11415528, 16.20150765 49.11416738, 16.20228445 49.11627205))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
