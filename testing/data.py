import pandas as pd

data = {
            "name": "Benjamin Piché",
            "baseline": {
                "sleep": 420,
                "exercise": 60,
                "screentime": 180
            },
            "history": [
                {
                    "date": "2023-02-04",
                    "mood": 1,
                    "daily": {
                        "sleep": 450,
                        "exercise": 90,
                        "screentime": 240
                    }
                },
                {
                    "date": "2023-02-03",
                    "mood": 1,
                    "daily": {
                        "sleep": 390,
                        "exercise": 90,
                        "screentime": 180
                    }
                },
                {
                    "date": "2023-02-02",
                    "mood": 0,
                    "daily": {
                        "sleep": 360,
                        "exercise": 60,
                        "screentime": 90
                    }
                },
                {
                    "date": "2023-02-01",
                    "mood": -1,
                    "daily": {
                        "sleep": 420,
                        "exercise": 0,
                        "screentime": 240
                    }
                },
                {
                    "date": "2023-01-31",
                    "mood": -1,
                    "daily": {
                        "sleep": 360,
                        "exercise": 30,
                        "screentime": 270
                    }
                }
            ]
        }

df = pd.DataFrame(data.items()).transpose()
df.columns = ["Name", "Baseline", "History"]
df.drop(df.index[0], inplace=True)
print(df)
