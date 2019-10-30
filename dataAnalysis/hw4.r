library(Sleuth3)
library(ggplot2)

#Wilcox test
loans <- read.csv("Loans.csv") # The file must be in your working directory.
View(loans)

with(loans,wilcox.test(x=Amount[First=="No"],
                          y=Amount[First=="Yes"],
                          alternative="greater",
                          correct=FALSE,
                          exact=FALSE))

#Welch's Test:
t.test(BP~Diet, data= ex0112, alternative="greater")


shade <- read.csv("shade.csv") # The file must be in your working directory.
View(shade)

#Sign test
difference<-with(shade,PRE-POST)
n <- length(difference)
K <- length(which(difference>0))
binom.test(K,n,alternative="greater")


