// Field data for MAN250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAN250715",
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
    "2025-05-09": {
      "min": 0.509,
      "max": 0.855,
      "median": 0.75,
      "mean": 0.739,
      "sd": 0.046
    },
    "2025-05-14": {
      "min": 0.416,
      "max": 0.761,
      "median": 0.671,
      "mean": 0.656,
      "sd": 0.052
    },
    "2025-06-09": {
      "min": 0.377,
      "max": 0.763,
      "median": 0.637,
      "mean": 0.619,
      "sd": 0.059
    },
    "2025-06-21": {
      "min": 0.267,
      "max": 0.761,
      "median": 0.589,
      "mean": 0.563,
      "sd": 0.102
    },
    "2025-06-26": {
      "min": 0.257,
      "max": 0.745,
      "median": 0.516,
      "mean": 0.503,
      "sd": 0.118
    },
    "2025-07-02": {
      "min": 0.13,
      "max": 0.698,
      "median": 0.352,
      "mean": 0.371,
      "sd": 0.118
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 17.221,
      "area_percentage": 0.984
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.274,
        "area_percentage": 0.016
      },
      "very_low_vegetation": {
        "area_ha": 8.981,
        "area_percentage": 0.513
      },
      "low_vegetation": {
        "area_ha": 4.571,
        "area_percentage": 0.261
      },
      "medium vegetation": {
        "area_ha": 3.668,
        "area_percentage": 0.21
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
    "variability_category": "very_high",
    "number_of_zones": 5,
    "evi_median": 0.293,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 4.74,
          "percentage": 27.12
        },
        "EVI_statistics": {
          "mean": 0.226,
          "median": 0.228,
          "min": 0.172,
          "max": 0.249
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 2.69,
          "percentage": 15.38
        },
        "EVI_statistics": {
          "mean": 0.264,
          "median": 0.265,
          "min": 0.249,
          "max": 0.279
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 2.48,
          "percentage": 14.15
        },
        "EVI_statistics": {
          "mean": 0.293,
          "median": 0.293,
          "min": 0.279,
          "max": 0.308
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 1.98,
          "percentage": 11.31
        },
        "EVI_statistics": {
          "mean": 0.321,
          "median": 0.321,
          "min": 0.308,
          "max": 0.337
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 5.61,
          "percentage": 32.04
        },
        "EVI_statistics": {
          "mean": 0.442,
          "median": 0.428,
          "min": 0.337,
          "max": 0.628
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 2.09,
            "area_percentage": 12.63,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 2.41,
            "area_percentage": 14.56,
            "zone_number": 2
          },
          "similar": {
            "ha": 6.54,
            "area_percentage": 39.52,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 3.29,
            "area_percentage": 19.88,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 2.22,
            "area_percentage": 13.41,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-07-15",
      "reference_image_date": "2025-06-21",
      "change_period": 24
    },
    "median_EVI_change": {
      "old_value": 0.589,
      "new_value": 0.293,
      "difference": -0.247
    },
    "growth trend": "major_decline",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 15.97,
          "percentage": 91.28,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 1.45,
          "percentage": 8.28,
          "zone_number": 2
        },
        "no_change": {
          "ha": 0.08,
          "percentage": 0.45,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.0,
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
          "ha": 0.13,
          "percentage": 0.73,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 2.27,
          "percentage": 12.95,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 12.79,
          "percentage": 73.1,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 1.69,
          "percentage": 9.66,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.62,
          "percentage": 3.57,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
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
      "date": "2024-10-27",
      "day_since": 259
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-17",
      "day_since": 87
    },
    "beginning_of_heading": {
      "date": "2025-05-27",
      "day_since": 47
    },
    "beginning_of_ripenes": {
      "date": "2025-07-05",
      "day_since": 8
    },
    "harvest": {
      "date": "2025-07-18",
      "day_since": -5
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
  "polygon_wkt": "POLYGON ((16.17823519 49.12326941, 16.17825865 49.12326568, 16.17830052 49.12325374, 16.178356 49.1232448, 16.17841775 49.12324231, 16.18187852 49.12277889, 16.18188136 49.12277854, 16.18271821 49.12268644, 16.18356823 49.12257459, 16.18356836 49.12257457, 16.18485972 49.12240606, 16.18524052 49.12235473, 16.18524141 49.12235461, 16.18568372 49.12229833, 16.18635542 49.12220814, 16.1864609 49.12219349, 16.18648907 49.12218977, 16.18655741 49.12218859, 16.18656421 49.12219073, 16.18655354 49.12215477, 16.18644325 49.12183683, 16.18620989 49.12099287, 16.18609685 49.12066015, 16.18594414 49.12015458, 16.18581567 49.11980241, 16.1857933 49.1197628, 16.18575485 49.11973838, 16.18557318 49.11971619, 16.18552238 49.11971563, 16.18533905 49.11973169, 16.18402879 49.11991002, 16.18255971 49.12009243, 16.18189079 49.12019093, 16.18121842 49.12028118, 16.18046676 49.12037987, 16.18003682 49.12044673, 16.17977425 49.12050214, 16.1796682 49.12052455, 16.17948548 49.12056836, 16.17907655 49.12066047, 16.17766751 49.12104861, 16.17761415 49.12107826, 16.17758631 49.12109853, 16.17757768 49.12112024, 16.17759054 49.12117228, 16.17765598 49.12140353, 16.17783234 49.12190989, 16.17791959 49.12206665, 16.1779669 49.12222314, 16.17802284 49.12241739, 16.17810085 49.12271484, 16.17813337 49.12282705, 16.17822363 49.1232018, 16.17823519 49.12326941))"
};
