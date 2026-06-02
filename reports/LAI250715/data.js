// Field data for LAI250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAI250715",
  "metadata": {
    "field_area_ha": 31.08,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 19.244,
      "mean_elevation": 542.643,
      "min_elevation": 533.11,
      "max_elevation": 552.354
    },
    "soil": {
      "bulk_density kg/dm³": 1.341,
      "cation_exchange_capacity cmol(c)/kg": 17.758,
      "clay_particles g/100g (%)": 22.538,
      "sand particles g/100g (%)": 34.883,
      "silt particles g/100g (%)": 42.678,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-05-14": {
      "min": 0.428,
      "max": 0.787,
      "median": 0.712,
      "mean": 0.707,
      "sd": 0.031
    },
    "2025-05-31": {
      "min": 0.436,
      "max": 0.771,
      "median": 0.719,
      "mean": 0.713,
      "sd": 0.031
    },
    "2025-06-09": {
      "min": 0.404,
      "max": 0.763,
      "median": 0.683,
      "mean": 0.677,
      "sd": 0.034
    },
    "2025-06-15": {
      "min": 0.29,
      "max": 0.746,
      "median": 0.659,
      "mean": 0.65,
      "sd": 0.044
    },
    "2025-06-21": {
      "min": 0.339,
      "max": 0.71,
      "median": 0.627,
      "mean": 0.621,
      "sd": 0.037
    },
    "2025-06-30": {
      "min": 0.278,
      "max": 0.662,
      "median": 0.516,
      "mean": 0.5,
      "sd": 0.068
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 24.224,
      "area_percentage": 0.783
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 6.73,
        "area_percentage": 0.217
      },
      "very_low_vegetation": {
        "area_ha": 20.354,
        "area_percentage": 0.658
      },
      "low_vegetation": {
        "area_ha": 3.594,
        "area_percentage": 0.116
      },
      "medium vegetation": {
        "area_ha": 0.276,
        "area_percentage": 0.009
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
    "evi_median": 0.234,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 6.48,
          "percentage": 20.93
        },
        "EVI_statistics": {
          "mean": 0.187,
          "median": 0.189,
          "min": 0.159,
          "max": 0.199
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 6.08,
          "percentage": 19.63
        },
        "EVI_statistics": {
          "mean": 0.21,
          "median": 0.21,
          "min": 0.199,
          "max": 0.223
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 5.52,
          "percentage": 17.83
        },
        "EVI_statistics": {
          "mean": 0.234,
          "median": 0.234,
          "min": 0.223,
          "max": 0.246
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.3,
          "percentage": 13.89
        },
        "EVI_statistics": {
          "mean": 0.257,
          "median": 0.257,
          "min": 0.246,
          "max": 0.269
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 8.58,
          "percentage": 27.73
        },
        "EVI_statistics": {
          "mean": 0.307,
          "median": 0.296,
          "min": 0.269,
          "max": 0.551
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 7.99,
            "area_percentage": 26.17,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.2,
            "area_percentage": 17.03,
            "zone_number": 2
          },
          "similar": {
            "ha": 3.11,
            "area_percentage": 10.19,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 2.87,
            "area_percentage": 9.4,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 11.36,
            "area_percentage": 37.21,
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
      "old_value": 0.516,
      "new_value": 0.234,
      "difference": -0.267
    },
    "growth trend": "major_decline",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 29.81,
          "percentage": 96.31,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 1.05,
          "percentage": 3.38,
          "zone_number": 2
        },
        "no_change": {
          "ha": 0.09,
          "percentage": 0.3,
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
          "ha": 0.76,
          "percentage": 2.46,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 5.56,
          "percentage": 17.97,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 19.24,
          "percentage": 62.15,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.67,
          "percentage": 11.85,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.73,
          "percentage": 5.58,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.774619039333334 49.08299916177291)",
          "new_value": 0.278,
          "old_value": 0.436,
          "value_difference": -0.158,
          "area_ha": 0.9,
          "category": "major_growth",
          "location": "S",
          "id": 1
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 2186.412,
      "historical_average": 2148.351
    },
    "accumulated_precipitation_since_seeding": {
      "current": 357.594,
      "historical_mean": 508.704
    },
    "precipitation_summary": {
      "last_3_days": 5.342,
      "last_7_days": 24.058,
      "last_14_days": 49.238,
      "last_30_days": 64.844
    },
    "standardized_precipitation_index": {
      "1_month": -0.435,
      "3_month": -0.881,
      "6_month": -1.656
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-07-11 00:00:00",
          "temperature_mean": 16.429,
          "temperature_min": 12.579,
          "temperature_max": 20.773,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.665,
          "soiltemperature_0to10cm_mean": 17.3,
          "soilmoisture_0to10cm": 0.307,
          "windspeed_mean": 2.311
        },
        {
          "time": "2025-07-12 00:00:00",
          "temperature_mean": 16.877,
          "temperature_min": 12.197,
          "temperature_max": 20.879,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.841,
          "soiltemperature_0to10cm_mean": 17.496,
          "soilmoisture_0to10cm": 0.302,
          "windspeed_mean": 1.442
        },
        {
          "time": "2025-07-13 00:00:00",
          "temperature_mean": 19.571,
          "temperature_min": 13.175,
          "temperature_max": 25.19,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.391,
          "soiltemperature_0to10cm_mean": 19.549,
          "soilmoisture_0to10cm": 0.306,
          "windspeed_mean": 1.369
        },
        {
          "time": "2025-07-14 00:00:00",
          "temperature_mean": 20.813,
          "temperature_min": 13.928,
          "temperature_max": 26.218,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.595,
          "soiltemperature_0to10cm_mean": 20.459,
          "soilmoisture_0to10cm": 0.294,
          "windspeed_mean": 2.272
        },
        {
          "time": "2025-07-15 00:00:00",
          "temperature_mean": 20.606,
          "temperature_min": 16.899,
          "temperature_max": 25.337,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.567,
          "soiltemperature_0to10cm_mean": 21.157,
          "soilmoisture_0to10cm": 0.288,
          "windspeed_mean": 3.24
        },
        {
          "time": "2025-07-16 00:00:00",
          "temperature_mean": 17.562,
          "temperature_min": 13.934,
          "temperature_max": 21.538,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.642,
          "soiltemperature_0to10cm_mean": 19.473,
          "soilmoisture_0to10cm": 0.278,
          "windspeed_mean": 2.6
        },
        {
          "time": "2025-07-17 00:00:00",
          "temperature_mean": 16.095,
          "temperature_min": 12.711,
          "temperature_max": 20.072,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.825,
          "soiltemperature_0to10cm_mean": 17.676,
          "soilmoisture_0to10cm": 0.292,
          "windspeed_mean": 3.068
        },
        {
          "time": "2025-07-18 00:00:00",
          "temperature_mean": 16.888,
          "temperature_min": 13.518,
          "temperature_max": 21.127,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.773,
          "soiltemperature_0to10cm_mean": 17.259,
          "soilmoisture_0to10cm": 0.326,
          "windspeed_mean": 2.408
        },
        {
          "time": "2025-07-19 00:00:00",
          "temperature_mean": 19.672,
          "temperature_min": 13.406,
          "temperature_max": 24.768,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.381,
          "soiltemperature_0to10cm_mean": 19.378,
          "soilmoisture_0to10cm": 0.313,
          "windspeed_mean": 0.552
        },
        {
          "time": "2025-07-20 00:00:00",
          "temperature_mean": 22.537,
          "temperature_min": 15.552,
          "temperature_max": 27.743,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.444,
          "soiltemperature_0to10cm_mean": 21.194,
          "soilmoisture_0to10cm": 0.289,
          "windspeed_mean": 0.493
        },
        {
          "time": "2025-07-21 00:00:00",
          "temperature_mean": 20.744,
          "temperature_min": 15.495,
          "temperature_max": 26.775,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.757,
          "soiltemperature_0to10cm_mean": 21.417,
          "soilmoisture_0to10cm": 0.298,
          "windspeed_mean": 0.581
        },
        {
          "time": "2025-07-22 00:00:00",
          "temperature_mean": 18.998,
          "temperature_min": 14.512,
          "temperature_max": 23.308,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.226,
          "soiltemperature_0to10cm_mean": 19.716,
          "soilmoisture_0to10cm": 0.327,
          "windspeed_mean": 3.766
        },
        {
          "time": "2025-07-23 00:00:00",
          "temperature_mean": 19.738,
          "temperature_min": 15.0,
          "temperature_max": 24.385,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.422,
          "soiltemperature_0to10cm_mean": 19.923,
          "soilmoisture_0to10cm": 0.297,
          "windspeed_mean": 2.528
        },
        {
          "time": "2025-07-24 00:00:00",
          "temperature_mean": 17.356,
          "temperature_min": 13.565,
          "temperature_max": 20.277,
          "precipitation_sum": 22.0,
          "totalcloudcover_mean": 0.874,
          "soiltemperature_0to10cm_mean": 18.095,
          "soilmoisture_0to10cm": 0.335,
          "windspeed_mean": 1.486
        },
        {
          "time": "2025-07-25 00:00:00",
          "temperature_mean": 18.759,
          "temperature_min": 14.215,
          "temperature_max": 23.427,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.836,
          "soiltemperature_0to10cm_mean": 19.139,
          "soilmoisture_0to10cm": 0.369,
          "windspeed_mean": 1.07
        },
        {
          "time": "2025-07-26 00:00:00",
          "temperature_mean": 18.027,
          "temperature_min": 15.713,
          "temperature_max": 19.829,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.982,
          "soiltemperature_0to10cm_mean": 18.134,
          "soilmoisture_0to10cm": 0.379,
          "windspeed_mean": 1.67
        },
        {
          "time": "2025-07-27 00:00:00",
          "temperature_mean": 17.212,
          "temperature_min": 14.954,
          "temperature_max": 19.392,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.965,
          "soiltemperature_0to10cm_mean": 17.417,
          "soilmoisture_0to10cm": 0.394,
          "windspeed_mean": 3.047
        },
        {
          "time": "2025-07-28 00:00:00",
          "temperature_mean": 17.055,
          "temperature_min": 14.003,
          "temperature_max": 21.257,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.868,
          "soiltemperature_0to10cm_mean": 17.672,
          "soilmoisture_0to10cm": 0.37,
          "windspeed_mean": 3.468
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-09-29",
      "day_since": 288
    },
    "crop_emergence": {
      "date": "2024-10-11",
      "day_since": 275
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
      "date": "2025-07-06",
      "day_since": 7
    },
    "harvest": {
      "date": "2025-07-19",
      "day_since": -6
    }
  },
  "timing_of_field_operations": {
    "2025-07-11": {
      "weather_conditions": {
        "temperature_mean": 16.429,
        "temperature_min": 12.579,
        "temperature_max": 20.773,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.665,
        "soiltemperature_0to10cm_mean": 17.3,
        "soilmoisture_0to10cm": 0.307,
        "windspeed_mean": 2.311
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
        "temperature_mean": 16.877,
        "temperature_min": 12.197,
        "temperature_max": 20.879,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.841,
        "soiltemperature_0to10cm_mean": 17.496,
        "soilmoisture_0to10cm": 0.302,
        "windspeed_mean": 1.442
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
        "temperature_mean": 19.571,
        "temperature_min": 13.175,
        "temperature_max": 25.19,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.391,
        "soiltemperature_0to10cm_mean": 19.549,
        "soilmoisture_0to10cm": 0.306,
        "windspeed_mean": 1.369
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
    "2025-07-14": {
      "weather_conditions": {
        "temperature_mean": 20.813,
        "temperature_min": 13.928,
        "temperature_max": 26.218,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.595,
        "soiltemperature_0to10cm_mean": 20.459,
        "soilmoisture_0to10cm": 0.294,
        "windspeed_mean": 2.272
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
    "2025-07-15": {
      "weather_conditions": {
        "temperature_mean": 20.606,
        "temperature_min": 16.899,
        "temperature_max": 25.337,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.567,
        "soiltemperature_0to10cm_mean": 21.157,
        "soilmoisture_0to10cm": 0.288,
        "windspeed_mean": 3.24
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
        "temperature_mean": 17.562,
        "temperature_min": 13.934,
        "temperature_max": 21.538,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.642,
        "soiltemperature_0to10cm_mean": 19.473,
        "soilmoisture_0to10cm": 0.278,
        "windspeed_mean": 2.6
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
        "temperature_mean": 16.095,
        "temperature_min": 12.711,
        "temperature_max": 20.072,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.825,
        "soiltemperature_0to10cm_mean": 17.676,
        "soilmoisture_0to10cm": 0.292,
        "windspeed_mean": 3.068
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
        "temperature_mean": 16.888,
        "temperature_min": 13.518,
        "temperature_max": 21.127,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.773,
        "soiltemperature_0to10cm_mean": 17.259,
        "soilmoisture_0to10cm": 0.326,
        "windspeed_mean": 2.408
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
        "temperature_mean": 19.672,
        "temperature_min": 13.406,
        "temperature_max": 24.768,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.381,
        "soiltemperature_0to10cm_mean": 19.378,
        "soilmoisture_0to10cm": 0.313,
        "windspeed_mean": 0.552
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
        "temperature_mean": 22.537,
        "temperature_min": 15.552,
        "temperature_max": 27.743,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.444,
        "soiltemperature_0to10cm_mean": 21.194,
        "soilmoisture_0to10cm": 0.289,
        "windspeed_mean": 0.493
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
        "temperature_mean": 20.744,
        "temperature_min": 15.495,
        "temperature_max": 26.775,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.757,
        "soiltemperature_0to10cm_mean": 21.417,
        "soilmoisture_0to10cm": 0.298,
        "windspeed_mean": 0.581
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
        "temperature_mean": 18.998,
        "temperature_min": 14.512,
        "temperature_max": 23.308,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.226,
        "soiltemperature_0to10cm_mean": 19.716,
        "soilmoisture_0to10cm": 0.327,
        "windspeed_mean": 3.766
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
    "2025-07-23": {
      "weather_conditions": {
        "temperature_mean": 19.738,
        "temperature_min": 15.0,
        "temperature_max": 24.385,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.422,
        "soiltemperature_0to10cm_mean": 19.923,
        "soilmoisture_0to10cm": 0.297,
        "windspeed_mean": 2.528
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
        "temperature_mean": 17.356,
        "temperature_min": 13.565,
        "temperature_max": 20.277,
        "precipitation_sum": 22.0,
        "totalcloudcover_mean": 0.874,
        "soiltemperature_0to10cm_mean": 18.095,
        "soilmoisture_0to10cm": 0.335,
        "windspeed_mean": 1.486
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
        "temperature_mean": 18.759,
        "temperature_min": 14.215,
        "temperature_max": 23.427,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.836,
        "soiltemperature_0to10cm_mean": 19.139,
        "soilmoisture_0to10cm": 0.369,
        "windspeed_mean": 1.07
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
        "temperature_mean": 18.027,
        "temperature_min": 15.713,
        "temperature_max": 19.829,
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.982,
        "soiltemperature_0to10cm_mean": 18.134,
        "soilmoisture_0to10cm": 0.379,
        "windspeed_mean": 1.67
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
        "temperature_mean": 17.212,
        "temperature_min": 14.954,
        "temperature_max": 19.392,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.965,
        "soiltemperature_0to10cm_mean": 17.417,
        "soilmoisture_0to10cm": 0.394,
        "windspeed_mean": 3.047
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
        "temperature_mean": 17.055,
        "temperature_min": 14.003,
        "temperature_max": 21.257,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.868,
        "soiltemperature_0to10cm_mean": 17.672,
        "soilmoisture_0to10cm": 0.37,
        "windspeed_mean": 3.468
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
  "polygon_wkt": "POLYGON ((15.77607031 49.08312763, 15.7757935 49.0831708, 15.77569681 49.08317756, 15.77556381 49.08317673, 15.77540266 49.08316099, 15.7752743 49.08312857, 15.77493431 49.08298723, 15.77462064 49.08287987, 15.7746179 49.0828787, 15.7693221 49.08627231, 15.76933008 49.08627995, 15.77006061 49.08711747, 15.77024461 49.08732842, 15.77046207 49.08757772, 15.7711309 49.08835719, 15.77132682 49.08858553, 15.77153513 49.08882828, 15.77169978 49.08894461, 15.77187286 49.08904131, 15.77289695 49.08942698, 15.77338117 49.08959779, 15.77525878 49.08855139, 15.77528201 49.08853521, 15.77562692 49.08833587, 15.77683216 49.08762767, 15.77711374 49.087437, 15.77746015 49.08713376, 15.77804847 49.08652788, 15.77846258 49.08603161, 15.77850535 49.08585301, 15.77854861 49.0857012, 15.7785364 49.0854116, 15.77852087 49.08521582, 15.77851519 49.084947, 15.77853251 49.08480178, 15.77861075 49.08455194, 15.77865891 49.08439916, 15.77866964 49.0843207, 15.77866472 49.0842632, 15.7786421 49.08419776, 15.77855939 49.08408814, 15.77847134 49.08399794, 15.77790533 49.08351136, 15.77774359 49.08339086, 15.77740937 49.08329676, 15.77711079 49.0832127, 15.7769685 49.08318381, 15.7768453 49.08316825, 15.77668531 49.0831539, 15.77607031 49.08312763))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
