// Field data for MAO250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAO250615",
  "metadata": {
    "field_area_ha": 2.916,
    "location": {
      "country": " Czechia",
      "region": " South Moravian",
      "subregion": "Senorady"
    },
    "terrain": {
      "variability": 7.102,
      "mean_elevation": 377.816,
      "min_elevation": 374.209,
      "max_elevation": 381.312
    },
    "soil": {
      "bulk_density kg/dm³": 1.34,
      "cation_exchange_capacity cmol(c)/kg": 20.809,
      "clay_particles g/100g (%)": 25.471,
      "sand particles g/100g (%)": 17.918,
      "silt particles g/100g (%)": 56.611,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-04-20": {
      "min": 0.321,
      "max": 0.542,
      "median": 0.436,
      "mean": 0.435,
      "sd": 0.033
    },
    "2025-04-28": {
      "min": 0.33,
      "max": 0.583,
      "median": 0.467,
      "mean": 0.463,
      "sd": 0.036
    },
    "2025-05-09": {
      "min": 0.422,
      "max": 0.678,
      "median": 0.547,
      "mean": 0.546,
      "sd": 0.037
    },
    "2025-05-14": {
      "min": 0.417,
      "max": 0.654,
      "median": 0.513,
      "mean": 0.512,
      "sd": 0.034
    },
    "2025-05-25": {
      "min": 0.381,
      "max": 0.655,
      "median": 0.522,
      "mean": 0.521,
      "sd": 0.037
    },
    "2025-06-12": {
      "min": 0.399,
      "max": 0.683,
      "median": 0.507,
      "mean": 0.508,
      "sd": 0.039
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 2.915,
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
        "area_ha": 2.915,
        "area_percentage": 1.0
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
    "evi_median": 0.517,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.03,
          "percentage": 1.14
        },
        "EVI_statistics": {
          "mean": 0.432,
          "median": 0.433,
          "min": 0.414,
          "max": 0.44
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.69,
          "percentage": 23.56
        },
        "EVI_statistics": {
          "mean": 0.474,
          "median": 0.477,
          "min": 0.44,
          "max": 0.492
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 1.46,
          "percentage": 50.02
        },
        "EVI_statistics": {
          "mean": 0.518,
          "median": 0.517,
          "min": 0.492,
          "max": 0.543
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.69,
          "percentage": 23.77
        },
        "EVI_statistics": {
          "mean": 0.561,
          "median": 0.559,
          "min": 0.543,
          "max": 0.594
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.04,
          "percentage": 1.51
        },
        "EVI_statistics": {
          "mean": 0.606,
          "median": 0.602,
          "min": 0.595,
          "max": 0.641
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.35,
            "area_percentage": 12.68,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.75,
            "area_percentage": 27.17,
            "zone_number": 2
          },
          "similar": {
            "ha": 0.64,
            "area_percentage": 23.19,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.6,
            "area_percentage": 21.74,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.42,
            "area_percentage": 15.22,
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
      "old_value": 0.522,
      "new_value": 0.517,
      "difference": -0.002
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
          "percentage": 0.06,
          "zone_number": 2
        },
        "no_change": {
          "ha": 2.91,
          "percentage": 99.78,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.15,
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
          "ha": 0.22,
          "percentage": 7.44,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.43,
          "percentage": 14.85,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 1.61,
          "percentage": 55.08,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.46,
          "percentage": 15.87,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.2,
          "percentage": 6.76,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.252981073963415 49.12362315767123)",
          "new_value": 0.502,
          "old_value": 0.548,
          "value_difference": -0.046,
          "area_ha": 0.055,
          "category": "major_decline",
          "location": "S",
          "id": 1
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 1601.92,
      "historical_average": 1599.417
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
          "temperature_mean": 16.25,
          "temperature_min": 11.282,
          "temperature_max": 19.233,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.314,
          "soiltemperature_0to10cm_mean": 17.312,
          "soilmoisture_0to10cm": 0.291,
          "windspeed_mean": 3.149
        },
        {
          "time": "2025-06-12 00:00:00",
          "temperature_mean": 16.16,
          "temperature_min": 8.125,
          "temperature_max": 21.852,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.001,
          "soiltemperature_0to10cm_mean": 17.075,
          "soilmoisture_0to10cm": 0.275,
          "windspeed_mean": 1.572
        },
        {
          "time": "2025-06-13 00:00:00",
          "temperature_mean": 17.48,
          "temperature_min": 11.806,
          "temperature_max": 22.621,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 17.95,
          "soilmoisture_0to10cm": 0.26,
          "windspeed_mean": 2.587
        },
        {
          "time": "2025-06-14 00:00:00",
          "temperature_mean": 18.825,
          "temperature_min": 11.773,
          "temperature_max": 25.017,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 18.913,
          "soilmoisture_0to10cm": 0.247,
          "windspeed_mean": 1.942
        },
        {
          "time": "2025-06-15 00:00:00",
          "temperature_mean": 21.857,
          "temperature_min": 12.76,
          "temperature_max": 28.737,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.054,
          "soiltemperature_0to10cm_mean": 20.883,
          "soilmoisture_0to10cm": 0.235,
          "windspeed_mean": 1.209
        },
        {
          "time": "2025-06-16 00:00:00",
          "temperature_mean": 16.927,
          "temperature_min": 14.737,
          "temperature_max": 19.327,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.982,
          "soiltemperature_0to10cm_mean": 17.631,
          "soilmoisture_0to10cm": 0.278,
          "windspeed_mean": 3.538
        },
        {
          "time": "2025-06-17 00:00:00",
          "temperature_mean": 18.052,
          "temperature_min": 13.492,
          "temperature_max": 22.671,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.726,
          "soiltemperature_0to10cm_mean": 17.983,
          "soilmoisture_0to10cm": 0.294,
          "windspeed_mean": 2.695
        },
        {
          "time": "2025-06-18 00:00:00",
          "temperature_mean": 20.463,
          "temperature_min": 12.192,
          "temperature_max": 26.717,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.591,
          "soiltemperature_0to10cm_mean": 20.09,
          "soilmoisture_0to10cm": 0.273,
          "windspeed_mean": 1.069
        },
        {
          "time": "2025-06-19 00:00:00",
          "temperature_mean": 20.949,
          "temperature_min": 15.682,
          "temperature_max": 25.443,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.285,
          "soiltemperature_0to10cm_mean": 20.634,
          "soilmoisture_0to10cm": 0.255,
          "windspeed_mean": 3.254
        },
        {
          "time": "2025-06-20 00:00:00",
          "temperature_mean": 17.633,
          "temperature_min": 11.695,
          "temperature_max": 22.389,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.02,
          "soiltemperature_0to10cm_mean": 19.252,
          "soilmoisture_0to10cm": 0.24,
          "windspeed_mean": 2.203
        },
        {
          "time": "2025-06-21 00:00:00",
          "temperature_mean": 18.243,
          "temperature_min": 10.297,
          "temperature_max": 23.2,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.041,
          "soiltemperature_0to10cm_mean": 18.955,
          "soilmoisture_0to10cm": 0.227,
          "windspeed_mean": 0.947
        },
        {
          "time": "2025-06-22 00:00:00",
          "temperature_mean": 21.514,
          "temperature_min": 12.275,
          "temperature_max": 27.83,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.035,
          "soiltemperature_0to10cm_mean": 20.607,
          "soilmoisture_0to10cm": 0.215,
          "windspeed_mean": 0.762
        },
        {
          "time": "2025-06-23 00:00:00",
          "temperature_mean": 22.53,
          "temperature_min": 15.198,
          "temperature_max": 30.601,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.661,
          "soiltemperature_0to10cm_mean": 21.681,
          "soilmoisture_0to10cm": 0.212,
          "windspeed_mean": 1.922
        },
        {
          "time": "2025-06-24 00:00:00",
          "temperature_mean": 21.241,
          "temperature_min": 15.879,
          "temperature_max": 26.279,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.346,
          "soiltemperature_0to10cm_mean": 21.283,
          "soilmoisture_0to10cm": 0.233,
          "windspeed_mean": 3.326
        },
        {
          "time": "2025-06-25 00:00:00",
          "temperature_mean": 23.713,
          "temperature_min": 16.087,
          "temperature_max": 29.391,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.187,
          "soiltemperature_0to10cm_mean": 22.766,
          "soilmoisture_0to10cm": 0.219,
          "windspeed_mean": 2.977
        },
        {
          "time": "2025-06-26 00:00:00",
          "temperature_mean": 24.898,
          "temperature_min": 18.678,
          "temperature_max": 32.174,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.57,
          "soiltemperature_0to10cm_mean": 24.593,
          "soilmoisture_0to10cm": 0.215,
          "windspeed_mean": 0.682
        },
        {
          "time": "2025-06-27 00:00:00",
          "temperature_mean": 21.899,
          "temperature_min": 19.061,
          "temperature_max": 27.116,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.508,
          "soiltemperature_0to10cm_mean": 22.55,
          "soilmoisture_0to10cm": 0.261,
          "windspeed_mean": 3.772
        },
        {
          "time": "2025-06-28 00:00:00",
          "temperature_mean": 21.544,
          "temperature_min": 17.7,
          "temperature_max": 25.719,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.489,
          "soiltemperature_0to10cm_mean": 21.848,
          "soilmoisture_0to10cm": 0.244,
          "windspeed_mean": 3.076
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
      "date": "2025-04-17",
      "day_since": 56
    },
    "beginning_of_heading": {
      "date": "2025-05-24",
      "day_since": 19
    },
    "beginning_of_ripenes": {
      "date": "2025-06-29",
      "day_since": -17
    },
    "harvest": {
      "date": "2025-07-16",
      "day_since": -34
    }
  },
  "timing_of_field_operations": {
    "2025-06-11": {
      "weather_conditions": {
        "temperature_mean": 16.25,
        "temperature_min": 11.282,
        "temperature_max": 19.233,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.314,
        "soiltemperature_0to10cm_mean": 17.312,
        "soilmoisture_0to10cm": 0.291,
        "windspeed_mean": 3.149
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
        "temperature_mean": 16.16,
        "temperature_min": 8.125,
        "temperature_max": 21.852,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.001,
        "soiltemperature_0to10cm_mean": 17.075,
        "soilmoisture_0to10cm": 0.275,
        "windspeed_mean": 1.572
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
        "temperature_mean": 17.48,
        "temperature_min": 11.806,
        "temperature_max": 22.621,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 17.95,
        "soilmoisture_0to10cm": 0.26,
        "windspeed_mean": 2.587
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
        "temperature_mean": 18.825,
        "temperature_min": 11.773,
        "temperature_max": 25.017,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 18.913,
        "soilmoisture_0to10cm": 0.247,
        "windspeed_mean": 1.942
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
        "temperature_mean": 21.857,
        "temperature_min": 12.76,
        "temperature_max": 28.737,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.054,
        "soiltemperature_0to10cm_mean": 20.883,
        "soilmoisture_0to10cm": 0.235,
        "windspeed_mean": 1.209
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
        "temperature_mean": 16.927,
        "temperature_min": 14.737,
        "temperature_max": 19.327,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.982,
        "soiltemperature_0to10cm_mean": 17.631,
        "soilmoisture_0to10cm": 0.278,
        "windspeed_mean": 3.538
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
        "temperature_mean": 18.052,
        "temperature_min": 13.492,
        "temperature_max": 22.671,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.726,
        "soiltemperature_0to10cm_mean": 17.983,
        "soilmoisture_0to10cm": 0.294,
        "windspeed_mean": 2.695
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
        "temperature_mean": 20.463,
        "temperature_min": 12.192,
        "temperature_max": 26.717,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.591,
        "soiltemperature_0to10cm_mean": 20.09,
        "soilmoisture_0to10cm": 0.273,
        "windspeed_mean": 1.069
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
        "temperature_mean": 20.949,
        "temperature_min": 15.682,
        "temperature_max": 25.443,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.285,
        "soiltemperature_0to10cm_mean": 20.634,
        "soilmoisture_0to10cm": 0.255,
        "windspeed_mean": 3.254
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
        "temperature_mean": 17.633,
        "temperature_min": 11.695,
        "temperature_max": 22.389,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.02,
        "soiltemperature_0to10cm_mean": 19.252,
        "soilmoisture_0to10cm": 0.24,
        "windspeed_mean": 2.203
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
        "temperature_mean": 18.243,
        "temperature_min": 10.297,
        "temperature_max": 23.2,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.041,
        "soiltemperature_0to10cm_mean": 18.955,
        "soilmoisture_0to10cm": 0.227,
        "windspeed_mean": 0.947
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
        "temperature_mean": 21.514,
        "temperature_min": 12.275,
        "temperature_max": 27.83,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.035,
        "soiltemperature_0to10cm_mean": 20.607,
        "soilmoisture_0to10cm": 0.215,
        "windspeed_mean": 0.762
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
        "temperature_mean": 22.53,
        "temperature_min": 15.198,
        "temperature_max": 30.601,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.661,
        "soiltemperature_0to10cm_mean": 21.681,
        "soilmoisture_0to10cm": 0.212,
        "windspeed_mean": 1.922
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
        "temperature_mean": 21.241,
        "temperature_min": 15.879,
        "temperature_max": 26.279,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.346,
        "soiltemperature_0to10cm_mean": 21.283,
        "soilmoisture_0to10cm": 0.233,
        "windspeed_mean": 3.326
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
        "temperature_mean": 23.713,
        "temperature_min": 16.087,
        "temperature_max": 29.391,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.187,
        "soiltemperature_0to10cm_mean": 22.766,
        "soilmoisture_0to10cm": 0.219,
        "windspeed_mean": 2.977
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
        "temperature_mean": 24.898,
        "temperature_min": 18.678,
        "temperature_max": 32.174,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.57,
        "soiltemperature_0to10cm_mean": 24.593,
        "soilmoisture_0to10cm": 0.215,
        "windspeed_mean": 0.682
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
        "temperature_mean": 21.899,
        "temperature_min": 19.061,
        "temperature_max": 27.116,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.508,
        "soiltemperature_0to10cm_mean": 22.55,
        "soilmoisture_0to10cm": 0.261,
        "windspeed_mean": 3.772
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
        "temperature_mean": 21.544,
        "temperature_min": 17.7,
        "temperature_max": 25.719,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.489,
        "soiltemperature_0to10cm_mean": 21.848,
        "soilmoisture_0to10cm": 0.244,
        "windspeed_mean": 3.076
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
  "polygon_wkt": "POLYGON ((16.25515866 49.12463116, 16.25520976 49.12460948, 16.25516645 49.12453604, 16.25487654 49.12413878, 16.25466423 49.1238579, 16.25458819 49.12377082, 16.25445372 49.12368865, 16.25417761 49.12359128, 16.25403861 49.12355093, 16.2539411 49.12352414, 16.2537129 49.12345218, 16.25328919 49.12328325, 16.25301952 49.12320862, 16.25282453 49.12316035, 16.25263938 49.12313023, 16.25254564 49.12312017, 16.25242945 49.12311373, 16.25229137 49.12309049, 16.25202041 49.1230266, 16.25193587 49.12302512, 16.25184545 49.12303305, 16.25179383 49.12309819, 16.25181374 49.12317039, 16.25190702 49.1233329, 16.25204154 49.12355328, 16.25220056 49.12378786, 16.252366 49.12401406, 16.25258368 49.12431487, 16.25269216 49.12443607, 16.25282697 49.12454507, 16.25300264 49.12463588, 16.25321525 49.1247312, 16.25334329 49.12483263, 16.25348377 49.12493271, 16.25356234 49.12496542, 16.25360423 49.12496466, 16.25372117 49.12494938, 16.25389289 49.12491261, 16.25419603 49.1248329, 16.25515866 49.12463116))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
