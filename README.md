### Welcome to the Hive!

### App Link: https://bees-production-ml.herokuapp.com/

<p>This project was a group production where each member used their own curiosities as fuel to find answers to complicated questions. Our original intent was to find a correlation between bee populations and crop production among commodities such as honey, almonds, and many other fruits dependent on bees for pollination. This question evolved into a breakdown of how bees are affected by climate change, colony collapse syndrome, and pesticides.</p>

<p>Note: This project is not taking into consideration wild bee populations, this is exclusively looking into USDA data provided by beekeepers across the United States. Certain states will be excluded due to inclimate weather or inhospitable habitats as bees are sensitive to temperatures exceeding 95 degrees and underneath 42 degrees. Weather also plays a factor, so not too hot, not too cold, not too wet and not too dry.</p>

<p align="center">
  <img src="static/images/bumble_bee.jpg">
</p>

### ETL and SQLite Database Construction
Before we started we began by collecting data from the USDA and resources like Data World for our temperature and bee colony data. We noticed right off that we had some discrepancies with the amount of data the USDA had been collecting when comparing commodities from one state to another as well as certain datasets not having adequate annual comparisons of some information such as pesticide or colony collapse syndrom data. These were small hurdles but required some finesse. For example, certain states do not grow certain crops and certain states might not have bee colonies at all, such as Alaska or Maine. These scenarios would later on skew the results of our Machine Learning algorithms and would require that we scale the data and attempt to run our train and test models accordingly. 

Here are some of our resources: 
&nbsp;  
&nbsp;  
https://data.world/mattwinter225/2015-usa-weather-avg-max-min/workspace/file?filename=2015+USA+Weather+Data+FINAL.csv 
&nbsp;  
&nbsp;  
https://data.world/finley/bee-colony-statistical-data-from-1987-2017/workspace/file?filename=Bee+Colony+Loss.xlsx

### Inspiration
I feel that some credit is due to Abhi Motgi whose project inspired ours in a lot of ways. When bogged down with so many different directions to take, we used his project to narrow down our concepts to a concise undertaking that used updated information to portray the same ideas Motgi originally attempted to share. Our data includes the latest USDA information, excludes stock information (because Honey as a commodity has no stock exchange representation, Honey the coupon app however, does, as Motgi accidentally used for his project) and used Multiple Linear Regression models for our machine learning algorithms. 
&nbsp;

https://towardsdatascience.com/whats-buzzing-with-the-bees-99f9be0bc4c6

### Machine Learning to Flask API Calls

When we began our Machine Learning portion of the project we were at a loss as to which algorithm would be best, so we tried them all! Come to find out we did not actually have an adequate amount of data to train and test our algorithms. We ended up using a Mulitple Linear Regression model because, though it did not yield enthusiastic results, it had the most accurate representation of the data it was trained on. 

We learned that overfitting data is more likely when your dataset requires a lot of scaling, and we learned that our dataset was too small even when it was properly scaled.

However, we pushed onward and exported our algorithms to our Flask API framework so that users visiting our web application could input their own numbers into our model and play around with the results themselves! It was a very interesting feature, though the appocalyptic outcome no matter how generous we were to the bees was disheartening...

### Visit Our Site, Feedback is Always Welcome!

This project was a group production and credit will always go to Kristina Ruhl | Andrew Zamora | Melissa Ruiz | Asia Hewett 
&nbsp;  
Trilogy / UTSA Data Analytics Bootcamp 2020
