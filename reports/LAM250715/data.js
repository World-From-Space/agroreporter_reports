// Field data for LAM250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "LAM250715",
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
    "2025-06-09": {
      "min": 0.438,
      "max": 0.737,
      "median": 0.605,
      "mean": 0.601,
      "sd": 0.039
    },
    "2025-06-13": {
      "min": 0.465,
      "max": 0.769,
      "median": 0.605,
      "mean": 0.6,
      "sd": 0.038
    },
    "2025-06-18": {
      "min": 0.436,
      "max": 0.729,
      "median": 0.584,
      "mean": 0.581,
      "sd": 0.039
    },
    "2025-06-22": {
      "min": 0.42,
      "max": 0.766,
      "median": 0.57,
      "mean": 0.566,
      "sd": 0.042
    },
    "2025-06-24": {
      "min": 0.424,
      "max": 0.792,
      "median": 0.613,
      "mean": 0.605,
      "sd": 0.052
    },
    "2025-06-30": {
      "min": 0.246,
      "max": 0.74,
      "median": 0.479,
      "mean": 0.457,
      "sd": 0.083
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 24.92,
      "area_percentage": 0.968
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.835,
        "area_percentage": 0.032
      },
      "very_low_vegetation": {
        "area_ha": 24.305,
        "area_percentage": 0.944
      },
      "low_vegetation": {
        "area_ha": 0.495,
        "area_percentage": 0.019
      },
      "medium vegetation": {
        "area_ha": 0.121,
        "area_percentage": 0.005
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
    "evi_median": 0.225,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.13,
          "percentage": 0.5
        },
        "EVI_statistics": {
          "mean": 0.188,
          "median": 0.189,
          "min": 0.172,
          "max": 0.191
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 5.21,
          "percentage": 20.22
        },
        "EVI_statistics": {
          "mean": 0.207,
          "median": 0.208,
          "min": 0.191,
          "max": 0.214
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 14.08,
          "percentage": 54.65
        },
        "EVI_statistics": {
          "mean": 0.224,
          "median": 0.224,
          "min": 0.214,
          "max": 0.236
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 4.19,
          "percentage": 16.26
        },
        "EVI_statistics": {
          "mean": 0.244,
          "median": 0.243,
          "min": 0.236,
          "max": 0.259
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 2.16,
          "percentage": 8.37
        },
        "EVI_statistics": {
          "mean": 0.298,
          "median": 0.278,
          "min": 0.259,
          "max": 0.609
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "medium",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 1.74,
            "area_percentage": 6.88,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 6.32,
            "area_percentage": 24.99,
            "zone_number": 2
          },
          "similar": {
            "ha": 7.97,
            "area_percentage": 31.51,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 4.65,
            "area_percentage": 18.39,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 4.61,
            "area_percentage": 18.23,
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
      "old_value": 0.479,
      "new_value": 0.225,
      "difference": -0.252
    },
    "growth trend": "major_decline",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 20.06,
          "percentage": 77.88,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 5.29,
          "percentage": 20.54,
          "zone_number": 2
        },
        "no_change": {
          "ha": 0.41,
          "percentage": 1.58,
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
          "ha": 4.51,
          "percentage": 17.5,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 3.97,
          "percentage": 15.4,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 9.72,
          "percentage": 37.73,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 2.88,
          "percentage": 11.17,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 4.69,
          "percentage": 18.21,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (15.723220747798166 49.09931415548193)",
          "new_value": 0.212,
          "old_value": 0.507,
          "value_difference": -0.295,
          "area_ha": 0.335,
          "category": "major_decline",
          "location": "N",
          "id": 1
        },
        {
          "geometry": "POINT (15.721684609633028 49.09821878861446)",
          "new_value": 0.214,
          "old_value": 0.507,
          "value_difference": -0.293,
          "area_ha": 0.833,
          "category": "major_decline",
          "location": "N",
          "id": 2
        },
        {
          "geometry": "POINT (15.72305467880734 49.099554601867474)",
          "new_value": 0.259,
          "old_value": 0.446,
          "value_difference": -0.187,
          "area_ha": 0.679,
          "category": "major_growth",
          "location": "N",
          "id": 3
        },
        {
          "geometry": "POINT (15.717574402110092 49.0941579163253)",
          "new_value": 0.271,
          "old_value": 0.394,
          "value_difference": -0.123,
          "area_ha": 1.257,
          "category": "major_growth",
          "location": "SW",
          "id": 4
        },
        {
          "geometry": "POINT (15.72002391972477 49.09493268801205)",
          "new_value": 0.228,
          "old_value": 0.327,
          "value_difference": -0.099,
          "area_ha": 0.639,
          "category": "major_growth",
          "location": "SW",
          "id": 5
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
      "date": "2024-10-11",
      "day_since": 275
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-14",
      "day_since": 90
    },
    "beginning_of_heading": {
      "date": "2025-05-24",
      "day_since": 50
    },
    "beginning_of_ripenes": {
      "date": "2025-07-05",
      "day_since": 8
    },
    "harvest": {
      "date": "2025-07-19",
      "day_since": -6
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
  "polygon_wkt": "POLYGON ((15.71932294 49.09325389, 15.71900233 49.09334561, 15.71868234 49.09344192, 15.71849606 49.09351188, 15.71832131 49.09358793, 15.71785453 49.09378752, 15.71750276 49.09394942, 15.7173784 49.09403277, 15.71734162 49.09412187, 15.71731855 49.09417213, 15.71731068 49.09422242, 15.71730454 49.09426923, 15.71730871 49.09431971, 15.71735937 49.0944194, 15.71740886 49.09447409, 15.71758586 49.09462673, 15.7176143 49.09466412, 15.71769275 49.09498932, 15.71772879 49.0951711, 15.71772769 49.095281, 15.71769733 49.09546971, 15.71769823 49.09555196, 15.7177176 49.09563796, 15.71778768 49.09580375, 15.71789231 49.09597236, 15.71796688 49.09620767, 15.71799942 49.09630686, 15.71802981 49.09646504, 15.71803666 49.09658048, 15.71802038 49.09668257, 15.71794971 49.09678241, 15.71794959 49.09681561, 15.71795127 49.09684439, 15.71798282 49.09689961, 15.7187124 49.09734174, 15.71957696 49.09787039, 15.71992492 49.09815503, 15.72054878 49.098696, 15.72066397 49.09876757, 15.72073098 49.09880093, 15.72083007 49.09885493, 15.72145156 49.09912218, 15.72218576 49.09942186, 15.72237443 49.09948382, 15.72254048 49.09951864, 15.72266737 49.09954132, 15.72278975 49.09955096, 15.7229738 49.09956275, 15.72325836 49.09956796, 15.72468353 49.09952296, 15.7263553 49.09948289, 15.72087814 49.09291561, 15.72018542 49.09300823, 15.71993725 49.09306955, 15.71973228 49.09316479, 15.71932294 49.09325389), (15.71887806 49.09597622, 15.71899102 49.09588058, 15.71917374 49.09582634, 15.71935681 49.09581982, 15.71943874 49.0958442, 15.71946402 49.09588144, 15.71946819 49.09591851, 15.7194339 49.09594533, 15.71930607 49.09599796, 15.7190597 49.09607709, 15.71896412 49.09610243, 15.7189019 49.09609456, 15.71886587 49.0960678, 15.71885278 49.0960399, 15.71887806 49.09597622))"
};
