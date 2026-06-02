// Field data for LAF250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAF250315",
  "metadata": {
    "field_area_ha": 32.954,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Martínkov"
    },
    "terrain": {
      "variability": 42.142,
      "mean_elevation": 572.298,
      "min_elevation": 553.388,
      "max_elevation": 595.529
    },
    "soil": {
      "bulk_density kg/dm³": 1.319,
      "cation_exchange_capacity cmol(c)/kg": 19.919,
      "clay_particles g/100g (%)": 21.412,
      "sand particles g/100g (%)": 33.512,
      "silt particles g/100g (%)": 45.076,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-02-01": {
      "min": 0.212,
      "max": 0.431,
      "median": 0.344,
      "mean": 0.341,
      "sd": 0.027
    },
    "2025-02-11": {
      "min": 0.197,
      "max": 0.432,
      "median": 0.345,
      "mean": 0.342,
      "sd": 0.027
    },
    "2025-03-05": {
      "min": 0.239,
      "max": 0.425,
      "median": 0.356,
      "mean": 0.352,
      "sd": 0.026
    },
    "2025-03-07": {
      "min": 0.228,
      "max": 0.448,
      "median": 0.363,
      "mean": 0.36,
      "sd": 0.027
    },
    "2025-03-08": {
      "min": 0.215,
      "max": 0.433,
      "median": 0.338,
      "mean": 0.335,
      "sd": 0.029
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 32.797,
      "area_percentage": 0.999
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.041,
        "area_percentage": 0.001
      },
      "very_low_vegetation": {
        "area_ha": 9.205,
        "area_percentage": 0.28
      },
      "low_vegetation": {
        "area_ha": 23.579,
        "area_percentage": 0.718
      },
      "medium vegetation": {
        "area_ha": 0.013,
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
    "number_of_zones": 5,
    "evi_median": 0.318,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 3.08,
          "percentage": 9.35
        },
        "EVI_statistics": {
          "mean": 0.248,
          "median": 0.251,
          "min": 0.172,
          "max": 0.27
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 6.94,
          "percentage": 21.06
        },
        "EVI_statistics": {
          "mean": 0.29,
          "median": 0.291,
          "min": 0.27,
          "max": 0.302
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 13.22,
          "percentage": 40.14
        },
        "EVI_statistics": {
          "mean": 0.319,
          "median": 0.319,
          "min": 0.302,
          "max": 0.334
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 8.59,
          "percentage": 26.07
        },
        "EVI_statistics": {
          "mean": 0.347,
          "median": 0.346,
          "min": 0.334,
          "max": 0.366
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 1.01,
          "percentage": 3.07
        },
        "EVI_statistics": {
          "mean": 0.374,
          "median": 0.372,
          "min": 0.366,
          "max": 0.412
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 3.53,
            "area_percentage": 10.94,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 6.51,
            "area_percentage": 20.17,
            "zone_number": 2
          },
          "similar": {
            "ha": 11.1,
            "area_percentage": 34.4,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 6.48,
            "area_percentage": 20.08,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 4.65,
            "area_percentage": 14.41,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-03-15",
      "reference_image_date": "2025-02-11",
      "change_period": 32
    },
    "median_EVI_change": {
      "old_value": 0.345,
      "new_value": 0.318,
      "difference": -0.027
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
          "ha": 0.35,
          "percentage": 1.05,
          "zone_number": 2
        },
        "no_change": {
          "ha": 32.49,
          "percentage": 98.95,
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
          "ha": 2.98,
          "percentage": 9.08,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 4.84,
          "percentage": 14.75,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 17.04,
          "percentage": 51.88,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 5.07,
          "percentage": 15.42,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.91,
          "percentage": 8.86,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 598.572,
      "historical_average": 628.225
    },
    "accumulated_precipitation_since_seeding": {
      "current": 143.921,
      "historical_mean": 228.395
    },
    "precipitation_summary": {
      "last_3_days": 12.994,
      "last_7_days": 16.782,
      "last_14_days": 17.159,
      "last_30_days": 25.047
    },
    "standardized_precipitation_index": {
      "1_month": -0.977,
      "3_month": -1.605,
      "6_month": -1.47
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-03-11 00:00:00",
          "temperature_mean": 7.894,
          "temperature_min": 3.501,
          "temperature_max": 12.513,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.693,
          "soiltemperature_0to10cm_mean": 6.942,
          "soilmoisture_0to10cm": 0.364,
          "windspeed_mean": 2.167
        },
        {
          "time": "2025-03-12 00:00:00",
          "temperature_mean": 6.802,
          "temperature_min": 0.482,
          "temperature_max": 11.981,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.853,
          "soiltemperature_0to10cm_mean": 5.121,
          "soilmoisture_0to10cm": 0.354,
          "windspeed_mean": 1.111
        },
        {
          "time": "2025-03-13 00:00:00",
          "temperature_mean": 3.325,
          "temperature_min": -0.432,
          "temperature_max": 5.132,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.862,
          "soiltemperature_0to10cm_mean": 3.905,
          "soilmoisture_0to10cm": 0.383,
          "windspeed_mean": 2.171
        },
        {
          "time": "2025-03-14 00:00:00",
          "temperature_mean": 1.874,
          "temperature_min": -1.243,
          "temperature_max": 5.007,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.995,
          "soiltemperature_0to10cm_mean": 2.343,
          "soilmoisture_0to10cm": 0.384,
          "windspeed_mean": 1.272
        },
        {
          "time": "2025-03-15 00:00:00",
          "temperature_mean": 1.699,
          "temperature_min": 0.178,
          "temperature_max": 4.066,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.995,
          "soiltemperature_0to10cm_mean": 2.267,
          "soilmoisture_0to10cm": 0.383,
          "windspeed_mean": 3.005
        },
        {
          "time": "2025-03-16 00:00:00",
          "temperature_mean": 2.632,
          "temperature_min": -0.355,
          "temperature_max": 7.792,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.627,
          "soiltemperature_0to10cm_mean": 3.124,
          "soilmoisture_0to10cm": 0.376,
          "windspeed_mean": 2.178
        },
        {
          "time": "2025-03-17 00:00:00",
          "temperature_mean": 0.058,
          "temperature_min": -3.882,
          "temperature_max": 3.165,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.392,
          "soiltemperature_0to10cm_mean": 1.543,
          "soilmoisture_0to10cm": 0.368,
          "windspeed_mean": 3.303
        },
        {
          "time": "2025-03-18 00:00:00",
          "temperature_mean": -0.957,
          "temperature_min": -4.376,
          "temperature_max": 3.602,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.019,
          "soiltemperature_0to10cm_mean": 0.434,
          "soilmoisture_0to10cm": 0.363,
          "windspeed_mean": 0.4
        },
        {
          "time": "2025-03-19 00:00:00",
          "temperature_mean": 0.563,
          "temperature_min": -4.79,
          "temperature_max": 6.9,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 0.355,
          "soilmoisture_0to10cm": 0.359,
          "windspeed_mean": 2.175
        },
        {
          "time": "2025-03-20 00:00:00",
          "temperature_mean": 2.199,
          "temperature_min": -4.583,
          "temperature_max": 9.437,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 1.197,
          "soilmoisture_0to10cm": 0.357,
          "windspeed_mean": 1.695
        },
        {
          "time": "2025-03-21 00:00:00",
          "temperature_mean": 5.177,
          "temperature_min": -1.41,
          "temperature_max": 11.753,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.0,
          "soiltemperature_0to10cm_mean": 2.408,
          "soilmoisture_0to10cm": 0.354,
          "windspeed_mean": 2.077
        },
        {
          "time": "2025-03-22 00:00:00",
          "temperature_mean": 6.769,
          "temperature_min": 2.232,
          "temperature_max": 11.824,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.453,
          "soiltemperature_0to10cm_mean": 5.11,
          "soilmoisture_0to10cm": 0.35,
          "windspeed_mean": 3.789
        },
        {
          "time": "2025-03-23 00:00:00",
          "temperature_mean": 8.212,
          "temperature_min": 4.527,
          "temperature_max": 14.848,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.793,
          "soiltemperature_0to10cm_mean": 6.884,
          "soilmoisture_0to10cm": 0.362,
          "windspeed_mean": 1.435
        },
        {
          "time": "2025-03-24 00:00:00",
          "temperature_mean": 6.856,
          "temperature_min": 2.095,
          "temperature_max": 12.033,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.862,
          "soiltemperature_0to10cm_mean": 6.127,
          "soilmoisture_0to10cm": 0.384,
          "windspeed_mean": 1.336
        },
        {
          "time": "2025-03-25 00:00:00",
          "temperature_mean": 8.305,
          "temperature_min": 3.687,
          "temperature_max": 13.684,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.447,
          "soiltemperature_0to10cm_mean": 7.099,
          "soilmoisture_0to10cm": 0.389,
          "windspeed_mean": 0.209
        },
        {
          "time": "2025-03-26 00:00:00",
          "temperature_mean": 7.273,
          "temperature_min": 2.335,
          "temperature_max": 12.284,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.332,
          "soiltemperature_0to10cm_mean": 7.091,
          "soilmoisture_0to10cm": 0.382,
          "windspeed_mean": 2.134
        },
        {
          "time": "2025-03-27 00:00:00",
          "temperature_mean": 6.473,
          "temperature_min": 2.445,
          "temperature_max": 9.372,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.658,
          "soiltemperature_0to10cm_mean": 6.795,
          "soilmoisture_0to10cm": 0.37,
          "windspeed_mean": 2.721
        },
        {
          "time": "2025-03-28 00:00:00",
          "temperature_mean": 7.07,
          "temperature_min": 0.094,
          "temperature_max": 12.911,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.5,
          "soiltemperature_0to10cm_mean": 6.707,
          "soilmoisture_0to10cm": 0.362,
          "windspeed_mean": 1.753
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 167
    },
    "crop_emergence": {
      "date": "2024-10-13",
      "day_since": 152
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-15",
      "day_since": -32
    },
    "beginning_of_heading": {
      "date": "2025-05-30",
      "day_since": -77
    },
    "beginning_of_ripenes": {
      "date": "2025-07-15",
      "day_since": -123
    },
    "harvest": {
      "date": "2025-08-01",
      "day_since": -140
    }
  },
  "timing_of_field_operations": {
    "2025-03-11": {
      "weather_conditions": {
        "temperature_mean": 7.894,
        "temperature_min": 3.501,
        "temperature_max": 12.513,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.693,
        "soiltemperature_0to10cm_mean": 6.942,
        "soilmoisture_0to10cm": 0.364,
        "windspeed_mean": 2.167
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-12": {
      "weather_conditions": {
        "temperature_mean": 6.802,
        "temperature_min": 0.482,
        "temperature_max": 11.981,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.853,
        "soiltemperature_0to10cm_mean": 5.121,
        "soilmoisture_0to10cm": 0.354,
        "windspeed_mean": 1.111
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-13": {
      "weather_conditions": {
        "temperature_mean": 3.325,
        "temperature_min": -0.432,
        "temperature_max": 5.132,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.862,
        "soiltemperature_0to10cm_mean": 3.905,
        "soilmoisture_0to10cm": 0.383,
        "windspeed_mean": 2.171
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-03-14": {
      "weather_conditions": {
        "temperature_mean": 1.874,
        "temperature_min": -1.243,
        "temperature_max": 5.007,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.995,
        "soiltemperature_0to10cm_mean": 2.343,
        "soilmoisture_0to10cm": 0.384,
        "windspeed_mean": 1.272
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-15": {
      "weather_conditions": {
        "temperature_mean": 1.699,
        "temperature_min": 0.178,
        "temperature_max": 4.066,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.995,
        "soiltemperature_0to10cm_mean": 2.267,
        "soilmoisture_0to10cm": 0.383,
        "windspeed_mean": 3.005
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-16": {
      "weather_conditions": {
        "temperature_mean": 2.632,
        "temperature_min": -0.355,
        "temperature_max": 7.792,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.627,
        "soiltemperature_0to10cm_mean": 3.124,
        "soilmoisture_0to10cm": 0.376,
        "windspeed_mean": 2.178
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-17": {
      "weather_conditions": {
        "temperature_mean": 0.058,
        "temperature_min": -3.882,
        "temperature_max": 3.165,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.392,
        "soiltemperature_0to10cm_mean": 1.543,
        "soilmoisture_0to10cm": 0.368,
        "windspeed_mean": 3.303
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-18": {
      "weather_conditions": {
        "temperature_mean": -0.957,
        "temperature_min": -4.376,
        "temperature_max": 3.602,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.019,
        "soiltemperature_0to10cm_mean": 0.434,
        "soilmoisture_0to10cm": 0.363,
        "windspeed_mean": 0.4
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-19": {
      "weather_conditions": {
        "temperature_mean": 0.563,
        "temperature_min": -4.79,
        "temperature_max": 6.9,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 0.355,
        "soilmoisture_0to10cm": 0.359,
        "windspeed_mean": 2.175
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-20": {
      "weather_conditions": {
        "temperature_mean": 2.199,
        "temperature_min": -4.583,
        "temperature_max": 9.437,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 1.197,
        "soilmoisture_0to10cm": 0.357,
        "windspeed_mean": 1.695
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-21": {
      "weather_conditions": {
        "temperature_mean": 5.177,
        "temperature_min": -1.41,
        "temperature_max": 11.753,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.0,
        "soiltemperature_0to10cm_mean": 2.408,
        "soilmoisture_0to10cm": 0.354,
        "windspeed_mean": 2.077
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-22": {
      "weather_conditions": {
        "temperature_mean": 6.769,
        "temperature_min": 2.232,
        "temperature_max": 11.824,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.453,
        "soiltemperature_0to10cm_mean": 5.11,
        "soilmoisture_0to10cm": 0.35,
        "windspeed_mean": 3.789
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-23": {
      "weather_conditions": {
        "temperature_mean": 8.212,
        "temperature_min": 4.527,
        "temperature_max": 14.848,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.793,
        "soiltemperature_0to10cm_mean": 6.884,
        "soilmoisture_0to10cm": 0.362,
        "windspeed_mean": 1.435
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "bad"
        },
        "relevancy": "high",
        "suitability_index": 0.0
      }
    },
    "2025-03-24": {
      "weather_conditions": {
        "temperature_mean": 6.856,
        "temperature_min": 2.095,
        "temperature_max": 12.033,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.862,
        "soiltemperature_0to10cm_mean": 6.127,
        "soilmoisture_0to10cm": 0.384,
        "windspeed_mean": 1.336
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-25": {
      "weather_conditions": {
        "temperature_mean": 8.305,
        "temperature_min": 3.687,
        "temperature_max": 13.684,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.447,
        "soiltemperature_0to10cm_mean": 7.099,
        "soilmoisture_0to10cm": 0.389,
        "windspeed_mean": 0.209
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-26": {
      "weather_conditions": {
        "temperature_mean": 7.273,
        "temperature_min": 2.335,
        "temperature_max": 12.284,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.332,
        "soiltemperature_0to10cm_mean": 7.091,
        "soilmoisture_0to10cm": 0.382,
        "windspeed_mean": 2.134
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-27": {
      "weather_conditions": {
        "temperature_mean": 6.473,
        "temperature_min": 2.445,
        "temperature_max": 9.372,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.658,
        "soiltemperature_0to10cm_mean": 6.795,
        "soilmoisture_0to10cm": 0.37,
        "windspeed_mean": 2.721
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
      }
    },
    "2025-03-28": {
      "weather_conditions": {
        "temperature_mean": 7.07,
        "temperature_min": 0.094,
        "temperature_max": 12.911,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.5,
        "soiltemperature_0to10cm_mean": 6.707,
        "soilmoisture_0to10cm": 0.362,
        "windspeed_mean": 1.753
      },
      "first_nitrogen": {
        "conditions": {
          "no_strong_rainfall": "good",
          "waterlogged soil": "good",
          "not_before_strong_rainfall": "good"
        },
        "relevancy": "high",
        "suitability_index": 1.0
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
  "polygon_wkt": "POLYGON ((15.71496383 49.106646, 15.71451436 49.10681776, 15.71439073 49.10686896, 15.71438889 49.10688564, 15.71527273 49.10827269, 15.71527435 49.10827535, 15.71553638 49.1087313, 15.71586179 49.10923542, 15.71586186 49.10923552, 15.71612182 49.10963991, 15.71617681 49.10971191, 15.71664248 49.10941621, 15.71680635 49.1093266, 15.71832017 49.10831765, 15.72053305 49.10683436, 15.72179957 49.10600308, 15.72216603 49.10576063, 15.72223483 49.10562387, 15.72245838 49.10550569, 15.72258062 49.10534278, 15.72288823 49.10528394, 15.72356846 49.10483354, 15.72443936 49.10426547, 15.7245063 49.10413495, 15.7247807 49.10404474, 15.72645848 49.10294219, 15.72829668 49.10173706, 15.72876077 49.10143142, 15.73005646 49.1005752, 15.73032131 49.10039462, 15.73048718 49.10026965, 15.73053055 49.10022099, 15.73045103 49.10017192, 15.73043584 49.10016465, 15.73043246 49.10016428, 15.73043274 49.10016316, 15.73032994 49.10011395, 15.72996969 49.10002017, 15.72996443 49.1000187, 15.72959259 49.09990856, 15.72931784 49.09984863, 15.72903009 49.09979746, 15.72859264 49.09973973, 15.72798963 49.09968783, 15.72768469 49.09967517, 15.72768254 49.09967507, 15.7274969 49.09966417, 15.7168956 49.1060182, 15.71662943 49.10613381, 15.71567904 49.10642617, 15.71496383 49.106646))"
};
