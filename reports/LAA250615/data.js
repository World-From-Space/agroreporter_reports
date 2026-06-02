// Field data for LAA250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAA250615",
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
    "2025-04-20": {
      "min": 0.298,
      "max": 0.731,
      "median": 0.64,
      "mean": 0.63,
      "sd": 0.049
    },
    "2025-05-03": {
      "min": 0.358,
      "max": 0.768,
      "median": 0.683,
      "mean": 0.674,
      "sd": 0.04
    },
    "2025-05-14": {
      "min": 0.318,
      "max": 0.75,
      "median": 0.651,
      "mean": 0.641,
      "sd": 0.046
    },
    "2025-05-31": {
      "min": 0.268,
      "max": 0.753,
      "median": 0.668,
      "mean": 0.656,
      "sd": 0.05
    },
    "2025-06-09": {
      "min": 0.353,
      "max": 0.713,
      "median": 0.621,
      "mean": 0.612,
      "sd": 0.042
    },
    "2025-06-14": {
      "min": 0.275,
      "max": 0.686,
      "median": 0.607,
      "mean": 0.595,
      "sd": 0.047
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 31.985,
      "area_percentage": 1.0
    },
    "dominant_category": "medium vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.005,
        "area_percentage": 0.0
      },
      "low_vegetation": {
        "area_ha": 0.113,
        "area_percentage": 0.004
      },
      "medium vegetation": {
        "area_ha": 30.249,
        "area_percentage": 0.946
      },
      "high_vegetation": {
        "area_ha": 1.618,
        "area_percentage": 0.051
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
    "evi_median": 0.604,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 2.49,
          "percentage": 7.78
        },
        "EVI_statistics": {
          "mean": 0.476,
          "median": 0.486,
          "min": 0.255,
          "max": 0.513
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 5.26,
          "percentage": 16.45
        },
        "EVI_statistics": {
          "mean": 0.55,
          "median": 0.554,
          "min": 0.513,
          "max": 0.574
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 19.14,
          "percentage": 59.85
        },
        "EVI_statistics": {
          "mean": 0.606,
          "median": 0.607,
          "min": 0.574,
          "max": 0.634
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 5.08,
          "percentage": 15.89
        },
        "EVI_statistics": {
          "mean": 0.647,
          "median": 0.644,
          "min": 0.634,
          "max": 0.694
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.01,
          "percentage": 0.02
        },
        "EVI_statistics": {
          "mean": 0.703,
          "median": 0.704,
          "min": 0.695,
          "max": 0.71
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.96,
            "area_percentage": 3.07,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.51,
            "area_percentage": 17.65,
            "zone_number": 2
          },
          "similar": {
            "ha": 16.24,
            "area_percentage": 52.02,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 6.8,
            "area_percentage": 21.78,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.71,
            "area_percentage": 5.48,
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
      "old_value": 0.668,
      "new_value": 0.604,
      "difference": -0.063
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.01,
          "percentage": 0.03,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 9.47,
          "percentage": 29.59,
          "zone_number": 2
        },
        "no_change": {
          "ha": 22.51,
          "percentage": 70.38,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.0,
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
          "ha": 2.65,
          "percentage": 8.29,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.36,
          "percentage": 13.62,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 18.03,
          "percentage": 56.37,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.37,
          "percentage": 13.66,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.58,
          "percentage": 8.06,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.761776100199999 49.08970705089394)",
          "new_value": 0.592,
          "old_value": 0.698,
          "value_difference": -0.106,
          "area_ha": 0.477,
          "category": "major_decline",
          "location": "W",
          "id": 1
        },
        {
          "geometry": "POINT (15.7628627858 49.09214596395454)",
          "new_value": 0.627,
          "old_value": 0.64,
          "value_difference": -0.013,
          "area_ha": 0.323,
          "category": "major_growth",
          "location": "N",
          "id": 2
        }
      ]
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
      "date": "2024-10-12",
      "day_since": 243
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-19",
      "day_since": 54
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
  "polygon_wkt": "POLYGON ((15.76367444 49.08623629, 15.76361464 49.08624949, 15.76356244 49.08627994, 15.76350937 49.08633005, 15.76348678 49.08638738, 15.76350515 49.08650964, 15.76353187 49.08667163, 15.76351396 49.08677227, 15.76346855 49.08686775, 15.7632723 49.08712839, 15.76291169 49.08765889, 15.76282477 49.08784451, 15.76280593 49.08797406, 15.7628016 49.08801544, 15.76278129 49.08804099, 15.76272668 49.08804348, 15.76246612 49.08795867, 15.7623597 49.08791983, 15.76209019 49.08782753, 15.76173797 49.08772197, 15.76153148 49.08765889, 15.76137241 49.08760905, 15.76131228 49.08758283, 15.76127279 49.0875279, 15.76126515 49.08747362, 15.76129814 49.08742062, 15.7615046 49.08718715, 15.76162805 49.08705402, 15.76171382 49.08693691, 15.76170745 49.08688723, 15.76129379 49.0867225, 15.76088197 49.08656367, 15.76082287 49.08658171, 15.76077812 49.0866001, 15.7606088 49.08679289, 15.76040767 49.0870081, 15.7603446 49.08700986, 15.76027807 49.08699552, 15.75992887 49.08684543, 15.75959079 49.0867223, 15.75954114 49.08673065, 15.75949824 49.08676899, 15.75951684 49.08701966, 15.75957257 49.08735302, 15.75965366 49.08757755, 15.75969262 49.08778072, 15.75975691 49.08807227, 15.75974025 49.08826549, 15.7597058 49.08839116, 15.75968839 49.08844891, 15.75966583 49.08861086, 15.75968492 49.08877154, 15.75978114 49.08904122, 15.75980775 49.0891375, 15.75995278 49.08950752, 15.76037594 49.09031972, 15.76107 49.09170672, 15.7615325 49.09260504, 15.76173343 49.09298, 15.76197745 49.09340725, 15.76215205 49.09373916, 15.76233547 49.09422321, 15.76246844 49.09433332, 15.76243428 49.09449325, 15.76245913 49.09461055, 15.76247747 49.09469665, 15.76250669 49.09477003, 15.76262264 49.09507119, 15.76262641 49.0950807, 15.76282387 49.09505238, 15.76361218 49.09487797, 15.76377596 49.09482487, 15.76384607 49.0947773, 15.76386487 49.09476686, 15.76388647 49.09475909, 15.76483138 49.09449569, 15.76483539 49.09449463, 15.76524835 49.0943906, 15.76526179 49.09438778, 15.76547696 49.09435144, 15.76584543 49.09426968, 15.76634762 49.09412655, 15.76691947 49.09396198, 15.76692624 49.09396018, 15.76709518 49.09391921, 15.76719433 49.09389516, 15.76746979 49.09382836, 15.76748422 49.0938255, 15.76766319 49.09379781, 15.76768796 49.09379569, 15.76771288 49.09379689, 15.76773586 49.09379956, 15.76785736 49.09381297, 15.76777679 49.09363796, 15.76748303 49.0931103, 15.76725575 49.09269471, 15.76705905 49.09233567, 15.76683087 49.09192097, 15.76656301 49.09143559, 15.76636154 49.09107474, 15.76610346 49.09060785, 15.76582147 49.09009595, 15.7655453 49.08959218, 15.76530891 49.08915862, 15.7650708 49.08873452, 15.7648577 49.08834543, 15.76464614 49.08795599, 15.76417337 49.08710096, 15.76389002 49.0865977, 15.76385755 49.08655561, 15.76377751 49.08641396, 15.76371948 49.08633408, 15.76369721 49.08628573, 15.76367444 49.08623629))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
