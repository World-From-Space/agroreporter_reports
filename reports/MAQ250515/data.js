// Field data for MAQ250515 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAQ250515",
  "metadata": {
    "field_area_ha": 5.425,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lhánice"
    },
    "terrain": {
      "variability": 5.198,
      "mean_elevation": 418.281,
      "min_elevation": 414.81,
      "max_elevation": 420.008
    },
    "soil": {
      "bulk_density kg/dm³": 1.32,
      "cation_exchange_capacity cmol(c)/kg": 19.752,
      "clay_particles g/100g (%)": 24.341,
      "sand particles g/100g (%)": 21.354,
      "silt particles g/100g (%)": 54.255,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-03-17": {
      "min": 0.253,
      "max": 0.489,
      "median": 0.427,
      "mean": 0.42,
      "sd": 0.033
    },
    "2025-04-03": {
      "min": 0.295,
      "max": 0.643,
      "median": 0.564,
      "mean": 0.551,
      "sd": 0.049
    },
    "2025-04-11": {
      "min": 0.342,
      "max": 0.747,
      "median": 0.665,
      "mean": 0.652,
      "sd": 0.05
    },
    "2025-04-20": {
      "min": 0.368,
      "max": 0.756,
      "median": 0.663,
      "mean": 0.655,
      "sd": 0.045
    },
    "2025-04-29": {
      "min": 0.397,
      "max": 0.892,
      "median": 0.785,
      "mean": 0.779,
      "sd": 0.051
    },
    "2025-05-14": {
      "min": 0.404,
      "max": 0.801,
      "median": 0.663,
      "mean": 0.666,
      "sd": 0.055
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 5.404,
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
        "area_ha": 0.001,
        "area_percentage": 0.0
      },
      "medium vegetation": {
        "area_ha": 0.564,
        "area_percentage": 0.104
      },
      "high_vegetation": {
        "area_ha": 4.696,
        "area_percentage": 0.869
      },
      "very_high_vegetation": {
        "area_ha": 0.143,
        "area_percentage": 0.026
      }
    }
  },
  "growth_variability": {
    "variability_category": "very_high",
    "number_of_zones": 5,
    "evi_median": 0.726,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.2,
          "percentage": 3.71
        },
        "EVI_statistics": {
          "mean": 0.586,
          "median": 0.598,
          "min": 0.398,
          "max": 0.617
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 1.24,
          "percentage": 23.03
        },
        "EVI_statistics": {
          "mean": 0.662,
          "median": 0.665,
          "min": 0.617,
          "max": 0.69
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 2.42,
          "percentage": 44.86
        },
        "EVI_statistics": {
          "mean": 0.725,
          "median": 0.725,
          "min": 0.69,
          "max": 0.762
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 1.26,
          "percentage": 23.33
        },
        "EVI_statistics": {
          "mean": 0.794,
          "median": 0.792,
          "min": 0.762,
          "max": 0.835
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.27,
          "percentage": 5.06
        },
        "EVI_statistics": {
          "mean": 0.853,
          "median": 0.851,
          "min": 0.835,
          "max": 0.931
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.25,
            "area_percentage": 4.78,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.88,
            "area_percentage": 16.83,
            "zone_number": 2
          },
          "similar": {
            "ha": 2.66,
            "area_percentage": 50.86,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 1.06,
            "area_percentage": 20.27,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.38,
            "area_percentage": 7.27,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-05-15",
      "reference_image_date": "2025-04-28",
      "change_period": 17
    },
    "median_EVI_change": {
      "old_value": 0.665,
      "new_value": 0.726,
      "difference": 0.066
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
          "percentage": 0.03,
          "zone_number": 2
        },
        "no_change": {
          "ha": 3.16,
          "percentage": 58.48,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 2.14,
          "percentage": 39.58,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.1,
          "percentage": 1.9,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 0.51,
          "percentage": 9.49,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.76,
          "percentage": 13.99,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 2.87,
          "percentage": 53.17,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.75,
          "percentage": 13.84,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.51,
          "percentage": 9.51,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.21719231210227 49.12597725865546)",
          "new_value": 0.648,
          "old_value": 0.667,
          "value_difference": -0.019,
          "area_ha": 0.182,
          "category": "major_decline",
          "location": "C",
          "id": 1
        },
        {
          "geometry": "POINT (16.216606267329546 49.12568455697479)",
          "new_value": 0.698,
          "old_value": 0.68,
          "value_difference": 0.018,
          "area_ha": 0.072,
          "category": "major_decline",
          "location": "W",
          "id": 2
        },
        {
          "geometry": "POINT (16.216396965624998 49.12528541831933)",
          "new_value": 0.689,
          "old_value": 0.678,
          "value_difference": 0.011,
          "area_ha": 0.065,
          "category": "major_decline",
          "location": "W",
          "id": 3
        },
        {
          "geometry": "POINT (16.216396965624998 49.126190132605046)",
          "new_value": 0.761,
          "old_value": 0.641,
          "value_difference": 0.12,
          "area_ha": 0.09,
          "category": "major_growth",
          "location": "NW",
          "id": 4
        },
        {
          "geometry": "POINT (16.218238820625 49.126190132605046)",
          "new_value": 0.739,
          "old_value": 0.609,
          "value_difference": 0.13,
          "area_ha": 0.055,
          "category": "major_growth",
          "location": "NE",
          "id": 5
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 1090.545,
      "historical_average": 1087.333
    },
    "accumulated_precipitation_since_seeding": {
      "current": 195.818,
      "historical_mean": 312.101
    },
    "precipitation_summary": {
      "last_3_days": 0.662,
      "last_7_days": 0.937,
      "last_14_days": 5.509,
      "last_30_days": 41.076
    },
    "standardized_precipitation_index": {
      "1_month": -0.721,
      "3_month": -1.899,
      "6_month": -1.804
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-05-11 00:00:00",
          "temperature_mean": 11.218,
          "temperature_min": 7.053,
          "temperature_max": 15.334,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.364,
          "soiltemperature_0to10cm_mean": 12.049,
          "soilmoisture_0to10cm": 0.271,
          "windspeed_mean": 2.299
        },
        {
          "time": "2025-05-12 00:00:00",
          "temperature_mean": 10.445,
          "temperature_min": 4.421,
          "temperature_max": 14.341,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.408,
          "soiltemperature_0to10cm_mean": 11.137,
          "soilmoisture_0to10cm": 0.264,
          "windspeed_mean": 2.642
        },
        {
          "time": "2025-05-13 00:00:00",
          "temperature_mean": 11.458,
          "temperature_min": 6.591,
          "temperature_max": 16.17,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.357,
          "soiltemperature_0to10cm_mean": 12.029,
          "soilmoisture_0to10cm": 0.257,
          "windspeed_mean": 2.349
        },
        {
          "time": "2025-05-14 00:00:00",
          "temperature_mean": 14.561,
          "temperature_min": 6.889,
          "temperature_max": 20.192,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.814,
          "soiltemperature_0to10cm_mean": 12.982,
          "soilmoisture_0to10cm": 0.249,
          "windspeed_mean": 1.826
        },
        {
          "time": "2025-05-15 00:00:00",
          "temperature_mean": 11.037,
          "temperature_min": 6.404,
          "temperature_max": 13.374,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.627,
          "soiltemperature_0to10cm_mean": 12.424,
          "soilmoisture_0to10cm": 0.245,
          "windspeed_mean": 3.625
        },
        {
          "time": "2025-05-16 00:00:00",
          "temperature_mean": 9.618,
          "temperature_min": 5.678,
          "temperature_max": 14.477,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.545,
          "soiltemperature_0to10cm_mean": 11.065,
          "soilmoisture_0to10cm": 0.246,
          "windspeed_mean": 3.53
        },
        {
          "time": "2025-05-17 00:00:00",
          "temperature_mean": 11.191,
          "temperature_min": 6.757,
          "temperature_max": 15.435,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.892,
          "soiltemperature_0to10cm_mean": 11.725,
          "soilmoisture_0to10cm": 0.249,
          "windspeed_mean": 4.078
        },
        {
          "time": "2025-05-18 00:00:00",
          "temperature_mean": 10.44,
          "temperature_min": 7.096,
          "temperature_max": 14.565,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.87,
          "soiltemperature_0to10cm_mean": 11.511,
          "soilmoisture_0to10cm": 0.269,
          "windspeed_mean": 3.382
        },
        {
          "time": "2025-05-19 00:00:00",
          "temperature_mean": 11.392,
          "temperature_min": 8.389,
          "temperature_max": 13.795,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.953,
          "soiltemperature_0to10cm_mean": 11.316,
          "soilmoisture_0to10cm": 0.279,
          "windspeed_mean": 4.305
        },
        {
          "time": "2025-05-20 00:00:00",
          "temperature_mean": 13.525,
          "temperature_min": 9.653,
          "temperature_max": 17.303,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.675,
          "soiltemperature_0to10cm_mean": 12.961,
          "soilmoisture_0to10cm": 0.273,
          "windspeed_mean": 0.522
        },
        {
          "time": "2025-05-21 00:00:00",
          "temperature_mean": 15.21,
          "temperature_min": 8.969,
          "temperature_max": 20.056,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.487,
          "soiltemperature_0to10cm_mean": 14.246,
          "soilmoisture_0to10cm": 0.267,
          "windspeed_mean": 1.225
        },
        {
          "time": "2025-05-22 00:00:00",
          "temperature_mean": 12.696,
          "temperature_min": 9.499,
          "temperature_max": 15.612,
          "precipitation_sum": 9.0,
          "totalcloudcover_mean": 0.95,
          "soiltemperature_0to10cm_mean": 13.026,
          "soilmoisture_0to10cm": 0.289,
          "windspeed_mean": 1.116
        },
        {
          "time": "2025-05-23 00:00:00",
          "temperature_mean": 10.895,
          "temperature_min": 6.24,
          "temperature_max": 15.035,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.845,
          "soiltemperature_0to10cm_mean": 12.124,
          "soilmoisture_0to10cm": 0.321,
          "windspeed_mean": 2.811
        },
        {
          "time": "2025-05-24 00:00:00",
          "temperature_mean": 11.122,
          "temperature_min": 6.116,
          "temperature_max": 15.354,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.406,
          "soiltemperature_0to10cm_mean": 11.913,
          "soilmoisture_0to10cm": 0.298,
          "windspeed_mean": 1.907
        },
        {
          "time": "2025-05-25 00:00:00",
          "temperature_mean": 13.227,
          "temperature_min": 8.605,
          "temperature_max": 17.992,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.514,
          "soiltemperature_0to10cm_mean": 12.74,
          "soilmoisture_0to10cm": 0.286,
          "windspeed_mean": 1.579
        },
        {
          "time": "2025-05-26 00:00:00",
          "temperature_mean": 14.56,
          "temperature_min": 11.296,
          "temperature_max": 18.38,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.693,
          "soiltemperature_0to10cm_mean": 14.239,
          "soilmoisture_0to10cm": 0.325,
          "windspeed_mean": 2.783
        },
        {
          "time": "2025-05-27 00:00:00",
          "temperature_mean": 14.638,
          "temperature_min": 9.72,
          "temperature_max": 18.982,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.544,
          "soiltemperature_0to10cm_mean": 14.787,
          "soilmoisture_0to10cm": 0.307,
          "windspeed_mean": 2.008
        },
        {
          "time": "2025-05-28 00:00:00",
          "temperature_mean": 14.446,
          "temperature_min": 10.684,
          "temperature_max": 18.402,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.842,
          "soiltemperature_0to10cm_mean": 14.112,
          "soilmoisture_0to10cm": 0.297,
          "windspeed_mean": 3.23
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-10-14",
      "day_since": 213
    },
    "crop_emergence": {
      "date": "2024-10-27",
      "day_since": 199
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-26",
      "day_since": 18
    },
    "beginning_of_heading": {
      "date": "2025-05-28",
      "day_since": -14
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
        "temperature_mean": 11.218,
        "temperature_min": 7.053,
        "temperature_max": 15.334,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.364,
        "soiltemperature_0to10cm_mean": 12.049,
        "soilmoisture_0to10cm": 0.271,
        "windspeed_mean": 2.299
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
          "precipitation": "good",
          "cloudy_weather": "bad"
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
        "temperature_mean": 10.445,
        "temperature_min": 4.421,
        "temperature_max": 14.341,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.408,
        "soiltemperature_0to10cm_mean": 11.137,
        "soilmoisture_0to10cm": 0.264,
        "windspeed_mean": 2.642
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
    "2025-05-13": {
      "weather_conditions": {
        "temperature_mean": 11.458,
        "temperature_min": 6.591,
        "temperature_max": 16.17,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.357,
        "soiltemperature_0to10cm_mean": 12.029,
        "soilmoisture_0to10cm": 0.257,
        "windspeed_mean": 2.349
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
          "precipitation": "good",
          "cloudy_weather": "bad"
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
        "temperature_mean": 14.561,
        "temperature_min": 6.889,
        "temperature_max": 20.192,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.814,
        "soiltemperature_0to10cm_mean": 12.982,
        "soilmoisture_0to10cm": 0.249,
        "windspeed_mean": 1.826
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
          "day_air_temperature_max": "bad",
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
        "temperature_mean": 11.037,
        "temperature_min": 6.404,
        "temperature_max": 13.374,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.627,
        "soiltemperature_0to10cm_mean": 12.424,
        "soilmoisture_0to10cm": 0.245,
        "windspeed_mean": 3.625
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
    "2025-05-16": {
      "weather_conditions": {
        "temperature_mean": 9.618,
        "temperature_min": 5.678,
        "temperature_max": 14.477,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.545,
        "soiltemperature_0to10cm_mean": 11.065,
        "soilmoisture_0to10cm": 0.246,
        "windspeed_mean": 3.53
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
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.3
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
        "temperature_mean": 11.191,
        "temperature_min": 6.757,
        "temperature_max": 15.435,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.892,
        "soiltemperature_0to10cm_mean": 11.725,
        "soilmoisture_0to10cm": 0.249,
        "windspeed_mean": 4.078
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
          "cloudy_weather": "good"
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
    "2025-05-18": {
      "weather_conditions": {
        "temperature_mean": 10.44,
        "temperature_min": 7.096,
        "temperature_max": 14.565,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.87,
        "soiltemperature_0to10cm_mean": 11.511,
        "soilmoisture_0to10cm": 0.269,
        "windspeed_mean": 3.382
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
    "2025-05-19": {
      "weather_conditions": {
        "temperature_mean": 11.392,
        "temperature_min": 8.389,
        "temperature_max": 13.795,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.953,
        "soiltemperature_0to10cm_mean": 11.316,
        "soilmoisture_0to10cm": 0.279,
        "windspeed_mean": 4.305
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
          "cloudy_weather": "good"
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
        "temperature_mean": 13.525,
        "temperature_min": 9.653,
        "temperature_max": 17.303,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.675,
        "soiltemperature_0to10cm_mean": 12.961,
        "soilmoisture_0to10cm": 0.273,
        "windspeed_mean": 0.522
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
    "2025-05-21": {
      "weather_conditions": {
        "temperature_mean": 15.21,
        "temperature_min": 8.969,
        "temperature_max": 20.056,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.487,
        "soiltemperature_0to10cm_mean": 14.246,
        "soilmoisture_0to10cm": 0.267,
        "windspeed_mean": 1.225
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
          "day_air_temperature_max": "bad",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.3
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
        "temperature_mean": 12.696,
        "temperature_min": 9.499,
        "temperature_max": 15.612,
        "precipitation_sum": 9.0,
        "totalcloudcover_mean": 0.95,
        "soiltemperature_0to10cm_mean": 13.026,
        "soilmoisture_0to10cm": 0.289,
        "windspeed_mean": 1.116
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
        "temperature_mean": 10.895,
        "temperature_min": 6.24,
        "temperature_max": 15.035,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.845,
        "soiltemperature_0to10cm_mean": 12.124,
        "soilmoisture_0to10cm": 0.321,
        "windspeed_mean": 2.811
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
    "2025-05-24": {
      "weather_conditions": {
        "temperature_mean": 11.122,
        "temperature_min": 6.116,
        "temperature_max": 15.354,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.406,
        "soiltemperature_0to10cm_mean": 11.913,
        "soilmoisture_0to10cm": 0.298,
        "windspeed_mean": 1.907
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
    "2025-05-25": {
      "weather_conditions": {
        "temperature_mean": 13.227,
        "temperature_min": 8.605,
        "temperature_max": 17.992,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.514,
        "soiltemperature_0to10cm_mean": 12.74,
        "soilmoisture_0to10cm": 0.286,
        "windspeed_mean": 1.579
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
    "2025-05-26": {
      "weather_conditions": {
        "temperature_mean": 14.56,
        "temperature_min": 11.296,
        "temperature_max": 18.38,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.693,
        "soiltemperature_0to10cm_mean": 14.239,
        "soilmoisture_0to10cm": 0.325,
        "windspeed_mean": 2.783
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
        "temperature_mean": 14.638,
        "temperature_min": 9.72,
        "temperature_max": 18.982,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.544,
        "soiltemperature_0to10cm_mean": 14.787,
        "soilmoisture_0to10cm": 0.307,
        "windspeed_mean": 2.008
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
        "temperature_mean": 14.446,
        "temperature_min": 10.684,
        "temperature_max": 18.402,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.842,
        "soiltemperature_0to10cm_mean": 14.112,
        "soilmoisture_0to10cm": 0.297,
        "windspeed_mean": 3.23
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
  "polygon_wkt": "POLYGON ((16.21571123 49.12461791, 16.21586565 49.12504119, 16.21595902 49.12530697, 16.21621375 49.1260436, 16.21646778 49.12676842, 16.21661007 49.12715821, 16.21666468 49.12716137, 16.21757486 49.12664038, 16.21798092 49.12641908, 16.21937769 49.12566535, 16.21938524 49.1256593, 16.21929608 49.12558543, 16.21938998 49.12553046, 16.21898185 49.12521055, 16.21877139 49.12499513, 16.21868847 49.1248412, 16.21868699 49.12483835, 16.21857322 49.12458693, 16.21850253 49.12442476, 16.2184035 49.12420938, 16.21834028 49.12409248, 16.21831528 49.12404409, 16.21825791 49.12400606, 16.21820562 49.12399487, 16.21813469 49.12399507, 16.21807136 49.1240077, 16.21744351 49.12415805, 16.21700097 49.12426562, 16.2164673 49.12439378, 16.21608931 49.12448973, 16.21585881 49.12454465, 16.21574997 49.12457485, 16.21570627 49.12459436, 16.21571123 49.12461791))"
};
