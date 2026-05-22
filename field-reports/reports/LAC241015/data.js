// Auto-generated from data.json — do not edit manually
window.FIELD_DATA = {
  "annotation_id": "LAC241015",
  "_images": {
    "zones": "images/zones.png"
  },
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
        "area_ha": 0,
        "area_percentage": 0
      },
      "very_high_vegetation": {
        "area_ha": 0,
        "area_percentage": 0
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
          "ha": 0,
          "percentage": 0.01
        },
        "minor_decline": {
          "ha": 0.21,
          "percentage": 0.67
        },
        "no_change": {
          "ha": 31.91,
          "percentage": 99.24
        },
        "minor_growth": {
          "ha": 0.03,
          "percentage": 0.08
        },
        "major_growth": {
          "ha": 0,
          "percentage": 0
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 5.88,
          "percentage": 18.27
        },
        "minor_rank_drop": {
          "ha": 3.93,
          "percentage": 12.21
        },
        "rank_stable": {
          "ha": 12.41,
          "percentage": 38.6
        },
        "minor_rank_gain": {
          "ha": 4.23,
          "percentage": 13.17
        },
        "major_rank_gain": {
          "ha": 5.71,
          "percentage": 17.75
        }
      },
      "hotspot_scouting_points": [
        {
          "id": 1,
          "category": "major_decline",
          "location": "NW",
          "area_ha": 0.39,
          "old_value": 0.17,
          "new_value": 0.178,
          "value_difference": 0.008
        },
        {
          "id": 2,
          "category": "major_decline",
          "location": "SE",
          "area_ha": 1.52,
          "old_value": 0.192,
          "new_value": 0.189,
          "value_difference": -0.003
        },
        {
          "id": 3,
          "category": "major_growth",
          "location": "C",
          "area_ha": 0.516,
          "old_value": 0.153,
          "new_value": 0.204,
          "value_difference": 0.051
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
          "time": "2024-10-11",
          "temperature_mean": 9.774,
          "temperature_min": 6.189,
          "temperature_max": 13.075,
          "precipitation_sum": 4,
          "totalcloudcover_mean": 0.666,
          "soiltemperature_0to10cm_mean": 11.235,
          "soilmoisture_0to10cm": 0.396,
          "windspeed_mean": 2.224
        },
        {
          "time": "2024-10-12",
          "temperature_mean": 7.62,
          "temperature_min": 2.844,
          "temperature_max": 11.072,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.765,
          "soiltemperature_0to10cm_mean": 9.421,
          "soilmoisture_0to10cm": 0.385,
          "windspeed_mean": 1.939
        },
        {
          "time": "2024-10-13",
          "temperature_mean": 9.476,
          "temperature_min": 6.849,
          "temperature_max": 13.986,
          "precipitation_sum": 2,
          "totalcloudcover_mean": 0.865,
          "soiltemperature_0to10cm_mean": 9.756,
          "soilmoisture_0to10cm": 0.39,
          "windspeed_mean": 2.448
        },
        {
          "time": "2024-10-14",
          "temperature_mean": 8.383,
          "temperature_min": 4.166,
          "temperature_max": 12.641,
          "precipitation_sum": 4,
          "totalcloudcover_mean": 0.669,
          "soiltemperature_0to10cm_mean": 9.54,
          "soilmoisture_0to10cm": 0.386,
          "windspeed_mean": 1.044
        },
        {
          "time": "2024-10-15",
          "temperature_mean": 8.748,
          "temperature_min": 5.46,
          "temperature_max": 12.184,
          "precipitation_sum": 1,
          "totalcloudcover_mean": 0.381,
          "soiltemperature_0to10cm_mean": 10.055,
          "soilmoisture_0to10cm": 0.398,
          "windspeed_mean": 0.853
        },
        {
          "time": "2024-10-16",
          "temperature_mean": 7.892,
          "temperature_min": 4.495,
          "temperature_max": 11.215,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.417,
          "soiltemperature_0to10cm_mean": 8.935,
          "soilmoisture_0to10cm": 0.38,
          "windspeed_mean": 4.973
        },
        {
          "time": "2024-10-17",
          "temperature_mean": 9.083,
          "temperature_min": 6.692,
          "temperature_max": 11.632,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.812,
          "soiltemperature_0to10cm_mean": 9.888,
          "soilmoisture_0to10cm": 0.371,
          "windspeed_mean": 5.656
        },
        {
          "time": "2024-10-18",
          "temperature_mean": 9.856,
          "temperature_min": 7.853,
          "temperature_max": 12.725,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.851,
          "soiltemperature_0to10cm_mean": 10.573,
          "soilmoisture_0to10cm": 0.365,
          "windspeed_mean": 5.052
        },
        {
          "time": "2024-10-19",
          "temperature_mean": 9.433,
          "temperature_min": 6.987,
          "temperature_max": 13.107,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.872,
          "soiltemperature_0to10cm_mean": 10.247,
          "soilmoisture_0to10cm": 0.359,
          "windspeed_mean": 3.277
        },
        {
          "time": "2024-10-20",
          "temperature_mean": 8.305,
          "temperature_min": 4.851,
          "temperature_max": 12.57,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.817,
          "soiltemperature_0to10cm_mean": 9.199,
          "soilmoisture_0to10cm": 0.356,
          "windspeed_mean": 3.193
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
      "seeding": {
        "suitability_index": 0.75,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        }
      }
    },
    "2024-10-12": {
      "seeding": {
        "suitability_index": 0.5,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "bad",
          "min_temperatures_next_week": "bad"
        }
      }
    },
    "2024-10-13": {
      "seeding": {
        "suitability_index": 0.75,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        }
      }
    },
    "2024-10-14": {
      "seeding": {
        "suitability_index": 0.75,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        }
      }
    },
    "2024-10-15": {
      "seeding": {
        "suitability_index": 0.75,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        }
      }
    },
    "2024-10-16": {
      "seeding": {
        "suitability_index": 0.75,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        }
      }
    },
    "2024-10-17": {
      "seeding": {
        "suitability_index": 0.75,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        }
      }
    },
    "2024-10-18": {
      "seeding": {
        "suitability_index": 0.75,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        }
      }
    },
    "2024-10-19": {
      "seeding": {
        "suitability_index": 0.75,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        }
      }
    },
    "2024-10-20": {
      "seeding": {
        "suitability_index": 0.75,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "bad"
        }
      }
    },
    "2024-10-21": {
      "seeding": {
        "suitability_index": 0.88,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        }
      }
    },
    "2024-10-22": {
      "seeding": {
        "suitability_index": 0.88,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        }
      }
    },
    "2024-10-23": {
      "seeding": {
        "suitability_index": 0.88,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        }
      }
    },
    "2024-10-24": {
      "seeding": {
        "suitability_index": 0.88,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        }
      }
    },
    "2024-10-25": {
      "seeding": {
        "suitability_index": 0.88,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        }
      }
    },
    "2024-10-26": {
      "seeding": {
        "suitability_index": 0.88,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        }
      }
    },
    "2024-10-27": {
      "seeding": {
        "suitability_index": 0.88,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        }
      }
    },
    "2024-10-28": {
      "seeding": {
        "suitability_index": 0.88,
        "conditions": {
          "no_freeze": "good",
          "waterlogged soil": "good",
          "max_soil_moisture": "good",
          "min_soil_temperature": "good",
          "min_air_temperature": "good",
          "min_temperatures_next_week": "medium"
        }
      }
    }
  }
};