// Field data for LAL250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAL250615",
  "metadata": {
    "field_area_ha": 27.898,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 22.617,
      "mean_elevation": 548.196,
      "min_elevation": 533.245,
      "max_elevation": 555.863
    },
    "soil": {
      "bulk_density kg/dm³": 1.337,
      "cation_exchange_capacity cmol(c)/kg": 20.924,
      "clay_particles g/100g (%)": 22.869,
      "sand particles g/100g (%)": 38.655,
      "silt particles g/100g (%)": 38.476,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-04-20": {
      "min": 0.359,
      "max": 0.7,
      "median": 0.609,
      "mean": 0.603,
      "sd": 0.039
    },
    "2025-05-03": {
      "min": 0.431,
      "max": 0.764,
      "median": 0.663,
      "mean": 0.659,
      "sd": 0.029
    },
    "2025-05-14": {
      "min": 0.425,
      "max": 0.745,
      "median": 0.626,
      "mean": 0.62,
      "sd": 0.038
    },
    "2025-05-31": {
      "min": 0.41,
      "max": 0.788,
      "median": 0.642,
      "mean": 0.634,
      "sd": 0.042
    },
    "2025-06-09": {
      "min": 0.445,
      "max": 0.726,
      "median": 0.604,
      "mean": 0.6,
      "sd": 0.037
    },
    "2025-06-14": {
      "min": 0.418,
      "max": 0.735,
      "median": 0.594,
      "mean": 0.587,
      "sd": 0.039
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 27.436,
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
        "area_ha": 26.62,
        "area_percentage": 0.97
      },
      "high_vegetation": {
        "area_ha": 0.815,
        "area_percentage": 0.03
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
    "evi_median": 0.591,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.91,
          "percentage": 3.32
        },
        "EVI_statistics": {
          "mean": 0.485,
          "median": 0.49,
          "min": 0.409,
          "max": 0.502
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 6.08,
          "percentage": 22.18
        },
        "EVI_statistics": {
          "mean": 0.538,
          "median": 0.54,
          "min": 0.502,
          "max": 0.561
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 15.58,
          "percentage": 56.8
        },
        "EVI_statistics": {
          "mean": 0.593,
          "median": 0.594,
          "min": 0.561,
          "max": 0.62
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.76,
          "percentage": 17.35
        },
        "EVI_statistics": {
          "mean": 0.636,
          "median": 0.633,
          "min": 0.62,
          "max": 0.679
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.1,
          "percentage": 0.35
        },
        "EVI_statistics": {
          "mean": 0.691,
          "median": 0.689,
          "min": 0.679,
          "max": 0.718
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.76,
            "area_percentage": 2.79,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 6.98,
            "area_percentage": 25.59,
            "zone_number": 2
          },
          "similar": {
            "ha": 12.5,
            "area_percentage": 45.82,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 5.55,
            "area_percentage": 20.34,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.49,
            "area_percentage": 5.46,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-06-15",
      "reference_image_date": "2025-05-31",
      "change_period": 15
    },
    "median_EVI_change": {
      "old_value": 0.642,
      "new_value": 0.591,
      "difference": -0.049
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.03,
          "percentage": 0.1,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 2.62,
          "percentage": 9.55,
          "zone_number": 2
        },
        "no_change": {
          "ha": 24.74,
          "percentage": 90.18,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.02,
          "percentage": 0.08,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.03,
          "percentage": 0.09,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 1.55,
          "percentage": 5.63,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.85,
          "percentage": 14.05,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 16.69,
          "percentage": 60.84,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.84,
          "percentage": 13.98,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.51,
          "percentage": 5.5,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 1596.712,
      "historical_average": 1600.851
    },
    "accumulated_precipitation_since_seeding": {
      "current": 292.782,
      "historical_mean": 423.13
    },
    "precipitation_summary": {
      "last_3_days": 0.032,
      "last_7_days": 12.541,
      "last_14_days": 36.375,
      "last_30_days": 65.775
    },
    "standardized_precipitation_index": {
      "1_month": -0.709,
      "3_month": -1.471,
      "6_month": -1.913
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-06-11 00:00:00",
          "temperature_mean": 15.429,
          "temperature_min": 9.837,
          "temperature_max": 18.518,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.322,
          "soiltemperature_0to10cm_mean": 16.39,
          "soilmoisture_0to10cm": 0.312,
          "windspeed_mean": 2.951
        },
        {
          "time": "2025-06-12 00:00:00",
          "temperature_mean": 15.171,
          "temperature_min": 7.611,
          "temperature_max": 21.076,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.002,
          "soiltemperature_0to10cm_mean": 15.873,
          "soilmoisture_0to10cm": 0.296,
          "windspeed_mean": 1.584
        },
        {
          "time": "2025-06-13 00:00:00",
          "temperature_mean": 16.578,
          "temperature_min": 9.413,
          "temperature_max": 22.407,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 16.8,
          "soilmoisture_0to10cm": 0.281,
          "windspeed_mean": 2.141
        },
        {
          "time": "2025-06-14 00:00:00",
          "temperature_mean": 17.558,
          "temperature_min": 9.4,
          "temperature_max": 24.3,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 17.484,
          "soilmoisture_0to10cm": 0.268,
          "windspeed_mean": 1.968
        },
        {
          "time": "2025-06-15 00:00:00",
          "temperature_mean": 21.115,
          "temperature_min": 11.8,
          "temperature_max": 28.301,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.096,
          "soiltemperature_0to10cm_mean": 19.505,
          "soilmoisture_0to10cm": 0.255,
          "windspeed_mean": 1.283
        },
        {
          "time": "2025-06-16 00:00:00",
          "temperature_mean": 16.242,
          "temperature_min": 14.315,
          "temperature_max": 18.814,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.996,
          "soiltemperature_0to10cm_mean": 16.949,
          "soilmoisture_0to10cm": 0.281,
          "windspeed_mean": 3.634
        },
        {
          "time": "2025-06-17 00:00:00",
          "temperature_mean": 16.994,
          "temperature_min": 12.611,
          "temperature_max": 21.446,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.681,
          "soiltemperature_0to10cm_mean": 17.004,
          "soilmoisture_0to10cm": 0.282,
          "windspeed_mean": 2.409
        },
        {
          "time": "2025-06-18 00:00:00",
          "temperature_mean": 19.531,
          "temperature_min": 11.683,
          "temperature_max": 25.931,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.6,
          "soiltemperature_0to10cm_mean": 18.929,
          "soilmoisture_0to10cm": 0.266,
          "windspeed_mean": 1.344
        },
        {
          "time": "2025-06-19 00:00:00",
          "temperature_mean": 20.039,
          "temperature_min": 14.801,
          "temperature_max": 24.484,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.267,
          "soiltemperature_0to10cm_mean": 19.588,
          "soilmoisture_0to10cm": 0.25,
          "windspeed_mean": 3.108
        },
        {
          "time": "2025-06-20 00:00:00",
          "temperature_mean": 16.678,
          "temperature_min": 10.391,
          "temperature_max": 21.575,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.013,
          "soiltemperature_0to10cm_mean": 18.257,
          "soilmoisture_0to10cm": 0.236,
          "windspeed_mean": 2.033
        },
        {
          "time": "2025-06-21 00:00:00",
          "temperature_mean": 17.799,
          "temperature_min": 12.167,
          "temperature_max": 22.602,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.023,
          "soiltemperature_0to10cm_mean": 17.974,
          "soilmoisture_0to10cm": 0.224,
          "windspeed_mean": 1.348
        },
        {
          "time": "2025-06-22 00:00:00",
          "temperature_mean": 21.377,
          "temperature_min": 16.102,
          "temperature_max": 27.3,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.021,
          "soiltemperature_0to10cm_mean": 19.537,
          "soilmoisture_0to10cm": 0.212,
          "windspeed_mean": 1.275
        },
        {
          "time": "2025-06-23 00:00:00",
          "temperature_mean": 22.261,
          "temperature_min": 16.911,
          "temperature_max": 29.293,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.636,
          "soiltemperature_0to10cm_mean": 20.485,
          "soilmoisture_0to10cm": 0.211,
          "windspeed_mean": 2.394
        },
        {
          "time": "2025-06-24 00:00:00",
          "temperature_mean": 20.501,
          "temperature_min": 15.645,
          "temperature_max": 25.236,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.323,
          "soiltemperature_0to10cm_mean": 20.194,
          "soilmoisture_0to10cm": 0.236,
          "windspeed_mean": 3.756
        },
        {
          "time": "2025-06-25 00:00:00",
          "temperature_mean": 22.892,
          "temperature_min": 16.015,
          "temperature_max": 28.305,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.168,
          "soiltemperature_0to10cm_mean": 21.615,
          "soilmoisture_0to10cm": 0.219,
          "windspeed_mean": 3.193
        },
        {
          "time": "2025-06-26 00:00:00",
          "temperature_mean": 23.654,
          "temperature_min": 17.047,
          "temperature_max": 31.493,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.598,
          "soiltemperature_0to10cm_mean": 23.105,
          "soilmoisture_0to10cm": 0.219,
          "windspeed_mean": 0.808
        },
        {
          "time": "2025-06-27 00:00:00",
          "temperature_mean": 20.707,
          "temperature_min": 18.121,
          "temperature_max": 25.739,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.545,
          "soiltemperature_0to10cm_mean": 21.185,
          "soilmoisture_0to10cm": 0.277,
          "windspeed_mean": 4.032
        },
        {
          "time": "2025-06-28 00:00:00",
          "temperature_mean": 20.777,
          "temperature_min": 17.018,
          "temperature_max": 24.851,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.588,
          "soiltemperature_0to10cm_mean": 20.726,
          "soilmoisture_0to10cm": 0.258,
          "windspeed_mean": 3.013
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 257
    },
    "crop_emergence": {
      "date": "2024-10-11",
      "day_since": 244
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-20",
      "day_since": 53
    },
    "beginning_of_heading": {
      "date": "2025-05-27",
      "day_since": 16
    },
    "beginning_of_ripenes": {
      "date": "2025-07-01",
      "day_since": -19
    },
    "harvest": {
      "date": "2025-07-19",
      "day_since": -37
    }
  },
  "timing_of_field_operations": {
    "2025-06-11": {
      "weather_conditions": {
        "temperature_mean": 15.429,
        "temperature_min": 9.837,
        "temperature_max": 18.518,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.322,
        "soiltemperature_0to10cm_mean": 16.39,
        "soilmoisture_0to10cm": 0.312,
        "windspeed_mean": 2.951
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
        "temperature_mean": 15.171,
        "temperature_min": 7.611,
        "temperature_max": 21.076,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.002,
        "soiltemperature_0to10cm_mean": 15.873,
        "soilmoisture_0to10cm": 0.296,
        "windspeed_mean": 1.584
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
        "temperature_mean": 16.578,
        "temperature_min": 9.413,
        "temperature_max": 22.407,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 16.8,
        "soilmoisture_0to10cm": 0.281,
        "windspeed_mean": 2.141
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
        "temperature_mean": 17.558,
        "temperature_min": 9.4,
        "temperature_max": 24.3,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 17.484,
        "soilmoisture_0to10cm": 0.268,
        "windspeed_mean": 1.968
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
        "temperature_mean": 21.115,
        "temperature_min": 11.8,
        "temperature_max": 28.301,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.096,
        "soiltemperature_0to10cm_mean": 19.505,
        "soilmoisture_0to10cm": 0.255,
        "windspeed_mean": 1.283
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
        "temperature_mean": 16.242,
        "temperature_min": 14.315,
        "temperature_max": 18.814,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.996,
        "soiltemperature_0to10cm_mean": 16.949,
        "soilmoisture_0to10cm": 0.281,
        "windspeed_mean": 3.634
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
        "temperature_mean": 16.994,
        "temperature_min": 12.611,
        "temperature_max": 21.446,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.681,
        "soiltemperature_0to10cm_mean": 17.004,
        "soilmoisture_0to10cm": 0.282,
        "windspeed_mean": 2.409
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
        "temperature_mean": 19.531,
        "temperature_min": 11.683,
        "temperature_max": 25.931,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.6,
        "soiltemperature_0to10cm_mean": 18.929,
        "soilmoisture_0to10cm": 0.266,
        "windspeed_mean": 1.344
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
        "temperature_mean": 20.039,
        "temperature_min": 14.801,
        "temperature_max": 24.484,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.267,
        "soiltemperature_0to10cm_mean": 19.588,
        "soilmoisture_0to10cm": 0.25,
        "windspeed_mean": 3.108
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
    "2025-06-20": {
      "weather_conditions": {
        "temperature_mean": 16.678,
        "temperature_min": 10.391,
        "temperature_max": 21.575,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.013,
        "soiltemperature_0to10cm_mean": 18.257,
        "soilmoisture_0to10cm": 0.236,
        "windspeed_mean": 2.033
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
        "temperature_mean": 17.799,
        "temperature_min": 12.167,
        "temperature_max": 22.602,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.023,
        "soiltemperature_0to10cm_mean": 17.974,
        "soilmoisture_0to10cm": 0.224,
        "windspeed_mean": 1.348
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
        "temperature_mean": 21.377,
        "temperature_min": 16.102,
        "temperature_max": 27.3,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.021,
        "soiltemperature_0to10cm_mean": 19.537,
        "soilmoisture_0to10cm": 0.212,
        "windspeed_mean": 1.275
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
        "temperature_mean": 22.261,
        "temperature_min": 16.911,
        "temperature_max": 29.293,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.636,
        "soiltemperature_0to10cm_mean": 20.485,
        "soilmoisture_0to10cm": 0.211,
        "windspeed_mean": 2.394
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
        "temperature_mean": 20.501,
        "temperature_min": 15.645,
        "temperature_max": 25.236,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.323,
        "soiltemperature_0to10cm_mean": 20.194,
        "soilmoisture_0to10cm": 0.236,
        "windspeed_mean": 3.756
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
        "temperature_mean": 22.892,
        "temperature_min": 16.015,
        "temperature_max": 28.305,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.168,
        "soiltemperature_0to10cm_mean": 21.615,
        "soilmoisture_0to10cm": 0.219,
        "windspeed_mean": 3.193
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
        "temperature_mean": 23.654,
        "temperature_min": 17.047,
        "temperature_max": 31.493,
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.598,
        "soiltemperature_0to10cm_mean": 23.105,
        "soilmoisture_0to10cm": 0.219,
        "windspeed_mean": 0.808
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
        "temperature_mean": 20.707,
        "temperature_min": 18.121,
        "temperature_max": 25.739,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.545,
        "soiltemperature_0to10cm_mean": 21.185,
        "soilmoisture_0to10cm": 0.277,
        "windspeed_mean": 4.032
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
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
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-06-28": {
      "weather_conditions": {
        "temperature_mean": 20.777,
        "temperature_min": 17.018,
        "temperature_max": 24.851,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.588,
        "soiltemperature_0to10cm_mean": 20.726,
        "soilmoisture_0to10cm": 0.258,
        "windspeed_mean": 3.013
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
    }
  },
  "_images": {
    "zones": "images/zones.png",
    "history": "images/history.png",
    "hotspots": "images/hotspots.png",
    "evi": "images/evi.png",
    "rgb": "images/rgb.png"
  },
  "polygon_wkt": "POLYGON ((15.75700558 49.09347751, 15.75712859 49.09362657, 15.75717177 49.0936179, 15.75737054 49.09357798, 15.75752844 49.09354163, 15.75815545 49.09340567, 15.75855908 49.09330498, 15.75910486 49.09316301, 15.75934842 49.09309447, 15.75935452 49.09305806, 15.75945541 49.09301493, 15.75955246 49.09298086, 15.7603417 49.09275812, 15.7613111 49.0924712, 15.7613125 49.09247079, 15.76098397 49.09182524, 15.75990556 49.08971254, 15.75965459 49.08924168, 15.75957758 49.08900804, 15.75951126 49.08875106, 15.75945069 49.08855341, 15.75932865 49.08823138, 15.75923601 49.08811905, 15.75911058 49.08797407, 15.75905187 49.08786666, 15.75901437 49.0877469, 15.758988 49.08687514, 15.758969 49.08642611, 15.75893905 49.08639022, 15.75888142 49.08637611, 15.75882905 49.0863732, 15.75878232 49.08639948, 15.75869654 49.08649906, 15.75863353 49.08655554, 15.75856421 49.08659735, 15.75815094 49.08637476, 15.75770311 49.0861412, 15.75767681 49.08613338, 15.75763325 49.0861439, 15.75711667 49.08641398, 15.75693036 49.08653611, 15.75678619 49.08666155, 15.75669917 49.08677607, 15.75666363 49.08681222, 15.75662101 49.08683424, 15.75650892 49.08687434, 15.75638152 49.08695309, 15.75631862 49.08699227, 15.756187 49.08708737, 15.75576166 49.0874198, 15.75470201 49.08843088, 15.75443435 49.08877888, 15.75418089 49.08914237, 15.75407913 49.08930052, 15.75399199 49.0894598, 15.75396632 49.08954825, 15.75395387 49.08964465, 15.75409744 49.09050147, 15.75414987 49.09059425, 15.75422346 49.09069108, 15.7545438 49.09101576, 15.75486207 49.09136684, 15.75488821 49.09145075, 15.75486643 49.091718, 15.75486201 49.09173365, 15.75472359 49.09222327, 15.75469569 49.09237652, 15.75471148 49.09250394, 15.75498142 49.09291017, 15.75506016 49.0930685, 15.75511313 49.09315956, 15.75518295 49.09320698, 15.75527967 49.09324692, 15.75539169 49.09326291, 15.75590059 49.09315035, 15.75642017 49.09302275, 15.75656769 49.09300079, 15.75670952 49.0930078, 15.75690233 49.09302206, 15.75713933 49.09304306, 15.75740299 49.09306948, 15.75750453 49.09307912, 15.75759828 49.09311204, 15.75763685 49.0931436, 15.75766115 49.09318087, 15.75764482 49.09321234, 15.75759481 49.09323317, 15.75749949 49.09326243, 15.75722518 49.09333413, 15.75720612 49.09334042, 15.75695954 49.09342172, 15.75700558 49.09347751), (15.75622248 49.08830732, 15.756264 49.08831756, 15.75618918 49.08835082, 15.75607502 49.08838714, 15.75587599 49.0884503, 15.75575704 49.08849423, 15.75532293 49.08862514, 15.75470108 49.08879911, 15.75464393 49.08881179, 15.75461751 49.08880489, 15.75460092 49.08877729, 15.7546341 49.08875162, 15.75546905 49.08849797, 15.75580867 49.08840602, 15.75614854 49.08831769, 15.75622248 49.08830732))"
};
