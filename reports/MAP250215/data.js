// Field data for MAP250215 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAP250215",
  "metadata": {
    "field_area_ha": 4.818,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lhánice"
    },
    "terrain": {
      "variability": 5.778,
      "mean_elevation": 392.45,
      "min_elevation": 389.641,
      "max_elevation": 395.418
    },
    "soil": {
      "bulk_density kg/dm³": 1.327,
      "cation_exchange_capacity cmol(c)/kg": 21.159,
      "clay_particles g/100g (%)": 24.337,
      "sand particles g/100g (%)": 19.54,
      "silt particles g/100g (%)": 56.124,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2024-12-29": {
      "min": 0.09,
      "max": 0.249,
      "median": 0.156,
      "mean": 0.156,
      "sd": 0.019
    },
    "2025-01-10": {
      "min": 0.089,
      "max": 0.246,
      "median": 0.15,
      "mean": 0.149,
      "sd": 0.018
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 4.312,
      "area_percentage": 0.894
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.511,
        "area_percentage": 0.106
      },
      "very_low_vegetation": {
        "area_ha": 4.312,
        "area_percentage": 0.894
      },
      "low_vegetation": {
        "area_ha": 0.0,
        "area_percentage": 0.0
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
    "evi_median": 0.219,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.16,
          "percentage": 3.23
        },
        "EVI_statistics": {
          "mean": 0.176,
          "median": 0.177,
          "min": 0.147,
          "max": 0.186
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.89,
          "percentage": 18.36
        },
        "EVI_statistics": {
          "mean": 0.2,
          "median": 0.202,
          "min": 0.186,
          "max": 0.208
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 2.83,
          "percentage": 58.57
        },
        "EVI_statistics": {
          "mean": 0.219,
          "median": 0.219,
          "min": 0.208,
          "max": 0.23
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.94,
          "percentage": 19.39
        },
        "EVI_statistics": {
          "mean": 0.236,
          "median": 0.235,
          "min": 0.23,
          "max": 0.251
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.02,
          "percentage": 0.45
        },
        "EVI_statistics": {
          "mean": 0.256,
          "median": 0.256,
          "min": 0.252,
          "max": 0.264
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.43,
            "area_percentage": 9.21,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 1.02,
            "area_percentage": 21.84,
            "zone_number": 2
          },
          "similar": {
            "ha": 1.38,
            "area_percentage": 29.55,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.9,
            "area_percentage": 19.27,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.94,
            "area_percentage": 20.13,
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
      "old_value": 0.15,
      "new_value": 0.219,
      "difference": 0.068
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
          "ha": 3.38,
          "percentage": 70.14,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 1.44,
          "percentage": 29.86,
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
          "ha": 0.7,
          "percentage": 14.57,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.75,
          "percentage": 15.56,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 1.96,
          "percentage": 40.65,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.67,
          "percentage": 13.97,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.73,
          "percentage": 15.26,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.233309471681036 49.11273931653465)",
          "new_value": 0.224,
          "old_value": 0.131,
          "value_difference": 0.093,
          "area_ha": 0.071,
          "category": "major_growth",
          "location": "SW",
          "id": 1
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 399.496,
      "historical_average": 437.987
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
          "temperature_mean": 0.049,
          "temperature_min": -3.305,
          "temperature_max": 3.686,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.526,
          "soiltemperature_0to10cm_mean": 0.003,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 3.001
        },
        {
          "time": "2025-02-12 00:00:00",
          "temperature_mean": -1.223,
          "temperature_min": -2.145,
          "temperature_max": -0.043,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.98,
          "soiltemperature_0to10cm_mean": 0.139,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 3.731
        },
        {
          "time": "2025-02-13 00:00:00",
          "temperature_mean": -0.957,
          "temperature_min": -2.01,
          "temperature_max": 0.444,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.999,
          "soiltemperature_0to10cm_mean": -0.009,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 2.095
        },
        {
          "time": "2025-02-14 00:00:00",
          "temperature_mean": -2.025,
          "temperature_min": -5.411,
          "temperature_max": 0.141,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.828,
          "soiltemperature_0to10cm_mean": -0.064,
          "soilmoisture_0to10cm": 0.346,
          "windspeed_mean": 3.26
        },
        {
          "time": "2025-02-15 00:00:00",
          "temperature_mean": -4.093,
          "temperature_min": -7.969,
          "temperature_max": -1.067,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.519,
          "soiltemperature_0to10cm_mean": -0.466,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 1.432
        },
        {
          "time": "2025-02-16 00:00:00",
          "temperature_mean": -4.256,
          "temperature_min": -7.669,
          "temperature_max": -0.935,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.794,
          "soiltemperature_0to10cm_mean": -0.801,
          "soilmoisture_0to10cm": 0.343,
          "windspeed_mean": 1.814
        },
        {
          "time": "2025-02-17 00:00:00",
          "temperature_mean": -5.544,
          "temperature_min": -8.22,
          "temperature_max": -1.85,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.706,
          "soiltemperature_0to10cm_mean": -0.972,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 1.492
        },
        {
          "time": "2025-02-18 00:00:00",
          "temperature_mean": -5.485,
          "temperature_min": -9.338,
          "temperature_max": -1.027,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.511,
          "soiltemperature_0to10cm_mean": -1.074,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 1.84
        },
        {
          "time": "2025-02-19 00:00:00",
          "temperature_mean": -5.731,
          "temperature_min": -10.637,
          "temperature_max": -0.404,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": -1.43,
          "soilmoisture_0to10cm": 0.343,
          "windspeed_mean": 1.735
        },
        {
          "time": "2025-02-20 00:00:00",
          "temperature_mean": -5.711,
          "temperature_min": -11.607,
          "temperature_max": 0.947,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.144,
          "soiltemperature_0to10cm_mean": -1.349,
          "soilmoisture_0to10cm": 0.343,
          "windspeed_mean": 2.658
        },
        {
          "time": "2025-02-21 00:00:00",
          "temperature_mean": -2.594,
          "temperature_min": -8.148,
          "temperature_max": 2.139,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.375,
          "soiltemperature_0to10cm_mean": -1.117,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 2.732
        },
        {
          "time": "2025-02-22 00:00:00",
          "temperature_mean": -1.376,
          "temperature_min": -4.257,
          "temperature_max": 2.925,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.011,
          "soiltemperature_0to10cm_mean": -0.784,
          "soilmoisture_0to10cm": 0.341,
          "windspeed_mean": 3.448
        },
        {
          "time": "2025-02-23 00:00:00",
          "temperature_mean": -0.676,
          "temperature_min": -4.866,
          "temperature_max": 2.505,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.844,
          "soiltemperature_0to10cm_mean": -0.773,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 0.496
        },
        {
          "time": "2025-02-24 00:00:00",
          "temperature_mean": 3.598,
          "temperature_min": -1.464,
          "temperature_max": 10.923,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.223,
          "soiltemperature_0to10cm_mean": -0.113,
          "soilmoisture_0to10cm": 0.361,
          "windspeed_mean": 0.462
        },
        {
          "time": "2025-02-25 00:00:00",
          "temperature_mean": 2.046,
          "temperature_min": -0.982,
          "temperature_max": 4.007,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.978,
          "soiltemperature_0to10cm_mean": 0.255,
          "soilmoisture_0to10cm": 0.369,
          "windspeed_mean": 2.253
        },
        {
          "time": "2025-02-26 00:00:00",
          "temperature_mean": 4.554,
          "temperature_min": 1.446,
          "temperature_max": 8.451,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.995,
          "soiltemperature_0to10cm_mean": 1.987,
          "soilmoisture_0to10cm": 0.379,
          "windspeed_mean": 0.88
        },
        {
          "time": "2025-02-27 00:00:00",
          "temperature_mean": 3.644,
          "temperature_min": -0.341,
          "temperature_max": 7.936,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.892,
          "soiltemperature_0to10cm_mean": 1.53,
          "soilmoisture_0to10cm": 0.372,
          "windspeed_mean": 1.05
        },
        {
          "time": "2025-02-28 00:00:00",
          "temperature_mean": 2.652,
          "temperature_min": -2.063,
          "temperature_max": 7.234,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.38,
          "soiltemperature_0to10cm_mean": 1.19,
          "soilmoisture_0to10cm": 0.367,
          "windspeed_mean": 2.481
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
      "date": "2025-04-15",
      "day_since": -61
    },
    "beginning_of_heading": {
      "date": "2025-05-29",
      "day_since": -105
    },
    "beginning_of_ripenes": {
      "date": "2025-07-12",
      "day_since": -149
    },
    "harvest": {
      "date": "2025-07-30",
      "day_since": -167
    }
  },
  "timing_of_field_operations": {
    "2025-02-11": {
      "weather_conditions": {
        "temperature_mean": 0.049,
        "temperature_min": -3.305,
        "temperature_max": 3.686,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.526,
        "soiltemperature_0to10cm_mean": 0.003,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 3.001
      }
    },
    "2025-02-12": {
      "weather_conditions": {
        "temperature_mean": -1.223,
        "temperature_min": -2.145,
        "temperature_max": -0.043,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.98,
        "soiltemperature_0to10cm_mean": 0.139,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 3.731
      }
    },
    "2025-02-13": {
      "weather_conditions": {
        "temperature_mean": -0.957,
        "temperature_min": -2.01,
        "temperature_max": 0.444,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.999,
        "soiltemperature_0to10cm_mean": -0.009,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 2.095
      }
    },
    "2025-02-14": {
      "weather_conditions": {
        "temperature_mean": -2.025,
        "temperature_min": -5.411,
        "temperature_max": 0.141,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.828,
        "soiltemperature_0to10cm_mean": -0.064,
        "soilmoisture_0to10cm": 0.346,
        "windspeed_mean": 3.26
      }
    },
    "2025-02-15": {
      "weather_conditions": {
        "temperature_mean": -4.093,
        "temperature_min": -7.969,
        "temperature_max": -1.067,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.519,
        "soiltemperature_0to10cm_mean": -0.466,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 1.432
      }
    },
    "2025-02-16": {
      "weather_conditions": {
        "temperature_mean": -4.256,
        "temperature_min": -7.669,
        "temperature_max": -0.935,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.794,
        "soiltemperature_0to10cm_mean": -0.801,
        "soilmoisture_0to10cm": 0.343,
        "windspeed_mean": 1.814
      }
    },
    "2025-02-17": {
      "weather_conditions": {
        "temperature_mean": -5.544,
        "temperature_min": -8.22,
        "temperature_max": -1.85,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.706,
        "soiltemperature_0to10cm_mean": -0.972,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 1.492
      }
    },
    "2025-02-18": {
      "weather_conditions": {
        "temperature_mean": -5.485,
        "temperature_min": -9.338,
        "temperature_max": -1.027,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.511,
        "soiltemperature_0to10cm_mean": -1.074,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 1.84
      }
    },
    "2025-02-19": {
      "weather_conditions": {
        "temperature_mean": -5.731,
        "temperature_min": -10.637,
        "temperature_max": -0.404,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": -1.43,
        "soilmoisture_0to10cm": 0.343,
        "windspeed_mean": 1.735
      }
    },
    "2025-02-20": {
      "weather_conditions": {
        "temperature_mean": -5.711,
        "temperature_min": -11.607,
        "temperature_max": 0.947,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.144,
        "soiltemperature_0to10cm_mean": -1.349,
        "soilmoisture_0to10cm": 0.343,
        "windspeed_mean": 2.658
      }
    },
    "2025-02-21": {
      "weather_conditions": {
        "temperature_mean": -2.594,
        "temperature_min": -8.148,
        "temperature_max": 2.139,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.375,
        "soiltemperature_0to10cm_mean": -1.117,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 2.732
      }
    },
    "2025-02-22": {
      "weather_conditions": {
        "temperature_mean": -1.376,
        "temperature_min": -4.257,
        "temperature_max": 2.925,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.011,
        "soiltemperature_0to10cm_mean": -0.784,
        "soilmoisture_0to10cm": 0.341,
        "windspeed_mean": 3.448
      }
    },
    "2025-02-23": {
      "weather_conditions": {
        "temperature_mean": -0.676,
        "temperature_min": -4.866,
        "temperature_max": 2.505,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.844,
        "soiltemperature_0to10cm_mean": -0.773,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 0.496
      }
    },
    "2025-02-24": {
      "weather_conditions": {
        "temperature_mean": 3.598,
        "temperature_min": -1.464,
        "temperature_max": 10.923,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.223,
        "soiltemperature_0to10cm_mean": -0.113,
        "soilmoisture_0to10cm": 0.361,
        "windspeed_mean": 0.462
      }
    },
    "2025-02-25": {
      "weather_conditions": {
        "temperature_mean": 2.046,
        "temperature_min": -0.982,
        "temperature_max": 4.007,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.978,
        "soiltemperature_0to10cm_mean": 0.255,
        "soilmoisture_0to10cm": 0.369,
        "windspeed_mean": 2.253
      }
    },
    "2025-02-26": {
      "weather_conditions": {
        "temperature_mean": 4.554,
        "temperature_min": 1.446,
        "temperature_max": 8.451,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.995,
        "soiltemperature_0to10cm_mean": 1.987,
        "soilmoisture_0to10cm": 0.379,
        "windspeed_mean": 0.88
      }
    },
    "2025-02-27": {
      "weather_conditions": {
        "temperature_mean": 3.644,
        "temperature_min": -0.341,
        "temperature_max": 7.936,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.892,
        "soiltemperature_0to10cm_mean": 1.53,
        "soilmoisture_0to10cm": 0.372,
        "windspeed_mean": 1.05
      }
    },
    "2025-02-28": {
      "weather_conditions": {
        "temperature_mean": 2.652,
        "temperature_min": -2.063,
        "temperature_max": 7.234,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.38,
        "soiltemperature_0to10cm_mean": 1.19,
        "soilmoisture_0to10cm": 0.367,
        "windspeed_mean": 2.481
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
  "polygon_wkt": "POLYGON ((16.2350599 49.11482723, 16.23539448 49.11470093, 16.23699407 49.11409705, 16.23606225 49.11345609, 16.23417243 49.11215611, 16.23415059 49.11214087, 16.23332578 49.11246041, 16.23251052 49.11277029, 16.23216454 49.11289644, 16.23218024 49.11290799, 16.23392629 49.11407172, 16.2350599 49.11482723))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
