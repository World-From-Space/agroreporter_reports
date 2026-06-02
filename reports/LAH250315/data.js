// Field data for LAH250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAH250315",
  "metadata": {
    "field_area_ha": 20.96,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lesonice"
    },
    "terrain": {
      "variability": 10.845,
      "mean_elevation": 538.915,
      "min_elevation": 532.668,
      "max_elevation": 543.513
    },
    "soil": {
      "bulk_density kg/dm³": 1.334,
      "cation_exchange_capacity cmol(c)/kg": 19.774,
      "clay_particles g/100g (%)": 20.385,
      "sand particles g/100g (%)": 39.575,
      "silt particles g/100g (%)": 40.056,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-01-10": {
      "min": 0.127,
      "max": 0.429,
      "median": 0.28,
      "mean": 0.28,
      "sd": 0.028
    },
    "2025-02-01": {
      "min": 0.186,
      "max": 0.428,
      "median": 0.323,
      "mean": 0.323,
      "sd": 0.026
    },
    "2025-02-05": {
      "min": 0.223,
      "max": 0.402,
      "median": 0.321,
      "mean": 0.321,
      "sd": 0.021
    },
    "2025-02-11": {
      "min": 0.154,
      "max": 0.375,
      "median": 0.283,
      "mean": 0.284,
      "sd": 0.023
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 21.011,
      "area_percentage": 1.0
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 1.453,
        "area_percentage": 0.069
      },
      "low_vegetation": {
        "area_ha": 19.539,
        "area_percentage": 0.93
      },
      "medium vegetation": {
        "area_ha": 0.019,
        "area_percentage": 0.001
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
    "evi_median": 0.334,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.76,
          "percentage": 3.62
        },
        "EVI_statistics": {
          "mean": 0.267,
          "median": 0.269,
          "min": 0.219,
          "max": 0.284
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.32,
          "percentage": 15.82
        },
        "EVI_statistics": {
          "mean": 0.307,
          "median": 0.309,
          "min": 0.284,
          "max": 0.317
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 12.64,
          "percentage": 60.15
        },
        "EVI_statistics": {
          "mean": 0.334,
          "median": 0.334,
          "min": 0.317,
          "max": 0.351
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.12,
          "percentage": 19.59
        },
        "EVI_statistics": {
          "mean": 0.361,
          "median": 0.36,
          "min": 0.351,
          "max": 0.384
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.17,
          "percentage": 0.82
        },
        "EVI_statistics": {
          "mean": 0.392,
          "median": 0.39,
          "min": 0.384,
          "max": 0.424
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 2.45,
            "area_percentage": 12.26,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 3.99,
            "area_percentage": 19.97,
            "zone_number": 2
          },
          "similar": {
            "ha": 6.7,
            "area_percentage": 33.53,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 3.87,
            "area_percentage": 19.37,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 2.97,
            "area_percentage": 14.86,
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
      "old_value": 0.283,
      "new_value": 0.334,
      "difference": 0.05
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
          "percentage": 0.0,
          "zone_number": 2
        },
        "no_change": {
          "ha": 19.89,
          "percentage": 94.67,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 1.12,
          "percentage": 5.33,
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
          "ha": 2.8,
          "percentage": 13.33,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 2.75,
          "percentage": 13.1,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 9.4,
          "percentage": 44.76,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.42,
          "percentage": 16.26,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.64,
          "percentage": 12.54,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.745886014476048 49.093259852569446)",
          "new_value": 0.319,
          "old_value": 0.296,
          "value_difference": 0.023,
          "area_ha": 0.292,
          "category": "major_decline",
          "location": "E",
          "id": 1
        },
        {
          "geometry": "POINT (15.746756084086826 49.092591953263884)",
          "new_value": 0.324,
          "old_value": 0.309,
          "value_difference": 0.015,
          "area_ha": 0.485,
          "category": "major_decline",
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
      "date": "2024-10-12",
      "day_since": 153
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-17",
      "day_since": -34
    },
    "beginning_of_heading": {
      "date": "2025-06-01",
      "day_since": -79
    },
    "beginning_of_ripenes": {
      "date": "2025-07-17",
      "day_since": -125
    },
    "harvest": {
      "date": "2025-08-04",
      "day_since": -143
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
  "polygon_wkt": "POLYGON ((15.74656123 49.09105737, 15.74527726 49.09188699, 15.74524083 49.09187731, 15.74475229 49.09147901, 15.74450925 49.09128865, 15.74421604 49.09148183, 15.74380554 49.09175228, 15.74319148 49.09214779, 15.74153282 49.09324274, 15.73935076 49.0946898, 15.73769565 49.09577845, 15.73751776 49.09589303, 15.73693981 49.09626529, 15.73674079 49.09639347, 15.73671591 49.09649205, 15.73666774 49.09652177, 15.73652001 49.09657331, 15.73578661 49.0970348, 15.73518211 49.09745276, 15.73513444 49.09749313, 15.73517488 49.09753091, 15.73522514 49.09756967, 15.73543151 49.09764778, 15.73553449 49.09765463, 15.73562933 49.09764129, 15.73707989 49.09724587, 15.73762284 49.09709533, 15.73762478 49.0970948, 15.73879024 49.09678689, 15.73959905 49.09653545, 15.739709 49.09647471, 15.73974596 49.09644021, 15.73995339 49.09634548, 15.74002054 49.09631001, 15.74069057 49.09612181, 15.74099229 49.09601057, 15.74145572 49.09588942, 15.74173511 49.0958018, 15.74205561 49.09569296, 15.74233851 49.09554853, 15.74258815 49.0953988, 15.74309073 49.09496683, 15.74332368 49.09461528, 15.74340045 49.0945724, 15.74350435 49.09452442, 15.74370577 49.09452104, 15.74393476 49.09450325, 15.7440976 49.09448538, 15.74426319 49.09445239, 15.74440576 49.09441759, 15.74454249 49.0943721, 15.74483744 49.09421477, 15.74561845 49.09368416, 15.74578279 49.09357777, 15.74611506 49.0933512, 15.74631266 49.09319012, 15.74649533 49.09296719, 15.746596 49.09287639, 15.74673333 49.09280386, 15.7470317 49.09264979, 15.74734517 49.09244788, 15.74742355 49.09235947, 15.74746172 49.09227812, 15.74746292 49.09218284, 15.74741053 49.09205674, 15.74742529 49.09197577, 15.74748962 49.09188606, 15.74753139 49.09182406, 15.7476123 49.09177051, 15.74764833 49.09175298, 15.74772529 49.0917111, 15.74782281 49.09165646, 15.74790156 49.09161472, 15.74800773 49.09157274, 15.74825433 49.09144036, 15.74868066 49.09120581, 15.74879833 49.09111537, 15.74888513 49.09100206, 15.74897269 49.09086325, 15.74895001 49.09076459, 15.74864009 49.09040369, 15.74825946 49.08996043, 15.74672311 49.09095277, 15.74656123 49.09105737))"
};
