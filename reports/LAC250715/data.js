// Field data for LAC250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAC250715",
  "metadata": {
    "field_area_ha": 32.062,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Martínkov"
    },
    "terrain": {
      "variability": 42.516,
      "mean_elevation": 561.401,
      "min_elevation": 548.815,
      "max_elevation": 591.331
    },
    "soil": {
      "bulk_density kg/dm³": 1.322,
      "cation_exchange_capacity cmol(c)/kg": 19.806,
      "clay_particles g/100g (%)": 21.349,
      "sand particles g/100g (%)": 33.087,
      "silt particles g/100g (%)": 45.524,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-05-10": {
      "min": 0.451,
      "max": 0.831,
      "median": 0.7,
      "mean": 0.7,
      "sd": 0.035
    },
    "2025-05-14": {
      "min": 0.393,
      "max": 0.766,
      "median": 0.663,
      "mean": 0.66,
      "sd": 0.031
    },
    "2025-06-09": {
      "min": 0.308,
      "max": 0.74,
      "median": 0.62,
      "mean": 0.618,
      "sd": 0.041
    },
    "2025-06-15": {
      "min": 0.347,
      "max": 0.759,
      "median": 0.611,
      "mean": 0.61,
      "sd": 0.037
    },
    "2025-06-20": {
      "min": 0.309,
      "max": 0.765,
      "median": 0.584,
      "mean": 0.583,
      "sd": 0.036
    },
    "2025-06-26": {
      "min": 0.276,
      "max": 0.747,
      "median": 0.54,
      "mean": 0.542,
      "sd": 0.044
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 32.158,
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
        "area_ha": 0.049,
        "area_percentage": 0.002
      },
      "medium vegetation": {
        "area_ha": 31.725,
        "area_percentage": 0.987
      },
      "high_vegetation": {
        "area_ha": 0.384,
        "area_percentage": 0.012
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
    "evi_median": 0.527,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.18,
          "percentage": 3.66
        },
        "EVI_statistics": {
          "mean": 0.429,
          "median": 0.432,
          "min": 0.362,
          "max": 0.448
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 7.36,
          "percentage": 22.89
        },
        "EVI_statistics": {
          "mean": 0.48,
          "median": 0.483,
          "min": 0.448,
          "max": 0.5
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 15.1,
          "percentage": 46.96
        },
        "EVI_statistics": {
          "mean": 0.527,
          "median": 0.527,
          "min": 0.5,
          "max": 0.553
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 6.94,
          "percentage": 21.57
        },
        "EVI_statistics": {
          "mean": 0.572,
          "median": 0.568,
          "min": 0.553,
          "max": 0.606
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 1.58,
          "percentage": 4.92
        },
        "EVI_statistics": {
          "mean": 0.636,
          "median": 0.626,
          "min": 0.606,
          "max": 0.765
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 4.13,
            "area_percentage": 13.39,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 7.43,
            "area_percentage": 24.08,
            "zone_number": 2
          },
          "similar": {
            "ha": 5.96,
            "area_percentage": 19.32,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 5.87,
            "area_percentage": 19.03,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 7.46,
            "area_percentage": 24.18,
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
      "old_value": 0.611,
      "new_value": 0.527,
      "difference": -0.083
    },
    "growth trend": "minor_decline",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.55,
          "percentage": 1.72,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 19.12,
          "percentage": 59.46,
          "zone_number": 2
        },
        "no_change": {
          "ha": 12.48,
          "percentage": 38.82,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.0,
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
          "ha": 2.99,
          "percentage": 9.3,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 5.17,
          "percentage": 16.08,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 16.2,
          "percentage": 50.36,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.77,
          "percentage": 14.82,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 3.03,
          "percentage": 9.44,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
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
      "date": "2025-04-19",
      "day_since": 85
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
  "polygon_wkt": "POLYGON ((15.73795175 49.1036669, 15.73801437 49.10360716, 15.73808112 49.10356794, 15.73839084 49.10336579, 15.73860962 49.10322052, 15.73874058 49.10307504, 15.73881848 49.10301381, 15.73897782 49.10285467, 15.73901478 49.10280123, 15.73906115 49.10273421, 15.73905249 49.10263186, 15.73899002 49.1025651, 15.73854077 49.10240905, 15.7380238 49.10226632, 15.73793471 49.10227032, 15.73786982 49.10230596, 15.7376933 49.10253558, 15.73765288 49.10255488, 15.73760192 49.1025341, 15.73743608 49.1023629, 15.73725353 49.10212329, 15.7371293 49.10201301, 15.73660062 49.10183376, 15.73498963 49.10136694, 15.7314594 49.1035566, 15.72302755 49.10873424, 15.72337943 49.10892254, 15.72378455 49.10924971, 15.72433879 49.10963662, 15.72464872 49.10988837, 15.72477476 49.10995942, 15.72486192 49.10998186, 15.72494684 49.10997657, 15.72503089 49.10994605, 15.72576281 49.1095142, 15.72587498 49.10945148, 15.72597616 49.10939605, 15.72630565 49.10926893, 15.72636727 49.10923002, 15.72642337 49.10919371, 15.72647705 49.10913684, 15.72661543 49.10888708, 15.7266643 49.10879743, 15.72679892 49.10866123, 15.72740606 49.1082352, 15.72795004 49.10785691, 15.7280588 49.10781007, 15.72865594 49.10765526, 15.72896686 49.10752396, 15.73013024 49.10707574, 15.73094764 49.10684853, 15.73109062 49.10679509, 15.73123101 49.10672586, 15.73128144 49.10667951, 15.73128172 49.10662801, 15.73122348 49.10655254, 15.73102191 49.10640054, 15.73100548 49.10636211, 15.73102757 49.10632945, 15.73107931 49.10631733, 15.73141632 49.10639058, 15.73186779 49.10646711, 15.73202195 49.10645389, 15.73214836 49.10643395, 15.73240346 49.10632049, 15.73264973 49.10617362, 15.73283328 49.10600692, 15.73292965 49.1059347, 15.73338351 49.10582652, 15.73396121 49.10566185, 15.73412297 49.10559941, 15.73502116 49.10520546, 15.73511759 49.10515327, 15.73525099 49.10504964, 15.73549159 49.10488019, 15.73557524 49.10484511, 15.73588276 49.10473979, 15.73623172 49.10461146, 15.73653704 49.10450687, 15.73691902 49.10433737, 15.73726494 49.10417167, 15.73746323 49.10406506, 15.73755705 49.10402066, 15.73795175 49.1036669))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
