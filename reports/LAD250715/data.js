// Field data for LAD250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAD250715",
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
    "2025-05-03": {
      "min": 0.422,
      "max": 0.761,
      "median": 0.675,
      "mean": 0.664,
      "sd": 0.051
    },
    "2025-05-10": {
      "min": 0.44,
      "max": 0.772,
      "median": 0.689,
      "mean": 0.679,
      "sd": 0.042
    },
    "2025-05-14": {
      "min": 0.382,
      "max": 0.767,
      "median": 0.681,
      "mean": 0.669,
      "sd": 0.047
    },
    "2025-06-13": {
      "min": 0.376,
      "max": 0.747,
      "median": 0.64,
      "mean": 0.632,
      "sd": 0.042
    },
    "2025-06-20": {
      "min": 0.373,
      "max": 0.726,
      "median": 0.614,
      "mean": 0.606,
      "sd": 0.04
    },
    "2025-06-26": {
      "min": 0.302,
      "max": 0.707,
      "median": 0.578,
      "mean": 0.571,
      "sd": 0.044
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 21.885,
      "area_percentage": 1.0
    },
    "dominant_category": "medium vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "low_vegetation": {
        "area_ha": 0.084,
        "area_percentage": 0.004
      },
      "medium vegetation": {
        "area_ha": 21.632,
        "area_percentage": 0.988
      },
      "high_vegetation": {
        "area_ha": 0.169,
        "area_percentage": 0.008
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
    "evi_median": 0.559,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 1.85,
          "percentage": 8.46
        },
        "EVI_statistics": {
          "mean": 0.448,
          "median": 0.454,
          "min": 0.313,
          "max": 0.475
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 4.7,
          "percentage": 21.49
        },
        "EVI_statistics": {
          "mean": 0.507,
          "median": 0.508,
          "min": 0.475,
          "max": 0.531
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 10.67,
          "percentage": 48.76
        },
        "EVI_statistics": {
          "mean": 0.562,
          "median": 0.563,
          "min": 0.531,
          "max": 0.587
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.4,
          "percentage": 20.08
        },
        "EVI_statistics": {
          "mean": 0.603,
          "median": 0.599,
          "min": 0.587,
          "max": 0.642
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.26,
          "percentage": 1.2
        },
        "EVI_statistics": {
          "mean": 0.662,
          "median": 0.657,
          "min": 0.643,
          "max": 0.724
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 1.9,
            "area_percentage": 8.87,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 5.09,
            "area_percentage": 23.77,
            "zone_number": 2
          },
          "similar": {
            "ha": 6.27,
            "area_percentage": 29.29,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 4.51,
            "area_percentage": 21.06,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 3.64,
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
      "old_value": 0.645,
      "new_value": 0.559,
      "difference": -0.087
    },
    "growth trend": "minor_decline",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.69,
          "percentage": 3.13,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 14.01,
          "percentage": 64.03,
          "zone_number": 2
        },
        "no_change": {
          "ha": 7.15,
          "percentage": 32.68,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.03,
          "percentage": 0.16,
          "zone_number": 4
        },
        "major_growth": {
          "ha": 0.0,
          "percentage": 0.0,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.736142798883495 49.09841444109375)",
          "new_value": 0.443,
          "old_value": 0.61,
          "value_difference": -0.167,
          "area_ha": 0.372,
          "category": "major_decline",
          "location": "W",
          "id": 1
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 2.28,
          "percentage": 10.41,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.6,
          "percentage": 16.45,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 10.77,
          "percentage": 49.2,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.99,
          "percentage": 13.66,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 2.25,
          "percentage": 10.29,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.737053827427184 49.09862806359375)",
          "new_value": 0.518,
          "old_value": 0.658,
          "value_difference": -0.14,
          "area_ha": 0.507,
          "category": "major_decline",
          "location": "C",
          "id": 1
        },
        {
          "geometry": "POINT (15.741898842864078 49.09964277046875)",
          "new_value": 0.595,
          "old_value": 0.605,
          "value_difference": -0.01,
          "area_ha": 0.839,
          "category": "major_growth",
          "location": "E",
          "id": 2
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 2183.047,
      "historical_average": 2137.229
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
          "temperature_mean": 16.28,
          "temperature_min": 12.446,
          "temperature_max": 20.652,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.665,
          "soiltemperature_0to10cm_mean": 17.214,
          "soilmoisture_0to10cm": 0.323,
          "windspeed_mean": 2.273
        },
        {
          "time": "2025-07-12 00:00:00",
          "temperature_mean": 16.803,
          "temperature_min": 12.318,
          "temperature_max": 20.575,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.841,
          "soiltemperature_0to10cm_mean": 17.442,
          "soilmoisture_0to10cm": 0.317,
          "windspeed_mean": 1.47
        },
        {
          "time": "2025-07-13 00:00:00",
          "temperature_mean": 19.554,
          "temperature_min": 13.13,
          "temperature_max": 25.084,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.391,
          "soiltemperature_0to10cm_mean": 19.538,
          "soilmoisture_0to10cm": 0.317,
          "windspeed_mean": 1.382
        },
        {
          "time": "2025-07-14 00:00:00",
          "temperature_mean": 20.765,
          "temperature_min": 14.013,
          "temperature_max": 25.95,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.595,
          "soiltemperature_0to10cm_mean": 20.416,
          "soilmoisture_0to10cm": 0.307,
          "windspeed_mean": 2.362
        },
        {
          "time": "2025-07-15 00:00:00",
          "temperature_mean": 20.404,
          "temperature_min": 16.755,
          "temperature_max": 25.128,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.567,
          "soiltemperature_0to10cm_mean": 21.05,
          "soilmoisture_0to10cm": 0.303,
          "windspeed_mean": 3.251
        },
        {
          "time": "2025-07-16 00:00:00",
          "temperature_mean": 17.396,
          "temperature_min": 13.819,
          "temperature_max": 21.255,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.642,
          "soiltemperature_0to10cm_mean": 19.34,
          "soilmoisture_0to10cm": 0.294,
          "windspeed_mean": 2.648
        },
        {
          "time": "2025-07-17 00:00:00",
          "temperature_mean": 15.973,
          "temperature_min": 12.644,
          "temperature_max": 19.904,
          "precipitation_sum": 3.0,
          "totalcloudcover_mean": 0.825,
          "soiltemperature_0to10cm_mean": 17.551,
          "soilmoisture_0to10cm": 0.307,
          "windspeed_mean": 3.083
        },
        {
          "time": "2025-07-18 00:00:00",
          "temperature_mean": 16.818,
          "temperature_min": 13.592,
          "temperature_max": 20.961,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.773,
          "soiltemperature_0to10cm_mean": 17.157,
          "soilmoisture_0to10cm": 0.341,
          "windspeed_mean": 2.466
        },
        {
          "time": "2025-07-19 00:00:00",
          "temperature_mean": 19.623,
          "temperature_min": 13.253,
          "temperature_max": 24.739,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.381,
          "soiltemperature_0to10cm_mean": 19.363,
          "soilmoisture_0to10cm": 0.325,
          "windspeed_mean": 0.512
        },
        {
          "time": "2025-07-20 00:00:00",
          "temperature_mean": 22.672,
          "temperature_min": 16.083,
          "temperature_max": 27.643,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.444,
          "soiltemperature_0to10cm_mean": 21.217,
          "soilmoisture_0to10cm": 0.303,
          "windspeed_mean": 0.598
        },
        {
          "time": "2025-07-21 00:00:00",
          "temperature_mean": 20.583,
          "temperature_min": 15.346,
          "temperature_max": 26.378,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.757,
          "soiltemperature_0to10cm_mean": 21.399,
          "soilmoisture_0to10cm": 0.316,
          "windspeed_mean": 0.585
        },
        {
          "time": "2025-07-22 00:00:00",
          "temperature_mean": 18.81,
          "temperature_min": 14.387,
          "temperature_max": 22.905,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.226,
          "soiltemperature_0to10cm_mean": 19.641,
          "soilmoisture_0to10cm": 0.342,
          "windspeed_mean": 3.812
        },
        {
          "time": "2025-07-23 00:00:00",
          "temperature_mean": 19.587,
          "temperature_min": 14.918,
          "temperature_max": 24.172,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.422,
          "soiltemperature_0to10cm_mean": 19.902,
          "soilmoisture_0to10cm": 0.312,
          "windspeed_mean": 2.575
        },
        {
          "time": "2025-07-24 00:00:00",
          "temperature_mean": 17.276,
          "temperature_min": 13.523,
          "temperature_max": 20.214,
          "precipitation_sum": 22.0,
          "totalcloudcover_mean": 0.874,
          "soiltemperature_0to10cm_mean": 18.028,
          "soilmoisture_0to10cm": 0.345,
          "windspeed_mean": 1.425
        },
        {
          "time": "2025-07-25 00:00:00",
          "temperature_mean": 18.699,
          "temperature_min": 14.113,
          "temperature_max": 23.34,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.836,
          "soiltemperature_0to10cm_mean": 19.127,
          "soilmoisture_0to10cm": 0.372,
          "windspeed_mean": 1.03
        },
        {
          "time": "2025-07-26 00:00:00",
          "temperature_mean": 17.905,
          "temperature_min": 15.707,
          "temperature_max": 19.686,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.982,
          "soiltemperature_0to10cm_mean": 18.105,
          "soilmoisture_0to10cm": 0.382,
          "windspeed_mean": 1.645
        },
        {
          "time": "2025-07-27 00:00:00",
          "temperature_mean": 17.299,
          "temperature_min": 15.098,
          "temperature_max": 19.609,
          "precipitation_sum": 6.0,
          "totalcloudcover_mean": 0.965,
          "soiltemperature_0to10cm_mean": 17.553,
          "soilmoisture_0to10cm": 0.393,
          "windspeed_mean": 3.002
        },
        {
          "time": "2025-07-28 00:00:00",
          "temperature_mean": 16.959,
          "temperature_min": 14.079,
          "temperature_max": 21.214,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.868,
          "soiltemperature_0to10cm_mean": 17.738,
          "soilmoisture_0to10cm": 0.374,
          "windspeed_mean": 3.406
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
      "date": "2024-10-10",
      "day_since": 276
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-16",
      "day_since": 88
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
        "temperature_mean": 16.28,
        "temperature_min": 12.446,
        "temperature_max": 20.652,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.665,
        "soiltemperature_0to10cm_mean": 17.214,
        "soilmoisture_0to10cm": 0.323,
        "windspeed_mean": 2.273
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
        "temperature_mean": 16.803,
        "temperature_min": 12.318,
        "temperature_max": 20.575,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.841,
        "soiltemperature_0to10cm_mean": 17.442,
        "soilmoisture_0to10cm": 0.317,
        "windspeed_mean": 1.47
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
        "temperature_mean": 19.554,
        "temperature_min": 13.13,
        "temperature_max": 25.084,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.391,
        "soiltemperature_0to10cm_mean": 19.538,
        "soilmoisture_0to10cm": 0.317,
        "windspeed_mean": 1.382
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
        "temperature_mean": 20.765,
        "temperature_min": 14.013,
        "temperature_max": 25.95,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.595,
        "soiltemperature_0to10cm_mean": 20.416,
        "soilmoisture_0to10cm": 0.307,
        "windspeed_mean": 2.362
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
        "temperature_mean": 20.404,
        "temperature_min": 16.755,
        "temperature_max": 25.128,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.567,
        "soiltemperature_0to10cm_mean": 21.05,
        "soilmoisture_0to10cm": 0.303,
        "windspeed_mean": 3.251
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
        "temperature_mean": 17.396,
        "temperature_min": 13.819,
        "temperature_max": 21.255,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.642,
        "soiltemperature_0to10cm_mean": 19.34,
        "soilmoisture_0to10cm": 0.294,
        "windspeed_mean": 2.648
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
        "temperature_mean": 15.973,
        "temperature_min": 12.644,
        "temperature_max": 19.904,
        "precipitation_sum": 3.0,
        "totalcloudcover_mean": 0.825,
        "soiltemperature_0to10cm_mean": 17.551,
        "soilmoisture_0to10cm": 0.307,
        "windspeed_mean": 3.083
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
        "temperature_mean": 16.818,
        "temperature_min": 13.592,
        "temperature_max": 20.961,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.773,
        "soiltemperature_0to10cm_mean": 17.157,
        "soilmoisture_0to10cm": 0.341,
        "windspeed_mean": 2.466
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
        "temperature_mean": 19.623,
        "temperature_min": 13.253,
        "temperature_max": 24.739,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.381,
        "soiltemperature_0to10cm_mean": 19.363,
        "soilmoisture_0to10cm": 0.325,
        "windspeed_mean": 0.512
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
        "temperature_mean": 22.672,
        "temperature_min": 16.083,
        "temperature_max": 27.643,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.444,
        "soiltemperature_0to10cm_mean": 21.217,
        "soilmoisture_0to10cm": 0.303,
        "windspeed_mean": 0.598
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
        "temperature_mean": 20.583,
        "temperature_min": 15.346,
        "temperature_max": 26.378,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.757,
        "soiltemperature_0to10cm_mean": 21.399,
        "soilmoisture_0to10cm": 0.316,
        "windspeed_mean": 0.585
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
        "temperature_mean": 18.81,
        "temperature_min": 14.387,
        "temperature_max": 22.905,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.226,
        "soiltemperature_0to10cm_mean": 19.641,
        "soilmoisture_0to10cm": 0.342,
        "windspeed_mean": 3.812
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
        "temperature_mean": 19.587,
        "temperature_min": 14.918,
        "temperature_max": 24.172,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.422,
        "soiltemperature_0to10cm_mean": 19.902,
        "soilmoisture_0to10cm": 0.312,
        "windspeed_mean": 2.575
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
        "temperature_mean": 17.276,
        "temperature_min": 13.523,
        "temperature_max": 20.214,
        "precipitation_sum": 22.0,
        "totalcloudcover_mean": 0.874,
        "soiltemperature_0to10cm_mean": 18.028,
        "soilmoisture_0to10cm": 0.345,
        "windspeed_mean": 1.425
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
        "temperature_mean": 18.699,
        "temperature_min": 14.113,
        "temperature_max": 23.34,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.836,
        "soiltemperature_0to10cm_mean": 19.127,
        "soilmoisture_0to10cm": 0.372,
        "windspeed_mean": 1.03
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
        "temperature_mean": 17.905,
        "temperature_min": 15.707,
        "temperature_max": 19.686,
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.982,
        "soiltemperature_0to10cm_mean": 18.105,
        "soilmoisture_0to10cm": 0.382,
        "windspeed_mean": 1.645
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
        "temperature_mean": 17.299,
        "temperature_min": 15.098,
        "temperature_max": 19.609,
        "precipitation_sum": 6.0,
        "totalcloudcover_mean": 0.965,
        "soiltemperature_0to10cm_mean": 17.553,
        "soilmoisture_0to10cm": 0.393,
        "windspeed_mean": 3.002
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
        "temperature_mean": 16.959,
        "temperature_min": 14.079,
        "temperature_max": 21.214,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.868,
        "soiltemperature_0to10cm_mean": 17.738,
        "soilmoisture_0to10cm": 0.374,
        "windspeed_mean": 3.406
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
  "polygon_wkt": "POLYGON ((15.73893923 49.1008205, 15.7389888 49.10080557, 15.73907601 49.10080764, 15.73915344 49.10082331, 15.73936013 49.10093062, 15.73953817 49.10099494, 15.7397719 49.10105406, 15.74034875 49.1011222, 15.74074889 49.1011578, 15.74099738 49.10118932, 15.74135921 49.10126276, 15.74139122 49.10126336, 15.74143393 49.10125329, 15.74148347 49.10123003, 15.74151788 49.10118545, 15.74154642 49.10112595, 15.74178514 49.10047057, 15.74196444 49.10007688, 15.74203389 49.09981731, 15.74206938 49.09958626, 15.7419995 49.09933344, 15.74204865 49.09908667, 15.74207664 49.09885307, 15.74210544 49.09835663, 15.7421266 49.09828445, 15.7419855 49.09802681, 15.74185833 49.09778858, 15.74170322 49.09754036, 15.74147939 49.0972587, 15.74115955 49.09694584, 15.74074863 49.09667313, 15.74045338 49.09650519, 15.74030602 49.09656023, 15.74019277 49.09657048, 15.73999272 49.09662484, 15.73965374 49.09673673, 15.73947672 49.09680894, 15.73943954 49.09683836, 15.73943126 49.09684429, 15.73935163 49.09689589, 15.73934779 49.09689827, 15.73926593 49.09694695, 15.73924573 49.0969567, 15.73922294 49.09696356, 15.73915187 49.09697946, 15.73915914 49.09698963, 15.73764492 49.09743268, 15.73765279 49.09738563, 15.73751539 49.0973861, 15.7372589 49.09744551, 15.73567961 49.09785022, 15.73566072 49.09785394, 15.73554086 49.09787087, 15.73552065 49.09787259, 15.73550028 49.09787211, 15.73541394 49.09786531, 15.73539351 49.09786254, 15.73531883 49.09784797, 15.73518663 49.09782553, 15.73502897 49.09771517, 15.73487199 49.09775554, 15.73473027 49.09785222, 15.73456322 49.09792774, 15.73439185 49.09796697, 15.73359606 49.09846922, 15.73637721 49.10126607, 15.73636683 49.101323, 15.73613625 49.10153639, 15.73619893 49.10156861, 15.73621504 49.10156029, 15.73625707 49.10156999, 15.73631819 49.10160834, 15.73637652 49.10163213, 15.73660945 49.10140507, 15.73694351 49.10108085, 15.73724436 49.10078889, 15.73753668 49.10050512, 15.73825971 49.10066769, 15.73893923 49.1008205))",
  "evi_vmin": 0.2,
  "evi_vmax": 0.9
};
