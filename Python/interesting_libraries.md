# Interesting libraries

### yfinance
1. Open-source tool to download financial markets data from Yahoo! finance APIs.
2. Ticker symbols for particular companies can be checked on [yahoo finance website](https://finance.yahoo.com/)
3. Supports assets listed on multiple international stock exchanges.

Installation :

    $ pip  install  yfinance

Usage :

    import yfinance as yf
    
    google = yf.Ticker("GOOGL")
    
    #get historical market data
    hist_df = google.history(period="max")

Check documentation at [PyPI](https://pypi.org/project/yfinance/)

### Streamlit
1. Open-source app framework for data scientists and machine learning engineers to create beautiful, performant apps in only a few hours! 
2. All in pure Python. All for free.
3. We can write dataframes, draw charts, add maps, widgets and a whole lot of interesting stuff.

Installation :

    pip install streamlit
 
 Usage Example :
 
    import streamlit as st
    import numpy as np
    import pandas as pd
    
    # plotting a map using streamlit
    map_data = pd.DataFrame(
    np.random.randn(1000, 2) / [50, 50] + [37.76, -122.4],
    columns=['lat', 'lon'])
    
    st.map(map_data)

Running the script :

    streamlit run your_script.py [-- script args]

Checkout more awesome features of [streamlit](https://streamlit.io/)



