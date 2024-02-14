print("welcome to the tip calculator")
total_bill= float (input("What was the total bill ? $ "))
#print(total_bill)
tip_percentage = float(input("what was the percentage you want to give a tip on your bill ? % "))
#print(tip_percentage)
split_bill = float(input("How many person in which bill going to be split ? "))
#print(split_bill)
50/100
p1 = tip_percentage / 100 
p2 = p1 * total_bill
p3 = p2 + total_bill
p4 = p3 / split_bill
print(p4)