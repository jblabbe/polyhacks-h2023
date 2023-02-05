import pandas as pd
import numpy as np
import statsmodels.api as sm
import statsmodels.formula.api as smf
import matplotlib.pyplot as plt
from datetime import datetime
import json


def get_actions(history):

    processed = preprocess_data(history)

    actions_info = process_quadrant_analysis(processed)

    return actions_info

def preprocess_data(raw_data):
    formatted_data = {
        'mood': [],
        'exercise': [],
        'sleep': [],
        'screentime': [],
        'date': [],
    }

    for element in raw_data:
        formatted_data['mood'].append(element['mood'])
        formatted_data['exercise'].append(element['daily']['exercise'])
        formatted_data['sleep'].append(element['daily']['sleep'])
        formatted_data['screentime'].append(element['daily']['screentime'])
        formatted_data['date'].append(datetime.strptime(element['date'], '%Y-%m-%d').date())

    df = pd.DataFrame.from_dict(formatted_data)

    return df

def process_quadrant_analysis(df):
    params_cols = ['sleep', 'exercise', 'screentime']
    df.sort_values(by=['date'], inplace=True)

    moods = df['mood']
    params = df[params_cols]
    today = df.tail(1)

    means = params.mean()

    diff = today[params_cols] - means

    actions = diff.mul(moods.tail(1), axis=0)

    for param in params_cols:
        actions[f'{param}_action'] = actions[param].apply(lambda x: 1 if x > 0 else ( -1 if x < 0 else 0))

    response_dict = {
    }

    means = means // 60 #Transformation to hours
    
    for param in params_cols:
        response_dict[f'{param}_mean'] = means[param]
        response_dict[f'{param}_action'] = actions[f'{param}_action'].iloc[0]


    return response_dict
