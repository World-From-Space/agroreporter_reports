// Field data for MAU250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAU250615",
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
    "2025-04-20": {
      "min": 0.279,
      "max": 0.583,
      "median": 0.447,
      "mean": 0.445,
      "sd": 0.059
    },
    "2025-04-22": {
      "min": 0.296,
      "max": 0.611,
      "median": 0.469,
      "mean": 0.465,
      "sd": 0.06
    },
    "2025-04-28": {
      "min": 0.345,
      "max": 0.657,
      "median": 0.528,
      "mean": 0.522,
      "sd": 0.06
    },
    "2025-05-14": {
      "min": 0.415,
      "max": 0.73,
      "median": 0.634,
      "mean": 0.626,
      "sd": 0.052
    },
    "2025-05-25": {
      "min": 0.439,
      "max": 0.746,
      "median": 0.662,
      "mean": 0.652,
      "sd": 0.054
    },
    "2025-06-12": {
      "min": 0.404,
      "max": 0.723,
      "median": 0.639,
      "mean": 0.629,
      "sd": 0.05
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 5.205,
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
        "area_ha": 3.034,
        "area_percentage": 0.583
      },
      "high_vegetation": {
        "area_ha": 2.17,
        "area_percentage": 0.417
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
    "evi_median": 0.642,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.34,
          "percentage": 6.55
        },
        "EVI_statistics": {
          "mean": 0.501,
          "median": 0.511,
          "min": 0.388,
          "max": 0.545
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.96,
          "percentage": 18.5
        },
        "EVI_statistics": {
          "mean": 0.585,
          "median": 0.589,
          "min": 0.545,
          "max": 0.609
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 2.91,
          "percentage": 55.94
        },
        "EVI_statistics": {
          "mean": 0.644,
          "median": 0.645,
          "min": 0.61,
          "max": 0.674
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.99,
          "percentage": 19.0
        },
        "EVI_statistics": {
          "mean": 0.687,
          "median": 0.685,
          "min": 0.674,
          "max": 0.732
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
            "ha": 0.1,
            "area_percentage": 2.01,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 1.15,
            "area_percentage": 23.09,
            "zone_number": 2
          },
          "similar": {
            "ha": 2.52,
            "area_percentage": 50.6,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.86,
            "area_percentage": 17.27,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.35,
            "area_percentage": 7.03,
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
      "old_value": 0.662,
      "new_value": 0.642,
      "difference": -0.021
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.0,
          "percentage": 0.07,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 0.19,
          "percentage": 3.7,
          "zone_number": 2
        },
        "no_change": {
          "ha": 4.98,
          "percentage": 95.64,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.03,
          "percentage": 0.59,
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
          "ha": 0.47,
          "percentage": 9.08,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.82,
          "percentage": 15.7,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 2.61,
          "percentage": 50.08,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.84,
          "percentage": 16.22,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.46,
          "percentage": 8.92,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.246774300059524 49.13216200916058)",
          "new_value": 0.621,
          "old_value": 0.686,
          "value_difference": -0.065,
          "area_ha": 0.086,
          "category": "major_decline",
          "location": "NE",
          "id": 1
        },
        {
          "geometry": "POINT (16.244959459464287 49.13080132543796)",
          "new_value": 0.61,
          "old_value": 0.688,
          "value_difference": -0.078,
          "area_ha": 0.22,
          "category": "major_decline",
          "location": "C",
          "id": 2
        },
        {
          "geometry": "POINT (16.246985328035716 49.1317351279927)",
          "new_value": 0.666,
          "old_value": 0.635,
          "value_difference": 0.031,
          "area_ha": 0.133,
          "category": "major_growth",
          "location": "NE",
          "id": 3
        },
        {
          "geometry": "POINT (16.24626783291667 49.12968076237226)",
          "new_value": 0.675,
          "old_value": 0.647,
          "value_difference": 0.028,
          "area_ha": 0.063,
          "category": "major_growth",
          "location": "SE",
          "id": 4
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 1568.101,
      "historical_average": 1570.641
    },
    "accumulated_precipitation_since_seeding": {
      "current": 255.785,
      "historical_mean": 390.001
    },
    "precipitation_summary": {
      "last_3_days": 0.0,
      "last_7_days": 12.314,
      "last_14_days": 30.835,
      "last_30_days": 59.968
    },
    "standardized_precipitation_index": {
      "1_month": -0.772,
      "3_month": -1.857,
      "6_month": -1.964
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-06-11 00:00:00",
          "temperature_mean": 16.1,
          "temperature_min": 10.946,
          "temperature_max": 19.097,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.32,
          "soiltemperature_0to10cm_mean": 17.164,
          "soilmoisture_0to10cm": 0.297,
          "windspeed_mean": 3.099
        },
        {
          "time": "2025-06-12 00:00:00",
          "temperature_mean": 15.973,
          "temperature_min": 8.004,
          "temperature_max": 21.711,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.005,
          "soiltemperature_0to10cm_mean": 16.875,
          "soilmoisture_0to10cm": 0.281,
          "windspeed_mean": 1.532
        },
        {
          "time": "2025-06-13 00:00:00",
          "temperature_mean": 17.308,
          "temperature_min": 11.277,
          "temperature_max": 22.59,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 17.762,
          "soilmoisture_0to10cm": 0.266,
          "windspeed_mean": 2.451
        },
        {
          "time": "2025-06-14 00:00:00",
          "temperature_mean": 18.566,
          "temperature_min": 11.456,
          "temperature_max": 24.871,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.004,
          "soiltemperature_0to10cm_mean": 18.623,
          "soilmoisture_0to10cm": 0.253,
          "windspeed_mean": 1.926
        },
        {
          "time": "2025-06-15 00:00:00",
          "temperature_mean": 21.641,
          "temperature_min": 12.569,
          "temperature_max": 28.614,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.065,
          "soiltemperature_0to10cm_mean": 20.597,
          "soilmoisture_0to10cm": 0.241,
          "windspeed_mean": 1.214
        },
        {
          "time": "2025-06-16 00:00:00",
          "temperature_mean": 16.809,
          "temperature_min": 14.7,
          "temperature_max": 19.277,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.987,
          "soiltemperature_0to10cm_mean": 17.499,
          "soilmoisture_0to10cm": 0.279,
          "windspeed_mean": 3.562
        },
        {
          "time": "2025-06-17 00:00:00",
          "temperature_mean": 17.868,
          "temperature_min": 13.359,
          "temperature_max": 22.413,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.696,
          "soiltemperature_0to10cm_mean": 17.826,
          "soilmoisture_0to10cm": 0.291,
          "windspeed_mean": 2.646
        },
        {
          "time": "2025-06-18 00:00:00",
          "temperature_mean": 20.268,
          "temperature_min": 12.046,
          "temperature_max": 26.58,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.614,
          "soiltemperature_0to10cm_mean": 19.898,
          "soilmoisture_0to10cm": 0.273,
          "windspeed_mean": 1.133
        },
        {
          "time": "2025-06-19 00:00:00",
          "temperature_mean": 20.779,
          "temperature_min": 15.533,
          "temperature_max": 25.245,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.305,
          "soiltemperature_0to10cm_mean": 20.452,
          "soilmoisture_0to10cm": 0.256,
          "windspeed_mean": 3.225
        },
        {
          "time": "2025-06-20 00:00:00",
          "temperature_mean": 17.467,
          "temperature_min": 11.478,
          "temperature_max": 22.237,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.026,
          "soiltemperature_0to10cm_mean": 19.093,
          "soilmoisture_0to10cm": 0.241,
          "windspeed_mean": 2.155
        },
        {
          "time": "2025-06-21 00:00:00",
          "temperature_mean": 18.283,
          "temperature_min": 11.006,
          "temperature_max": 23.075,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.069,
          "soiltemperature_0to10cm_mean": 18.792,
          "soilmoisture_0to10cm": 0.228,
          "windspeed_mean": 0.976
        },
        {
          "time": "2025-06-22 00:00:00",
          "temperature_mean": 21.474,
          "temperature_min": 12.734,
          "temperature_max": 27.715,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.034,
          "soiltemperature_0to10cm_mean": 20.411,
          "soilmoisture_0to10cm": 0.217,
          "windspeed_mean": 0.842
        },
        {
          "time": "2025-06-23 00:00:00",
          "temperature_mean": 22.546,
          "temperature_min": 15.93,
          "temperature_max": 30.359,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.661,
          "soiltemperature_0to10cm_mean": 21.482,
          "soilmoisture_0to10cm": 0.214,
          "windspeed_mean": 1.975
        },
        {
          "time": "2025-06-24 00:00:00",
          "temperature_mean": 21.104,
          "temperature_min": 15.856,
          "temperature_max": 26.074,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.356,
          "soiltemperature_0to10cm_mean": 21.091,
          "soilmoisture_0to10cm": 0.236,
          "windspeed_mean": 3.393
        },
        {
          "time": "2025-06-25 00:00:00",
          "temperature_mean": 23.561,
          "temperature_min": 16.097,
          "temperature_max": 29.182,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.206,
          "soiltemperature_0to10cm_mean": 22.564,
          "soilmoisture_0to10cm": 0.221,
          "windspeed_mean": 3.008
        },
        {
          "time": "2025-06-26 00:00:00",
          "temperature_mean": 24.62,
          "temperature_min": 18.168,
          "temperature_max": 32.069,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.577,
          "soiltemperature_0to10cm_mean": 24.296,
          "soilmoisture_0to10cm": 0.218,
          "windspeed_mean": 0.681
        },
        {
          "time": "2025-06-27 00:00:00",
          "temperature_mean": 21.679,
          "temperature_min": 18.889,
          "temperature_max": 26.881,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.525,
          "soiltemperature_0to10cm_mean": 22.3,
          "soilmoisture_0to10cm": 0.265,
          "windspeed_mean": 3.82
        },
        {
          "time": "2025-06-28 00:00:00",
          "temperature_mean": 21.408,
          "temperature_min": 17.571,
          "temperature_max": 25.555,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.429,
          "soiltemperature_0to10cm_mean": 21.657,
          "soilmoisture_0to10cm": 0.248,
          "windspeed_mean": 3.063
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
      "date": "2025-04-24",
      "day_since": 49
    },
    "beginning_of_heading": {
      "date": "2025-05-29",
      "day_since": 14
    },
    "beginning_of_ripenes": {
      "date": "2025-07-05",
      "day_since": -23
    },
    "harvest": {
      "date": "2025-07-23",
      "day_since": -41
    }
  },
  "timing_of_field_operations": {
    "2025-06-11": {
      "weather_conditions": {
        "temperature_mean": 16.1,
        "temperature_min": 10.946,
        "temperature_max": 19.097,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.32,
        "soiltemperature_0to10cm_mean": 17.164,
        "soilmoisture_0to10cm": 0.297,
        "windspeed_mean": 3.099
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
        "temperature_mean": 15.973,
        "temperature_min": 8.004,
        "temperature_max": 21.711,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.005,
        "soiltemperature_0to10cm_mean": 16.875,
        "soilmoisture_0to10cm": 0.281,
        "windspeed_mean": 1.532
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
        "temperature_mean": 17.308,
        "temperature_min": 11.277,
        "temperature_max": 22.59,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 17.762,
        "soilmoisture_0to10cm": 0.266,
        "windspeed_mean": 2.451
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
        "temperature_mean": 18.566,
        "temperature_min": 11.456,
        "temperature_max": 24.871,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.004,
        "soiltemperature_0to10cm_mean": 18.623,
        "soilmoisture_0to10cm": 0.253,
        "windspeed_mean": 1.926
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
        "temperature_mean": 21.641,
        "temperature_min": 12.569,
        "temperature_max": 28.614,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.065,
        "soiltemperature_0to10cm_mean": 20.597,
        "soilmoisture_0to10cm": 0.241,
        "windspeed_mean": 1.214
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
        "temperature_mean": 16.809,
        "temperature_min": 14.7,
        "temperature_max": 19.277,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.987,
        "soiltemperature_0to10cm_mean": 17.499,
        "soilmoisture_0to10cm": 0.279,
        "windspeed_mean": 3.562
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
        "temperature_mean": 17.868,
        "temperature_min": 13.359,
        "temperature_max": 22.413,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.696,
        "soiltemperature_0to10cm_mean": 17.826,
        "soilmoisture_0to10cm": 0.291,
        "windspeed_mean": 2.646
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
        "temperature_mean": 20.268,
        "temperature_min": 12.046,
        "temperature_max": 26.58,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.614,
        "soiltemperature_0to10cm_mean": 19.898,
        "soilmoisture_0to10cm": 0.273,
        "windspeed_mean": 1.133
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
        "temperature_mean": 20.779,
        "temperature_min": 15.533,
        "temperature_max": 25.245,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.305,
        "soiltemperature_0to10cm_mean": 20.452,
        "soilmoisture_0to10cm": 0.256,
        "windspeed_mean": 3.225
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
        "temperature_mean": 17.467,
        "temperature_min": 11.478,
        "temperature_max": 22.237,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.026,
        "soiltemperature_0to10cm_mean": 19.093,
        "soilmoisture_0to10cm": 0.241,
        "windspeed_mean": 2.155
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
        "temperature_mean": 18.283,
        "temperature_min": 11.006,
        "temperature_max": 23.075,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.069,
        "soiltemperature_0to10cm_mean": 18.792,
        "soilmoisture_0to10cm": 0.228,
        "windspeed_mean": 0.976
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
        "temperature_mean": 21.474,
        "temperature_min": 12.734,
        "temperature_max": 27.715,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.034,
        "soiltemperature_0to10cm_mean": 20.411,
        "soilmoisture_0to10cm": 0.217,
        "windspeed_mean": 0.842
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
        "temperature_mean": 22.546,
        "temperature_min": 15.93,
        "temperature_max": 30.359,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.661,
        "soiltemperature_0to10cm_mean": 21.482,
        "soilmoisture_0to10cm": 0.214,
        "windspeed_mean": 1.975
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
        "temperature_mean": 21.104,
        "temperature_min": 15.856,
        "temperature_max": 26.074,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.356,
        "soiltemperature_0to10cm_mean": 21.091,
        "soilmoisture_0to10cm": 0.236,
        "windspeed_mean": 3.393
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
        "temperature_mean": 23.561,
        "temperature_min": 16.097,
        "temperature_max": 29.182,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.206,
        "soiltemperature_0to10cm_mean": 22.564,
        "soilmoisture_0to10cm": 0.221,
        "windspeed_mean": 3.008
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
        "temperature_mean": 24.62,
        "temperature_min": 18.168,
        "temperature_max": 32.069,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.577,
        "soiltemperature_0to10cm_mean": 24.296,
        "soilmoisture_0to10cm": 0.218,
        "windspeed_mean": 0.681
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
        "temperature_mean": 21.679,
        "temperature_min": 18.889,
        "temperature_max": 26.881,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.525,
        "soiltemperature_0to10cm_mean": 22.3,
        "soilmoisture_0to10cm": 0.265,
        "windspeed_mean": 3.82
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
    "2025-06-28": {
      "weather_conditions": {
        "temperature_mean": 21.408,
        "temperature_min": 17.571,
        "temperature_max": 25.555,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.429,
        "soiltemperature_0to10cm_mean": 21.657,
        "soilmoisture_0to10cm": 0.248,
        "windspeed_mean": 3.063
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
  "polygon_wkt": "POLYGON ((16.2437566 49.12948877, 16.24404111 49.12983694, 16.24444264 49.13035518, 16.24486002 49.13086621, 16.24520908 49.13125485, 16.24548853 49.13154973, 16.24554696 49.13160023, 16.24571783 49.13171899, 16.24599807 49.13189268, 16.2467306 49.13237649, 16.24682881 49.13243161, 16.24685615 49.13245191, 16.24689616 49.13246541, 16.24694228 49.13246883, 16.24699948 49.1324587, 16.24704328 49.13243322, 16.24707171 49.13240372, 16.2471066 49.13235363, 16.24712736 49.13228745, 16.2471433 49.13224095, 16.24715131 49.13218456, 16.24715896 49.13206531, 16.24717021 49.13197254, 16.24718055 49.13192563, 16.24719814 49.13187627, 16.24724764 49.13176672, 16.24728464 49.13167373, 16.24729723 49.131627, 16.24730187 49.131567, 16.24730099 49.13148648, 16.24720893 49.1311965, 16.24709192 49.13095266, 16.24687168 49.13061983, 16.24680513 49.13052118, 16.24672025 49.13041941, 16.24662061 49.13029184, 16.24660913 49.13027273, 16.24659986 49.13024746, 16.24660068 49.13021065, 16.24660003 49.13016295, 16.24661716 49.13006343, 16.24662391 49.12997729, 16.24661126 49.12984727, 16.24650117 49.12952731, 16.24645128 49.12945202, 16.24639766 49.12938101, 16.24618604 49.12919921, 16.24603007 49.12906994, 16.24595234 49.12900048, 16.24588824 49.12893763, 16.24583504 49.12887744, 16.2457867 49.12881366, 16.24562337 49.12886798, 16.24510733 49.12903959, 16.2437566 49.12948877))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
