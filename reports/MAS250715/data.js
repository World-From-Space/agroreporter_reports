// Field data for MAS250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAS250715",
  "metadata": {
    "field_area_ha": 2.891,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Mohelno"
    },
    "terrain": {
      "variability": 5.61,
      "mean_elevation": 386.987,
      "min_elevation": 383.592,
      "max_elevation": 389.202
    },
    "soil": {
      "bulk_density kg/dm³": 1.319,
      "cation_exchange_capacity cmol(c)/kg": 20.587,
      "clay_particles g/100g (%)": 24.564,
      "sand particles g/100g (%)": 22.574,
      "silt particles g/100g (%)": 52.861,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-06-12": {
      "min": 0.389,
      "max": 0.667,
      "median": 0.564,
      "mean": 0.561,
      "sd": 0.028
    },
    "2025-06-18": {
      "min": 0.383,
      "max": 0.641,
      "median": 0.52,
      "mean": 0.52,
      "sd": 0.026
    },
    "2025-06-21": {
      "min": 0.286,
      "max": 0.561,
      "median": 0.447,
      "mean": 0.448,
      "sd": 0.027
    },
    "2025-06-26": {
      "min": 0.321,
      "max": 0.477,
      "median": 0.383,
      "mean": 0.385,
      "sd": 0.02
    },
    "2025-06-30": {
      "min": 0.23,
      "max": 0.38,
      "median": 0.278,
      "mean": 0.281,
      "sd": 0.023
    },
    "2025-07-05": {
      "min": 0.184,
      "max": 0.318,
      "median": 0.228,
      "mean": 0.231,
      "sd": 0.018
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 2.843,
      "area_percentage": 1.0
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 2.727,
        "area_percentage": 0.959
      },
      "low_vegetation": {
        "area_ha": 0.116,
        "area_percentage": 0.041
      },
      "medium vegetation": {
        "area_ha": 0.0,
        "area_percentage": 0.0
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
    "number_of_zones": 4,
    "evi_median": 0.238,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
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
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.33,
          "percentage": 11.78
        },
        "EVI_statistics": {
          "mean": 0.222,
          "median": 0.223,
          "min": 0.206,
          "max": 0.226
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 1.78,
          "percentage": 62.58
        },
        "EVI_statistics": {
          "mean": 0.236,
          "median": 0.236,
          "min": 0.226,
          "max": 0.249
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.43,
          "percentage": 14.97
        },
        "EVI_statistics": {
          "mean": 0.259,
          "median": 0.258,
          "min": 0.249,
          "max": 0.273
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.3,
          "percentage": 10.67
        },
        "EVI_statistics": {
          "mean": 0.301,
          "median": 0.293,
          "min": 0.273,
          "max": 0.391
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.09,
            "area_percentage": 3.24,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.76,
            "area_percentage": 27.34,
            "zone_number": 2
          },
          "similar": {
            "ha": 0.99,
            "area_percentage": 35.61,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.24,
            "area_percentage": 8.63,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.7,
            "area_percentage": 25.18,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-07-15",
      "reference_image_date": "2025-06-30",
      "change_period": 15
    },
    "median_EVI_change": {
      "old_value": 0.278,
      "new_value": 0.238,
      "difference": -0.036
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
          "ha": 0.14,
          "percentage": 5.06,
          "zone_number": 2
        },
        "no_change": {
          "ha": 2.7,
          "percentage": 94.87,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.06,
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
          "ha": 0.52,
          "percentage": 18.33,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.36,
          "percentage": 12.63,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 1.02,
          "percentage": 35.83,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.44,
          "percentage": 15.48,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.5,
          "percentage": 17.73,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.20215975338983 49.115634537666665)",
          "new_value": 0.232,
          "old_value": 0.303,
          "value_difference": -0.071,
          "area_ha": 0.065,
          "category": "major_decline",
          "location": "W",
          "id": 1
        },
        {
          "geometry": "POINT (16.20228596694915 49.11555418366667)",
          "new_value": 0.226,
          "old_value": 0.284,
          "value_difference": -0.058,
          "area_ha": 0.047,
          "category": "major_decline",
          "location": "W",
          "id": 2
        },
        {
          "geometry": "POINT (16.20194939745763 49.115072059666666)",
          "new_value": 0.23,
          "old_value": 0.302,
          "value_difference": -0.072,
          "area_ha": 0.201,
          "category": "major_decline",
          "location": "W",
          "id": 3
        },
        {
          "geometry": "POINT (16.202075611016948 49.11434887366667)",
          "new_value": 0.235,
          "old_value": 0.307,
          "value_difference": -0.072,
          "area_ha": 0.03,
          "category": "major_decline",
          "location": "SW",
          "id": 4
        },
        {
          "geometry": "POINT (16.203506031355932 49.11619701566667)",
          "new_value": 0.248,
          "old_value": 0.262,
          "value_difference": -0.014,
          "area_ha": 0.062,
          "category": "major_growth",
          "location": "NE",
          "id": 5
        },
        {
          "geometry": "POINT (16.20262253644068 49.11603630766667)",
          "new_value": 0.245,
          "old_value": 0.261,
          "value_difference": -0.016,
          "area_ha": 0.072,
          "category": "major_growth",
          "location": "N",
          "id": 6
        },
        {
          "geometry": "POINT (16.203590173728813 49.115929169000005)",
          "new_value": 0.25,
          "old_value": 0.265,
          "value_difference": -0.015,
          "area_ha": 0.039,
          "category": "major_growth",
          "location": "NE",
          "id": 7
        },
        {
          "geometry": "POINT (16.20279082118644 49.114134596333336)",
          "new_value": 0.298,
          "old_value": 0.279,
          "value_difference": 0.019,
          "area_ha": 0.032,
          "category": "major_growth",
          "location": "S",
          "id": 8
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 2174.729,
      "historical_average": 2145.678
    },
    "accumulated_precipitation_since_seeding": {
      "current": 306.601,
      "historical_mean": 433.068
    },
    "precipitation_summary": {
      "last_3_days": 5.69,
      "last_7_days": 25.179,
      "last_14_days": 48.329,
      "last_30_days": 66.822
    },
    "standardized_precipitation_index": {
      "1_month": -0.056,
      "3_month": -0.615,
      "6_month": -1.139
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-07-11 00:00:00",
          "temperature_mean": 17.341,
          "temperature_min": 13.352,
          "temperature_max": 21.34,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.699,
          "soiltemperature_0to10cm_mean": 18.358,
          "soilmoisture_0to10cm": 0.298,
          "windspeed_mean": 2.305
        },
        {
          "time": "2025-07-12 00:00:00",
          "temperature_mean": 17.544,
          "temperature_min": 12.51,
          "temperature_max": 21.766,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.853,
          "soiltemperature_0to10cm_mean": 18.346,
          "soilmoisture_0to10cm": 0.298,
          "windspeed_mean": 1.497
        },
        {
          "time": "2025-07-13 00:00:00",
          "temperature_mean": 20.272,
          "temperature_min": 14.452,
          "temperature_max": 25.682,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.38,
          "soiltemperature_0to10cm_mean": 20.176,
          "soilmoisture_0to10cm": 0.321,
          "windspeed_mean": 1.551
        },
        {
          "time": "2025-07-14 00:00:00",
          "temperature_mean": 21.33,
          "temperature_min": 13.904,
          "temperature_max": 27.046,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.583,
          "soiltemperature_0to10cm_mean": 21.238,
          "soilmoisture_0to10cm": 0.302,
          "windspeed_mean": 1.755
        },
        {
          "time": "2025-07-15 00:00:00",
          "temperature_mean": 21.627,
          "temperature_min": 17.859,
          "temperature_max": 26.177,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.564,
          "soiltemperature_0to10cm_mean": 22.224,
          "soilmoisture_0to10cm": 0.285,
          "windspeed_mean": 3.136
        },
        {
          "time": "2025-07-16 00:00:00",
          "temperature_mean": 18.447,
          "temperature_min": 14.772,
          "temperature_max": 22.403,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.608,
          "soiltemperature_0to10cm_mean": 20.438,
          "soilmoisture_0to10cm": 0.281,
          "windspeed_mean": 2.391
        },
        {
          "time": "2025-07-17 00:00:00",
          "temperature_mean": 16.912,
          "temperature_min": 13.517,
          "temperature_max": 20.761,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.803,
          "soiltemperature_0to10cm_mean": 18.611,
          "soilmoisture_0to10cm": 0.295,
          "windspeed_mean": 2.95
        },
        {
          "time": "2025-07-18 00:00:00",
          "temperature_mean": 17.619,
          "temperature_min": 14.16,
          "temperature_max": 21.576,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.78,
          "soiltemperature_0to10cm_mean": 18.122,
          "soilmoisture_0to10cm": 0.327,
          "windspeed_mean": 2.066
        },
        {
          "time": "2025-07-19 00:00:00",
          "temperature_mean": 20.129,
          "temperature_min": 13.984,
          "temperature_max": 25.02,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.362,
          "soiltemperature_0to10cm_mean": 20.021,
          "soilmoisture_0to10cm": 0.316,
          "windspeed_mean": 0.671
        },
        {
          "time": "2025-07-20 00:00:00",
          "temperature_mean": 22.619,
          "temperature_min": 14.762,
          "temperature_max": 28.299,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.407,
          "soiltemperature_0to10cm_mean": 21.985,
          "soilmoisture_0to10cm": 0.293,
          "windspeed_mean": 0.282
        },
        {
          "time": "2025-07-21 00:00:00",
          "temperature_mean": 21.914,
          "temperature_min": 16.332,
          "temperature_max": 28.291,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.724,
          "soiltemperature_0to10cm_mean": 22.545,
          "soilmoisture_0to10cm": 0.294,
          "windspeed_mean": 0.764
        },
        {
          "time": "2025-07-22 00:00:00",
          "temperature_mean": 19.893,
          "temperature_min": 15.137,
          "temperature_max": 24.39,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.211,
          "soiltemperature_0to10cm_mean": 20.806,
          "soilmoisture_0to10cm": 0.326,
          "windspeed_mean": 3.4
        },
        {
          "time": "2025-07-23 00:00:00",
          "temperature_mean": 20.517,
          "temperature_min": 15.524,
          "temperature_max": 25.073,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.453,
          "soiltemperature_0to10cm_mean": 20.904,
          "soilmoisture_0to10cm": 0.298,
          "windspeed_mean": 2.257
        },
        {
          "time": "2025-07-24 00:00:00",
          "temperature_mean": 18.472,
          "temperature_min": 15.222,
          "temperature_max": 21.202,
          "precipitation_sum": 14.0,
          "totalcloudcover_mean": 0.883,
          "soiltemperature_0to10cm_mean": 19.298,
          "soilmoisture_0to10cm": 0.332,
          "windspeed_mean": 1.861
        },
        {
          "time": "2025-07-25 00:00:00",
          "temperature_mean": 19.659,
          "temperature_min": 15.029,
          "temperature_max": 24.088,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.763,
          "soiltemperature_0to10cm_mean": 20.159,
          "soilmoisture_0to10cm": 0.355,
          "windspeed_mean": 1.253
        },
        {
          "time": "2025-07-26 00:00:00",
          "temperature_mean": 18.836,
          "temperature_min": 16.42,
          "temperature_max": 20.516,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.98,
          "soiltemperature_0to10cm_mean": 18.992,
          "soilmoisture_0to10cm": 0.366,
          "windspeed_mean": 1.834
        },
        {
          "time": "2025-07-27 00:00:00",
          "temperature_mean": 17.333,
          "temperature_min": 15.358,
          "temperature_max": 18.862,
          "precipitation_sum": 12.0,
          "totalcloudcover_mean": 0.967,
          "soiltemperature_0to10cm_mean": 17.694,
          "soilmoisture_0to10cm": 0.394,
          "windspeed_mean": 3.336
        },
        {
          "time": "2025-07-28 00:00:00",
          "temperature_mean": 17.871,
          "temperature_min": 14.411,
          "temperature_max": 22.135,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.852,
          "soiltemperature_0to10cm_mean": 18.289,
          "soilmoisture_0to10cm": 0.379,
          "windspeed_mean": 3.391
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-10-14",
      "day_since": 273
    },
    "crop_emergence": {
      "date": "2024-10-28",
      "day_since": 258
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-09",
      "day_since": 95
    },
    "beginning_of_heading": {
      "date": "2025-05-18",
      "day_since": 56
    },
    "beginning_of_ripenes": {
      "date": "2025-06-28",
      "day_since": 15
    },
    "harvest": {
      "date": "2025-07-12",
      "day_since": 1
    }
  },
  "timing_of_field_operations": {
    "2025-07-11": {
      "weather_conditions": {
        "temperature_mean": 17.341,
        "temperature_min": 13.352,
        "temperature_max": 21.34,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.699,
        "soiltemperature_0to10cm_mean": 18.358,
        "soilmoisture_0to10cm": 0.298,
        "windspeed_mean": 2.305
      },
      "harvest": {
        "conditions": {
          "rainfall": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-07-12": {
      "weather_conditions": {
        "temperature_mean": 17.544,
        "temperature_min": 12.51,
        "temperature_max": 21.766,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.853,
        "soiltemperature_0to10cm_mean": 18.346,
        "soilmoisture_0to10cm": 0.298,
        "windspeed_mean": 1.497
      },
      "harvest": {
        "conditions": {
          "rainfall": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-07-13": {
      "weather_conditions": {
        "temperature_mean": 20.272,
        "temperature_min": 14.452,
        "temperature_max": 25.682,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.38,
        "soiltemperature_0to10cm_mean": 20.176,
        "soilmoisture_0to10cm": 0.321,
        "windspeed_mean": 1.551
      },
      "harvest": {
        "conditions": {
          "rainfall": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-07-14": {
      "weather_conditions": {
        "temperature_mean": 21.33,
        "temperature_min": 13.904,
        "temperature_max": 27.046,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.583,
        "soiltemperature_0to10cm_mean": 21.238,
        "soilmoisture_0to10cm": 0.302,
        "windspeed_mean": 1.755
      },
      "harvest": {
        "conditions": {
          "rainfall": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      }
    },
    "2025-07-15": {
      "weather_conditions": {
        "temperature_mean": 21.627,
        "temperature_min": 17.859,
        "temperature_max": 26.177,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.564,
        "soiltemperature_0to10cm_mean": 22.224,
        "soilmoisture_0to10cm": 0.285,
        "windspeed_mean": 3.136
      },
      "harvest": {
        "conditions": {
          "rainfall": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      }
    },
    "2025-07-16": {
      "weather_conditions": {
        "temperature_mean": 18.447,
        "temperature_min": 14.772,
        "temperature_max": 22.403,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.608,
        "soiltemperature_0to10cm_mean": 20.438,
        "soilmoisture_0to10cm": 0.281,
        "windspeed_mean": 2.391
      },
      "harvest": {
        "conditions": {
          "rainfall": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-07-17": {
      "weather_conditions": {
        "temperature_mean": 16.912,
        "temperature_min": 13.517,
        "temperature_max": 20.761,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.803,
        "soiltemperature_0to10cm_mean": 18.611,
        "soilmoisture_0to10cm": 0.295,
        "windspeed_mean": 2.95
      },
      "harvest": {
        "conditions": {
          "rainfall": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-07-18": {
      "weather_conditions": {
        "temperature_mean": 17.619,
        "temperature_min": 14.16,
        "temperature_max": 21.576,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.78,
        "soiltemperature_0to10cm_mean": 18.122,
        "soilmoisture_0to10cm": 0.327,
        "windspeed_mean": 2.066
      },
      "harvest": {
        "conditions": {
          "rainfall": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-07-19": {
      "weather_conditions": {
        "temperature_mean": 20.129,
        "temperature_min": 13.984,
        "temperature_max": 25.02,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.362,
        "soiltemperature_0to10cm_mean": 20.021,
        "soilmoisture_0to10cm": 0.316,
        "windspeed_mean": 0.671
      },
      "harvest": {
        "conditions": {
          "rainfall": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      }
    },
    "2025-07-20": {
      "weather_conditions": {
        "temperature_mean": 22.619,
        "temperature_min": 14.762,
        "temperature_max": 28.299,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.407,
        "soiltemperature_0to10cm_mean": 21.985,
        "soilmoisture_0to10cm": 0.293,
        "windspeed_mean": 0.282
      },
      "harvest": {
        "conditions": {
          "rainfall": "good",
          "day_air_temperature_min": "good",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.75
      }
    },
    "2025-07-21": {
      "weather_conditions": {
        "temperature_mean": 21.914,
        "temperature_min": 16.332,
        "temperature_max": 28.291,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.724,
        "soiltemperature_0to10cm_mean": 22.545,
        "soilmoisture_0to10cm": 0.294,
        "windspeed_mean": 0.764
      },
      "harvest": {
        "conditions": {
          "rainfall": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-07-22": {
      "weather_conditions": {
        "temperature_mean": 19.893,
        "temperature_min": 15.137,
        "temperature_max": 24.39,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.211,
        "soiltemperature_0to10cm_mean": 20.806,
        "soilmoisture_0to10cm": 0.326,
        "windspeed_mean": 3.4
      },
      "harvest": {
        "conditions": {
          "rainfall": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-07-23": {
      "weather_conditions": {
        "temperature_mean": 20.517,
        "temperature_min": 15.524,
        "temperature_max": 25.073,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.453,
        "soiltemperature_0to10cm_mean": 20.904,
        "soilmoisture_0to10cm": 0.298,
        "windspeed_mean": 2.257
      },
      "harvest": {
        "conditions": {
          "rainfall": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.5
      }
    },
    "2025-07-24": {
      "weather_conditions": {
        "temperature_mean": 18.472,
        "temperature_min": 15.222,
        "temperature_max": 21.202,
        "precipitation_sum": 14.0,
        "totalcloudcover_mean": 0.883,
        "soiltemperature_0to10cm_mean": 19.298,
        "soilmoisture_0to10cm": 0.332,
        "windspeed_mean": 1.861
      },
      "harvest": {
        "conditions": {
          "rainfall": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-07-25": {
      "weather_conditions": {
        "temperature_mean": 19.659,
        "temperature_min": 15.029,
        "temperature_max": 24.088,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.763,
        "soiltemperature_0to10cm_mean": 20.159,
        "soilmoisture_0to10cm": 0.355,
        "windspeed_mean": 1.253
      },
      "harvest": {
        "conditions": {
          "rainfall": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-07-26": {
      "weather_conditions": {
        "temperature_mean": 18.836,
        "temperature_min": 16.42,
        "temperature_max": 20.516,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.98,
        "soiltemperature_0to10cm_mean": 18.992,
        "soilmoisture_0to10cm": 0.366,
        "windspeed_mean": 1.834
      },
      "harvest": {
        "conditions": {
          "rainfall": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-07-27": {
      "weather_conditions": {
        "temperature_mean": 17.333,
        "temperature_min": 15.358,
        "temperature_max": 18.862,
        "precipitation_sum": 12.0,
        "totalcloudcover_mean": 0.967,
        "soiltemperature_0to10cm_mean": 17.694,
        "soilmoisture_0to10cm": 0.394,
        "windspeed_mean": 3.336
      },
      "harvest": {
        "conditions": {
          "rainfall": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-07-28": {
      "weather_conditions": {
        "temperature_mean": 17.871,
        "temperature_min": 14.411,
        "temperature_max": 22.135,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.852,
        "soiltemperature_0to10cm_mean": 18.289,
        "soilmoisture_0to10cm": 0.379,
        "windspeed_mean": 3.391
      },
      "harvest": {
        "conditions": {
          "rainfall": "bad -> BLOCKED",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "bad",
          "cloud_cover": "good"
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
  "polygon_wkt": "POLYGON ((16.20228445 49.11627205, 16.2026515 49.11630531, 16.20348775 49.11639732, 16.20385538 49.11644005, 16.20397014 49.11645147, 16.20398985 49.11644719, 16.20398942 49.11643279, 16.20392941 49.11629039, 16.20381491 49.11603282, 16.20370185 49.11577536, 16.20349508 49.11526667, 16.20342174 49.11509166, 16.20338506 49.11500847, 16.20333478 49.11489649, 16.20329626 49.11480422, 16.20326291 49.11472032, 16.20318475 49.11452995, 16.20315541 49.11445497, 16.20312444 49.11437989, 16.20308556 49.11428408, 16.20305493 49.1141659, 16.20304316 49.11410848, 16.20301982 49.1140464, 16.20300962 49.11404085, 16.20295694 49.11404171, 16.20284469 49.11405148, 16.20278945 49.11405759, 16.20254437 49.11408184, 16.20242929 49.11411445, 16.20226458 49.11410505, 16.20165235 49.11415528, 16.20150765 49.11416738, 16.20228445 49.11627205))"
};
