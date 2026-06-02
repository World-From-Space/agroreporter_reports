// Field data for LAJ250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAJ250715",
  "metadata": {
    "field_area_ha": 29.032,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 22.384,
      "mean_elevation": 552.76,
      "min_elevation": 538.774,
      "max_elevation": 561.158
    },
    "soil": {
      "bulk_density kg/dm³": 1.331,
      "cation_exchange_capacity cmol(c)/kg": 19.646,
      "clay_particles g/100g (%)": 20.346,
      "sand particles g/100g (%)": 35.616,
      "silt particles g/100g (%)": 44.061,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-05-03": {
      "min": 0.419,
      "max": 0.789,
      "median": 0.701,
      "mean": 0.693,
      "sd": 0.041
    },
    "2025-05-14": {
      "min": 0.395,
      "max": 0.761,
      "median": 0.666,
      "mean": 0.659,
      "sd": 0.043
    },
    "2025-05-31": {
      "min": 0.398,
      "max": 0.776,
      "median": 0.684,
      "mean": 0.676,
      "sd": 0.046
    },
    "2025-06-13": {
      "min": 0.365,
      "max": 0.756,
      "median": 0.644,
      "mean": 0.638,
      "sd": 0.041
    },
    "2025-06-21": {
      "min": 0.38,
      "max": 0.723,
      "median": 0.616,
      "mean": 0.61,
      "sd": 0.042
    },
    "2025-06-26": {
      "min": 0.304,
      "max": 0.697,
      "median": 0.528,
      "mean": 0.526,
      "sd": 0.055
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 28.768,
      "area_percentage": 1.0
    },
    "dominant_category": "medium vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.041,
        "area_percentage": 0.001
      },
      "low_vegetation": {
        "area_ha": 8.21,
        "area_percentage": 0.285
      },
      "medium vegetation": {
        "area_ha": 20.518,
        "area_percentage": 0.713
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
    "evi_median": 0.43,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 3.39,
          "percentage": 11.77
        },
        "EVI_statistics": {
          "mean": 0.344,
          "median": 0.348,
          "min": 0.272,
          "max": 0.365
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 6.41,
          "percentage": 22.28
        },
        "EVI_statistics": {
          "mean": 0.389,
          "median": 0.39,
          "min": 0.365,
          "max": 0.408
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 9.11,
          "percentage": 31.66
        },
        "EVI_statistics": {
          "mean": 0.43,
          "median": 0.43,
          "min": 0.408,
          "max": 0.451
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 5.72,
          "percentage": 19.88
        },
        "EVI_statistics": {
          "mean": 0.47,
          "median": 0.469,
          "min": 0.451,
          "max": 0.494
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 4.15,
          "percentage": 14.41
        },
        "EVI_statistics": {
          "mean": 0.538,
          "median": 0.532,
          "min": 0.494,
          "max": 0.644
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 3.16,
            "area_percentage": 11.22,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 6.57,
            "area_percentage": 23.32,
            "zone_number": 2
          },
          "similar": {
            "ha": 7.72,
            "area_percentage": 27.41,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 5.93,
            "area_percentage": 21.05,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 4.79,
            "area_percentage": 17.0,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-07-15",
      "reference_image_date": "2025-06-15",
      "change_period": 30
    },
    "median_EVI_change": {
      "old_value": 0.639,
      "new_value": 0.43,
      "difference": -0.207
    },
    "growth trend": "major_decline",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 24.99,
          "percentage": 86.85,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 3.27,
          "percentage": 11.35,
          "zone_number": 2
        },
        "no_change": {
          "ha": 0.52,
          "percentage": 1.79,
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
          "ha": 2.75,
          "percentage": 9.56,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 5.04,
          "percentage": 17.51,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 14.52,
          "percentage": 50.48,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.28,
          "percentage": 11.4,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 3.18,
          "percentage": 11.05,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.76991563578341 49.08839937)",
          "new_value": 0.394,
          "old_value": 0.652,
          "value_difference": -0.258,
          "area_ha": 0.32,
          "category": "major_decline",
          "location": "S",
          "id": 1
        },
        {
          "geometry": "POINT (15.772961710483871 49.094079556666664)",
          "new_value": 0.498,
          "old_value": 0.59,
          "value_difference": -0.092,
          "area_ha": 0.647,
          "category": "major_growth",
          "location": "NE",
          "id": 2
        },
        {
          "geometry": "POINT (15.770165998087558 49.09450825)",
          "new_value": 0.506,
          "old_value": 0.622,
          "value_difference": -0.116,
          "area_ha": 0.472,
          "category": "major_growth",
          "location": "N",
          "id": 3
        },
        {
          "geometry": "POINT (15.773879705599079 49.09000697)",
          "new_value": 0.466,
          "old_value": 0.583,
          "value_difference": -0.117,
          "area_ha": 0.318,
          "category": "major_growth",
          "location": "E",
          "id": 4
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
      "date": "2025-05-28",
      "day_since": 46
    },
    "beginning_of_ripenes": {
      "date": "2025-07-07",
      "day_since": 6
    },
    "harvest": {
      "date": "2025-07-20",
      "day_since": -7
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
  "polygon_wkt": "POLYGON ((15.7663897 49.08571684, 15.76678323 49.08643335, 15.7677729 49.08828736, 15.76854034 49.08970901, 15.7691352 49.09076525, 15.76934902 49.09169115, 15.76973816 49.09349168, 15.76982561 49.09386935, 15.77000219 49.09453388, 15.77006886 49.09461512, 15.77014166 49.0946253, 15.77126971 49.09450846, 15.77142183 49.09452129, 15.77176889 49.09460735, 15.77205149 49.09468384, 15.77232058 49.09478915, 15.77273026 49.09500871, 15.77287244 49.09503072, 15.77299363 49.09500128, 15.77308864 49.09494895, 15.77313157 49.09486447, 15.77326102 49.09413604, 15.77321661 49.09401898, 15.77322736 49.09398388, 15.77327965 49.09394916, 15.77335999 49.09391664, 15.7735295 49.09387529, 15.77359103 49.09384992, 15.77363098 49.09382286, 15.7736787 49.0927763, 15.77366251 49.09204436, 15.77367052 49.09200027, 15.77372094 49.09198807, 15.77379488 49.0919814, 15.77446314 49.09197561, 15.7752873 49.09195248, 15.77537731 49.09192114, 15.77543499 49.09187678, 15.77544447 49.09182456, 15.77539595 49.09167941, 15.77523706 49.09136799, 15.77512804 49.09119118, 15.77498014 49.09095132, 15.77478921 49.09064165, 15.77476048 49.09060356, 15.77439788 49.09013919, 15.77431095 49.09003476, 15.7742133 49.08999541, 15.77410072 49.08997753, 15.77394822 49.08995924, 15.77295066 49.08957668, 15.77183744 49.08913001, 15.77159267 49.08900486, 15.77147714 49.08891974, 15.7707861 49.08813925, 15.76962183 49.08682175, 15.76902319 49.08614086, 15.76861425 49.08589417, 15.76790118 49.08565261, 15.76683824 49.08530474, 15.7663897 49.08571684))"
};
