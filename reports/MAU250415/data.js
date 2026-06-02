// Field data for MAU250415 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAU250415",
  "metadata": {
    "field_area_ha": 5.285,
    "location": {
      "country": " Czechia",
      "region": " South Moravian",
      "subregion": "Senorady"
    },
    "terrain": {
      "variability": 13.852,
      "mean_elevation": 402.049,
      "min_elevation": 395.082,
      "max_elevation": 408.935
    },
    "soil": {
      "bulk_density kg/dm³": 1.33,
      "cation_exchange_capacity cmol(c)/kg": 22.03,
      "clay_particles g/100g (%)": 20.697,
      "sand particles g/100g (%)": 21.538,
      "silt particles g/100g (%)": 57.765,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-02-28": {
      "min": 0.064,
      "max": 0.295,
      "median": 0.143,
      "mean": 0.146,
      "sd": 0.031
    },
    "2025-03-05": {
      "min": 0.157,
      "max": 0.375,
      "median": 0.225,
      "mean": 0.231,
      "sd": 0.027
    },
    "2025-03-08": {
      "min": 0.137,
      "max": 0.302,
      "median": 0.179,
      "mean": 0.185,
      "sd": 0.025
    },
    "2025-03-21": {
      "min": 0.118,
      "max": 0.312,
      "median": 0.163,
      "mean": 0.169,
      "sd": 0.026
    },
    "2025-04-03": {
      "min": 0.162,
      "max": 0.381,
      "median": 0.257,
      "mean": 0.261,
      "sd": 0.038
    },
    "2025-04-09": {
      "min": 0.2,
      "max": 0.431,
      "median": 0.3,
      "mean": 0.303,
      "sd": 0.043
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 5.205,
      "area_percentage": 1.0
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.983,
        "area_percentage": 0.189
      },
      "low_vegetation": {
        "area_ha": 3.576,
        "area_percentage": 0.687
      },
      "medium vegetation": {
        "area_ha": 0.646,
        "area_percentage": 0.124
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
    "evi_median": 0.339,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.63,
          "percentage": 12.07
        },
        "EVI_statistics": {
          "mean": 0.27,
          "median": 0.274,
          "min": 0.223,
          "max": 0.288
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 1.26,
          "percentage": 24.14
        },
        "EVI_statistics": {
          "mean": 0.307,
          "median": 0.308,
          "min": 0.288,
          "max": 0.322
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 1.36,
          "percentage": 26.04
        },
        "EVI_statistics": {
          "mean": 0.339,
          "median": 0.338,
          "min": 0.322,
          "max": 0.356
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.99,
          "percentage": 19.04
        },
        "EVI_statistics": {
          "mean": 0.372,
          "median": 0.372,
          "min": 0.356,
          "max": 0.39
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.97,
          "percentage": 18.71
        },
        "EVI_statistics": {
          "mean": 0.408,
          "median": 0.405,
          "min": 0.39,
          "max": 0.466
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.97,
            "area_percentage": 19.48,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.81,
            "area_percentage": 16.27,
            "zone_number": 2
          },
          "similar": {
            "ha": 1.45,
            "area_percentage": 29.12,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.56,
            "area_percentage": 11.24,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.19,
            "area_percentage": 23.9,
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
      "old_value": 0.163,
      "new_value": 0.339,
      "difference": 0.173
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
          "ha": 1.35,
          "percentage": 25.96,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 3.85,
          "percentage": 74.04,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.245381515416668 49.12912048083942)",
          "new_value": 0.359,
          "old_value": 0.169,
          "value_difference": 0.19,
          "area_ha": 0.078,
          "category": "major_growth",
          "location": "S",
          "id": 1
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 0.75,
          "percentage": 14.37,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.74,
          "percentage": 14.21,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 2.11,
          "percentage": 40.45,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.92,
          "percentage": 17.72,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.69,
          "percentage": 13.25,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.247280767202383 49.13160172762774)",
          "new_value": 0.286,
          "old_value": 0.169,
          "value_difference": 0.117,
          "area_ha": 0.076,
          "category": "major_decline",
          "location": "NE",
          "id": 1
        },
        {
          "geometry": "POINT (16.245845776964288 49.13162840770073)",
          "new_value": 0.322,
          "old_value": 0.193,
          "value_difference": 0.129,
          "area_ha": 0.177,
          "category": "major_decline",
          "location": "N",
          "id": 2
        },
        {
          "geometry": "POINT (16.246352244107143 49.1295206819343)",
          "new_value": 0.306,
          "old_value": 0.175,
          "value_difference": 0.131,
          "area_ha": 0.066,
          "category": "major_decline",
          "location": "SE",
          "id": 3
        },
        {
          "geometry": "POINT (16.244115347559525 49.12949400186131)",
          "new_value": 0.301,
          "old_value": 0.175,
          "value_difference": 0.126,
          "area_ha": 0.101,
          "category": "major_decline",
          "location": "SW",
          "id": 4
        },
        {
          "geometry": "POINT (16.24576136577381 49.12896040040146)",
          "new_value": 0.308,
          "old_value": 0.175,
          "value_difference": 0.133,
          "area_ha": 0.128,
          "category": "major_decline",
          "location": "S",
          "id": 5
        },
        {
          "geometry": "POINT (16.24664768327381 49.13080132543796)",
          "new_value": 0.39,
          "old_value": 0.16,
          "value_difference": 0.23,
          "area_ha": 0.058,
          "category": "major_growth",
          "location": "E",
          "id": 6
        },
        {
          "geometry": "POINT (16.245719160178574 49.12973412251825)",
          "new_value": 0.374,
          "old_value": 0.152,
          "value_difference": 0.222,
          "area_ha": 0.231,
          "category": "major_growth",
          "location": "S",
          "id": 7
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
      "current": 159.264,
      "historical_mean": 255.858
    },
    "precipitation_summary": {
      "last_3_days": 4.615,
      "last_7_days": 5.227,
      "last_14_days": 5.99,
      "last_30_days": 28.168
    },
    "standardized_precipitation_index": {
      "1_month": -1.007,
      "3_month": -1.739,
      "6_month": -2.427
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-04-11 00:00:00",
          "temperature_mean": 9.685,
          "temperature_min": 4.246,
          "temperature_max": 14.989,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.397,
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
          "totalcloudcover_mean": 0.444,
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
          "totalcloudcover_mean": 0.721,
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
          "totalcloudcover_mean": 0.63,
          "soiltemperature_0to10cm_mean": 12.126,
          "soilmoisture_0to10cm": 0.304,
          "windspeed_mean": 1.866
        },
        {
          "time": "2025-04-15 00:00:00",
          "temperature_mean": 12.703,
          "temperature_min": 10.771,
          "temperature_max": 15.699,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.953,
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
          "totalcloudcover_mean": 0.487,
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
          "totalcloudcover_mean": 0.696,
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
          "totalcloudcover_mean": 0.971,
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
          "totalcloudcover_mean": 0.519,
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
          "totalcloudcover_mean": 0.424,
          "soiltemperature_0to10cm_mean": 12.751,
          "soilmoisture_0to10cm": 0.323,
          "windspeed_mean": 1.985
        },
        {
          "time": "2025-04-21 00:00:00",
          "temperature_mean": 14.361,
          "temperature_min": 6.163,
          "temperature_max": 20.576,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.914,
          "soiltemperature_0to10cm_mean": 13.753,
          "soilmoisture_0to10cm": 0.315,
          "windspeed_mean": 0.321
        },
        {
          "time": "2025-04-22 00:00:00",
          "temperature_mean": 14.791,
          "temperature_min": 9.809,
          "temperature_max": 19.71,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.404,
          "soiltemperature_0to10cm_mean": 14.659,
          "soilmoisture_0to10cm": 0.373,
          "windspeed_mean": 2.284
        },
        {
          "time": "2025-04-23 00:00:00",
          "temperature_mean": 15.641,
          "temperature_min": 10.933,
          "temperature_max": 20.34,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.755,
          "soiltemperature_0to10cm_mean": 15.027,
          "soilmoisture_0to10cm": 0.344,
          "windspeed_mean": 1.507
        },
        {
          "time": "2025-04-24 00:00:00",
          "temperature_mean": 14.079,
          "temperature_min": 10.64,
          "temperature_max": 17.221,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.963,
          "soiltemperature_0to10cm_mean": 14.381,
          "soilmoisture_0to10cm": 0.346,
          "windspeed_mean": 1.847
        },
        {
          "time": "2025-04-25 00:00:00",
          "temperature_mean": 10.263,
          "temperature_min": 8.284,
          "temperature_max": 11.368,
          "precipitation_sum": 11.0,
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
          "totalcloudcover_mean": 0.255,
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
          "totalcloudcover_mean": 0.0,
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
          "totalcloudcover_mean": 0.052,
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
      "date": "2024-10-28",
      "day_since": 168
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-28",
      "day_since": -14
    },
    "beginning_of_heading": {
      "date": "2025-06-06",
      "day_since": -53
    },
    "beginning_of_ripenes": {
      "date": "2025-07-22",
      "day_since": -99
    },
    "harvest": {
      "date": "2025-08-09",
      "day_since": -117
    }
  },
  "timing_of_field_operations": {
    "2025-04-11": {
      "weather_conditions": {
        "temperature_mean": 9.685,
        "temperature_min": 4.246,
        "temperature_max": 14.989,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.397,
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
      }
    },
    "2025-04-12": {
      "weather_conditions": {
        "temperature_mean": 11.183,
        "temperature_min": 7.354,
        "temperature_max": 15.079,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.444,
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
      }
    },
    "2025-04-13": {
      "weather_conditions": {
        "temperature_mean": 11.799,
        "temperature_min": 7.177,
        "temperature_max": 16.053,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.721,
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
      }
    },
    "2025-04-14": {
      "weather_conditions": {
        "temperature_mean": 13.235,
        "temperature_min": 6.398,
        "temperature_max": 18.839,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.63,
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
      }
    },
    "2025-04-15": {
      "weather_conditions": {
        "temperature_mean": 12.703,
        "temperature_min": 10.771,
        "temperature_max": 15.699,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.953,
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
      }
    },
    "2025-04-16": {
      "weather_conditions": {
        "temperature_mean": 16.242,
        "temperature_min": 10.324,
        "temperature_max": 22.335,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.487,
        "soiltemperature_0to10cm_mean": 14.433,
        "soilmoisture_0to10cm": 0.326,
        "windspeed_mean": 3.89
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
      }
    },
    "2025-04-17": {
      "weather_conditions": {
        "temperature_mean": 17.407,
        "temperature_min": 13.028,
        "temperature_max": 22.765,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.696,
        "soiltemperature_0to10cm_mean": 15.635,
        "soilmoisture_0to10cm": 0.311,
        "windspeed_mean": 5.013
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
      }
    },
    "2025-04-18": {
      "weather_conditions": {
        "temperature_mean": 12.35,
        "temperature_min": 8.19,
        "temperature_max": 14.942,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.971,
        "soiltemperature_0to10cm_mean": 13.198,
        "soilmoisture_0to10cm": 0.329,
        "windspeed_mean": 1.111
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
      }
    },
    "2025-04-19": {
      "weather_conditions": {
        "temperature_mean": 10.945,
        "temperature_min": 4.592,
        "temperature_max": 15.844,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.519,
        "soiltemperature_0to10cm_mean": 11.215,
        "soilmoisture_0to10cm": 0.339,
        "windspeed_mean": 1.927
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
      }
    },
    "2025-04-20": {
      "weather_conditions": {
        "temperature_mean": 12.963,
        "temperature_min": 7.615,
        "temperature_max": 19.157,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.424,
        "soiltemperature_0to10cm_mean": 12.751,
        "soilmoisture_0to10cm": 0.323,
        "windspeed_mean": 1.985
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
      }
    },
    "2025-04-21": {
      "weather_conditions": {
        "temperature_mean": 14.361,
        "temperature_min": 6.163,
        "temperature_max": 20.576,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.914,
        "soiltemperature_0to10cm_mean": 13.753,
        "soilmoisture_0to10cm": 0.315,
        "windspeed_mean": 0.321
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
      }
    },
    "2025-04-22": {
      "weather_conditions": {
        "temperature_mean": 14.791,
        "temperature_min": 9.809,
        "temperature_max": 19.71,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.404,
        "soiltemperature_0to10cm_mean": 14.659,
        "soilmoisture_0to10cm": 0.373,
        "windspeed_mean": 2.284
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
      }
    },
    "2025-04-23": {
      "weather_conditions": {
        "temperature_mean": 15.641,
        "temperature_min": 10.933,
        "temperature_max": 20.34,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.755,
        "soiltemperature_0to10cm_mean": 15.027,
        "soilmoisture_0to10cm": 0.344,
        "windspeed_mean": 1.507
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
      }
    },
    "2025-04-24": {
      "weather_conditions": {
        "temperature_mean": 14.079,
        "temperature_min": 10.64,
        "temperature_max": 17.221,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.963,
        "soiltemperature_0to10cm_mean": 14.381,
        "soilmoisture_0to10cm": 0.346,
        "windspeed_mean": 1.847
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
      }
    },
    "2025-04-25": {
      "weather_conditions": {
        "temperature_mean": 10.263,
        "temperature_min": 8.284,
        "temperature_max": 11.368,
        "precipitation_sum": 11.0,
        "totalcloudcover_mean": 0.999,
        "soiltemperature_0to10cm_mean": 11.348,
        "soilmoisture_0to10cm": 0.398,
        "windspeed_mean": 3.187
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
      }
    },
    "2025-04-26": {
      "weather_conditions": {
        "temperature_mean": 10.931,
        "temperature_min": 7.255,
        "temperature_max": 15.203,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.255,
        "soiltemperature_0to10cm_mean": 11.739,
        "soilmoisture_0to10cm": 0.376,
        "windspeed_mean": 4.223
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
      }
    },
    "2025-04-27": {
      "weather_conditions": {
        "temperature_mean": 10.043,
        "temperature_min": 4.721,
        "temperature_max": 15.123,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 11.15,
        "soilmoisture_0to10cm": 0.355,
        "windspeed_mean": 2.863
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
      }
    },
    "2025-04-28": {
      "weather_conditions": {
        "temperature_mean": 12.574,
        "temperature_min": 5.305,
        "temperature_max": 18.676,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.052,
        "soiltemperature_0to10cm_mean": 12.381,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 1.808
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
  "polygon_wkt": "POLYGON ((16.2437566 49.12948877, 16.24404111 49.12983694, 16.24444264 49.13035518, 16.24486002 49.13086621, 16.24520908 49.13125485, 16.24548853 49.13154973, 16.24554696 49.13160023, 16.24571783 49.13171899, 16.24599807 49.13189268, 16.2467306 49.13237649, 16.24682881 49.13243161, 16.24685615 49.13245191, 16.24689616 49.13246541, 16.24694228 49.13246883, 16.24699948 49.1324587, 16.24704328 49.13243322, 16.24707171 49.13240372, 16.2471066 49.13235363, 16.24712736 49.13228745, 16.2471433 49.13224095, 16.24715131 49.13218456, 16.24715896 49.13206531, 16.24717021 49.13197254, 16.24718055 49.13192563, 16.24719814 49.13187627, 16.24724764 49.13176672, 16.24728464 49.13167373, 16.24729723 49.131627, 16.24730187 49.131567, 16.24730099 49.13148648, 16.24720893 49.1311965, 16.24709192 49.13095266, 16.24687168 49.13061983, 16.24680513 49.13052118, 16.24672025 49.13041941, 16.24662061 49.13029184, 16.24660913 49.13027273, 16.24659986 49.13024746, 16.24660068 49.13021065, 16.24660003 49.13016295, 16.24661716 49.13006343, 16.24662391 49.12997729, 16.24661126 49.12984727, 16.24650117 49.12952731, 16.24645128 49.12945202, 16.24639766 49.12938101, 16.24618604 49.12919921, 16.24603007 49.12906994, 16.24595234 49.12900048, 16.24588824 49.12893763, 16.24583504 49.12887744, 16.2457867 49.12881366, 16.24562337 49.12886798, 16.24510733 49.12903959, 16.2437566 49.12948877))"
};
