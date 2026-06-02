// Field data for MAT250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAT250615",
  "metadata": {
    "field_area_ha": 4.354,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lhánice"
    },
    "terrain": {
      "variability": 11.665,
      "mean_elevation": 394.184,
      "min_elevation": 387.784,
      "max_elevation": 399.449
    },
    "soil": {
      "bulk_density kg/dm³": 1.33,
      "cation_exchange_capacity cmol(c)/kg": 20.795,
      "clay_particles g/100g (%)": 24.539,
      "sand particles g/100g (%)": 24.692,
      "silt particles g/100g (%)": 50.71,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-04-29": {
      "min": 0.469,
      "max": 0.737,
      "median": 0.628,
      "mean": 0.62,
      "sd": 0.046
    },
    "2025-05-14": {
      "min": 0.509,
      "max": 0.727,
      "median": 0.627,
      "mean": 0.622,
      "sd": 0.034
    },
    "2025-05-15": {
      "min": 0.536,
      "max": 0.797,
      "median": 0.7,
      "mean": 0.697,
      "sd": 0.037
    },
    "2025-05-25": {
      "min": 0.551,
      "max": 0.748,
      "median": 0.679,
      "mean": 0.674,
      "sd": 0.029
    },
    "2025-06-12": {
      "min": 0.549,
      "max": 0.726,
      "median": 0.644,
      "mean": 0.642,
      "sd": 0.029
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 4.346,
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
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "medium vegetation": {
        "area_ha": 2.331,
        "area_percentage": 0.536
      },
      "high_vegetation": {
        "area_ha": 2.015,
        "area_percentage": 0.464
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
    "evi_median": 0.647,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.11,
          "percentage": 2.63
        },
        "EVI_statistics": {
          "mean": 0.529,
          "median": 0.532,
          "min": 0.479,
          "max": 0.549
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.67,
          "percentage": 15.43
        },
        "EVI_statistics": {
          "mean": 0.594,
          "median": 0.6,
          "min": 0.55,
          "max": 0.615
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 3.1,
          "percentage": 71.38
        },
        "EVI_statistics": {
          "mean": 0.649,
          "median": 0.65,
          "min": 0.615,
          "max": 0.679
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.45,
          "percentage": 10.4
        },
        "EVI_statistics": {
          "mean": 0.694,
          "median": 0.689,
          "min": 0.68,
          "max": 0.744
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.01,
          "percentage": 0.17
        },
        "EVI_statistics": {
          "mean": 0.751,
          "median": 0.75,
          "min": 0.745,
          "max": 0.761
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.3,
            "area_percentage": 7.28,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.71,
            "area_percentage": 17.23,
            "zone_number": 2
          },
          "similar": {
            "ha": 2.0,
            "area_percentage": 48.54,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.85,
            "area_percentage": 20.63,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.26,
            "area_percentage": 6.31,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-06-15",
      "reference_image_date": "2025-05-25",
      "change_period": 21
    },
    "median_EVI_change": {
      "old_value": 0.679,
      "new_value": 0.647,
      "difference": -0.028
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.11,
          "percentage": 2.42,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 0.46,
          "percentage": 10.58,
          "zone_number": 2
        },
        "no_change": {
          "ha": 3.75,
          "percentage": 86.33,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.03,
          "percentage": 0.66,
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
          "geometry": "POINT (16.208540837222223 49.10761436691358)",
          "new_value": 0.53,
          "old_value": 0.699,
          "value_difference": -0.169,
          "area_ha": 0.094,
          "category": "major_decline",
          "location": "NE",
          "id": 1
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 1.01,
          "percentage": 23.28,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.47,
          "percentage": 10.77,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 1.16,
          "percentage": 26.67,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.64,
          "percentage": 14.72,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.07,
          "percentage": 24.56,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.208540837222223 49.10734896197531)",
          "new_value": 0.597,
          "old_value": 0.701,
          "value_difference": -0.104,
          "area_ha": 0.747,
          "category": "major_decline",
          "location": "E",
          "id": 1
        },
        {
          "geometry": "POINT (16.205567909444444 49.10729588098766)",
          "new_value": 0.633,
          "old_value": 0.699,
          "value_difference": -0.066,
          "area_ha": 0.056,
          "category": "major_decline",
          "location": "W",
          "id": 2
        },
        {
          "geometry": "POINT (16.205484165 49.10697739506173)",
          "new_value": 0.632,
          "old_value": 0.699,
          "value_difference": -0.067,
          "area_ha": 0.047,
          "category": "major_decline",
          "location": "W",
          "id": 3
        },
        {
          "geometry": "POINT (16.207284670555556 49.10740204296297)",
          "new_value": 0.671,
          "old_value": 0.65,
          "value_difference": 0.021,
          "area_ha": 0.76,
          "category": "major_growth",
          "location": "C",
          "id": 4
        },
        {
          "geometry": "POINT (16.205944759444446 49.10703047604938)",
          "new_value": 0.659,
          "old_value": 0.65,
          "value_difference": 0.009,
          "area_ha": 0.049,
          "category": "major_growth",
          "location": "W",
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
      "date": "2025-04-14",
      "day_since": 59
    },
    "beginning_of_heading": {
      "date": "2025-05-20",
      "day_since": 23
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.67
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.67
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
  "polygon_wkt": "POLYGON ((16.20529668 49.10671696, 16.20583505 49.10830334, 16.20586979 49.10831769, 16.20611876 49.10827461, 16.20714527 49.1081052, 16.2076003 49.10804154, 16.20838904 49.1079182, 16.20861085 49.10766847, 16.20865076 49.10758908, 16.20868739 49.10734365, 16.20857221 49.1064085, 16.20856082 49.1062909, 16.20854757 49.10623199, 16.20852155 49.10618235, 16.20846973 49.10616791, 16.2084134 49.10616842, 16.20554861 49.10658975, 16.20540634 49.10660893, 16.20535538 49.10662224, 16.2053164 49.10664757, 16.20529574 49.10668096, 16.20529668 49.10671696))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
