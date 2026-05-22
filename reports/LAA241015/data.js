// Field data for LAA241015 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAA241015",
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
          "ha": 0.0,
          "percentage": 0.0,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 0.15,
          "percentage": 0.46,
          "zone_number": 2
        },
        "no_change": {
          "ha": 31.46,
          "percentage": 98.36,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.35,
          "percentage": 1.09,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.03,
          "percentage": 0.08,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 3.82,
          "percentage": 11.95,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.4,
          "percentage": 13.75,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 15.43,
          "percentage": 48.24,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.5,
          "percentage": 14.06,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 3.84,
          "percentage": 12.0,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.7639076758 49.0884473925)",
          "new_value": 0.096,
          "old_value": 0.128,
          "value_difference": -0.032,
          "area_ha": 0.432,
          "category": "major_decline",
          "location": "S",
          "id": 1
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
          "time": "2024-10-11 00:00:00",
          "temperature_mean": 9.892,
          "temperature_min": 6.338,
          "temperature_max": 13.235,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.666,
          "soiltemperature_0to10cm_mean": 11.39,
          "soilmoisture_0to10cm": 0.394,
          "windspeed_mean": 2.217
        },
        {
          "time": "2024-10-12 00:00:00",
          "temperature_mean": 7.779,
          "temperature_min": 3.148,
          "temperature_max": 11.224,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.765,
          "soiltemperature_0to10cm_mean": 9.602,
          "soilmoisture_0to10cm": 0.383,
          "windspeed_mean": 1.857
        },
        {
          "time": "2024-10-13 00:00:00",
          "temperature_mean": 9.469,
          "temperature_min": 6.99,
          "temperature_max": 14.115,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.865,
          "soiltemperature_0to10cm_mean": 9.841,
          "soilmoisture_0to10cm": 0.387,
          "windspeed_mean": 2.353
        },
        {
          "time": "2024-10-14 00:00:00",
          "temperature_mean": 8.408,
          "temperature_min": 4.257,
          "temperature_max": 12.672,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.669,
          "soiltemperature_0to10cm_mean": 9.583,
          "soilmoisture_0to10cm": 0.383,
          "windspeed_mean": 1.014
        },
        {
          "time": "2024-10-15 00:00:00",
          "temperature_mean": 8.722,
          "temperature_min": 5.288,
          "temperature_max": 12.196,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.381,
          "soiltemperature_0to10cm_mean": 10.081,
          "soilmoisture_0to10cm": 0.396,
          "windspeed_mean": 0.911
        },
        {
          "time": "2024-10-16 00:00:00",
          "temperature_mean": 7.923,
          "temperature_min": 4.389,
          "temperature_max": 11.289,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.417,
          "soiltemperature_0to10cm_mean": 8.901,
          "soilmoisture_0to10cm": 0.377,
          "windspeed_mean": 4.769
        },
        {
          "time": "2024-10-17 00:00:00",
          "temperature_mean": 9.167,
          "temperature_min": 6.77,
          "temperature_max": 11.663,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.812,
          "soiltemperature_0to10cm_mean": 9.916,
          "soilmoisture_0to10cm": 0.368,
          "windspeed_mean": 5.55
        },
        {
          "time": "2024-10-18 00:00:00",
          "temperature_mean": 9.909,
          "temperature_min": 7.896,
          "temperature_max": 12.748,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.851,
          "soiltemperature_0to10cm_mean": 10.586,
          "soilmoisture_0to10cm": 0.36,
          "windspeed_mean": 4.938
        },
        {
          "time": "2024-10-19 00:00:00",
          "temperature_mean": 9.44,
          "temperature_min": 6.901,
          "temperature_max": 13.1,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.872,
          "soiltemperature_0to10cm_mean": 10.209,
          "soilmoisture_0to10cm": 0.354,
          "windspeed_mean": 3.186
        },
        {
          "time": "2024-10-20 00:00:00",
          "temperature_mean": 8.276,
          "temperature_min": 4.763,
          "temperature_max": 12.583,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.817,
          "soiltemperature_0to10cm_mean": 9.117,
          "soilmoisture_0to10cm": 0.351,
          "windspeed_mean": 3.122
        },
        {
          "time": "2024-10-21 00:00:00",
          "temperature_mean": 8.585,
          "temperature_min": 4.224,
          "temperature_max": 13.402,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.463,
          "soiltemperature_0to10cm_mean": 9.381,
          "soilmoisture_0to10cm": 0.348,
          "windspeed_mean": 1.855
        },
        {
          "time": "2024-10-22 00:00:00",
          "temperature_mean": 10.451,
          "temperature_min": 5.505,
          "temperature_max": 16.172,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.535,
          "soiltemperature_0to10cm_mean": 10.456,
          "soilmoisture_0to10cm": 0.346,
          "windspeed_mean": 0.756
        },
        {
          "time": "2024-10-23 00:00:00",
          "temperature_mean": 10.559,
          "temperature_min": 9.57,
          "temperature_max": 11.545,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.993,
          "soiltemperature_0to10cm_mean": 10.853,
          "soilmoisture_0to10cm": 0.365,
          "windspeed_mean": 1.903
        },
        {
          "time": "2024-10-24 00:00:00",
          "temperature_mean": 10.24,
          "temperature_min": 8.059,
          "temperature_max": 13.324,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.592,
          "soiltemperature_0to10cm_mean": 10.657,
          "soilmoisture_0to10cm": 0.358,
          "windspeed_mean": 3.028
        },
        {
          "time": "2024-10-25 00:00:00",
          "temperature_mean": 10.278,
          "temperature_min": 7.349,
          "temperature_max": 12.812,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.91,
          "soiltemperature_0to10cm_mean": 10.497,
          "soilmoisture_0to10cm": 0.357,
          "windspeed_mean": 2.721
        },
        {
          "time": "2024-10-26 00:00:00",
          "temperature_mean": 10.979,
          "temperature_min": 10.397,
          "temperature_max": 11.982,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 1.0,
          "soiltemperature_0to10cm_mean": 11.304,
          "soilmoisture_0to10cm": 0.36,
          "windspeed_mean": 2.058
        },
        {
          "time": "2024-10-27 00:00:00",
          "temperature_mean": 12.363,
          "temperature_min": 10.35,
          "temperature_max": 17.35,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.707,
          "soiltemperature_0to10cm_mean": 12.127,
          "soilmoisture_0to10cm": 0.359,
          "windspeed_mean": 0.376
        },
        {
          "time": "2024-10-28 00:00:00",
          "temperature_mean": 11.733,
          "temperature_min": 8.634,
          "temperature_max": 16.055,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.181,
          "soiltemperature_0to10cm_mean": 11.819,
          "soilmoisture_0to10cm": 0.353,
          "windspeed_mean": 0.871
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
      "weather_conditions": {
        "temperature_mean": 9.892,
        "temperature_min": 6.338,
        "temperature_max": 13.235,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.666,
        "soiltemperature_0to10cm_mean": 11.39,
        "soilmoisture_0to10cm": 0.394,
        "windspeed_mean": 2.217
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
        "temperature_mean": 7.779,
        "temperature_min": 3.148,
        "temperature_max": 11.224,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.765,
        "soiltemperature_0to10cm_mean": 9.602,
        "soilmoisture_0to10cm": 0.383,
        "windspeed_mean": 1.857
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
        "temperature_mean": 9.469,
        "temperature_min": 6.99,
        "temperature_max": 14.115,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.865,
        "soiltemperature_0to10cm_mean": 9.841,
        "soilmoisture_0to10cm": 0.387,
        "windspeed_mean": 2.353
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
        "temperature_mean": 8.408,
        "temperature_min": 4.257,
        "temperature_max": 12.672,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.669,
        "soiltemperature_0to10cm_mean": 9.583,
        "soilmoisture_0to10cm": 0.383,
        "windspeed_mean": 1.014
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
        "temperature_mean": 8.722,
        "temperature_min": 5.288,
        "temperature_max": 12.196,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.381,
        "soiltemperature_0to10cm_mean": 10.081,
        "soilmoisture_0to10cm": 0.396,
        "windspeed_mean": 0.911
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
        "temperature_mean": 7.923,
        "temperature_min": 4.389,
        "temperature_max": 11.289,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.417,
        "soiltemperature_0to10cm_mean": 8.901,
        "soilmoisture_0to10cm": 0.377,
        "windspeed_mean": 4.769
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
        "temperature_mean": 9.167,
        "temperature_min": 6.77,
        "temperature_max": 11.663,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.812,
        "soiltemperature_0to10cm_mean": 9.916,
        "soilmoisture_0to10cm": 0.368,
        "windspeed_mean": 5.55
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
        "temperature_mean": 9.909,
        "temperature_min": 7.896,
        "temperature_max": 12.748,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.851,
        "soiltemperature_0to10cm_mean": 10.586,
        "soilmoisture_0to10cm": 0.36,
        "windspeed_mean": 4.938
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
        "temperature_mean": 9.44,
        "temperature_min": 6.901,
        "temperature_max": 13.1,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.872,
        "soiltemperature_0to10cm_mean": 10.209,
        "soilmoisture_0to10cm": 0.354,
        "windspeed_mean": 3.186
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
        "temperature_mean": 8.276,
        "temperature_min": 4.763,
        "temperature_max": 12.583,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.817,
        "soiltemperature_0to10cm_mean": 9.117,
        "soilmoisture_0to10cm": 0.351,
        "windspeed_mean": 3.122
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
        "temperature_mean": 8.585,
        "temperature_min": 4.224,
        "temperature_max": 13.402,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.463,
        "soiltemperature_0to10cm_mean": 9.381,
        "soilmoisture_0to10cm": 0.348,
        "windspeed_mean": 1.855
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
        "temperature_mean": 10.451,
        "temperature_min": 5.505,
        "temperature_max": 16.172,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.535,
        "soiltemperature_0to10cm_mean": 10.456,
        "soilmoisture_0to10cm": 0.346,
        "windspeed_mean": 0.756
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
        "temperature_mean": 10.559,
        "temperature_min": 9.57,
        "temperature_max": 11.545,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.993,
        "soiltemperature_0to10cm_mean": 10.853,
        "soilmoisture_0to10cm": 0.365,
        "windspeed_mean": 1.903
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
        "temperature_mean": 10.24,
        "temperature_min": 8.059,
        "temperature_max": 13.324,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.592,
        "soiltemperature_0to10cm_mean": 10.657,
        "soilmoisture_0to10cm": 0.358,
        "windspeed_mean": 3.028
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
        "temperature_mean": 10.278,
        "temperature_min": 7.349,
        "temperature_max": 12.812,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.91,
        "soiltemperature_0to10cm_mean": 10.497,
        "soilmoisture_0to10cm": 0.357,
        "windspeed_mean": 2.721
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
        "temperature_mean": 10.979,
        "temperature_min": 10.397,
        "temperature_max": 11.982,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 1.0,
        "soiltemperature_0to10cm_mean": 11.304,
        "soilmoisture_0to10cm": 0.36,
        "windspeed_mean": 2.058
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
        "temperature_mean": 12.363,
        "temperature_min": 10.35,
        "temperature_max": 17.35,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.707,
        "soiltemperature_0to10cm_mean": 12.127,
        "soilmoisture_0to10cm": 0.359,
        "windspeed_mean": 0.376
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
        "temperature_mean": 11.733,
        "temperature_min": 8.634,
        "temperature_max": 16.055,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.181,
        "soiltemperature_0to10cm_mean": 11.819,
        "soilmoisture_0to10cm": 0.353,
        "windspeed_mean": 0.871
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
  "polygon_wkt": "POLYGON ((15.76367444 49.08623629, 15.76361464 49.08624949, 15.76356244 49.08627994, 15.76350937 49.08633005, 15.76348678 49.08638738, 15.76350515 49.08650964, 15.76353187 49.08667163, 15.76351396 49.08677227, 15.76346855 49.08686775, 15.7632723 49.08712839, 15.76291169 49.08765889, 15.76282477 49.08784451, 15.76280593 49.08797406, 15.7628016 49.08801544, 15.76278129 49.08804099, 15.76272668 49.08804348, 15.76246612 49.08795867, 15.7623597 49.08791983, 15.76209019 49.08782753, 15.76173797 49.08772197, 15.76153148 49.08765889, 15.76137241 49.08760905, 15.76131228 49.08758283, 15.76127279 49.0875279, 15.76126515 49.08747362, 15.76129814 49.08742062, 15.7615046 49.08718715, 15.76162805 49.08705402, 15.76171382 49.08693691, 15.76170745 49.08688723, 15.76129379 49.0867225, 15.76088197 49.08656367, 15.76082287 49.08658171, 15.76077812 49.0866001, 15.7606088 49.08679289, 15.76040767 49.0870081, 15.7603446 49.08700986, 15.76027807 49.08699552, 15.75992887 49.08684543, 15.75959079 49.0867223, 15.75954114 49.08673065, 15.75949824 49.08676899, 15.75951684 49.08701966, 15.75957257 49.08735302, 15.75965366 49.08757755, 15.75969262 49.08778072, 15.75975691 49.08807227, 15.75974025 49.08826549, 15.7597058 49.08839116, 15.75968839 49.08844891, 15.75966583 49.08861086, 15.75968492 49.08877154, 15.75978114 49.08904122, 15.75980775 49.0891375, 15.75995278 49.08950752, 15.76037594 49.09031972, 15.76107 49.09170672, 15.7615325 49.09260504, 15.76173343 49.09298, 15.76197745 49.09340725, 15.76215205 49.09373916, 15.76233547 49.09422321, 15.76246844 49.09433332, 15.76243428 49.09449325, 15.76245913 49.09461055, 15.76247747 49.09469665, 15.76250669 49.09477003, 15.76262264 49.09507119, 15.76262641 49.0950807, 15.76282387 49.09505238, 15.76361218 49.09487797, 15.76377596 49.09482487, 15.76384607 49.0947773, 15.76386487 49.09476686, 15.76388647 49.09475909, 15.76483138 49.09449569, 15.76483539 49.09449463, 15.76524835 49.0943906, 15.76526179 49.09438778, 15.76547696 49.09435144, 15.76584543 49.09426968, 15.76634762 49.09412655, 15.76691947 49.09396198, 15.76692624 49.09396018, 15.76709518 49.09391921, 15.76719433 49.09389516, 15.76746979 49.09382836, 15.76748422 49.0938255, 15.76766319 49.09379781, 15.76768796 49.09379569, 15.76771288 49.09379689, 15.76773586 49.09379956, 15.76785736 49.09381297, 15.76777679 49.09363796, 15.76748303 49.0931103, 15.76725575 49.09269471, 15.76705905 49.09233567, 15.76683087 49.09192097, 15.76656301 49.09143559, 15.76636154 49.09107474, 15.76610346 49.09060785, 15.76582147 49.09009595, 15.7655453 49.08959218, 15.76530891 49.08915862, 15.7650708 49.08873452, 15.7648577 49.08834543, 15.76464614 49.08795599, 15.76417337 49.08710096, 15.76389002 49.0865977, 15.76385755 49.08655561, 15.76377751 49.08641396, 15.76371948 49.08633408, 15.76369721 49.08628573, 15.76367444 49.08623629))"
};
