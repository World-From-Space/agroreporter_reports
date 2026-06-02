// Field data for LAL250415 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAL250415",
  "metadata": {
    "field_area_ha": 27.898,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 22.617,
      "mean_elevation": 548.196,
      "min_elevation": 533.245,
      "max_elevation": 555.863
    },
    "soil": {
      "bulk_density kg/dm³": 1.337,
      "cation_exchange_capacity cmol(c)/kg": 20.924,
      "clay_particles g/100g (%)": 22.869,
      "sand particles g/100g (%)": 38.655,
      "silt particles g/100g (%)": 38.476,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-02-11": {
      "min": 0.171,
      "max": 0.444,
      "median": 0.281,
      "mean": 0.282,
      "sd": 0.031
    },
    "2025-02-24": {
      "min": 0.153,
      "max": 0.45,
      "median": 0.265,
      "mean": 0.265,
      "sd": 0.03
    },
    "2025-03-11": {
      "min": 0.297,
      "max": 0.53,
      "median": 0.415,
      "mean": 0.417,
      "sd": 0.031
    },
    "2025-03-21": {
      "min": 0.187,
      "max": 0.474,
      "median": 0.304,
      "mean": 0.303,
      "sd": 0.031
    },
    "2025-03-28": {
      "min": 0.228,
      "max": 0.556,
      "median": 0.402,
      "mean": 0.398,
      "sd": 0.036
    },
    "2025-04-03": {
      "min": 0.257,
      "max": 0.585,
      "median": 0.45,
      "mean": 0.444,
      "sd": 0.042
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 27.436,
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
        "area_ha": 0.188,
        "area_percentage": 0.007
      },
      "medium vegetation": {
        "area_ha": 27.247,
        "area_percentage": 0.993
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
    "evi_median": 0.545,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.42,
          "percentage": 5.18
        },
        "EVI_statistics": {
          "mean": 0.432,
          "median": 0.44,
          "min": 0.327,
          "max": 0.463
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 6.02,
          "percentage": 21.94
        },
        "EVI_statistics": {
          "mean": 0.497,
          "median": 0.499,
          "min": 0.463,
          "max": 0.517
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 14.87,
          "percentage": 54.2
        },
        "EVI_statistics": {
          "mean": 0.547,
          "median": 0.549,
          "min": 0.517,
          "max": 0.572
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 5.08,
          "percentage": 18.53
        },
        "EVI_statistics": {
          "mean": 0.587,
          "median": 0.584,
          "min": 0.572,
          "max": 0.626
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.04,
          "percentage": 0.15
        },
        "EVI_statistics": {
          "mean": 0.632,
          "median": 0.631,
          "min": 0.627,
          "max": 0.644
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 4.22,
            "area_percentage": 15.47,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.51,
            "area_percentage": 20.2,
            "zone_number": 2
          },
          "similar": {
            "ha": 6.72,
            "area_percentage": 24.63,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 6.69,
            "area_percentage": 24.52,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 4.14,
            "area_percentage": 15.18,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-04-15",
      "reference_image_date": "2025-03-28",
      "change_period": 18
    },
    "median_EVI_change": {
      "old_value": 0.402,
      "new_value": 0.545,
      "difference": 0.14
    },
    "growth trend": "minor_growth",
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
          "ha": 0.2,
          "percentage": 0.74,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 19.03,
          "percentage": 69.38,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 8.2,
          "percentage": 29.88,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.758197625369318 49.09315656704301)",
          "new_value": 0.563,
          "old_value": 0.398,
          "value_difference": 0.165,
          "area_ha": 0.541,
          "category": "major_growth",
          "location": "N",
          "id": 1
        },
        {
          "geometry": "POINT (15.755396328721591 49.09229713306451)",
          "new_value": 0.56,
          "old_value": 0.397,
          "value_difference": 0.163,
          "area_ha": 2.088,
          "category": "major_growth",
          "location": "NW",
          "id": 2
        },
        {
          "geometry": "POINT (15.759451937301137 49.091088554032254)",
          "new_value": 0.57,
          "old_value": 0.407,
          "value_difference": 0.163,
          "area_ha": 0.357,
          "category": "major_growth",
          "location": "E",
          "id": 3
        },
        {
          "geometry": "POINT (15.755187276732954 49.09087369553763)",
          "new_value": 0.514,
          "old_value": 0.351,
          "value_difference": 0.163,
          "area_ha": 0.626,
          "category": "major_growth",
          "location": "W",
          "id": 4
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 1.46,
          "percentage": 5.32,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.73,
          "percentage": 13.6,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 17.01,
          "percentage": 62.0,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.89,
          "percentage": 14.18,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.34,
          "percentage": 4.9,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 801.279,
      "historical_average": 825.843
    },
    "accumulated_precipitation_since_seeding": {
      "current": 177.841,
      "historical_mean": 277.194
    },
    "precipitation_summary": {
      "last_3_days": 4.169,
      "last_7_days": 4.904,
      "last_14_days": 5.979,
      "last_30_days": 33.921
    },
    "standardized_precipitation_index": {
      "1_month": -0.641,
      "3_month": -1.81,
      "6_month": -2.477
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-04-11 00:00:00",
          "temperature_mean": 9.146,
          "temperature_min": 3.862,
          "temperature_max": 14.635,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.378,
          "soiltemperature_0to10cm_mean": 8.056,
          "soilmoisture_0to10cm": 0.316,
          "windspeed_mean": 4.501
        },
        {
          "time": "2025-04-12 00:00:00",
          "temperature_mean": 10.891,
          "temperature_min": 6.934,
          "temperature_max": 15.122,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.289,
          "soiltemperature_0to10cm_mean": 10.29,
          "soilmoisture_0to10cm": 0.309,
          "windspeed_mean": 1.121
        },
        {
          "time": "2025-04-13 00:00:00",
          "temperature_mean": 11.007,
          "temperature_min": 5.992,
          "temperature_max": 15.391,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.684,
          "soiltemperature_0to10cm_mean": 10.151,
          "soilmoisture_0to10cm": 0.304,
          "windspeed_mean": 2.091
        },
        {
          "time": "2025-04-14 00:00:00",
          "temperature_mean": 13.428,
          "temperature_min": 8.723,
          "temperature_max": 18.189,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.693,
          "soiltemperature_0to10cm_mean": 11.361,
          "soilmoisture_0to10cm": 0.3,
          "windspeed_mean": 1.952
        },
        {
          "time": "2025-04-15 00:00:00",
          "temperature_mean": 12.179,
          "temperature_min": 10.375,
          "temperature_max": 15.515,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.874,
          "soiltemperature_0to10cm_mean": 11.365,
          "soilmoisture_0to10cm": 0.316,
          "windspeed_mean": 4.308
        },
        {
          "time": "2025-04-16 00:00:00",
          "temperature_mean": 15.463,
          "temperature_min": 9.225,
          "temperature_max": 21.895,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.537,
          "soiltemperature_0to10cm_mean": 13.62,
          "soilmoisture_0to10cm": 0.326,
          "windspeed_mean": 3.676
        },
        {
          "time": "2025-04-17 00:00:00",
          "temperature_mean": 16.508,
          "temperature_min": 11.855,
          "temperature_max": 21.461,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.735,
          "soiltemperature_0to10cm_mean": 14.688,
          "soilmoisture_0to10cm": 0.309,
          "windspeed_mean": 5.155
        },
        {
          "time": "2025-04-18 00:00:00",
          "temperature_mean": 11.009,
          "temperature_min": 6.717,
          "temperature_max": 14.182,
          "precipitation_sum": 9.0,
          "totalcloudcover_mean": 0.937,
          "soiltemperature_0to10cm_mean": 12.052,
          "soilmoisture_0to10cm": 0.339,
          "windspeed_mean": 1.019
        },
        {
          "time": "2025-04-19 00:00:00",
          "temperature_mean": 10.06,
          "temperature_min": 3.634,
          "temperature_max": 15.129,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.415,
          "soiltemperature_0to10cm_mean": 10.19,
          "soilmoisture_0to10cm": 0.35,
          "windspeed_mean": 1.903
        },
        {
          "time": "2025-04-20 00:00:00",
          "temperature_mean": 12.168,
          "temperature_min": 6.338,
          "temperature_max": 18.248,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.432,
          "soiltemperature_0to10cm_mean": 11.807,
          "soilmoisture_0to10cm": 0.33,
          "windspeed_mean": 2.071
        },
        {
          "time": "2025-04-21 00:00:00",
          "temperature_mean": 13.768,
          "temperature_min": 6.644,
          "temperature_max": 20.072,
          "precipitation_sum": 10.0,
          "totalcloudcover_mean": 0.884,
          "soiltemperature_0to10cm_mean": 12.903,
          "soilmoisture_0to10cm": 0.326,
          "windspeed_mean": 0.582
        },
        {
          "time": "2025-04-22 00:00:00",
          "temperature_mean": 13.624,
          "temperature_min": 8.519,
          "temperature_max": 18.563,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.385,
          "soiltemperature_0to10cm_mean": 13.508,
          "soilmoisture_0to10cm": 0.378,
          "windspeed_mean": 2.217
        },
        {
          "time": "2025-04-23 00:00:00",
          "temperature_mean": 14.411,
          "temperature_min": 9.388,
          "temperature_max": 19.094,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.788,
          "soiltemperature_0to10cm_mean": 13.661,
          "soilmoisture_0to10cm": 0.353,
          "windspeed_mean": 1.248
        },
        {
          "time": "2025-04-24 00:00:00",
          "temperature_mean": 12.97,
          "temperature_min": 9.093,
          "temperature_max": 15.877,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.946,
          "soiltemperature_0to10cm_mean": 12.906,
          "soilmoisture_0to10cm": 0.364,
          "windspeed_mean": 1.914
        },
        {
          "time": "2025-04-25 00:00:00",
          "temperature_mean": 9.058,
          "temperature_min": 7.132,
          "temperature_max": 10.362,
          "precipitation_sum": 17.0,
          "totalcloudcover_mean": 1.0,
          "soiltemperature_0to10cm_mean": 10.219,
          "soilmoisture_0to10cm": 0.407,
          "windspeed_mean": 2.937
        },
        {
          "time": "2025-04-26 00:00:00",
          "temperature_mean": 10.171,
          "temperature_min": 6.292,
          "temperature_max": 14.802,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.428,
          "soiltemperature_0to10cm_mean": 10.778,
          "soilmoisture_0to10cm": 0.388,
          "windspeed_mean": 3.5
        },
        {
          "time": "2025-04-27 00:00:00",
          "temperature_mean": 9.236,
          "temperature_min": 3.729,
          "temperature_max": 14.401,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.002,
          "soiltemperature_0to10cm_mean": 10.144,
          "soilmoisture_0to10cm": 0.365,
          "windspeed_mean": 2.705
        },
        {
          "time": "2025-04-28 00:00:00",
          "temperature_mean": 11.758,
          "temperature_min": 3.81,
          "temperature_max": 18.072,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.055,
          "soiltemperature_0to10cm_mean": 11.414,
          "soilmoisture_0to10cm": 0.351,
          "windspeed_mean": 2.033
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 198
    },
    "crop_emergence": {
      "date": "2024-10-10",
      "day_since": 186
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-18",
      "day_since": -4
    },
    "beginning_of_heading": {
      "date": "2025-05-27",
      "day_since": -43
    },
    "beginning_of_ripenes": {
      "date": "2025-07-10",
      "day_since": -87
    },
    "harvest": {
      "date": "2025-07-29",
      "day_since": -106
    }
  },
  "timing_of_field_operations": {
    "2025-04-11": {
      "weather_conditions": {
        "temperature_mean": 9.146,
        "temperature_min": 3.862,
        "temperature_max": 14.635,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.378,
        "soiltemperature_0to10cm_mean": 8.056,
        "soilmoisture_0to10cm": 0.316,
        "windspeed_mean": 4.501
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
          "light_rain_after": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.43
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "bad -> BLOCKED",
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
        "temperature_mean": 10.891,
        "temperature_min": 6.934,
        "temperature_max": 15.122,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.289,
        "soiltemperature_0to10cm_mean": 10.29,
        "soilmoisture_0to10cm": 0.309,
        "windspeed_mean": 1.121
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
        "temperature_mean": 11.007,
        "temperature_min": 5.992,
        "temperature_max": 15.391,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.684,
        "soiltemperature_0to10cm_mean": 10.151,
        "soilmoisture_0to10cm": 0.304,
        "windspeed_mean": 2.091
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
        "temperature_mean": 13.428,
        "temperature_min": 8.723,
        "temperature_max": 18.189,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.693,
        "soiltemperature_0to10cm_mean": 11.361,
        "soilmoisture_0to10cm": 0.3,
        "windspeed_mean": 1.952
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
        "temperature_mean": 12.179,
        "temperature_min": 10.375,
        "temperature_max": 15.515,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.874,
        "soiltemperature_0to10cm_mean": 11.365,
        "soilmoisture_0to10cm": 0.316,
        "windspeed_mean": 4.308
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
        "temperature_mean": 15.463,
        "temperature_min": 9.225,
        "temperature_max": 21.895,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.537,
        "soiltemperature_0to10cm_mean": 13.62,
        "soilmoisture_0to10cm": 0.326,
        "windspeed_mean": 3.676
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
          "day_air_temperature_max": "bad",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.67
      }
    },
    "2025-04-17": {
      "weather_conditions": {
        "temperature_mean": 16.508,
        "temperature_min": 11.855,
        "temperature_max": 21.461,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.735,
        "soiltemperature_0to10cm_mean": 14.688,
        "soilmoisture_0to10cm": 0.309,
        "windspeed_mean": 5.155
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
        "temperature_mean": 11.009,
        "temperature_min": 6.717,
        "temperature_max": 14.182,
        "precipitation_sum": 9.0,
        "totalcloudcover_mean": 0.937,
        "soiltemperature_0to10cm_mean": 12.052,
        "soilmoisture_0to10cm": 0.339,
        "windspeed_mean": 1.019
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
          "cloudy_weather": "good"
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
    "2025-04-19": {
      "weather_conditions": {
        "temperature_mean": 10.06,
        "temperature_min": 3.634,
        "temperature_max": 15.129,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.415,
        "soiltemperature_0to10cm_mean": 10.19,
        "soilmoisture_0to10cm": 0.35,
        "windspeed_mean": 1.903
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "bad -> BLOCKED",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "active_growing_conditions": "bad",
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
        "temperature_mean": 12.168,
        "temperature_min": 6.338,
        "temperature_max": 18.248,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.432,
        "soiltemperature_0to10cm_mean": 11.807,
        "soilmoisture_0to10cm": 0.33,
        "windspeed_mean": 2.071
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
        "temperature_mean": 13.768,
        "temperature_min": 6.644,
        "temperature_max": 20.072,
        "precipitation_sum": 10.0,
        "totalcloudcover_mean": 0.884,
        "soiltemperature_0to10cm_mean": 12.903,
        "soilmoisture_0to10cm": 0.326,
        "windspeed_mean": 0.582
      },
      "plant_growth_regulation": {
        "conditions": {
          "min_air_temperature": "good",
          "max_air_temperature": "good",
          "low_wind_speed": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "bad",
          "active_growing_conditions": "bad",
          "precipitation": "bad",
          "cloudy_weather": "good"
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
        "temperature_mean": 13.624,
        "temperature_min": 8.519,
        "temperature_max": 18.563,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.385,
        "soiltemperature_0to10cm_mean": 13.508,
        "soilmoisture_0to10cm": 0.378,
        "windspeed_mean": 2.217
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
        "temperature_mean": 14.411,
        "temperature_min": 9.388,
        "temperature_max": 19.094,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.788,
        "soiltemperature_0to10cm_mean": 13.661,
        "soilmoisture_0to10cm": 0.353,
        "windspeed_mean": 1.248
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
    "2025-04-24": {
      "weather_conditions": {
        "temperature_mean": 12.97,
        "temperature_min": 9.093,
        "temperature_max": 15.877,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.946,
        "soiltemperature_0to10cm_mean": 12.906,
        "soilmoisture_0to10cm": 0.364,
        "windspeed_mean": 1.914
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
          "cloudy_weather": "good"
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
    "2025-04-25": {
      "weather_conditions": {
        "temperature_mean": 9.058,
        "temperature_min": 7.132,
        "temperature_max": 10.362,
        "precipitation_sum": 17.0,
        "totalcloudcover_mean": 1.0,
        "soiltemperature_0to10cm_mean": 10.219,
        "soilmoisture_0to10cm": 0.407,
        "windspeed_mean": 2.937
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
          "cloudy_weather": "good"
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
      "early_fungicide": {
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
    "2025-04-26": {
      "weather_conditions": {
        "temperature_mean": 10.171,
        "temperature_min": 6.292,
        "temperature_max": 14.802,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.428,
        "soiltemperature_0to10cm_mean": 10.778,
        "soilmoisture_0to10cm": 0.388,
        "windspeed_mean": 3.5
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
    "2025-04-27": {
      "weather_conditions": {
        "temperature_mean": 9.236,
        "temperature_min": 3.729,
        "temperature_max": 14.401,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.002,
        "soiltemperature_0to10cm_mean": 10.144,
        "soilmoisture_0to10cm": 0.365,
        "windspeed_mean": 2.705
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
          "not_hot_with_sun": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
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
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-04-28": {
      "weather_conditions": {
        "temperature_mean": 11.758,
        "temperature_min": 3.81,
        "temperature_max": 18.072,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.055,
        "soiltemperature_0to10cm_mean": 11.414,
        "soilmoisture_0to10cm": 0.351,
        "windspeed_mean": 2.033
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
    }
  },
  "_images": {
    "zones": "images/zones.png",
    "history": "images/history.png",
    "hotspots": "images/hotspots.png",
    "evi": "images/evi.png",
    "rgb": "images/rgb.png"
  },
  "polygon_wkt": "POLYGON ((15.75700558 49.09347751, 15.75712859 49.09362657, 15.75717177 49.0936179, 15.75737054 49.09357798, 15.75752844 49.09354163, 15.75815545 49.09340567, 15.75855908 49.09330498, 15.75910486 49.09316301, 15.75934842 49.09309447, 15.75935452 49.09305806, 15.75945541 49.09301493, 15.75955246 49.09298086, 15.7603417 49.09275812, 15.7613111 49.0924712, 15.7613125 49.09247079, 15.76098397 49.09182524, 15.75990556 49.08971254, 15.75965459 49.08924168, 15.75957758 49.08900804, 15.75951126 49.08875106, 15.75945069 49.08855341, 15.75932865 49.08823138, 15.75923601 49.08811905, 15.75911058 49.08797407, 15.75905187 49.08786666, 15.75901437 49.0877469, 15.758988 49.08687514, 15.758969 49.08642611, 15.75893905 49.08639022, 15.75888142 49.08637611, 15.75882905 49.0863732, 15.75878232 49.08639948, 15.75869654 49.08649906, 15.75863353 49.08655554, 15.75856421 49.08659735, 15.75815094 49.08637476, 15.75770311 49.0861412, 15.75767681 49.08613338, 15.75763325 49.0861439, 15.75711667 49.08641398, 15.75693036 49.08653611, 15.75678619 49.08666155, 15.75669917 49.08677607, 15.75666363 49.08681222, 15.75662101 49.08683424, 15.75650892 49.08687434, 15.75638152 49.08695309, 15.75631862 49.08699227, 15.756187 49.08708737, 15.75576166 49.0874198, 15.75470201 49.08843088, 15.75443435 49.08877888, 15.75418089 49.08914237, 15.75407913 49.08930052, 15.75399199 49.0894598, 15.75396632 49.08954825, 15.75395387 49.08964465, 15.75409744 49.09050147, 15.75414987 49.09059425, 15.75422346 49.09069108, 15.7545438 49.09101576, 15.75486207 49.09136684, 15.75488821 49.09145075, 15.75486643 49.091718, 15.75486201 49.09173365, 15.75472359 49.09222327, 15.75469569 49.09237652, 15.75471148 49.09250394, 15.75498142 49.09291017, 15.75506016 49.0930685, 15.75511313 49.09315956, 15.75518295 49.09320698, 15.75527967 49.09324692, 15.75539169 49.09326291, 15.75590059 49.09315035, 15.75642017 49.09302275, 15.75656769 49.09300079, 15.75670952 49.0930078, 15.75690233 49.09302206, 15.75713933 49.09304306, 15.75740299 49.09306948, 15.75750453 49.09307912, 15.75759828 49.09311204, 15.75763685 49.0931436, 15.75766115 49.09318087, 15.75764482 49.09321234, 15.75759481 49.09323317, 15.75749949 49.09326243, 15.75722518 49.09333413, 15.75720612 49.09334042, 15.75695954 49.09342172, 15.75700558 49.09347751), (15.75622248 49.08830732, 15.756264 49.08831756, 15.75618918 49.08835082, 15.75607502 49.08838714, 15.75587599 49.0884503, 15.75575704 49.08849423, 15.75532293 49.08862514, 15.75470108 49.08879911, 15.75464393 49.08881179, 15.75461751 49.08880489, 15.75460092 49.08877729, 15.7546341 49.08875162, 15.75546905 49.08849797, 15.75580867 49.08840602, 15.75614854 49.08831769, 15.75622248 49.08830732))"
};
