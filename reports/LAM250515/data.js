// Field data for LAM250515 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAM250515",
  "metadata": {
    "field_area_ha": 25.86,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Martínkov"
    },
    "terrain": {
      "variability": 16.08,
      "mean_elevation": 561.69,
      "min_elevation": 551.732,
      "max_elevation": 567.812
    },
    "soil": {
      "bulk_density kg/dm³": 1.323,
      "cation_exchange_capacity cmol(c)/kg": 18.977,
      "clay_particles g/100g (%)": 19.261,
      "sand particles g/100g (%)": 32.839,
      "silt particles g/100g (%)": 47.899,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-03-17": {
      "min": 0.233,
      "max": 0.552,
      "median": 0.412,
      "mean": 0.413,
      "sd": 0.035
    },
    "2025-03-28": {
      "min": 0.224,
      "max": 0.618,
      "median": 0.497,
      "mean": 0.495,
      "sd": 0.04
    },
    "2025-04-11": {
      "min": 0.242,
      "max": 0.693,
      "median": 0.603,
      "mean": 0.591,
      "sd": 0.052
    },
    "2025-04-20": {
      "min": 0.291,
      "max": 0.726,
      "median": 0.643,
      "mean": 0.634,
      "sd": 0.044
    },
    "2025-04-29": {
      "min": 0.312,
      "max": 0.804,
      "median": 0.702,
      "mean": 0.696,
      "sd": 0.044
    },
    "2025-05-13": {
      "min": 0.406,
      "max": 0.787,
      "median": 0.686,
      "mean": 0.674,
      "sd": 0.046
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 25.755,
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
        "area_ha": 13.699,
        "area_percentage": 0.532
      },
      "high_vegetation": {
        "area_ha": 12.056,
        "area_percentage": 0.468
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
    "evi_median": 0.647,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.83,
          "percentage": 3.2
        },
        "EVI_statistics": {
          "mean": 0.518,
          "median": 0.526,
          "min": 0.41,
          "max": 0.55
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 5.58,
          "percentage": 21.68
        },
        "EVI_statistics": {
          "mean": 0.591,
          "median": 0.594,
          "min": 0.55,
          "max": 0.615
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 16.15,
          "percentage": 62.72
        },
        "EVI_statistics": {
          "mean": 0.651,
          "median": 0.653,
          "min": 0.615,
          "max": 0.679
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 3.19,
          "percentage": 12.39
        },
        "EVI_statistics": {
          "mean": 0.69,
          "median": 0.687,
          "min": 0.679,
          "max": 0.728
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
            "ha": 0.21,
            "area_percentage": 0.83,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.26,
            "area_percentage": 20.8,
            "zone_number": 2
          },
          "similar": {
            "ha": 14.91,
            "area_percentage": 58.96,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 4.69,
            "area_percentage": 18.54,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.22,
            "area_percentage": 0.87,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-05-15",
      "reference_image_date": "2025-04-29",
      "change_period": 16
    },
    "median_EVI_change": {
      "old_value": 0.702,
      "new_value": 0.647,
      "difference": -0.058
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.09,
          "percentage": 0.34,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 8.41,
          "percentage": 32.65,
          "zone_number": 2
        },
        "no_change": {
          "ha": 17.14,
          "percentage": 66.56,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.11,
          "percentage": 0.43,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.0,
          "percentage": 0.02,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 5.1,
          "percentage": 19.79,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.89,
          "percentage": 15.11,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 7.96,
          "percentage": 30.91,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.61,
          "percentage": 14.02,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 5.2,
          "percentage": 20.18,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.718902954036698 49.09581432475903)",
          "new_value": 0.625,
          "old_value": 0.729,
          "value_difference": -0.104,
          "area_ha": 0.391,
          "category": "major_decline",
          "location": "W",
          "id": 1
        },
        {
          "geometry": "POINT (15.720231505963303 49.09397090246988)",
          "new_value": 0.597,
          "old_value": 0.713,
          "value_difference": -0.116,
          "area_ha": 1.241,
          "category": "major_decline",
          "location": "SW",
          "id": 2
        },
        {
          "geometry": "POINT (15.721726126880734 49.098672965120485)",
          "new_value": 0.669,
          "old_value": 0.685,
          "value_difference": -0.016,
          "area_ha": 2.623,
          "category": "major_growth",
          "location": "N",
          "id": 3
        },
        {
          "geometry": "POINT (15.721684609633028 49.097257003072286)",
          "new_value": 0.678,
          "old_value": 0.695,
          "value_difference": -0.017,
          "area_ha": 0.277,
          "category": "major_growth",
          "location": "C",
          "id": 4
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
      "date": "2024-10-12",
      "day_since": 214
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-25",
      "day_since": 19
    },
    "beginning_of_heading": {
      "date": "2025-05-27",
      "day_since": -13
    },
    "beginning_of_ripenes": {
      "date": "2025-07-06",
      "day_since": -53
    },
    "harvest": {
      "date": "2025-07-26",
      "day_since": -73
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
  "polygon_wkt": "POLYGON ((15.71932294 49.09325389, 15.71900233 49.09334561, 15.71868234 49.09344192, 15.71849606 49.09351188, 15.71832131 49.09358793, 15.71785453 49.09378752, 15.71750276 49.09394942, 15.7173784 49.09403277, 15.71734162 49.09412187, 15.71731855 49.09417213, 15.71731068 49.09422242, 15.71730454 49.09426923, 15.71730871 49.09431971, 15.71735937 49.0944194, 15.71740886 49.09447409, 15.71758586 49.09462673, 15.7176143 49.09466412, 15.71769275 49.09498932, 15.71772879 49.0951711, 15.71772769 49.095281, 15.71769733 49.09546971, 15.71769823 49.09555196, 15.7177176 49.09563796, 15.71778768 49.09580375, 15.71789231 49.09597236, 15.71796688 49.09620767, 15.71799942 49.09630686, 15.71802981 49.09646504, 15.71803666 49.09658048, 15.71802038 49.09668257, 15.71794971 49.09678241, 15.71794959 49.09681561, 15.71795127 49.09684439, 15.71798282 49.09689961, 15.7187124 49.09734174, 15.71957696 49.09787039, 15.71992492 49.09815503, 15.72054878 49.098696, 15.72066397 49.09876757, 15.72073098 49.09880093, 15.72083007 49.09885493, 15.72145156 49.09912218, 15.72218576 49.09942186, 15.72237443 49.09948382, 15.72254048 49.09951864, 15.72266737 49.09954132, 15.72278975 49.09955096, 15.7229738 49.09956275, 15.72325836 49.09956796, 15.72468353 49.09952296, 15.7263553 49.09948289, 15.72087814 49.09291561, 15.72018542 49.09300823, 15.71993725 49.09306955, 15.71973228 49.09316479, 15.71932294 49.09325389), (15.71887806 49.09597622, 15.71899102 49.09588058, 15.71917374 49.09582634, 15.71935681 49.09581982, 15.71943874 49.0958442, 15.71946402 49.09588144, 15.71946819 49.09591851, 15.7194339 49.09594533, 15.71930607 49.09599796, 15.7190597 49.09607709, 15.71896412 49.09610243, 15.7189019 49.09609456, 15.71886587 49.0960678, 15.71885278 49.0960399, 15.71887806 49.09597622))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
