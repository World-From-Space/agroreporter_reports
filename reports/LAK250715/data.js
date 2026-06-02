// Field data for LAK250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAK250715",
  "metadata": {
    "field_area_ha": 28.968,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 23.705,
      "mean_elevation": 535.356,
      "min_elevation": 521.673,
      "max_elevation": 545.379
    },
    "soil": {
      "bulk_density kg/dm³": 1.345,
      "cation_exchange_capacity cmol(c)/kg": 18.784,
      "clay_particles g/100g (%)": 22.068,
      "sand particles g/100g (%)": 35.648,
      "silt particles g/100g (%)": 42.336,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-05-01": {
      "min": 0.481,
      "max": 0.878,
      "median": 0.794,
      "mean": 0.782,
      "sd": 0.051
    },
    "2025-05-10": {
      "min": 0.4,
      "max": 0.79,
      "median": 0.696,
      "mean": 0.687,
      "sd": 0.044
    },
    "2025-05-14": {
      "min": 0.436,
      "max": 0.791,
      "median": 0.685,
      "mean": 0.678,
      "sd": 0.041
    },
    "2025-05-31": {
      "min": 0.432,
      "max": 0.784,
      "median": 0.682,
      "mean": 0.674,
      "sd": 0.041
    },
    "2025-06-13": {
      "min": 0.394,
      "max": 0.727,
      "median": 0.645,
      "mean": 0.638,
      "sd": 0.035
    },
    "2025-06-21": {
      "min": 0.367,
      "max": 0.691,
      "median": 0.608,
      "mean": 0.602,
      "sd": 0.035
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 29.128,
      "area_percentage": 1.0
    },
    "dominant_category": "medium vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.04,
        "area_percentage": 0.001
      },
      "low_vegetation": {
        "area_ha": 4.252,
        "area_percentage": 0.146
      },
      "medium vegetation": {
        "area_ha": 24.829,
        "area_percentage": 0.852
      },
      "high_vegetation": {
        "area_ha": 0.006,
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
    "evi_median": 0.464,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 3.72,
          "percentage": 12.79
        },
        "EVI_statistics": {
          "mean": 0.362,
          "median": 0.368,
          "min": 0.28,
          "max": 0.395
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 6.45,
          "percentage": 22.15
        },
        "EVI_statistics": {
          "mean": 0.42,
          "median": 0.421,
          "min": 0.395,
          "max": 0.441
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 9.48,
          "percentage": 32.56
        },
        "EVI_statistics": {
          "mean": 0.465,
          "median": 0.466,
          "min": 0.441,
          "max": 0.487
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 7.67,
          "percentage": 26.32
        },
        "EVI_statistics": {
          "mean": 0.507,
          "median": 0.506,
          "min": 0.487,
          "max": 0.534
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 1.8,
          "percentage": 6.18
        },
        "EVI_statistics": {
          "mean": 0.554,
          "median": 0.548,
          "min": 0.534,
          "max": 0.672
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 5.34,
            "area_percentage": 18.9,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.67,
            "area_percentage": 20.07,
            "zone_number": 2
          },
          "similar": {
            "ha": 4.93,
            "area_percentage": 17.45,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 5.4,
            "area_percentage": 19.12,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 6.91,
            "area_percentage": 24.46,
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
      "old_value": 0.635,
      "new_value": 0.464,
      "difference": -0.174
    },
    "growth trend": "major_decline",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 20.37,
          "percentage": 69.95,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 7.68,
          "percentage": 26.37,
          "zone_number": 2
        },
        "no_change": {
          "ha": 1.07,
          "percentage": 3.67,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.02,
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
          "ha": 4.17,
          "percentage": 14.31,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 5.25,
          "percentage": 18.03,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 12.13,
          "percentage": 41.63,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.21,
          "percentage": 11.01,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 4.38,
          "percentage": 15.02,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.765511331738281 49.08429167525381)",
          "new_value": 0.49,
          "old_value": 0.592,
          "value_difference": -0.102,
          "area_ha": 0.314,
          "category": "major_growth",
          "location": "W",
          "id": 1
        },
        {
          "geometry": "POINT (15.774083484746093 49.081150676979696)",
          "new_value": 0.512,
          "old_value": 0.598,
          "value_difference": -0.086,
          "area_ha": 0.846,
          "category": "major_growth",
          "location": "SE",
          "id": 2
        },
        {
          "geometry": "POINT (15.76518004080078 49.08232189667513)",
          "new_value": 0.504,
          "old_value": 0.587,
          "value_difference": -0.083,
          "area_ha": 0.299,
          "category": "major_growth",
          "location": "SW",
          "id": 3
        },
        {
          "geometry": "POINT (15.767788956933593 49.08131038875635)",
          "new_value": 0.516,
          "old_value": 0.576,
          "value_difference": -0.06,
          "area_ha": 1.108,
          "category": "major_growth",
          "location": "S",
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
      "date": "2025-04-18",
      "day_since": 86
    },
    "beginning_of_heading": {
      "date": "2025-05-29",
      "day_since": 45
    },
    "beginning_of_ripenes": {
      "date": "2025-07-08",
      "day_since": 5
    },
    "harvest": {
      "date": "2025-07-22",
      "day_since": -9
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
  "polygon_wkt": "POLYGON ((15.76386821 49.08255081, 15.76381587 49.08257608, 15.76380047 49.08258853, 15.76379347 49.08259973, 15.76379276 49.08260086, 15.76381565 49.08263516, 15.76398966 49.08279281, 15.76422007 49.08303458, 15.76479675 49.08367928, 15.7657325 49.08468828, 15.76576349 49.08471641, 15.76585734 49.08479315, 15.76595488 49.08486196, 15.76603604 49.08490447, 15.76628572 49.08500954, 15.768408 49.085707, 15.76877338 49.0858398, 15.76907173 49.08603238, 15.76918578 49.08614167, 15.76938553 49.08602162, 15.76957505 49.08589413, 15.77005153 49.08559076, 15.7705363 49.08527796, 15.7710271 49.08496204, 15.77156602 49.0846161, 15.77190119 49.08440371, 15.77243324 49.08405939, 15.77303434 49.08367232, 15.7736967 49.08324907, 15.77416908 49.08294391, 15.77427007 49.08286988, 15.77439407 49.0827794, 15.77432151 49.08274492, 15.77419604 49.08267028, 15.77412315 49.08259492, 15.77409509 49.08248517, 15.77408646 49.08220437, 15.7741164 49.08192566, 15.77414312 49.08164928, 15.77415466 49.08158033, 15.77418587 49.08139385, 15.77426586 49.08109523, 15.77426496 49.08107274, 15.77426448 49.08106062, 15.77424966 49.08103599, 15.77422989 49.08101766, 15.77420016 49.08100425, 15.77330108 49.08095906, 15.77212654 49.0808978, 15.77174909 49.08091408, 15.7706344 49.08097224, 15.76925491 49.08108237, 15.76794316 49.08116142, 15.76753152 49.08112913, 15.76709638 49.08105252, 15.76687511 49.08102558, 15.7665395 49.08100586, 15.76618651 49.08104106, 15.76588475 49.08108569, 15.76587408 49.08109068, 15.76579704 49.08112673, 15.76574722 49.08115996, 15.76566026 49.08123701, 15.76558382 49.08132641, 15.76551999 49.08142508, 15.76548511 49.0815527, 15.76544534 49.08163928, 15.76542666 49.08166178, 15.76514526 49.08182666, 15.76510687 49.08187607, 15.76509847 49.08192231, 15.76511821 49.08196386, 15.76527381 49.08212843, 15.765261 49.08214503, 15.76520221 49.08217541, 15.76517766 49.08218809, 15.76493831 49.08229068, 15.76487212 49.08232371, 15.76483651 49.08232092, 15.76475979 49.08227201, 15.76469511 49.08224249, 15.76464492 49.08223568, 15.76458899 49.08223632, 15.76452401 49.08225063, 15.76404091 49.08246865, 15.76386821 49.08255081))"
};
