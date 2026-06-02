// Field data for MAR250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAR250715",
  "metadata": {
    "field_area_ha": 6.56,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Mohelno"
    },
    "terrain": {
      "variability": 5.64,
      "mean_elevation": 385.166,
      "min_elevation": 381.776,
      "max_elevation": 387.415
    },
    "soil": {
      "bulk_density kg/dm³": 1.319,
      "cation_exchange_capacity cmol(c)/kg": 21.15,
      "clay_particles g/100g (%)": 25.578,
      "sand particles g/100g (%)": 22.146,
      "silt particles g/100g (%)": 52.276,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-06-12": {
      "min": 0.346,
      "max": 0.76,
      "median": 0.675,
      "mean": 0.641,
      "sd": 0.083
    },
    "2025-06-21": {
      "min": 0.311,
      "max": 0.686,
      "median": 0.602,
      "mean": 0.562,
      "sd": 0.093
    },
    "2025-06-26": {
      "min": 0.236,
      "max": 0.636,
      "median": 0.542,
      "mean": 0.492,
      "sd": 0.106
    },
    "2025-06-30": {
      "min": 0.18,
      "max": 0.509,
      "median": 0.413,
      "mean": 0.377,
      "sd": 0.085
    },
    "2025-07-02": {
      "min": 0.171,
      "max": 0.464,
      "median": 0.361,
      "mean": 0.336,
      "sd": 0.068
    },
    "2025-07-05": {
      "min": 0.167,
      "max": 0.422,
      "median": 0.278,
      "mean": 0.271,
      "sd": 0.038
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 6.372,
      "area_percentage": 0.995
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.032,
        "area_percentage": 0.005
      },
      "very_low_vegetation": {
        "area_ha": 6.173,
        "area_percentage": 0.964
      },
      "low_vegetation": {
        "area_ha": 0.178,
        "area_percentage": 0.028
      },
      "medium vegetation": {
        "area_ha": 0.021,
        "area_percentage": 0.003
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
    "evi_median": 0.242,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.08,
          "percentage": 1.25
        },
        "EVI_statistics": {
          "mean": 0.2,
          "median": 0.201,
          "min": 0.184,
          "max": 0.205
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 1.25,
          "percentage": 19.52
        },
        "EVI_statistics": {
          "mean": 0.221,
          "median": 0.221,
          "min": 0.206,
          "max": 0.23
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 3.76,
          "percentage": 58.71
        },
        "EVI_statistics": {
          "mean": 0.242,
          "median": 0.242,
          "min": 0.23,
          "max": 0.254
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.94,
          "percentage": 14.69
        },
        "EVI_statistics": {
          "mean": 0.262,
          "median": 0.26,
          "min": 0.254,
          "max": 0.278
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.37,
          "percentage": 5.83
        },
        "EVI_statistics": {
          "mean": 0.318,
          "median": 0.303,
          "min": 0.278,
          "max": 0.468
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.29,
            "area_percentage": 4.61,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 1.31,
            "area_percentage": 20.83,
            "zone_number": 2
          },
          "similar": {
            "ha": 2.18,
            "area_percentage": 34.66,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 1.27,
            "area_percentage": 20.19,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.24,
            "area_percentage": 19.71,
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
      "old_value": 0.413,
      "new_value": 0.242,
      "difference": -0.166
    },
    "growth trend": "major_decline",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 3.73,
          "percentage": 58.26,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 0.99,
          "percentage": 15.43,
          "zone_number": 2
        },
        "no_change": {
          "ha": 1.68,
          "percentage": 26.31,
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
          "ha": 1.1,
          "percentage": 17.13,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.94,
          "percentage": 14.72,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 2.45,
          "percentage": 38.33,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.85,
          "percentage": 13.23,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.06,
          "percentage": 16.6,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.205684161566264 49.11653316576271)",
          "new_value": 0.235,
          "old_value": 0.45,
          "value_difference": -0.215,
          "area_ha": 0.161,
          "category": "major_decline",
          "location": "E",
          "id": 1
        },
        {
          "geometry": "POINT (16.205556767108433 49.11618535627119)",
          "new_value": 0.236,
          "old_value": 0.456,
          "value_difference": -0.22,
          "area_ha": 0.073,
          "category": "major_decline",
          "location": "E",
          "id": 2
        },
        {
          "geometry": "POINT (16.204240357710844 49.115409473559325)",
          "new_value": 0.234,
          "old_value": 0.446,
          "value_difference": -0.212,
          "area_ha": 0.228,
          "category": "major_decline",
          "location": "SW",
          "id": 3
        },
        {
          "geometry": "POINT (16.205004724457833 49.11503490949153)",
          "new_value": 0.234,
          "old_value": 0.445,
          "value_difference": -0.211,
          "area_ha": 0.243,
          "category": "major_decline",
          "location": "S",
          "id": 4
        },
        {
          "geometry": "POINT (16.206236204216868 49.11843274067797)",
          "new_value": 0.273,
          "old_value": 0.273,
          "value_difference": 0.0,
          "area_ha": 0.2,
          "category": "major_growth",
          "location": "NE",
          "id": 5
        },
        {
          "geometry": "POINT (16.20458007626506 49.11752308508475)",
          "new_value": 0.263,
          "old_value": 0.33,
          "value_difference": -0.067,
          "area_ha": 0.237,
          "category": "major_growth",
          "location": "N",
          "id": 6
        },
        {
          "geometry": "POINT (16.203178737228917 49.114152008474576)",
          "new_value": 0.301,
          "old_value": 0.386,
          "value_difference": -0.085,
          "area_ha": 0.321,
          "category": "major_growth",
          "location": "SW",
          "id": 7
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
      "date": "2025-04-14",
      "day_since": 90
    },
    "beginning_of_heading": {
      "date": "2025-05-23",
      "day_since": 51
    },
    "beginning_of_ripenes": {
      "date": "2025-07-03",
      "day_since": 10
    },
    "harvest": {
      "date": "2025-07-16",
      "day_since": -3
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
  "polygon_wkt": "POLYGON ((16.20478025 49.11389784, 16.20476604 49.11389993, 16.20435411 49.11394104, 16.20379657 49.1139957, 16.20324797 49.1140374, 16.20317322 49.11404636, 16.20314098 49.11405781, 16.20311783 49.11408957, 16.20311504 49.11412484, 16.20312521 49.11416968, 16.20315719 49.11428528, 16.20316897 49.11431616, 16.20320063 49.1143992, 16.20328562 49.11460177, 16.20340987 49.11487747, 16.20345288 49.11500056, 16.20356999 49.11531324, 16.20422686 49.1168727, 16.20487373 49.11846913, 16.20493196 49.11861321, 16.20497188 49.11862794, 16.2050152 49.1186334, 16.20507781 49.11862577, 16.2051479 49.11861423, 16.20589603 49.11852135, 16.20616296 49.11850529, 16.20625316 49.11849986, 16.20645537 49.11847872, 16.20663821 49.11845795, 16.20663962 49.1184576, 16.20623431 49.11747745, 16.20478025 49.11389784))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
