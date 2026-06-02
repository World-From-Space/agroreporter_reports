// Field data for MAO250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAO250715",
  "metadata": {
    "field_area_ha": 2.916,
    "location": {
      "country": " Czechia",
      "region": " South Moravian",
      "subregion": "Senorady"
    },
    "terrain": {
      "variability": 7.102,
      "mean_elevation": 377.816,
      "min_elevation": 374.209,
      "max_elevation": 381.312
    },
    "soil": {
      "bulk_density kg/dm³": 1.34,
      "cation_exchange_capacity cmol(c)/kg": 20.809,
      "clay_particles g/100g (%)": 25.471,
      "sand particles g/100g (%)": 17.918,
      "silt particles g/100g (%)": 56.611,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-05-09": {
      "min": 0.422,
      "max": 0.678,
      "median": 0.547,
      "mean": 0.546,
      "sd": 0.037
    },
    "2025-05-25": {
      "min": 0.381,
      "max": 0.655,
      "median": 0.522,
      "mean": 0.521,
      "sd": 0.037
    },
    "2025-06-12": {
      "min": 0.399,
      "max": 0.683,
      "median": 0.507,
      "mean": 0.508,
      "sd": 0.039
    },
    "2025-06-20": {
      "min": 0.354,
      "max": 0.666,
      "median": 0.478,
      "mean": 0.479,
      "sd": 0.05
    },
    "2025-06-25": {
      "min": 0.202,
      "max": 0.586,
      "median": 0.351,
      "mean": 0.351,
      "sd": 0.059
    },
    "2025-06-30": {
      "min": 0.203,
      "max": 0.506,
      "median": 0.267,
      "mean": 0.276,
      "sd": 0.045
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 2.89,
      "area_percentage": 0.991
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.025,
        "area_percentage": 0.009
      },
      "very_low_vegetation": {
        "area_ha": 2.547,
        "area_percentage": 0.874
      },
      "low_vegetation": {
        "area_ha": 0.307,
        "area_percentage": 0.105
      },
      "medium vegetation": {
        "area_ha": 0.036,
        "area_percentage": 0.012
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
    "evi_median": 0.246,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.1,
          "percentage": 3.49
        },
        "EVI_statistics": {
          "mean": 0.203,
          "median": 0.204,
          "min": 0.187,
          "max": 0.209
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.79,
          "percentage": 27.11
        },
        "EVI_statistics": {
          "mean": 0.223,
          "median": 0.224,
          "min": 0.209,
          "max": 0.234
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 1.03,
          "percentage": 35.32
        },
        "EVI_statistics": {
          "mean": 0.245,
          "median": 0.245,
          "min": 0.234,
          "max": 0.258
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.49,
          "percentage": 16.76
        },
        "EVI_statistics": {
          "mean": 0.268,
          "median": 0.267,
          "min": 0.258,
          "max": 0.282
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.5,
          "percentage": 17.32
        },
        "EVI_statistics": {
          "mean": 0.33,
          "median": 0.314,
          "min": 0.283,
          "max": 0.5
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.8,
            "area_percentage": 28.99,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.47,
            "area_percentage": 17.03,
            "zone_number": 2
          },
          "similar": {
            "ha": 0.38,
            "area_percentage": 13.77,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.34,
            "area_percentage": 12.32,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.77,
            "area_percentage": 27.9,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-07-15",
      "reference_image_date": "2025-06-20",
      "change_period": 25
    },
    "median_EVI_change": {
      "old_value": 0.478,
      "new_value": 0.246,
      "difference": -0.222
    },
    "growth trend": "major_decline",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 2.83,
          "percentage": 97.16,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 0.08,
          "percentage": 2.84,
          "zone_number": 2
        },
        "no_change": {
          "ha": 0.0,
          "percentage": 0.0,
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
          "ha": 0.39,
          "percentage": 13.43,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.46,
          "percentage": 15.9,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 1.26,
          "percentage": 43.07,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.4,
          "percentage": 13.74,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.4,
          "percentage": 13.86,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.253355993109757 49.124393961780825)",
          "new_value": 0.235,
          "old_value": 0.522,
          "value_difference": -0.287,
          "area_ha": 0.234,
          "category": "major_decline",
          "location": "N",
          "id": 1
        },
        {
          "geometry": "POINT (16.254189146768294 49.124766074109594)",
          "new_value": 0.284,
          "old_value": 0.46,
          "value_difference": -0.176,
          "area_ha": 0.05,
          "category": "major_growth",
          "location": "NE",
          "id": 2
        },
        {
          "geometry": "POINT (16.25473069664634 49.124633176849315)",
          "new_value": 0.275,
          "old_value": 0.439,
          "value_difference": -0.164,
          "area_ha": 0.096,
          "category": "major_growth",
          "location": "NE",
          "id": 3
        },
        {
          "geometry": "POINT (16.252064604939026 49.12349026041096)",
          "new_value": 0.279,
          "old_value": 0.453,
          "value_difference": -0.174,
          "area_ha": 0.057,
          "category": "major_growth",
          "location": "SW",
          "id": 4
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 2212.221,
      "historical_average": 2180.334
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
          "temperature_mean": 17.539,
          "temperature_min": 13.489,
          "temperature_max": 21.492,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.699,
          "soiltemperature_0to10cm_mean": 18.569,
          "soilmoisture_0to10cm": 0.294,
          "windspeed_mean": 2.291
        },
        {
          "time": "2025-07-12 00:00:00",
          "temperature_mean": 17.698,
          "temperature_min": 12.604,
          "temperature_max": 21.902,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.853,
          "soiltemperature_0to10cm_mean": 18.521,
          "soilmoisture_0to10cm": 0.293,
          "windspeed_mean": 1.573
        },
        {
          "time": "2025-07-13 00:00:00",
          "temperature_mean": 20.471,
          "temperature_min": 14.718,
          "temperature_max": 25.86,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.38,
          "soiltemperature_0to10cm_mean": 20.347,
          "soilmoisture_0to10cm": 0.318,
          "windspeed_mean": 1.646
        },
        {
          "time": "2025-07-14 00:00:00",
          "temperature_mean": 21.474,
          "temperature_min": 14.0,
          "temperature_max": 27.231,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.583,
          "soiltemperature_0to10cm_mean": 21.434,
          "soilmoisture_0to10cm": 0.298,
          "windspeed_mean": 1.633
        },
        {
          "time": "2025-07-15 00:00:00",
          "temperature_mean": 21.863,
          "temperature_min": 18.066,
          "temperature_max": 26.376,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.564,
          "soiltemperature_0to10cm_mean": 22.465,
          "soilmoisture_0to10cm": 0.279,
          "windspeed_mean": 3.109
        },
        {
          "time": "2025-07-16 00:00:00",
          "temperature_mean": 18.655,
          "temperature_min": 14.973,
          "temperature_max": 22.602,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.608,
          "soiltemperature_0to10cm_mean": 20.659,
          "soilmoisture_0to10cm": 0.275,
          "windspeed_mean": 2.356
        },
        {
          "time": "2025-07-17 00:00:00",
          "temperature_mean": 17.109,
          "temperature_min": 13.711,
          "temperature_max": 20.91,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.803,
          "soiltemperature_0to10cm_mean": 18.831,
          "soilmoisture_0to10cm": 0.289,
          "windspeed_mean": 2.914
        },
        {
          "time": "2025-07-18 00:00:00",
          "temperature_mean": 17.787,
          "temperature_min": 14.265,
          "temperature_max": 21.688,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.78,
          "soiltemperature_0to10cm_mean": 18.328,
          "soilmoisture_0to10cm": 0.321,
          "windspeed_mean": 1.972
        },
        {
          "time": "2025-07-19 00:00:00",
          "temperature_mean": 20.234,
          "temperature_min": 14.046,
          "temperature_max": 25.089,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.362,
          "soiltemperature_0to10cm_mean": 20.178,
          "soilmoisture_0to10cm": 0.311,
          "windspeed_mean": 0.695
        },
        {
          "time": "2025-07-20 00:00:00",
          "temperature_mean": 22.698,
          "temperature_min": 14.646,
          "temperature_max": 28.428,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.407,
          "soiltemperature_0to10cm_mean": 22.176,
          "soilmoisture_0to10cm": 0.288,
          "windspeed_mean": 0.256
        },
        {
          "time": "2025-07-21 00:00:00",
          "temperature_mean": 22.218,
          "temperature_min": 16.524,
          "temperature_max": 28.627,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.724,
          "soiltemperature_0to10cm_mean": 22.824,
          "soilmoisture_0to10cm": 0.289,
          "windspeed_mean": 0.845
        },
        {
          "time": "2025-07-22 00:00:00",
          "temperature_mean": 20.091,
          "temperature_min": 15.245,
          "temperature_max": 24.602,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.211,
          "soiltemperature_0to10cm_mean": 21.039,
          "soilmoisture_0to10cm": 0.324,
          "windspeed_mean": 3.329
        },
        {
          "time": "2025-07-23 00:00:00",
          "temperature_mean": 20.675,
          "temperature_min": 15.584,
          "temperature_max": 25.205,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.453,
          "soiltemperature_0to10cm_mean": 21.097,
          "soilmoisture_0to10cm": 0.295,
          "windspeed_mean": 2.24
        },
        {
          "time": "2025-07-24 00:00:00",
          "temperature_mean": 18.772,
          "temperature_min": 15.706,
          "temperature_max": 21.485,
          "precipitation_sum": 14.0,
          "totalcloudcover_mean": 0.883,
          "soiltemperature_0to10cm_mean": 19.595,
          "soilmoisture_0to10cm": 0.326,
          "windspeed_mean": 1.954
        },
        {
          "time": "2025-07-25 00:00:00",
          "temperature_mean": 19.888,
          "temperature_min": 15.195,
          "temperature_max": 24.298,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.763,
          "soiltemperature_0to10cm_mean": 20.409,
          "soilmoisture_0to10cm": 0.349,
          "windspeed_mean": 1.294
        },
        {
          "time": "2025-07-26 00:00:00",
          "temperature_mean": 19.034,
          "temperature_min": 16.629,
          "temperature_max": 20.664,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.98,
          "soiltemperature_0to10cm_mean": 19.192,
          "soilmoisture_0to10cm": 0.361,
          "windspeed_mean": 1.892
        },
        {
          "time": "2025-07-27 00:00:00",
          "temperature_mean": 17.418,
          "temperature_min": 15.491,
          "temperature_max": 18.661,
          "precipitation_sum": 12.0,
          "totalcloudcover_mean": 0.967,
          "soiltemperature_0to10cm_mean": 17.822,
          "soilmoisture_0to10cm": 0.391,
          "windspeed_mean": 3.409
        },
        {
          "time": "2025-07-28 00:00:00",
          "temperature_mean": 18.064,
          "temperature_min": 14.534,
          "temperature_max": 22.372,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.852,
          "soiltemperature_0to10cm_mean": 18.46,
          "soilmoisture_0to10cm": 0.378,
          "windspeed_mean": 3.366
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
      "date": "2025-04-12",
      "day_since": 92
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
      "date": "2025-07-11",
      "day_since": 2
    }
  },
  "timing_of_field_operations": {
    "2025-07-11": {
      "weather_conditions": {
        "temperature_mean": 17.539,
        "temperature_min": 13.489,
        "temperature_max": 21.492,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.699,
        "soiltemperature_0to10cm_mean": 18.569,
        "soilmoisture_0to10cm": 0.294,
        "windspeed_mean": 2.291
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
        "temperature_mean": 17.698,
        "temperature_min": 12.604,
        "temperature_max": 21.902,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.853,
        "soiltemperature_0to10cm_mean": 18.521,
        "soilmoisture_0to10cm": 0.293,
        "windspeed_mean": 1.573
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
        "temperature_mean": 20.471,
        "temperature_min": 14.718,
        "temperature_max": 25.86,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.38,
        "soiltemperature_0to10cm_mean": 20.347,
        "soilmoisture_0to10cm": 0.318,
        "windspeed_mean": 1.646
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
        "temperature_mean": 21.474,
        "temperature_min": 14.0,
        "temperature_max": 27.231,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.583,
        "soiltemperature_0to10cm_mean": 21.434,
        "soilmoisture_0to10cm": 0.298,
        "windspeed_mean": 1.633
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
        "temperature_mean": 21.863,
        "temperature_min": 18.066,
        "temperature_max": 26.376,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.564,
        "soiltemperature_0to10cm_mean": 22.465,
        "soilmoisture_0to10cm": 0.279,
        "windspeed_mean": 3.109
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
        "temperature_mean": 18.655,
        "temperature_min": 14.973,
        "temperature_max": 22.602,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.608,
        "soiltemperature_0to10cm_mean": 20.659,
        "soilmoisture_0to10cm": 0.275,
        "windspeed_mean": 2.356
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
        "temperature_mean": 17.109,
        "temperature_min": 13.711,
        "temperature_max": 20.91,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.803,
        "soiltemperature_0to10cm_mean": 18.831,
        "soilmoisture_0to10cm": 0.289,
        "windspeed_mean": 2.914
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
        "temperature_mean": 17.787,
        "temperature_min": 14.265,
        "temperature_max": 21.688,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.78,
        "soiltemperature_0to10cm_mean": 18.328,
        "soilmoisture_0to10cm": 0.321,
        "windspeed_mean": 1.972
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
        "temperature_mean": 20.234,
        "temperature_min": 14.046,
        "temperature_max": 25.089,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.362,
        "soiltemperature_0to10cm_mean": 20.178,
        "soilmoisture_0to10cm": 0.311,
        "windspeed_mean": 0.695
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
        "temperature_mean": 22.698,
        "temperature_min": 14.646,
        "temperature_max": 28.428,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.407,
        "soiltemperature_0to10cm_mean": 22.176,
        "soilmoisture_0to10cm": 0.288,
        "windspeed_mean": 0.256
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
        "temperature_mean": 22.218,
        "temperature_min": 16.524,
        "temperature_max": 28.627,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.724,
        "soiltemperature_0to10cm_mean": 22.824,
        "soilmoisture_0to10cm": 0.289,
        "windspeed_mean": 0.845
      },
      "harvest": {
        "conditions": {
          "rainfall": "bad -> BLOCKED",
          "day_air_temperature_min": "good",
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
        "temperature_mean": 20.091,
        "temperature_min": 15.245,
        "temperature_max": 24.602,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.211,
        "soiltemperature_0to10cm_mean": 21.039,
        "soilmoisture_0to10cm": 0.324,
        "windspeed_mean": 3.329
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
        "temperature_mean": 20.675,
        "temperature_min": 15.584,
        "temperature_max": 25.205,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.453,
        "soiltemperature_0to10cm_mean": 21.097,
        "soilmoisture_0to10cm": 0.295,
        "windspeed_mean": 2.24
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
        "temperature_mean": 18.772,
        "temperature_min": 15.706,
        "temperature_max": 21.485,
        "precipitation_sum": 14.0,
        "totalcloudcover_mean": 0.883,
        "soiltemperature_0to10cm_mean": 19.595,
        "soilmoisture_0to10cm": 0.326,
        "windspeed_mean": 1.954
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
        "temperature_mean": 19.888,
        "temperature_min": 15.195,
        "temperature_max": 24.298,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.763,
        "soiltemperature_0to10cm_mean": 20.409,
        "soilmoisture_0to10cm": 0.349,
        "windspeed_mean": 1.294
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
        "temperature_mean": 19.034,
        "temperature_min": 16.629,
        "temperature_max": 20.664,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.98,
        "soiltemperature_0to10cm_mean": 19.192,
        "soilmoisture_0to10cm": 0.361,
        "windspeed_mean": 1.892
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
        "temperature_mean": 17.418,
        "temperature_min": 15.491,
        "temperature_max": 18.661,
        "precipitation_sum": 12.0,
        "totalcloudcover_mean": 0.967,
        "soiltemperature_0to10cm_mean": 17.822,
        "soilmoisture_0to10cm": 0.391,
        "windspeed_mean": 3.409
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
        "temperature_mean": 18.064,
        "temperature_min": 14.534,
        "temperature_max": 22.372,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.852,
        "soiltemperature_0to10cm_mean": 18.46,
        "soilmoisture_0to10cm": 0.378,
        "windspeed_mean": 3.366
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
  "polygon_wkt": "POLYGON ((16.25515866 49.12463116, 16.25520976 49.12460948, 16.25516645 49.12453604, 16.25487654 49.12413878, 16.25466423 49.1238579, 16.25458819 49.12377082, 16.25445372 49.12368865, 16.25417761 49.12359128, 16.25403861 49.12355093, 16.2539411 49.12352414, 16.2537129 49.12345218, 16.25328919 49.12328325, 16.25301952 49.12320862, 16.25282453 49.12316035, 16.25263938 49.12313023, 16.25254564 49.12312017, 16.25242945 49.12311373, 16.25229137 49.12309049, 16.25202041 49.1230266, 16.25193587 49.12302512, 16.25184545 49.12303305, 16.25179383 49.12309819, 16.25181374 49.12317039, 16.25190702 49.1233329, 16.25204154 49.12355328, 16.25220056 49.12378786, 16.252366 49.12401406, 16.25258368 49.12431487, 16.25269216 49.12443607, 16.25282697 49.12454507, 16.25300264 49.12463588, 16.25321525 49.1247312, 16.25334329 49.12483263, 16.25348377 49.12493271, 16.25356234 49.12496542, 16.25360423 49.12496466, 16.25372117 49.12494938, 16.25389289 49.12491261, 16.25419603 49.1248329, 16.25515866 49.12463116))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
