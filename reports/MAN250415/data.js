// Field data for MAN250415 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAN250415",
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
    "2025-03-05": {
      "min": 0.162,
      "max": 0.347,
      "median": 0.252,
      "mean": 0.254,
      "sd": 0.016
    },
    "2025-03-09": {
      "min": 0.144,
      "max": 0.293,
      "median": 0.208,
      "mean": 0.209,
      "sd": 0.018
    },
    "2025-03-17": {
      "min": 0.202,
      "max": 0.38,
      "median": 0.274,
      "mean": 0.275,
      "sd": 0.02
    },
    "2025-03-21": {
      "min": 0.142,
      "max": 0.312,
      "median": 0.217,
      "mean": 0.219,
      "sd": 0.021
    },
    "2025-04-03": {
      "min": 0.285,
      "max": 0.548,
      "median": 0.429,
      "mean": 0.429,
      "sd": 0.033
    },
    "2025-04-06": {
      "min": 0.226,
      "max": 0.567,
      "median": 0.438,
      "mean": 0.435,
      "sd": 0.046
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 17.495,
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
        "area_ha": 0.376,
        "area_percentage": 0.022
      },
      "medium vegetation": {
        "area_ha": 17.119,
        "area_percentage": 0.978
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
    "evi_median": 0.495,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.65,
          "percentage": 3.7
        },
        "EVI_statistics": {
          "mean": 0.39,
          "median": 0.394,
          "min": 0.312,
          "max": 0.421
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.16,
          "percentage": 18.07
        },
        "EVI_statistics": {
          "mean": 0.455,
          "median": 0.458,
          "min": 0.421,
          "max": 0.47
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 9.76,
          "percentage": 55.81
        },
        "EVI_statistics": {
          "mean": 0.495,
          "median": 0.495,
          "min": 0.47,
          "max": 0.52
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 3.83,
          "percentage": 21.87
        },
        "EVI_statistics": {
          "mean": 0.535,
          "median": 0.533,
          "min": 0.52,
          "max": 0.569
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.1,
          "percentage": 0.55
        },
        "EVI_statistics": {
          "mean": 0.577,
          "median": 0.575,
          "min": 0.569,
          "max": 0.608
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 3.63,
            "area_percentage": 21.93,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 2.74,
            "area_percentage": 16.56,
            "zone_number": 2
          },
          "similar": {
            "ha": 3.31,
            "area_percentage": 20.0,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 2.76,
            "area_percentage": 16.68,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 4.11,
            "area_percentage": 24.83,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-04-15",
      "reference_image_date": "2025-03-21",
      "change_period": 25
    },
    "median_EVI_change": {
      "old_value": 0.217,
      "new_value": 0.495,
      "difference": 0.277
    },
    "growth trend": "major_growth",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.0,
          "percentage": 0.0,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 0.0,
          "percentage": 0.0,
          "zone_number": 2
        },
        "no_change": {
          "ha": 0.0,
          "percentage": 0.0,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.02,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 17.49,
          "percentage": 99.98,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 1.97,
          "percentage": 11.24,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 2.62,
          "percentage": 14.99,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 8.13,
          "percentage": 46.45,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.8,
          "percentage": 15.98,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.98,
          "percentage": 11.33,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.18550818919355 49.119755116444445)",
          "new_value": 0.472,
          "old_value": 0.239,
          "value_difference": 0.233,
          "area_ha": 0.175,
          "category": "major_decline",
          "location": "SE",
          "id": 1
        },
        {
          "geometry": "POINT (16.178840763709676 49.12280873481481)",
          "new_value": 0.508,
          "old_value": 0.2,
          "value_difference": 0.308,
          "area_ha": 0.191,
          "category": "major_growth",
          "location": "NW",
          "id": 2
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 720.376,
      "historical_average": 742.761
    },
    "accumulated_precipitation_since_seeding": {
      "current": 143.965,
      "historical_mean": 230.866
    },
    "precipitation_summary": {
      "last_3_days": 3.292,
      "last_7_days": 4.244,
      "last_14_days": 4.803,
      "last_30_days": 29.715
    },
    "standardized_precipitation_index": {
      "1_month": -0.538,
      "3_month": -1.278,
      "6_month": -2.133
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-04-11 00:00:00",
          "temperature_mean": 9.685,
          "temperature_min": 4.246,
          "temperature_max": 14.989,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.386,
          "soiltemperature_0to10cm_mean": 8.839,
          "soilmoisture_0to10cm": 0.318,
          "windspeed_mean": 4.312
        },
        {
          "time": "2025-04-12 00:00:00",
          "temperature_mean": 11.183,
          "temperature_min": 7.354,
          "temperature_max": 15.079,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.349,
          "soiltemperature_0to10cm_mean": 10.762,
          "soilmoisture_0to10cm": 0.312,
          "windspeed_mean": 1.06
        },
        {
          "time": "2025-04-13 00:00:00",
          "temperature_mean": 11.799,
          "temperature_min": 7.177,
          "temperature_max": 16.053,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.726,
          "soiltemperature_0to10cm_mean": 10.849,
          "soilmoisture_0to10cm": 0.308,
          "windspeed_mean": 2.139
        },
        {
          "time": "2025-04-14 00:00:00",
          "temperature_mean": 13.235,
          "temperature_min": 6.398,
          "temperature_max": 18.839,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.69,
          "soiltemperature_0to10cm_mean": 12.126,
          "soilmoisture_0to10cm": 0.304,
          "windspeed_mean": 1.866
        },
        {
          "time": "2025-04-15 00:00:00",
          "temperature_mean": 12.703,
          "temperature_min": 10.771,
          "temperature_max": 15.699,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.863,
          "soiltemperature_0to10cm_mean": 11.873,
          "soilmoisture_0to10cm": 0.315,
          "windspeed_mean": 4.63
        },
        {
          "time": "2025-04-16 00:00:00",
          "temperature_mean": 16.242,
          "temperature_min": 10.324,
          "temperature_max": 22.335,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.312,
          "soiltemperature_0to10cm_mean": 14.433,
          "soilmoisture_0to10cm": 0.326,
          "windspeed_mean": 3.89
        },
        {
          "time": "2025-04-17 00:00:00",
          "temperature_mean": 17.407,
          "temperature_min": 13.028,
          "temperature_max": 22.765,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.731,
          "soiltemperature_0to10cm_mean": 15.635,
          "soilmoisture_0to10cm": 0.311,
          "windspeed_mean": 5.013
        },
        {
          "time": "2025-04-18 00:00:00",
          "temperature_mean": 12.35,
          "temperature_min": 8.19,
          "temperature_max": 14.942,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.966,
          "soiltemperature_0to10cm_mean": 13.198,
          "soilmoisture_0to10cm": 0.329,
          "windspeed_mean": 1.111
        },
        {
          "time": "2025-04-19 00:00:00",
          "temperature_mean": 10.945,
          "temperature_min": 4.592,
          "temperature_max": 15.844,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.439,
          "soiltemperature_0to10cm_mean": 11.215,
          "soilmoisture_0to10cm": 0.339,
          "windspeed_mean": 1.927
        },
        {
          "time": "2025-04-20 00:00:00",
          "temperature_mean": 12.963,
          "temperature_min": 7.615,
          "temperature_max": 19.157,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.533,
          "soiltemperature_0to10cm_mean": 12.751,
          "soilmoisture_0to10cm": 0.323,
          "windspeed_mean": 1.985
        },
        {
          "time": "2025-04-21 00:00:00",
          "temperature_mean": 14.361,
          "temperature_min": 6.163,
          "temperature_max": 20.576,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.926,
          "soiltemperature_0to10cm_mean": 13.753,
          "soilmoisture_0to10cm": 0.315,
          "windspeed_mean": 0.321
        },
        {
          "time": "2025-04-22 00:00:00",
          "temperature_mean": 14.791,
          "temperature_min": 9.809,
          "temperature_max": 19.71,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.403,
          "soiltemperature_0to10cm_mean": 14.659,
          "soilmoisture_0to10cm": 0.373,
          "windspeed_mean": 2.284
        },
        {
          "time": "2025-04-23 00:00:00",
          "temperature_mean": 15.641,
          "temperature_min": 10.933,
          "temperature_max": 20.34,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.781,
          "soiltemperature_0to10cm_mean": 15.027,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 1.507
        },
        {
          "time": "2025-04-24 00:00:00",
          "temperature_mean": 14.079,
          "temperature_min": 10.64,
          "temperature_max": 17.221,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.954,
          "soiltemperature_0to10cm_mean": 14.381,
          "soilmoisture_0to10cm": 0.346,
          "windspeed_mean": 1.847
        },
        {
          "time": "2025-04-25 00:00:00",
          "temperature_mean": 10.263,
          "temperature_min": 8.284,
          "temperature_max": 11.368,
          "precipitation_sum": 16.0,
          "totalcloudcover_mean": 0.999,
          "soiltemperature_0to10cm_mean": 11.348,
          "soilmoisture_0to10cm": 0.398,
          "windspeed_mean": 3.187
        },
        {
          "time": "2025-04-26 00:00:00",
          "temperature_mean": 10.931,
          "temperature_min": 7.255,
          "temperature_max": 15.203,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.354,
          "soiltemperature_0to10cm_mean": 11.739,
          "soilmoisture_0to10cm": 0.376,
          "windspeed_mean": 4.223
        },
        {
          "time": "2025-04-27 00:00:00",
          "temperature_mean": 10.043,
          "temperature_min": 4.721,
          "temperature_max": 15.123,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.001,
          "soiltemperature_0to10cm_mean": 11.15,
          "soilmoisture_0to10cm": 0.355,
          "windspeed_mean": 2.863
        },
        {
          "time": "2025-04-28 00:00:00",
          "temperature_mean": 12.574,
          "temperature_min": 5.305,
          "temperature_max": 18.676,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.018,
          "soiltemperature_0to10cm_mean": 12.381,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 1.808
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-10-14",
      "day_since": 183
    },
    "crop_emergence": {
      "date": "2024-10-26",
      "day_since": 170
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-18",
      "day_since": -4
    },
    "beginning_of_heading": {
      "date": "2025-05-26",
      "day_since": -42
    },
    "beginning_of_ripenes": {
      "date": "2025-07-08",
      "day_since": -85
    },
    "harvest": {
      "date": "2025-07-27",
      "day_since": -104
    }
  },
  "timing_of_field_operations": {
    "2025-04-11": {
      "weather_conditions": {
        "temperature_mean": 9.685,
        "temperature_min": 4.246,
        "temperature_max": 14.989,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.386,
        "soiltemperature_0to10cm_mean": 8.839,
        "soilmoisture_0to10cm": 0.318,
        "windspeed_mean": 4.312
      },
      "second_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "soil_temperature_minimum": "good",
          "moist_soil": "good",
          "no_freeze_next_week": "bad",
          "light_rain_before": "bad",
          "light_rain_after": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.57
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
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
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-04-12": {
      "weather_conditions": {
        "temperature_mean": 11.183,
        "temperature_min": 7.354,
        "temperature_max": 15.079,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.349,
        "soiltemperature_0to10cm_mean": 10.762,
        "soilmoisture_0to10cm": 0.312,
        "windspeed_mean": 1.06
      },
      "second_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "soil_temperature_minimum": "good",
          "moist_soil": "good",
          "no_freeze_next_week": "bad",
          "light_rain_before": "bad",
          "light_rain_after": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.71
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
      "early_fungicide": {
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
    "2025-04-13": {
      "weather_conditions": {
        "temperature_mean": 11.799,
        "temperature_min": 7.177,
        "temperature_max": 16.053,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.726,
        "soiltemperature_0to10cm_mean": 10.849,
        "soilmoisture_0to10cm": 0.308,
        "windspeed_mean": 2.139
      },
      "second_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "soil_temperature_minimum": "good",
          "moist_soil": "good",
          "no_freeze_next_week": "bad",
          "light_rain_before": "bad",
          "light_rain_after": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.71
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
          "cloudy_weather": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.8
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
      "early_fungicide": {
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
    "2025-04-14": {
      "weather_conditions": {
        "temperature_mean": 13.235,
        "temperature_min": 6.398,
        "temperature_max": 18.839,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.69,
        "soiltemperature_0to10cm_mean": 12.126,
        "soilmoisture_0to10cm": 0.304,
        "windspeed_mean": 1.866
      },
      "second_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "soil_temperature_minimum": "good",
          "moist_soil": "good",
          "no_freeze_next_week": "bad",
          "light_rain_before": "bad",
          "light_rain_after": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.57
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
      "early_fungicide": {
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
    "2025-04-15": {
      "weather_conditions": {
        "temperature_mean": 12.703,
        "temperature_min": 10.771,
        "temperature_max": 15.699,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.863,
        "soiltemperature_0to10cm_mean": 11.873,
        "soilmoisture_0to10cm": 0.315,
        "windspeed_mean": 4.63
      },
      "second_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "soil_temperature_minimum": "good",
          "moist_soil": "good",
          "no_freeze_next_week": "bad",
          "light_rain_before": "good",
          "light_rain_after": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.71
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
          "min_air_temperature": "good",
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
      "early_fungicide": {
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
    "2025-04-16": {
      "weather_conditions": {
        "temperature_mean": 16.242,
        "temperature_min": 10.324,
        "temperature_max": 22.335,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.312,
        "soiltemperature_0to10cm_mean": 14.433,
        "soilmoisture_0to10cm": 0.326,
        "windspeed_mean": 3.89
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
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      },
      "early_fungicide": {
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
    "2025-04-17": {
      "weather_conditions": {
        "temperature_mean": 17.407,
        "temperature_min": 13.028,
        "temperature_max": 22.765,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.731,
        "soiltemperature_0to10cm_mean": 15.635,
        "soilmoisture_0to10cm": 0.311,
        "windspeed_mean": 5.013
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "mid_insecticide": {
        "conditions": {
          "min_air_temperature": "good",
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
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-04-18": {
      "weather_conditions": {
        "temperature_mean": 12.35,
        "temperature_min": 8.19,
        "temperature_max": 14.942,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.966,
        "soiltemperature_0to10cm_mean": 13.198,
        "soilmoisture_0to10cm": 0.329,
        "windspeed_mean": 1.111
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
      "early_fungicide": {
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
    "2025-04-19": {
      "weather_conditions": {
        "temperature_mean": 10.945,
        "temperature_min": 4.592,
        "temperature_max": 15.844,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.439,
        "soiltemperature_0to10cm_mean": 11.215,
        "soilmoisture_0to10cm": 0.339,
        "windspeed_mean": 1.927
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
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
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
    "2025-04-20": {
      "weather_conditions": {
        "temperature_mean": 12.963,
        "temperature_min": 7.615,
        "temperature_max": 19.157,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.533,
        "soiltemperature_0to10cm_mean": 12.751,
        "soilmoisture_0to10cm": 0.323,
        "windspeed_mean": 1.985
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
      "early_fungicide": {
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
    "2025-04-21": {
      "weather_conditions": {
        "temperature_mean": 14.361,
        "temperature_min": 6.163,
        "temperature_max": 20.576,
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.926,
        "soiltemperature_0to10cm_mean": 13.753,
        "soilmoisture_0to10cm": 0.315,
        "windspeed_mean": 0.321
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
          "cloudy_weather": "good"
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
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.33
      }
    },
    "2025-04-22": {
      "weather_conditions": {
        "temperature_mean": 14.791,
        "temperature_min": 9.809,
        "temperature_max": 19.71,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.403,
        "soiltemperature_0to10cm_mean": 14.659,
        "soilmoisture_0to10cm": 0.373,
        "windspeed_mean": 2.284
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
      "early_fungicide": {
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
    "2025-04-23": {
      "weather_conditions": {
        "temperature_mean": 15.641,
        "temperature_min": 10.933,
        "temperature_max": 20.34,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.781,
        "soiltemperature_0to10cm_mean": 15.027,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 1.507
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
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.33
      }
    },
    "2025-04-24": {
      "weather_conditions": {
        "temperature_mean": 14.079,
        "temperature_min": 10.64,
        "temperature_max": 17.221,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.954,
        "soiltemperature_0to10cm_mean": 14.381,
        "soilmoisture_0to10cm": 0.346,
        "windspeed_mean": 1.847
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
      "early_fungicide": {
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
    "2025-04-25": {
      "weather_conditions": {
        "temperature_mean": 10.263,
        "temperature_min": 8.284,
        "temperature_max": 11.368,
        "precipitation_sum": 16.0,
        "totalcloudcover_mean": 0.999,
        "soiltemperature_0to10cm_mean": 11.348,
        "soilmoisture_0to10cm": 0.398,
        "windspeed_mean": 3.187
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
      "early_fungicide": {
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
    "2025-04-26": {
      "weather_conditions": {
        "temperature_mean": 10.931,
        "temperature_min": 7.255,
        "temperature_max": 15.203,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.354,
        "soiltemperature_0to10cm_mean": 11.739,
        "soilmoisture_0to10cm": 0.376,
        "windspeed_mean": 4.223
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
          "cloudy_weather": "bad"
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
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-04-27": {
      "weather_conditions": {
        "temperature_mean": 10.043,
        "temperature_min": 4.721,
        "temperature_max": 15.123,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.001,
        "soiltemperature_0to10cm_mean": 11.15,
        "soilmoisture_0to10cm": 0.355,
        "windspeed_mean": 2.863
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
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-04-28": {
      "weather_conditions": {
        "temperature_mean": 12.574,
        "temperature_min": 5.305,
        "temperature_max": 18.676,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.018,
        "soiltemperature_0to10cm_mean": 12.381,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 1.808
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
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      },
      "early_fungicide": {
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
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
