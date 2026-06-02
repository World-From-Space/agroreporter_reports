// Field data for MAN250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAN250615",
  "metadata": {
    "field_area_ha": 17.202,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Mohelno"
    },
    "terrain": {
      "variability": 27.3,
      "mean_elevation": 409.133,
      "min_elevation": 396.571,
      "max_elevation": 423.871
    },
    "soil": {
      "bulk_density kg/dm³": 1.33,
      "cation_exchange_capacity cmol(c)/kg": 21.467,
      "clay_particles g/100g (%)": 21.661,
      "sand particles g/100g (%)": 21.001,
      "silt particles g/100g (%)": 57.338,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-04-29": {
      "min": 0.423,
      "max": 0.79,
      "median": 0.707,
      "mean": 0.701,
      "sd": 0.038
    },
    "2025-05-09": {
      "min": 0.509,
      "max": 0.855,
      "median": 0.75,
      "mean": 0.739,
      "sd": 0.046
    },
    "2025-05-14": {
      "min": 0.416,
      "max": 0.761,
      "median": 0.671,
      "mean": 0.656,
      "sd": 0.052
    },
    "2025-06-09": {
      "min": 0.377,
      "max": 0.763,
      "median": 0.637,
      "mean": 0.619,
      "sd": 0.059
    },
    "2025-06-12": {
      "min": 0.338,
      "max": 0.784,
      "median": 0.677,
      "mean": 0.656,
      "sd": 0.068
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 17.495,
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
        "area_ha": 0.006,
        "area_percentage": 0.0
      },
      "medium vegetation": {
        "area_ha": 7.155,
        "area_percentage": 0.409
      },
      "high_vegetation": {
        "area_ha": 10.334,
        "area_percentage": 0.591
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
    "evi_median": 0.671,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 3.13,
          "percentage": 17.89
        },
        "EVI_statistics": {
          "mean": 0.532,
          "median": 0.541,
          "min": 0.334,
          "max": 0.57
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.34,
          "percentage": 19.07
        },
        "EVI_statistics": {
          "mean": 0.603,
          "median": 0.602,
          "min": 0.57,
          "max": 0.638
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 6.54,
          "percentage": 37.36
        },
        "EVI_statistics": {
          "mean": 0.678,
          "median": 0.681,
          "min": 0.638,
          "max": 0.705
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.49,
          "percentage": 25.64
        },
        "EVI_statistics": {
          "mean": 0.723,
          "median": 0.721,
          "min": 0.705,
          "max": 0.772
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.01,
          "percentage": 0.04
        },
        "EVI_statistics": {
          "mean": 0.775,
          "median": 0.773,
          "min": 0.772,
          "max": 0.784
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 1.26,
            "area_percentage": 7.61,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 3.68,
            "area_percentage": 22.24,
            "zone_number": 2
          },
          "similar": {
            "ha": 8.0,
            "area_percentage": 48.34,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 2.83,
            "area_percentage": 17.1,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.78,
            "area_percentage": 4.71,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-06-15",
      "reference_image_date": "2025-05-14",
      "change_period": 32
    },
    "median_EVI_change": {
      "old_value": 0.671,
      "new_value": 0.671,
      "difference": -0.004
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
          "ha": 0.61,
          "percentage": 3.48,
          "zone_number": 2
        },
        "no_change": {
          "ha": 16.84,
          "percentage": 96.25,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.05,
          "percentage": 0.27,
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
          "ha": 1.0,
          "percentage": 5.71,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 2.49,
          "percentage": 14.22,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 10.55,
          "percentage": 60.29,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.52,
          "percentage": 14.4,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.94,
          "percentage": 5.39,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
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
      "date": "2024-10-28",
      "day_since": 227
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-21",
      "day_since": 52
    },
    "beginning_of_heading": {
      "date": "2025-05-28",
      "day_since": 15
    },
    "beginning_of_ripenes": {
      "date": "2025-07-02",
      "day_since": -20
    },
    "harvest": {
      "date": "2025-07-20",
      "day_since": -38
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
      },
      "late_fungicide": {
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
  "polygon_wkt": "POLYGON ((16.17823519 49.12326941, 16.17825865 49.12326568, 16.17830052 49.12325374, 16.178356 49.1232448, 16.17841775 49.12324231, 16.18187852 49.12277889, 16.18188136 49.12277854, 16.18271821 49.12268644, 16.18356823 49.12257459, 16.18356836 49.12257457, 16.18485972 49.12240606, 16.18524052 49.12235473, 16.18524141 49.12235461, 16.18568372 49.12229833, 16.18635542 49.12220814, 16.1864609 49.12219349, 16.18648907 49.12218977, 16.18655741 49.12218859, 16.18656421 49.12219073, 16.18655354 49.12215477, 16.18644325 49.12183683, 16.18620989 49.12099287, 16.18609685 49.12066015, 16.18594414 49.12015458, 16.18581567 49.11980241, 16.1857933 49.1197628, 16.18575485 49.11973838, 16.18557318 49.11971619, 16.18552238 49.11971563, 16.18533905 49.11973169, 16.18402879 49.11991002, 16.18255971 49.12009243, 16.18189079 49.12019093, 16.18121842 49.12028118, 16.18046676 49.12037987, 16.18003682 49.12044673, 16.17977425 49.12050214, 16.1796682 49.12052455, 16.17948548 49.12056836, 16.17907655 49.12066047, 16.17766751 49.12104861, 16.17761415 49.12107826, 16.17758631 49.12109853, 16.17757768 49.12112024, 16.17759054 49.12117228, 16.17765598 49.12140353, 16.17783234 49.12190989, 16.17791959 49.12206665, 16.1779669 49.12222314, 16.17802284 49.12241739, 16.17810085 49.12271484, 16.17813337 49.12282705, 16.17822363 49.1232018, 16.17823519 49.12326941))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
