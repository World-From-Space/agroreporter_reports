// Field data for LAH250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAH250715",
  "metadata": {
    "field_area_ha": 20.96,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lesonice"
    },
    "terrain": {
      "variability": 10.845,
      "mean_elevation": 538.915,
      "min_elevation": 532.668,
      "max_elevation": 543.513
    },
    "soil": {
      "bulk_density kg/dm³": 1.334,
      "cation_exchange_capacity cmol(c)/kg": 19.774,
      "clay_particles g/100g (%)": 20.385,
      "sand particles g/100g (%)": 39.575,
      "silt particles g/100g (%)": 40.056,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-05-03": {
      "min": 0.384,
      "max": 0.751,
      "median": 0.635,
      "mean": 0.631,
      "sd": 0.043
    },
    "2025-05-14": {
      "min": 0.363,
      "max": 0.751,
      "median": 0.617,
      "mean": 0.612,
      "sd": 0.047
    },
    "2025-05-31": {
      "min": 0.334,
      "max": 0.775,
      "median": 0.628,
      "mean": 0.626,
      "sd": 0.048
    },
    "2025-06-13": {
      "min": 0.38,
      "max": 0.735,
      "median": 0.58,
      "mean": 0.58,
      "sd": 0.048
    },
    "2025-06-20": {
      "min": 0.313,
      "max": 0.72,
      "median": 0.558,
      "mean": 0.557,
      "sd": 0.048
    },
    "2025-06-26": {
      "min": 0.296,
      "max": 0.68,
      "median": 0.483,
      "mean": 0.486,
      "sd": 0.061
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 21.011,
      "area_percentage": 1.0
    },
    "dominant_category": "medium vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.114,
        "area_percentage": 0.005
      },
      "low_vegetation": {
        "area_ha": 6.057,
        "area_percentage": 0.288
      },
      "medium vegetation": {
        "area_ha": 14.826,
        "area_percentage": 0.706
      },
      "high_vegetation": {
        "area_ha": 0.013,
        "area_percentage": 0.001
      },
      "very_high_vegetation": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      }
    }
  },
  "growth_variability": {
    "variability_category": "very_high",
    "number_of_zones": 5,
    "evi_median": 0.451,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 4.68,
          "percentage": 22.26
        },
        "EVI_statistics": {
          "mean": 0.351,
          "median": 0.355,
          "min": 0.274,
          "max": 0.383
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.78,
          "percentage": 18.0
        },
        "EVI_statistics": {
          "mean": 0.405,
          "median": 0.405,
          "min": 0.383,
          "max": 0.428
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 4.1,
          "percentage": 19.54
        },
        "EVI_statistics": {
          "mean": 0.451,
          "median": 0.451,
          "min": 0.428,
          "max": 0.473
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.14,
          "percentage": 19.69
        },
        "EVI_statistics": {
          "mean": 0.495,
          "median": 0.495,
          "min": 0.473,
          "max": 0.519
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 4.31,
          "percentage": 20.51
        },
        "EVI_statistics": {
          "mean": 0.555,
          "median": 0.551,
          "min": 0.519,
          "max": 0.7
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 1.53,
            "area_percentage": 7.66,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 4.84,
            "area_percentage": 24.22,
            "zone_number": 2
          },
          "similar": {
            "ha": 8.21,
            "area_percentage": 41.09,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 3.41,
            "area_percentage": 17.07,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.99,
            "area_percentage": 9.96,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-07-15",
      "reference_image_date": "2025-06-15",
      "change_period": 30
    },
    "median_EVI_change": {
      "old_value": 0.574,
      "new_value": 0.451,
      "difference": -0.123
    },
    "growth trend": "minor_decline",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 6.24,
          "percentage": 29.69,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 11.55,
          "percentage": 54.95,
          "zone_number": 2
        },
        "no_change": {
          "ha": 3.22,
          "percentage": 15.31,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.01,
          "percentage": 0.05,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.0,
          "percentage": 0.0,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.744104443368263 49.09342014840278)",
          "new_value": 0.365,
          "old_value": 0.548,
          "value_difference": -0.183,
          "area_ha": 5.101,
          "category": "major_decline",
          "location": "C",
          "id": 1
        },
        {
          "geometry": "POINT (15.743648692619761 49.092298077569446)",
          "new_value": 0.393,
          "old_value": 0.557,
          "value_difference": -0.164,
          "area_ha": 0.359,
          "category": "major_decline",
          "location": "S",
          "id": 2
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 1.14,
          "percentage": 5.44,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.58,
          "percentage": 17.04,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 12.25,
          "percentage": 58.29,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.41,
          "percentage": 11.49,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.62,
          "percentage": 7.73,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.744933081092814 49.093099556736114)",
          "new_value": 0.378,
          "old_value": 0.584,
          "value_difference": -0.206,
          "area_ha": 0.367,
          "category": "major_decline",
          "location": "E",
          "id": 1
        },
        {
          "geometry": "POINT (15.735403747260479 49.09745426020834)",
          "new_value": 0.475,
          "old_value": 0.502,
          "value_difference": -0.027,
          "area_ha": 0.868,
          "category": "major_growth",
          "location": "NW",
          "id": 2
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
      "date": "2025-05-30",
      "day_since": 44
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
  "polygon_wkt": "POLYGON ((15.74656123 49.09105737, 15.74527726 49.09188699, 15.74524083 49.09187731, 15.74475229 49.09147901, 15.74450925 49.09128865, 15.74421604 49.09148183, 15.74380554 49.09175228, 15.74319148 49.09214779, 15.74153282 49.09324274, 15.73935076 49.0946898, 15.73769565 49.09577845, 15.73751776 49.09589303, 15.73693981 49.09626529, 15.73674079 49.09639347, 15.73671591 49.09649205, 15.73666774 49.09652177, 15.73652001 49.09657331, 15.73578661 49.0970348, 15.73518211 49.09745276, 15.73513444 49.09749313, 15.73517488 49.09753091, 15.73522514 49.09756967, 15.73543151 49.09764778, 15.73553449 49.09765463, 15.73562933 49.09764129, 15.73707989 49.09724587, 15.73762284 49.09709533, 15.73762478 49.0970948, 15.73879024 49.09678689, 15.73959905 49.09653545, 15.739709 49.09647471, 15.73974596 49.09644021, 15.73995339 49.09634548, 15.74002054 49.09631001, 15.74069057 49.09612181, 15.74099229 49.09601057, 15.74145572 49.09588942, 15.74173511 49.0958018, 15.74205561 49.09569296, 15.74233851 49.09554853, 15.74258815 49.0953988, 15.74309073 49.09496683, 15.74332368 49.09461528, 15.74340045 49.0945724, 15.74350435 49.09452442, 15.74370577 49.09452104, 15.74393476 49.09450325, 15.7440976 49.09448538, 15.74426319 49.09445239, 15.74440576 49.09441759, 15.74454249 49.0943721, 15.74483744 49.09421477, 15.74561845 49.09368416, 15.74578279 49.09357777, 15.74611506 49.0933512, 15.74631266 49.09319012, 15.74649533 49.09296719, 15.746596 49.09287639, 15.74673333 49.09280386, 15.7470317 49.09264979, 15.74734517 49.09244788, 15.74742355 49.09235947, 15.74746172 49.09227812, 15.74746292 49.09218284, 15.74741053 49.09205674, 15.74742529 49.09197577, 15.74748962 49.09188606, 15.74753139 49.09182406, 15.7476123 49.09177051, 15.74764833 49.09175298, 15.74772529 49.0917111, 15.74782281 49.09165646, 15.74790156 49.09161472, 15.74800773 49.09157274, 15.74825433 49.09144036, 15.74868066 49.09120581, 15.74879833 49.09111537, 15.74888513 49.09100206, 15.74897269 49.09086325, 15.74895001 49.09076459, 15.74864009 49.09040369, 15.74825946 49.08996043, 15.74672311 49.09095277, 15.74656123 49.09105737))"
};
