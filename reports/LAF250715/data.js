// Field data for LAF250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAF250715",
  "metadata": {
    "field_area_ha": 32.954,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Martínkov"
    },
    "terrain": {
      "variability": 42.142,
      "mean_elevation": 572.298,
      "min_elevation": 553.388,
      "max_elevation": 595.529
    },
    "soil": {
      "bulk_density kg/dm³": 1.319,
      "cation_exchange_capacity cmol(c)/kg": 19.919,
      "clay_particles g/100g (%)": 21.412,
      "sand particles g/100g (%)": 33.512,
      "silt particles g/100g (%)": 45.076,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-06-09": {
      "min": 0.345,
      "max": 0.734,
      "median": 0.576,
      "mean": 0.578,
      "sd": 0.043
    },
    "2025-06-13": {
      "min": 0.329,
      "max": 0.702,
      "median": 0.566,
      "mean": 0.571,
      "sd": 0.042
    },
    "2025-06-18": {
      "min": 0.399,
      "max": 0.697,
      "median": 0.552,
      "mean": 0.555,
      "sd": 0.038
    },
    "2025-06-22": {
      "min": 0.388,
      "max": 0.694,
      "median": 0.548,
      "mean": 0.55,
      "sd": 0.036
    },
    "2025-06-24": {
      "min": 0.379,
      "max": 0.801,
      "median": 0.586,
      "mean": 0.589,
      "sd": 0.044
    },
    "2025-06-30": {
      "min": 0.242,
      "max": 0.677,
      "median": 0.432,
      "mean": 0.439,
      "sd": 0.063
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 32.401,
      "area_percentage": 0.984
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.537,
        "area_percentage": 0.016
      },
      "very_low_vegetation": {
        "area_ha": 30.135,
        "area_percentage": 0.915
      },
      "low_vegetation": {
        "area_ha": 1.819,
        "area_percentage": 0.055
      },
      "medium vegetation": {
        "area_ha": 0.447,
        "area_percentage": 0.014
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
    "evi_median": 0.233,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.39,
          "percentage": 1.17
        },
        "EVI_statistics": {
          "mean": 0.194,
          "median": 0.196,
          "min": 0.175,
          "max": 0.198
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 8.13,
          "percentage": 24.68
        },
        "EVI_statistics": {
          "mean": 0.214,
          "median": 0.215,
          "min": 0.198,
          "max": 0.222
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 14.35,
          "percentage": 43.58
        },
        "EVI_statistics": {
          "mean": 0.233,
          "median": 0.232,
          "min": 0.222,
          "max": 0.245
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 5.83,
          "percentage": 17.7
        },
        "EVI_statistics": {
          "mean": 0.254,
          "median": 0.253,
          "min": 0.245,
          "max": 0.268
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 4.24,
          "percentage": 12.87
        },
        "EVI_statistics": {
          "mean": 0.323,
          "median": 0.304,
          "min": 0.268,
          "max": 0.606
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 6.82,
            "area_percentage": 21.08,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 6.73,
            "area_percentage": 20.8,
            "zone_number": 2
          },
          "similar": {
            "ha": 6.28,
            "area_percentage": 19.41,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 4.21,
            "area_percentage": 13.01,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 8.32,
            "area_percentage": 25.71,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-07-15",
      "reference_image_date": "2025-06-30",
      "change_period": 15
    },
    "median_EVI_change": {
      "old_value": 0.432,
      "new_value": 0.233,
      "difference": -0.192
    },
    "growth trend": "major_decline",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 26.52,
          "percentage": 80.51,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 5.85,
          "percentage": 17.77,
          "zone_number": 2
        },
        "no_change": {
          "ha": 0.55,
          "percentage": 1.67,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.02,
          "percentage": 0.06,
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
          "ha": 5.2,
          "percentage": 15.79,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 5.26,
          "percentage": 15.97,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 12.46,
          "percentage": 37.82,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 5.07,
          "percentage": 15.39,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 4.95,
          "percentage": 15.03,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.72216925311054 49.10467467864362)",
          "new_value": 0.219,
          "old_value": 0.467,
          "value_difference": -0.248,
          "area_ha": 0.962,
          "category": "major_decline",
          "location": "C",
          "id": 1
        },
        {
          "geometry": "POINT (15.723580092287918 49.10280408875)",
          "new_value": 0.225,
          "old_value": 0.485,
          "value_difference": -0.26,
          "area_ha": 0.335,
          "category": "major_decline",
          "location": "S",
          "id": 2
        },
        {
          "geometry": "POINT (15.728144571979433 49.1013076168351)",
          "new_value": 0.223,
          "old_value": 0.492,
          "value_difference": -0.269,
          "area_ha": 0.546,
          "category": "major_decline",
          "location": "SE",
          "id": 3
        },
        {
          "geometry": "POINT (15.725986817943443 49.10106711242021)",
          "new_value": 0.228,
          "old_value": 0.518,
          "value_difference": -0.29,
          "area_ha": 0.359,
          "category": "major_decline",
          "location": "SE",
          "id": 4
        },
        {
          "geometry": "POINT (15.717314306529563 49.10587720071808)",
          "new_value": 0.266,
          "old_value": 0.378,
          "value_difference": -0.112,
          "area_ha": 0.658,
          "category": "major_growth",
          "location": "W",
          "id": 5
        },
        {
          "geometry": "POINT (15.72432700714653 49.10419366981383)",
          "new_value": 0.253,
          "old_value": 0.372,
          "value_difference": -0.119,
          "area_ha": 0.562,
          "category": "major_growth",
          "location": "C",
          "id": 6
        },
        {
          "geometry": "POINT (15.72146383352185 49.103338543005314)",
          "new_value": 0.293,
          "old_value": 0.418,
          "value_difference": -0.125,
          "area_ha": 0.355,
          "category": "major_growth",
          "location": "C",
          "id": 7
        },
        {
          "geometry": "POINT (15.729928868586118 49.100131817473404)",
          "new_value": 0.31,
          "old_value": 0.367,
          "value_difference": -0.057,
          "area_ha": 0.437,
          "category": "major_growth",
          "location": "SE",
          "id": 8
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 2183.047,
      "historical_average": 2137.229
    },
    "accumulated_precipitation_since_seeding": {
      "current": 357.594,
      "historical_mean": 508.704
    },
    "precipitation_summary": {
      "last_3_days": 5.342,
      "last_7_days": 24.058,
      "last_14_days": 49.238,
      "last_30_days": 64.844
    },
    "standardized_precipitation_index": {
      "1_month": -0.435,
      "3_month": -0.881,
      "6_month": -1.656
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-07-11 00:00:00",
          "temperature_mean": 16.28,
          "temperature_min": 12.446,
          "temperature_max": 20.652,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.665,
          "soiltemperature_0to10cm_mean": 17.214,
          "soilmoisture_0to10cm": 0.323,
          "windspeed_mean": 2.273
        },
        {
          "time": "2025-07-12 00:00:00",
          "temperature_mean": 16.803,
          "temperature_min": 12.318,
          "temperature_max": 20.575,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.841,
          "soiltemperature_0to10cm_mean": 17.442,
          "soilmoisture_0to10cm": 0.317,
          "windspeed_mean": 1.47
        },
        {
          "time": "2025-07-13 00:00:00",
          "temperature_mean": 19.554,
          "temperature_min": 13.13,
          "temperature_max": 25.084,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.391,
          "soiltemperature_0to10cm_mean": 19.538,
          "soilmoisture_0to10cm": 0.317,
          "windspeed_mean": 1.382
        },
        {
          "time": "2025-07-14 00:00:00",
          "temperature_mean": 20.765,
          "temperature_min": 14.013,
          "temperature_max": 25.95,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.595,
          "soiltemperature_0to10cm_mean": 20.416,
          "soilmoisture_0to10cm": 0.307,
          "windspeed_mean": 2.362
        },
        {
          "time": "2025-07-15 00:00:00",
          "temperature_mean": 20.404,
          "temperature_min": 16.755,
          "temperature_max": 25.128,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.567,
          "soiltemperature_0to10cm_mean": 21.05,
          "soilmoisture_0to10cm": 0.303,
          "windspeed_mean": 3.251
        },
        {
          "time": "2025-07-16 00:00:00",
          "temperature_mean": 17.396,
          "temperature_min": 13.819,
          "temperature_max": 21.255,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.642,
          "soiltemperature_0to10cm_mean": 19.34,
          "soilmoisture_0to10cm": 0.294,
          "windspeed_mean": 2.648
        },
        {
          "time": "2025-07-17 00:00:00",
          "temperature_mean": 15.973,
          "temperature_min": 12.644,
          "temperature_max": 19.904,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.825,
          "soiltemperature_0to10cm_mean": 17.551,
          "soilmoisture_0to10cm": 0.307,
          "windspeed_mean": 3.083
        },
        {
          "time": "2025-07-18 00:00:00",
          "temperature_mean": 16.818,
          "temperature_min": 13.592,
          "temperature_max": 20.961,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.773,
          "soiltemperature_0to10cm_mean": 17.157,
          "soilmoisture_0to10cm": 0.341,
          "windspeed_mean": 2.466
        },
        {
          "time": "2025-07-19 00:00:00",
          "temperature_mean": 19.623,
          "temperature_min": 13.253,
          "temperature_max": 24.739,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.381,
          "soiltemperature_0to10cm_mean": 19.363,
          "soilmoisture_0to10cm": 0.325,
          "windspeed_mean": 0.512
        },
        {
          "time": "2025-07-20 00:00:00",
          "temperature_mean": 22.672,
          "temperature_min": 16.083,
          "temperature_max": 27.643,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.444,
          "soiltemperature_0to10cm_mean": 21.217,
          "soilmoisture_0to10cm": 0.303,
          "windspeed_mean": 0.598
        },
        {
          "time": "2025-07-21 00:00:00",
          "temperature_mean": 20.583,
          "temperature_min": 15.346,
          "temperature_max": 26.378,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.757,
          "soiltemperature_0to10cm_mean": 21.399,
          "soilmoisture_0to10cm": 0.316,
          "windspeed_mean": 0.585
        },
        {
          "time": "2025-07-22 00:00:00",
          "temperature_mean": 18.81,
          "temperature_min": 14.387,
          "temperature_max": 22.905,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.226,
          "soiltemperature_0to10cm_mean": 19.641,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 3.812
        },
        {
          "time": "2025-07-23 00:00:00",
          "temperature_mean": 19.587,
          "temperature_min": 14.918,
          "temperature_max": 24.172,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.422,
          "soiltemperature_0to10cm_mean": 19.902,
          "soilmoisture_0to10cm": 0.312,
          "windspeed_mean": 2.575
        },
        {
          "time": "2025-07-24 00:00:00",
          "temperature_mean": 17.276,
          "temperature_min": 13.523,
          "temperature_max": 20.214,
          "precipitation_sum": 22.0,
          "totalcloudcover_mean": 0.874,
          "soiltemperature_0to10cm_mean": 18.028,
          "soilmoisture_0to10cm": 0.345,
          "windspeed_mean": 1.425
        },
        {
          "time": "2025-07-25 00:00:00",
          "temperature_mean": 18.699,
          "temperature_min": 14.113,
          "temperature_max": 23.34,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.836,
          "soiltemperature_0to10cm_mean": 19.127,
          "soilmoisture_0to10cm": 0.372,
          "windspeed_mean": 1.03
        },
        {
          "time": "2025-07-26 00:00:00",
          "temperature_mean": 17.905,
          "temperature_min": 15.707,
          "temperature_max": 19.686,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.982,
          "soiltemperature_0to10cm_mean": 18.105,
          "soilmoisture_0to10cm": 0.382,
          "windspeed_mean": 1.645
        },
        {
          "time": "2025-07-27 00:00:00",
          "temperature_mean": 17.299,
          "temperature_min": 15.098,
          "temperature_max": 19.609,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.965,
          "soiltemperature_0to10cm_mean": 17.553,
          "soilmoisture_0to10cm": 0.393,
          "windspeed_mean": 3.002
        },
        {
          "time": "2025-07-28 00:00:00",
          "temperature_mean": 16.959,
          "temperature_min": 14.079,
          "temperature_max": 21.214,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.868,
          "soiltemperature_0to10cm_mean": 17.738,
          "soilmoisture_0to10cm": 0.374,
          "windspeed_mean": 3.406
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 288
    },
    "crop_emergence": {
      "date": "2024-10-11",
      "day_since": 275
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-18",
      "day_since": 86
    },
    "beginning_of_heading": {
      "date": "2025-05-28",
      "day_since": 46
    },
    "beginning_of_ripenes": {
      "date": "2025-07-09",
      "day_since": 4
    },
    "harvest": {
      "date": "2025-07-23",
      "day_since": -10
    }
  },
  "timing_of_field_operations": {
    "2025-07-11": {
      "weather_conditions": {
        "temperature_mean": 16.28,
        "temperature_min": 12.446,
        "temperature_max": 20.652,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.665,
        "soiltemperature_0to10cm_mean": 17.214,
        "soilmoisture_0to10cm": 0.323,
        "windspeed_mean": 2.273
      }
    },
    "2025-07-12": {
      "weather_conditions": {
        "temperature_mean": 16.803,
        "temperature_min": 12.318,
        "temperature_max": 20.575,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.841,
        "soiltemperature_0to10cm_mean": 17.442,
        "soilmoisture_0to10cm": 0.317,
        "windspeed_mean": 1.47
      }
    },
    "2025-07-13": {
      "weather_conditions": {
        "temperature_mean": 19.554,
        "temperature_min": 13.13,
        "temperature_max": 25.084,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.391,
        "soiltemperature_0to10cm_mean": 19.538,
        "soilmoisture_0to10cm": 0.317,
        "windspeed_mean": 1.382
      }
    },
    "2025-07-14": {
      "weather_conditions": {
        "temperature_mean": 20.765,
        "temperature_min": 14.013,
        "temperature_max": 25.95,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.595,
        "soiltemperature_0to10cm_mean": 20.416,
        "soilmoisture_0to10cm": 0.307,
        "windspeed_mean": 2.362
      }
    },
    "2025-07-15": {
      "weather_conditions": {
        "temperature_mean": 20.404,
        "temperature_min": 16.755,
        "temperature_max": 25.128,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.567,
        "soiltemperature_0to10cm_mean": 21.05,
        "soilmoisture_0to10cm": 0.303,
        "windspeed_mean": 3.251
      }
    },
    "2025-07-16": {
      "weather_conditions": {
        "temperature_mean": 17.396,
        "temperature_min": 13.819,
        "temperature_max": 21.255,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.642,
        "soiltemperature_0to10cm_mean": 19.34,
        "soilmoisture_0to10cm": 0.294,
        "windspeed_mean": 2.648
      }
    },
    "2025-07-17": {
      "weather_conditions": {
        "temperature_mean": 15.973,
        "temperature_min": 12.644,
        "temperature_max": 19.904,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.825,
        "soiltemperature_0to10cm_mean": 17.551,
        "soilmoisture_0to10cm": 0.307,
        "windspeed_mean": 3.083
      }
    },
    "2025-07-18": {
      "weather_conditions": {
        "temperature_mean": 16.818,
        "temperature_min": 13.592,
        "temperature_max": 20.961,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.773,
        "soiltemperature_0to10cm_mean": 17.157,
        "soilmoisture_0to10cm": 0.341,
        "windspeed_mean": 2.466
      }
    },
    "2025-07-19": {
      "weather_conditions": {
        "temperature_mean": 19.623,
        "temperature_min": 13.253,
        "temperature_max": 24.739,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.381,
        "soiltemperature_0to10cm_mean": 19.363,
        "soilmoisture_0to10cm": 0.325,
        "windspeed_mean": 0.512
      }
    },
    "2025-07-20": {
      "weather_conditions": {
        "temperature_mean": 22.672,
        "temperature_min": 16.083,
        "temperature_max": 27.643,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.444,
        "soiltemperature_0to10cm_mean": 21.217,
        "soilmoisture_0to10cm": 0.303,
        "windspeed_mean": 0.598
      }
    },
    "2025-07-21": {
      "weather_conditions": {
        "temperature_mean": 20.583,
        "temperature_min": 15.346,
        "temperature_max": 26.378,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.757,
        "soiltemperature_0to10cm_mean": 21.399,
        "soilmoisture_0to10cm": 0.316,
        "windspeed_mean": 0.585
      }
    },
    "2025-07-22": {
      "weather_conditions": {
        "temperature_mean": 18.81,
        "temperature_min": 14.387,
        "temperature_max": 22.905,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.226,
        "soiltemperature_0to10cm_mean": 19.641,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 3.812
      }
    },
    "2025-07-23": {
      "weather_conditions": {
        "temperature_mean": 19.587,
        "temperature_min": 14.918,
        "temperature_max": 24.172,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.422,
        "soiltemperature_0to10cm_mean": 19.902,
        "soilmoisture_0to10cm": 0.312,
        "windspeed_mean": 2.575
      }
    },
    "2025-07-24": {
      "weather_conditions": {
        "temperature_mean": 17.276,
        "temperature_min": 13.523,
        "temperature_max": 20.214,
        "precipitation_sum": 22.0,
        "totalcloudcover_mean": 0.874,
        "soiltemperature_0to10cm_mean": 18.028,
        "soilmoisture_0to10cm": 0.345,
        "windspeed_mean": 1.425
      }
    },
    "2025-07-25": {
      "weather_conditions": {
        "temperature_mean": 18.699,
        "temperature_min": 14.113,
        "temperature_max": 23.34,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.836,
        "soiltemperature_0to10cm_mean": 19.127,
        "soilmoisture_0to10cm": 0.372,
        "windspeed_mean": 1.03
      }
    },
    "2025-07-26": {
      "weather_conditions": {
        "temperature_mean": 17.905,
        "temperature_min": 15.707,
        "temperature_max": 19.686,
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.982,
        "soiltemperature_0to10cm_mean": 18.105,
        "soilmoisture_0to10cm": 0.382,
        "windspeed_mean": 1.645
      }
    },
    "2025-07-27": {
      "weather_conditions": {
        "temperature_mean": 17.299,
        "temperature_min": 15.098,
        "temperature_max": 19.609,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.965,
        "soiltemperature_0to10cm_mean": 17.553,
        "soilmoisture_0to10cm": 0.393,
        "windspeed_mean": 3.002
      }
    },
    "2025-07-28": {
      "weather_conditions": {
        "temperature_mean": 16.959,
        "temperature_min": 14.079,
        "temperature_max": 21.214,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.868,
        "soiltemperature_0to10cm_mean": 17.738,
        "soilmoisture_0to10cm": 0.374,
        "windspeed_mean": 3.406
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
  "polygon_wkt": "POLYGON ((15.71496383 49.106646, 15.71451436 49.10681776, 15.71439073 49.10686896, 15.71438889 49.10688564, 15.71527273 49.10827269, 15.71527435 49.10827535, 15.71553638 49.1087313, 15.71586179 49.10923542, 15.71586186 49.10923552, 15.71612182 49.10963991, 15.71617681 49.10971191, 15.71664248 49.10941621, 15.71680635 49.1093266, 15.71832017 49.10831765, 15.72053305 49.10683436, 15.72179957 49.10600308, 15.72216603 49.10576063, 15.72223483 49.10562387, 15.72245838 49.10550569, 15.72258062 49.10534278, 15.72288823 49.10528394, 15.72356846 49.10483354, 15.72443936 49.10426547, 15.7245063 49.10413495, 15.7247807 49.10404474, 15.72645848 49.10294219, 15.72829668 49.10173706, 15.72876077 49.10143142, 15.73005646 49.1005752, 15.73032131 49.10039462, 15.73048718 49.10026965, 15.73053055 49.10022099, 15.73045103 49.10017192, 15.73043584 49.10016465, 15.73043246 49.10016428, 15.73043274 49.10016316, 15.73032994 49.10011395, 15.72996969 49.10002017, 15.72996443 49.1000187, 15.72959259 49.09990856, 15.72931784 49.09984863, 15.72903009 49.09979746, 15.72859264 49.09973973, 15.72798963 49.09968783, 15.72768469 49.09967517, 15.72768254 49.09967507, 15.7274969 49.09966417, 15.7168956 49.1060182, 15.71662943 49.10613381, 15.71567904 49.10642617, 15.71496383 49.106646))"
};
