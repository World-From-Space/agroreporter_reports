// Auto-generated from data.json — do not edit manually
window.FIELD_DATA = {
  "annotation_id": "LAA241015",
  "_images": {
    "zones": "images/zones.png"
  },
  "metadata": {
    "field_area_ha": 32.334,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 22.68,
      "mean_elevation": 548.73,
      "min_elevation": 533.27,
      "max_elevation": 555.951
    },
    "soil": {
      "bulk_density kg/dm³": 1.33,
      "cation_exchange_capacity cmol(c)/kg": 20.681,
      "clay_particles g/100g (%)": 21.989,
      "sand particles g/100g (%)": 36.342,
      "silt particles g/100g (%)": 41.669,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2024-08-28": {
      "min": 0.14,
      "max": 0.532,
      "median": 0.21,
      "mean": 0.213,
      "sd": 0.028
    },
    "2024-09-06": {
      "min": 0.094,
      "max": 0.385,
      "median": 0.156,
      "mean": 0.158,
      "sd": 0.023
    },
    "2024-09-11": {
      "min": 0.069,
      "max": 0.359,
      "median": 0.129,
      "mean": 0.131,
      "sd": 0.021
    },
    "2024-09-18": {
      "min": 0.059,
      "max": 0.475,
      "median": 0.108,
      "mean": 0.114,
      "sd": 0.03
    },
    "2024-09-22": {
      "min": 0.04,
      "max": 0.465,
      "median": 0.096,
      "mean": 0.1,
      "sd": 0.029
    },
    "2024-09-28": {
      "min": 0.062,
      "max": 0.5,
      "median": 0.117,
      "mean": 0.124,
      "sd": 0.035
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 1.05,
      "area_percentage": 0.033
    },
    "dominant_category": "bare soil",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 30.935,
        "area_percentage": 0.967
      },
      "very_low_vegetation": {
        "area_ha": 0.634,
        "area_percentage": 0.02
      },
      "low_vegetation": {
        "area_ha": 0.264,
        "area_percentage": 0.008
      },
      "medium vegetation": {
        "area_ha": 0.152,
        "area_percentage": 0.005
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
    "evi_median": 0.108,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 4.26,
          "percentage": 13.33
        },
        "EVI_statistics": {
          "mean": 0.085,
          "median": 0.086,
          "min": 0.058,
          "max": 0.092
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 7.06,
          "percentage": 22.06
        },
        "EVI_statistics": {
          "mean": 0.098,
          "median": 0.098,
          "min": 0.092,
          "max": 0.103
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 9.14,
          "percentage": 28.59
        },
        "EVI_statistics": {
          "mean": 0.108,
          "median": 0.108,
          "min": 0.103,
          "max": 0.113
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 5.36,
          "percentage": 16.77
        },
        "EVI_statistics": {
          "mean": 0.118,
          "median": 0.118,
          "min": 0.113,
          "max": 0.124
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 6.16,
          "percentage": 19.25
        },
        "EVI_statistics": {
          "mean": 0.171,
          "median": 0.145,
          "min": 0.124,
          "max": 0.532
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 9.17,
            "area_percentage": 29.37,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 3.81,
            "area_percentage": 12.2,
            "zone_number": 2
          },
          "similar": {
            "ha": 5.01,
            "area_percentage": 16.05,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 4.16,
            "area_percentage": 13.32,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 9.07,
            "area_percentage": 29.05,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2024-10-15",
      "reference_image_date": "2024-09-28",
      "change_period": 17
    },
    "median_EVI_change": {
      "old_value": 0.117,
      "new_value": 0.108,
      "difference": -0.009
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0,
          "percentage": 0
        },
        "minor_decline": {
          "ha": 0.15,
          "percentage": 0.46
        },
        "no_change": {
          "ha": 31.46,
          "percentage": 98.36
        },
        "minor_growth": {
          "ha": 0.35,
          "percentage": 1.09
        },
        "major_growth": {
          "ha": 0.03,
          "percentage": 0.08
        }
      }
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 3.82,
          "percentage": 11.95
        },
        "minor_rank_drop": {
          "ha": 4.4,
          "percentage": 13.75
        },
        "rank_stable": {
          "ha": 15.43,
          "percentage": 48.24
        },
        "minor_rank_gain": {
          "ha": 4.5,
          "percentage": 14.06
        },
        "major_rank_gain": {
          "ha": 3.84,
          "percentage": 12
        }
      },
      "hotspot_scouting_points": [
        {
          "id": 1,
          "category": "major_decline",
          "location": "S",
          "area_ha": 0.432,
          "old_value": 0.128,
          "new_value": 0.096,
          "value_difference": -0.032
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 167.283,
      "historical_average": 182.187
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
          "temperature_mean": 9.892,
          "temperature_min": 6.338,
          "temperature_max": 13.235,
          "precipitation_sum": 4,
          "totalcloudcover_mean": 0.666,
          "soiltemperature_0to10cm_mean": 11.39,
          "soilmoisture_0to10cm": 0.394,
          "windspeed_mean": 2.217
        },
        {
          "time": "2024-10-12",
          "temperature_mean": 7.779,
          "temperature_min": 3.148,
          "temperature_max": 11.224,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.765,
          "soiltemperature_0to10cm_mean": 9.602,
          "soilmoisture_0to10cm": 0.383,
          "windspeed_mean": 1.857
        },
        {
          "time": "2024-10-13",
          "temperature_mean": 9.469,
          "temperature_min": 6.99,
          "temperature_max": 14.115,
          "precipitation_sum": 2,
          "totalcloudcover_mean": 0.865,
          "soiltemperature_0to10cm_mean": 9.841,
          "soilmoisture_0to10cm": 0.387,
          "windspeed_mean": 2.353
        },
        {
          "time": "2024-10-14",
          "temperature_mean": 8.408,
          "temperature_min": 4.257,
          "temperature_max": 12.672,
          "precipitation_sum": 4,
          "totalcloudcover_mean": 0.669,
          "soiltemperature_0to10cm_mean": 9.583,
          "soilmoisture_0to10cm": 0.383,
          "windspeed_mean": 1.014
        },
        {
          "time": "2024-10-15",
          "temperature_mean": 8.722,
          "temperature_min": 5.288,
          "temperature_max": 12.196,
          "precipitation_sum": 1,
          "totalcloudcover_mean": 0.381,
          "soiltemperature_0to10cm_mean": 10.081,
          "soilmoisture_0to10cm": 0.396,
          "windspeed_mean": 0.911
        },
        {
          "time": "2024-10-16",
          "temperature_mean": 7.923,
          "temperature_min": 4.389,
          "temperature_max": 11.289,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.417,
          "soiltemperature_0to10cm_mean": 8.901,
          "soilmoisture_0to10cm": 0.377,
          "windspeed_mean": 4.769
        },
        {
          "time": "2024-10-17",
          "temperature_mean": 9.167,
          "temperature_min": 6.77,
          "temperature_max": 11.663,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.812,
          "soiltemperature_0to10cm_mean": 9.916,
          "soilmoisture_0to10cm": 0.368,
          "windspeed_mean": 5.55
        },
        {
          "time": "2024-10-18",
          "temperature_mean": 9.909,
          "temperature_min": 7.896,
          "temperature_max": 12.748,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.851,
          "soiltemperature_0to10cm_mean": 10.586,
          "soilmoisture_0to10cm": 0.36,
          "windspeed_mean": 4.938
        },
        {
          "time": "2024-10-19",
          "temperature_mean": 9.44,
          "temperature_min": 6.901,
          "temperature_max": 13.1,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.872,
          "soiltemperature_0to10cm_mean": 10.209,
          "soilmoisture_0to10cm": 0.354,
          "windspeed_mean": 3.186
        },
        {
          "time": "2024-10-20",
          "temperature_mean": 8.276,
          "temperature_min": 4.763,
          "temperature_max": 12.583,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.817,
          "soiltemperature_0to10cm_mean": 9.117,
          "soilmoisture_0to10cm": 0.351,
          "windspeed_mean": 3.122
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
      "date": "2024-07-25",
      "day_since": 76
    },
    "beginning_of_stem_elongation": {
      "date": "2025-01-10",
      "day_since": -93
    },
    "beginning_of_heading": {
      "date": "2025-02-20",
      "day_since": -134
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