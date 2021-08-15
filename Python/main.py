import pandas as pd
df_rates = pd.read_csv('./data.csv', header=None, encoding='cp1252')
df_rates.columns = ['Currency','Time','Open','Close']
print(df_rates)