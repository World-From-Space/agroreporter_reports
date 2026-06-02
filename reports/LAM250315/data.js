// Field data for LAM250315 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAM250315",
  "metadata": {
    "field_area_ha": 25.86,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Martínkov"
    },
    "terrain": {
      "variability": 16.08,
      "mean_elevation": 561.69,
      "min_elevation": 551.732,
      "max_elevation": 567.812
    },
    "soil": {
      "bulk_density kg/dm³": 1.323,
      "cation_exchange_capacity cmol(c)/kg": 18.977,
      "clay_particles g/100g (%)": 19.261,
      "sand particles g/100g (%)": 32.839,
      "silt particles g/100g (%)": 47.899,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-02-24": {
      "min": 0.166,
      "max": 0.395,
      "median": 0.277,
      "mean": 0.276,
      "sd": 0.022
    },
    "2025-03-05": {
      "min": 0.256,
      "max": 0.442,
      "median": 0.345,
      "mean": 0.344,
      "sd": 0.019
    },
    "2025-03-07": {
      "min": 0.239,
      "max": 0.445,
      "median": 0.361,
      "mean": 0.361,
      "sd": 0.022
    },
    "2025-03-08": {
      "min": 0.215,
      "max": 0.442,
      "median": 0.334,
      "mean": 0.334,
      "sd": 0.023
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 25.743,
      "area_percentage": 1.0
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.013,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 6.581,
        "area_percentage": 0.256
      },
      "low_vegetation": {
        "area_ha": 19.105,
        "area_percentage": 0.742
      },
      "medium vegetation": {
        "area_ha": 0.057,
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
    "evi_median": 0.316,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.82,
          "percentage": 3.18
        },
        "EVI_statistics": {
          "mean": 0.25,
          "median": 0.256,
          "min": 0.182,
          "max": 0.268
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 5.71,
          "percentage": 22.18
        },
        "EVI_statistics": {
          "mean": 0.288,
          "median": 0.29,
          "min": 0.268,
          "max": 0.3
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 12.53,
          "percentage": 48.63
        },
        "EVI_statistics": {
          "mean": 0.315,
          "median": 0.315,
          "min": 0.3,
          "max": 0.331
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 5.53,
          "percentage": 21.49
        },
        "EVI_statistics": {
          "mean": 0.344,
          "median": 0.342,
          "min": 0.331,
          "max": 0.363
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 1.17,
          "percentage": 4.53
        },
        "EVI_statistics": {
          "mean": 0.376,
          "median": 0.372,
          "min": 0.363,
          "max": 0.44
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 4.47,
            "area_percentage": 17.67,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.68,
            "area_percentage": 22.46,
            "zone_number": 2
          },
          "similar": {
            "ha": 5.12,
            "area_percentage": 20.25,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 3.64,
            "area_percentage": 14.39,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 6.38,
            "area_percentage": 25.23,
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
      "old_value": 0.277,
      "new_value": 0.316,
      "difference": 0.039
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
          "ha": 25.26,
          "percentage": 98.09,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.49,
          "percentage": 1.91,
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
          "ha": 2.56,
          "percentage": 9.96,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.82,
          "percentage": 14.82,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 12.93,
          "percentage": 50.19,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.91,
          "percentage": 15.17,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.54,
          "percentage": 9.86,
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
      "date": "2025-05-31",
      "day_since": -78
    },
    "beginning_of_ripenes": {
      "date": "2025-07-15",
      "day_since": -123
    },
    "harvest": {
      "date": "2025-08-02",
      "day_since": -141
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
  "polygon_wkt": "POLYGON ((15.71932294 49.09325389, 15.71900233 49.09334561, 15.71868234 49.09344192, 15.71849606 49.09351188, 15.71832131 49.09358793, 15.71785453 49.09378752, 15.71750276 49.09394942, 15.7173784 49.09403277, 15.71734162 49.09412187, 15.71731855 49.09417213, 15.71731068 49.09422242, 15.71730454 49.09426923, 15.71730871 49.09431971, 15.71735937 49.0944194, 15.71740886 49.09447409, 15.71758586 49.09462673, 15.7176143 49.09466412, 15.71769275 49.09498932, 15.71772879 49.0951711, 15.71772769 49.095281, 15.71769733 49.09546971, 15.71769823 49.09555196, 15.7177176 49.09563796, 15.71778768 49.09580375, 15.71789231 49.09597236, 15.71796688 49.09620767, 15.71799942 49.09630686, 15.71802981 49.09646504, 15.71803666 49.09658048, 15.71802038 49.09668257, 15.71794971 49.09678241, 15.71794959 49.09681561, 15.71795127 49.09684439, 15.71798282 49.09689961, 15.7187124 49.09734174, 15.71957696 49.09787039, 15.71992492 49.09815503, 15.72054878 49.098696, 15.72066397 49.09876757, 15.72073098 49.09880093, 15.72083007 49.09885493, 15.72145156 49.09912218, 15.72218576 49.09942186, 15.72237443 49.09948382, 15.72254048 49.09951864, 15.72266737 49.09954132, 15.72278975 49.09955096, 15.7229738 49.09956275, 15.72325836 49.09956796, 15.72468353 49.09952296, 15.7263553 49.09948289, 15.72087814 49.09291561, 15.72018542 49.09300823, 15.71993725 49.09306955, 15.71973228 49.09316479, 15.71932294 49.09325389), (15.71887806 49.09597622, 15.71899102 49.09588058, 15.71917374 49.09582634, 15.71935681 49.09581982, 15.71943874 49.0958442, 15.71946402 49.09588144, 15.71946819 49.09591851, 15.7194339 49.09594533, 15.71930607 49.09599796, 15.7190597 49.09607709, 15.71896412 49.09610243, 15.7189019 49.09609456, 15.71886587 49.0960678, 15.71885278 49.0960399, 15.71887806 49.09597622))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
