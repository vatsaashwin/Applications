#Solution 2

ex0112  # View the Diet data.

# a) Side by side boxplot:
qplot(Diet, BP, data=ex0112, geom="boxplot")

# b) Calculating the observed value of the 
with(ex0112,(mean(BP[Diet=="FishOil"]))) - with(ex0112,(mean(BP[Diet=="RegularOil"])))

with(ex0112,(sd(BP[Diet=="FishOil"]))) - with(ex0112,(sd(BP[Diet=="RegularOil"])))
with(ex0112,(sd(BP[Diet=="FishOil"])))
with(ex0112,(mean(BP[Diet=="RegularOil"])))

# c) two sided t-test
t.test(BP~Diet,data=ex0112,var.equal=TRUE)


