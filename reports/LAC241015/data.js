// Field data for LAC241015 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAC241015",
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
    "2024-08-16": {
      "min": 0.336,
      "max": 0.79,
      "median": 0.665,
      "mean": 0.661,
      "sd": 0.052
    },
    "2024-08-23": {
      "min": 0.326,
      "max": 0.677,
      "median": 0.573,
      "mean": 0.569,
      "sd": 0.042
    },
    "2024-09-01": {
      "min": 0.157,
      "max": 0.502,
      "median": 0.213,
      "mean": 0.221,
      "sd": 0.033
    },
    "2024-09-08": {
      "min": 0.113,
      "max": 0.494,
      "median": 0.152,
      "mean": 0.16,
      "sd": 0.032
    },
    "2024-09-18": {
      "min": 0.067,
      "max": 0.619,
      "median": 0.136,
      "mean": 0.15,
      "sd": 0.055
    },
    "2024-09-28": {
      "min": 0.046,
      "max": 0.645,
      "median": 0.141,
      "mean": 0.155,
      "sd": 0.062
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 11.075,
      "area_percentage": 0.344
    },
    "dominant_category": "bare soil",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 21.083,
        "area_percentage": 0.656
      },
      "very_low_vegetation": {
        "area_ha": 9.679,
        "area_percentage": 0.301
      },
      "low_vegetation": {
        "area_ha": 0.927,
        "area_percentage": 0.029
      },
      "medium vegetation": {
        "area_ha": 0.468,
        "area_percentage": 0.015
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
    "evi_median": 0.194,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.1,
          "percentage": 0.32
        },
        "EVI_statistics": {
          "mean": 0.161,
          "median": 0.162,
          "min": 0.145,
          "max": 0.165
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 5.96,
          "percentage": 18.54
        },
        "EVI_statistics": {
          "mean": 0.179,
          "median": 0.18,
          "min": 0.165,
          "max": 0.185
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 17.55,
          "percentage": 54.58
        },
        "EVI_statistics": {
          "mean": 0.194,
          "median": 0.193,
          "min": 0.185,
          "max": 0.204
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.76,
          "percentage": 14.8
        },
        "EVI_statistics": {
          "mean": 0.211,
          "median": 0.21,
          "min": 0.204,
          "max": 0.224
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 3.78,
          "percentage": 11.76
        },
        "EVI_statistics": {
          "mean": 0.298,
          "median": 0.27,
          "min": 0.224,
          "max": 0.559
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 2.69,
            "area_percentage": 8.72,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 7.9,
            "area_percentage": 25.61,
            "zone_number": 2
          },
          "similar": {
            "ha": 8.7,
            "area_percentage": 28.2,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 3.66,
            "area_percentage": 11.86,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 7.9,
            "area_percentage": 25.61,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2024-10-15",
      "reference_image_date": "2024-09-27",
      "change_period": 18
    },
    "median_EVI_change": {
      "old_value": 0.167,
      "new_value": 0.194,
      "difference": 0.028
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.0,
          "percentage": 0.01,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 0.21,
          "percentage": 0.67,
          "zone_number": 2
        },
        "no_change": {
          "ha": 31.91,
          "percentage": 99.24,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.03,
          "percentage": 0.08,
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
          "ha": 5.88,
          "percentage": 18.27,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.93,
          "percentage": 12.21,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 12.41,
          "percentage": 38.6,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.23,
          "percentage": 13.17,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 5.71,
          "percentage": 17.75,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.726155552067183 49.10855493052632)",
          "new_value": 0.178,
          "old_value": 0.17,
          "value_difference": 0.008,
          "area_ha": 0.39,
          "category": "major_decline",
          "location": "NW",
          "id": 1
        },
        {
          "geometry": "POINT (15.735808856459947 49.102153751578946)",
          "new_value": 0.189,
          "old_value": 0.192,
          "value_difference": -0.003,
          "area_ha": 1.52,
          "category": "major_decline",
          "location": "SE",
          "id": 2
        },
        {
          "geometry": "POINT (15.730795767054262 49.10615448842105)",
          "new_value": 0.204,
          "old_value": 0.153,
          "value_difference": 0.051,
          "area_ha": 0.516,
          "category": "major_growth",
          "location": "C",
          "id": 3
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 167.426,
      "historical_average": 181.605
    },
    "accumulated_precipitation_since_seeding": {
      "current": 29.253,
      "historical_mean": 27.454
    },
    "precipitation_summary": {
      "last_3_days": 6.174,
      "last_7_days": 14.29,
      "last_14_days": 29.209,
      "last_30_days": 82.458
    },
    "standardized_precipitation_index": {
      "1_month": 1.098,
      "3_month": 1.327,
      "6_month": 1.829
    },
    "forecast": {
      "daily": [
        {
          "time": "2024-10-11 00:00:00",
          "temperature_mean": 9.774,
          "temperature_min": 6.189,
          "temperature_max": 13.075,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.666,
          "soiltemperature_0to10cm_mean": 11.235,
          "soilmoisture_0to10cm": 0.396,
          "windspeed_mean": 2.224
        },
        {
          "time": "2024-10-12 00:00:00",
          "temperature_mean": 7.62,
          "temperature_min": 2.844,
          "temperature_max": 11.072,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.765,
          "soiltemperature_0to10cm_mean": 9.421,
          "soilmoisture_0to10cm": 0.385,
          "windspeed_mean": 1.939
        },
        {
          "time": "2024-10-13 00:00:00",
          "temperature_mean": 9.476,
          "temperature_min": 6.849,
          "temperature_max": 13.986,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.865,
          "soiltemperature_0to10cm_mean": 9.756,
          "soilmoisture_0to10cm": 0.39,
          "windspeed_mean": 2.448
        },
        {
          "time": "2024-10-14 00:00:00",
          "temperature_mean": 8.383,
          "temperature_min": 4.166,
          "temperature_max": 12.641,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.669,
          "soiltemperature_0to10cm_mean": 9.54,
          "soilmoisture_0to10cm": 0.386,
          "windspeed_mean": 1.044
        },
        {
          "time": "2024-10-15 00:00:00",
          "temperature_mean": 8.748,
          "temperature_min": 5.46,
          "temperature_max": 12.184,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.381,
          "soiltemperature_0to10cm_mean": 10.055,
          "soilmoisture_0to10cm": 0.398,
          "windspeed_mean": 0.853
        },
        {
          "time": "2024-10-16 00:00:00",
          "temperature_mean": 7.892,
          "temperature_min": 4.495,
          "temperature_max": 11.215,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.417,
          "soiltemperature_0to10cm_mean": 8.935,
          "soilmoisture_0to10cm": 0.38,
          "windspeed_mean": 4.973
        },
        {
          "time": "2024-10-17 00:00:00",
          "temperature_mean": 9.083,
          "temperature_min": 6.692,
          "temperature_max": 11.632,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.812,
          "soiltemperature_0to10cm_mean": 9.888,
          "soilmoisture_0to10cm": 0.371,
          "windspeed_mean": 5.656
        },
        {
          "time": "2024-10-18 00:00:00",
          "temperature_mean": 9.856,
          "temperature_min": 7.853,
          "temperature_max": 12.725,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.851,
          "soiltemperature_0to10cm_mean": 10.573,
          "soilmoisture_0to10cm": 0.365,
          "windspeed_mean": 5.052
        },
        {
          "time": "2024-10-19 00:00:00",
          "temperature_mean": 9.433,
          "temperature_min": 6.987,
          "temperature_max": 13.107,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.872,
          "soiltemperature_0to10cm_mean": 10.247,
          "soilmoisture_0to10cm": 0.359,
          "windspeed_mean": 3.277
        },
        {
          "time": "2024-10-20 00:00:00",
          "temperature_mean": 8.305,
          "temperature_min": 4.851,
          "temperature_max": 12.57,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.817,
          "soiltemperature_0to10cm_mean": 9.199,
          "soilmoisture_0to10cm": 0.356,
          "windspeed_mean": 3.193
        },
        {
          "time": "2024-10-21 00:00:00",
          "temperature_mean": 8.774,
          "temperature_min": 4.697,
          "temperature_max": 13.705,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.463,
          "soiltemperature_0to10cm_mean": 9.477,
          "soilmoisture_0to10cm": 0.353,
          "windspeed_mean": 1.885
        },
        {
          "time": "2024-10-22 00:00:00",
          "temperature_mean": 10.584,
          "temperature_min": 5.556,
          "temperature_max": 16.31,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.535,
          "soiltemperature_0to10cm_mean": 10.585,
          "soilmoisture_0to10cm": 0.35,
          "windspeed_mean": 0.7
        },
        {
          "time": "2024-10-23 00:00:00",
          "temperature_mean": 10.468,
          "temperature_min": 9.519,
          "temperature_max": 11.502,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.993,
          "soiltemperature_0to10cm_mean": 10.87,
          "soilmoisture_0to10cm": 0.371,
          "windspeed_mean": 1.852
        },
        {
          "time": "2024-10-24 00:00:00",
          "temperature_mean": 10.164,
          "temperature_min": 8.067,
          "temperature_max": 13.242,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.592,
          "soiltemperature_0to10cm_mean": 10.625,
          "soilmoisture_0to10cm": 0.364,
          "windspeed_mean": 3.211
        },
        {
          "time": "2024-10-25 00:00:00",
          "temperature_mean": 10.235,
          "temperature_min": 7.245,
          "temperature_max": 12.898,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.91,
          "soiltemperature_0to10cm_mean": 10.477,
          "soilmoisture_0to10cm": 0.362,
          "windspeed_mean": 2.701
        },
        {
          "time": "2024-10-26 00:00:00",
          "temperature_mean": 10.935,
          "temperature_min": 10.319,
          "temperature_max": 12.003,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 1.0,
          "soiltemperature_0to10cm_mean": 11.272,
          "soilmoisture_0to10cm": 0.363,
          "windspeed_mean": 2.057
        },
        {
          "time": "2024-10-27 00:00:00",
          "temperature_mean": 12.381,
          "temperature_min": 10.282,
          "temperature_max": 17.321,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.707,
          "soiltemperature_0to10cm_mean": 12.157,
          "soilmoisture_0to10cm": 0.361,
          "windspeed_mean": 0.438
        },
        {
          "time": "2024-10-28 00:00:00",
          "temperature_mean": 11.79,
          "temperature_min": 8.651,
          "temperature_max": 16.169,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.181,
          "soiltemperature_0to10cm_mean": 11.845,
          "soilmoisture_0to10cm": 0.355,
          "windspeed_mean": 0.91
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 11
    },
    "crop_emergence": {
      "date": "2024-07-24",
      "day_since": 77
    },
    "beginning_of_stem_elongation": {
      "date": "2025-01-09",
      "day_since": -92
    },
    "beginning_of_heading": {
      "date": "2025-02-19",
      "day_since": -133
    },
    "beginning_of_ripenes": {
      "date": "2025-04-02",
      "day_since": -175
    },
    "harvest": {
      "date": "2025-04-18",
      "day_since": -191
    }
  },
  "timing_of_field_operations": {
    "2024-10-11": {
      "weather_conditions": {
        "temperature_mean": 9.774,
        "temperature_min": 6.189,
        "temperature_max": 13.075,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.666,
        "soiltemperature_0to10cm_mean": 11.235,
        "soilmoisture_0to10cm": 0.396,
        "windspeed_mean": 2.224
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.75
      }
    },
    "2024-10-12": {
      "weather_conditions": {
        "temperature_mean": 7.62,
        "temperature_min": 2.844,
        "temperature_max": 11.072,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.765,
        "soiltemperature_0to10cm_mean": 9.421,
        "soilmoisture_0to10cm": 0.385,
        "windspeed_mean": 1.939
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "bad",
          "min_temperatures_next_week": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      }
    },
    "2024-10-13": {
      "weather_conditions": {
        "temperature_mean": 9.476,
        "temperature_min": 6.849,
        "temperature_max": 13.986,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.865,
        "soiltemperature_0to10cm_mean": 9.756,
        "soilmoisture_0to10cm": 0.39,
        "windspeed_mean": 2.448
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.75
      }
    },
    "2024-10-14": {
      "weather_conditions": {
        "temperature_mean": 8.383,
        "temperature_min": 4.166,
        "temperature_max": 12.641,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.669,
        "soiltemperature_0to10cm_mean": 9.54,
        "soilmoisture_0to10cm": 0.386,
        "windspeed_mean": 1.044
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.75
      }
    },
    "2024-10-15": {
      "weather_conditions": {
        "temperature_mean": 8.748,
        "temperature_min": 5.46,
        "temperature_max": 12.184,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.381,
        "soiltemperature_0to10cm_mean": 10.055,
        "soilmoisture_0to10cm": 0.398,
        "windspeed_mean": 0.853
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.75
      }
    },
    "2024-10-16": {
      "weather_conditions": {
        "temperature_mean": 7.892,
        "temperature_min": 4.495,
        "temperature_max": 11.215,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.417,
        "soiltemperature_0to10cm_mean": 8.935,
        "soilmoisture_0to10cm": 0.38,
        "windspeed_mean": 4.973
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.75
      }
    },
    "2024-10-17": {
      "weather_conditions": {
        "temperature_mean": 9.083,
        "temperature_min": 6.692,
        "temperature_max": 11.632,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.812,
        "soiltemperature_0to10cm_mean": 9.888,
        "soilmoisture_0to10cm": 0.371,
        "windspeed_mean": 5.656
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.75
      }
    },
    "2024-10-18": {
      "weather_conditions": {
        "temperature_mean": 9.856,
        "temperature_min": 7.853,
        "temperature_max": 12.725,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.851,
        "soiltemperature_0to10cm_mean": 10.573,
        "soilmoisture_0to10cm": 0.365,
        "windspeed_mean": 5.052
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.75
      }
    },
    "2024-10-19": {
      "weather_conditions": {
        "temperature_mean": 9.433,
        "temperature_min": 6.987,
        "temperature_max": 13.107,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.872,
        "soiltemperature_0to10cm_mean": 10.247,
        "soilmoisture_0to10cm": 0.359,
        "windspeed_mean": 3.277
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.75
      }
    },
    "2024-10-20": {
      "weather_conditions": {
        "temperature_mean": 8.305,
        "temperature_min": 4.851,
        "temperature_max": 12.57,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.817,
        "soiltemperature_0to10cm_mean": 9.199,
        "soilmoisture_0to10cm": 0.356,
        "windspeed_mean": 3.193
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.75
      }
    },
    "2024-10-21": {
      "weather_conditions": {
        "temperature_mean": 8.774,
        "temperature_min": 4.697,
        "temperature_max": 13.705,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.463,
        "soiltemperature_0to10cm_mean": 9.477,
        "soilmoisture_0to10cm": 0.353,
        "windspeed_mean": 1.885
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.88
      }
    },
    "2024-10-22": {
      "weather_conditions": {
        "temperature_mean": 10.584,
        "temperature_min": 5.556,
        "temperature_max": 16.31,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.535,
        "soiltemperature_0to10cm_mean": 10.585,
        "soilmoisture_0to10cm": 0.35,
        "windspeed_mean": 0.7
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.88
      }
    },
    "2024-10-23": {
      "weather_conditions": {
        "temperature_mean": 10.468,
        "temperature_min": 9.519,
        "temperature_max": 11.502,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.993,
        "soiltemperature_0to10cm_mean": 10.87,
        "soilmoisture_0to10cm": 0.371,
        "windspeed_mean": 1.852
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.88
      }
    },
    "2024-10-24": {
      "weather_conditions": {
        "temperature_mean": 10.164,
        "temperature_min": 8.067,
        "temperature_max": 13.242,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.592,
        "soiltemperature_0to10cm_mean": 10.625,
        "soilmoisture_0to10cm": 0.364,
        "windspeed_mean": 3.211
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.88
      }
    },
    "2024-10-25": {
      "weather_conditions": {
        "temperature_mean": 10.235,
        "temperature_min": 7.245,
        "temperature_max": 12.898,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.91,
        "soiltemperature_0to10cm_mean": 10.477,
        "soilmoisture_0to10cm": 0.362,
        "windspeed_mean": 2.701
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.88
      }
    },
    "2024-10-26": {
      "weather_conditions": {
        "temperature_mean": 10.935,
        "temperature_min": 10.319,
        "temperature_max": 12.003,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 1.0,
        "soiltemperature_0to10cm_mean": 11.272,
        "soilmoisture_0to10cm": 0.363,
        "windspeed_mean": 2.057
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.88
      }
    },
    "2024-10-27": {
      "weather_conditions": {
        "temperature_mean": 12.381,
        "temperature_min": 10.282,
        "temperature_max": 17.321,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.707,
        "soiltemperature_0to10cm_mean": 12.157,
        "soilmoisture_0to10cm": 0.361,
        "windspeed_mean": 0.438
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.88
      }
    },
    "2024-10-28": {
      "weather_conditions": {
        "temperature_mean": 11.79,
        "temperature_min": 8.651,
        "temperature_max": 16.169,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.181,
        "soiltemperature_0to10cm_mean": 11.845,
        "soilmoisture_0to10cm": 0.355,
        "windspeed_mean": 0.91
      },
      "seeding": {
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.88
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
  "polygon_wkt": "POLYGON ((15.73795175 49.1036669, 15.73801437 49.10360716, 15.73808112 49.10356794, 15.73839084 49.10336579, 15.73860962 49.10322052, 15.73874058 49.10307504, 15.73881848 49.10301381, 15.73897782 49.10285467, 15.73901478 49.10280123, 15.73906115 49.10273421, 15.73905249 49.10263186, 15.73899002 49.1025651, 15.73854077 49.10240905, 15.7380238 49.10226632, 15.73793471 49.10227032, 15.73786982 49.10230596, 15.7376933 49.10253558, 15.73765288 49.10255488, 15.73760192 49.1025341, 15.73743608 49.1023629, 15.73725353 49.10212329, 15.7371293 49.10201301, 15.73660062 49.10183376, 15.73498963 49.10136694, 15.7314594 49.1035566, 15.72302755 49.10873424, 15.72337943 49.10892254, 15.72378455 49.10924971, 15.72433879 49.10963662, 15.72464872 49.10988837, 15.72477476 49.10995942, 15.72486192 49.10998186, 15.72494684 49.10997657, 15.72503089 49.10994605, 15.72576281 49.1095142, 15.72587498 49.10945148, 15.72597616 49.10939605, 15.72630565 49.10926893, 15.72636727 49.10923002, 15.72642337 49.10919371, 15.72647705 49.10913684, 15.72661543 49.10888708, 15.7266643 49.10879743, 15.72679892 49.10866123, 15.72740606 49.1082352, 15.72795004 49.10785691, 15.7280588 49.10781007, 15.72865594 49.10765526, 15.72896686 49.10752396, 15.73013024 49.10707574, 15.73094764 49.10684853, 15.73109062 49.10679509, 15.73123101 49.10672586, 15.73128144 49.10667951, 15.73128172 49.10662801, 15.73122348 49.10655254, 15.73102191 49.10640054, 15.73100548 49.10636211, 15.73102757 49.10632945, 15.73107931 49.10631733, 15.73141632 49.10639058, 15.73186779 49.10646711, 15.73202195 49.10645389, 15.73214836 49.10643395, 15.73240346 49.10632049, 15.73264973 49.10617362, 15.73283328 49.10600692, 15.73292965 49.1059347, 15.73338351 49.10582652, 15.73396121 49.10566185, 15.73412297 49.10559941, 15.73502116 49.10520546, 15.73511759 49.10515327, 15.73525099 49.10504964, 15.73549159 49.10488019, 15.73557524 49.10484511, 15.73588276 49.10473979, 15.73623172 49.10461146, 15.73653704 49.10450687, 15.73691902 49.10433737, 15.73726494 49.10417167, 15.73746323 49.10406506, 15.73755705 49.10402066, 15.73795175 49.1036669))"
};
