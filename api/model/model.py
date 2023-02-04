import pandas as pd
import numpy as np
import statsmodels.api as sm
import statsmodels.formula.api as smf
import matplotlib.pyplot as plt

import json


def get_coefficients(history):

    processed = preprocess_data(history)

    model = smf.glm(formula = 'mood ~ exercise+sleep+screentime', data=processed)
    result = model.fit()

    coefficients = result.params.to_dict()
    coefficients.pop('Intercept')
    return coefficients

def preprocess_data(raw_data):
    formatted_data = {
    }

    for element in raw_data:
        print(element['date'])
        row = []
        row.append(element['mood'])
        row.append(element['daily']['exercise'])
        row.append(element['daily']['sleep'])
        row.append(element['daily']['screentime'])
        formatted_data[element['date']] = row

    df = pd.DataFrame.from_dict(formatted_data, orient='index', columns=['mood', 'sleep', 'exercise', 'screentime'])

    return df
