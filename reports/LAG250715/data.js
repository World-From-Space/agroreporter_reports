// Field data for LAG250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAG250715",
  "metadata": {
    "field_area_ha": 15.306,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Jakubov u Moravských Budějovic"
    },
    "terrain": {
      "variability": 24.572,
      "mean_elevation": 548.945,
      "min_elevation": 532.86,
      "max_elevation": 557.432
    },
    "soil": {
      "bulk_density kg/dm³": 1.333,
      "cation_exchange_capacity cmol(c)/kg": 20.226,
      "clay_particles g/100g (%)": 21.176,
      "sand particles g/100g (%)": 35.874,
      "silt particles g/100g (%)": 42.992,
      "WRB_soil_groups": "Cambisols"
    }
  },
  "latest_EVI_data": {
    "2025-05-10": {
      "min": 0.443,
      "max": 0.757,
      "median": 0.671,
      "mean": 0.668,
      "sd": 0.029
    },
    "2025-05-31": {
      "min": 0.334,
      "max": 0.754,
      "median": 0.67,
      "mean": 0.665,
      "sd": 0.035
    },
    "2025-06-09": {
      "min": 0.361,
      "max": 0.715,
      "median": 0.626,
      "mean": 0.621,
      "sd": 0.033
    },
    "2025-06-15": {
      "min": 0.308,
      "max": 0.699,
      "median": 0.606,
      "mean": 0.599,
      "sd": 0.04
    },
    "2025-06-21": {
      "min": 0.306,
      "max": 0.678,
      "median": 0.573,
      "mean": 0.567,
      "sd": 0.037
    },
    "2025-06-30": {
      "min": 0.237,
      "max": 0.611,
      "median": 0.411,
      "mean": 0.415,
      "sd": 0.059
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 14.989,
      "area_percentage": 1.0
    },
    "dominant_category": "low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 5.707,
        "area_percentage": 0.381
      },
      "low_vegetation": {
        "area_ha": 7.515,
        "area_percentage": 0.501
      },
      "medium vegetation": {
        "area_ha": 1.768,
        "area_percentage": 0.118
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
    "evi_median": 0.311,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.96,
          "percentage": 6.41
        },
        "EVI_statistics": {
          "mean": 0.251,
          "median": 0.252,
          "min": 0.212,
          "max": 0.264
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 3.94,
          "percentage": 26.22
        },
        "EVI_statistics": {
          "mean": 0.282,
          "median": 0.283,
          "min": 0.264,
          "max": 0.295
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 4.6,
          "percentage": 30.59
        },
        "EVI_statistics": {
          "mean": 0.31,
          "median": 0.309,
          "min": 0.296,
          "max": 0.327
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 2.32,
          "percentage": 15.41
        },
        "EVI_statistics": {
          "mean": 0.34,
          "median": 0.339,
          "min": 0.327,
          "max": 0.358
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 3.16,
          "percentage": 21.04
        },
        "EVI_statistics": {
          "mean": 0.422,
          "median": 0.408,
          "min": 0.358,
          "max": 0.633
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 2.05,
            "area_percentage": 13.8,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 3.54,
            "area_percentage": 23.82,
            "zone_number": 2
          },
          "similar": {
            "ha": 2.65,
            "area_percentage": 17.83,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 2.51,
            "area_percentage": 16.89,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 4.11,
            "area_percentage": 27.66,
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
      "old_value": 0.559,
      "new_value": 0.311,
      "difference": -0.242
    },
    "growth trend": "major_decline",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 13.48,
          "percentage": 89.95,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 1.11,
          "percentage": 7.39,
          "zone_number": 2
        },
        "no_change": {
          "ha": 0.4,
          "percentage": 2.66,
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
          "ha": 2.22,
          "percentage": 14.8,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 2.62,
          "percentage": 17.45,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 6.1,
          "percentage": 40.67,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 1.73,
          "percentage": 11.53,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.33,
          "percentage": 15.55,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.766675614130435 49.09028454077055)",
          "new_value": 0.29,
          "old_value": 0.572,
          "value_difference": -0.282,
          "area_ha": 0.153,
          "category": "major_decline",
          "location": "C",
          "id": 1
        },
        {
          "geometry": "POINT (15.767767399347825 49.08953257679794)",
          "new_value": 0.295,
          "old_value": 0.579,
          "value_difference": -0.284,
          "area_ha": 0.366,
          "category": "major_decline",
          "location": "E",
          "id": 2
        },
        {
          "geometry": "POINT (15.769027151521739 49.09348038765411)",
          "new_value": 0.393,
          "old_value": 0.544,
          "value_difference": -0.151,
          "area_ha": 0.563,
          "category": "major_growth",
          "location": "NE",
          "id": 3
        },
        {
          "geometry": "POINT (15.767557440652173 49.092808991249996)",
          "new_value": 0.374,
          "old_value": 0.536,
          "value_difference": -0.162,
          "area_ha": 0.32,
          "category": "major_growth",
          "location": "N",
          "id": 4
        },
        {
          "geometry": "POINT (15.765583828913043 49.0892640182363)",
          "new_value": 0.32,
          "old_value": 0.509,
          "value_difference": -0.189,
          "area_ha": 0.166,
          "category": "major_growth",
          "location": "W",
          "id": 5
        },
        {
          "geometry": "POINT (15.766171713260869 49.08604131549658)",
          "new_value": 0.392,
          "old_value": 0.507,
          "value_difference": -0.115,
          "area_ha": 0.191,
          "category": "major_growth",
          "location": "S",
          "id": 6
        },
        {
          "geometry": "POINT (15.765709804130434 49.08606817135274)",
          "new_value": 0.317,
          "old_value": 0.453,
          "value_difference": -0.136,
          "area_ha": 0.247,
          "category": "major_growth",
          "location": "SW",
          "id": 7
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
      "date": "2025-04-15",
      "day_since": 89
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
  "polygon_wkt": "POLYGON ((15.76379918 49.08622056, 15.76411977 49.08678885, 15.76443687 49.08736724, 15.76484528 49.08810076, 15.76514919 49.08865656, 15.76550714 49.08930644, 15.76597 49.09014187, 15.76637731 49.09088668, 15.76670377 49.09147418, 15.76704511 49.0920952, 15.76748112 49.09288299, 15.76788947 49.09362727, 15.7679785 49.09378923, 15.76833464 49.09372306, 15.76935337 49.09350507, 15.76945682 49.09347681, 15.76948079 49.09345366, 15.76958271 49.09349916, 15.76959404 49.09343679, 15.7693469 49.09235543, 15.76920353 49.09168285, 15.76907794 49.091073, 15.7690196 49.09084798, 15.76894279 49.09069243, 15.76869065 49.09024902, 15.76838292 49.0896939, 15.76716393 49.08747243, 15.76633473 49.08597658, 15.76626792 49.08595345, 15.76619802 49.08594732, 15.76536521 49.08603856, 15.76452021 49.08613266, 15.76432511 49.08615698, 15.76403687 49.08619059, 15.76379918 49.08622056))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
