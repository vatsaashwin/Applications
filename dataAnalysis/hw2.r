group1 <- subset(ex0112, Diet=="FishOil")
sample.mean <- mean(group1$BP)
sample.mean

sample.sd <- sd(group1$BP)
sample.sd

n <- length(group1$BP)
n

qt(0.975, 6)

t.test(PctChange~SpeedLimit,data = ex0223,var.equal=TRUE)
t.test(group1$BP)

ex0223
qplot(SpeedLimit, PctChange, data=ex0223, geom="boxplot")

t.test(PctChange~SpeedLimit,data = ex0223,var.equal=TRUE, alternative="greater")
pt(2.97, 6)
1-pt(2.97, 6)


pt(2.97, 6) # Area under the t_14 curve to the left of 3.228928
1-pt(2.97, 6) # Area to the right.
2*(1-pt(2.97, 6)) # Two-sided p-value.
2*pt(2.97, 6, lower.tail=FALSE) # Another way to get the same thing.

# 
# 
# with(ex0112,(sd(BP)))

# 
# sample.mean <- mean(BP) 
# sample.mean <- mean(group1$BP)
# 
# 
# ex0223
# 
# t.test(PctChange~SpeedLimit,data = ex0223,var.equal=TRUE)