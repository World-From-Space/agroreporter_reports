// Field data for MAQ250715 — auto-generated from data.json
// To update: edit data.json and re-run json_to_data_js.py
window.FIELD_DATA = {
  "annotation_id": "MAQ250715",
  "metadata": {
    "field_area_ha": 5.425,
    "location": {
      "country": " Czechia",
      "region": " Vysočina",
      "subregion": "Lhánice"
    },
    "terrain": {
      "variability": 5.198,
      "mean_elevation": 418.281,
      "min_elevation": 414.81,
      "max_elevation": 420.008
    },
    "soil": {
      "bulk_density kg/dm³": 1.32,
      "cation_exchange_capacity cmol(c)/kg": 19.752,
      "clay_particles g/100g (%)": 24.341,
      "sand particles g/100g (%)": 21.354,
      "silt particles g/100g (%)": 54.255,
      "WRB_soil_groups": "Luvisols"
    }
  },
  "latest_EVI_data": {
    "2025-05-15": {
      "min": 0.398,
      "max": 0.931,
      "median": 0.726,
      "mean": 0.728,
      "sd": 0.063
    },
    "2025-06-12": {
      "min": 0.407,
      "max": 0.759,
      "median": 0.603,
      "mean": 0.605,
      "sd": 0.052
    },
    "2025-06-21": {
      "min": 0.294,
      "max": 0.679,
      "median": 0.469,
      "mean": 0.476,
      "sd": 0.059
    },
    "2025-06-26": {
      "min": 0.214,
      "max": 0.57,
      "median": 0.297,
      "mean": 0.318,
      "sd": 0.063
    },
    "2025-06-30": {
      "min": 0.178,
      "max": 0.548,
      "median": 0.235,
      "mean": 0.254,
      "sd": 0.053
    },
    "2025-07-05": {
      "min": 0.153,
      "max": 0.45,
      "median": 0.213,
      "mean": 0.22,
      "sd": 0.03
    }
  },
  "vegetation_description": {
    "crop_cover": {
      "area_ha": 5.045,
      "area_percentage": 0.933
    },
    "dominant_category": "very low vegetation",
    "growth_categories": {
      "bare_soil": {
        "area_ha": 0.36,
        "area_percentage": 0.067
      },
      "very_low_vegetation": {
        "area_ha": 4.903,
        "area_percentage": 0.907
      },
      "low_vegetation": {
        "area_ha": 0.135,
        "area_percentage": 0.025
      },
      "medium vegetation": {
        "area_ha": 0.006,
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
    "evi_median": 0.22,
    "zone_description": [
      {
        "zone_number": 1,
        "productivity": "low",
        "area": {
          "ha": 0.03,
          "percentage": 0.57
        },
        "EVI_statistics": {
          "mean": 0.184,
          "median": 0.184,
          "min": 0.177,
          "max": 0.187
        }
      },
      {
        "zone_number": 2,
        "productivity": "below average",
        "area": {
          "ha": 1.17,
          "percentage": 21.57
        },
        "EVI_statistics": {
          "mean": 0.202,
          "median": 0.203,
          "min": 0.187,
          "max": 0.209
        }
      },
      {
        "zone_number": 3,
        "productivity": "medium",
        "area": {
          "ha": 2.74,
          "percentage": 50.61
        },
        "EVI_statistics": {
          "mean": 0.219,
          "median": 0.219,
          "min": 0.209,
          "max": 0.231
        }
      },
      {
        "zone_number": 4,
        "productivity": "above average",
        "area": {
          "ha": 0.94,
          "percentage": 17.34
        },
        "EVI_statistics": {
          "mean": 0.24,
          "median": 0.239,
          "min": 0.231,
          "max": 0.253
        }
      },
      {
        "zone_number": 5,
        "productivity": "high",
        "area": {
          "ha": 0.54,
          "percentage": 9.93
        },
        "EVI_statistics": {
          "mean": 0.288,
          "median": 0.278,
          "min": 0.253,
          "max": 0.427
        }
      }
    ],
    "current_variability_vs_average_historical_variability": {
      "yield_deviation": {
        "general_difference": "high",
        "relative_productivity_difference_from_historical_average_categories": {
          "significantly_lower": {
            "ha": 1.27,
            "area_percentage": 24.28,
            "zone_number": 1
          },
          "slightly_lower": {
            "ha": 0.68,
            "area_percentage": 13.0,
            "zone_number": 2
          },
          "similar": {
            "ha": 1.01,
            "area_percentage": 19.31,
            "zone_number": 3
          },
          "slightly_higher": {
            "ha": 0.83,
            "area_percentage": 15.87,
            "zone_number": 4
          },
          "significantly_higher": {
            "ha": 1.44,
            "area_percentage": 27.53,
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
      "old_value": 0.235,
      "new_value": 0.22,
      "difference": -0.014
    },
    "growth trend": "no_change",
    "absolute_growth_change": {
      "categories": {
        "major_decline": {
          "ha": 0.11,
          "percentage": 2.06,
          "zone_number": 1
        },
        "minor_decline": {
          "ha": 0.64,
          "percentage": 11.77,
          "zone_number": 2
        },
        "no_change": {
          "ha": 4.66,
          "percentage": 86.16,
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
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.216020222556818 49.12491288890756)",
          "new_value": 0.265,
          "old_value": 0.436,
          "value_difference": -0.171,
          "area_ha": 0.085,
          "category": "major_decline",
          "location": "SW",
          "id": 1
        }
      ]
    },
    "relative_zone_change": {
      "categories": {
        "major_rank_drop": {
          "ha": 1.07,
          "percentage": 19.85,
          "zone_number": 1
        },
        "minor_rank_drop": {
          "ha": 0.62,
          "percentage": 11.51,
          "zone_number": 2
        },
        "rank_stable": {
          "ha": 1.71,
          "percentage": 31.71,
          "zone_number": 3
        },
        "minor_rank_gain": {
          "ha": 0.91,
          "percentage": 16.87,
          "zone_number": 4
        },
        "major_rank_gain": {
          "ha": 1.08,
          "percentage": 20.07,
          "zone_number": 5
        }
      },
      "hotspot_scouting_points": [
        {
          "geometry": "POINT (16.218071379261364 49.12531202756303)",
          "new_value": 0.207,
          "old_value": 0.291,
          "value_difference": -0.084,
          "area_ha": 0.662,
          "category": "major_decline",
          "location": "C",
          "id": 1
        },
        {
          "geometry": "POINT (16.218866725738636 49.1255515107563)",
          "new_value": 0.208,
          "old_value": 0.262,
          "value_difference": -0.054,
          "area_ha": 0.06,
          "category": "major_decline",
          "location": "E",
          "id": 2
        },
        {
          "geometry": "POINT (16.21811323960227 49.1245137502521)",
          "new_value": 0.208,
          "old_value": 0.258,
          "value_difference": -0.05,
          "area_ha": 0.108,
          "category": "major_decline",
          "location": "S",
          "id": 3
        },
        {
          "geometry": "POINT (16.21677370869318 49.12677553596639)",
          "new_value": 0.242,
          "old_value": 0.229,
          "value_difference": 0.013,
          "area_ha": 0.1,
          "category": "major_growth",
          "location": "NW",
          "id": 4
        },
        {
          "geometry": "POINT (16.217066731079544 49.12571116621849)",
          "new_value": 0.226,
          "old_value": 0.213,
          "value_difference": 0.013,
          "area_ha": 0.097,
          "category": "major_growth",
          "location": "C",
          "id": 5
        },
        {
          "geometry": "POINT (16.217401613806818 49.12427426705882)",
          "new_value": 0.232,
          "old_value": 0.213,
          "value_difference": 0.019,
          "area_ha": 0.287,
          "category": "major_growth",
          "location": "S",
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
      "current": 321.566,
      "historical_mean": 471.126
    },
    "precipitation_summary": {
      "last_3_days": 10.776,
      "last_7_days": 28.313,
      "last_14_days": 48.675,
      "last_30_days": 65.781
    },
    "standardized_precipitation_index": {
      "1_month": -0.26,
      "3_month": -0.938,
      "6_month": -1.666
    },
    "forecast": {
      "daily": [
        {
          "time": "2025-07-11 00:00:00",
          "temperature_mean": 17.341,
          "temperature_min": 13.352,
          "temperature_max": 21.34,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.652,
          "soiltemperature_0to10cm_mean": 18.358,
          "soilmoisture_0to10cm": 0.298,
          "windspeed_mean": 2.305
        },
        {
          "time": "2025-07-12 00:00:00",
          "temperature_mean": 17.544,
          "temperature_min": 12.51,
          "temperature_max": 21.766,
          "precipitation_sum": 9.0,
          "totalcloudcover_mean": 0.881,
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
          "totalcloudcover_mean": 0.444,
          "soiltemperature_0to10cm_mean": 20.176,
          "soilmoisture_0to10cm": 0.321,
          "windspeed_mean": 1.551
        },
        {
          "time": "2025-07-14 00:00:00",
          "temperature_mean": 21.33,
          "temperature_min": 13.904,
          "temperature_max": 27.046,
          "precipitation_sum": 1.0,
          "totalcloudcover_mean": 0.617,
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
          "totalcloudcover_mean": 0.52,
          "soiltemperature_0to10cm_mean": 22.224,
          "soilmoisture_0to10cm": 0.285,
          "windspeed_mean": 3.136
        },
        {
          "time": "2025-07-16 00:00:00",
          "temperature_mean": 18.447,
          "temperature_min": 14.772,
          "temperature_max": 22.403,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.592,
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
          "totalcloudcover_mean": 0.817,
          "soiltemperature_0to10cm_mean": 18.611,
          "soilmoisture_0to10cm": 0.295,
          "windspeed_mean": 2.95
        },
        {
          "time": "2025-07-18 00:00:00",
          "temperature_mean": 17.619,
          "temperature_min": 14.16,
          "temperature_max": 21.576,
          "precipitation_sum": 8.0,
          "totalcloudcover_mean": 0.784,
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
          "totalcloudcover_mean": 0.421,
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
          "totalcloudcover_mean": 0.442,
          "soiltemperature_0to10cm_mean": 21.985,
          "soilmoisture_0to10cm": 0.293,
          "windspeed_mean": 0.282
        },
        {
          "time": "2025-07-21 00:00:00",
          "temperature_mean": 21.914,
          "temperature_min": 16.332,
          "temperature_max": 28.291,
          "precipitation_sum": 5.0,
          "totalcloudcover_mean": 0.745,
          "soiltemperature_0to10cm_mean": 22.545,
          "soilmoisture_0to10cm": 0.294,
          "windspeed_mean": 0.764
        },
        {
          "time": "2025-07-22 00:00:00",
          "temperature_mean": 19.893,
          "temperature_min": 15.137,
          "temperature_max": 24.39,
          "precipitation_sum": 0.0,
          "totalcloudcover_mean": 0.231,
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
          "totalcloudcover_mean": 0.41,
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
          "totalcloudcover_mean": 0.911,
          "soiltemperature_0to10cm_mean": 19.298,
          "soilmoisture_0to10cm": 0.332,
          "windspeed_mean": 1.861
        },
        {
          "time": "2025-07-25 00:00:00",
          "temperature_mean": 19.659,
          "temperature_min": 15.029,
          "temperature_max": 24.088,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.801,
          "soiltemperature_0to10cm_mean": 20.159,
          "soilmoisture_0to10cm": 0.355,
          "windspeed_mean": 1.253
        },
        {
          "time": "2025-07-26 00:00:00",
          "temperature_mean": 18.836,
          "temperature_min": 16.42,
          "temperature_max": 20.516,
          "precipitation_sum": 7.0,
          "totalcloudcover_mean": 0.981,
          "soiltemperature_0to10cm_mean": 18.992,
          "soilmoisture_0to10cm": 0.366,
          "windspeed_mean": 1.834
        },
        {
          "time": "2025-07-27 00:00:00",
          "temperature_mean": 17.333,
          "temperature_min": 15.358,
          "temperature_max": 18.862,
          "precipitation_sum": 16.0,
          "totalcloudcover_mean": 0.973,
          "soiltemperature_0to10cm_mean": 17.694,
          "soilmoisture_0to10cm": 0.394,
          "windspeed_mean": 3.336
        },
        {
          "time": "2025-07-28 00:00:00",
          "temperature_mean": 17.871,
          "temperature_min": 14.411,
          "temperature_max": 22.135,
          "precipitation_sum": 2.0,
          "totalcloudcover_mean": 0.86,
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
      "date": "2024-10-27",
      "day_since": 259
    },
    "beginning_of_stem_elongation": {
      "date": "2025-04-10",
      "day_since": 94
    },
    "beginning_of_heading": {
      "date": "2025-05-17",
      "day_since": 57
    },
    "beginning_of_ripenes": {
      "date": "2025-06-27",
      "day_since": 16
    },
    "harvest": {
      "date": "2025-07-11",
      "day_since": 2
    }
  },
  "timing_of_field_operations": {
    "2025-07-11": {
      "weather_conditions": {
        "temperature_mean": 17.341,
        "temperature_min": 13.352,
        "temperature_max": 21.34,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.652,
        "soiltemperature_0to10cm_mean": 18.358,
        "soilmoisture_0to10cm": 0.298,
        "windspeed_mean": 2.305
      },
      "harvest": {
        "conditions": {
          "rainfall": "good",
          "day_air_temperature_min": "bad",
          "day_air_temperature_max": "good",
          "precipitation_before": "good",
          "cloud_cover": "good"
        },
        "relevancy": "high",
        "suitability_index": 0.75
      }
    },
    "2025-07-12": {
      "weather_conditions": {
        "temperature_mean": 17.544,
        "temperature_min": 12.51,
        "temperature_max": 21.766,
        "precipitation_sum": 9.0,
        "totalcloudcover_mean": 0.881,
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
        "totalcloudcover_mean": 0.444,
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
        "precipitation_sum": 1.0,
        "totalcloudcover_mean": 0.617,
        "soiltemperature_0to10cm_mean": 21.238,
        "soilmoisture_0to10cm": 0.302,
        "windspeed_mean": 1.755
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
        "temperature_mean": 21.627,
        "temperature_min": 17.859,
        "temperature_max": 26.177,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.52,
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
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.592,
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
        "totalcloudcover_mean": 0.817,
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
        "precipitation_sum": 8.0,
        "totalcloudcover_mean": 0.784,
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
        "totalcloudcover_mean": 0.421,
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
        "totalcloudcover_mean": 0.442,
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
        "precipitation_sum": 5.0,
        "totalcloudcover_mean": 0.745,
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
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.231,
        "soiltemperature_0to10cm_mean": 20.806,
        "soilmoisture_0to10cm": 0.326,
        "windspeed_mean": 3.4
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
        "temperature_mean": 20.517,
        "temperature_min": 15.524,
        "temperature_max": 25.073,
        "precipitation_sum": 0.0,
        "totalcloudcover_mean": 0.41,
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
        "totalcloudcover_mean": 0.911,
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
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.801,
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
        "precipitation_sum": 7.0,
        "totalcloudcover_mean": 0.981,
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
        "precipitation_sum": 16.0,
        "totalcloudcover_mean": 0.973,
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
        "precipitation_sum": 2.0,
        "totalcloudcover_mean": 0.86,
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
  "polygon_wkt": "POLYGON ((16.21571123 49.12461791, 16.21586565 49.12504119, 16.21595902 49.12530697, 16.21621375 49.1260436, 16.21646778 49.12676842, 16.21661007 49.12715821, 16.21666468 49.12716137, 16.21757486 49.12664038, 16.21798092 49.12641908, 16.21937769 49.12566535, 16.21938524 49.1256593, 16.21929608 49.12558543, 16.21938998 49.12553046, 16.21898185 49.12521055, 16.21877139 49.12499513, 16.21868847 49.1248412, 16.21868699 49.12483835, 16.21857322 49.12458693, 16.21850253 49.12442476, 16.2184035 49.12420938, 16.21834028 49.12409248, 16.21831528 49.12404409, 16.21825791 49.12400606, 16.21820562 49.12399487, 16.21813469 49.12399507, 16.21807136 49.1240077, 16.21744351 49.12415805, 16.21700097 49.12426562, 16.2164673 49.12439378, 16.21608931 49.12448973, 16.21585881 49.12454465, 16.21574997 49.12457485, 16.21570627 49.12459436, 16.21571123 49.12461791))"
};
