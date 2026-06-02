// Field data for LAA250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAA250715",
  "metadata": {
    "field_area_ha": 32.334,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 22.68,
      "mean_elevation": 548.73,
      "min_elevation": 533.27,
      "max_elevation": 555.951
    },
    "soil": {
      "bulk_density kg/dm³": 1.33,
      "cation_exchange_capacity cmol(c)/kg": 20.681,
      "clay_particles g/100g (%)": 21.989,
      "sand particles g/100g (%)": 36.342,
      "silt particles g/100g (%)": 41.669,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-05-10": {
      "min": 0.327,
      "max": 0.777,
      "median": 0.665,
      "mean": 0.655,
      "sd": 0.046
    },
    "2025-05-31": {
      "min": 0.268,
      "max": 0.753,
      "median": 0.668,
      "mean": 0.656,
      "sd": 0.05
    },
    "2025-06-09": {
      "min": 0.353,
      "max": 0.713,
      "median": 0.621,
      "mean": 0.612,
      "sd": 0.042
    },
    "2025-06-15": {
      "min": 0.255,
      "max": 0.71,
      "median": 0.604,
      "mean": 0.593,
      "sd": 0.048
    },
    "2025-06-21": {
      "min": 0.268,
      "max": 0.682,
      "median": 0.57,
      "mean": 0.56,
      "sd": 0.046
    },
    "2025-06-30": {
      "min": 0.202,
      "max": 0.592,
      "median": 0.415,
      "mean": 0.408,
      "sd": 0.064
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 31.985,
      "area_percentage": 1.0
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 9.565,
        "area_percentage": 0.299
      },
      "low_vegetation": {
        "area_ha": 20.253,
        "area_percentage": 0.633
      },
      "medium vegetation": {
        "area_ha": 2.167,
        "area_percentage": 0.068
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
    "evi_median": 0.321,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 3.73,
          "percentage": 11.66
        },
        "EVI_statistics": {
          "mean": 0.254,
          "median": 0.256,
          "min": 0.206,
          "max": 0.273
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 7.18,
          "percentage": 22.44
        },
        "EVI_statistics": {
          "mean": 0.29,
          "median": 0.291,
          "min": 0.273,
          "max": 0.305
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 10.24,
          "percentage": 32.03
        },
        "EVI_statistics": {
          "mean": 0.321,
          "median": 0.321,
          "min": 0.305,
          "max": 0.337
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 6.44,
          "percentage": 20.14
        },
        "EVI_statistics": {
          "mean": 0.351,
          "median": 0.35,
          "min": 0.337,
          "max": 0.369
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 4.39,
          "percentage": 13.74
        },
        "EVI_statistics": {
          "mean": 0.416,
          "median": 0.399,
          "min": 0.369,
          "max": 0.602
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 4.11,
            "area_percentage": 13.16,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 6.79,
            "area_percentage": 21.75,
            "zone_number": 2
          },
          "similar": {
            "ha": 8.28,
            "area_percentage": 26.52,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 6.11,
            "area_percentage": 19.57,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 5.93,
            "area_percentage": 18.99,
            "zone_number": 5
          }
        }
      }
    }
  },
  "growth_change_analysis": {
    "metadata": {
      "latest_image_date": "2025-07-15",
      "reference_image_date": "2025-06-22",
      "change_period": 23
    },
    "median_EVI_change": {
      "old_value": 0.555,
      "new_value": 0.321,
      "difference": -0.23
    },
    "growth trend": "major_decline",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 29.38,
          "percentage": 91.86,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 1.98,
          "percentage": 6.2,
          "zone_number": 2
        },
        "no_change": {
          "ha": 0.62,
          "percentage": 1.92,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.0,
          "percentage": 0.01,
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
          "ha": 4.41,
          "percentage": 13.8,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 5.34,
          "percentage": 16.68,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 14.1,
          "percentage": 44.1,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 3.65,
          "percentage": 11.42,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 4.48,
          "percentage": 14.01,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.7655377042 49.09158313786364)",
          "new_value": 0.301,
          "old_value": 0.576,
          "value_difference": -0.275,
          "area_ha": 0.393,
          "category": "major_decline",
          "location": "E",
          "id": 1
        },
        {
          "geometry": "POINT (15.7609401882 49.08847419374243)",
          "new_value": 0.309,
          "old_value": 0.585,
          "value_difference": -0.276,
          "area_ha": 0.661,
          "category": "major_decline",
          "location": "SW",
          "id": 2
        },
        {
          "geometry": "POINT (15.766081047 49.094048852166665)",
          "new_value": 0.396,
          "old_value": 0.531,
          "value_difference": -0.135,
          "area_ha": 1.175,
          "category": "major_growth",
          "location": "NE",
          "id": 3
        },
        {
          "geometry": "POINT (15.7622358518 49.0936468335303)",
          "new_value": 0.371,
          "old_value": 0.527,
          "value_difference": -0.156,
          "area_ha": 0.348,
          "category": "major_growth",
          "location": "NW",
          "id": 4
        },
        {
          "geometry": "POINT (15.767502097400001 49.093432423590905)",
          "new_value": 0.361,
          "old_value": 0.493,
          "value_difference": -0.132,
          "area_ha": 0.596,
          "category": "major_growth",
          "location": "NE",
          "id": 5
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
  "polygon_wkt": "POLYGON ((15.76367444 49.08623629, 15.76361464 49.08624949, 15.76356244 49.08627994, 15.76350937 49.08633005, 15.76348678 49.08638738, 15.76350515 49.08650964, 15.76353187 49.08667163, 15.76351396 49.08677227, 15.76346855 49.08686775, 15.7632723 49.08712839, 15.76291169 49.08765889, 15.76282477 49.08784451, 15.76280593 49.08797406, 15.7628016 49.08801544, 15.76278129 49.08804099, 15.76272668 49.08804348, 15.76246612 49.08795867, 15.7623597 49.08791983, 15.76209019 49.08782753, 15.76173797 49.08772197, 15.76153148 49.08765889, 15.76137241 49.08760905, 15.76131228 49.08758283, 15.76127279 49.0875279, 15.76126515 49.08747362, 15.76129814 49.08742062, 15.7615046 49.08718715, 15.76162805 49.08705402, 15.76171382 49.08693691, 15.76170745 49.08688723, 15.76129379 49.0867225, 15.76088197 49.08656367, 15.76082287 49.08658171, 15.76077812 49.0866001, 15.7606088 49.08679289, 15.76040767 49.0870081, 15.7603446 49.08700986, 15.76027807 49.08699552, 15.75992887 49.08684543, 15.75959079 49.0867223, 15.75954114 49.08673065, 15.75949824 49.08676899, 15.75951684 49.08701966, 15.75957257 49.08735302, 15.75965366 49.08757755, 15.75969262 49.08778072, 15.75975691 49.08807227, 15.75974025 49.08826549, 15.7597058 49.08839116, 15.75968839 49.08844891, 15.75966583 49.08861086, 15.75968492 49.08877154, 15.75978114 49.08904122, 15.75980775 49.0891375, 15.75995278 49.08950752, 15.76037594 49.09031972, 15.76107 49.09170672, 15.7615325 49.09260504, 15.76173343 49.09298, 15.76197745 49.09340725, 15.76215205 49.09373916, 15.76233547 49.09422321, 15.76246844 49.09433332, 15.76243428 49.09449325, 15.76245913 49.09461055, 15.76247747 49.09469665, 15.76250669 49.09477003, 15.76262264 49.09507119, 15.76262641 49.0950807, 15.76282387 49.09505238, 15.76361218 49.09487797, 15.76377596 49.09482487, 15.76384607 49.0947773, 15.76386487 49.09476686, 15.76388647 49.09475909, 15.76483138 49.09449569, 15.76483539 49.09449463, 15.76524835 49.0943906, 15.76526179 49.09438778, 15.76547696 49.09435144, 15.76584543 49.09426968, 15.76634762 49.09412655, 15.76691947 49.09396198, 15.76692624 49.09396018, 15.76709518 49.09391921, 15.76719433 49.09389516, 15.76746979 49.09382836, 15.76748422 49.0938255, 15.76766319 49.09379781, 15.76768796 49.09379569, 15.76771288 49.09379689, 15.76773586 49.09379956, 15.76785736 49.09381297, 15.76777679 49.09363796, 15.76748303 49.0931103, 15.76725575 49.09269471, 15.76705905 49.09233567, 15.76683087 49.09192097, 15.76656301 49.09143559, 15.76636154 49.09107474, 15.76610346 49.09060785, 15.76582147 49.09009595, 15.7655453 49.08959218, 15.76530891 49.08915862, 15.7650708 49.08873452, 15.7648577 49.08834543, 15.76464614 49.08795599, 15.76417337 49.08710096, 15.76389002 49.0865977, 15.76385755 49.08655561, 15.76377751 49.08641396, 15.76371948 49.08633408, 15.76369721 49.08628573, 15.76367444 49.08623629))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
