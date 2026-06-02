// Field data for LAD250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAD250315",
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
    "2025-01-10": {
      "min": 0.098,
      "max": 0.44,
      "median": 0.307,
      "mean": 0.302,
      "sd": 0.038
    },
    "2025-02-01": {
      "min": 0.178,
      "max": 0.494,
      "median": 0.348,
      "mean": 0.344,
      "sd": 0.033
    },
    "2025-02-05": {
      "min": 0.209,
      "max": 0.454,
      "median": 0.348,
      "mean": 0.345,
      "sd": 0.029
    },
    "2025-02-11": {
      "min": 0.148,
      "max": 0.46,
      "median": 0.33,
      "mean": 0.329,
      "sd": 0.037
    },
    "2025-02-24": {
      "min": 0.142,
      "max": 0.423,
      "median": 0.3,
      "mean": 0.292,
      "sd": 0.036
    },
    "2025-03-05": {
      "min": 0.226,
      "max": 0.427,
      "median": 0.339,
      "mean": 0.336,
      "sd": 0.022
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 21.885,
      "area_percentage": 1.0
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 1.134,
        "area_percentage": 0.052
      },
      "low_vegetation": {
        "area_ha": 20.71,
        "area_percentage": 0.946
      },
      "medium vegetation": {
        "area_ha": 0.041,
        "area_percentage": 0.002
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
    "evi_median": 0.347,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.94,
          "percentage": 4.3
        },
        "EVI_statistics": {
          "mean": 0.271,
          "median": 0.273,
          "min": 0.22,
          "max": 0.295
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.01,
          "percentage": 13.74
        },
        "EVI_statistics": {
          "mean": 0.318,
          "median": 0.32,
          "min": 0.295,
          "max": 0.329
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 15.38,
          "percentage": 70.27
        },
        "EVI_statistics": {
          "mean": 0.347,
          "median": 0.348,
          "min": 0.329,
          "max": 0.364
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 2.51,
          "percentage": 11.48
        },
        "EVI_statistics": {
          "mean": 0.372,
          "median": 0.37,
          "min": 0.364,
          "max": 0.398
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.05,
          "percentage": 0.21
        },
        "EVI_statistics": {
          "mean": 0.407,
          "median": 0.405,
          "min": 0.399,
          "max": 0.435
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.69,
            "area_percentage": 3.22,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 4.18,
            "area_percentage": 19.52,
            "zone_number": 2
          },
          "similar": {
            "ha": 9.8,
            "area_percentage": 45.77,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 5.09,
            "area_percentage": 23.77,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.65,
            "area_percentage": 7.71,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-03-15",
      "reference_image_date": "2025-02-24",
      "change_period": 19
    },
    "median_EVI_change": {
      "old_value": 0.3,
      "new_value": 0.347,
      "difference": 0.047
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
          "ha": 0.0,
          "percentage": 0.02,
          "zone_number": 2
        },
        "no_change": {
          "ha": 16.83,
          "percentage": 76.89,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 5.05,
          "percentage": 23.07,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.01,
          "percentage": 0.02,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": []
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 3.97,
          "percentage": 18.13,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.23,
          "percentage": 14.74,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 8.2,
          "percentage": 37.47,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.46,
          "percentage": 11.26,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 4.03,
          "percentage": 18.4,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.73655690276699 49.10127164203125)",
          "new_value": 0.327,
          "old_value": 0.323,
          "value_difference": 0.004,
          "area_ha": 0.28,
          "category": "major_decline",
          "location": "N",
          "id": 1
        },
        {
          "geometry": "POINT (15.74098781432039 49.09849454953125)",
          "new_value": 0.36,
          "old_value": 0.274,
          "value_difference": 0.086,
          "area_ha": 2.526,
          "category": "major_growth",
          "location": "E",
          "id": 2
        }
      ]
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
      "date": "2025-04-10",
      "day_since": -27
    },
    "beginning_of_heading": {
      "date": "2025-05-25",
      "day_since": -72
    },
    "beginning_of_ripenes": {
      "date": "2025-07-10",
      "day_since": -118
    },
    "harvest": {
      "date": "2025-07-28",
      "day_since": -136
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
  "polygon_wkt": "POLYGON ((15.73893923 49.1008205, 15.7389888 49.10080557, 15.73907601 49.10080764, 15.73915344 49.10082331, 15.73936013 49.10093062, 15.73953817 49.10099494, 15.7397719 49.10105406, 15.74034875 49.1011222, 15.74074889 49.1011578, 15.74099738 49.10118932, 15.74135921 49.10126276, 15.74139122 49.10126336, 15.74143393 49.10125329, 15.74148347 49.10123003, 15.74151788 49.10118545, 15.74154642 49.10112595, 15.74178514 49.10047057, 15.74196444 49.10007688, 15.74203389 49.09981731, 15.74206938 49.09958626, 15.7419995 49.09933344, 15.74204865 49.09908667, 15.74207664 49.09885307, 15.74210544 49.09835663, 15.7421266 49.09828445, 15.7419855 49.09802681, 15.74185833 49.09778858, 15.74170322 49.09754036, 15.74147939 49.0972587, 15.74115955 49.09694584, 15.74074863 49.09667313, 15.74045338 49.09650519, 15.74030602 49.09656023, 15.74019277 49.09657048, 15.73999272 49.09662484, 15.73965374 49.09673673, 15.73947672 49.09680894, 15.73943954 49.09683836, 15.73943126 49.09684429, 15.73935163 49.09689589, 15.73934779 49.09689827, 15.73926593 49.09694695, 15.73924573 49.0969567, 15.73922294 49.09696356, 15.73915187 49.09697946, 15.73915914 49.09698963, 15.73764492 49.09743268, 15.73765279 49.09738563, 15.73751539 49.0973861, 15.7372589 49.09744551, 15.73567961 49.09785022, 15.73566072 49.09785394, 15.73554086 49.09787087, 15.73552065 49.09787259, 15.73550028 49.09787211, 15.73541394 49.09786531, 15.73539351 49.09786254, 15.73531883 49.09784797, 15.73518663 49.09782553, 15.73502897 49.09771517, 15.73487199 49.09775554, 15.73473027 49.09785222, 15.73456322 49.09792774, 15.73439185 49.09796697, 15.73359606 49.09846922, 15.73637721 49.10126607, 15.73636683 49.101323, 15.73613625 49.10153639, 15.73619893 49.10156861, 15.73621504 49.10156029, 15.73625707 49.10156999, 15.73631819 49.10160834, 15.73637652 49.10163213, 15.73660945 49.10140507, 15.73694351 49.10108085, 15.73724436 49.10078889, 15.73753668 49.10050512, 15.73825971 49.10066769, 15.73893923 49.1008205))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
