// Auto-generated from data.json — do not edit manually
window.FIELD_DATA = {
  "annotation_id": "MAP250415",
  "_images": {
    "zones": "images/zones.png"
  },
  "metadata": {
    "field_area_ha": 4.818,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lhánice"
    },
    "terrain": {
      "variability": 5.778,
      "mean_elevation": 392.45,
      "min_elevation": 389.641,
      "max_elevation": 395.418
    },
    "soil": {
      "bulk_density kg/dm³": 1.327,
      "cation_exchange_capacity cmol(c)/kg": 21.159,
      "clay_particles g/100g (%)": 24.337,
      "sand particles g/100g (%)": 19.54,
      "silt particles g/100g (%)": 56.124,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-02-28": {
      "min": 0.084,
      "max": 0.226,
      "median": 0.16,
      "mean": 0.158,
      "sd": 0.015
    },
    "2025-03-09": {
      "min": 0.104,
      "max": 0.277,
      "median": 0.213,
      "mean": 0.212,
      "sd": 0.019
    },
    "2025-03-18": {
      "min": 0.181,
      "max": 0.337,
      "median": 0.276,
      "mean": 0.274,
      "sd": 0.021
    },
    "2025-03-21": {
      "min": 0.127,
      "max": 0.286,
      "median": 0.224,
      "mean": 0.222,
      "sd": 0.021
    },
    "2025-04-03": {
      "min": 0.258,
      "max": 0.516,
      "median": 0.428,
      "mean": 0.422,
      "sd": 0.039
    },
    "2025-04-09": {
      "min": 0.238,
      "max": 0.542,
      "median": 0.457,
      "mean": 0.445,
      "sd": 0.05
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 4.823,
      "area_percentage": 1
    },
    "dominant_category": "medium vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0,
        "area_percentage": 0
      },
      "very_low_vegetation": {
        "area_ha": 0.03,
        "area_percentage": 0.006
      },
      "low_vegetation": {
        "area_ha": 0.331,
        "area_percentage": 0.069
      },
      "medium vegetation": {
        "area_ha": 4.462,
        "area_percentage": 0.925
      },
      "high_vegetation": {
        "area_ha": 0,
        "area_percentage": 0
      },
      "very_high_vegetation": {
        "area_ha": 0,
        "area_percentage": 0
      }
    }
  },
  "growth_variability": {
    "variability_category": "high",
    "number_of_zones": 5,
    "evi_median": 0.485,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.45,
          "percentage": 9.33
        },
        "EVI_statistics": {
          "mean": 0.36,
          "median": 0.365,
          "min": 0.27,
          "max": 0.412
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.77,
          "percentage": 15.88
        },
        "EVI_statistics": {
          "mean": 0.444,
          "median": 0.447,
          "min": 0.413,
          "max": 0.461
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 2.72,
          "percentage": 56.34
        },
        "EVI_statistics": {
          "mean": 0.487,
          "median": 0.488,
          "min": 0.461,
          "max": 0.509
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.89,
          "percentage": 18.4
        },
        "EVI_statistics": {
          "mean": 0.523,
          "median": 0.522,
          "min": 0.509,
          "max": 0.557
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0,
          "percentage": 0.06
        },
        "EVI_statistics": {
          "mean": 0.559,
          "median": 0.558,
          "min": 0.558,
          "max": 0.561
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.22,
            "area_percentage": 4.71,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.92,
            "area_percentage": 19.7,
            "zone_number": 2
          },
          "similar": {
            "ha": 1.72,
            "area_percentage": 36.83,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 1.02,
            "area_percentage": 21.84,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.79,
            "area_percentage": 16.92,
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
      "old_value": 0.224,
      "new_value": 0.485,
      "difference": 0.259
    },
    "growth trend": "major_growth",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0,
          "percentage": 0
        },
        "minor_decline": {
          "ha": 0,
          "percentage": 0
        },
        "no_change": {
          "ha": 0,
          "percentage": 0
        },
        "minor_growth": {
          "ha": 0.05,
          "percentage": 1.04
        },
        "major_growth": {
          "ha": 4.77,
          "percentage": 98.96
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 0.43,
          "percentage": 8.94
        },
        "minor_rank_drop": {
          "ha": 0.66,
          "percentage": 13.62
        },
        "rank_stable": {
          "ha": 2.61,
          "percentage": 54.04
        },
        "minor_rank_gain": {
          "ha": 0.71,
          "percentage": 14.7
        },
        "major_rank_gain": {
          "ha": 0.42,
          "percentage": 8.7
        }
      },
      "hotspot_scouting_points": []
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
          "time": "2025-04-11",
          "temperature_mean": 9.685,
          "temperature_min": 4.246,
          "temperature_max": 14.989,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.386,
          "soiltemperature_0to10cm_mean": 8.839,
          "soilmoisture_0to10cm": 0.318,
          "windspeed_mean": 4.312
        },
        {
          "time": "2025-04-12",
          "temperature_mean": 11.183,
          "temperature_min": 7.354,
          "temperature_max": 15.079,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.349,
          "soiltemperature_0to10cm_mean": 10.762,
          "soilmoisture_0to10cm": 0.312,
          "windspeed_mean": 1.06
        },
        {
          "time": "2025-04-13",
          "temperature_mean": 11.799,
          "temperature_min": 7.177,
          "temperature_max": 16.053,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.726,
          "soiltemperature_0to10cm_mean": 10.849,
          "soilmoisture_0to10cm": 0.308,
          "windspeed_mean": 2.139
        },
        {
          "time": "2025-04-14",
          "temperature_mean": 13.235,
          "temperature_min": 6.398,
          "temperature_max": 18.839,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.69,
          "soiltemperature_0to10cm_mean": 12.126,
          "soilmoisture_0to10cm": 0.304,
          "windspeed_mean": 1.866
        },
        {
          "time": "2025-04-15",
          "temperature_mean": 12.703,
          "temperature_min": 10.771,
          "temperature_max": 15.699,
          "precipitation_sum": 3,
          "totalcloudcover_mean": 0.863,
          "soiltemperature_0to10cm_mean": 11.873,
          "soilmoisture_0to10cm": 0.315,
          "windspeed_mean": 4.63
        },
        {
          "time": "2025-04-16",
          "temperature_mean": 16.242,
          "temperature_min": 10.324,
          "temperature_max": 22.335,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.312,
          "soiltemperature_0to10cm_mean": 14.433,
          "soilmoisture_0to10cm": 0.326,
          "windspeed_mean": 3.89
        },
        {
          "time": "2025-04-17",
          "temperature_mean": 17.407,
          "temperature_min": 13.028,
          "temperature_max": 22.765,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.731,
          "soiltemperature_0to10cm_mean": 15.635,
          "soilmoisture_0to10cm": 0.311,
          "windspeed_mean": 5.013
        },
        {
          "time": "2025-04-18",
          "temperature_mean": 12.35,
          "temperature_min": 8.19,
          "temperature_max": 14.942,
          "precipitation_sum": 5,
          "totalcloudcover_mean": 0.966,
          "soiltemperature_0to10cm_mean": 13.198,
          "soilmoisture_0to10cm": 0.329,
          "windspeed_mean": 1.111
        },
        {
          "time": "2025-04-19",
          "temperature_mean": 10.945,
          "temperature_min": 4.592,
          "temperature_max": 15.844,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.439,
          "soiltemperature_0to10cm_mean": 11.215,
          "soilmoisture_0to10cm": 0.339,
          "windspeed_mean": 1.927
        },
        {
          "time": "2025-04-20",
          "temperature_mean": 12.963,
          "temperature_min": 7.615,
          "temperature_max": 19.157,
          "precipitation_sum": 0,
          "totalcloudcover_mean": 0.533,
          "soiltemperature_0to10cm_mean": 12.751,
          "soilmoisture_0to10cm": 0.323,
          "windspeed_mean": 1.985
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
      "date": "2025-04-17",
      "day_since": -3
    },
    "beginning_of_heading": {
      "date": "2025-05-24",
      "day_since": -40
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
      "second_nitrogen": {
        "suitability_index": 0.57,
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
        }
      },
      "plant_growth_regulation": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "good",
          "cloudy_weather": "bad"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      },
      "early_fungicide": {
        "suitability_index": 0,
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      }
    },
    "2025-04-12": {
      "second_nitrogen": {
        "suitability_index": 0.71,
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
        }
      },
      "plant_growth_regulation": {
        "suitability_index": 0.7,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "good",
          "cloudy_weather": "bad"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      },
      "early_fungicide": {
        "suitability_index": 1,
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      }
    },
    "2025-04-13": {
      "second_nitrogen": {
        "suitability_index": 0.71,
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
        }
      },
      "plant_growth_regulation": {
        "suitability_index": 0.8,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "good",
          "cloudy_weather": "medium"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      },
      "early_fungicide": {
        "suitability_index": 1,
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      }
    },
    "2025-04-14": {
      "second_nitrogen": {
        "suitability_index": 0.57,
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
        }
      },
      "plant_growth_regulation": {
        "suitability_index": 0.6,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      },
      "early_fungicide": {
        "suitability_index": 0.67,
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      }
    },
    "2025-04-15": {
      "second_nitrogen": {
        "suitability_index": 0.71,
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
        }
      },
      "plant_growth_regulation": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      },
      "early_fungicide": {
        "suitability_index": 0,
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      }
    },
    "2025-04-16": {
      "plant_growth_regulation": {
        "suitability_index": 0.3,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        }
      },
      "mid_insecticide": {
        "suitability_index": 1,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      },
      "early_fungicide": {
        "suitability_index": 0.67,
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        }
      }
    },
    "2025-04-17": {
      "plant_growth_regulation": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      },
      "early_fungicide": {
        "suitability_index": 0,
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        }
      }
    },
    "2025-04-18": {
      "plant_growth_regulation": {
        "suitability_index": 0.7,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "good"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      },
      "early_fungicide": {
        "suitability_index": 0.67,
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      }
    },
    "2025-04-19": {
      "plant_growth_regulation": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      },
      "early_fungicide": {
        "suitability_index": 1,
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      }
    },
    "2025-04-20": {
      "plant_growth_regulation": {
        "suitability_index": 0.5,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      },
      "early_fungicide": {
        "suitability_index": 0.67,
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      }
    },
    "2025-04-21": {
      "plant_growth_regulation": {
        "suitability_index": 0.5,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "good"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      },
      "early_fungicide": {
        "suitability_index": 0.33,
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        }
      }
    },
    "2025-04-22": {
      "plant_growth_regulation": {
        "suitability_index": 0.5,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      },
      "early_fungicide": {
        "suitability_index": 0.67,
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      }
    },
    "2025-04-23": {
      "plant_growth_regulation": {
        "suitability_index": 0.4,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "medium"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0.67,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      },
      "early_fungicide": {
        "suitability_index": 0.33,
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "precipitation": "bad"
        }
      }
    },
    "2025-04-24": {
      "plant_growth_regulation": {
        "suitability_index": 0.7,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "good"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0.67,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      },
      "early_fungicide": {
        "suitability_index": 0.67,
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      }
    },
    "2025-04-25": {
      "plant_growth_regulation": {
        "suitability_index": 0.7,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "good"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      },
      "early_fungicide": {
        "suitability_index": 0.67,
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "bad"
        }
      }
    },
    "2025-04-26": {
      "plant_growth_regulation": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "bad",
          "cloudy_weather": "bad"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      },
      "early_fungicide": {
        "suitability_index": 0,
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
          "not_hot_with_sun": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      }
    },
    "2025-04-27": {
      "plant_growth_regulation": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "good",
          "cloudy_weather": "bad"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      },
      "early_fungicide": {
        "suitability_index": 0,
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      }
    },
    "2025-04-28": {
      "plant_growth_regulation": {
        "suitability_index": 0.7,
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "medium",
          "precipitation": "good",
          "cloudy_weather": "bad"
        }
      },
      "mid_insecticide": {
        "suitability_index": 0,
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      },
      "early_fungicide": {
        "suitability_index": 0,
        "conditions": {
          "low_wind_speed": "good",
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        }
      }
    }
  }
};