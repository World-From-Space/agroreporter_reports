// Field data for LAI250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAI250615",
  "metadata": {
    "field_area_ha": 31.08,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 19.244,
      "mean_elevation": 542.643,
      "min_elevation": 533.11,
      "max_elevation": 552.354
    },
    "soil": {
      "bulk_density kg/dm³": 1.341,
      "cation_exchange_capacity cmol(c)/kg": 17.758,
      "clay_particles g/100g (%)": 22.538,
      "sand particles g/100g (%)": 34.883,
      "silt particles g/100g (%)": 42.678,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-04-20": {
      "min": 0.41,
      "max": 0.773,
      "median": 0.693,
      "mean": 0.687,
      "sd": 0.039
    },
    "2025-05-03": {
      "min": 0.508,
      "max": 0.809,
      "median": 0.74,
      "mean": 0.737,
      "sd": 0.026
    },
    "2025-05-14": {
      "min": 0.428,
      "max": 0.787,
      "median": 0.712,
      "mean": 0.707,
      "sd": 0.031
    },
    "2025-05-31": {
      "min": 0.436,
      "max": 0.771,
      "median": 0.719,
      "mean": 0.713,
      "sd": 0.031
    },
    "2025-06-09": {
      "min": 0.404,
      "max": 0.763,
      "median": 0.683,
      "mean": 0.677,
      "sd": 0.034
    },
    "2025-06-14": {
      "min": 0.341,
      "max": 0.748,
      "median": 0.663,
      "mean": 0.654,
      "sd": 0.04
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 30.955,
      "area_percentage": 1.0
    },
    "dominant_category": "high vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.001,
        "area_percentage": 0.0
      },
      "low_vegetation": {
        "area_ha": 0.076,
        "area_percentage": 0.002
      },
      "medium vegetation": {
        "area_ha": 11.248,
        "area_percentage": 0.363
      },
      "high_vegetation": {
        "area_ha": 19.63,
        "area_percentage": 0.634
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
    "evi_median": 0.659,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.4,
          "percentage": 4.51
        },
        "EVI_statistics": {
          "mean": 0.507,
          "median": 0.53,
          "min": 0.29,
          "max": 0.56
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.97,
          "percentage": 12.82
        },
        "EVI_statistics": {
          "mean": 0.601,
          "median": 0.606,
          "min": 0.56,
          "max": 0.626
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 23.16,
          "percentage": 74.83
        },
        "EVI_statistics": {
          "mean": 0.662,
          "median": 0.662,
          "min": 0.626,
          "max": 0.692
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 2.43,
          "percentage": 7.84
        },
        "EVI_statistics": {
          "mean": 0.702,
          "median": 0.7,
          "min": 0.692,
          "max": 0.746
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
            "ha": 0.46,
            "area_percentage": 1.51,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 6.24,
            "area_percentage": 20.44,
            "zone_number": 2
          },
          "similar": {
            "ha": 17.1,
            "area_percentage": 56.01,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 5.94,
            "area_percentage": 19.46,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.79,
            "area_percentage": 2.59,
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
      "old_value": 0.719,
      "new_value": 0.659,
      "difference": -0.061
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.36,
          "percentage": 1.16,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 7.96,
          "percentage": 25.71,
          "zone_number": 2
        },
        "no_change": {
          "ha": 22.64,
          "percentage": 73.13,
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
          "ha": 4.65,
          "percentage": 15.02,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.11,
          "percentage": 13.29,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 13.48,
          "percentage": 43.55,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.09,
          "percentage": 13.2,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 4.63,
          "percentage": 14.95,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.773663513022223 49.08765701699203)",
          "new_value": 0.649,
          "old_value": 0.738,
          "value_difference": -0.089,
          "area_ha": 0.553,
          "category": "major_decline",
          "location": "N",
          "id": 1
        },
        {
          "geometry": "POINT (15.771627826533333 49.087041323486055)",
          "new_value": 0.649,
          "old_value": 0.737,
          "value_difference": -0.088,
          "area_ha": 0.353,
          "category": "major_decline",
          "location": "W",
          "id": 2
        },
        {
          "geometry": "POINT (15.775574565644444 49.08439116448207)",
          "new_value": 0.686,
          "old_value": 0.71,
          "value_difference": -0.024,
          "area_ha": 1.141,
          "category": "major_growth",
          "location": "S",
          "id": 3
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
      "date": "2025-04-22",
      "day_since": 51
    },
    "beginning_of_heading": {
      "date": "2025-05-29",
      "day_since": 14
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
  "polygon_wkt": "POLYGON ((15.77607031 49.08312763, 15.7757935 49.0831708, 15.77569681 49.08317756, 15.77556381 49.08317673, 15.77540266 49.08316099, 15.7752743 49.08312857, 15.77493431 49.08298723, 15.77462064 49.08287987, 15.7746179 49.0828787, 15.7693221 49.08627231, 15.76933008 49.08627995, 15.77006061 49.08711747, 15.77024461 49.08732842, 15.77046207 49.08757772, 15.7711309 49.08835719, 15.77132682 49.08858553, 15.77153513 49.08882828, 15.77169978 49.08894461, 15.77187286 49.08904131, 15.77289695 49.08942698, 15.77338117 49.08959779, 15.77525878 49.08855139, 15.77528201 49.08853521, 15.77562692 49.08833587, 15.77683216 49.08762767, 15.77711374 49.087437, 15.77746015 49.08713376, 15.77804847 49.08652788, 15.77846258 49.08603161, 15.77850535 49.08585301, 15.77854861 49.0857012, 15.7785364 49.0854116, 15.77852087 49.08521582, 15.77851519 49.084947, 15.77853251 49.08480178, 15.77861075 49.08455194, 15.77865891 49.08439916, 15.77866964 49.0843207, 15.77866472 49.0842632, 15.7786421 49.08419776, 15.77855939 49.08408814, 15.77847134 49.08399794, 15.77790533 49.08351136, 15.77774359 49.08339086, 15.77740937 49.08329676, 15.77711079 49.0832127, 15.7769685 49.08318381, 15.7768453 49.08316825, 15.77668531 49.0831539, 15.77607031 49.08312763))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
