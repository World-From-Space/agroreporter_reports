// Field data for LAH250515 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAH250515",
  "metadata": {
    "field_area_ha": 20.96,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lesonice"
    },
    "terrain": {
      "variability": 10.845,
      "mean_elevation": 538.915,
      "min_elevation": 532.668,
      "max_elevation": 543.513
    },
    "soil": {
      "bulk_density kg/dm³": 1.334,
      "cation_exchange_capacity cmol(c)/kg": 19.774,
      "clay_particles g/100g (%)": 20.385,
      "sand particles g/100g (%)": 39.575,
      "silt particles g/100g (%)": 40.056,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-03-17": {
      "min": 0.175,
      "max": 0.435,
      "median": 0.329,
      "mean": 0.328,
      "sd": 0.031
    },
    "2025-03-28": {
      "min": 0.214,
      "max": 0.522,
      "median": 0.404,
      "mean": 0.4,
      "sd": 0.038
    },
    "2025-04-11": {
      "min": 0.302,
      "max": 0.684,
      "median": 0.532,
      "mean": 0.527,
      "sd": 0.05
    },
    "2025-04-22": {
      "min": 0.279,
      "max": 0.723,
      "median": 0.558,
      "mean": 0.552,
      "sd": 0.057
    },
    "2025-05-03": {
      "min": 0.384,
      "max": 0.751,
      "median": 0.635,
      "mean": 0.631,
      "sd": 0.043
    },
    "2025-05-13": {
      "min": 0.399,
      "max": 0.795,
      "median": 0.656,
      "mean": 0.653,
      "sd": 0.049
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 21.011,
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
        "area_ha": 0.048,
        "area_percentage": 0.002
      },
      "medium vegetation": {
        "area_ha": 17.096,
        "area_percentage": 0.814
      },
      "high_vegetation": {
        "area_ha": 3.866,
        "area_percentage": 0.184
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
    "evi_median": 0.617,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.91,
          "percentage": 4.35
        },
        "EVI_statistics": {
          "mean": 0.471,
          "median": 0.477,
          "min": 0.363,
          "max": 0.524
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.73,
          "percentage": 17.75
        },
        "EVI_statistics": {
          "mean": 0.568,
          "median": 0.572,
          "min": 0.524,
          "max": 0.586
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 12.16,
          "percentage": 57.89
        },
        "EVI_statistics": {
          "mean": 0.617,
          "median": 0.618,
          "min": 0.586,
          "max": 0.648
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.06,
          "percentage": 19.3
        },
        "EVI_statistics": {
          "mean": 0.667,
          "median": 0.663,
          "min": 0.648,
          "max": 0.709
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.15,
          "percentage": 0.7
        },
        "EVI_statistics": {
          "mean": 0.72,
          "median": 0.717,
          "min": 0.709,
          "max": 0.751
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.84,
            "area_percentage": 4.2,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 3.1,
            "area_percentage": 15.52,
            "zone_number": 2
          },
          "similar": {
            "ha": 10.42,
            "area_percentage": 52.15,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 4.76,
            "area_percentage": 23.82,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.86,
            "area_percentage": 4.3,
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
      "old_value": 0.635,
      "new_value": 0.617,
      "difference": -0.02
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
          "ha": 0.22,
          "percentage": 1.06,
          "zone_number": 2
        },
        "no_change": {
          "ha": 20.78,
          "percentage": 98.89,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.01,
          "percentage": 0.05,
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
          "ha": 1.94,
          "percentage": 9.23,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.48,
          "percentage": 16.54,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 10.8,
          "percentage": 51.42,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.55,
          "percentage": 12.14,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.24,
          "percentage": 10.67,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.737516773458083 49.09700008868056)",
          "new_value": 0.636,
          "old_value": 0.607,
          "value_difference": 0.029,
          "area_ha": 1.313,
          "category": "major_growth",
          "location": "NW",
          "id": 1
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 1146.717,
      "historical_average": 1138.33
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
          "temperature_mean": 10.478,
          "temperature_min": 5.939,
          "temperature_max": 14.702,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.452,
          "soiltemperature_0to10cm_mean": 11.241,
          "soilmoisture_0to10cm": 0.289,
          "windspeed_mean": 1.972
        },
        {
          "time": "2025-05-12 00:00:00",
          "temperature_mean": 9.694,
          "temperature_min": 2.923,
          "temperature_max": 13.963,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.342,
          "soiltemperature_0to10cm_mean": 10.554,
          "soilmoisture_0to10cm": 0.282,
          "windspeed_mean": 2.494
        },
        {
          "time": "2025-05-13 00:00:00",
          "temperature_mean": 10.883,
          "temperature_min": 5.773,
          "temperature_max": 16.048,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.194,
          "soiltemperature_0to10cm_mean": 11.451,
          "soilmoisture_0to10cm": 0.274,
          "windspeed_mean": 2.27
        },
        {
          "time": "2025-05-14 00:00:00",
          "temperature_mean": 13.589,
          "temperature_min": 5.467,
          "temperature_max": 19.19,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.786,
          "soiltemperature_0to10cm_mean": 12.324,
          "soilmoisture_0to10cm": 0.266,
          "windspeed_mean": 1.713
        },
        {
          "time": "2025-05-15 00:00:00",
          "temperature_mean": 10.284,
          "temperature_min": 6.067,
          "temperature_max": 12.287,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.622,
          "soiltemperature_0to10cm_mean": 11.677,
          "soilmoisture_0to10cm": 0.265,
          "windspeed_mean": 3.65
        },
        {
          "time": "2025-05-16 00:00:00",
          "temperature_mean": 8.757,
          "temperature_min": 5.293,
          "temperature_max": 13.534,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.499,
          "soiltemperature_0to10cm_mean": 10.445,
          "soilmoisture_0to10cm": 0.268,
          "windspeed_mean": 3.618
        },
        {
          "time": "2025-05-17 00:00:00",
          "temperature_mean": 10.226,
          "temperature_min": 5.593,
          "temperature_max": 14.474,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.796,
          "soiltemperature_0to10cm_mean": 10.856,
          "soilmoisture_0to10cm": 0.272,
          "windspeed_mean": 3.992
        },
        {
          "time": "2025-05-18 00:00:00",
          "temperature_mean": 9.672,
          "temperature_min": 6.817,
          "temperature_max": 13.497,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.777,
          "soiltemperature_0to10cm_mean": 10.801,
          "soilmoisture_0to10cm": 0.301,
          "windspeed_mean": 3.618
        },
        {
          "time": "2025-05-19 00:00:00",
          "temperature_mean": 10.643,
          "temperature_min": 7.856,
          "temperature_max": 13.233,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.792,
          "soiltemperature_0to10cm_mean": 10.658,
          "soilmoisture_0to10cm": 0.312,
          "windspeed_mean": 4.145
        },
        {
          "time": "2025-05-20 00:00:00",
          "temperature_mean": 12.77,
          "temperature_min": 8.686,
          "temperature_max": 16.594,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.605,
          "soiltemperature_0to10cm_mean": 12.233,
          "soilmoisture_0to10cm": 0.302,
          "windspeed_mean": 0.41
        },
        {
          "time": "2025-05-21 00:00:00",
          "temperature_mean": 14.501,
          "temperature_min": 7.868,
          "temperature_max": 19.529,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.601,
          "soiltemperature_0to10cm_mean": 13.632,
          "soilmoisture_0to10cm": 0.293,
          "windspeed_mean": 1.0
        },
        {
          "time": "2025-05-22 00:00:00",
          "temperature_mean": 11.444,
          "temperature_min": 8.321,
          "temperature_max": 14.18,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.97,
          "soiltemperature_0to10cm_mean": 12.082,
          "soilmoisture_0to10cm": 0.323,
          "windspeed_mean": 1.567
        },
        {
          "time": "2025-05-23 00:00:00",
          "temperature_mean": 9.818,
          "temperature_min": 5.213,
          "temperature_max": 14.078,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.791,
          "soiltemperature_0to10cm_mean": 11.249,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 2.354
        },
        {
          "time": "2025-05-24 00:00:00",
          "temperature_mean": 10.046,
          "temperature_min": 3.331,
          "temperature_max": 14.553,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.52,
          "soiltemperature_0to10cm_mean": 10.749,
          "soilmoisture_0to10cm": 0.32,
          "windspeed_mean": 1.722
        },
        {
          "time": "2025-05-25 00:00:00",
          "temperature_mean": 11.415,
          "temperature_min": 4.758,
          "temperature_max": 16.746,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.554,
          "soiltemperature_0to10cm_mean": 11.533,
          "soilmoisture_0to10cm": 0.309,
          "windspeed_mean": 2.158
        },
        {
          "time": "2025-05-26 00:00:00",
          "temperature_mean": 13.646,
          "temperature_min": 10.798,
          "temperature_max": 17.152,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.662,
          "soiltemperature_0to10cm_mean": 13.091,
          "soilmoisture_0to10cm": 0.353,
          "windspeed_mean": 2.775
        },
        {
          "time": "2025-05-27 00:00:00",
          "temperature_mean": 13.915,
          "temperature_min": 9.216,
          "temperature_max": 18.357,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.444,
          "soiltemperature_0to10cm_mean": 13.796,
          "soilmoisture_0to10cm": 0.333,
          "windspeed_mean": 2.309
        },
        {
          "time": "2025-05-28 00:00:00",
          "temperature_mean": 13.445,
          "temperature_min": 10.18,
          "temperature_max": 16.716,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.815,
          "soiltemperature_0to10cm_mean": 12.986,
          "soilmoisture_0to10cm": 0.326,
          "windspeed_mean": 3.429
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
      "date": "2024-10-10",
      "day_since": 216
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-25",
      "day_since": 19
    },
    "beginning_of_heading": {
      "date": "2025-05-29",
      "day_since": -15
    },
    "beginning_of_ripenes": {
      "date": "2025-07-08",
      "day_since": -55
    },
    "harvest": {
      "date": "2025-07-27",
      "day_since": -74
    }
  },
  "timing_of_field_operations": {
    "2025-05-11": {
      "weather_conditions": {
        "temperature_mean": 10.478,
        "temperature_min": 5.939,
        "temperature_max": 14.702,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.452,
        "soiltemperature_0to10cm_mean": 11.241,
        "soilmoisture_0to10cm": 0.289,
        "windspeed_mean": 1.972
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
      }
    },
    "2025-05-12": {
      "weather_conditions": {
        "temperature_mean": 9.694,
        "temperature_min": 2.923,
        "temperature_max": 13.963,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.342,
        "soiltemperature_0to10cm_mean": 10.554,
        "soilmoisture_0to10cm": 0.282,
        "windspeed_mean": 2.494
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
      }
    },
    "2025-05-13": {
      "weather_conditions": {
        "temperature_mean": 10.883,
        "temperature_min": 5.773,
        "temperature_max": 16.048,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.194,
        "soiltemperature_0to10cm_mean": 11.451,
        "soilmoisture_0to10cm": 0.274,
        "windspeed_mean": 2.27
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
      }
    },
    "2025-05-14": {
      "weather_conditions": {
        "temperature_mean": 13.589,
        "temperature_min": 5.467,
        "temperature_max": 19.19,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.786,
        "soiltemperature_0to10cm_mean": 12.324,
        "soilmoisture_0to10cm": 0.266,
        "windspeed_mean": 1.713
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
      }
    },
    "2025-05-15": {
      "weather_conditions": {
        "temperature_mean": 10.284,
        "temperature_min": 6.067,
        "temperature_max": 12.287,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.622,
        "soiltemperature_0to10cm_mean": 11.677,
        "soilmoisture_0to10cm": 0.265,
        "windspeed_mean": 3.65
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
      }
    },
    "2025-05-16": {
      "weather_conditions": {
        "temperature_mean": 8.757,
        "temperature_min": 5.293,
        "temperature_max": 13.534,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.499,
        "soiltemperature_0to10cm_mean": 10.445,
        "soilmoisture_0to10cm": 0.268,
        "windspeed_mean": 3.618
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
      }
    },
    "2025-05-17": {
      "weather_conditions": {
        "temperature_mean": 10.226,
        "temperature_min": 5.593,
        "temperature_max": 14.474,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.796,
        "soiltemperature_0to10cm_mean": 10.856,
        "soilmoisture_0to10cm": 0.272,
        "windspeed_mean": 3.992
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
      }
    },
    "2025-05-18": {
      "weather_conditions": {
        "temperature_mean": 9.672,
        "temperature_min": 6.817,
        "temperature_max": 13.497,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.777,
        "soiltemperature_0to10cm_mean": 10.801,
        "soilmoisture_0to10cm": 0.301,
        "windspeed_mean": 3.618
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
      }
    },
    "2025-05-19": {
      "weather_conditions": {
        "temperature_mean": 10.643,
        "temperature_min": 7.856,
        "temperature_max": 13.233,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.792,
        "soiltemperature_0to10cm_mean": 10.658,
        "soilmoisture_0to10cm": 0.312,
        "windspeed_mean": 4.145
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
      }
    },
    "2025-05-20": {
      "weather_conditions": {
        "temperature_mean": 12.77,
        "temperature_min": 8.686,
        "temperature_max": 16.594,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.605,
        "soiltemperature_0to10cm_mean": 12.233,
        "soilmoisture_0to10cm": 0.302,
        "windspeed_mean": 0.41
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
      }
    },
    "2025-05-21": {
      "weather_conditions": {
        "temperature_mean": 14.501,
        "temperature_min": 7.868,
        "temperature_max": 19.529,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.601,
        "soiltemperature_0to10cm_mean": 13.632,
        "soilmoisture_0to10cm": 0.293,
        "windspeed_mean": 1.0
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
      }
    },
    "2025-05-22": {
      "weather_conditions": {
        "temperature_mean": 11.444,
        "temperature_min": 8.321,
        "temperature_max": 14.18,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.97,
        "soiltemperature_0to10cm_mean": 12.082,
        "soilmoisture_0to10cm": 0.323,
        "windspeed_mean": 1.567
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
      }
    },
    "2025-05-23": {
      "weather_conditions": {
        "temperature_mean": 9.818,
        "temperature_min": 5.213,
        "temperature_max": 14.078,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.791,
        "soiltemperature_0to10cm_mean": 11.249,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 2.354
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
      }
    },
    "2025-05-24": {
      "weather_conditions": {
        "temperature_mean": 10.046,
        "temperature_min": 3.331,
        "temperature_max": 14.553,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.52,
        "soiltemperature_0to10cm_mean": 10.749,
        "soilmoisture_0to10cm": 0.32,
        "windspeed_mean": 1.722
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
      }
    },
    "2025-05-25": {
      "weather_conditions": {
        "temperature_mean": 11.415,
        "temperature_min": 4.758,
        "temperature_max": 16.746,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.554,
        "soiltemperature_0to10cm_mean": 11.533,
        "soilmoisture_0to10cm": 0.309,
        "windspeed_mean": 2.158
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
      }
    },
    "2025-05-26": {
      "weather_conditions": {
        "temperature_mean": 13.646,
        "temperature_min": 10.798,
        "temperature_max": 17.152,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.662,
        "soiltemperature_0to10cm_mean": 13.091,
        "soilmoisture_0to10cm": 0.353,
        "windspeed_mean": 2.775
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
      }
    },
    "2025-05-27": {
      "weather_conditions": {
        "temperature_mean": 13.915,
        "temperature_min": 9.216,
        "temperature_max": 18.357,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.444,
        "soiltemperature_0to10cm_mean": 13.796,
        "soilmoisture_0to10cm": 0.333,
        "windspeed_mean": 2.309
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
      }
    },
    "2025-05-28": {
      "weather_conditions": {
        "temperature_mean": 13.445,
        "temperature_min": 10.18,
        "temperature_max": 16.716,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.815,
        "soiltemperature_0to10cm_mean": 12.986,
        "soilmoisture_0to10cm": 0.326,
        "windspeed_mean": 3.429
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
  "polygon_wkt": "POLYGON ((15.74656123 49.09105737, 15.74527726 49.09188699, 15.74524083 49.09187731, 15.74475229 49.09147901, 15.74450925 49.09128865, 15.74421604 49.09148183, 15.74380554 49.09175228, 15.74319148 49.09214779, 15.74153282 49.09324274, 15.73935076 49.0946898, 15.73769565 49.09577845, 15.73751776 49.09589303, 15.73693981 49.09626529, 15.73674079 49.09639347, 15.73671591 49.09649205, 15.73666774 49.09652177, 15.73652001 49.09657331, 15.73578661 49.0970348, 15.73518211 49.09745276, 15.73513444 49.09749313, 15.73517488 49.09753091, 15.73522514 49.09756967, 15.73543151 49.09764778, 15.73553449 49.09765463, 15.73562933 49.09764129, 15.73707989 49.09724587, 15.73762284 49.09709533, 15.73762478 49.0970948, 15.73879024 49.09678689, 15.73959905 49.09653545, 15.739709 49.09647471, 15.73974596 49.09644021, 15.73995339 49.09634548, 15.74002054 49.09631001, 15.74069057 49.09612181, 15.74099229 49.09601057, 15.74145572 49.09588942, 15.74173511 49.0958018, 15.74205561 49.09569296, 15.74233851 49.09554853, 15.74258815 49.0953988, 15.74309073 49.09496683, 15.74332368 49.09461528, 15.74340045 49.0945724, 15.74350435 49.09452442, 15.74370577 49.09452104, 15.74393476 49.09450325, 15.7440976 49.09448538, 15.74426319 49.09445239, 15.74440576 49.09441759, 15.74454249 49.0943721, 15.74483744 49.09421477, 15.74561845 49.09368416, 15.74578279 49.09357777, 15.74611506 49.0933512, 15.74631266 49.09319012, 15.74649533 49.09296719, 15.746596 49.09287639, 15.74673333 49.09280386, 15.7470317 49.09264979, 15.74734517 49.09244788, 15.74742355 49.09235947, 15.74746172 49.09227812, 15.74746292 49.09218284, 15.74741053 49.09205674, 15.74742529 49.09197577, 15.74748962 49.09188606, 15.74753139 49.09182406, 15.7476123 49.09177051, 15.74764833 49.09175298, 15.74772529 49.0917111, 15.74782281 49.09165646, 15.74790156 49.09161472, 15.74800773 49.09157274, 15.74825433 49.09144036, 15.74868066 49.09120581, 15.74879833 49.09111537, 15.74888513 49.09100206, 15.74897269 49.09086325, 15.74895001 49.09076459, 15.74864009 49.09040369, 15.74825946 49.08996043, 15.74672311 49.09095277, 15.74656123 49.09105737))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
