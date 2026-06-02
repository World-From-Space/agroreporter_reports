// Field data for LAK250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAK250315",
  "metadata": {
    "field_area_ha": 28.968,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 23.705,
      "mean_elevation": 535.356,
      "min_elevation": 521.673,
      "max_elevation": 545.379
    },
    "soil": {
      "bulk_density kg/dm³": 1.345,
      "cation_exchange_capacity cmol(c)/kg": 18.784,
      "clay_particles g/100g (%)": 22.068,
      "sand particles g/100g (%)": 35.648,
      "silt particles g/100g (%)": 42.336,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-01-10": {
      "min": 0.121,
      "max": 0.469,
      "median": 0.28,
      "mean": 0.276,
      "sd": 0.028
    },
    "2025-02-01": {
      "min": 0.174,
      "max": 0.478,
      "median": 0.326,
      "mean": 0.324,
      "sd": 0.026
    },
    "2025-02-05": {
      "min": 0.219,
      "max": 0.444,
      "median": 0.333,
      "mean": 0.33,
      "sd": 0.022
    },
    "2025-02-11": {
      "min": 0.155,
      "max": 0.416,
      "median": 0.3,
      "mean": 0.296,
      "sd": 0.025
    },
    "2025-02-24": {
      "min": 0.141,
      "max": 0.389,
      "median": 0.279,
      "mean": 0.275,
      "sd": 0.026
    },
    "2025-03-07": {
      "min": 0.227,
      "max": 0.411,
      "median": 0.344,
      "mean": 0.343,
      "sd": 0.023
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 29.128,
      "area_percentage": 1.0
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.066,
        "area_percentage": 0.002
      },
      "low_vegetation": {
        "area_ha": 18.019,
        "area_percentage": 0.619
      },
      "medium vegetation": {
        "area_ha": 11.043,
        "area_percentage": 0.379
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
    "evi_median": 0.393,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.83,
          "percentage": 2.86
        },
        "EVI_statistics": {
          "mean": 0.319,
          "median": 0.322,
          "min": 0.274,
          "max": 0.334
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 4.28,
          "percentage": 14.7
        },
        "EVI_statistics": {
          "mean": 0.361,
          "median": 0.365,
          "min": 0.334,
          "max": 0.373
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 18.42,
          "percentage": 63.23
        },
        "EVI_statistics": {
          "mean": 0.393,
          "median": 0.393,
          "min": 0.373,
          "max": 0.413
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 5.47,
          "percentage": 18.79
        },
        "EVI_statistics": {
          "mean": 0.425,
          "median": 0.422,
          "min": 0.413,
          "max": 0.452
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.12,
          "percentage": 0.42
        },
        "EVI_statistics": {
          "mean": 0.46,
          "median": 0.458,
          "min": 0.452,
          "max": 0.488
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 1.95,
            "area_percentage": 6.9,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 6.56,
            "area_percentage": 23.22,
            "zone_number": 2
          },
          "similar": {
            "ha": 7.73,
            "area_percentage": 27.36,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 6.4,
            "area_percentage": 22.65,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 5.61,
            "area_percentage": 19.86,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-03-15",
      "reference_image_date": "2025-02-24",
      "change_period": 19
    },
    "median_EVI_change": {
      "old_value": 0.279,
      "new_value": 0.393,
      "difference": 0.118
    },
    "growth trend": "minor_growth",
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
          "ha": 0.58,
          "percentage": 2.0,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 26.79,
          "percentage": 91.99,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 1.75,
          "percentage": 6.01,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.76898988658203 49.08131038875635)",
          "new_value": 0.367,
          "old_value": 0.201,
          "value_difference": 0.166,
          "area_ha": 0.538,
          "category": "major_growth",
          "location": "S",
          "id": 1
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 5.37,
          "percentage": 18.44,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.49,
          "percentage": 12.0,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 10.78,
          "percentage": 37.0,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.1,
          "percentage": 14.08,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 5.38,
          "percentage": 18.47,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.76965246845703 49.08461109880711)",
          "new_value": 0.381,
          "old_value": 0.292,
          "value_difference": 0.089,
          "area_ha": 1.137,
          "category": "major_decline",
          "location": "N",
          "id": 1
        },
        {
          "geometry": "POINT (15.77395925064453 49.08298736241117)",
          "new_value": 0.377,
          "old_value": 0.294,
          "value_difference": 0.083,
          "area_ha": 0.557,
          "category": "major_decline",
          "location": "E",
          "id": 2
        },
        {
          "geometry": "POINT (15.772882555097656 49.0825614643401)",
          "new_value": 0.381,
          "old_value": 0.292,
          "value_difference": 0.089,
          "area_ha": 0.978,
          "category": "major_decline",
          "location": "SE",
          "id": 3
        },
        {
          "geometry": "POINT (15.770646341269531 49.08221542215736)",
          "new_value": 0.41,
          "old_value": 0.268,
          "value_difference": 0.142,
          "area_ha": 0.611,
          "category": "major_growth",
          "location": "S",
          "id": 4
        },
        {
          "geometry": "POINT (15.76700214095703 49.08136362601523)",
          "new_value": 0.404,
          "old_value": 0.256,
          "value_difference": 0.148,
          "area_ha": 0.496,
          "category": "major_growth",
          "location": "SW",
          "id": 5
        },
        {
          "geometry": "POINT (15.772385618691406 49.08139024464467)",
          "new_value": 0.412,
          "old_value": 0.27,
          "value_difference": 0.142,
          "area_ha": 0.298,
          "category": "major_growth",
          "location": "SE",
          "id": 6
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 595.922,
      "historical_average": 632.139
    },
    "accumulated_precipitation_since_seeding": {
      "current": 143.921,
      "historical_mean": 228.395
    },
    "precipitation_summary": {
      "last_3_days": 12.994,
      "last_7_days": 16.782,
      "last_14_days": 17.159,
      "last_30_days": 25.047
    },
    "standardized_precipitation_index": {
      "1_month": -0.977,
      "3_month": -1.605,
      "6_month": -1.47
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-03-11 00:00:00",
          "temperature_mean": 8.006,
          "temperature_min": 3.462,
          "temperature_max": 12.704,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.693,
          "soiltemperature_0to10cm_mean": 6.705,
          "soilmoisture_0to10cm": 0.361,
          "windspeed_mean": 2.104
        },
        {
          "time": "2025-03-12 00:00:00",
          "temperature_mean": 6.901,
          "temperature_min": 0.353,
          "temperature_max": 12.235,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.853,
          "soiltemperature_0to10cm_mean": 5.026,
          "soilmoisture_0to10cm": 0.351,
          "windspeed_mean": 1.12
        },
        {
          "time": "2025-03-13 00:00:00",
          "temperature_mean": 3.585,
          "temperature_min": -0.354,
          "temperature_max": 5.779,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.862,
          "soiltemperature_0to10cm_mean": 3.863,
          "soilmoisture_0to10cm": 0.377,
          "windspeed_mean": 2.084
        },
        {
          "time": "2025-03-14 00:00:00",
          "temperature_mean": 1.863,
          "temperature_min": -1.189,
          "temperature_max": 4.948,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.995,
          "soiltemperature_0to10cm_mean": 2.284,
          "soilmoisture_0to10cm": 0.381,
          "windspeed_mean": 1.314
        },
        {
          "time": "2025-03-15 00:00:00",
          "temperature_mean": 1.777,
          "temperature_min": 0.217,
          "temperature_max": 4.099,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.995,
          "soiltemperature_0to10cm_mean": 2.262,
          "soilmoisture_0to10cm": 0.38,
          "windspeed_mean": 3.061
        },
        {
          "time": "2025-03-16 00:00:00",
          "temperature_mean": 2.68,
          "temperature_min": -0.586,
          "temperature_max": 7.912,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.627,
          "soiltemperature_0to10cm_mean": 3.104,
          "soilmoisture_0to10cm": 0.372,
          "windspeed_mean": 2.199
        },
        {
          "time": "2025-03-17 00:00:00",
          "temperature_mean": 0.097,
          "temperature_min": -3.911,
          "temperature_max": 3.263,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.392,
          "soiltemperature_0to10cm_mean": 1.35,
          "soilmoisture_0to10cm": 0.364,
          "windspeed_mean": 3.363
        },
        {
          "time": "2025-03-18 00:00:00",
          "temperature_mean": -0.936,
          "temperature_min": -4.419,
          "temperature_max": 3.619,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.019,
          "soiltemperature_0to10cm_mean": 0.272,
          "soilmoisture_0to10cm": 0.358,
          "windspeed_mean": 0.285
        },
        {
          "time": "2025-03-19 00:00:00",
          "temperature_mean": 0.503,
          "temperature_min": -4.751,
          "temperature_max": 6.84,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 0.06,
          "soilmoisture_0to10cm": 0.354,
          "windspeed_mean": 2.088
        },
        {
          "time": "2025-03-20 00:00:00",
          "temperature_mean": 2.116,
          "temperature_min": -4.468,
          "temperature_max": 9.068,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 0.72,
          "soilmoisture_0to10cm": 0.352,
          "windspeed_mean": 1.663
        },
        {
          "time": "2025-03-21 00:00:00",
          "temperature_mean": 5.03,
          "temperature_min": -1.169,
          "temperature_max": 11.604,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 1.749,
          "soilmoisture_0to10cm": 0.348,
          "windspeed_mean": 1.979
        },
        {
          "time": "2025-03-22 00:00:00",
          "temperature_mean": 6.688,
          "temperature_min": 2.021,
          "temperature_max": 11.953,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.453,
          "soiltemperature_0to10cm_mean": 4.322,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 3.67
        },
        {
          "time": "2025-03-23 00:00:00",
          "temperature_mean": 8.306,
          "temperature_min": 4.353,
          "temperature_max": 15.053,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.793,
          "soiltemperature_0to10cm_mean": 6.678,
          "soilmoisture_0to10cm": 0.354,
          "windspeed_mean": 1.462
        },
        {
          "time": "2025-03-24 00:00:00",
          "temperature_mean": 6.882,
          "temperature_min": 2.063,
          "temperature_max": 12.32,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.862,
          "soiltemperature_0to10cm_mean": 6.077,
          "soilmoisture_0to10cm": 0.379,
          "windspeed_mean": 1.394
        },
        {
          "time": "2025-03-25 00:00:00",
          "temperature_mean": 8.125,
          "temperature_min": 2.919,
          "temperature_max": 13.71,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.447,
          "soiltemperature_0to10cm_mean": 7.011,
          "soilmoisture_0to10cm": 0.386,
          "windspeed_mean": 0.275
        },
        {
          "time": "2025-03-26 00:00:00",
          "temperature_mean": 7.317,
          "temperature_min": 2.249,
          "temperature_max": 12.483,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.332,
          "soiltemperature_0to10cm_mean": 7.005,
          "soilmoisture_0to10cm": 0.379,
          "windspeed_mean": 2.16
        },
        {
          "time": "2025-03-27 00:00:00",
          "temperature_mean": 6.551,
          "temperature_min": 2.296,
          "temperature_max": 9.528,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.658,
          "soiltemperature_0to10cm_mean": 6.738,
          "soilmoisture_0to10cm": 0.366,
          "windspeed_mean": 2.752
        },
        {
          "time": "2025-03-28 00:00:00",
          "temperature_mean": 7.165,
          "temperature_min": 0.079,
          "temperature_max": 13.001,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.5,
          "soiltemperature_0to10cm_mean": 6.64,
          "soilmoisture_0to10cm": 0.357,
          "windspeed_mean": 1.821
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 167
    },
    "crop_emergence": {
      "date": "2024-10-13",
      "day_since": 152
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-16",
      "day_since": -33
    },
    "beginning_of_heading": {
      "date": "2025-06-01",
      "day_since": -79
    },
    "beginning_of_ripenes": {
      "date": "2025-07-16",
      "day_since": -124
    },
    "harvest": {
      "date": "2025-08-03",
      "day_since": -142
    }
  },
  "timing_of_field_operations": {
    "2025-03-11": {
      "weather_conditions": {
        "temperature_mean": 8.006,
        "temperature_min": 3.462,
        "temperature_max": 12.704,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.693,
        "soiltemperature_0to10cm_mean": 6.705,
        "soilmoisture_0to10cm": 0.361,
        "windspeed_mean": 2.104
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-12": {
      "weather_conditions": {
        "temperature_mean": 6.901,
        "temperature_min": 0.353,
        "temperature_max": 12.235,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.853,
        "soiltemperature_0to10cm_mean": 5.026,
        "soilmoisture_0to10cm": 0.351,
        "windspeed_mean": 1.12
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-13": {
      "weather_conditions": {
        "temperature_mean": 3.585,
        "temperature_min": -0.354,
        "temperature_max": 5.779,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.862,
        "soiltemperature_0to10cm_mean": 3.863,
        "soilmoisture_0to10cm": 0.377,
        "windspeed_mean": 2.084
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-03-14": {
      "weather_conditions": {
        "temperature_mean": 1.863,
        "temperature_min": -1.189,
        "temperature_max": 4.948,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.995,
        "soiltemperature_0to10cm_mean": 2.284,
        "soilmoisture_0to10cm": 0.381,
        "windspeed_mean": 1.314
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-15": {
      "weather_conditions": {
        "temperature_mean": 1.777,
        "temperature_min": 0.217,
        "temperature_max": 4.099,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.995,
        "soiltemperature_0to10cm_mean": 2.262,
        "soilmoisture_0to10cm": 0.38,
        "windspeed_mean": 3.061
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-16": {
      "weather_conditions": {
        "temperature_mean": 2.68,
        "temperature_min": -0.586,
        "temperature_max": 7.912,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.627,
        "soiltemperature_0to10cm_mean": 3.104,
        "soilmoisture_0to10cm": 0.372,
        "windspeed_mean": 2.199
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-17": {
      "weather_conditions": {
        "temperature_mean": 0.097,
        "temperature_min": -3.911,
        "temperature_max": 3.263,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.392,
        "soiltemperature_0to10cm_mean": 1.35,
        "soilmoisture_0to10cm": 0.364,
        "windspeed_mean": 3.363
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-18": {
      "weather_conditions": {
        "temperature_mean": -0.936,
        "temperature_min": -4.419,
        "temperature_max": 3.619,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.019,
        "soiltemperature_0to10cm_mean": 0.272,
        "soilmoisture_0to10cm": 0.358,
        "windspeed_mean": 0.285
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-19": {
      "weather_conditions": {
        "temperature_mean": 0.503,
        "temperature_min": -4.751,
        "temperature_max": 6.84,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 0.06,
        "soilmoisture_0to10cm": 0.354,
        "windspeed_mean": 2.088
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-20": {
      "weather_conditions": {
        "temperature_mean": 2.116,
        "temperature_min": -4.468,
        "temperature_max": 9.068,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 0.72,
        "soilmoisture_0to10cm": 0.352,
        "windspeed_mean": 1.663
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-21": {
      "weather_conditions": {
        "temperature_mean": 5.03,
        "temperature_min": -1.169,
        "temperature_max": 11.604,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 1.749,
        "soilmoisture_0to10cm": 0.348,
        "windspeed_mean": 1.979
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-22": {
      "weather_conditions": {
        "temperature_mean": 6.688,
        "temperature_min": 2.021,
        "temperature_max": 11.953,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.453,
        "soiltemperature_0to10cm_mean": 4.322,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 3.67
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-23": {
      "weather_conditions": {
        "temperature_mean": 8.306,
        "temperature_min": 4.353,
        "temperature_max": 15.053,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.793,
        "soiltemperature_0to10cm_mean": 6.678,
        "soilmoisture_0to10cm": 0.354,
        "windspeed_mean": 1.462
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-03-24": {
      "weather_conditions": {
        "temperature_mean": 6.882,
        "temperature_min": 2.063,
        "temperature_max": 12.32,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.862,
        "soiltemperature_0to10cm_mean": 6.077,
        "soilmoisture_0to10cm": 0.379,
        "windspeed_mean": 1.394
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-25": {
      "weather_conditions": {
        "temperature_mean": 8.125,
        "temperature_min": 2.919,
        "temperature_max": 13.71,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.447,
        "soiltemperature_0to10cm_mean": 7.011,
        "soilmoisture_0to10cm": 0.386,
        "windspeed_mean": 0.275
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-26": {
      "weather_conditions": {
        "temperature_mean": 7.317,
        "temperature_min": 2.249,
        "temperature_max": 12.483,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.332,
        "soiltemperature_0to10cm_mean": 7.005,
        "soilmoisture_0to10cm": 0.379,
        "windspeed_mean": 2.16
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-27": {
      "weather_conditions": {
        "temperature_mean": 6.551,
        "temperature_min": 2.296,
        "temperature_max": 9.528,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.658,
        "soiltemperature_0to10cm_mean": 6.738,
        "soilmoisture_0to10cm": 0.366,
        "windspeed_mean": 2.752
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-28": {
      "weather_conditions": {
        "temperature_mean": 7.165,
        "temperature_min": 0.079,
        "temperature_max": 13.001,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.5,
        "soiltemperature_0to10cm_mean": 6.64,
        "soilmoisture_0to10cm": 0.357,
        "windspeed_mean": 1.821
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
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
  "polygon_wkt": "POLYGON ((15.76386821 49.08255081, 15.76381587 49.08257608, 15.76380047 49.08258853, 15.76379347 49.08259973, 15.76379276 49.08260086, 15.76381565 49.08263516, 15.76398966 49.08279281, 15.76422007 49.08303458, 15.76479675 49.08367928, 15.7657325 49.08468828, 15.76576349 49.08471641, 15.76585734 49.08479315, 15.76595488 49.08486196, 15.76603604 49.08490447, 15.76628572 49.08500954, 15.768408 49.085707, 15.76877338 49.0858398, 15.76907173 49.08603238, 15.76918578 49.08614167, 15.76938553 49.08602162, 15.76957505 49.08589413, 15.77005153 49.08559076, 15.7705363 49.08527796, 15.7710271 49.08496204, 15.77156602 49.0846161, 15.77190119 49.08440371, 15.77243324 49.08405939, 15.77303434 49.08367232, 15.7736967 49.08324907, 15.77416908 49.08294391, 15.77427007 49.08286988, 15.77439407 49.0827794, 15.77432151 49.08274492, 15.77419604 49.08267028, 15.77412315 49.08259492, 15.77409509 49.08248517, 15.77408646 49.08220437, 15.7741164 49.08192566, 15.77414312 49.08164928, 15.77415466 49.08158033, 15.77418587 49.08139385, 15.77426586 49.08109523, 15.77426496 49.08107274, 15.77426448 49.08106062, 15.77424966 49.08103599, 15.77422989 49.08101766, 15.77420016 49.08100425, 15.77330108 49.08095906, 15.77212654 49.0808978, 15.77174909 49.08091408, 15.7706344 49.08097224, 15.76925491 49.08108237, 15.76794316 49.08116142, 15.76753152 49.08112913, 15.76709638 49.08105252, 15.76687511 49.08102558, 15.7665395 49.08100586, 15.76618651 49.08104106, 15.76588475 49.08108569, 15.76587408 49.08109068, 15.76579704 49.08112673, 15.76574722 49.08115996, 15.76566026 49.08123701, 15.76558382 49.08132641, 15.76551999 49.08142508, 15.76548511 49.0815527, 15.76544534 49.08163928, 15.76542666 49.08166178, 15.76514526 49.08182666, 15.76510687 49.08187607, 15.76509847 49.08192231, 15.76511821 49.08196386, 15.76527381 49.08212843, 15.765261 49.08214503, 15.76520221 49.08217541, 15.76517766 49.08218809, 15.76493831 49.08229068, 15.76487212 49.08232371, 15.76483651 49.08232092, 15.76475979 49.08227201, 15.76469511 49.08224249, 15.76464492 49.08223568, 15.76458899 49.08223632, 15.76452401 49.08225063, 15.76404091 49.08246865, 15.76386821 49.08255081))"
};
