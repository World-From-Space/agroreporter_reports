// Field data for MAP250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAP250615",
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
    "2025-04-20": {
      "min": 0.331,
      "max": 0.61,
      "median": 0.545,
      "mean": 0.531,
      "sd": 0.047
    },
    "2025-04-28": {
      "min": 0.326,
      "max": 0.662,
      "median": 0.588,
      "mean": 0.577,
      "sd": 0.045
    },
    "2025-05-03": {
      "min": 0.523,
      "max": 0.808,
      "median": 0.728,
      "mean": 0.718,
      "sd": 0.041
    },
    "2025-05-14": {
      "min": 0.414,
      "max": 0.727,
      "median": 0.647,
      "mean": 0.639,
      "sd": 0.038
    },
    "2025-05-21": {
      "min": 0.421,
      "max": 0.769,
      "median": 0.696,
      "mean": 0.687,
      "sd": 0.04
    },
    "2025-06-12": {
      "min": 0.482,
      "max": 0.756,
      "median": 0.664,
      "mean": 0.659,
      "sd": 0.031
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 4.823,
      "area_percentage": 1.0
    },
    "dominant_category": "high vegetation",
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
        "area_ha": 1.063,
        "area_percentage": 0.22
      },
      "high_vegetation": {
        "area_ha": 3.76,
        "area_percentage": 0.78
      },
      "very_high_vegetation": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      }
    }
  },
  "growth_variability": {
    "variability_category": "high",
    "number_of_zones": 4,
    "evi_median": 0.672,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.06,
          "percentage": 1.25
        },
        "EVI_statistics": {
          "mean": 0.543,
          "median": 0.542,
          "min": 0.506,
          "max": 0.568
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.61,
          "percentage": 12.65
        },
        "EVI_statistics": {
          "mean": 0.618,
          "median": 0.621,
          "min": 0.571,
          "max": 0.638
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 3.98,
          "percentage": 82.5
        },
        "EVI_statistics": {
          "mean": 0.674,
          "median": 0.675,
          "min": 0.638,
          "max": 0.705
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.17,
          "percentage": 3.6
        },
        "EVI_statistics": {
          "mean": 0.711,
          "median": 0.71,
          "min": 0.705,
          "max": 0.744
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.0,
          "percentage": 0.0
        },
        "EVI_statistics": {
          "mean": 0,
          "median": 0,
          "min": 0,
          "max": 0
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.04,
            "area_percentage": 0.86,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 1.05,
            "area_percentage": 22.48,
            "zone_number": 2
          },
          "similar": {
            "ha": 2.42,
            "area_percentage": 51.82,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.91,
            "area_percentage": 19.49,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.25,
            "area_percentage": 5.35,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-06-15",
      "reference_image_date": "2025-05-21",
      "change_period": 25
    },
    "median_EVI_change": {
      "old_value": 0.696,
      "new_value": 0.672,
      "difference": -0.024
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
          "ha": 0.16,
          "percentage": 3.23,
          "zone_number": 2
        },
        "no_change": {
          "ha": 4.59,
          "percentage": 95.17,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.06,
          "percentage": 1.25,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.02,
          "percentage": 0.35,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 0.91,
          "percentage": 18.94,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.68,
          "percentage": 14.09,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 1.69,
          "percentage": 35.04,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.6,
          "percentage": 12.47,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.94,
          "percentage": 19.46,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.235391165646554 49.11425538108911)",
          "new_value": 0.666,
          "old_value": 0.728,
          "value_difference": -0.062,
          "area_ha": 0.065,
          "category": "major_decline",
          "location": "N",
          "id": 1
        },
        {
          "geometry": "POINT (16.23634874487069 49.11414899059406)",
          "new_value": 0.661,
          "old_value": 0.718,
          "value_difference": -0.057,
          "area_ha": 0.053,
          "category": "major_decline",
          "location": "NE",
          "id": 2
        },
        {
          "geometry": "POINT (16.23285149900862 49.11289890227723)",
          "new_value": 0.64,
          "old_value": 0.703,
          "value_difference": -0.063,
          "area_ha": 0.178,
          "category": "major_decline",
          "location": "SW",
          "id": 3
        },
        {
          "geometry": "POINT (16.233476007198277 49.112686121287126)",
          "new_value": 0.638,
          "old_value": 0.713,
          "value_difference": -0.075,
          "area_ha": 0.15,
          "category": "major_decline",
          "location": "SW",
          "id": 4
        },
        {
          "geometry": "POINT (16.235516067284482 49.11324467138614)",
          "new_value": 0.689,
          "old_value": 0.662,
          "value_difference": 0.027,
          "area_ha": 0.433,
          "category": "major_growth",
          "location": "E",
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
      "date": "2025-04-13",
      "day_since": 60
    },
    "beginning_of_heading": {
      "date": "2025-05-18",
      "day_since": 25
    },
    "beginning_of_ripenes": {
      "date": "2025-06-24",
      "day_since": -12
    },
    "harvest": {
      "date": "2025-07-11",
      "day_since": -29
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
  "polygon_wkt": "POLYGON ((16.2350599 49.11482723, 16.23539448 49.11470093, 16.23699407 49.11409705, 16.23606225 49.11345609, 16.23417243 49.11215611, 16.23415059 49.11214087, 16.23332578 49.11246041, 16.23251052 49.11277029, 16.23216454 49.11289644, 16.23218024 49.11290799, 16.23392629 49.11407172, 16.2350599 49.11482723))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
