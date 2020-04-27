---
layout: blog_post
meta: 'Since it started, Smart Citizen has aimed at being a global tool. We are comparing the effects of the COVID-19 lockdown in multiple locations worldwide to see how different cities have experienced this new reality.'
title: Smart Citizens in action to show pollution decrease during the COVID-19 crisis
type: blog
author: Óscar González and Guillem Camprodon
date: 2020-04-24 
category:
- news
teaserlatest: "/uploads/sc-covid-banner.jpg"
teaserlist: "/uploads/sc-covid-banner.jpg"
---

Back in 2011, [Fab Lab Barcelona](https://fablabbcn.org/) pioneered the idea of crowdsourcing air pollution data with a low-cost Arduino Kit built for the [MAA Smart Cities Design Studio](http://www.iaacblog.com/2011/12/27/maa-introductory-studio-final-presentations/). One year later, we launched [Smart Citizen](https://smartcitizen.me/)  publicly as an alternative to the centralised data production and management systems used by the large corporations that constitute the driving force behind the smart city concept. Over the years, the project has been part of two crowdfunding campaigns, evolved through more than five EU funded research projects and become the benchmark tool to show how communities can gather information on their environment and make it available to the public. Last year, we launched the [Smart Citizen Kit 2.1](https://docs.smartcitizen.me/Smart%20Citizen%20Kit/), the fourth generation of sensors since its launch in 2012. The Kit includes sensors for particulate matter, noise, temperature, humidity and is distributed by our Chinese partner [Seeed Studio](https://www.seeedstudio.com/Smart-Citizen-Starter-Kit-p-2865.html).

![](https://i.imgur.com/Ol47jEu.jpg)

Now, cities are using the term 'smart citizen' as a standard to define citizen participation in their smart city agendas and situations like the one we're currently living shows us first hand the impact of it. The current global pandemic has demonstrated having access to open technologies and skills makes citizens more resilient. The rapid response shown by the maker community to create distributed solutions to face the lack of medical supplies reveals the potential of the productive cities paradigm we have promoted for more than ten years, and which is now led by the [Fab City global initiative](https://fab.city). 

![](https://i.imgur.com/PWo1Vck.png)


It took only two weeks of confinement for the Barcelona local air pollution community to [publish](https://contaminacio.barcelona/2020/03/30/quant-ha-baixat-el-soroll-a-la-ciutat/) how noise pollution decreased using data from their Smart Citizen Kits. Later, the local newspaper El Periodico, followed with another [article](https://www.elperiodico.com/es/medio-ambiente/20200401/el-confinamiento-por-el-coronavirus-enmudece-a-barcelona-y-su-mar-7912828) showing official governmental data is not the only source when discussing urban challenges.  Now, a month after the COVID lockdown in Barcelona, we can look deeply at our platform data to gain insights on such a unique situation not only about noise pollution but air quality as well.

![](https://i.imgur.com/VocUSC0.jpg)

When looking at air pollution in cities, we look mainly at the tailpipe emissions from cars, heating and industry. Some of these pollutants are particulate matter in different sizes (PM1, PM2.5 and PM10) which can include black carbon, dust and other aerosols, carbon monoxide (CO), volatile organic compounds (VOCs) and nitrogen oxides (NO, NO2). The latest [Smart Citizen Kit](https://docs.smartcitizen.me/Smart%20Citizen%20Kit/#measurements) is capable of measuring air quality (PM and VOCs) and noise pollution. Thanks to the local community of citizens who run and operate those sensors, we can look at the reduction in noise and air pollution experienced in the city in detail. Here is an overview of the PM10 reduction in Barcelona by different Kits in the city:

![](https://i.imgur.com/exoVfv5.jpg)

Although the first weeks of March could tell a different story, the trend over the quarantine weeks shows a clear reduction in average PM levels:

![](https://i.imgur.com/iEN8hM3.png)


Luckily in some high-density traffic areas, we have deployed a more advanced version of our sensors, the [Smart Citizen Station](https://docs.smartcitizen.me/Smart%20Citizen%20Station/), developed during the [iSCAPE project]((https://iscapeproject.eu/)). 

![](https://i.imgur.com/dHX5BFF.jpg)

There, we observed a significant decrease in the carbon monoxide concentrations (CO), which is mainly produced by road traffic and incomplete combustion in engines. This and other pollutants (NO2, O3) require more advanced sensors to measure them and for that reason the Smart Citizen Station includes an additional set of sensors. On average, we can see a decrease in CO of roughly 0.5ppm. Before the lockdown, we could observe high peaks where CO levels reached several times more than 2ppm. Meanwhile, during the lockdown, they stayed below 0.7ppm.

![](https://i.imgur.com/GhUTDh1.png)

When looking at hourly distributions, we can also see how some peak hours in the mornings are more critical:

![](https://i.imgur.com/9nHMBW0.png)

During March and April, climate conditions were significantly variable in Barcelona, thus requiring some caution when looking at air pollution data. In particular, the first week of increased activity due to changes in the lockdown policy corresponded with a week of rainy and unstable conditions, which might have masked the expected air quality changes, as we can see an upward trend in the noise pollutions levels for the same period.

If we look again at noise pollution, we can see how citizens across Barcelona have actually sensed the calmness during confinement. However, we can also see how, as the confinement measures have decreased over the past few days, noise levels have begun to return to normal in some areas with higher traffic density.

![](https://i.imgur.com/7H4Sv55.png)

If we look in detail at the cases of highly dense traffic areas, we can also learn about the noise distribution and how it exceeds [recommended levels by WHO](http://www.euro.who.int/en/health-topics/environment-and-health/noise/environmental-noise-guidelines-for-the-european-region) even at late hours.

![](https://i.imgur.com/dNdG2oI.png)

Since it started, Smart Citizen has aimed at being a global tool. Over the years, more than 10K users have registered and more than 2000 unique sensors have been used not only by citizens but by prestigious institutions like the [Fraunhofer Institute](https://gis-iq.esri.de/fraunhofer-institut-iao-digital-labor-bad-duerrheim/), [UN-Habitat](https://wupperinst.org/en/a/wi/a/s/ad/4925/) or [IS Global](https://www.isglobal.org/en/healthisglobal/-/custom-blog-portlet/les-escoles-com-a-refugis-climatics/7305043/0).

<iframe height="500" width="100%" src="https://oscgonfer.github.io/smartcitizen-map-data/"></iframe>

Thanks to it, we are able to compare the effects of the COVID-19 lockdown in multiple locations worldwide and see how different cities have experienced this new reality.

![](https://i.imgur.com/gQDI4CK.jpg)

Last but not least, we find it necessary to emphasise all the data and the insights in this article are built using open-source hardware and software tools, showing the potential of free tools. You can read more about our sensors, data platforms and data science tools in our [documentation](https://docs.smartcitizen.me/) and check the data sources and the code that generated this analysis [here](https://github.com/fablabbcn/smartcitizen-data-framework/blob/master/notebooks/Pollution%20Analysis%20during%20COVID-19%20Lockdown.ipynb).

![](https://i.imgur.com/M641wxS.jpg)

**Stay tuned: soon we will release a follow up with more insights, including additional pollutants like nitrogen dioxide and the effect of the end of the lockdown in Barcelona compared with previous levels.**

You can buy the Kit at the Seeed Studio [store](https://www.seeedstudio.com/Smart-Citizen-Starter-Kit-p-2865.html). For other inquiries or batch purchases, you can contact us directly at info@smartcitizen.me
