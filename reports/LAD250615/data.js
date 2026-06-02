// Field data for LAD250615 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAD250615",
  "metadata": {
    "field_area_ha": 21.833,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lesonice"
    },
    "terrain": {
      "variability": 20.132,
      "mean_elevation": 543.793,
      "min_elevation": 535.254,
      "max_elevation": 555.385
    },
    "soil": {
      "bulk_density kg/dm³": 1.332,
      "cation_exchange_capacity cmol(c)/kg": 20.964,
      "clay_particles g/100g (%)": 20.336,
      "sand particles g/100g (%)": 37.904,
      "silt particles g/100g (%)": 41.779,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-04-20": {
      "min": 0.274,
      "max": 0.731,
      "median": 0.672,
      "mean": 0.647,
      "sd": 0.069
    },
    "2025-04-22": {
      "min": 0.249,
      "max": 0.751,
      "median": 0.656,
      "mean": 0.64,
      "sd": 0.068
    },
    "2025-05-03": {
      "min": 0.422,
      "max": 0.761,
      "median": 0.675,
      "mean": 0.664,
      "sd": 0.051
    },
    "2025-05-10": {
      "min": 0.44,
      "max": 0.772,
      "median": 0.689,
      "mean": 0.679,
      "sd": 0.042
    },
    "2025-05-14": {
      "min": 0.382,
      "max": 0.767,
      "median": 0.681,
      "mean": 0.669,
      "sd": 0.047
    },
    "2025-06-14": {
      "min": 0.329,
      "max": 0.738,
      "median": 0.648,
      "mean": 0.638,
      "sd": 0.044
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 21.885,
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
        "area_ha": 0.004,
        "area_percentage": 0.0
      },
      "medium vegetation": {
        "area_ha": 12.549,
        "area_percentage": 0.573
      },
      "high_vegetation": {
        "area_ha": 9.333,
        "area_percentage": 0.426
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
    "evi_median": 0.645,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.0,
          "percentage": 4.56
        },
        "EVI_statistics": {
          "mean": 0.499,
          "median": 0.499,
          "min": 0.344,
          "max": 0.548
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.56,
          "percentage": 16.25
        },
        "EVI_statistics": {
          "mean": 0.592,
          "median": 0.595,
          "min": 0.548,
          "max": 0.612
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 15.09,
          "percentage": 68.97
        },
        "EVI_statistics": {
          "mean": 0.647,
          "median": 0.649,
          "min": 0.613,
          "max": 0.677
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 2.24,
          "percentage": 10.22
        },
        "EVI_statistics": {
          "mean": 0.689,
          "median": 0.686,
          "min": 0.677,
          "max": 0.74
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
            "ha": 0.5,
            "area_percentage": 2.34,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 4.48,
            "area_percentage": 20.92,
            "zone_number": 2
          },
          "similar": {
            "ha": 10.22,
            "area_percentage": 47.73,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 4.95,
            "area_percentage": 23.12,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.26,
            "area_percentage": 5.89,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-06-15",
      "reference_image_date": "2025-05-14",
      "change_period": 32
    },
    "median_EVI_change": {
      "old_value": 0.681,
      "new_value": 0.645,
      "difference": -0.035
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.0,
          "percentage": 0.02,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 1.02,
          "percentage": 4.65,
          "zone_number": 2
        },
        "no_change": {
          "ha": 20.84,
          "percentage": 95.21,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.03,
          "percentage": 0.13,
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
          "ha": 2.85,
          "percentage": 13.03,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.24,
          "percentage": 14.81,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 9.96,
          "percentage": 45.5,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.95,
          "percentage": 13.49,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.88,
          "percentage": 13.17,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 1596.561,
      "historical_average": 1592.496
    },
    "accumulated_precipitation_since_seeding": {
      "current": 292.782,
      "historical_mean": 423.13
    },
    "precipitation_summary": {
      "last_3_days": 0.032,
      "last_7_days": 12.541,
      "last_14_days": 36.375,
      "last_30_days": 65.775
    },
    "standardized_precipitation_index": {
      "1_month": -0.709,
      "3_month": -1.471,
      "6_month": -1.913
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-06-11 00:00:00",
          "temperature_mean": 15.388,
          "temperature_min": 9.907,
          "temperature_max": 18.454,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.322,
          "soiltemperature_0to10cm_mean": 16.42,
          "soilmoisture_0to10cm": 0.324,
          "windspeed_mean": 2.912
        },
        {
          "time": "2025-06-12 00:00:00",
          "temperature_mean": 15.167,
          "temperature_min": 7.506,
          "temperature_max": 21.01,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.002,
          "soiltemperature_0to10cm_mean": 15.875,
          "soilmoisture_0to10cm": 0.309,
          "windspeed_mean": 1.665
        },
        {
          "time": "2025-06-13 00:00:00",
          "temperature_mean": 16.709,
          "temperature_min": 9.55,
          "temperature_max": 22.414,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 16.929,
          "soilmoisture_0to10cm": 0.296,
          "windspeed_mean": 2.15
        },
        {
          "time": "2025-06-14 00:00:00",
          "temperature_mean": 17.684,
          "temperature_min": 9.987,
          "temperature_max": 24.263,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 17.645,
          "soilmoisture_0to10cm": 0.283,
          "windspeed_mean": 2.012
        },
        {
          "time": "2025-06-15 00:00:00",
          "temperature_mean": 21.123,
          "temperature_min": 11.819,
          "temperature_max": 28.416,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.096,
          "soiltemperature_0to10cm_mean": 19.612,
          "soilmoisture_0to10cm": 0.271,
          "windspeed_mean": 1.215
        },
        {
          "time": "2025-06-16 00:00:00",
          "temperature_mean": 16.169,
          "temperature_min": 14.255,
          "temperature_max": 18.782,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.996,
          "soiltemperature_0to10cm_mean": 16.991,
          "soilmoisture_0to10cm": 0.302,
          "windspeed_mean": 3.61
        },
        {
          "time": "2025-06-17 00:00:00",
          "temperature_mean": 16.91,
          "temperature_min": 12.519,
          "temperature_max": 21.378,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.681,
          "soiltemperature_0to10cm_mean": 17.008,
          "soilmoisture_0to10cm": 0.3,
          "windspeed_mean": 2.299
        },
        {
          "time": "2025-06-18 00:00:00",
          "temperature_mean": 19.456,
          "temperature_min": 11.642,
          "temperature_max": 25.777,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.6,
          "soiltemperature_0to10cm_mean": 18.858,
          "soilmoisture_0to10cm": 0.284,
          "windspeed_mean": 1.353
        },
        {
          "time": "2025-06-19 00:00:00",
          "temperature_mean": 19.962,
          "temperature_min": 14.83,
          "temperature_max": 24.357,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.267,
          "soiltemperature_0to10cm_mean": 19.579,
          "soilmoisture_0to10cm": 0.268,
          "windspeed_mean": 3.05
        },
        {
          "time": "2025-06-20 00:00:00",
          "temperature_mean": 16.669,
          "temperature_min": 10.508,
          "temperature_max": 21.495,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.013,
          "soiltemperature_0to10cm_mean": 18.276,
          "soilmoisture_0to10cm": 0.255,
          "windspeed_mean": 2.021
        },
        {
          "time": "2025-06-21 00:00:00",
          "temperature_mean": 17.561,
          "temperature_min": 11.663,
          "temperature_max": 22.586,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.023,
          "soiltemperature_0to10cm_mean": 17.991,
          "soilmoisture_0to10cm": 0.242,
          "windspeed_mean": 1.454
        },
        {
          "time": "2025-06-22 00:00:00",
          "temperature_mean": 21.377,
          "temperature_min": 15.997,
          "temperature_max": 27.254,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.021,
          "soiltemperature_0to10cm_mean": 19.566,
          "soilmoisture_0to10cm": 0.231,
          "windspeed_mean": 1.391
        },
        {
          "time": "2025-06-23 00:00:00",
          "temperature_mean": 22.011,
          "temperature_min": 16.512,
          "temperature_max": 29.034,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.636,
          "soiltemperature_0to10cm_mean": 20.478,
          "soilmoisture_0to10cm": 0.23,
          "windspeed_mean": 2.493
        },
        {
          "time": "2025-06-24 00:00:00",
          "temperature_mean": 20.428,
          "temperature_min": 15.637,
          "temperature_max": 25.072,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.323,
          "soiltemperature_0to10cm_mean": 20.204,
          "soilmoisture_0to10cm": 0.252,
          "windspeed_mean": 3.844
        },
        {
          "time": "2025-06-25 00:00:00",
          "temperature_mean": 22.878,
          "temperature_min": 16.208,
          "temperature_max": 28.096,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.168,
          "soiltemperature_0to10cm_mean": 21.669,
          "soilmoisture_0to10cm": 0.236,
          "windspeed_mean": 3.227
        },
        {
          "time": "2025-06-26 00:00:00",
          "temperature_mean": 23.596,
          "temperature_min": 17.055,
          "temperature_max": 31.284,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.598,
          "soiltemperature_0to10cm_mean": 23.073,
          "soilmoisture_0to10cm": 0.238,
          "windspeed_mean": 0.827
        },
        {
          "time": "2025-06-27 00:00:00",
          "temperature_mean": 20.536,
          "temperature_min": 18.0,
          "temperature_max": 25.44,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.545,
          "soiltemperature_0to10cm_mean": 21.092,
          "soilmoisture_0to10cm": 0.299,
          "windspeed_mean": 4.034
        },
        {
          "time": "2025-06-28 00:00:00",
          "temperature_mean": 20.693,
          "temperature_min": 16.967,
          "temperature_max": 24.65,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.588,
          "soiltemperature_0to10cm_mean": 20.66,
          "soilmoisture_0to10cm": 0.279,
          "windspeed_mean": 2.974
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 257
    },
    "crop_emergence": {
      "date": "2024-10-12",
      "day_since": 243
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-20",
      "day_since": 53
    },
    "beginning_of_heading": {
      "date": "2025-05-30",
      "day_since": 13
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
        "temperature_mean": 15.388,
        "temperature_min": 9.907,
        "temperature_max": 18.454,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.322,
        "soiltemperature_0to10cm_mean": 16.42,
        "soilmoisture_0to10cm": 0.324,
        "windspeed_mean": 2.912
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
        "temperature_mean": 15.167,
        "temperature_min": 7.506,
        "temperature_max": 21.01,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.002,
        "soiltemperature_0to10cm_mean": 15.875,
        "soilmoisture_0to10cm": 0.309,
        "windspeed_mean": 1.665
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
        "temperature_mean": 16.709,
        "temperature_min": 9.55,
        "temperature_max": 22.414,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 16.929,
        "soilmoisture_0to10cm": 0.296,
        "windspeed_mean": 2.15
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
        "temperature_mean": 17.684,
        "temperature_min": 9.987,
        "temperature_max": 24.263,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 17.645,
        "soilmoisture_0to10cm": 0.283,
        "windspeed_mean": 2.012
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
        "temperature_mean": 21.123,
        "temperature_min": 11.819,
        "temperature_max": 28.416,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.096,
        "soiltemperature_0to10cm_mean": 19.612,
        "soilmoisture_0to10cm": 0.271,
        "windspeed_mean": 1.215
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
        "temperature_mean": 16.169,
        "temperature_min": 14.255,
        "temperature_max": 18.782,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.996,
        "soiltemperature_0to10cm_mean": 16.991,
        "soilmoisture_0to10cm": 0.302,
        "windspeed_mean": 3.61
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
        "temperature_mean": 16.91,
        "temperature_min": 12.519,
        "temperature_max": 21.378,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.681,
        "soiltemperature_0to10cm_mean": 17.008,
        "soilmoisture_0to10cm": 0.3,
        "windspeed_mean": 2.299
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
        "temperature_mean": 19.456,
        "temperature_min": 11.642,
        "temperature_max": 25.777,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.6,
        "soiltemperature_0to10cm_mean": 18.858,
        "soilmoisture_0to10cm": 0.284,
        "windspeed_mean": 1.353
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
        "temperature_mean": 19.962,
        "temperature_min": 14.83,
        "temperature_max": 24.357,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.267,
        "soiltemperature_0to10cm_mean": 19.579,
        "soilmoisture_0to10cm": 0.268,
        "windspeed_mean": 3.05
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
    "2025-06-20": {
      "weather_conditions": {
        "temperature_mean": 16.669,
        "temperature_min": 10.508,
        "temperature_max": 21.495,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.013,
        "soiltemperature_0to10cm_mean": 18.276,
        "soilmoisture_0to10cm": 0.255,
        "windspeed_mean": 2.021
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
        "temperature_mean": 17.561,
        "temperature_min": 11.663,
        "temperature_max": 22.586,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.023,
        "soiltemperature_0to10cm_mean": 17.991,
        "soilmoisture_0to10cm": 0.242,
        "windspeed_mean": 1.454
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
        "temperature_mean": 21.377,
        "temperature_min": 15.997,
        "temperature_max": 27.254,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.021,
        "soiltemperature_0to10cm_mean": 19.566,
        "soilmoisture_0to10cm": 0.231,
        "windspeed_mean": 1.391
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
        "temperature_mean": 22.011,
        "temperature_min": 16.512,
        "temperature_max": 29.034,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.636,
        "soiltemperature_0to10cm_mean": 20.478,
        "soilmoisture_0to10cm": 0.23,
        "windspeed_mean": 2.493
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
        "temperature_mean": 20.428,
        "temperature_min": 15.637,
        "temperature_max": 25.072,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.323,
        "soiltemperature_0to10cm_mean": 20.204,
        "soilmoisture_0to10cm": 0.252,
        "windspeed_mean": 3.844
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
        "temperature_mean": 22.878,
        "temperature_min": 16.208,
        "temperature_max": 28.096,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.168,
        "soiltemperature_0to10cm_mean": 21.669,
        "soilmoisture_0to10cm": 0.236,
        "windspeed_mean": 3.227
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
        "temperature_mean": 23.596,
        "temperature_min": 17.055,
        "temperature_max": 31.284,
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.598,
        "soiltemperature_0to10cm_mean": 23.073,
        "soilmoisture_0to10cm": 0.238,
        "windspeed_mean": 0.827
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
        "temperature_mean": 20.536,
        "temperature_min": 18.0,
        "temperature_max": 25.44,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.545,
        "soiltemperature_0to10cm_mean": 21.092,
        "soilmoisture_0to10cm": 0.299,
        "windspeed_mean": 4.034
      },
      "mid_fungicide": {
        "conditions": {
          "low_wind_speed": "bad -> BLOCKED",
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
          "low_wind_speed": "bad -> BLOCKED",
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
        "temperature_mean": 20.693,
        "temperature_min": 16.967,
        "temperature_max": 24.65,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.588,
        "soiltemperature_0to10cm_mean": 20.66,
        "soilmoisture_0to10cm": 0.279,
        "windspeed_mean": 2.974
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
    }
  },
  "_images": {
    "zones": "images/zones.png",
    "history": "images/history.png",
    "hotspots": "images/hotspots.png",
    "evi": "images/evi.png",
    "rgb": "images/rgb.png"
  },
  "polygon_wkt": "POLYGON ((15.73893923 49.1008205, 15.7389888 49.10080557, 15.73907601 49.10080764, 15.73915344 49.10082331, 15.73936013 49.10093062, 15.73953817 49.10099494, 15.7397719 49.10105406, 15.74034875 49.1011222, 15.74074889 49.1011578, 15.74099738 49.10118932, 15.74135921 49.10126276, 15.74139122 49.10126336, 15.74143393 49.10125329, 15.74148347 49.10123003, 15.74151788 49.10118545, 15.74154642 49.10112595, 15.74178514 49.10047057, 15.74196444 49.10007688, 15.74203389 49.09981731, 15.74206938 49.09958626, 15.7419995 49.09933344, 15.74204865 49.09908667, 15.74207664 49.09885307, 15.74210544 49.09835663, 15.7421266 49.09828445, 15.7419855 49.09802681, 15.74185833 49.09778858, 15.74170322 49.09754036, 15.74147939 49.0972587, 15.74115955 49.09694584, 15.74074863 49.09667313, 15.74045338 49.09650519, 15.74030602 49.09656023, 15.74019277 49.09657048, 15.73999272 49.09662484, 15.73965374 49.09673673, 15.73947672 49.09680894, 15.73943954 49.09683836, 15.73943126 49.09684429, 15.73935163 49.09689589, 15.73934779 49.09689827, 15.73926593 49.09694695, 15.73924573 49.0969567, 15.73922294 49.09696356, 15.73915187 49.09697946, 15.73915914 49.09698963, 15.73764492 49.09743268, 15.73765279 49.09738563, 15.73751539 49.0973861, 15.7372589 49.09744551, 15.73567961 49.09785022, 15.73566072 49.09785394, 15.73554086 49.09787087, 15.73552065 49.09787259, 15.73550028 49.09787211, 15.73541394 49.09786531, 15.73539351 49.09786254, 15.73531883 49.09784797, 15.73518663 49.09782553, 15.73502897 49.09771517, 15.73487199 49.09775554, 15.73473027 49.09785222, 15.73456322 49.09792774, 15.73439185 49.09796697, 15.73359606 49.09846922, 15.73637721 49.10126607, 15.73636683 49.101323, 15.73613625 49.10153639, 15.73619893 49.10156861, 15.73621504 49.10156029, 15.73625707 49.10156999, 15.73631819 49.10160834, 15.73637652 49.10163213, 15.73660945 49.10140507, 15.73694351 49.10108085, 15.73724436 49.10078889, 15.73753668 49.10050512, 15.73825971 49.10066769, 15.73893923 49.1008205))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
