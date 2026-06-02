// Field data for LAJ250515 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAJ250515",
  "metadata": {
    "field_area_ha": 29.032,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 22.384,
      "mean_elevation": 552.76,
      "min_elevation": 538.774,
      "max_elevation": 561.158
    },
    "soil": {
      "bulk_density kg/dm³": 1.331,
      "cation_exchange_capacity cmol(c)/kg": 19.646,
      "clay_particles g/100g (%)": 20.346,
      "sand particles g/100g (%)": 35.616,
      "silt particles g/100g (%)": 44.061,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-03-17": {
      "min": 0.2,
      "max": 0.471,
      "median": 0.367,
      "mean": 0.363,
      "sd": 0.033
    },
    "2025-03-28": {
      "min": 0.255,
      "max": 0.535,
      "median": 0.445,
      "mean": 0.44,
      "sd": 0.036
    },
    "2025-04-11": {
      "min": 0.288,
      "max": 0.685,
      "median": 0.593,
      "mean": 0.579,
      "sd": 0.055
    },
    "2025-04-22": {
      "min": 0.288,
      "max": 0.724,
      "median": 0.634,
      "mean": 0.621,
      "sd": 0.054
    },
    "2025-05-03": {
      "min": 0.419,
      "max": 0.789,
      "median": 0.701,
      "mean": 0.693,
      "sd": 0.041
    },
    "2025-05-13": {
      "min": 0.377,
      "max": 0.808,
      "median": 0.696,
      "mean": 0.688,
      "sd": 0.049
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 28.768,
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
        "area_ha": 0.003,
        "area_percentage": 0.0
      },
      "medium vegetation": {
        "area_ha": 8.95,
        "area_percentage": 0.311
      },
      "high_vegetation": {
        "area_ha": 19.815,
        "area_percentage": 0.689
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
    "evi_median": 0.666,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.14,
          "percentage": 3.95
        },
        "EVI_statistics": {
          "mean": 0.519,
          "median": 0.531,
          "min": 0.395,
          "max": 0.566
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 4.19,
          "percentage": 14.56
        },
        "EVI_statistics": {
          "mean": 0.611,
          "median": 0.616,
          "min": 0.566,
          "max": 0.633
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 20.25,
          "percentage": 70.37
        },
        "EVI_statistics": {
          "mean": 0.668,
          "median": 0.669,
          "min": 0.633,
          "max": 0.7
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 3.2,
          "percentage": 11.11
        },
        "EVI_statistics": {
          "mean": 0.712,
          "median": 0.71,
          "min": 0.7,
          "max": 0.761
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
        "general_difference": "low",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.29,
            "area_percentage": 1.03,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.13,
            "area_percentage": 18.21,
            "zone_number": 2
          },
          "similar": {
            "ha": 17.15,
            "area_percentage": 60.88,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 5.36,
            "area_percentage": 19.03,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.24,
            "area_percentage": 0.85,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-05-15",
      "reference_image_date": "2025-05-03",
      "change_period": 12
    },
    "median_EVI_change": {
      "old_value": 0.701,
      "new_value": 0.666,
      "difference": -0.034
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
          "ha": 0.63,
          "percentage": 2.19,
          "zone_number": 2
        },
        "no_change": {
          "ha": 28.14,
          "percentage": 97.81,
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
          "ha": 2.53,
          "percentage": 8.8,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.07,
          "percentage": 14.15,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 15.63,
          "percentage": 54.33,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.98,
          "percentage": 13.84,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.55,
          "percentage": 8.88,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 1145.183,
      "historical_average": 1144.383
    },
    "accumulated_precipitation_since_seeding": {
      "current": 227.007,
      "historical_mean": 336.717
    },
    "precipitation_summary": {
      "last_3_days": 1.179,
      "last_7_days": 1.566,
      "last_14_days": 7.812,
      "last_30_days": 53.265
    },
    "standardized_precipitation_index": {
      "1_month": -0.257,
      "3_month": -1.35,
      "6_month": -1.684
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-05-11 00:00:00",
          "temperature_mean": 10.428,
          "temperature_min": 5.88,
          "temperature_max": 14.757,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.452,
          "soiltemperature_0to10cm_mean": 11.178,
          "soilmoisture_0to10cm": 0.277,
          "windspeed_mean": 1.97
        },
        {
          "time": "2025-05-12 00:00:00",
          "temperature_mean": 9.599,
          "temperature_min": 2.735,
          "temperature_max": 13.9,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.342,
          "soiltemperature_0to10cm_mean": 10.341,
          "soilmoisture_0to10cm": 0.269,
          "windspeed_mean": 2.484
        },
        {
          "time": "2025-05-13 00:00:00",
          "temperature_mean": 10.797,
          "temperature_min": 5.678,
          "temperature_max": 15.939,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.194,
          "soiltemperature_0to10cm_mean": 11.266,
          "soilmoisture_0to10cm": 0.26,
          "windspeed_mean": 2.265
        },
        {
          "time": "2025-05-14 00:00:00",
          "temperature_mean": 13.633,
          "temperature_min": 5.574,
          "temperature_max": 19.342,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.786,
          "soiltemperature_0to10cm_mean": 12.188,
          "soilmoisture_0to10cm": 0.252,
          "windspeed_mean": 1.747
        },
        {
          "time": "2025-05-15 00:00:00",
          "temperature_mean": 10.325,
          "temperature_min": 6.059,
          "temperature_max": 12.365,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.622,
          "soiltemperature_0to10cm_mean": 11.598,
          "soilmoisture_0to10cm": 0.249,
          "windspeed_mean": 3.671
        },
        {
          "time": "2025-05-16 00:00:00",
          "temperature_mean": 8.877,
          "temperature_min": 5.314,
          "temperature_max": 13.681,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.499,
          "soiltemperature_0to10cm_mean": 10.454,
          "soilmoisture_0to10cm": 0.251,
          "windspeed_mean": 3.67
        },
        {
          "time": "2025-05-17 00:00:00",
          "temperature_mean": 10.349,
          "temperature_min": 5.757,
          "temperature_max": 14.625,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.796,
          "soiltemperature_0to10cm_mean": 10.938,
          "soilmoisture_0to10cm": 0.252,
          "windspeed_mean": 4.046
        },
        {
          "time": "2025-05-18 00:00:00",
          "temperature_mean": 9.737,
          "temperature_min": 6.79,
          "temperature_max": 13.663,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.777,
          "soiltemperature_0to10cm_mean": 10.855,
          "soilmoisture_0to10cm": 0.278,
          "windspeed_mean": 3.604
        },
        {
          "time": "2025-05-19 00:00:00",
          "temperature_mean": 10.701,
          "temperature_min": 7.875,
          "temperature_max": 13.252,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.792,
          "soiltemperature_0to10cm_mean": 10.659,
          "soilmoisture_0to10cm": 0.292,
          "windspeed_mean": 4.224
        },
        {
          "time": "2025-05-20 00:00:00",
          "temperature_mean": 12.812,
          "temperature_min": 8.792,
          "temperature_max": 16.663,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.605,
          "soiltemperature_0to10cm_mean": 12.221,
          "soilmoisture_0to10cm": 0.285,
          "windspeed_mean": 0.401
        },
        {
          "time": "2025-05-21 00:00:00",
          "temperature_mean": 14.581,
          "temperature_min": 8.249,
          "temperature_max": 19.523,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.601,
          "soiltemperature_0to10cm_mean": 13.588,
          "soilmoisture_0to10cm": 0.277,
          "windspeed_mean": 1.062
        },
        {
          "time": "2025-05-22 00:00:00",
          "temperature_mean": 11.52,
          "temperature_min": 8.46,
          "temperature_max": 14.284,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.97,
          "soiltemperature_0to10cm_mean": 12.108,
          "soilmoisture_0to10cm": 0.309,
          "windspeed_mean": 1.536
        },
        {
          "time": "2025-05-23 00:00:00",
          "temperature_mean": 9.914,
          "temperature_min": 5.275,
          "temperature_max": 14.248,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.791,
          "soiltemperature_0to10cm_mean": 11.259,
          "soilmoisture_0to10cm": 0.336,
          "windspeed_mean": 2.448
        },
        {
          "time": "2025-05-24 00:00:00",
          "temperature_mean": 10.158,
          "temperature_min": 3.523,
          "temperature_max": 14.684,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.52,
          "soiltemperature_0to10cm_mean": 10.751,
          "soilmoisture_0to10cm": 0.31,
          "windspeed_mean": 1.751
        },
        {
          "time": "2025-05-25 00:00:00",
          "temperature_mean": 11.609,
          "temperature_min": 4.952,
          "temperature_max": 16.937,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.554,
          "soiltemperature_0to10cm_mean": 11.633,
          "soilmoisture_0to10cm": 0.298,
          "windspeed_mean": 2.098
        },
        {
          "time": "2025-05-26 00:00:00",
          "temperature_mean": 13.756,
          "temperature_min": 10.864,
          "temperature_max": 17.315,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.662,
          "soiltemperature_0to10cm_mean": 13.236,
          "soilmoisture_0to10cm": 0.345,
          "windspeed_mean": 2.836
        },
        {
          "time": "2025-05-27 00:00:00",
          "temperature_mean": 13.99,
          "temperature_min": 9.298,
          "temperature_max": 18.54,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.444,
          "soiltemperature_0to10cm_mean": 13.845,
          "soilmoisture_0to10cm": 0.322,
          "windspeed_mean": 2.303
        },
        {
          "time": "2025-05-28 00:00:00",
          "temperature_mean": 13.548,
          "temperature_min": 9.995,
          "temperature_max": 16.984,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.815,
          "soiltemperature_0to10cm_mean": 13.047,
          "soilmoisture_0to10cm": 0.314,
          "windspeed_mean": 3.418
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 228
    },
    "crop_emergence": {
      "date": "2024-10-13",
      "day_since": 213
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-24",
      "day_since": 20
    },
    "beginning_of_heading": {
      "date": "2025-05-27",
      "day_since": -13
    },
    "beginning_of_ripenes": {
      "date": "2025-07-05",
      "day_since": -52
    },
    "harvest": {
      "date": "2025-07-24",
      "day_since": -71
    }
  },
  "timing_of_field_operations": {
    "2025-05-11": {
      "weather_conditions": {
        "temperature_mean": 10.428,
        "temperature_min": 5.88,
        "temperature_max": 14.757,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.452,
        "soiltemperature_0to10cm_mean": 11.178,
        "soilmoisture_0to10cm": 0.277,
        "windspeed_mean": 1.97
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "good",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.6
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
    "2025-05-12": {
      "weather_conditions": {
        "temperature_mean": 9.599,
        "temperature_min": 2.735,
        "temperature_max": 13.9,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.342,
        "soiltemperature_0to10cm_mean": 10.341,
        "soilmoisture_0to10cm": 0.269,
        "windspeed_mean": 2.484
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "good",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      }
    },
    "2025-05-13": {
      "weather_conditions": {
        "temperature_mean": 10.797,
        "temperature_min": 5.678,
        "temperature_max": 15.939,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.194,
        "soiltemperature_0to10cm_mean": 11.266,
        "soilmoisture_0to10cm": 0.26,
        "windspeed_mean": 2.265
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "good",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.6
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
    "2025-05-14": {
      "weather_conditions": {
        "temperature_mean": 13.633,
        "temperature_min": 5.574,
        "temperature_max": 19.342,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.786,
        "soiltemperature_0to10cm_mean": 12.188,
        "soilmoisture_0to10cm": 0.252,
        "windspeed_mean": 1.747
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
    "2025-05-15": {
      "weather_conditions": {
        "temperature_mean": 10.325,
        "temperature_min": 6.059,
        "temperature_max": 12.365,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.622,
        "soiltemperature_0to10cm_mean": 11.598,
        "soilmoisture_0to10cm": 0.249,
        "windspeed_mean": 3.671
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.7
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.4
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
    "2025-05-16": {
      "weather_conditions": {
        "temperature_mean": 8.877,
        "temperature_min": 5.314,
        "temperature_max": 13.681,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.499,
        "soiltemperature_0to10cm_mean": 10.454,
        "soilmoisture_0to10cm": 0.251,
        "windspeed_mean": 3.67
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.7
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.2
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.33
      }
    },
    "2025-05-17": {
      "weather_conditions": {
        "temperature_mean": 10.349,
        "temperature_min": 5.757,
        "temperature_max": 14.625,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.796,
        "soiltemperature_0to10cm_mean": 10.938,
        "soilmoisture_0to10cm": 0.252,
        "windspeed_mean": 4.046
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.7
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-05-18": {
      "weather_conditions": {
        "temperature_mean": 9.737,
        "temperature_min": 6.79,
        "temperature_max": 13.663,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.777,
        "soiltemperature_0to10cm_mean": 10.855,
        "soilmoisture_0to10cm": 0.278,
        "windspeed_mean": 3.604
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.7
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.4
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.33
      }
    },
    "2025-05-19": {
      "weather_conditions": {
        "temperature_mean": 10.701,
        "temperature_min": 7.875,
        "temperature_max": 13.252,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.792,
        "soiltemperature_0to10cm_mean": 10.659,
        "soilmoisture_0to10cm": 0.292,
        "windspeed_mean": 4.224
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.7
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-05-20": {
      "weather_conditions": {
        "temperature_mean": 12.812,
        "temperature_min": 8.792,
        "temperature_max": 16.663,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.605,
        "soiltemperature_0to10cm_mean": 12.221,
        "soilmoisture_0to10cm": 0.285,
        "windspeed_mean": 0.401
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.7
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
    "2025-05-21": {
      "weather_conditions": {
        "temperature_mean": 14.581,
        "temperature_min": 8.249,
        "temperature_max": 19.523,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.601,
        "soiltemperature_0to10cm_mean": 13.588,
        "soilmoisture_0to10cm": 0.277,
        "windspeed_mean": 1.062
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "good",
          "moist_soil": "good",
          "light_rain_before": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.8
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
    "2025-05-22": {
      "weather_conditions": {
        "temperature_mean": 11.52,
        "temperature_min": 8.46,
        "temperature_max": 14.284,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.97,
        "soiltemperature_0to10cm_mean": 12.108,
        "soilmoisture_0to10cm": 0.309,
        "windspeed_mean": 1.536
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.7
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
    "2025-05-23": {
      "weather_conditions": {
        "temperature_mean": 9.914,
        "temperature_min": 5.275,
        "temperature_max": 14.248,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.791,
        "soiltemperature_0to10cm_mean": 11.259,
        "soilmoisture_0to10cm": 0.336,
        "windspeed_mean": 2.448
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.4
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.33
      }
    },
    "2025-05-24": {
      "weather_conditions": {
        "temperature_mean": 10.158,
        "temperature_min": 3.523,
        "temperature_max": 14.684,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.52,
        "soiltemperature_0to10cm_mean": 10.751,
        "soilmoisture_0to10cm": 0.31,
        "windspeed_mean": 1.751
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
    "2025-05-25": {
      "weather_conditions": {
        "temperature_mean": 11.609,
        "temperature_min": 4.952,
        "temperature_max": 16.937,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.554,
        "soiltemperature_0to10cm_mean": 11.633,
        "soilmoisture_0to10cm": 0.298,
        "windspeed_mean": 2.098
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "medium",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
    "2025-05-26": {
      "weather_conditions": {
        "temperature_mean": 13.756,
        "temperature_min": 10.864,
        "temperature_max": 17.315,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.662,
        "soiltemperature_0to10cm_mean": 13.236,
        "soilmoisture_0to10cm": 0.345,
        "windspeed_mean": 2.836
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "good",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.6
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.6
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.67
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
    "2025-05-27": {
      "weather_conditions": {
        "temperature_mean": 13.99,
        "temperature_min": 9.298,
        "temperature_max": 18.54,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.444,
        "soiltemperature_0to10cm_mean": 13.845,
        "soilmoisture_0to10cm": 0.322,
        "windspeed_mean": 2.303
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "good",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.6
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
    "2025-05-28": {
      "weather_conditions": {
        "temperature_mean": 13.548,
        "temperature_min": 9.995,
        "temperature_max": 16.984,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.815,
        "soiltemperature_0to10cm_mean": 13.047,
        "soilmoisture_0to10cm": 0.314,
        "windspeed_mean": 3.418
      },
      "third_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature": "good",
          "moist_soil": "good",
          "light_rain_before": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.6
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.6
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "late_insecticide": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
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
    }
  },
  "_images": {
    "zones": "images/zones.png",
    "history": "images/history.png",
    "hotspots": "images/hotspots.png",
    "evi": "images/evi.png",
    "rgb": "images/rgb.png"
  },
  "polygon_wkt": "POLYGON ((15.7663897 49.08571684, 15.76678323 49.08643335, 15.7677729 49.08828736, 15.76854034 49.08970901, 15.7691352 49.09076525, 15.76934902 49.09169115, 15.76973816 49.09349168, 15.76982561 49.09386935, 15.77000219 49.09453388, 15.77006886 49.09461512, 15.77014166 49.0946253, 15.77126971 49.09450846, 15.77142183 49.09452129, 15.77176889 49.09460735, 15.77205149 49.09468384, 15.77232058 49.09478915, 15.77273026 49.09500871, 15.77287244 49.09503072, 15.77299363 49.09500128, 15.77308864 49.09494895, 15.77313157 49.09486447, 15.77326102 49.09413604, 15.77321661 49.09401898, 15.77322736 49.09398388, 15.77327965 49.09394916, 15.77335999 49.09391664, 15.7735295 49.09387529, 15.77359103 49.09384992, 15.77363098 49.09382286, 15.7736787 49.0927763, 15.77366251 49.09204436, 15.77367052 49.09200027, 15.77372094 49.09198807, 15.77379488 49.0919814, 15.77446314 49.09197561, 15.7752873 49.09195248, 15.77537731 49.09192114, 15.77543499 49.09187678, 15.77544447 49.09182456, 15.77539595 49.09167941, 15.77523706 49.09136799, 15.77512804 49.09119118, 15.77498014 49.09095132, 15.77478921 49.09064165, 15.77476048 49.09060356, 15.77439788 49.09013919, 15.77431095 49.09003476, 15.7742133 49.08999541, 15.77410072 49.08997753, 15.77394822 49.08995924, 15.77295066 49.08957668, 15.77183744 49.08913001, 15.77159267 49.08900486, 15.77147714 49.08891974, 15.7707861 49.08813925, 15.76962183 49.08682175, 15.76902319 49.08614086, 15.76861425 49.08589417, 15.76790118 49.08565261, 15.76683824 49.08530474, 15.7663897 49.08571684))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
