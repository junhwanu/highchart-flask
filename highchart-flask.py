from flask import Flask, render_template
import json

import time
import datetime
from pprint import pprint

# 우리 Code에서 db_manager, constant import
from db_manager import DBManager

app = Flask(__name__)


@app.route('/simulate')
def index():
    return render_template('index.htm')

@app.route('/dummy.json')
def dummy():
    dbm = DBManager()
    d = dbm.request_min_candle('CLJ19', '15', start_date='2016-12-06', end_date='2020-12-15')

    dummy = []
    subject_code = 'CLJ19'
    chart_type = 'min_15'
    idx = 0
    ADD = 'added'
    MODIFY = 'modified'
    REMOVE = 'removed'
    for candle in d:
        info = {}
        info[chart_type] = {
            ADD: {},
            MODIFY: {},
            REMOVE: {}
        }

        date = int(time.mktime(datetime.datetime.strptime(candle['date'], "%Y-%m-%d %H:%M:%S").timetuple()) * 1000)
        # print(date)
        info[chart_type][ADD]['candlestick'] = {
            'name': subject_code,
            'data': [idx, date, candle['open'], candle['high'], candle['low'], candle['close'], candle['volume']]
        }

        dummy.append(info)
        idx += 1

    pprint(dummy)
    return json.dumps(dummy)

if __name__ == '__main__':
    app.run()
