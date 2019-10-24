library(Sleuth3)  # Load the Sleuth3 and ggplot2 packages.
library(ggplot2)

Housing <- read.csv("Housing.csv") # The file must be in your working directory.
View(Housing)

#to obtain summaries of seasonally adjusted index for each region
with(Housing, summary(index_sa[region=="South"]))
with(Housing, summary(index_sa[region=="West"]))

qplot(index_sa, data =Housing, geom="histogram" ) + facet_grid(region ~ .)


#rainfall=>index_sa
#Treatment => region

##log transform the data
Housing$log.index_sa <- log(Housing$index_sa)

#to obtain summaries of log transformed seasonally adjusted index for each region
with(Housing, summary(Housing$log.index_sa[region=="South"]))
with(Housing, summary(Housing$log.index_sa[region=="West"]))

#to obtain histograms for the regions
qplot(Housing$log.index_sa, data =Housing, geom="histogram" ) + facet_grid(region ~ .)

#two sample t-test on the logged data to test the null hypothesis
#Null hypothesis: Population mean log seasonally-adjusted housing index for the two regions is the same
#Alternate Hypothesis: They are not the same.
t.test(log.index_sa~region, data=Housing, var.equal = TRUE)

#To get in terms of original units
#Diff of Mean becomes ratio of medians
exp(5.532352)/exp(5.833817)
#For getting confidence interval
exp(c(-0.4345579, -0.1683714))

with(Housing,(sd(index_sa[region=="West"])))
with(Housing,(sd(index_sa[region=="South"])))


with(Housing,(sd(log.index_sa[region=="West"])))
with(Housing,(sd(log.index_sa[region=="South"])))

qplot(region, index_sa, data = Housing, geom="boxplot")
qplot(region, log.index_sa, data = Housing, geom="boxplot")

summary(Housing$region)
