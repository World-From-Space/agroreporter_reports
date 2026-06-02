// Field data for MAT250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAT250715",
  "metadata": {
    "field_area_ha": 4.354,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lhánice"
    },
    "terrain": {
      "variability": 11.665,
      "mean_elevation": 394.184,
      "min_elevation": 387.784,
      "max_elevation": 399.449
    },
    "soil": {
      "bulk_density kg/dm³": 1.33,
      "cation_exchange_capacity cmol(c)/kg": 20.795,
      "clay_particles g/100g (%)": 24.539,
      "sand particles g/100g (%)": 24.692,
      "silt particles g/100g (%)": 50.71,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-05-15": {
      "min": 0.536,
      "max": 0.797,
      "median": 0.7,
      "mean": 0.697,
      "sd": 0.037
    },
    "2025-05-25": {
      "min": 0.551,
      "max": 0.748,
      "median": 0.679,
      "mean": 0.674,
      "sd": 0.029
    },
    "2025-06-12": {
      "min": 0.549,
      "max": 0.726,
      "median": 0.644,
      "mean": 0.642,
      "sd": 0.029
    },
    "2025-06-21": {
      "min": 0.454,
      "max": 0.668,
      "median": 0.558,
      "mean": 0.558,
      "sd": 0.036
    },
    "2025-06-30": {
      "min": 0.238,
      "max": 0.504,
      "median": 0.313,
      "mean": 0.33,
      "sd": 0.056
    },
    "2025-07-05": {
      "min": 0.191,
      "max": 0.448,
      "median": 0.251,
      "mean": 0.262,
      "sd": 0.039
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 4.346,
      "area_percentage": 1.0
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.0,
        "area_percentage": 0.0
      },
      "very_low_vegetation": {
        "area_ha": 3.735,
        "area_percentage": 0.859
      },
      "low_vegetation": {
        "area_ha": 0.535,
        "area_percentage": 0.123
      },
      "medium vegetation": {
        "area_ha": 0.076,
        "area_percentage": 0.018
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
    "evi_median": 0.263,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.02,
          "percentage": 0.56
        },
        "EVI_statistics": {
          "mean": 0.221,
          "median": 0.222,
          "min": 0.217,
          "max": 0.223
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 0.92,
          "percentage": 21.25
        },
        "EVI_statistics": {
          "mean": 0.241,
          "median": 0.243,
          "min": 0.223,
          "max": 0.25
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 2.23,
          "percentage": 51.29
        },
        "EVI_statistics": {
          "mean": 0.262,
          "median": 0.262,
          "min": 0.25,
          "max": 0.276
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.58,
          "percentage": 13.42
        },
        "EVI_statistics": {
          "mean": 0.285,
          "median": 0.283,
          "min": 0.276,
          "max": 0.302
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.59,
          "percentage": 13.48
        },
        "EVI_statistics": {
          "mean": 0.348,
          "median": 0.333,
          "min": 0.302,
          "max": 0.503
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 0.52,
            "area_percentage": 12.62,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 1.36,
            "area_percentage": 33.01,
            "zone_number": 2
          },
          "similar": {
            "ha": 0.89,
            "area_percentage": 21.6,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.43,
            "area_percentage": 10.44,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 0.92,
            "area_percentage": 22.33,
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
      "old_value": 0.313,
      "new_value": 0.263,
      "difference": -0.045
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.26,
          "percentage": 5.92,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 1.02,
          "percentage": 23.36,
          "zone_number": 2
        },
        "no_change": {
          "ha": 3.07,
          "percentage": 70.57,
          "zone_number": 3
        },
        "minor_growth": {
          "ha": 0.01,
          "percentage": 0.14,
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
          "geometry": "POINT (16.207619648333335 49.10785323135803)",
          "new_value": 0.281,
          "old_value": 0.45,
          "value_difference": -0.169,
          "area_ha": 0.072,
          "category": "major_decline",
          "location": "NE",
          "id": 1
        },
        {
          "geometry": "POINT (16.208122115000002 49.107561285925925)",
          "new_value": 0.265,
          "old_value": 0.43,
          "value_difference": -0.165,
          "area_ha": 0.109,
          "category": "major_decline",
          "location": "E",
          "id": 2
        },
        {
          "geometry": "POINT (16.205484165 49.10687123308642)",
          "new_value": 0.266,
          "old_value": 0.444,
          "value_difference": -0.178,
          "area_ha": 0.054,
          "category": "major_decline",
          "location": "W",
          "id": 3
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 0.69,
          "percentage": 15.8,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.63,
          "percentage": 14.52,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 1.56,
          "percentage": 35.89,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.75,
          "percentage": 17.15,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 0.72,
          "percentage": 16.65,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.208247731666667 49.107216259506174)",
          "new_value": 0.257,
          "old_value": 0.396,
          "value_difference": -0.139,
          "area_ha": 0.245,
          "category": "major_decline",
          "location": "E",
          "id": 1
        },
        {
          "geometry": "POINT (16.205735398333335 49.106844692592595)",
          "new_value": 0.242,
          "old_value": 0.36,
          "value_difference": -0.118,
          "area_ha": 0.21,
          "category": "major_decline",
          "location": "SW",
          "id": 2
        },
        {
          "geometry": "POINT (16.206447226111113 49.107773609876546)",
          "new_value": 0.273,
          "old_value": 0.287,
          "value_difference": -0.014,
          "area_ha": 0.128,
          "category": "major_growth",
          "location": "N",
          "id": 3
        },
        {
          "geometry": "POINT (16.206614715 49.10737550246914)",
          "new_value": 0.267,
          "old_value": 0.274,
          "value_difference": -0.007,
          "area_ha": 0.162,
          "category": "major_growth",
          "location": "C",
          "id": 4
        },
        {
          "geometry": "POINT (16.207284670555556 49.10718971901235)",
          "new_value": 0.272,
          "old_value": 0.288,
          "value_difference": -0.016,
          "area_ha": 0.053,
          "category": "major_growth",
          "location": "C",
          "id": 5
        },
        {
          "geometry": "POINT (16.208457092777778 49.10668544962963)",
          "new_value": 0.325,
          "old_value": 0.31,
          "value_difference": 0.015,
          "area_ha": 0.086,
          "category": "major_growth",
          "location": "SE",
          "id": 6
        }
      ]
    }
  },
  "weather": {
    "accumulated_growing_degree_days_since_seeding": {
      "current": 2174.729,
      "historical_average": 2145.678
    },
    "accumulated_precipitation_since_seeding": {
      "current": 306.601,
      "historical_mean": 433.068
    },
    "precipitation_summary": {
      "last_3_days": 5.69,
      "last_7_days": 25.179,
      "last_14_days": 48.329,
      "last_30_days": 66.822
    },
    "standardized_precipitation_index": {
      "1_month": -0.056,
      "3_month": -0.615,
      "6_month": -1.139
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-07-11 00:00:00",
          "temperature_mean": 17.341,
          "temperature_min": 13.352,
          "temperature_max": 21.34,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.699,
          "soiltemperature_0to10cm_mean": 18.358,
          "soilmoisture_0to10cm": 0.298,
          "windspeed_mean": 2.305
        },
        {
          "time": "2025-07-12 00:00:00",
          "temperature_mean": 17.544,
          "temperature_min": 12.51,
          "temperature_max": 21.766,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.853,
          "soiltemperature_0to10cm_mean": 18.346,
          "soilmoisture_0to10cm": 0.298,
          "windspeed_mean": 1.497
        },
        {
          "time": "2025-07-13 00:00:00",
          "temperature_mean": 20.272,
          "temperature_min": 14.452,
          "temperature_max": 25.682,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.38,
          "soiltemperature_0to10cm_mean": 20.176,
          "soilmoisture_0to10cm": 0.321,
          "windspeed_mean": 1.551
        },
        {
          "time": "2025-07-14 00:00:00",
          "temperature_mean": 21.33,
          "temperature_min": 13.904,
          "temperature_max": 27.046,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.583,
          "soiltemperature_0to10cm_mean": 21.238,
          "soilmoisture_0to10cm": 0.302,
          "windspeed_mean": 1.755
        },
        {
          "time": "2025-07-15 00:00:00",
          "temperature_mean": 21.627,
          "temperature_min": 17.859,
          "temperature_max": 26.177,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.564,
          "soiltemperature_0to10cm_mean": 22.224,
          "soilmoisture_0to10cm": 0.285,
          "windspeed_mean": 3.136
        },
        {
          "time": "2025-07-16 00:00:00",
          "temperature_mean": 18.447,
          "temperature_min": 14.772,
          "temperature_max": 22.403,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.608,
          "soiltemperature_0to10cm_mean": 20.438,
          "soilmoisture_0to10cm": 0.281,
          "windspeed_mean": 2.391
        },
        {
          "time": "2025-07-17 00:00:00",
          "temperature_mean": 16.912,
          "temperature_min": 13.517,
          "temperature_max": 20.761,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.803,
          "soiltemperature_0to10cm_mean": 18.611,
          "soilmoisture_0to10cm": 0.295,
          "windspeed_mean": 2.95
        },
        {
          "time": "2025-07-18 00:00:00",
          "temperature_mean": 17.619,
          "temperature_min": 14.16,
          "temperature_max": 21.576,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.78,
          "soiltemperature_0to10cm_mean": 18.122,
          "soilmoisture_0to10cm": 0.327,
          "windspeed_mean": 2.066
        },
        {
          "time": "2025-07-19 00:00:00",
          "temperature_mean": 20.129,
          "temperature_min": 13.984,
          "temperature_max": 25.02,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.362,
          "soiltemperature_0to10cm_mean": 20.021,
          "soilmoisture_0to10cm": 0.316,
          "windspeed_mean": 0.671
        },
        {
          "time": "2025-07-20 00:00:00",
          "temperature_mean": 22.619,
          "temperature_min": 14.762,
          "temperature_max": 28.299,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.407,
          "soiltemperature_0to10cm_mean": 21.985,
          "soilmoisture_0to10cm": 0.293,
          "windspeed_mean": 0.282
        },
        {
          "time": "2025-07-21 00:00:00",
          "temperature_mean": 21.914,
          "temperature_min": 16.332,
          "temperature_max": 28.291,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.724,
          "soiltemperature_0to10cm_mean": 22.545,
          "soilmoisture_0to10cm": 0.294,
          "windspeed_mean": 0.764
        },
        {
          "time": "2025-07-22 00:00:00",
          "temperature_mean": 19.893,
          "temperature_min": 15.137,
          "temperature_max": 24.39,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.211,
          "soiltemperature_0to10cm_mean": 20.806,
          "soilmoisture_0to10cm": 0.326,
          "windspeed_mean": 3.4
        },
        {
          "time": "2025-07-23 00:00:00",
          "temperature_mean": 20.517,
          "temperature_min": 15.524,
          "temperature_max": 25.073,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.453,
          "soiltemperature_0to10cm_mean": 20.904,
          "soilmoisture_0to10cm": 0.298,
          "windspeed_mean": 2.257
        },
        {
          "time": "2025-07-24 00:00:00",
          "temperature_mean": 18.472,
          "temperature_min": 15.222,
          "temperature_max": 21.202,
          "precipitation_sum": 14.0,
          "totalcloudcover_mean": 0.883,
          "soiltemperature_0to10cm_mean": 19.298,
          "soilmoisture_0to10cm": 0.332,
          "windspeed_mean": 1.861
        },
        {
          "time": "2025-07-25 00:00:00",
          "temperature_mean": 19.659,
          "temperature_min": 15.029,
          "temperature_max": 24.088,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.763,
          "soiltemperature_0to10cm_mean": 20.159,
          "soilmoisture_0to10cm": 0.355,
          "windspeed_mean": 1.253
        },
        {
          "time": "2025-07-26 00:00:00",
          "temperature_mean": 18.836,
          "temperature_min": 16.42,
          "temperature_max": 20.516,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.98,
          "soiltemperature_0to10cm_mean": 18.992,
          "soilmoisture_0to10cm": 0.366,
          "windspeed_mean": 1.834
        },
        {
          "time": "2025-07-27 00:00:00",
          "temperature_mean": 17.333,
          "temperature_min": 15.358,
          "temperature_max": 18.862,
          "precipitation_sum": 12.0,
          "totalcloudcover_mean": 0.967,
          "soiltemperature_0to10cm_mean": 17.694,
          "soilmoisture_0to10cm": 0.394,
          "windspeed_mean": 3.336
        },
        {
          "time": "2025-07-28 00:00:00",
          "temperature_mean": 17.871,
          "temperature_min": 14.411,
          "temperature_max": 22.135,
          "precipitation_sum": 4.0,
          "totalcloudcover_mean": 0.852,
          "soiltemperature_0to10cm_mean": 18.289,
          "soilmoisture_0to10cm": 0.379,
          "windspeed_mean": 3.391
        }
      ]
    }
  },
  "crop_growth_stages": {
    "seeding": {
      "date": "2024-10-14",
      "day_since": 273
    },
    "crop_emergence": {
      "date": "2024-10-26",
      "day_since": 260
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-15",
      "day_since": 89
    },
    "beginning_of_heading": {
      "date": "2025-05-23",
      "day_since": 51
    },
    "beginning_of_ripenes": {
      "date": "2025-07-04",
      "day_since": 9
    },
    "harvest": {
      "date": "2025-07-17",
      "day_since": -4
    }
  },
  "timing_of_field_operations": {
    "2025-07-11": {
      "weather_conditions": {
        "temperature_mean": 17.341,
        "temperature_min": 13.352,
        "temperature_max": 21.34,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.699,
        "soiltemperature_0to10cm_mean": 18.358,
        "soilmoisture_0to10cm": 0.298,
        "windspeed_mean": 2.305
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
        "temperature_mean": 17.544,
        "temperature_min": 12.51,
        "temperature_max": 21.766,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.853,
        "soiltemperature_0to10cm_mean": 18.346,
        "soilmoisture_0to10cm": 0.298,
        "windspeed_mean": 1.497
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
        "temperature_mean": 20.272,
        "temperature_min": 14.452,
        "temperature_max": 25.682,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.38,
        "soiltemperature_0to10cm_mean": 20.176,
        "soilmoisture_0to10cm": 0.321,
        "windspeed_mean": 1.551
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
    "2025-07-14": {
      "weather_conditions": {
        "temperature_mean": 21.33,
        "temperature_min": 13.904,
        "temperature_max": 27.046,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.583,
        "soiltemperature_0to10cm_mean": 21.238,
        "soilmoisture_0to10cm": 0.302,
        "windspeed_mean": 1.755
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
    "2025-07-15": {
      "weather_conditions": {
        "temperature_mean": 21.627,
        "temperature_min": 17.859,
        "temperature_max": 26.177,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.564,
        "soiltemperature_0to10cm_mean": 22.224,
        "soilmoisture_0to10cm": 0.285,
        "windspeed_mean": 3.136
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
        "temperature_mean": 18.447,
        "temperature_min": 14.772,
        "temperature_max": 22.403,
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.608,
        "soiltemperature_0to10cm_mean": 20.438,
        "soilmoisture_0to10cm": 0.281,
        "windspeed_mean": 2.391
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
        "temperature_mean": 16.912,
        "temperature_min": 13.517,
        "temperature_max": 20.761,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.803,
        "soiltemperature_0to10cm_mean": 18.611,
        "soilmoisture_0to10cm": 0.295,
        "windspeed_mean": 2.95
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
        "temperature_mean": 17.619,
        "temperature_min": 14.16,
        "temperature_max": 21.576,
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.78,
        "soiltemperature_0to10cm_mean": 18.122,
        "soilmoisture_0to10cm": 0.327,
        "windspeed_mean": 2.066
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
        "temperature_mean": 20.129,
        "temperature_min": 13.984,
        "temperature_max": 25.02,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.362,
        "soiltemperature_0to10cm_mean": 20.021,
        "soilmoisture_0to10cm": 0.316,
        "windspeed_mean": 0.671
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
        "temperature_mean": 22.619,
        "temperature_min": 14.762,
        "temperature_max": 28.299,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.407,
        "soiltemperature_0to10cm_mean": 21.985,
        "soilmoisture_0to10cm": 0.293,
        "windspeed_mean": 0.282
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
        "temperature_mean": 21.914,
        "temperature_min": 16.332,
        "temperature_max": 28.291,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.724,
        "soiltemperature_0to10cm_mean": 22.545,
        "soilmoisture_0to10cm": 0.294,
        "windspeed_mean": 0.764
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
        "temperature_mean": 19.893,
        "temperature_min": 15.137,
        "temperature_max": 24.39,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.211,
        "soiltemperature_0to10cm_mean": 20.806,
        "soilmoisture_0to10cm": 0.326,
        "windspeed_mean": 3.4
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
    "2025-07-23": {
      "weather_conditions": {
        "temperature_mean": 20.517,
        "temperature_min": 15.524,
        "temperature_max": 25.073,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.453,
        "soiltemperature_0to10cm_mean": 20.904,
        "soilmoisture_0to10cm": 0.298,
        "windspeed_mean": 2.257
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
        "temperature_mean": 18.472,
        "temperature_min": 15.222,
        "temperature_max": 21.202,
        "precipitation_sum": 14.0,
        "totalcloudcover_mean": 0.883,
        "soiltemperature_0to10cm_mean": 19.298,
        "soilmoisture_0to10cm": 0.332,
        "windspeed_mean": 1.861
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
        "temperature_mean": 19.659,
        "temperature_min": 15.029,
        "temperature_max": 24.088,
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.763,
        "soiltemperature_0to10cm_mean": 20.159,
        "soilmoisture_0to10cm": 0.355,
        "windspeed_mean": 1.253
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
        "temperature_mean": 18.836,
        "temperature_min": 16.42,
        "temperature_max": 20.516,
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.98,
        "soiltemperature_0to10cm_mean": 18.992,
        "soilmoisture_0to10cm": 0.366,
        "windspeed_mean": 1.834
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
        "temperature_mean": 17.333,
        "temperature_min": 15.358,
        "temperature_max": 18.862,
        "precipitation_sum": 12.0,
        "totalcloudcover_mean": 0.967,
        "soiltemperature_0to10cm_mean": 17.694,
        "soilmoisture_0to10cm": 0.394,
        "windspeed_mean": 3.336
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
        "temperature_mean": 17.871,
        "temperature_min": 14.411,
        "temperature_max": 22.135,
        "precipitation_sum": 4.0,
        "totalcloudcover_mean": 0.852,
        "soiltemperature_0to10cm_mean": 18.289,
        "soilmoisture_0to10cm": 0.379,
        "windspeed_mean": 3.391
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
  "polygon_wkt": "POLYGON ((16.20529668 49.10671696, 16.20583505 49.10830334, 16.20586979 49.10831769, 16.20611876 49.10827461, 16.20714527 49.1081052, 16.2076003 49.10804154, 16.20838904 49.1079182, 16.20861085 49.10766847, 16.20865076 49.10758908, 16.20868739 49.10734365, 16.20857221 49.1064085, 16.20856082 49.1062909, 16.20854757 49.10623199, 16.20852155 49.10618235, 16.20846973 49.10616791, 16.2084134 49.10616842, 16.20554861 49.10658975, 16.20540634 49.10660893, 16.20535538 49.10662224, 16.2053164 49.10664757, 16.20529574 49.10668096, 16.20529668 49.10671696))"
};
