// Field data for LAK250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAK250615",
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
    "2025-04-20": {
      "min": 0.32,
      "max": 0.756,
      "median": 0.665,
      "mean": 0.651,
      "sd": 0.059
    },
    "2025-05-01": {
      "min": 0.481,
      "max": 0.878,
      "median": 0.794,
      "mean": 0.782,
      "sd": 0.051
    },
    "2025-05-10": {
      "min": 0.4,
      "max": 0.79,
      "median": 0.696,
      "mean": 0.687,
      "sd": 0.044
    },
    "2025-05-14": {
      "min": 0.436,
      "max": 0.791,
      "median": 0.685,
      "mean": 0.678,
      "sd": 0.041
    },
    "2025-05-31": {
      "min": 0.432,
      "max": 0.784,
      "median": 0.682,
      "mean": 0.674,
      "sd": 0.041
    },
    "2025-06-14": {
      "min": 0.406,
      "max": 0.726,
      "median": 0.641,
      "mean": 0.633,
      "sd": 0.036
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 29.128,
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
        "area_ha": 0.001,
        "area_percentage": 0.0
      },
      "medium vegetation": {
        "area_ha": 20.737,
        "area_percentage": 0.712
      },
      "high_vegetation": {
        "area_ha": 8.39,
        "area_percentage": 0.288
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
    "evi_median": 0.635,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.0,
          "percentage": 3.44
        },
        "EVI_statistics": {
          "mean": 0.511,
          "median": 0.516,
          "min": 0.393,
          "max": 0.54
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 4.86,
          "percentage": 16.69
        },
        "EVI_statistics": {
          "mean": 0.581,
          "median": 0.584,
          "min": 0.54,
          "max": 0.603
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 20.49,
          "percentage": 70.33
        },
        "EVI_statistics": {
          "mean": 0.638,
          "median": 0.639,
          "min": 0.603,
          "max": 0.667
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 2.78,
          "percentage": 9.54
        },
        "EVI_statistics": {
          "mean": 0.677,
          "median": 0.675,
          "min": 0.667,
          "max": 0.721
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
            "ha": 0.72,
            "area_percentage": 2.55,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 6.76,
            "area_percentage": 23.93,
            "zone_number": 2
          },
          "similar": {
            "ha": 14.12,
            "area_percentage": 49.98,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 5.8,
            "area_percentage": 20.53,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.85,
            "area_percentage": 3.01,
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
      "old_value": 0.682,
      "new_value": 0.635,
      "difference": -0.047
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.04,
          "percentage": 0.13,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 2.79,
          "percentage": 9.57,
          "zone_number": 2
        },
        "no_change": {
          "ha": 26.29,
          "percentage": 90.27,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.01,
          "percentage": 0.03,
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
          "ha": 3.01,
          "percentage": 10.32,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.13,
          "percentage": 14.19,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 14.75,
          "percentage": 50.62,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 4.29,
          "percentage": 14.72,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.96,
          "percentage": 10.15,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.772385618691406 49.08373268403554)",
          "new_value": 0.622,
          "old_value": 0.706,
          "value_difference": -0.084,
          "area_ha": 0.311,
          "category": "major_decline",
          "location": "E",
          "id": 1
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
      "date": "2024-10-11",
      "day_since": 244
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-22",
      "day_since": 51
    },
    "beginning_of_heading": {
      "date": "2025-05-30",
      "day_since": 13
    },
    "beginning_of_ripenes": {
      "date": "2025-07-04",
      "day_since": -22
    },
    "harvest": {
      "date": "2025-07-22",
      "day_since": -40
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
  "polygon_wkt": "POLYGON ((15.76386821 49.08255081, 15.76381587 49.08257608, 15.76380047 49.08258853, 15.76379347 49.08259973, 15.76379276 49.08260086, 15.76381565 49.08263516, 15.76398966 49.08279281, 15.76422007 49.08303458, 15.76479675 49.08367928, 15.7657325 49.08468828, 15.76576349 49.08471641, 15.76585734 49.08479315, 15.76595488 49.08486196, 15.76603604 49.08490447, 15.76628572 49.08500954, 15.768408 49.085707, 15.76877338 49.0858398, 15.76907173 49.08603238, 15.76918578 49.08614167, 15.76938553 49.08602162, 15.76957505 49.08589413, 15.77005153 49.08559076, 15.7705363 49.08527796, 15.7710271 49.08496204, 15.77156602 49.0846161, 15.77190119 49.08440371, 15.77243324 49.08405939, 15.77303434 49.08367232, 15.7736967 49.08324907, 15.77416908 49.08294391, 15.77427007 49.08286988, 15.77439407 49.0827794, 15.77432151 49.08274492, 15.77419604 49.08267028, 15.77412315 49.08259492, 15.77409509 49.08248517, 15.77408646 49.08220437, 15.7741164 49.08192566, 15.77414312 49.08164928, 15.77415466 49.08158033, 15.77418587 49.08139385, 15.77426586 49.08109523, 15.77426496 49.08107274, 15.77426448 49.08106062, 15.77424966 49.08103599, 15.77422989 49.08101766, 15.77420016 49.08100425, 15.77330108 49.08095906, 15.77212654 49.0808978, 15.77174909 49.08091408, 15.7706344 49.08097224, 15.76925491 49.08108237, 15.76794316 49.08116142, 15.76753152 49.08112913, 15.76709638 49.08105252, 15.76687511 49.08102558, 15.7665395 49.08100586, 15.76618651 49.08104106, 15.76588475 49.08108569, 15.76587408 49.08109068, 15.76579704 49.08112673, 15.76574722 49.08115996, 15.76566026 49.08123701, 15.76558382 49.08132641, 15.76551999 49.08142508, 15.76548511 49.0815527, 15.76544534 49.08163928, 15.76542666 49.08166178, 15.76514526 49.08182666, 15.76510687 49.08187607, 15.76509847 49.08192231, 15.76511821 49.08196386, 15.76527381 49.08212843, 15.765261 49.08214503, 15.76520221 49.08217541, 15.76517766 49.08218809, 15.76493831 49.08229068, 15.76487212 49.08232371, 15.76483651 49.08232092, 15.76475979 49.08227201, 15.76469511 49.08224249, 15.76464492 49.08223568, 15.76458899 49.08223632, 15.76452401 49.08225063, 15.76404091 49.08246865, 15.76386821 49.08255081))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
